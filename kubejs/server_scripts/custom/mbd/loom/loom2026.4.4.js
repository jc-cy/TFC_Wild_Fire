/**
 *
 * @param {Internal.Level} level
 * @param {Internal.AABB} aabb
 * @param {BlockPos} corePos
 * @returns {boolean}
 */
function checkAreaWithAABBIsEmptyBlockWithoutCore(level, aabb, corePos) {
    const { minX, minY, minZ, maxX, maxY, maxZ } = aabb;
    const coreX = corePos.x;
    const coreY = corePos.y;
    const coreZ = corePos.z;

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                if (x == coreX && y == coreY && z == coreZ) {
                    continue;
                }
                if (!level.isEmptyBlock([x, y, z])) {
                    return false;
                }
            }
        }
    }
    return true;
}
const $Direction = Java.loadClass('net.minecraft.core.Direction')
BlockEvents.placed('wildfire:loom', (event) => {
    let { block, player, level } = event;
    let { x, y, z } = block.pos;
    let blockState = level.getBlockState(block.pos);
    let facing = blockState.getValue(BlockProperties.HORIZONTAL_FACING).toString();
    let minX, maxX, minZ, maxZ;
    switch (facing) {
        case "south":
            minX = x - 1;
            maxX = x;
            minZ = z - 1;
            maxZ = z;
            break;
        case "north":
            minX = x + 1;
            maxX = x;
            minZ = z;
            maxZ = z + 1;
            break;
        case "east":
            minX = x - 1;
            maxX = x;
            minZ = z + 1;
            maxZ = z;
            break;
        case "west":
            minX = x;
            maxX = x + 1;
            minZ = z - 1;
            maxZ = z;
            break;
    }
    let aabb = AABB.of(minX, y, minZ, maxX, y, maxZ);

    let isAreaClear = level.getEntitiesWithin(aabb).isEmpty();
    let hasSpace = checkAreaWithAABBIsEmptyBlockWithoutCore(level, aabb, block.pos);

    if (!hasSpace) {
        player.setStatusMessage(Text.of("没有足够的空间放置").darkRed());
        event.cancel();
        return;
    }

    if (!isAreaClear) {
        player.setStatusMessage(Text.of("放置区域有实体").darkRed());
        event.cancel();
        return;
    }

    let backPos1, backPos2, backPos3;
    switch (facing) {
        case "north":
            backPos1 = [x, y, z + 1];
            backPos2 = [x + 1, y, z + 1];
            backPos3 = [x + 1, y, z];
            break;
        case "south":
            backPos1 = [x, y, z - 1];
            backPos2 = [x - 1, y, z - 1];
            backPos3 = [x - 1, y, z];
            break;
        case "west":
            backPos1 = [x + 1, y, z];
            backPos2 = [x + 1, y, z - 1];
            backPos3 = [x, y, z - 1];
            break;
        case "east":
            backPos1 = [x - 1, y, z];
            backPos2 = [x - 1, y, z + 1];
            backPos3 = [x, y, z + 1];
            break;
    }

    const facingMap = {
        "east": "north",
        "north": "west",
        "west": "south",
        "south": "east"
    };
    let newFacing = facingMap[facing];
    if (!newFacing) newFacing = facing; // 安全回退
    // 生成新方块
    level.getBlock(backPos1[0], backPos1[1], backPos1[2]).set('wildfire:loom_shaft')
    let newBlockState1 = level.getBlock(backPos1[0], backPos1[1], backPos1[2]).blockState.setValue(BlockProperties.HORIZONTAL_FACING, $Direction.byName(newFacing).opposite)
    let newBlockState2 = level.getBlock(backPos1[0], backPos1[1], backPos1[2]).blockState.setValue(BlockProperties.HORIZONTAL_FACING, $Direction.byName(newFacing))
    level.getBlock(backPos3[0], backPos3[1], backPos3[2]).set('wildfire:loom_frame')
    level.setBlockAndUpdate(level.getBlock(backPos1[0], backPos1[1], backPos1[2]).pos, newBlockState1);
    level.setBlockAndUpdate(level.getBlock(backPos2[0], backPos2[1], backPos2[2]).pos, newBlockState2);

});

ServerEvents.tags('block', event => {
    event.add('wildfire:loom_blocks', ['wildfire:loom', 'wildfire:loom_shaft', 'wildfire:loom_frame'])
})
const $IMultiController = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMultiController');
const $IMultiPart = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMultiPart');
BlockEvents.broken((event) => {
    let { block, level } = event;
    if (block.id == "wildfire:loom") {
        let controller = $IMultiController.ofController(level, block.pos).orElse(null);
        if (controller) {
            if (!controller.isFormed()) {
                event.cancel();
                return;
            } else {
                controller.getParts().map(part => part.pos).forEach(pos => {
                    level.destroyBlock(pos, true)
                });
            }
        }
    }
    if (block.id == "wildfire:loom_shaft" || block.id == "wildfire:loom_frame") {
        let part = $IMultiPart.ofPart(level, block.pos).orElse(null);
        if (!part.isFormed()) {
            event.cancel();
            return;
        } else {
            let controllers = part.getControllers();
            controllers.forEach(controller => {
                controller.getParts().map(part => part.pos).forEach(pos => {
                    level.destroyBlock(pos, true)
                });
                level.destroyBlock(controller.pos, true)
            })
        }
    }
});
MBDMachineEvents.onStructureInvalid("wildfire:loom", (event) => {
    let { machine } = event.getEvent();
    let { level } = machine;
    /** @type {Internal.IMultiController_} */
    let controller = machine;
    controller.getParts().map(part => part.pos).forEach(pos => {
        level.destroyBlock(pos, true)
    });
    level.destroyBlock(controller.pos, true)
})

ServerEvents.recipes((event) => {

    const string = [
        { id: "string", input: "16x minecraft:string", output: "tfc:silk_cloth" },
        { id: "flax_fiber", input: "16x textile:flax_fiber", output: "textile:linen_cloth" },
        { id: "jute_fiber", input: "16x tfc:jute_fiber", output: "tfc:burlap_cloth" },
        { id: "pineapple_yarn", input: "16x firmalife:pineapple_yarn", output: "firmalife:pineapple_leather" },
        { id: "wool_yarn", input: "16x tfc:wool_yarn", output: "tfc:wool_cloth" },
        { id: "cotton_string", input: "16x textile:cotton_string", output: "textile:cotton_cloth" },
        { id: "reinforced_fiber", input: "16x sns:reinforced_fiber", output: "sns:reinforced_fabric" }
    ];
    string.forEach(string => {
        event.recipes.wildfire.loom()
            .id(`wildfire:loom/${string.id}`)
            .duration(480)      //配方时间
            .inputItems(`${string.input}`) //输入物品
            .inputStress(256)
            .inputRPM(32)
            .outputItems(`${string.output}`) //输出物品
    })
})

MBDMachineEvents.onPlaced("wildfire:loom", (e) => {
    e.event.machine.triggerGeckolibAnim("idle", 1)
})


MBDMachineEvents.onBeforeRecipeWorking("wildfire:loom", (event) => {
    let { machine } = event.getEvent();
    /** @type {Internal.IMultiController_} */
    let controller = machine
    controller.parts.forEach(part => {
        /** @type {Internal.MBDPartMachine} */
        let partmachine = part
        /** @type {Internal.KineticBlockEntity} */
        let KineticMachine = partmachine.machineHolder
        let speedcondition;
        switch (controller.frontFacing.get().toString()) {
            case "south":
                speedcondition = KineticMachine.speed < 32;
                break;
            case "west":
                speedcondition = KineticMachine.speed < 32;
                break;
            case "north":
                speedcondition = KineticMachine.speed > -32;
                break;
            case "east":
                speedcondition = KineticMachine.speed > -32;
                break;
        }
        if (speedcondition) {
            event.getEvent().setCanceled(true);
            return;
        } else {
            let AnimSpeed = 1;
            AnimSpeed = Math.abs(KineticMachine.speed / 32) * 0.338
            machine.triggerGeckolibAnim("weaving", AnimSpeed)
        }
    })
})

const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
MBDMachineEvents.onBeforeRecipeModify("wildfire:loom", (event) => {
    let { machine, recipe } = event.getEvent();
    let copyRecipe = recipe.copy();
    /** @type {Internal.IMachine} */
    let partmachine = $IMachine.ofMachine(machine.level, machine.pos.relative(machine.frontFacing.get().opposite)).orElse(null);
    /** @type {Internal.KineticBlockEntity} */
    let KineticMachine = partmachine.machineHolder
    copyRecipe.duration = recipe.duration * Math.abs(32 / KineticMachine.speed);
    event.getEvent().setRecipe(copyRecipe);
})

MBDMachineEvents.onStateChanged("wildfire:loom", (event) => {
    let { machine, newState} = event.getEvent();
    if (newState == "formed") {
        machine.triggerGeckolibAnim("idle", 1)
    }
})

MBDMachineEvents.onPlaced("wildfire:loom", (e) => {
    e.event.machine.triggerGeckolibAnim("idle", 1)
})

MBDMachineEvents.onRecipeWorking("wildfire:loom", (event) => {
    let { machine } = event.getEvent();
    if (machine.level.time % 20 != 0) return;
    /** @type {Internal.IMultiController_} */
    let controller = machine
    controller.parts.forEach(part => {
        /** @type {Internal.MBDPartMachine} */
        let partmachine = part
        /** @type {Internal.KineticBlockEntity} */
        let KineticMachine = partmachine.machineHolder
        let speedcondition;
        switch (controller.frontFacing.get().toString()) {
            case "south":
                speedcondition = KineticMachine.speed < 32;
                break;
            case "west":
                speedcondition = KineticMachine.speed < 32;
                break;
            case "north":
                speedcondition = KineticMachine.speed > -32;
                break;
            case "east":
                speedcondition = KineticMachine.speed > -32;
                break;
        }
        if (speedcondition) {
            event.getEvent().setCanceled(true);
        }
    })
})