
const cog = [
    { id: 'createcasing:acacia_large_cogwheel', sound: 'copper' },
    { id: 'createcasing:bamboo_large_cogwheel', sound: 'copper' },
    { id: 'createcasing:cherry_large_cogwheel', sound: 'copper' },
    { id: 'create:large_cogwheel', sound: 'copper' },
    { id: 'createcasing:acacia_cogwheel', sound: 'copper' },
    { id: 'createcasing:bamboo_cogwheel', sound: 'copper' },
    { id: 'createcasing:cherry_cogwheel', sound: 'copper' },
    { id: 'create:cogwheel', sound: 'copper' },
    { id: 'createcasing:acacia_shaft', sound: 'copper' },
    { id: 'createcasing:bamboo_shaft', sound: 'copper' },
    { id: 'createcasing:cherry_shaft', sound: 'copper' },
    { id: 'create:shaft', sound: 'copper' },
    { id: 'createcasing:crimson_large_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:jungle_large_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:oak_large_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:mangrove_large_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:crimson_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:jungle_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:oak_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:mangrove_cogwheel', sound: 'netherite_block' },
    { id: 'createcasing:crimson_shaft', sound: 'netherite_block' },
    { id: 'createcasing:jungle_shaft', sound: 'netherite_block' },
    { id: 'createcasing:oak_shaft', sound: 'netherite_block' },
    { id: 'createcasing:mangrove_shaft', sound: 'netherite_block' }
]
BlockEvents.modification(event => {

    cog.forEach(cog => {
        event.modify(`${cog.id}`, block => {
            block.setSoundType(`${cog.sound}`)
        })
    })
})
/*

*/