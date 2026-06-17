const ironLockPick = [
  "minecraft:iron_sword",
]

const diamondLockPick = [
  "minecraft:diamond_sword",
]

const netheriteLockPick = [
  "minecraft:netherite_sword",
]

const copperLockPick = [
  "kubejs:bismuth_bronze_lockpick",
  "kubejs:black_bronze_lockpick",
  "kubejs:bronze_lockpick",
  "kubejs:copper_lockpick",
]

const mediumLockPick = [
  "kubejs:cast_iron_lockpick",
  "kubejs:wrought_iron_lockpick",
  "kubejs:steel_lockpick",
]

const advancedLockPick = [
  "kubejs:black_steel_lockpick",
  "kubejs:homemade_lockpick",
]

const crowbar = [
  "kubejs:wrought_iron_crowbar",
  "kubejs:black_steel_crowbar",
  "kubejs:steel_crowbar",
]

const key = [
  "kubejs:brass_simple_key",
  "kubejs:gold_simple_key",
  "kubejs:bismuth_bronze_simple_key",
  "kubejs:black_bronze_simple_key",
  "kubejs:bronze_simple_key",
  "kubejs:copper_simple_key",
]

const originalKey = [
  "kubejs:old_key",
]

const allLockPick = ironLockPick
  .concat(diamondLockPick)
  .concat(netheriteLockPick)
  .concat(copperLockPick)
  .concat(mediumLockPick)
  .concat(advancedLockPick)
  .concat(crowbar)
  .concat(key)
  .concat(originalKey)

const lockPickConfigs = {
  "iron": { reduceValue: [1, 10], durabilityCost: 3 },
  "diamond": { reduceValue: [5, 15], durabilityCost: 2 },
  "netherite": { reduceValue: [10, 20], durabilityCost: 1 },
  "copper": { reduceValue: [3, 15], durabilityCost: 2 },
  "medium": { reduceValue: [5, 20], durabilityCost: 2 },
  "advanced": { reduceValue: [10, 29], durabilityCost: 2 },
  "crowbar": { reduceValue: [50, 139], durabilityCost: 1 },
  "key": { reduceValue: [131, 170], durabilityCost: 1 },
  "originalKey": { reduceValue: [131, 170], durabilityCost: 1 }
}

// 获取开锁经验倍率
function getLockpickExpMultiplier(lockPickId) {
  // 撬棍开锁：x1
  if (crowbar.includes(lockPickId)) return 1

  // 钥匙开锁：x0，不获得经验
  if (key.includes(lockPickId) || originalKey.includes(lockPickId)) return 0

  // 所有开锁器：x0.4
  if (
    ironLockPick.includes(lockPickId) ||
    diamondLockPick.includes(lockPickId) ||
    netheriteLockPick.includes(lockPickId) ||
    copperLockPick.includes(lockPickId) ||
    mediumLockPick.includes(lockPickId) ||
    advancedLockPick.includes(lockPickId)
  ) {
    return 0.4
  }

  return 0
}

// 增加开锁技巧经验
function addLockpickSkillExp(player, lockPickId) {
  const baseExp = 10
  const multiplier = getLockpickExpMultiplier(lockPickId)
  const expGain = baseExp * multiplier

  // 钥匙倍率为 0，不加经验
  if (expGain <= 0) return

  let currentExp = player.persistentData.getDouble('skill_exp')
  if (currentExp !== currentExp) currentExp = 0
  currentExp += expGain
  player.persistentData.putDouble('skill_exp', currentExp)

  const currentLevel = MoreAttributes.getLevel(player, "skill") || 10
  const upExp = 1.5 * currentLevel * currentLevel + 10 * currentLevel + 730
  if (typeof notifyExpGain === 'function') {
    notifyExpGain(player, "skill", expGain, currentExp)
  } else {
    const remaining = Math.max(0, upExp - currentExp)
    player.tell(`§a+${Math.round(expGain * 100) / 100} §2技巧经验 §7(当前: ${Math.round(currentExp * 100) / 100}/${Math.round(upExp * 100) / 100}, 距离升级: ${Math.round(remaining * 100) / 100})`)
  }

  let level = currentLevel
  let safety = 0
  while (currentExp >= (1.5 * level * level + 10 * level + 730) && safety < 100) {
    const needExp = 1.5 * level * level + 10 * level + 730
    MoreAttributes.upgrade(player, "skill", 1)
    currentExp -= needExp
    player.persistentData.putDouble('skill_exp', currentExp)
    player.setStatusMessage(Component.literal(`§6§l技巧升级! §eLv.${level} -> Lv.${level + 1}`))
    level++
    safety++
  }

  // 调试用
  // console.log(`开锁技巧经验 +${expGain}`)
}

BlockEvents.rightClicked(e => {
  const { player, block } = e

  const blockId = block.id

  if (blockId.endsWith('_crate')) {
    return
  }

  const isLoot = block.entityData?.LootTable

  // const item = player.getMainHandItem()
  // let value = block.getEntity().persistentData.getInt("Lock")
  // if (item.id === "minecraft:stick") {
  //   player.tell(`lockValue:${value}`)
  // }

  if (isLoot) {
    const lockPick = player.getMainHandItem()
    let chestData = block.getEntity().persistentData
    let lockValue = chestData.getInt("Lock")

    // 初始化锁值
    if (!lockValue) {
      lockValue = randomInt(50, 100)
      chestData.putInt("Lock", lockValue)
    }

    // 进行开锁
    if (lockValue != 114514) {

      // 无钥匙 / 无开锁工具
      if (!allLockPick.includes(lockPick.id)) {
        player.setStatusMessage(Component.translate("message.kubejs.no_lockpick"))
        player.sendData("kubejs_player_playsound", {
          soundEvent: "minecraft:block.chain.break",
          volume: 1.0,
          pitch: 0.8
        })
        e.cancel()
        return
      }

      // 开锁参数
      let reduceValue = 0
      let durabilityCost = 0
      let config

      let currentLevel = player.persistentData.getInt('skill_level') || 10

      if (ironLockPick.includes(lockPick.id)) config = lockPickConfigs.iron
      else if (diamondLockPick.includes(lockPick.id)) config = lockPickConfigs.diamond
      else if (netheriteLockPick.includes(lockPick.id)) config = lockPickConfigs.netherite
      else if (copperLockPick.includes(lockPick.id)) config = lockPickConfigs.copper
      else if (mediumLockPick.includes(lockPick.id)) config = lockPickConfigs.medium
      else if (advancedLockPick.includes(lockPick.id)) config = lockPickConfigs.advanced
      else if (crowbar.includes(lockPick.id)) config = lockPickConfigs.crowbar
      else if (key.includes(lockPick.id)) config = lockPickConfigs.key
      else if (originalKey.includes(lockPick.id)) config = lockPickConfigs.originalKey

      if (!config) {
        e.cancel()
        return
      }

      let levelBoost = 1 + (currentLevel - 10) / 10
      if (levelBoost > 2) levelBoost = 2

      reduceValue = randomInt(config.reduceValue[0], config.reduceValue[1]) * levelBoost
      durabilityCost = config.durabilityCost

      // player.tell(`reduceValue:${reduceValue}, lockValue:${lockValue}, remainValue:${lockValue - reduceValue}`)

      // 开锁成功
      if (lockValue - reduceValue <= 0) {
        chestData.putInt("Lock", 114514)

        player.setStatusMessage(Component.translate("message.kubejs.lockpick_success"))
        player.sendData("kubejs_player_playsound", {
          soundEvent: "minecraft:block.note_block.bell",
          volume: 2.0,
          pitch: 1.2
        })

        // 技巧经验获取
        // 基础10经验：
        // 开锁器 x0.4 = 4
        // 撬棍 x1 = 10
        // 钥匙 x0 = 0
        addLockpickSkillExp(player, lockPick.id)

        return
      }

      // 开锁失败
      else {
        lockValue -= reduceValue

        player.setStatusMessage(Component.translate("message.kubejs.lockpick_failure"))
        player.damageHeldItem("main_hand", durabilityCost)
        chestData.putInt("Lock", lockValue)

        player.sendData("kubejs_player_playsound", {
          soundEvent: "minecraft:block.iron_trapdoor.close",
          volume: 2.0,
          pitch: 1.2
        })
        e.cancel()
        // 技巧经验获取
        // 基础10经验：
        // 开锁器 x0.4 = 4
        // 撬棍 x1 = 10
        // 钥匙 x0 = 0
        addLockpickSkillExp(player, lockPick.id)

      
      }
    }
  }
})
