//server_scripts
// priority: 9999
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();

// 根据玩家朝向获取对应的旋转字符串
function getRotationFromPlayerFacing(player) {
    let facing = player.getHorizontalFacing();
    switch (facing) {
        case "north": return "counterclockwise_90";
        case "east":  return "none";
        case "south": return "clockwise_90"
        case "west":  return "clockwise_180";
        default: return "none";
    }
}

function MultiBlockCreateVehicle(MultiBlockName, VehicleName, MainBlock, HandItem) {
    BlockEvents.rightClicked(MainBlock, (event) => {
        const { hand, block, player, level, item } = event;

        if (hand != 'MAIN_HAND') return;

        let MultiBlockEntity = $PatchouliAPI.getMultiblock(MultiBlockName);
        let rotation = getRotationFromPlayerFacing(player);

        let itemMatches = false;
        if (HandItem.startsWith('#')) {
            let tag = HandItem.substring(1);
            itemMatches = !item.isEmpty() && item.hasTag(tag);
        } else {
            itemMatches = !item.isEmpty() && item.id == HandItem;
        }

        if (itemMatches) {
            let BlockPosData = block.pos.offset(0, -1, 0)
            player.sendData("show_multiblock", {MultiBlockName: MultiBlockName, blockPosX: BlockPosData.getX(), blockPosY: BlockPosData.getY(), blockPosZ: BlockPosData.getZ(), rotation: rotation});

            if (MultiBlockEntity.validate(level, block.pos, rotation)) {
                MultiBlockEntity.simulate(level, block.pos, rotation, false).second.forEach((result) => {
                    if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;
                    level.destroyBlock(result.worldPosition, false);
                });

                let VehicleEntity = level.createEntity(VehicleName);
                VehicleEntity.moveTo(Vec3d.atCenterOf(block.pos));

                VehicleEntity.lookAt("feet", Vec3d.atCenterOf(player.blockPosition()));

                VehicleEntity.spawn();
                let blockX = block.pos.getX() + 0.5;
                let blockY = block.pos.getY() + 0.5;
                let blockZ = block.pos.getZ() + 0.5;
                level.spawnParticles(
                    "minecraft:explosion_emitter",
                    true,
                    blockX, blockY, blockZ,
                    0, 0, 0,
                    1,
                    0
                );

                level.spawnParticles(
                    "minecraft:large_smoke",
                    true,
                    blockX, blockY, blockZ,
                    0, 0.05, 0,
                    15,
                    0.15
                );

                level.spawnParticles(
                    "minecraft:poof",
                    true,
                    blockX, blockY, blockZ,
                    0.1, 0.05, 0.1,
                    30,
                    0.3
                );
                level.playSound(null, block.pos.x, block.pos.y, block.pos.z, "minecraft:block.anvil.use", "blocks", 5, 1);
                player.swing();
                player.sendData("clear_multiblock",{})
            }
        }
    });
    BlockEvents.broken(MainBlock, event => {
        let player = event.player
        player.sendData("clear_multiblock",{})
    })
}

//例：  MultiBlockCreateVehicle(多方块名称, 载具实体id, 中心方块, 手持物品)
//例：MultiBlockCreateVehicle('tfc:submarine', 'alexscaves:submarine', "immersiveengineering:floodlight", "immersiveengineering:hammer")