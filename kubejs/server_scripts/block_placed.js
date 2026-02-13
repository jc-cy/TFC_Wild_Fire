BlockEvents.placed(event => {
    banPlacePartner(event, 'tfc:crucible', 'fluid:fluid_interface')
    banPlacePartner(event, 'tfc:crucible', 'fluid:smart_fluid_interface')
})
function banPlacePartner(event, block1, block2) {
    let block = event.block
    if (block.id == block1) {
        if (block.north.id == block2 ||
            block.south.id == block2 ||
            block.west.id == block2 ||
            block.east.id == block2 ||
            block.up.id == block2 ||
            block.down.id == block2) {
            event.cancel()
        }
    }
    if (block.id == block2) {
        if (block.north.id == block1 ||
            block.south.id == block1 ||
            block.west.id == block1 ||
            block.east.id == block1 ||
            block.up.id == block1 ||
            block.down.id == block1) {
            event.cancel()
        }
    }
}