const ItemSlotCapabilityTrait = Java.loadClass("com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait")
const FluidTankCapabilityTrait = Java.loadClass("com.lowdragmc.mbd2.common.trait.fluid.FluidTankCapabilityTrait")
const ItemStackInventory = Java.loadClass("net.dries007.tfc.common.recipes.inventory.ItemStackInventory")
const HeatingRecipe = Java.loadClass("net.dries007.tfc.common.recipes.HeatingRecipe")
const mbd2$FluidStack = Java.loadClass("com.lowdragmc.lowdraglib.side.fluid.FluidStack")

// 全局消息防重复缓存
let messageCooldown = {}
let lastCleanupTime = Date.now()
const CLEANUP_INTERVAL = 5 * 60 * 1000 // 每5分钟清理一次
const ENTRY_MAX_AGE = 10 * 60 * 1000  // 条目最大存活时间10分钟
const MAX_BURN_TIME = 24000 // 20分钟最大燃烧时间（20 * 60 * 20 = 24000）

// 燃料配置
const FUEL_CONFIG = {
    // 燃料ID: 每单位增加的燃烧时间(tick)
    "immersiveengineering:coal_coke": 2400, // 1分钟 = 1200 tick
    "tfc:ore/bituminous_coal": 2400,
    "tfc:ore/lignite": 2400,
    "minecraft:charcoal": 1200,
    "kubejs:charcoal_briquette": 6000,
    "kubejs:coal_briquette": 216000,
    "kubejs:coke_briquette": 216000
}

// 点火工具配置
const FLINT_AND_STEEL_IDS = [
    "minecraft:flint_and_steel",
    "artisanal:metal/flint_and/black_steel",
    "artisanal:metal/flint_and/blue_steel",
    "artisanal:metal/flint_and/red_steel",
    "artisanal:stone/flint_and/pyrite",
    "artisanal:stone/flint_and/cut_pyrite"
]

function canMeltToCastIron(stack) {
    if (stack.isEmpty()) return false
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return false
    let displayOutputFluid = recipe.displayOutputFluid
    return displayOutputFluid && displayOutputFluid.fluid && displayOutputFluid.fluid.isSame("tfc:metal/cast_iron")
}

function canMeltToNickel(stack) {
    if (stack.isEmpty()) return false
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return false
    let displayOutputFluid = recipe.displayOutputFluid
    return displayOutputFluid && displayOutputFluid.fluid && displayOutputFluid.fluid.isSame("tfc:metal/nickel")
}

function canMeltToSupportedFluid(stack) {
    if (stack.isEmpty()) return false
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return false
    let displayOutputFluid = recipe.displayOutputFluid
    if (!displayOutputFluid || !displayOutputFluid.fluid) return false
    
    // 检查是否是支持的流体类型
    return displayOutputFluid.fluid.isSame("tfc:metal/cast_iron") || 
           displayOutputFluid.fluid.isSame("tfc:metal/nickel")
}

function getMeltedFluidAmount(stack) {
    if (stack.isEmpty()) return 0
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return 0
    let result = recipe.assembleFluid(new ItemStackInventory(stack))
    return result ? result.amount : 0
}

function getMeltedFluidType(stack) {
    if (stack.isEmpty()) return null
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return null
    let result = recipe.assembleFluid(new ItemStackInventory(stack))
    return result ? result.fluid : null
}

function isCoke(stack) {
    if (stack.isEmpty()) return false
    return stack.id == "immersiveengineering:coal_coke"
}
function isStick(stack) {
    if (stack.isEmpty()) return false
    return stack.id == "minecraft:stick"
}
function isFlintAndSteel(stack) {
    if (stack.isEmpty()) return false
    return FLINT_AND_STEEL_IDS.includes(stack.id.toString())
}
function isFuelItem(stack) {
    if (stack.isEmpty()) return false
    return FUEL_CONFIG.hasOwnProperty(stack.id.toString())
}
function getFuelBurnTime(stack) {
    if (stack.isEmpty()) return 0
    let fuelId = stack.id.toString()
    return FUEL_CONFIG[fuelId] || 0
}

// 清理过期的冷却记录
function cleanupExpiredCooldowns() {
    const now = Date.now()
    // 检查是否需要执行清理
    if (now - lastCleanupTime < CLEANUP_INTERVAL) {
        return
    }
    
    lastCleanupTime = now
    const entriesBefore = Object.keys(messageCooldown).length
    
    // 清理过期的条目
    for (const playerId in messageCooldown) {
        if (now - messageCooldown[playerId] > ENTRY_MAX_AGE) {
            delete messageCooldown[playerId]
        }
    }
    
    const entriesAfter = Object.keys(messageCooldown).length
    const removedCount = entriesBefore - entriesAfter

}

// 发送消息的函数，带有1秒冷却时间
function sendCooldownMessage(player, message) {
    const playerId = player.id
    const currentTime = Date.now()
    
    // 执行定期清理
    cleanupExpiredCooldowns()
    
    // 检查是否有冷却时间
    if (messageCooldown[playerId] && currentTime - messageCooldown[playerId] < 1000) {
        return false // 冷却时间内，不发送消息
    }
    
    // 发送消息并记录时间
    player.sendSystemMessage(message)
    messageCooldown[playerId] = currentTime
    return true
}

MBDMachineEvents.onStructureFormed("mbd2:bloomery", e => {
    let event = e.event
    const { machine } = event
    const { customData } = machine
    
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let inputTrait = machine.getTraitByName("item_input_slot")
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let fuelTrait = machine.getTraitByName("coal_coke_input_slot")
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fuelStorage = fuelTrait ? fuelTrait.storage : null
    let fluidStorage = inputFluidTrait.storages[0]

    // 设置物品过滤器：允许可加热为铸铁液或镍液的物品
    storage.setFilter((stack) => canMeltToSupportedFluid(stack))
    
    // 设置燃料槽过滤器：只允许燃料物品
    if (fuelStorage) {
        fuelStorage.setFilter((stack) => isFuelItem(stack))
    }
})

MBDMachineEvents.onRightClick('mbd2:bloomery', (e) => {
    let event = e.event
    const { machine, player, heldItem } = event
    const { customData } = machine
    
    // 获取当前时间戳
    let currentTime = Date.now()
    let lastProcessTime = customData.getLong("last_process_time") || 0
    
    // 如果距离上次处理时间小于1000ms，则跳过（避免重复执行）
    if (currentTime - lastProcessTime < 1000) {
        // 只更新动画，不执行其他逻辑
        player.swing()
        return
    }
    
    // 更新最近处理时间戳
    customData.putLong("last_process_time", currentTime)
    
    // 1. 先处理木棍检测
    if (isStick(heldItem)) {
        // 直接读取最新的燃烧时间
        let burnTime = customData.getInt("burn_time") || 0
        if (burnTime > 0) {
            let burnSeconds = Math.floor(burnTime / 20)
            let minutes = Math.floor(burnSeconds / 60)
            let seconds = burnSeconds % 60
            // 直接发送消息，不使用防重复
            player.sendSystemMessage(`锻铁炉剩余燃烧时间: ${minutes}分${seconds}秒`)
        }
        player.swing()
        return
    }
    
    // 2. 处理燃料添加
    if (isFuelItem(heldItem)) {
        let currentBurnTime = customData.getInt("burn_time") || 0
        let fuelCount = heldItem.count
        let fuelBurnTime = getFuelBurnTime(heldItem)
        let addedTime = fuelCount * fuelBurnTime

        // 检查加入后是否会超出上限
        if (currentBurnTime + addedTime > MAX_BURN_TIME) {
            sendCooldownMessage(player, `添加燃料会导致燃烧时间超过上限！`)
            player.swing()
            return
        }
        
        // 计算新的燃烧时间，不超过上限（这里已经有上面的检查，但为了安全还是加上限制）
        let newBurnTime = Math.min(currentBurnTime + addedTime, MAX_BURN_TIME)
        customData.putInt("burn_time", newBurnTime) 
        
        // 消耗所有燃料
        heldItem.shrink(fuelCount)

        // 显示添加燃料后的燃烧时间
        let burnSeconds = Math.floor(newBurnTime / 20)
        let minutes = Math.floor(burnSeconds / 60)
        let seconds = burnSeconds % 60
        let addedSeconds = Math.floor(addedTime / 20)
        let addedMinutes = Math.floor(addedSeconds / 60)
        let remainingSeconds = addedSeconds % 60
        sendCooldownMessage(player, `添加${fuelCount}个燃料，增加${addedMinutes}分${remainingSeconds}秒燃烧时间`)
        player.swing()
        return
    }
    
    // 3. 处理打火石点火
    if (isFlintAndSteel(heldItem)) {
        // 防止重复启动（检查机器是否正在加热或熔化）
        if (customData.getInt("heat_time") > 0 || customData.getBoolean("is_melting")) {
            sendCooldownMessage(player, "锻铁炉已经在运行中")
            player.swing()
            return
        }
        
        let currentBurnTime = customData.getInt("burn_time") || 0
        if (currentBurnTime <= 0) {
            // 检查燃料槽是否有燃料
            let hasFuelInSlot = false
            /**@type {Internal.ItemSlotCapabilityTrait} */
            let fuelTrait = machine.getTraitByName("coal_coke_input_slot")
            if (fuelTrait) {
                let fuelStorage = fuelTrait.storage
                for (let i = 0; i < fuelStorage.getSlots(); i++) {
                    let stackInSlot = fuelStorage.getStackInSlot(i)
                    if (isFuelItem(stackInSlot) && stackInSlot.count > 0) {
                        hasFuelInSlot = true
                        break
                    }
                }
            }
            
            if (!hasFuelInSlot) {
                sendCooldownMessage(player, "没有剩余燃料，请先在燃料槽中添加燃料")
                player.playSound("minecraft:block.fire.extinguish")
                player.swing()
                return
            } else {
                // 有燃料在燃料槽中，但不提示，继续点火流程
                // 燃料会在tick事件中自动消耗
            }
        }
        
        // 检查机器中是否有可熔化矿石
        /**@type {Internal.ItemSlotCapabilityTrait} */
        let inputTrait = machine.getTraitByName("item_input_slot")
        let storage = inputTrait.storage
        
        let hasMeltableItem = false
        for (let i = 0; i < storage.getSlots(); i++) {
            let stackInSlot = storage.getStackInSlot(i)
            if (canMeltToSupportedFluid(stackInSlot)) {
                hasMeltableItem = true
                break
            }
        }
       
        // 消耗打火石1耐久
        heldItem.hurtAndBreak(1, player, (player) => {
            // 打火石损坏时的回调
            player.broadcastBreakEvent(player.getUsedItemHand())
        })
        
        // 启动加热过程
        customData.putInt("heat_time", 40) // 40tick = 2秒暖机
        customData.putBoolean("is_melting", false) // 未开始溶解
        customData.putInt("melting_timer", 20) // 溶解计时器改为20tick（1秒一次）
        
        // 设置燃烧状态为已启动
        customData.putBoolean("burn_started", true)
        
        // 修改：点火后设置为 working 状态，而不是 heating
        machine.setMachineState("working")
        player.playSound("minecraft:item.flintandsteel.use")
        sendCooldownMessage(player, "点火成功，锻铁炉开始熔化矿石...")
        player.swing()
        return
    }
    
})

MBDMachineEvents.onTick("mbd2:bloomery", e => {
    let event = e.event
    const { machine } = event
    const { customData } = machine
    
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let inputTrait = machine.getTraitByName("item_input_slot")
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let fuelTrait = machine.getTraitByName("coal_coke_input_slot")
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fuelStorage = fuelTrait ? fuelTrait.storage : null
    let fluidStorage = inputFluidTrait.storages[0]
    
    let heatTime = customData.getInt("heat_time")
    let isMelting = customData.getBoolean("is_melting")
    let meltingTimer = customData.getInt("melting_timer")
    let burnTime = customData.getInt("burn_time") || 0
    let burnStarted = customData.getBoolean("burn_started") || false
    let fuelCheckTimer = customData.getInt("fuel_check_timer") || 0
    
    // 燃料检查计时器 - 每20tick（1秒）执行一次
    fuelCheckTimer++
    if (fuelCheckTimer >= 20) {
        fuelCheckTimer = 0
        
        // 如果燃料槽存在，并且燃烧时间未满，尝试从燃料槽自动吸取燃料
        if (fuelStorage && burnTime < MAX_BURN_TIME) {
            // 检查燃料槽中是否有燃料
            for (let i = 0; i < fuelStorage.getSlots(); i++) {
                let fuelStack = fuelStorage.getStackInSlot(i)
                if (isFuelItem(fuelStack)) {
                    let fuelBurnTime = getFuelBurnTime(fuelStack)
                    let spaceLeft = MAX_BURN_TIME - burnTime
                    
                    // 如果这个燃料能增加的时间不超过剩余空间
                    if (fuelBurnTime <= spaceLeft) {
                        // 消耗一个燃料
                        fuelStorage.extractItem(i, 1, false)
                        burnTime += fuelBurnTime
                        customData.putInt("burn_time", burnTime)
                        break
                    }
                }
            }
        }
    }
    customData.putInt("fuel_check_timer", fuelCheckTimer)
    
    // 如果燃烧已经开始，并且燃烧时间大于0，则减少燃烧时间
    if (burnStarted && burnTime > 0) {
        burnTime--
        customData.putInt("burn_time", burnTime)
        
        // 燃烧时间结束，停止所有操作
        if (burnTime === 0) {
            customData.putInt("heat_time", 0)
            customData.putBoolean("is_melting", false)
            customData.putBoolean("burn_started", false) // 重置燃烧启动标志
            customData.putInt("melting_timer", 0)
            machine.setMachineState("base")
            // 播放关闭音效
            machine.level.playSound(null, machine.pos.x + 0.5, machine.pos.y + 0.5, machine.pos.z + 0.5, 
                "minecraft:block.fire.extinguish", 1.0, 1.0)
            return
        }
    }
    
    // 新增功能：只要有燃烧时间，机器状态每tick都强制设为working
    if (burnStarted && burnTime > 0) {
        // 强制将状态设置为 working，无论是否在加热阶段
        machine.setMachineState("working")
    }
    
    // 处理暖机阶段（仅在燃烧时间内）
    if (heatTime > 0 && burnTime > 0) {
        // 更新加热时间
        heatTime--
        customData.putInt("heat_time", heatTime)
        
        // 加热完成，开始溶解阶段
        if (heatTime === 0) {
            customData.putBoolean("is_melting", true)
            customData.putInt("melting_timer", 20) // 改为20tick（1秒后处理第一个物品）
        }
    }
    
    // 处理溶解阶段（仅在燃烧时间内）
    if (isMelting && burnTime > 0) {
        // 更新溶解计时器
        if (meltingTimer > 0) {
            meltingTimer--
            customData.putInt("melting_timer", meltingTimer)
            return
        }
        
        // 重置溶解计时器为20tick（1秒）
        customData.putInt("melting_timer", 20)
        
        // 获取当前流体状态
        let currentFluid = fluidStorage.fluid
        let currentAmount = 0
        let currentFluidType = null
        
        if (currentFluid && currentFluid.fluid) {
            try {
                currentFluidType = currentFluid.fluid
                currentAmount = currentFluid.amount
            } catch(e) {
                // 流体类型检查失败，可能是空槽
                currentFluidType = null
                currentAmount = 0
            }
        }
        
        // 寻找可溶解物品，优先处理与当前流体类型匹配的
        for (let i = 0; i < storage.getSlots(); i++) {
            let stackInSlot = storage.getStackInSlot(i)
            if (canMeltToSupportedFluid(stackInSlot)) {
                let fluidAmount = getMeltedFluidAmount(stackInSlot)
                let fluidType = getMeltedFluidType(stackInSlot)
                
                if (fluidAmount > 0 && fluidType) {
                    // 检查流体槽容量
                    let canFill = false
                    
                    if (currentAmount === 0) {
                        // 流体槽为空，可以填充任何类型
                        canFill = true
                    } else if (currentFluidType && fluidType.isSame(currentFluidType)) {
                        // 流体类型相同，检查容量
                        if (currentAmount + fluidAmount <= fluidStorage.capacity) {
                            canFill = true
                        }
                    }
                    
                    if (canFill) {
                        // 消耗物品
                        storage.extractItem(i, 1, false)
                        
                        // 填充流体 - 完全参考原始代码方式
                        machine.getCapability(ForgeCapabilities.FLUID_HANDLER).ifPresent(handler => {
                            handler.fill(Fluid.of(fluidType, fluidAmount), "execute")
                        })
                        break // 只处理一个物品，然后等待下一轮
                    }
                }
            }
        }
    } else if (isMelting && burnTime <= 0) {
        // 燃烧时间结束，停止熔化
        customData.putBoolean("is_melting", false)
        customData.putInt("melting_timer", 0)
        // 重置燃烧启动标志
        customData.putBoolean("burn_started", false)
    }
})