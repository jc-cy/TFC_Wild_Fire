// ============================================
// Forge事件监听 — 必须放在 startup_scripts 中注册
// KubeJS 6 中 ForgeEvents.onEvent 只能在 startup_scripts 使用
// server_scripts 中注册的 Forge 事件不会生效
// 包含：敏捷(跳跃)、集中(法杖施法)、集中(枪械射击)
// ============================================

// ---- 属性中文名映射 ----
const forgeAttrNames = {
    strength: '力量', skill: '技艺', endurance: '体力',
    health: '生命', focus: '集中', agility: '敏捷', stamina: '耐力'
}

// ---- 安全读写经验值 ----
// 与 gain_exp.js 中的 getExp/setExp 逻辑相同，但函数名加 forge 前缀
// 因为 startup_scripts 和 server_scripts 是独立作用域，同名函数会冲突
// player.persistentData.getDouble(key) — 读取Double值，键不存在时返回NaN
// player.persistentData.putDouble(key, val) — 写入Double值
function forgeGetExp(player, key) {
    let val = player.persistentData.getDouble(key)
    return (val !== val) ? 0 : val
}
function forgeSetExp(player, key, val) {
    player.persistentData.putDouble(key, (val !== val) ? 0 : val)
}

const forgeShowExpGainMessages = true

function forgeNotifyLevelUp(player, attrName, oldLevel, newLevel) {
    const name = forgeAttrNames[attrName] || attrName
    player.tell(`§6§l${name}升级! §eLv.${oldLevel} -> Lv.${newLevel}`)
}

function forgeRoundExp(val) {
    return Math.round(val * 100) / 100
}

function forgeTryLevelUp(player, attrName, expKey, upExpFn) {
    let currentExp = forgeGetExp(player, expKey)
    let currentLevel = MoreAttributes.getLevel(player, attrName) || 10
    let safety = 0
    while (currentExp >= upExpFn(currentLevel) && safety < 100) {
        const upExp = upExpFn(currentLevel)
        MoreAttributes.upgrade(player, attrName, 1)
        currentExp -= upExp
        forgeSetExp(player, expKey, currentExp)
        forgeNotifyLevelUp(player, attrName, currentLevel, currentLevel + 1)
        currentLevel++
        safety++
    }
}

// ---- 经验获取提示收集器（按玩家分别收集） ----
// 与 gain_exp.js 中的 expGainMap 独立，因为 startup_scripts 和 server_scripts 作用域隔离
// player.uuid.toString() — 玩家UUID转字符串，用作Map key
// player.setStatusMessage(Component.literal(text)) — 在动作栏显示文本
const forgeExpGainMap = {}

// 添加一条经验获取提示到收集器
function forgeAddExpGain(player, attrName, expGain, upExp) {
    if (!forgeShowExpGainMessages || expGain <= 0) return
    const uuid = player.uuid.toString()
    if (!forgeExpGainMap[uuid]) forgeExpGainMap[uuid] = []
    const name = forgeAttrNames[attrName] || attrName
    const currentExp = forgeGetExp(player, `${attrName}_exp`)
    // NaN保护：显示时如果expGain或currentExp为NaN则显示0
    const safeExpGain = (expGain !== expGain) ? 0 : expGain
    const safeCurrentExp = (currentExp !== currentExp) ? 0 : currentExp
    const remaining = upExp ? Math.max(0, upExp - safeCurrentExp) : 0
    const progressText = upExp ? `§7(当前: ${forgeRoundExp(safeCurrentExp)}/${forgeRoundExp(upExp)}, 距离升级: ${forgeRoundExp(remaining)})` : `§7(当前: ${forgeRoundExp(safeCurrentExp)})`
    player.tell(`§a+${forgeRoundExp(safeExpGain)} §2${name}经验 ${progressText}`)
}

// 将收集到的所有提示一次性显示在玩家动作栏上
function forgeFlushExpGains(player) {
    const uuid = player.uuid.toString()
    const gains = forgeExpGainMap[uuid]
    if (!gains || gains.length === 0) return
    player.setStatusMessage(Component.literal(gains.join('\n')))
    delete forgeExpGainMap[uuid]
}

// ---- 敏捷：跳跃经验 1.5点 ----
// ForgeEvents.onEvent(eventClassName, callback) — 注册 Forge 原生事件监听
//   参数是完整的 Java 类名（含内部类用 $ 分隔）
//   'net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent'
//     — 玩家/生物跳跃时触发的事件（LivingJumpEvent 是 LivingEvent 的内部类）
// 每次跳跃获得1.5点敏捷经验（受负重惩罚影响）
// 负重>90%时经验递减，>100%时不获得经验
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEvent$LivingJumpEvent', e => {
    // e.entity — 触发跳跃事件的实体
    const { entity } = e
    if (!entity.isPlayer()) return
    const player = entity

    // player.isPassenger() — 判断是否在骑乘，骑乘时跳跃不获得经验
    if (player.isPassenger()) return

    // player.getAttributeValue(attributeId) — 获取属性值
    //   "more_attributes:equip_load_max" — 最大负重
    //   "more_attributes:equip_load_current" — 当前负重
    const maxWeight = player.getAttributeValue("more_attributes:equip_load_max")
    const currentWeight = player.getAttributeValue("more_attributes:equip_load_current")
    const ratio = maxWeight > 0 ? currentWeight / maxWeight : 0
    // 超载时不获得经验
    if (ratio > 1.0) return

    // 计算负重惩罚：90%-100%之间经验线性递减
    let penalty = 1.0
    if (ratio > 0.4) {
        const overPercent = Math.ceil((ratio - 0.4) * 10)
        penalty = Math.max(0, 1 - overPercent * 0.1)
    }
    if (penalty <= 0) return

    // 基础1.5点经验 × 负重惩罚
    let expGain = 1.5 * penalty
    let currentExp = forgeGetExp(player, 'agility_exp')
    currentExp += expGain
    forgeSetExp(player, 'agility_exp', currentExp)

    const currentLevel = MoreAttributes.getLevel(player, "agility") || 10
    const upExp = 1.7 * currentLevel * currentLevel + 11 * currentLevel + 36
    forgeAddExpGain(player, "agility", expGain, upExp)
    forgeTryLevelUp(player, "agility", 'agility_exp', lv => 1.7 * lv * lv + 11 * lv + 36)
    forgeFlushExpGains(player)
})

// ---- 集中：法杖施法经验 5点 — Iron's Spells mod ----
// 'io.redspace.ironsspellbooks.api.events.SpellPreCastEvent'
//   — Iron's Spells 模组的事件，玩家施放法术前触发
//   e.entity — 施法的玩家
// 每次施放法术获得5点集中经验
ForgeEvents.onEvent('io.redspace.ironsspellbooks.api.events.SpellPreCastEvent', e => {
    const player = e.entity
    if (!player || !player.isPlayer()) return
    let currentExp = forgeGetExp(player, 'focus_exp')
    currentExp += 5
    forgeSetExp(player, 'focus_exp', currentExp)

    const currentLevel = MoreAttributes.getLevel(player, "focus") || 10
    const upExp = 0.5 * currentLevel * currentLevel + 17 * currentLevel + 15
    forgeAddExpGain(player, "focus", 5, upExp)
    forgeTryLevelUp(player, "focus", 'focus_exp', lv => 0.5 * lv * lv + 17 * lv + 15)
    forgeFlushExpGains(player)
})

// ---- 集中：枪械射击经验 8点 15秒冷却 — Scorched Guns mod ----
// 'top.ribs.scguns.event.GunFireEvent$Post'
//   — Scorched Guns 模组的事件，枪械射击完成后触发
//   GunFireEvent$Post 是 GunFireEvent 的内部类（Post表示射击后）
//   e.entity — 射击的玩家
// player.persistentData.getLong(key) — 读取Long类型的冷却时间戳
// player.persistentData.putLong(key, value) — 写入Long类型的冷却时间戳
// Date.now() — 当前时间戳（毫秒），用于冷却计时
// 每次射击获得8点集中经验，15秒（15000毫秒）冷却防止刷经验
ForgeEvents.onEvent('top.ribs.scguns.event.GunFireEvent$Post', e => {
    const player = e.entity
    if (!player || !player.isPlayer()) return
    const now = Date.now()
    const lastGunTime = player.persistentData.getLong('focus_last_gun_time')
    // 15秒冷却检查
    if (now - lastGunTime >= 15000) {
        let currentExp = forgeGetExp(player, 'focus_exp')
        currentExp += 8
        forgeSetExp(player, 'focus_exp', currentExp)
        player.persistentData.putLong('focus_last_gun_time', now)

        const currentLevel = MoreAttributes.getLevel(player, "focus") || 10
        const upExp = 0.5 * currentLevel * currentLevel + 17 * currentLevel + 15
        forgeAddExpGain(player, "focus", 8, upExp)
        forgeTryLevelUp(player, "focus", 'focus_exp', lv => 0.5 * lv * lv + 17 * lv + 15)
        forgeFlushExpGains(player)
    }
})
