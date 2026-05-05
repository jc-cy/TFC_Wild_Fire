let chamberList = ["wildfire:bronze_boiler_combustion_chamber", "wildfire:steel_boiler_combustion_chamber", "wildfire:cast_iron_boiler_combustion_chamber", "wildfire:wrought_iron_boiler_combustion_chamber"]
chamberList.forEach((chamber) => {
    MBDMachineEvents.onStructureFormed(chamber, (e) => {
        let { machine } = e.getEvent()
        let { level } = machine
        /** @type {Internal.IMultiController_} */
        let controller = machine
        if (machine.customData.getBoolean("hasFormed")) return;
        machine.customData.putBoolean("hasFormed", true)
        let blockX = machine.pos.getX() + 0.5;
        let blockY = machine.pos.getY() + 0.5;
        let blockZ = machine.pos.getZ() + 0.5;
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
        level.playSound(null, machine.pos.x, machine.pos.y, machine.pos.z, "block.anvil.destroy", "blocks", 5, 1)
        controller.getParts().forEach(part => {
            let partBlockX = part.getPos().getX() + 0.5;
            let partBlockY = part.getPos().getY() + 0.5;
            let partBlockZ = part.getPos().getZ() + 0.5;
            level.spawnParticles(
                "minecraft:large_smoke",
                true,
                partBlockX, partBlockY, partBlockZ,
                0, 0.05, 0,
                15,
                0.15
            );
            level.spawnParticles(
                "minecraft:poof",
                true,
                partBlockX, partBlockY, partBlockZ,
                0.1, 0.05, 0.1,
                30,
                0.3
            );
        })
    })
    MBDMachineEvents.onStructureInvalid(chamber, (e) => {
        let { machine } = e.getEvent()
        if (machine.customData.getBoolean("hasFormed")) {
            machine.customData.putBoolean("hasFormed", false)
        }
    })

    MBDMachineEvents.onBeforeRecipeWorking(chamber, (event) => {
        let { machine, recipe } = event.getEvent();
        let AnimSpeed;
        switch (recipe.id.toString()) {
            case "wildfire:brass_steam_engine":
                AnimSpeed = 0.8
                break;
            case "wildfire:cast_iron_steam_engine":
                AnimSpeed = 1.6
                break;
            case "wildfire:steel_steam_engine":
                AnimSpeed = 1.6
                break;
            case "wildfire:wrought_iron_steam_engine":
                AnimSpeed = 3.2
                break;
            default:
                AnimSpeed = 1.0
        }
        let AnimName;
        switch (machine.frontFacing.get().toString()) {
            case "north":
                AnimName = "turn_right"
                break;
            case "south":
                AnimName = "turn_left"
                break;
            case "west":
                AnimName = "turn_left"
                break;
            case "east":
                AnimName = "turn_right"
                break;
            default:
                AnimName = "turn_right"
        }
        machine.triggerGeckolibAnim(AnimName, AnimSpeed)
    })
    MBDMachineEvents.onAfterRecipeWorking(chamber, (event) => {
        let { machine } = event.getEvent();
        machine.triggerGeckolibAnim("idle", 1)
    })
})