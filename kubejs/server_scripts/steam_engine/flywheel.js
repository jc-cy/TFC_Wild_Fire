let flywheelList = ["wildfire:brass_steam_flywheel", "wildfire:steel_steam_flywheel", "wildfire:cast_iron_steam_flywheel", "wildfire:wrought_iron_steam_flywheel"]
flywheelList.forEach((flywheel) => {
    MBDMachineEvents.onRightClick(flywheel, (e) => {
        let { hand, machine, heldItem, player } = e.getEvent()
        let { level } = machine
        if (hand != 'MAIN_HAND') return;
        let trait = machine.getTraitByName("item_slot")
        let storage = trait.storage;
        let stored = storage.getStackInSlot(0)
        if (stored.isEmpty()) {
            let armItem = "tfc:metal/ingot/gold"  //力臂物品id
            if (heldItem.id == armItem) {
                let blockX = machine.pos.getX() + 0.5;
                let blockY = machine.pos.getY() + 0.5;
                let blockZ = machine.pos.getZ() + 0.5;
                storage.insertItem(0, armItem, false)
                heldItem.shrink(1)
                player.playNotifySound("minecraft:block.anvil.use", "blocks", 1, 2)
                level.spawnParticles(
                    "minecraft:large_smoke",
                    true,
                    blockX, blockY, blockZ,
                    0, 0.05, 0,
                    5,
                    0.05
                );

                level.spawnParticles(
                    "minecraft:poof",
                    true,
                    blockX, blockY, blockZ,
                    0.1, 0.05, 0.1,
                    10,
                    0.08
                );
                machine.setMachineState("arm")
                machine.customData.putBoolean("arm", true)
            }
        }
    })

    MBDMachineEvents.onStateChanged(flywheel, (e) => {
        let { machine, oldState, newState} = e.getEvent()
        if (oldState == "formed" && newState == "base") {
            Utils.server.scheduleInTicks(1, () => {
                machine.setMachineState("arm")
            })
        }
    })
})


