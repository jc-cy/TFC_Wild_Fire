// ============================================
// 七属性经验系统 — gain_exp.js
// 属性：力量(strength)、技艺(skill)、体力(endurance)
//       生命(health)、集中(focus)、敏捷(agility)、耐力(stamina)
// ============================================

// ---- 安全读写经验值 ----
// player.persistentData.getDouble(key) — 读取Double值，键不存在时返回NaN
// player.persistentData.putDouble(key, val) — 写入Double值
// NaN检测：val !== val 是Rhino中唯一可靠的NaN判断方式
function getExp(player, key) {
    let val = player.persistentData.getDouble(key)
    return (val !== val) ? 0 : val
}
function setExp(player, key, val) {
    player.persistentData.putDouble(key, (val !== val) ? 0 : val)
}

const showExpGainMessages = true
const expGainFlushTicks = 100

// ---- 升级公式 ----
// MoreAttributes.getLevel(player, attrName) — 获取属性等级
// MoreAttributes.upgrade(player, attrName, amount) — 提升属性等级
function strengthUpExp(lv) { return 1.7 * lv * lv + 11 * lv + 736 }
function skillUpExp(lv) { return 1.5 * lv * lv + 10 * lv + 730 }
function enduranceUpExp(lv) { return 70 * lv * lv+700 }
function healthUpExp(lv) { return 0.5 * lv * lv + 17 * lv + 120 }
function focusUpExp(lv) { return 0.5 * lv * lv + 17 * lv + 715 }
function agilityUpExp(lv) { return 1.7 * lv * lv + 11 * lv + 736 }
function staminaUpExp(lv) { return 1.5 * lv * lv + 10 * lv + 730 }

const attrNames = {
    strength: '力量',
    skill: '技艺',
    endurance: '体力',
    health: '生命',
    focus: '集中',
    agility: '敏捷',
    stamina: '耐力'
}

const upExpFns = {
    strength: strengthUpExp,
    skill: skillUpExp,
    endurance: enduranceUpExp,
    health: healthUpExp,
    focus: focusUpExp,
    agility: agilityUpExp,
    stamina: staminaUpExp
}

function notifyLevelUp(player, attrName, oldLevel, newLevel) {
    const name = attrNames[attrName] || attrName
    player.setStatusMessage(Component.literal(`§6§l${name}升级! §eLv.${oldLevel} -> Lv.${newLevel}`))
}

function roundExp(val) {
    return Math.round(val * 100) / 100
}

function getDamageAmount(event) {
    let damage = event.damage
    if (damage === undefined || damage === null) damage = event.amount
    if ((damage === undefined || damage === null) && typeof event.getDamage === 'function') damage = event.getDamage()
    return (damage !== damage || damage === undefined || damage === null) ? 0 : damage
}

function notifyExpGain(player, attrName, expGain, currentExp) {
    if (!showExpGainMessages || expGain <= 0) return
    const name = attrNames[attrName] || attrName
    const upExpFn = upExpFns[attrName]
    const currentLevel = MoreAttributes.getLevel(player, attrName) || 10
    const upExp = upExpFn ? upExpFn(currentLevel) : 0
    const remaining = Math.max(0, upExp - currentExp)
    const progressText = upExp > 0 ? `§7(当前: ${roundExp(currentExp)}/${roundExp(upExp)}, 距离升级: ${roundExp(remaining)})` : `§7(当前: ${roundExp(currentExp)})`
    player.tell(`§a+${roundExp(expGain)} §2${name}经验 ${progressText}`)
}

function getExpNotifyTick(player) {
    if (player.level && player.level.time !== undefined) return player.level.time
    return player.age
}

function addBufferedExpGain(player, attrName, expGain) {
    if (!showExpGainMessages || expGain <= 0) return
    const amountKey = `${attrName}_exp_gain_buffer`
    const tickKey = `${attrName}_exp_gain_last_flush`
    const buffered = player.persistentData.getDouble(amountKey)
    player.persistentData.putDouble(amountKey, ((buffered !== buffered) ? 0 : buffered) + expGain)
    const currentTick = getExpNotifyTick(player)
    const lastFlush = player.persistentData.getInt(tickKey)
    if (lastFlush <= 0 || currentTick < lastFlush) {
        player.persistentData.putInt(tickKey, currentTick)
        return
    }
    if (currentTick - lastFlush < expGainFlushTicks) return
    const total = player.persistentData.getDouble(amountKey)
    if (total > 0) {
        notifyExpGain(player, attrName, total, getExp(player, `${attrName}_exp`))
        player.persistentData.putDouble(amountKey, 0)
    }
    player.persistentData.putInt(tickKey, currentTick)
}

// 通用升级检查
function tryLevelUp(player, attrName, expKey, upExpFn) {
    let currentExp = getExp(player, expKey)
    let currentLevel = MoreAttributes.getLevel(player, attrName) || 10
    let safety = 0
    while (currentExp >= upExpFn(currentLevel) && safety < 100) {
        const upExp = upExpFn(currentLevel)
        MoreAttributes.upgrade(player, attrName, 1)
        currentExp -= upExp
        setExp(player, expKey, currentExp)
        notifyLevelUp(player, attrName, currentLevel, currentLevel + 1)
        currentLevel++
        safety++
    }
}

// ---- 负重比例辅助函数 ----
function getWeightRatio(player) {
    const maxW = player.getAttributeValue("more_attributes:equip_load_max")
    const curW = player.getAttributeValue("more_attributes:equip_load_current")
    return maxW > 0 ? curW / maxW : 0
}

// ---- TFC食物相关类 ----
// 在 ItemEvents.foodEaten 中按需加载

// ============================================
// 事件监听
// ============================================

// ---- 力量：攻击伤害经验 ----
// EntityEvents.hurt — 实体受伤事件
//   e.entity — 受伤的实体
//   e.source — 伤害来源
//   e.source.player — 造成伤害的玩家（如果是玩家攻击）
//   e.damage — 伤害值
//   e.entity.isPlayer() — 判断受伤实体是否为玩家
EntityEvents.hurt(e => {
    const { entity, source } = e
    if (!source || !source.player) return

    // ---- 力量：玩家攻击造成伤害 ----
    // 经验值 = 伤害值 × 3
    {
        const strDamage = getDamageAmount(e)
        if (strDamage > 0) {
            let strExpGain = strDamage * 3
            let strCurrentExp = getExp(source.player, 'strength_exp')
            strCurrentExp += strExpGain
            setExp(source.player, 'strength_exp', strCurrentExp)
            notifyExpGain(source.player, "strength", strExpGain, strCurrentExp)
            tryLevelUp(source.player, "strength", 'strength_exp', strengthUpExp)
            console.log("力量打怪", strCurrentExp)
        }
    }
})
// ---- 力量：挖掘方块经验 ----
// BlockEvents.broken — 方块被破坏事件
//   e.entity — 破坏方块的玩家
//   e.block — 被破坏的方块
//   block.blockState.destroySpeed — 方块硬度（挖掘时间）
//   经验值 = min(硬度×2, 30)，硬度0时给1点保底经验
BlockEvents.broken(e => {
    const player = e.entity
    if (!player || !player.isPlayer()) return
    const block = e.block
    const hardness = block.blockState.getDestroySpeed(block.level, block.pos)
    // NaN检查：destroySpeed可能返回NaN
    const safeHardness = (hardness !== hardness) ? 0 : hardness
    if (safeHardness < 0) return
    let expGain = safeHardness > 0 ? Math.min(safeHardness * 2, 30) / 3 : 1 / 3
    let currentExp = getExp(player, 'strength_exp')
    currentExp += expGain
    setExp(player, 'strength_exp', currentExp)
    notifyExpGain(player, "strength", expGain, currentExp)
    tryLevelUp(player, "strength", 'strength_exp', strengthUpExp)


    console.log("力量挖掘", currentExp)
})




// ---- 耐力：玩家受伤经验 ----
// 经验值 = 受到伤害值 × 0.5
EntityEvents.hurt(e => {
    const { entity, source } = e
    // 只处理玩家
    if (!entity.isPlayer()) return
    // 排除自己造成的伤害
    if (source && source.player) {
        if (entity.uuid.toString() === source.player.uuid.toString()) return
    }
    const staDamage = getDamageAmount(e)
    if (staDamage <= 0) return
    // 当前游戏 tick
    const nowTick = e.server.tickCount
    // 读取受伤经验冷却
    const nextHurtExpTick = entity.persistentData.getInt("stamina_hurt_exp_cd")
    // 冷却期间不触发经验
    if (nowTick < nextHurtExpTick) return
    // 每点伤害获得 0.5 经验，单次最多 25
    let staExpGain = Math.min(staDamage * 0.5, 25)
    let staCurrentExp = getExp(entity, 'stamina_exp')
    staCurrentExp += staExpGain

    setExp(entity, 'stamina_exp', staCurrentExp)
    notifyExpGain(entity, "stamina", staExpGain, staCurrentExp)
    tryLevelUp(entity, "stamina", 'stamina_exp', staminaUpExp)
    // 设置冷却：20 tick = 1 秒
    entity.persistentData.putInt("stamina_hurt_exp_cd", nowTick + 20)
    console.log(`耐力受伤 +${staExpGain}，当前经验：${staCurrentExp}`)
})



// ---- 玩家登录：初始化位置和食物记录 ----
// PlayerEvents.loggedIn — 玩家登录事件
PlayerEvents.loggedIn(e => {
    const player = e.player
    player.persistentData.putInt('endurance_last_food', player.foodLevel)
    player.persistentData.putInt('stamina_last_food', player.foodLevel)
    player.persistentData.putInt('stamina_hurt_exp_cd', 0)
    player.persistentData.putDouble('health_last_hp', player.health)
})

// ---- 技艺：合成物品经验 ----
// ItemEvents.crafted — 物品合成事件
//   e.entity — 合成的玩家
//   e.result — 合成结果物品
//   result.count — 物品数量
//   result.id — 物品ID
// 经验值 = 数量 × 2（TFC物品额外×3）
ItemEvents.crafted(e => {
    const player = e.player || e.entity
    if (!player || !player.isPlayer()) return

    // 合成产物，优先用 e.item
    const result = e.item
    if (!result) return

    const count = result.count || 1
    const id = String(result.id)

    let expGain = count * 2

    if (id.includes('tfc:')) {
        expGain *= 3
    }

    let currentExp = getExp(player, 'skill_exp')
    currentExp += expGain

    setExp(player, 'skill_exp', currentExp)
    notifyExpGain(player, "skill", expGain, currentExp)
    tryLevelUp(player, "skill", 'skill_exp', skillUpExp)

    console.log(`技巧合成 +${expGain}，当前经验：${currentExp}，物品：${id} x${count}`)
})

// ---- 每tick事件 ----
// PlayerEvents.tick — 每tick触发（每秒20tick）
//   e.player — 当前玩家
//   player.age — 玩家已存在的tick数
PlayerEvents.tick(e => {
    const { player } = e

    // ---- 体力：行走 + 饥饿消耗 ----
    // 行走：每秒根据速度获得体力经验
    //   经验 = 速度 × 5 × 负重倍率（负重比例>1时乘min(负重比例,3)，否则乘1）
    // 饥饿消耗：饥饿值下降时获得等量经验
    {
        const endSpeed = player.getAttributeValue("minecraft:generic.movement_speed")
        const endMaxWeight = player.getAttributeValue("more_attributes:equip_load_max")
        const endCurrentWeight = player.getAttributeValue("more_attributes:equip_load_current")
        const endWeightRatio = Math.min(endMaxWeight > 0 ? endCurrentWeight / endMaxWeight : 0, 3)
        const currentPos = { x: player.getX(), y: player.getY(), z: player.getZ() }//当前位置
        //const speedRounded = Math.round(speed * 100) / 100//限制小数

        const wasOnGround = player.persistentData.getInt('agility_last_on_ground') === 1
        const isOnGround = player.onGround()
        const lastJumpY = player.persistentData.getDouble('agility_last_y')

        if (!player.isPassenger() && wasOnGround && !isOnGround && currentPos.y > lastJumpY + 0.01) {
            const ratio = endMaxWeight > 0 ? endCurrentWeight / endMaxWeight : 0
            if (ratio <= 1.0) {
                let penalty = 1.0
                if (ratio > 0.4) {
                    const overPercent = Math.ceil((ratio - 0.4) * 10)
                    penalty = Math.max(0, 1 - overPercent * 0.1)
                }
                if (penalty > 0) {
                    const expGain = 1.5 * penalty / 4
                    let currentExp = getExp(player, 'agility_exp')
                    currentExp += expGain
                    setExp(player, 'agility_exp', currentExp)
                    notifyExpGain(player, "agility", expGain, currentExp)
                    tryLevelUp(player, "agility", 'agility_exp', agilityUpExp)
                    player.persistentData.putInt('agility_jump_move_ignore_until', player.age + 10)
                }
            }
        }

        if (!player.isPassenger() && endWeightRatio > 1 && endSpeed > 0 && lastPos && !player.isFallFlying()) {

            const distance = Math.sqrt(Math.pow((currentPos.x - lastPos.x), 2) + Math.pow((currentPos.z - lastPos.z), 2))//水平移动距离
            let endExpGain = distance * 5 * endWeightRatio
            let endCurrentExp = getExp(player, 'endurance_exp')
            endCurrentExp += endExpGain
            setExp(player, 'endurance_exp', endCurrentExp)
            addBufferedExpGain(player, "endurance", endExpGain)
            tryLevelUp(player, "endurance", 'endurance_exp', enduranceUpExp)
             //console.log("体力走路", endCurrentExp)

        }

        const ignoreMoveAgilityUntil = player.persistentData.getInt('agility_jump_move_ignore_until')
        if (!player.isPassenger() && player.age >= ignoreMoveAgilityUntil && endWeightRatio < 1 && endSpeed > 0 && lastPos && !player.isFallFlying()) {

            const distance = Math.sqrt(Math.pow((currentPos.x - lastPos.x), 2) + Math.pow((currentPos.z - lastPos.z), 2))//水平移动距离
            let endExpGain = distance * Math.max(1 - endWeightRatio, 0) / 4
    
            let endCurrentExp = getExp(player, 'agility_exp')
            endCurrentExp += endExpGain
            setExp(player, 'agility_exp', endCurrentExp)
            addBufferedExpGain(player, "agility", endExpGain)
            tryLevelUp(player, "agility", 'agility_exp', agilityUpExp)
            //console.log("敏捷移动", endCurrentExp)

        }




        lastPos = currentPos
        player.persistentData.putInt('agility_last_on_ground', isOnGround ? 1 : 0)
        player.persistentData.putDouble('agility_last_y', currentPos.y)
        // 饥饿消耗经验
        const lastFood = player.persistentData.getInt('endurance_last_food')
        const currentFood = player.foodLevel

        if (lastFood > 0 && currentFood < lastFood) {
            const foodConsumed = lastFood - currentFood

            let enduranceExp = getExp(player, 'endurance_exp')
            enduranceExp += foodConsumed

            setExp(player, 'endurance_exp', enduranceExp)
            notifyExpGain(player, "endurance", foodConsumed, enduranceExp)
            tryLevelUp(player, "endurance", 'endurance_exp', enduranceUpExp)
            //console.log("饿了", enduranceExp)
        }

        player.persistentData.putInt('endurance_last_food', currentFood)
    }

    // ---- 生命：被动回血经验 ----
    // 检测玩家生命值上升（TFC被动回血约0.1-0.5/秒）
    // hpHealed >= 0.1 时获得经验 = 回血量 × 2
  {
    const hpCurrentHealth = player.health
    const hpLastHealthRaw = player.persistentData.getDouble('health_last_hp')
    const hpLastHealth = (hpLastHealthRaw !== hpLastHealthRaw) ? 0 : hpLastHealthRaw

    if (hpLastHealth > 0 && hpCurrentHealth > hpLastHealth) {
        const hpHealed = hpCurrentHealth - hpLastHealth

        if (hpHealed >= 0.1) {
            let hpExpGain = Math.max(1, Math.round(hpHealed * 2))

            let hpCurrentExp = getExp(player, 'health_exp')
            hpCurrentExp += hpExpGain

            setExp(player, 'health_exp', hpCurrentExp)
            notifyExpGain(player, "health", hpExpGain, hpCurrentExp)
            tryLevelUp(player, "health", 'health_exp', healthUpExp)

             console.log("生命回血", hpCurrentExp)
        }
    }

    player.persistentData.putDouble('health_last_hp', hpCurrentHealth)
}

})

// ---- 生命：食物营养经验 ----
// FoodCapability.get(item) — TFC 静态方法，直接获取物品的 IFood 接口
//   返回 IFood 实例，如果物品没有食物 Capability 则抛出异常
// ifood.getData() — 获取食物的详细数据（FoodData）
// FoodData.nutrient(Nutrient) — 按营养类型获取营养值
//   Nutrient.GRAIN — 谷物, Nutrient.FRUIT — 水果,
//   Nutrient.VEGETABLES — 蔬菜, Nutrient.PROTEIN — 蛋白质, Nutrient.DAIRY — 乳制品
// item.getItem().foodProperties — 获取物品的原版食物属性
// foodProperties.getSaturationModifier() — 饱和度修饰符
// foodProperties.nutrition — 食物恢复的饥饿值
// player.getMaxHealth() — 玩家最大生命值
// 经验值 = (饱食值 + 平均营养值) × 最大生命值 / 10
ItemEvents.foodEaten(e => {
    const { player, item } = e
    const $FoodCapability = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodCapability')
    const $Nutrient = Java.loadClass('net.dries007.tfc.common.capabilities.food.Nutrient')
    let foodData
    try { foodData = $FoodCapability.get(item).getData() } catch (error) { return }
    let nutrition = [foodData.nutrient($Nutrient.GRAIN), foodData.nutrient($Nutrient.FRUIT),
    foodData.nutrient($Nutrient.VEGETABLES), foodData.nutrient($Nutrient.PROTEIN),
    foodData.nutrient($Nutrient.DAIRY)]
    if (!nutrition || nutrition.every(n => n === 0)) return
    let avgNutrition = nutrition.reduce((a, b) => a + b, 0) / nutrition.length
    let foodProperties = item.getItem().foodProperties
    let saturation = Math.round(foodProperties.getSaturationModifier() * foodProperties.nutrition * 2 * 10) / 10
    let expGain = (saturation + avgNutrition) * player.getMaxHealth() / 10
    let currentExp = getExp(player, 'health_exp')
    currentExp += expGain
    setExp(player, 'health_exp', currentExp)
    notifyExpGain(player, "health", expGain, currentExp)
    tryLevelUp(player, "health", 'health_exp', healthUpExp)
    console.log(`吃东西生命 +${expGain}，当前经验：${currentExp}`)
})

// ---- 死亡：经验惩罚 ----
// EntityEvents.death — 实体死亡事件
// 死亡时所有属性扣除当前经验20%
EntityEvents.death(e => {
    const player = e.entity
    if (!player.isPlayer()) return
    const attrs = ['strength', 'skill', 'endurance', 'health', 'focus', 'agility', 'stamina']
    for (const attr of attrs) {
        let currentExp = getExp(player, `${attr}_exp`)
        let loss = currentExp * 0.2
        if (loss > 0) {
            setExp(player, `${attr}_exp`, currentExp - loss)
        }
    }
})
// ---- 集中：弓箭远距离命中经验 10点，距离大于10格才生效 ----
// 放在 server_scripts/custom/gain_exp.js

EntityEvents.hurt(e => {
    const target = e.entity
    const source = e.source

    if (!target || !source) return

    // 获取攻击者
    const player = source.player || source.entity || source.actual

    if (!player || !player.isPlayer()) return

    // 防止自己打自己刷经验
    if (
        target.uuid &&
        player.uuid &&
        target.uuid.toString() === player.uuid.toString()
    ) {
        return
    }

    // 判断是否为箭伤害
    const sourceText = String(source).toLowerCase()

    // 调试用
    // console.log(`hurt source = ${sourceText}`)

    if (!sourceText.includes("arrow")) return

    // 计算玩家与目标距离
    const dx = player.getX() - target.getX()
    const dy = player.getY() - target.getY()
    const dz = player.getZ() - target.getZ()

    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

    // 距离必须大于10格
    if (distance <= 10) return

    const expGain = 10

    let currentExp = getExp(player, 'focus_exp')
    currentExp += expGain

    setExp(player, 'focus_exp', currentExp)
    notifyExpGain(player, "focus", expGain, currentExp)
    tryLevelUp(player, "focus", 'focus_exp', focusUpExp)

    console.log(`弓箭远距离命中，距离:${distance.toFixed(2)}，集中经验 +${expGain}`)
})
