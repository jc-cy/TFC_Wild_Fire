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
const MAX_BURN_TIME = 864000 // 12小时最大燃烧时间
const MIN_EXTRACT_TIME = 12000 // 10分钟 = 10 * 60 * 20 = 12000 tick（铲子提取的最小时间）

//可使用打火石ID列表
const FLINT_AND_STEEL_IDS = [
    "minecraft:flint_and_steel",
    "immersiveengineering:lighter",
    "tfc:flint_and_steel"
]

//可使用铲子ID列表
const SHOVEL_IDS = [
    "minecraft:iron_shovel",
    "minecraft:diamond_shovel",
    "minecraft:netherite_shovel",
    "minecraft:golden_shovel",
    "minecraft:stone_shovel",
    "minecraft:wooden_shovel",
    "tfc:metal/shovel/copper",
    "tfc:metal/shovel/bronze",
    "tfc:metal/shovel/wrought_iron",
    "tfc:metal/shovel/steel",
    "tfc:metal/shovel/black_steel",
    "tfc:metal/shovel/blue_steel",
    "tfc:metal/shovel/red_steel"
]

function canMeltToCastIron(stack) {
    if (stack.isEmpty()) return false
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return false
    let displayOutputFluid = recipe.displayOutputFluid
    return displayOutputFluid && displayOutputFluid.fluid && displayOutputFluid.fluid.isSame("tfc:metal/cast_iron")
}
function isCoke(stack) {
    if (stack.isEmpty()) return false
    return stack.id == "immersiveengineering:coal_coke"
}
function getMeltedFluidAmount(stack) {
    if (stack.isEmpty()) return 0
    let recipe = HeatingRecipe.getRecipe(stack)
    if (!recipe) return 0
    let result = recipe.assembleFluid(new ItemStackInventory(stack))
    return result ? result.amount : 0
}
function isStick(stack) {
    if (stack.isEmpty()) return false
    return stack.id == "minecraft:stick"
}
function isFlintAndSteel(stack) {
    if (stack.isEmpty()) return false
    return FLINT_AND_STEEL_IDS.includes(stack.id.toString())
}
function isShovel(stack) {
    if (stack.isEmpty()) return false
    return SHOVEL_IDS.includes(stack.id.toString())
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
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fluidStorage = inputFluidTrait.storages[0]

    // 设置物品过滤器：只允许可加热为铸铁液的物品
    storage.setFilter((stack) => canMeltToCastIron(stack))
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
        let burnSeconds = Math.floor(burnTime / 20)
        let minutes = Math.floor(burnSeconds / 60)
        let seconds = burnSeconds % 60
        
        // 直接发送消息，不使用防重复
        if (burnTime > 0) {
            player.sendSystemMessage(`锻铁炉剩余燃烧时间: ${minutes}分${seconds}秒`)
        } else {
            player.sendSystemMessage("锻铁炉未点燃")
        }
        player.swing()
        return
    }
    
    // 2. 处理焦煤添加燃料
    if (isCoke(heldItem)) {
        let currentBurnTime = customData.getInt("burn_time") || 0
        let cokeCount = heldItem.count
        let addedTime = cokeCount * 1200 // 每个焦煤增加1分钟（1200tick = 60秒）

        // 检查加入后是否会超出上限
        if (currentBurnTime + addedTime > MAX_BURN_TIME) {
            sendCooldownMessage(player, `添加${cokeCount}个焦煤会导致燃烧时间超过上限！`)
            player.swing()
            return
        }
        
        // 计算新的燃烧时间，不超过上限（这里已经有上面的检查，但为了安全还是加上限制）
        let newBurnTime = Math.min(currentBurnTime + addedTime, MAX_BURN_TIME)
        customData.putInt("burn_time", newBurnTime) 
        
        // 消耗所有焦煤
        heldItem.shrink(cokeCount)

        // 显示添加燃料后的燃烧时间
        let burnSeconds = Math.floor(newBurnTime / 20)
        let minutes = Math.floor(burnSeconds / 60)
        let seconds = burnSeconds % 60
        sendCooldownMessage(player, `添加${cokeCount}个焦煤，增加${cokeCount}分钟燃烧时间`)
        player.swing()
        return
        
        
    }
    
    // 3. 处理铲子提取焦煤（去掉耐久检查）
    if (isShovel(heldItem)) {
        // 获取当前燃烧时间
        let currentBurnTime = customData.getInt("burn_time") || 0
        
        // 检查是否至少有10分钟燃烧时间
        if (currentBurnTime < MIN_EXTRACT_TIME) {
            sendCooldownMessage(player, `剩余燃烧时间小于10分钟，无法再取出焦煤`)
            player.swing()
            return
        }
        
        // 扣除10分钟燃烧时间
        let newBurnTime = currentBurnTime - MIN_EXTRACT_TIME
        customData.putInt("burn_time", newBurnTime)
        
        // 消耗铲子1耐久
        heldItem.hurtAndBreak(1, player, (player) => {
            // 铲子损坏时的回调
            player.broadcastBreakEvent(player.getUsedItemHand())
        })

        // 显示提取后的燃烧时间
        let burnSeconds = Math.floor(newBurnTime / 20)
        let minutes = Math.floor(burnSeconds / 60)
        let seconds = burnSeconds % 60
        player.give(Item.of("immersiveengineering:coal_coke", 10))
        sendCooldownMessage(player, `提取10个焦煤成功`)
        player.swing()
        return
        

    }
    
    // 4. 处理打火石点火
    if (isFlintAndSteel(heldItem)) {
        // 防止重复启动（检查机器是否正在加热或熔化）
        if (customData.getInt("heat_time") > 0 || customData.getBoolean("is_melting")) {
            sendCooldownMessage(player, "锻铁炉已经在运行中")
            player.swing()
            return
        }
        
        // 检查机器中是否有可熔化矿石
        /**@type {Internal.ItemSlotCapabilityTrait} */
        let inputTrait = machine.getTraitByName("item_input_slot")
        let storage = inputTrait.storage
        
        let hasMeltableItem = false
        for (let i = 0; i < storage.getSlots(); i++) {
            let stackInSlot = storage.getStackInSlot(i)
            if (canMeltToCastIron(stackInSlot)) {
                hasMeltableItem = true
                break
            }
        }
        
        if (!hasMeltableItem) {
            sendCooldownMessage(player, "锻铁炉中没有可以熔化的物品")
            player.playSound("minecraft:block.fire.extinguish")
            player.swing()
            return
        }
        
        // 检查当前是否有燃烧时间
        let currentBurnTime = customData.getInt("burn_time") || 0
        if (currentBurnTime <= 0) {
            sendCooldownMessage(player, "没有剩余燃料，请先添加焦煤")
            player.playSound("minecraft:block.fire.extinguish")
            player.swing()
            return
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
        
        machine.setMachineState("heating")
        player.playSound("minecraft:item.flintandsteel.use")
        sendCooldownMessage(player, "点火成功，锻铁炉开始熔化矿石...")
        player.swing()
        return
    }
    
    // 如果既不是木棍、焦煤、铲子也不是打火石，显示提示
    sendCooldownMessage(player, "使用木棍查看剩余燃烧时间，手持焦煤右键增加燃烧时间，使用铲子提取燃料，使用任意打火石点火开始熔炼")
    player.swing()
})

MBDMachineEvents.onTick("mbd2:bloomery", e => {
    let event = e.event
    const { machine } = event
    const { customData } = machine
    
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let inputTrait = machine.getTraitByName("item_input_slot")
    /**@type {Internal.FluidTankCapabilityTrait} */
    let inputFluidTrait = machine.getTraitByName("fluid_tank")

    let storage = inputTrait.storage
    let fluidStorage = inputFluidTrait.storages[0]
    
    let heatTime = customData.getInt("heat_time")
    let isMelting = customData.getBoolean("is_melting")
    let meltingTimer = customData.getInt("melting_timer")
    let burnTime = customData.getInt("burn_time") || 0
    let burnStarted = customData.getBoolean("burn_started") || false
    
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
            machine.setMachineState("idle")
            // 播放关闭音效
            machine.level.playSound(null, machine.pos.x + 0.5, machine.pos.y + 0.5, machine.pos.z + 0.5, 
                "minecraft:block.fire.extinguish", 1.0, 1.0)
            return
        }
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
            machine.setMachineState("working")
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
        
        if (currentFluid && currentFluid.fluid) {
            try {
                // 检查流体类型是否为铸铁液
                if (currentFluid.fluid.isSame("tfc:metal/cast_iron")) {
                    currentAmount = currentFluid.amount
                }
            } catch(e) {
                // 流体类型检查失败，可能是空槽
                currentAmount = 0
            }
        }
        
        // 寻找第一个可溶解物品
        let meltableSlot = -1
        let meltableStack = null
        let fluidAmount = 0
        
        for (let i = 0; i < storage.getSlots(); i++) {
            let stackInSlot = storage.getStackInSlot(i)
            if (canMeltToCastIron(stackInSlot)) {
                meltableSlot = i
                meltableStack = stackInSlot
                fluidAmount = getMeltedFluidAmount(stackInSlot)
                break
            }
        }
        
        // 如果找到可溶解物品
        if (meltableSlot !== -1 && fluidAmount > 0 && meltableStack) {
            // 检查流体槽容量（包括空槽和铸铁液槽）
            let canFill = false
            
            if (currentAmount === 0) {
                canFill = true
            } else {
                // 检查流体类型是否为铸铁液
                try {
                    {
                        // 检查容量是否足够
                        if (currentAmount + fluidAmount <= fluidStorage.capacity) {
                            canFill = true
                        }
                    }
                } catch(e) {
                    canFill = false
                }
            }
            
            if (canFill) {
                storage.extractItem(meltableSlot, 1, false)
                machine.getCapability(ForgeCapabilities.FLUID_HANDLER).ifPresent(handler => {
                    handler.fill(Fluid.of("tfc:metal/cast_iron", fluidAmount), "execute")
                })
            }
        }
    } else if (isMelting && burnTime <= 0) {
        // 燃烧时间结束，停止熔化
        customData.putBoolean("is_melting", false)
        customData.putInt("melting_timer", 0)
        customData.putBoolean("burn_started", false) // 重置燃烧启动标志
        machine.setMachineState("idle")
    }
})