MBDMachineEvents.onTick("mbd2:bloomery_output", e => {
    let event = e.event
    const { machine } = event
    
    // 获取输出物品槽
    /**@type {Internal.ItemSlotCapabilityTrait} */
    let outputTrait = machine.getTraitByName("bloomery_output")
    
    if (!outputTrait) {
        return
    }
    
    let storage = outputTrait.storage
    
    // 检查是否有物品
    let hasItems = false
    for (let i = 0; i < storage.getSlots(); i++) {
        let stack = storage.getStackInSlot(i)
        if (!stack.isEmpty()) {
            hasItems = true
            break
        }
    }
    
    if (hasItems) {
        machine.setMachineState("working")
    } else {
        machine.setMachineState("base")
    }
})