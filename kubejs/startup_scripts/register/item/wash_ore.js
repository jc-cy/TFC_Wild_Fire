// priority: 1


let wash_ore = [
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'uraninite', color: 0x606d61 },
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'galena', color: 0x5d6371 },
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'bauxite', color: 0x976752 },
    { mod: 'firmalife:ore', type: '/type_', ore: 'chromite', color: 0x918d8b },
    { mod: 'tfc:ore', type: '/type_', ore: 'limonite', color: 0x9c6c4d, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'limonite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'magnetite', color: 0x717171, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'magnetite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'hematite', color: 0xa36053, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'hematite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_copper', color: 0xa8694d, temperature: 1085, out: 'tfc:metal/copper', metal: 'copper' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_gold', color: 0xb07d3d, temperature: 1064, out: 'tfc:metal/gold', metal: 'gold' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_silver', color: 0x9e9e9e, temperature: 961, out: 'tfc:metal/silver', metal: 'silver' },
    { mod: 'tfc:ore', type: '/type_', ore: 'tetrahedrite', color: 0x8c7566, temperature: 1083, out: 'tfc:metal/copper', metal: 'tetrahedrite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'sphalerite', color: 0x889790, temperature: 419, out: 'tfc:metal/zinc', metal: 'sphalerite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'cassiterite', color: 0xab8a6b, temperature: 232, out: 'tfc:metal/tin', metal: 'cassiterite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'bismuthinite', color: 0x5f6f62, temperature: 271, out: 'tfc:metal/bismuth', metal: 'bismuthinite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'garnierite', color: 0x697e66, temperature: 1453, out: 'tfc:metal/nickel', metal: 'garnierite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'malachite', color: 0x849c92, temperature: 1085, out: 'tfc:metal/copper', metal: 'malachite' },
    { mod: 'tfc:ore', type: '/', ore: 'sulfur', color: 0xFFFF00 },
    { mod: 'tfc:ore', type: '/', ore: 'graphite', color: 0x202020 },
    { mod: 'tfc:ore', type: '/', ore: 'cryolite', color: 0xF0F8FF },
    { mod: 'tfc:ore', type: '/', ore: 'cinnabar', color: 0xFF0000 }
];

StartupEvents.registry("item", event => {

    wash_ore.forEach(ore => {
        event.create(`kubejs:item/ore/rocky_chunks/${ore.ore}`).texture(`kubejs:item/ore/rocky_chunks/${ore.ore}`).tag("kubejs:ore").tag("sns:allowed_in_ore_sack").tag("tfc:ore_pieces"); //注册多石 4mb
        event.create(`kubejs:item/ore/chunks/${ore.ore}`).texture(`kubejs:item/ore/chunks/${ore.ore}`).tag("kubejs:ore").tag("sns:allowed_in_ore_sack").tag("tfc:ore_pieces"); //注册粗块 4mb
        event.create(`kubejs:item/ore/dirty_dust/${ore.ore}`).texture(`kubejs:item/ore/dirty_dust/${ore.ore}`).tag("kubejs:ore").tag("tfc:usable_in_pot").tag("sns:allowed_in_ore_sack"); //注册脏粉 5mb
        event.create(`kubejs:item/ore/dirty_pile/${ore.ore}`).texture(`kubejs:item/ore/dirty_pile/${ore.ore}`).tag("kubejs:dirty_pile"); //注册小堆脏粉 1mb

        if (ore.type == '/type_') {
            //精炼
            event.create(`kubejs:item/ore/purified_dust/${ore.ore}`).texture(`kubejs:item/ore/purified_dust/${ore.ore}`).tag("kubejs:ore");//除杂矿粉 5mb
            event.create(`kubejs:item/ore/refined_dust/${ore.ore}`).texture(`kubejs:item/ore/purified_dust/${ore.ore}`).tag("kubejs:ore");//精炼矿粉 10mb
            //压缩矿粉
            event.create(`kubejs:item/ore/dust_lump/${ore.ore}`).texture(`kubejs:item/ore/dust_lump/${ore.ore}`).tag("kubejs:4ore");//矿粉块 20mb
            event.create(`kubejs:item/ore/dust_clump/${ore.ore}`).texture(`kubejs:item/ore/dust_clump/${ore.ore}`).tag("kubejs:8ore");//矿粉团 50mb
            event.create(`kubejs:item/ore/dust_brick/${ore.ore}`).texture(`kubejs:item/ore/dust_brick/${ore.ore}`).tag("kubejs:16ore");//精炼矿粉砖 90mb
        }
    })
    event.create(`firmalife:powder/chromite`).tag("kubejs:ore"); //铬矿粉
})
StartupEvents.registry("fluid", event => {
    wash_ore.forEach(ore => {
        if (ore.type == '/type_') {
            event.create(`kubejs:fluid/ore/slurry/${ore.ore}`)//矿浆
                .stillTexture(`kubejs:fluid/ore/slurry/${ore.ore}`)
                .flowingTexture(`kubejs:fluid/ore/slurry/${ore.ore}_flowing`)
                .tag("tfc:usable_in_pot")
                .tag("tfc:usable_in_wooden_bucket")
                .tag("tfc:usable_in_barrel")
                .density(5)
                .noBlock()
            //.color(ore.color)
        }
    })

    event.create(`tfc_ie_addon:metal/aluminum_oxide`)//氧化铝
        .stillTexture(`tfc_ie_addon:metal/aluminum`)
        .flowingTexture(`tfc_ie_addon:metal/aluminum_flowing`)
        .density(5)


})
