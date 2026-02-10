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
