ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/lychee/block_interacting';

    const recipes = [
        {
            item_in: { tag: 'wildfire:metal/hammers' },
            block_in: 'create:rose_quartz_block',
            comment: 'lychee.comment.rose_quartz',
            post: [
                { type: 'damage_item', damage: 1.0 },
                { type: 'drop_item', item: 'create:rose_quartz', count: 3 },
                { type: 'drop_item', item: 'create:rose_quartz', count: 1, contextual: {type: 'chance', chance: 0.5}},
                { type: "execute", command: "playsound minecraft:block.deepslate.break player @p ~ ~ ~", hide: true, },
                { type: 'place', block: '*' }
            ],
            id: `${id_prefix}rose_quartz`
        },

    ];

    const stones = [
        'andesite',
        'basalt',
        'dacite',
        'diorite',
        'gabbro',
        'granite',
        'rhyolite'
    ]
    stones.forEach((stone) => {
        recipes.push({
            item_in: { tag: 'tfc:hammers' },
            block_in: `tfc:rock/raw/${stone}`,
            comment: 'lychee.comment.stone_anvil',
            post: [
                { type: 'damage_item', damage: 1.0 },
                { type: 'place', block: `tfc:rock/anvil/${stone}` },
                { type: "execute", command: "playsound minecraft:block.stone.break player @p ~ ~ ~", hide: true, },
            ],
            id: `${id_prefix}anvil/${stone}`
        })
    });
    const grass = [
        'silt',
        'loam',
        'sandy_loam',
        'silty_loam'
    ]
    grass.forEach((grass) => {
        recipes.push({
            item_in: { tag: 'tfc:hoes' },
            block_in: `tfc:grass/${grass}`,
            comment: 'lychee.comment.worm_digging',
            post: [
                { type: 'damage_item', damage: 1.0 },
                { type: 'drop_item', item: 'aquaculture:worm', count: 1, contextual: {type: 'chance', chance: 0.2}},
                { type: 'place', block: `tfc:farmland/${grass}` },
                { type: "execute", command: "playsound minecraft:block.wet_grass.break player @p ~ ~ ~", hide: true, },
            ],
            id: `${id_prefix}worm_digging/${grass}`
        })
    });

    recipes.forEach((recipe) => {
        recipe.type = 'lychee:block_interacting';
        event.custom(recipe).id(recipe.id);
    })
})



