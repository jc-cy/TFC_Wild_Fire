const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
NetworkEvents.dataReceived("show_multiblock", event => {
    const MultiBlockName = event.data.getString("MultiBlockName");
    const blockPosX = event.data.getInt("blockPosX");
    const blockPosY = event.data.getInt("blockPosY");
    const blockPosZ = event.data.getInt("blockPosZ");
    const blockPos = new BlockPos(blockPosX, blockPosY, blockPosZ);
    const rotation = event.data.getString("rotation");
    let MultiBlockEntity = $PatchouliAPI.getMultiblock(MultiBlockName);
    $PatchouliAPI.showMultiblock(MultiBlockEntity, null, blockPos, rotation);
})

NetworkEvents.dataReceived("clear_multiblock", event => {
    $PatchouliAPI.clearMultiblock()
})