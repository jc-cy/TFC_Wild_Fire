var mittens2 = /**@type {Internal.ItemStack} */ (null)
PlayerEvents.tick(event => {
    const { player } = event


    let playerData2 = player.persistentData
    if (!playerData2.mapTimer) playerData2.mapTimer = 0
    playerData2.mapTimer++
    if (playerData2.mapTimer < 11) return
    playerData2.mapTimer = 0
    const waypoints = ['minecraft:compass']
    const minimap = ['minecraft:spyglass']
    //!player.mainHandItem.isEmpty() 
   /* $CuriosApi.getCuriosHelper().findFirstCurio(player, 'kubejs:glove').ifPresent(slot => {
        mittens2 = slot.stack()
    })
    player.tell(`${mittens2}`)*/
    if (!player.isCreative() && !player.isSpectator()) {//没有任何地图

        player.potionEffects.add('xaerominimap:no_cave_maps', -1, 1, false, false)//禁用洞穴地图
        player.potionEffects.add('xaerominimap:no_entity_radar', -1, 1, false, false)//禁用实体雷达

        player.potionEffects.add('xaeroworldmap:no_cave_maps', -1, 1, false, false)//禁用洞穴地图
        player.potionEffects.add('xaeroworldmap:no_world_map', -1, 1, false, false)//禁用世界地图

        if (waypoints.includes(player.mainHandItem.id) || waypoints.includes(player.offHandItem.id)) {
            //player.tell('手持指南针')
            player.removeEffect('xaerominimap:no_waypoints')//启用路标
        } else {
            player.potionEffects.add('xaerominimap:no_waypoints', -1, 1, false, false)//禁用路标
            //player.tell('没有指南针')

        }
        if (minimap.includes(player.mainHandItem.id) || minimap.includes(player.offHandItem.id)) {
            //player.tell('手持望远镜')
            player.removeEffect('xaerominimap:no_minimap')//启用小地图
        } else {
            player.potionEffects.add('xaerominimap:no_minimap', -1, 1, false, false)//禁用小地图
            //player.tell('没有望远镜')

        }
    } else {
        player.removeEffect('xaerominimap:no_waypoints')
        player.removeEffect('xaerominimap:no_cave_maps')
        player.removeEffect('xaerominimap:no_entity_radar')
        player.removeEffect('xaerominimap:no_minimap')
        player.removeEffect('xaeroworldmap:no_cave_maps')
        player.removeEffect('xaeroworldmap:no_world_map')
    }


})
/*PlayerEvents.chat(event => {
  const { player } = event;
  if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {
      DISABLED_EFFECTS.forEach(effect => {
          // 移除禁用效果
          player.potionEffects.add(effect, 0,5,false, false);
      });
  }
  if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {}else{
  DISABLED_EFFECTS.forEach(effect => {
    player.potionEffects.add(effect, -1, 1, false, false); 
  })}
});*/
let lastPos = null;
let diffX = null;
let diffY = null;
let diffZ = null;
let distanceRounded = null;
const NOMAP_EFFECT = [
  'xaerominimap:no_minimap',
  'xaeroworldmap:no_world_map',
  'xaerominimap:no_waypoints',
  'xaerominimap:no_cave_maps'
]



// PlayerEvents.loggedIn(event => {//登入给玩家buff
//     const { player } = event;
// if(!player.isCreative()){
//      logged = false
//         player.tell(`你感觉你的体力上升了！当前等级: `);
//   player.setGameMode("spectator")//登陆变成旁观模式
//   player.potionEffects.add('minecraft:blindness', 9999999, 4, false, false);
//   player.potionEffects.add('minecraft:darkness', 9999999, 4, false, false);//给予黑暗和失明
// }

// })

PlayerEvents.respawned(event => {//复活给玩家buff
  const { player } = event;
  player.potionEffects.add("minecraft:hunger", 100, 255, false, false);//饥饿
  player.potionEffects.add("minecraft:blindness", 100, 0, false, false);//失明
  player.potionEffects.add('minecraft:nausea', 100, 0, false, false);//失明
  player.potionEffects.add('minecraft:resistance', 60, 4, false, false);
  player.potionEffects.add('minecraft:slowness', 60, 2, false, false);

});
/*PlayerEvents.tick(event => {
  const { player, item } = event;

  /*if (WildFireAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {return}
  else if(inventory.has(xxx)){return}
  else if (heldItem.id == 'minecraft:spyglass') {
        player.potionEffects.add('xaerominimap:no_minimap', -1, 1, false, false)}
    
  else{
    NOMAP_EFFECT.forEach(a=>{player.potionEffects.add(`${a}`, 5, 5, false, false);/*/





/*ItemEvents.rightClicked(event => {//右键望远镜
      const { player, item } = event;
  // 检查是否右键望远镜
  if (item.id === 'minecraft:spyglass') {
      player.potionEffects.add('xaerominimap:no_minimap',0,5,false, false);//开启小地图
 }})

// 玩家松开右键
PlayerEvents.tick(event => {
  const { player } = event;
  const heldItem = player.getMainHandItem();

  if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {
  } else if (heldItem.id !== 'minecraft:spyglass') {
      player.potionEffects.add('xaerominimap:no_minimap', -1, 1, false, false);
  }
  
});
// 玩家手持指南针
let lastTriggerTime = 0;
PlayerEvents.tick(event => {
  const { player } = event;
  
  const currentTime = Date.now()


  if (currentTime - lastTriggerTime < 5000) { // 5秒冷却
      return;
      
  }
  lastTriggerTime = currentTime;
  if (FishTFCAdvancement.checkAdvancement(player, "ad_astra:fishtfcmap")) {}else{
 
  const heldItem = player.getMainHandItem()
  const offHandItem = player.getOffHandItem()

  // 检查是否手持指南针
  if (heldItem.id === 'minecraft:compass' || offHandItem.id === 'minecraft:compass') {
    player.potionEffects.add('xaerominimap:no_waypoints', 0, 5);// 移除路径点的禁用效果
    
  
  } else {
    player.potionEffects.add('xaerominimap:no_waypoints', -1,1, false, false);
  }
    }
})
//设置效果
const NOMAP_EFFECT = [
  'xaerominimap:no_minimap',
  'xaeroworldmap:no_world_map',
  'xaerominimap:no_waypoints',
  'xaerominimap:no_cave_maps'
]
//玩家登录给予debuff
PlayerEvents.loggedIn(e => {
  const { player } = e;
  player.sendSystemMessage(player.entityData.active_effects)

})


ItemEvents.rightClicked(e => {
  if (e.item.id == "minecraft:stick") {
    const { player } = e;
    player.sendSystemMessage(player.getNbt().ActiveEffects)
  }
})*/