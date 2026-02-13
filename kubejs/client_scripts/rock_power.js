MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (!itemStack) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('kubejs:rock_powder')) return;

    const nbt = itemStack.nbt;
    if (!nbt) return;

    if (!nbt.contains("null") && nbt.contains("tank")) {
        event.setModelPath("kubejs:rock_powder_blank");
    }


});
MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (!itemStack) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('minecraft:netherite_pickaxe')) return;

    const nbt = itemStack.nbt;
    if (!nbt) return;

    if (!nbt.contains("null") && nbt.contains("neme")) {
        event.setModelPath("kubejs:emergency_hammer");
    }


});
MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (!itemStack) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('kubejs:brass_forge_door')) return;

    const nbt = itemStack.nbt;
    if (!nbt) event.setModelPath("kubejs:bad_brass_forge_door");

    if (!nbt.contains("null") && nbt.contains("tfc:forging_bonus")) {
        if (nbt.getInt("tfc:forging_bonus") > 1) {
            return

        } else { event.setModelPath("kubejs:bad_brass_forge_door"); }
    }


});



MafuyuEvents.modifyVariedModel(event => {
    const itemStack = event.getItemStack();
    if (itemStack.isEmpty()) return; // 物品堆不存在时直接返回

    if (!itemStack.id.includes('kubejs:heating_warmer')) return;

    if (TFC.misc.getHeat(itemStack).getTemperature()==0) event.setModelPath("kubejs:noheating_warmer");




});




