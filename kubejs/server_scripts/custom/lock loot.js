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
const allLockPick = ironLockPick.concat(diamondLockPick).concat(netheriteLockPick).concat(copperLockPick).concat(mediumLockPick).concat(advancedLockPick).concat(crowbar).concat(key).concat(originalKey)
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
BlockEvents.rightClicked(e => {
  const { player, block } = e

  const blockId = block.id;
  if (blockId.endsWith('_crate')) {
    return;
  }
  const isLoot = block.entityData?.LootTable
  // const item = player.getMainHandItem()
  // let value = block.getEntity().persistentData.getInt("Lock")
  // if(item.id === "minecraft:stick"){
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
    //进行开锁
    if (lockValue != 114514) {
      //无钥匙
      if (!allLockPick.includes(lockPick.id)) {
        player.setStatusMessage(Component.translate("message.kubejs.no_lockpick"))
        player.sendData("kubejs_player_playsound", { soundEvent: "minecraft:block.chain.break", volume: 1.0, pitch: 0.8 })
        e.cancel()
      }
      //开锁参数
      let reduceValue, durabilityCost, config
      let currentLevel = player.persistentData.getInt('skill_level') || 10//当前等级
      if (ironLockPick.includes(lockPick.id)) config = lockPickConfigs.iron
      else if (diamondLockPick.includes(lockPick.id)) config = lockPickConfigs.diamond
      else if (netheriteLockPick.includes(lockPick.id)) config = lockPickConfigs.netherite
      else if (copperLockPick.includes(lockPick.id)) config = lockPickConfigs.copper
      else if (mediumLockPick.includes(lockPick.id)) config = lockPickConfigs.medium
      else if (advancedLockPick.includes(lockPick.id)) config = lockPickConfigs.advanced
      else if (crowbar.includes(lockPick.id)) config = lockPickConfigs.crowbar
      else if (key.includes(lockPick.id)) config = lockPickConfigs.key
      else if (originalKey.includes(lockPick.id)) config = lockPickConfigs.originalKey
      if (config) {
        let levelBoost = (1 + (currentLevel - 10) / 10)
        reduceValue = randomInt(config.reduceValue[0], config.reduceValue[1]) * ((levelBoost > 2) ? 2 : levelBoost)
        durabilityCost = config.durabilityCost
        // player.tell(`reduceValue:${reduceValue}, lockValue:${lockValue}, remainValue:${lockValue - reduceValue}`)
      }
      // 开锁成功
      if (lockValue - reduceValue <= 0) {
        chestData.putInt("Lock", 114514)
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_success"))
        player.sendData("kubejs_player_playsound", { soundEvent: "minecraft:block.note_block.bell", volume: 2.0, pitch: 1.2 })
        // 技巧经验获取
        let currentExp = player.persistentData.getDouble('skill_exp')//当前经验
        let expGain = Math.round(Math.abs(200 - reduceValue) / (currentLevel - 9)) / 10//计算经验
        skillLevelUp(player, currentExp, expGain)
        return
      }
      // 开锁失败
      else {
        lockValue -= reduceValue
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_failure"))
        player.damageHeldItem("main_hand", durabilityCost)
        chestData.putInt("Lock", lockValue)
        player.sendData("kubejs_player_playsound", { soundEvent: "minecraft:block.iron_trapdoor.close", volume: 2.0, pitch: 1.2 })
        // 技巧经验获取
        let currentExp = player.persistentData.getDouble('skill_exp')//当前经验
        let expGain = Math.round(2 * Math.abs(200 - reduceValue) / (currentLevel - 9)) / 10//计算经验
        skillLevelUp(player, currentExp, expGain)
        e.cancel()
      }
    }
  }
})