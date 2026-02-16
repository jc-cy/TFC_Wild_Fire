//server_scripts
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
BlockEvents.rightClicked("kubejs:submarine_core", (event) => {
    const { hand, block, player, level, item } = event;
    if (hand != 'MAIN_HAND') return;

    let MultiBlockEntity = $PatchouliAPI.getMultiblock('tfc:submarine');

    if (item.id == "immersiveengineering:hammer") {
        $PatchouliAPI.showMultiblock(MultiBlockEntity, null, block.pos.offset(0, -1, 0), "none")
    }

    if (MultiBlockEntity.validate(level, block.pos, 'none')) {
        MultiBlockEntity.simulate(level, block.pos, 'none', false).second.forEach((result) => {
            if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;

            level.destroyBlock(result.worldPosition, false);
        });
        let Submarine = level.createEntity("alexscaves:submarine");
        Submarine.moveTo(Vec3d.atCenterOf(block.pos.offset(2, 0, 0)));
        Submarine.setYaw(90);
        Submarine.spawn()
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
        $PatchouliAPI.clearMultiblock()
    }
});

BlockEvents.broken("kubejs:submarine_core", event => {
    $PatchouliAPI.clearMultiblock()
})