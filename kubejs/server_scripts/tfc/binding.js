
ServerEvents.tags('item', event => {
    const bindings_weak = [
        'tfc:plant/jungle_vines',//丛林藤蔓
        'tfc:jute',//黄麻
        'tfc:plant/ivy',//常春藤
        'farmersdelight:rope',//粗制草绳
        '#forge:fiber_hemp'//麻纤维
    ];
    const bindings_medium = [
        'minecraft:string',//线
        'tfc:glue',//胶水
        'tfc:wool_yarn',//羊毛线
        'minecraft:slime_ball',//粘液球
        '#forge:wires',//电线绑定标签
        'sns:leather_strip'//皮革条
    ];

    bindings_weak.forEach(low => {
        event.add("kubejs:low_binding", low);
    });

    bindings_medium.forEach(medium => {
        event.add("kubejs:medium_binding", medium);
    });
    event.add("kubejs:advanced_binding", 'kubejs:tfc/sinew_thread');//完美
    event.add("kubejs:advanced_binding", 'firmaciv:rope_coil');//完美
    event.add("kubejs:advanced_binding", 'sns:bound_leather_strip');




    // 绑定类所有物品
    const bindings = [
        'tfc:plant/jungle_vines',//丛林藤蔓
        'tfc:jute',//黄麻
        'tfc:plant/ivy',//常春藤
        'farmersdelight:rope',//粗制草绳
        '#forge:fiber_hemp',//麻纤维
        'minecraft:string',//线
        'tfc:glue',//胶水
        'tfc:wool_yarn',//羊毛线
        'minecraft:slime_ball',//粘液球
        '#forge:wires',//电线绑定标签
        'firmaciv:rope_coil',//黄麻
        'kubejs:tfc/sinew_thread',//筋线
        'sns:leather_strip',//皮革条
        'sns:bound_leather_strip'//强化皮革条

    ]
    event.add('kubejs:bindings', bindings)
    //无绑定金属耐久*0.7        石质*0.5
    /*// 低级绑定物品金属耐久*0.85     石质耐久*1
    event.add('kubejs:low_binding', 'minecraft:dirt')
    // 中级绑定物品金属耐久*1       石质锻造合适 （2）     
    event.add('kubejs:medium_binding', 'minecraft:stone')
    // 高级绑定物品金属锻造+1       石质锻造完美 （4） 
    event.add('kubejs:advanced_binding', 'minecraft:string')*/
})
ServerEvents.recipes(event => {

    const rock = [//石质
        { rock: "diamond", name: "diamond", num: 350 },
        { rock: "obsidian", name: "obsidian_shards", num: 40 },
        { rock: "flint", name: "flint", num: 60 }

    ]
    const rocktype = [//岩石类型
        { name: 'igneous_extrusive', num: 35 },
        { name: 'igneous_intrusive', num: 30 },
        { name: 'metamorphic', num: 27 },
        { name: 'sedimentary', num: 25 },

    ]
    const rock_tools = [
        { name: "javelin", type: "javelin_head" },
        { name: "hammer", type: "hammer_head" },
        { name: "hoe", type: "hoe_head" },
        { name: "axe", type: "axe_head" },
        { name: "shovel", type: "shovel_head" },
        { name: "knife", type: "knife_head" }
    ];
    rock_tools.forEach(tool => {//tfc石头绑定
        rocktype.forEach(rock => {
            event.recipes.kubejs.shapeless(
                Item.of(`tfc:stone/${tool.name}/${rock.name}`, `{Damage:${rock.num}}`),
                [
                    `tfc:stone/${tool.type}/${rock.name}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:stone/${tool.name}_${rock.name}/nobonus`)

            //weak
            event.recipes.kubejs.shapeless(
                `tfc:stone/${tool.name}/${rock.name}`,
                [
                    "#kubejs:low_binding",`tfc:stone/${tool.type}/${rock.name}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:stone/${tool.name}_${rock.name}/low`)

            //medium
            event.recipes.kubejs.shapeless(
                Item.of(`tfc:stone/${tool.name}/${rock.name}`, '{"tfc:forging_bonus":2,TempDuration:50}'),
                [
                    "#kubejs:medium_binding",`tfc:stone/${tool.type}/${rock.name}`, "#forge:rods/wooden"
                
                ]
            ).id(`kubejs:stone/${tool.name}_${rock.name}/medium`)

            //strong
            event.recipes.kubejs.shapeless(
                Item.of(`tfc:stone/${tool.name}/${rock.name}`, '{"tfc:forging_bonus":4,TempDuration:100}'),
                [
                    "#kubejs:advanced_binding",`tfc:stone/${tool.type}/${rock.name}`,"#forge:rods/wooden"
                    
                ]
            ).id(`kubejs:stone/${tool.name}_${rock.name}/advanced`)


        });

    });
    rock_tools.forEach(tool => {
        rock.forEach(rock => {
            event.recipes.kubejs.shapeless(
                Item.of(`kubejs:rock_tool/${rock.rock}_${tool.name}`, `{Damage:${rock.num}}`),
                [
                    `kubejs:${rock.rock}_${tool.type}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:${rock.rock}_${tool.type}/nobonus`)
            //weak
            event.recipes.kubejs.shapeless(
                `kubejs:rock_tool/${rock.rock}_${tool.name}`,
                [
                    "#kubejs:low_binding",`kubejs:${rock.rock}_${tool.type}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:${rock.rock}_${tool.type}/low`)
            //medium
            event.recipes.kubejs.shapeless(
                Item.of(`kubejs:rock_tool/${rock.rock}_${tool.name}`, '{"tfc:forging_bonus":2}'),
                [
                    "#kubejs:medium_binding",`kubejs:${rock.rock}_${tool.type}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:${rock.rock}_${tool.type}/medium`)
            //strong
            event.recipes.kubejs.shapeless(
                Item.of(`kubejs:rock_tool/${rock.rock}_${tool.name}`, '{"tfc:forging_bonus":4}'),
                [
                    "#kubejs:advanced_binding",`kubejs:${rock.rock}_${tool.type}`,"#forge:rods/wooden"
                ]
            ).id(`kubejs:${rock.rock}_${tool.type}/advanced`)

        });

    });





    
    //金属类在下面↓↓↓





    const metals = [//金属类
        "bismuth_bronze",
        "black_bronze",
        "black_steel",
        "blue_steel",
        "steel",
        "bronze",
        "copper",
        "red_steel",
        "wrought_iron"
    ]
    const advanced_metals = [//高级金属



    ]
    const tools = [//金属工具
        { name: 'hoe', type: 'hoe_head' },
        { name: 'axe', type: 'axe_head' },
        { name: 'mace', type: 'mace_head' },
        { name: 'hammer', type: 'hammer_head' },
        { name: 'chisel', type: 'chisel_head' },
        { name: 'shovel', type: 'shovel_head' },
        { name: 'javelin', type: 'javelin_head' },
        { name: 'pickaxe', type: 'pickaxe_head' },
        { name: 'propick', type: 'propick_head' },
        { name: 'knife', type: 'knife_blade' },
        { name: 'scythe', type: 'scythe_blade' },
        { name: 'sword', type: 'sword_blade' },
        { name: 'saw', type: 'saw_blade' },
    ]
    const { advanced_shapeless_crafting } = event.recipes.tfc

    metals.forEach(metal => {//绳子
        tools.forEach(tools => {
            advanced_shapeless_crafting(
                TFC.itemStackProvider.of(`tfc:metal/${tools.name}/${metal}`, ['kubejs:binding_bonus']),
                [
                    `tfc:metal/${tools.type}/${metal}`,
                    '#kubejs:bindings',
                    '#forge:rods/wooden'
                ],
                `tfc:metal/${tools.type}/${metal}`
            ).id(`tfc:metal/binding_bonus/${tools.name}/${metal}_bindings`)

        })
    })
    metals.forEach(metal => {//螺栓
        tools.forEach(tools => {
            advanced_shapeless_crafting(
                TFC.itemStackProvider.of(`tfc:metal/${tools.name}/${metal}`, ['kubejs:binding_bonus']),
                [
                    `tfc:metal/${tools.type}/${metal}`,
                    '#kubejs:bolts',
                    '#forge:rods/wooden'
                ],
                `tfc:metal/${tools.type}/${metal}`
            ).id(`tfc:metal/binding_bonus/${tools.name}/${metal}_bolts`)

        })
    })

     metals.forEach(metal => {//钉子
        tools.forEach(tools => {
            advanced_shapeless_crafting(
                TFC.itemStackProvider.of(`tfc:metal/${tools.name}/${metal}`, ['kubejs:binding_bonus']),
                [
                    `tfc:metal/${tools.type}/${metal}`,
                    '#kubejs:nails',
                    '#forge:rods/wooden'
                ],
                `tfc:metal/${tools.type}/${metal}`
            ).id(`tfc:metal/binding_bonus/${tools.name}/${metal}_nails`)

        })
    })
     metals.forEach(metal => {//无
        tools.forEach(tools => {
            advanced_shapeless_crafting(
                TFC.itemStackProvider.of(`tfc:metal/${tools.name}/${metal}`, ['kubejs:binding_bonus']),
                [
                    `tfc:metal/${tools.type}/${metal}`,                 
                    '#forge:rods/wooden'
                ],
                `tfc:metal/${tools.type}/${metal}`
            ).id(`tfc:metal/no_binding_bonus/${tools.name}/${metal}`)

        })
    })

})
