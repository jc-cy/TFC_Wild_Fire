ServerEvents.recipes(event => {

    const id_in = "kubejs:recipe/shaped/"
    event.shaped('minecraft:anvil', ['aaa', ' a ', 'aaa'], { a: 'tfc:metal/double_ingot/cast_iron' })//铁砧

    event.shaped("create:copper_diving_helmet", [' a ', ' b ', 'cdc'], {
        a: "tfc:metal/unfinished_helmet/copper",
        b: "firmalife:reinforced_glass",
        c: "sns:leather_strip",
        d: "kubejs:copper_fragments",

    })//潜水头盔

    event.shaped("create:copper_diving_boots", ['aba', 'c c'], {
        a: "sns:leather_strip",
        b: "tfc:metal/unfinished_boots/copper",
        c: "immersiveengineering:ingot_lead"
        
    })//潜水鞋子--配重


        event.shaped("alexscaves:diving_boots", ['aba', 'c c'], {
        a: "sns:leather_strip", 
        b: "tfc:metal/unfinished_boots/copper",
        c: "tfc:metal/ingot/copper"
        
    })//潜水鞋子

        event.shaped("alexscaves:diving_leggings", ['aba', 'c c', 'a a'], {
        a: "sns:leather_strip", 
        b: "tfc:metal/unfinished_greaves/copper",
        c: "kubejs:copper_fragments",

    })//潜水裤子

        event.shaped("supplementaries:altimeter", ['c', 'b', 'a'], {
        a: "tfc:metal/sheet/copper", 
        b: "tfc:lamp_glass",
        c: "minecraft:redstone",

    })//高度计

        event.shaped("4x create:chute", ['a', 'b', 'a'], {
        a: "tfc:metal/sheet/cast_iron", 
        b: "create:industrial_iron_block",

    })//溜槽

        event.shaped("create:mechanical_arm", ['aab', 'c  ', 'de '], {
        a: "kubejs:material_component_steel", 
        b: "create:brass_hand",
        c: "createcasing:jungle_cogwheel",
        d: "create:precision_mechanism",
        e: "create:industrial_iron_block", 
    })//动力机械臂

        event.shaped("2x create:mechanical_harvester", ['bab', 'cac', ' d '], {
        a: "tfc:metal/bars/wrought_iron", 
        b: "tfc:metal/rod/cast_iron",
        c: "create:andesite_alloy",
        d: "create:andesite_casing",
    })//动力收割机（真的会有人做这个吗）

        event.shaped("2x create:mechanical_plough", ['aca', 'bbb', ' d '], {
        a: "tfc:metal/bars/wrought_iron", 
        b: "create:andesite_alloy",
        c: "tfc:metal/sheet/cast_iron",
        d: "create:andesite_casing",
    })//动力犁（种地套x2，真的会有人在群峦当大农场主然后被工业革命一脚踹死吗）

        event.shaped("2x create:encased_chain_drive", [' c ', 'aba', ' c '], {
        a: "#forge:chains", 
        b: "create:andesite_casing",
        c: "#kubejs:shaft",
    })//链式传动箱

        event.shaped("16x create:controller_rail", ['aca', 'aba', 'aca'], {
        a: "tfc:metal/rod/rose_gold", 
        b: "create:electron_tube",
        c: "#tfc:can_be_lit_on_torch",
    })//控制铁轨

    event.shaped("4x create:package_filter", [' c ', 'aba'], {
        a: "tfc:metal/rod/zinc", 
        b: "#tfc:lumber",
        c: "farmersdelight:canvas",
    })//包裹过滤器

    event.shaped("supplementaries:candle_holder", ['a', 'b'], {
        a: "tfc:candle", 
        b: "tfc:metal/rod/cast_iron",
    })//烛台





    event.shaped("moreburners:electric_burner", ['dbd', 'aca', ' e '], {
        a: "vintageimprovements:andesite_sheet",
        b: "firmalife:reinforced_glass",
        c: "moreburners:copper_coil",
        d: "tfc:metal/sheet/wrought_iron",
        e: "immersiveengineering:furnace_heater"
    })//电磁炉

    event.shaped("immersiveengineering:furnace_heater", ['aba', 'cdc', 'aba'], {
        a: "immersiveengineering:sheetmetal_iron",
        b: "tfc:metal/sheet/copper",
        c: "immersiveengineering:wirecoil_copper",
        d: "moreburners:copper_coil"
    })//外置加热


    event.shaped("create_connected:empty_fan_catalyst", ['aba', 'b b', 'aba'], {
        a: TFC.ingredient.heatable("tfc:metal/rod/brass", 600, null),
        b: "tfc:metal/bars/wrought_iron"
    })//黄铜触媒

    event.shaped("2x create:pulse_timer", [' a ', 'bcd', 'eee'], {
        a: "tfc:powder/amethyst",
        b: "minecraft:redstone",
        c: "tfc:metal/sheet/brass",
        d: "minecraft:redstone_torch",
        e: '#loot:rock_brick'
    })//脉冲计时器
    event.shaped("2x create:pulse_repeater", ['bcd', 'eee'], {

        b: "minecraft:redstone",
        c: "tfc:metal/sheet/brass",
        d: "minecraft:redstone_torch",
        e: '#loot:rock_brick'
    })//脉冲中继器
    event.shaped("2x create:pulse_extender", ['  b', 'bcd', 'eee'], {

        b: "minecraft:redstone",
        c: "tfc:metal/sheet/brass",
        d: "minecraft:redstone_torch",
        e: '#loot:rock_brick'
    })//脉冲延长器


    event.shaped("immersiveengineering:rs_engineering", [' a ', 'aba', ' a '], {
        a: "tfc:metal/sheet/steel", b: "create:rose_quartz_block"
    })//红石工程块
    event.shaped("tfcchannelcasting:unfired_mold_table", ['a a', 'aaa'], {
        a: "kubejs:unfired_corundum_brick"
    })//刚玉模具桌
    event.shaped("tfcchannelcasting:unfired_channel", ['a a', ' a '], {
        a: "kubejs:unfired_corundum_brick"
    })//刚玉铸造流体通道

    event.shaped('vintageimprovements:helve_hammer', ['abb', 'acc', '  d'], {
        a: 'tfc:metal/double_ingot/cast_iron', b: '#valhelsia_structures:posts', c: 'vintageimprovements:iron_spring', d: 'create:vertical_gearbox'
    })//杠杠锤
    event.shaped("scguns:flintlock_pistol", ['ab', 'c '], {
        a: "tfc:brass_mechanisms", b: "scguns:stone_gun_barrel", c: '#tfc:lumber'
    })//燧发枪
    event.shaped("scguns:handcannon", ['ab', 'cc'], {
        a: "tfc:brass_mechanisms", b: "scguns:heavy_gun_barrel", c: '#tfc:lumber'
    })//手炮
    event.shaped('create:basin', ['a a', 'bcb'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:metal/double_ingot/cast_iron'
    })//工作盆
    event.shaped('createmetallurgy:foundry_basin', ['a a', 'bcb'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:crucible'
    })//熔铸盆
    event.shaped('createmetallurgy:foundry_lid', ['bcb', 'a a'], {
        a: 'vintageimprovements:andesite_sheet', b: 'tfc:metal/sheet/cast_iron', c: 'tfc:metal/tuyere/wrought_iron'
    }) //熔铸盆盖子
    event.shaped('tfc:blast_furnace', ['aba', 'cdc', 'aea'], {
        a: 'tfc:metal/sheet/cast_iron', b: 'createmetallurgy:foundry_lid', c: 'tfc:metal/tuyere/wrought_iron', d: 'tfc:metal/bars/wrought_iron', e: 'tfc:crucible'
    }) //高炉
    event.shaped('3x immersiveengineering:light_engineering', ['aba', 'bcb', 'aba'], {
        a: 'tfc:metal/sheet/steel', b: "kubejs:material_component_steel", c: 'create:precision_mechanism'
    }) //轻型工程块
    event.shaped('2x immersiveengineering:heavy_engineering', ['aba', 'bcb', 'aba'], {
        a: "tfc:metal/double_sheet/steel", b: "kubejs:material_component_steel", c: 'create:precision_mechanism'
    }) //重型工程块
    event.shaped('minecraft:lead', ['aa ', 'aa ', '  a'], {
        a: 'farmersdelight:rope'
    }) // 栓绳
    event.shaped(Item.of('create:super_glue', '{Damage:400}'), ['aba', 'cbc', ' d '], {
        a: 'minecraft:lime_dye', b: 'tfc:glue', c: 'artisanal:metal/tinplate', d: 'tfc:jar_lid'
    }) // 强力胶
    event.shaped(Item.of('handcrafted:hammer'), ['a', 'c'], {
        a: 'tfc:metal/hammer_head/wrought_iron', c: '#tfc:lumber'
    }) // 家具锤
    event.shaped(Item.of('3x handcrafted:kitchen_hood_pipe'), ['a', 'a', 'a'], {
        a: 'tfc:metal/rod/cast_iron'
    }) // 装饰油烟机管道
    event.shaped(Item.of('3x handcrafted:kitchen_hood'), ['a', 'a', 'b'], {
        a: 'tfc:metal/rod/cast_iron', b: 'tfc:metal/sheet/cast_iron'
    }) // 装饰油烟机
    event.shaped(Item.of('handcrafted:fancy_painting'), ['a', 'b'], {
        a: 'minecraft:painting', b: 'kubejs:gold_fragments'
    }) // 高级画

    event.shaped('butcher:spitroast', ['aaa', 'b b', 'c c'], {
        a: 'tfc:metal/rod/cast_iron', b: '#minecraft:walls', c: '#tfc:rock/bricks'
    }) // 锻铁烤架
    event.shaped('tfc:bloomery', ['aba', 'c c', 'aba'], {
        a: 'tfc:brass_mechanisms',
        b: 'tfc:metal/double_sheet/brass',
        c: 'kubejs:brass_forge_door'
    }).modifyResult((inputit, outputit) => { //let brassForgeDoors = inputit.getOrCreateTag().getInt("tfc:forging_bonus");
        const doors = inputit.findAll("kubejs:brass_forge_door");
        for (let i = 0; i < doors.length; i++) {
            if (!doors[i].hasNBT) { return "air" }
            if (doors[i].getOrCreateTag().getInt("tfc:forging_bonus") < 1) {
                return "air"
            }
        }
        return outputit


    }).id('jeihide:brass_forge_door');
    event.shaped('tfc:bloomery', ['aba', 'c c', 'aba'], {
        a: 'tfc:brass_mechanisms',
        b: 'tfc:metal/double_sheet/brass',
        c: Item.of('kubejs:brass_forge_door', '{"tfc:forging_bonus":2}').weakNBT()
    }).modifyResult((inputit, outputit) => { //let brassForgeDoors = inputit.getOrCreateTag().getInt("tfc:forging_bonus");
        const doors = inputit.findAll("kubejs:brass_forge_door");
        for (let i = 0; i < doors.length; i++) {
            if (!doors[i].hasNBT) { return "air" }
            if (doors[i].getOrCreateTag().getInt("tfc:forging_bonus") < 1) {
                return "air"
            }
        }
        return outputit


    }).id('kubejs:/reciped/brass_forge_door');



    event.shaped('kubejs:cast_iron_indenter', [' a ', 'aaa'], {
        a: 'tfc:metal/double_ingot/cast_iron'
    }) //铸铁压头合成

    /*event.shaped('minecraft:prismarine_shard', ['aaa', 'aab', ' aa'], {
        a: {
            "type": "tfc:heatable",
            "min_temp": 120,
            "ingredient": { "item": "tfc:ore/normal_hematite" }

        }, b: '#tfc:knives'
    }).damageIngredient({ tag: '#tfc:knives' }, 20)//测试*/

    event.shaped(Item.of('butcher:boneskinningknife'), ['kubejs:bone_butchersknife_blade', '#forge:rods/wooden'])//骨头刀合成
    event.shaped(Item.of('butcher:bonebutchersknife'), ['kubejs:bone_skinningknife_blade', '#forge:rods/wooden'])//骨头刀合成
    event.shaped(Item.of('kubejs:bone_fishing_rod'), [['#forge:rods/wooden', 'farmersdelight:rope'], ['#forge:rods/wooden', 'kubejs:bone_fish_hook']])//骨头吊杆合成

    event.shaped("kubejs:leather_hot_water_bag", [' a ', 'bcb', 'dbd'], {
        a: '#tfc:lumber',
        b: 'minecraft:leather',
        c: "waterflasks:bladder",
        d: '#forge:string'
    }) //皮热水袋
    event.shaped("kubejs:rubber_hot_water_bag", [' a ', 'b b', ' b '], {
        a: '#tfc:lumber',
        b: "afc:rubber_bar"
    }) //橡胶热水袋
    event.shaped('kubejs:metal_hot_water_bag', [' a ', 'bcb', 'dbd'], {
        a: '#tfc:lumber',
        b: 'minecraft:leather',
        c: '#forge:sheets',
        d: '#forge:string'
    }) //金属热水袋'kubejs:heating_warmer'


    event.shaped('minecraft:chest', ['aaa', 'bcb', 'aaa'], {
        a: '#tfc:lumber',
        b: 'firmaciv:copper_bolt',
        c: '#tfc:saws'
    }).damageIngredient({ tag: '#tfc:saws' }, 5) //箱子合成

    event.shaped('minecraft:barrel', ['aba', 'aca', 'aba'], {
        a: '#tfc:lumber',
        b: 'firmaciv:copper_bolt',
        c: "minecraft:chest"
    }) //桶合成
    event.shaped('create:schematicannon',
        [
            ' a ',
            'bcb',
            'ddd'], {
        a: 'siegemachines:barrel',
        b: '#tfc:lumber',
        c: '#minecraft:logs',
        d: '#minecraft:slabs'
    }) //蓝图大炮
    event.shaped('minecraft:stonecutter',
        [
            ' a ',
            'bcb'
        ], {
        a: 'immersiveengineering:sawblade',
        b: '#tfc:rock/smooth',
        c: 'tfc:brass_mechanisms'
    }) //石切机

    event.shaped('farmersdelight:cooked_rice',
        [
            'aa ',
            'b  '
        ], {
        a: 'tfc:food/cooked_rice',
        b: 'minecraft:bowl'
    }) //米饭


    event.shaped('immersiveengineering:workbench',
        [
            ' a ',
            'bbc',
            'd e'
        ], {
        a: 'immersiveengineering:hammer',
        b: '#forge:treated_wood_slab',
        c: 'create:empty_schematic',
        d: 'immersiveengineering:craftingtable',
        e: 'immersiveengineering:treated_fence'
    }).replaceIngredient({ item: 'immersiveengineering:hammer', }, 'immersiveengineering:hammer',)//不消耗物品
    //工程师装配台

    /*event.forEachRecipe( //合成箱子
        {
            not: { input: ['#minecraft:logs', '#forge:chests'] },
            mod: 'quark',
            type: "crafting_shaped",
            output: "#forge:chests"
        }, r => {
            var chest_id = r.getOriginalRecipeResult().getId()
            var wood_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
            event.shaped(chest_id, [
                'SbS',
                'b b',
                'SbS'
            ], {
                S: wood_id,
                b: 'firmaciv:copper_bolt'
            })
        })*/
    event.shaped('spartanweaponry:wooden_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:stone_arrow',
            b: '#forge:rods/wooden',
            c: 'artisanal:trimmed_feather'
        })//石箭头
    event.shaped('spartanweaponry:copper_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:copper_arrow',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铜箭头
    event.shaped('spartanweaponry:iron_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:wrought_iron_arrow',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铁箭头
    event.shaped('spartanweaponry:diamond_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:steel_arrow',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//钢箭头
    event.shaped('spartanweaponry:netherite_arrow',
        ['a',
            'b',
            'c'],
        {
            a: 'kubejs:black_steel_arrow',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//高锰钢箭头
    event.shaped('2x spartanweaponry:netherite_bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/black_steel',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//高锰钢弩箭
    event.shaped('2x spartanweaponry:bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/wrought_iron',
            b: 'minecraft:stick',
            c: 'artisanal:trimmed_feather'
        })//铁弩箭

    event.shaped('2x spartanweaponry:diamond_bolt',
        ['a',
            'b',
            'c'],
        {
            a: 'tfc:metal/rod/steel',
            b: 'immersiveengineering:stick_treated',
            c: 'artisanal:trimmed_feather'
        })//钢弩箭


    event.shaped('4x kubejs:stone_arrow',
        ['aa',
            ' a'],
        {
            a: '#tfc:any_knapping'
        })//石箭头
    event.shaped('minecraft:bucket',
        ['cbc',
            ' c '],
        {
            c: TFC.ingredient.heatable('artisanal:metal/tinplate', 1200, null),
            b: '#tfc:hammers'
        }).damageIngredient({ tag: '#tfc:hammers' }, 10)//水桶


    event.shaped('4x brewinandchewin:tankard',
        [
            'a a',
            'a a',
            ' a '],
        {
            a: '#tfc:lumber'
        })//木杯


    event.shaped('legendarysurvivaloverhaul:healing_herbs',
        [
            'aa',
            'aa'
        ],
        {
            a: '#kubejs:can_make_herb',
        }),
        event.shaped('2x legendarysurvivaloverhaul:healing_herbs',
            [
                'aa',
                'aa'
            ],
            {
                a: '#kubejs:can_better_make_herb',
            }),
        //草药

        event.shaped('immersiveengineering:sawblade',
            [
                ' a ',
                'aba',
                ' a '],
            {
                a: TFC.ingredient.heatable('tfc:metal/rod/wrought_iron', 1200, null),
                b: TFC.ingredient.heatable('tfc:metal/sheet/wrought_iron', 1200, null),
            })//锯子

    event.shaped('1x kubejs:corundum_brick_block',
        [
            'aba',
            'bbb',
            'aba'],
        {
            a: 'kubejs:corundum_brick',
            b: 'tfc:mortar',
        })//刚玉砖块

    event.shaped('4x kubejs:charcoal_stick',
        [
            'ab',
            'a '
        ],
        {
            a: 'minecraft:charcoal',
            b: '#forge:tools/knives',
        }).replaceIngredient({ item: '#forge:tools/knives', }, '#forge:tools/knives',)//不消耗物品
    event.shaped('4x kubejs:charcoal_stick',
        [
            'ab',
            'a '
        ],
        {
            a: 'minecraft:coal',
            b: '#forge:tools/knives',
        }).replaceIngredient({ item: '#forge:tools/knives', }, '#forge:tools/knives',)//不消耗物品
    //炭笔

    event.shaped('minecraft:map',
        [
            'aa',
            'ab'
        ],
        {
            a: 'tfc:unrefined_paper',
            b: 'kubejs:charcoal_stick',
        })
    event.shaped('minecraft:map',
        [
            'aa',
            ' b'
        ],
        {
            a: 'kubejs:vellum',
            b: 'kubejs:charcoal_stick',
        })

    event.shaped('minecraft:map',
        [
            'ab'
        ],
        {
            a: 'minecraft:paper',
            b: 'kubejs:charcoal_stick',
        })
    //地图

    event.shaped('map_atlases:atlas',
        [
            'a ',
            'bc'
        ],
        {
            a: '#forge:leather',
            b: 'minecraft:map',
            c: 'artisanal:quill'
        })
    //地图册

    event.shaped('3x supplementaries:slice_map',
        [
            'a',
            'a',
            'a'
        ],
        {
            a: 'minecraft:map',
        })
    //切面地图

    event.shaped('createdieselgenerators:bulk_fermenter',
        [
            'dbd',
            'a a',
            'cbc'
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'vintageimprovements:andesite_sheet',
            c: 'tfc:metal/sheet/cast_iron',
            d: 'create:andesite_alloy'
        }
    ) //大型发酵储罐
    event.shaped('createdieselgenerators:basin_lid',
        [
            'cbc'
        ],
        {
            b: 'vintageimprovements:andesite_sheet',
            c: 'tfc:metal/sheet/cast_iron'
        }
    ) //工作盆盖板
    event.shaped('createdieselgenerators:oil_barrel',
        [
            'b',
            'c',
            'b'
        ],
        {
            b: 'tfc:metal/sheet/wrought_iron',
            c: '#tfc:barrels'
        }
    ) //燃油储罐
    event.shaped('kubejs:peel',
        [
            'b',
            'c'
        ],
        {
            c: '#forge:rods/wooden',
            b: '#tfc:lumber'
        }
    ) //小型铁流体储罐
    event.shaped('4x create:belt_connector',
        [
            'aba',
        ],
        {
            a: '#kubejs:fabric',
            b: '#kubejs:bindings',
        })//传送带
    event.shaped('5x create:belt_connector',
        [
            'aaa',
        ],
        {
            a: "afc:rubber_bar",
        })//传送带2
    event.shaped('legendarysurvivaloverhaul:sewing_table',
        [
            'abc',
            'bbb'
        ],
        {
            a: '#tfc:sewing_needles',
            b: '#tfc:lumber',
            c: 'tfc:brass_mechanisms',
        })//缝纫台
    event.shaped('sns:frame_pack',
        [
            'aba',
            'cec',
            'fef'
        ],
        {
            a: '#kubejs:advanced_binding',
            b: "sns:pack_frame",
            c: '#forge:leather',
            e: "sns:unfinished_leather_sack",
            f: "kubejs:hardened_leather"

        })//皮革背包
    event.shaped("sns:pack_frame",
        [
            ' a ',
            'a a',
            ' a '
        ],
        {
            a: TFC.ingredient.heatable('tfc:metal/rod/wrought_iron', 1200, null)

        })//背包框架

    event.shaped('minecraft:minecart', [
        'd d',
        'ddd'
    ], {

        d: 'tfc:metal/sheet/wrought_iron',
    })//矿车
    event.shaped('create:empty_blaze_burner', [
        'a a',
        'bcb',
        'ded'
    ], {
        a: 'minecraft:blaze_rod',
        b: 'tfc:metal/rod/wrought_iron',
        c: '#forge:stone_bricks',
        d: 'tfc:metal/sheet/wrought_iron',
        e: 'tfc:metal/double_sheet/wrought_iron'
    })//燃烧室框架
    event.shaped('createdieselgenerators:burner', [
        ' ab',
        'cdc',
        'efe'
    ], {
        a: 'create:fluid_pipe',
        b: '#kubejs:flint',
        c: 'tfc:metal/rod/cast_iron',
        d: 'createdieselgenerators:canister',
        e: 'tfc:metal/double_sheet/wrought_iron',
        f: 'create:fluid_valve',
    })//燃气炉
    event.shaped('vintageimprovements:spring_coiling_machine_wheel', [
        ' a ',
        'cbc',
        ' a '
    ], {
        a: 'tfc:metal/sheet/wrought_iron',
        b: 'create:andesite_alloy_block',
        c: 'vintageimprovements:andesite_sheet',
    })//卷簧轮
    event.shaped('vintageimprovements:spring_coiling_machine', [
        'abc',
        'ded'
    ], {
        a: 'tfc:metal/sheet/wrought_iron',
        b: 'create:shaft',
        c: 'vintageimprovements:spring_coiling_machine_wheel',
        d: 'vintageimprovements:andesite_sheet',
        e: 'create:andesite_casing',
    })//卷簧机

    event.shaped('vintageimprovements:vacuum_chamber', [
        ' a ',
        'ebe',
        'cdc'
    ], {
        a: 'create:fluid_pipe',
        b: 'createdieselgenerators:canister',
        c: 'vintageimprovements:andesite_sheet',
        d: 'create:mechanical_pump',
        e: 'vintageimprovements:andesite_sheet',
    })//压缩机

    event.shaped('supplementaries:sack', [
        ' a ',
        'b b',
        ' b '
    ], {
        a: 'farmersdelight:rope',
        b: 'tfc:burlap_cloth',
    })//麻布袋

    event.shaped('spartanweaponry:small_arrow_quiver', [
        'a a',
        'bcb',
        ' b '
    ], {
        a: '#kubejs:bindings',
        b: 'minecraft:leather',
        c: 'sns:unfinished_leather_sack',
    })//箭袋

    event.shaped('spartanweaponry:small_bolt_quiver', [
        'a a',
        'bcb'
    ], {
        a: '#kubejs:bindings',
        b: 'minecraft:leather',
        c: 'sns:unfinished_leather_sack',
    })//弩箭袋

    event.shaped('born_in_chaos_v1:hound_trap', [
        'aba',
        'cdc'
    ], {
        a: 'tfc:metal/hoe_head/wrought_iron',
        b: '#minecraft:wooden_pressure_plates',
        c: 'tfc:metal/rod/cast_iron',
        d: 'vintageimprovements:iron_spring',
    })//捕兽夹

    event.shaped('create_enchantment_industry:disenchanter', [
        'bab',
        'cdc'
    ], {
        a: 'create:sand_paper',
        b: 'tfc:metal/rod/black_bronze',
        c: 'tfc:metal/double_sheet/black_bronze',
        d: 'tfc:metal/sheet/brass',
    })//祛魔池

    event.shaped('fluid:copper_tap', [
        ' ab',
        ' c '
    ], {
        a: 'kubejs:material_component_steel',
        b: '#tfc:leather_knapping',
        c: 'tfc:metal/sheet/steel',
    })//钢龙头

    event.shaped('createmetallurgy:faucet', [
        'a a',
        ' b '
    ], {
        a: 'create:andesite_alloy',
        b: 'tfc:metal/sheet/cast_iron',
    })//龙头

    event.shaped('supplementaries:wicker_fence', [
        'aba',
        'aba'
    ], {
        a: 'minecraft:stick',
        b: 'farmersdelight:rope',
    })//藤条栅栏

    event.shaped('alexsmobs:vine_lasso', [
        ' aa',
        ' aa',
        'a  '
    ], {
        a: 'farmersdelight:rope',
    })//藤蔓套索

    event.shaped('3x moreburners:copper_coil', [
        ' a ',
        'aba',
        ' a '
    ], {
        a: 'immersiveengineering:wirecoil_copper',
        b: 'immersiveengineering:coil_lv',
    })//铜线圈

    event.shaped('moreburners:nickel_coil', [
        'cac',
        'aba',
        'cac'
    ], {
        a: 'immersiveengineering:wirecoil_electrum',
        b: 'immersiveengineering:coil_mv',
        c: 'immersiveengineering:wirecoil_steel',
    })//电阻线圈

    event.shaped('create:schematic_and_quill', [
        'ab'
    ], {
        a: 'create:empty_schematic',
        b: 'artisanal:quill',
    })//蓝图与笔

    event.shaped('supplementaries:soap', [
        ' b ',
        'bab',
        ' b '
    ], {
        a: 'artisanal:soap',
        b: 'minecraft:pink_dye',
    })//香皂

    event.shaped('create:item_drain', [
        ' a ',
        'b b',
        ' b '
    ], {
        a: 'tfc:pan/empty',
        b: 'tfc:metal/sheet/brass',
    })//分液池

    event.shaped('create:copper_backtank', [
        'ece',
        'bab',
        ' d '
    ], {
        a: 'createdieselgenerators:canister',
        b: 'tfc:metal/rod/copper',
        d: 'tfc:metal/unfinished_chestplate/copper',
        c: 'create:shaft',
        e: 'create:andesite_alloy'
    })//铜背罐

    event.shaped('vintageimprovements:vibrating_table', [
        'ece',
        'bab',
        ' d '
    ], {
        a: '#minecraft:wooden_slabs',
        b: 'vintageimprovements:iron_spring',
        d: 'create:mechanical_piston',
        c: 'tfc:pan/empty',
        e: 'vintageimprovements:andesite_sheet'
    })//振动筛

    event.shaped('kubejs:unfired_crucible_mold', [
        'a',
        'b'
    ],
        { a: 'tfc:ceramic/large_vessel', b: 'minecraft:clay', })
        .replaceIngredient({ item: 'tfc:ceramic/large_vessel', }, 'tfc:ceramic/large_vessel',)//不消耗物品 
    //未完成的黏土坩埚模具_1

    event.shaped('kubejs:unfired_crucible_mold', [

        'a',
        'b'
    ],
        {
            a: 'minecraft:cauldron',
            b: 'minecraft:clay',

        }).replaceIngredient({ item: 'minecraft:cauldron', }, 'minecraft:cauldron',)//不消耗物品
    //未完成的黏土坩埚模具_2


    event.shaped('12x firmalife:cheesecloth', [

        'a a',
        ' a '
    ],
        {
            a: 'tfc:wool_cloth',

        })
    //奶酪布配方

    event.shaped('siegemachines:beam', [

        'aaa'
    ],
        {
            a: '#valhelsia_structures:posts',

        })
    //木梁

    event.shaped('kubejs:dense_indenter', [

        ' a ',
        ' b ',
        'dcd'
    ],
        {
            a: 'tfc:metal/sheet/black_steel',
            b: 'tfc:metal/double_ingot/black_steel',
            c: 'tfc:metal/double_sheet/black_steel',
            d: 'tfc:metal/ingot/black_steel',

        })
    //致密压头
    event.shaped('2x create:brass_funnel', [

        ' a ',
        ' b ',
        ' c '
    ],
        {
            a: 'create:electron_tube',
            b: 'tfc:metal/sheet/wrought_iron',
            c: '#tfc:leather_knapping'

        })
    event.shaped('2x create:brass_funnel', [

        ' a ',
        ' b ',
        ' c '
    ],
        {
            a: 'create:electron_tube',
            b: 'tfc:metal/sheet/wrought_iron',
            c: 'afc:rubber_bar'

        })
    //金属漏斗【原黄铜漏斗】

    event.shaped('create:flywheel', [

        'cac',
        'aba',
        'cac'
    ],
        {
            a: 'tfc:metal/rod/wrought_iron',
            b: 'create:shaft',
            c: 'tfc:metal/ingot/wrought_iron'

        })
    //飞轮

    event.shaped('create:rotation_speed_controller', [

        ' a ',
        'bcb',
        ' d '
    ],
        {
            a: 'create:precision_mechanism',
            b: 'create:shaft',
            c: 'createcasing:crimson_cogwheel',
            d: 'tfc:metal/block/wrought_iron'

        })
    //转速控制器
    event.shaped('3x create:mechanical_crafter', [

        ' a ',
        'bcb',
        ' d '
    ],
        {
            a: 'create:electron_tube',
            b: 'tfc:metal/sheet/steel',
            c: 'create:depot',
            d: 'minecraft:crafting_table'

        })
    //动力合成器


    event.shaped('firmalife:drying_mat', [

        'a a',
        'bbb',
        'aca'
    ],
        {
            a: '#forge:rods/wooden',
            b: 'farmersdelight:canvas',
            c: '#tfc:lumber'

        })
    //干燥垫

    event.shaped('firmalife:solar_drier', [

        'ada',
        ' b ',
        'ccc'
    ],
        {
            a: 'vintageimprovements:andesite_rod',
            b: 'firmalife:drying_mat',
            c: '#tfc:lumber',
            d: 'minecraft:glass_pane'

        })
    //太阳干燥垫

    //=============================================================
    //=======================功能性存储配方==========================
    //=============================================================
    event.shaped('functionalstorage:linking_tool',
        [
            'aab',
            'cc '
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'immersiveengineering:wire_copper',
            c: 'minecraft:light_blue_dye'
        })//链接工具

    event.shaped('functionalstorage:configuration_tool',
        [
            'aab',
            'cc '
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'immersiveengineering:wire_copper',
            c: 'minecraft:lime_dye'
        })//配置工具

    event.shaped('functionalstorage:fluid_1',
        [
            'dad',
            'abc',
            'dad'
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'create:fluid_tank',
            c: '#forge:glass',
            d: 'firmaciv:copper_bolt'
        })//流体储罐

    event.shaped('functionalstorage:fluid_2',
        [
            'dad',
            'bcb',
            'dad'
        ],
        {
            a: 'tfc:metal/sheet/wrought_iron',
            b: 'create:fluid_tank',
            c: '#forge:glass',
            d: 'firmaciv:copper_bolt'
        })//流体储罐2

    event.shaped('functionalstorage:fluid_4',
        [
            'bcb',
            'dad',
            'bcb'
        ],
        {
            a: 'tfc:metal/double_sheet/wrought_iron',
            b: 'create:fluid_tank',
            c: '#forge:glass',
            d: 'firmaciv:copper_bolt'
        })//流体储罐4

    event.shaped('functionalstorage:simple_compacting_drawer',
        [
            'dbd',
            'aca',
            'dbd'
        ],
        {
            a: 'minecraft:piston',
            b: '#functionalstorage:drawer',
            c: 'tfc:metal/sheet/wrought_iron',
            d: 'tfc:metal/rod/wrought_iron'
        })//压缩抽屉2

    event.shaped('functionalstorage:compacting_drawer',
        [
            'dbd',
            'aca',
            'bdb'
        ],
        {
            a: 'minecraft:piston',
            b: '#functionalstorage:drawer',
            c: 'tfc:metal/sheet/wrought_iron',
            d: 'tfc:metal/rod/wrought_iron'
        })//压缩抽屉3

    event.shaped('functionalstorage:storage_controller',
        [
            'aba',
            'dcd',
            'aba'
        ],
        {
            a: 'tfc:metal/double_sheet/wrought_iron',
            b: 'tfc:metal/rod/wrought_iron',
            c: 'functionalstorage:configuration_tool',
            d: 'firmaciv:copper_bolt'
        })//存储控制器
    //=============================================================
    event.shaped('immersiveengineering:steel_scaffolding_grate_top', [
        'ab'
    ],
        { a: 'immersiveengineering:steel_scaffolding_standard', b: 'immersiveengineering:wirecutter', })
        .replaceIngredient({ item: 'immersiveengineering:wirecutter', }, 'immersiveengineering:wirecutter',)//不消耗物品
    //格栅钢脚手架

    event.shaped('immersiveengineering:steel_scaffolding_wooden_top', [
        'bbb',
        ' a '],
        { a: 'immersiveengineering:steel_scaffolding_standard', b: 'tfc_ie_addon:treated_wood_lumber', })
    //防腐木钢脚手架

    event.shaped('immersiveengineering:alu_scaffolding_grate_top', [
        'ab'
    ],
        { a: 'immersiveengineering:alu_scaffolding_standard', b: 'immersiveengineering:wirecutter', })
        .replaceIngredient({ item: 'immersiveengineering:wirecutter', }, 'immersiveengineering:wirecutter',)//不消耗物品
    //格栅铝脚手架

    event.shaped('immersiveengineering:alu_scaffolding_wooden_top', [
        'bbb',
        ' a '],
        { a: 'immersiveengineering:alu_scaffolding_standard', b: 'tfc_ie_addon:treated_wood_lumber', })
    //防腐木铝脚手架

    const tfc_metals = [
        'bronze',
        'black_bronze',
        'bismuth_bronze',
        'copper',
        'wrought_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'

    ];
    tfc_metals.forEach((tfc_metals) => {
        //喂食盆
        event.shaped(`tfcgroomer:${tfc_metals}_grooming_station`, [
            'a a',
            'cbc',
            'c c'
        ], {
            a: `tfc:metal/sheet/${tfc_metals}`,
            b: `tfc:metal/double_sheet/${tfc_metals}`,
            c: '#forge:rods/wooden'

        })
        event.shaped(`tfc:metal/fishing_rod/${tfc_metals}`, [
            '  g',
            ' gi',
            'dhi'
        ], {
            g: `tfc:metal/rod/${tfc_metals}`,
            i: '#bookshelf:strings',
            d: '#forge:rods/wooden',
            h: `tfc:metal/fish_hook/${tfc_metals}`

        })
    })
    //泛用兼容木材配方修改【TFC】
    const tfc_wooden = [
        { mod: 'tfc', wooden: 'acacia' },
        { mod: 'tfc', wooden: 'ash' },
        { mod: 'tfc', wooden: 'aspen' },
        { mod: 'tfc', wooden: 'birch' },
        { mod: 'tfc', wooden: 'blackwood' },
        { mod: 'tfc', wooden: 'chestnut' },
        { mod: 'tfc', wooden: 'douglas_fir' },
        { mod: 'tfc', wooden: 'hickory' },
        { mod: 'tfc', wooden: 'kapok' },
        { mod: 'tfc', wooden: 'mangrove' },
        { mod: 'tfc', wooden: 'maple' },
        { mod: 'tfc', wooden: 'oak' },
        { mod: 'tfc', wooden: 'palm' },
        { mod: 'tfc', wooden: 'pine' },
        { mod: 'tfc', wooden: 'rosewood' },
        { mod: 'tfc', wooden: 'sequoia' },
        { mod: 'tfc', wooden: 'spruce' },
        { mod: 'tfc', wooden: 'sycamore' },
        { mod: 'tfc', wooden: 'white_cedar' },
        { mod: 'tfc', wooden: 'willow' },
        { mod: 'afc', wooden: 'baobab' },
        { mod: 'afc', wooden: 'eucalyptus' },
        { mod: 'afc', wooden: 'mahogany' },
        { mod: 'afc', wooden: 'hevea' },
        { mod: 'afc', wooden: 'tualang' },
        { mod: 'afc', wooden: 'teak' },
        { mod: 'afc', wooden: 'cypress' },
        { mod: 'afc', wooden: 'fig' },
        { mod: 'afc', wooden: 'ironwood' },
        { mod: 'afc', wooden: 'ipe' }
    ];
    tfc_wooden.forEach(wood => {
        //============================================================
        //==========================抽屉===============================
        //============================================================

        //单格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_1`, [
            'bbb',
            'cac',
            'bbb'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:wood/lumber/${wood.wooden}`,
            c: 'firmaciv:copper_bolt'

        })
        //双格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_2`, [
            'bab',
            'cbc',
            'bab'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:wood/lumber/${wood.wooden}`,
            c: 'firmaciv:copper_bolt'

        })
        //四格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_4`, [
            'aba',
            'cbc',
            'aba'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:wood/lumber/${wood.wooden}`,
            c: 'firmaciv:copper_bolt'
        })

        //============================================================
        //==========================家具===============================
        //============================================================

        //板凳
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_stool`, [
            'bb',
            'aa'
        ], {
            a: `${wood.mod}:wood/planks/${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:wood/planks/${wood.wooden}_slab`,//台阶

        })
        //椅子
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_chair`, [
            'a ',
            'bb',
            'aa'
        ], {
            a: `${wood.mod}:wood/planks/${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:wood/planks/${wood.wooden}_slab`,//台阶

        })
        //草垫椅子
        event.shaped(`everycomp:vf/${wood.mod}/hay_${wood.wooden}_chair`, [
            'ab'
        ], {
            a: `everycomp:vf/${wood.mod}/${wood.wooden}_chair`,
            b: `minecraft:hay_block`,

        })
        //桌子
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_table`, [
            'bbb',
            'a a',
            'a a'
        ], {
            a: `${wood.mod}:wood/planks/${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:wood/planks/${wood.wooden}_slab`,//台阶

        })
        //书桌
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_desk`, [
            'bbb',
            'aca',
            'a a'
        ], {
            a: `${wood.mod}:wood/planks/${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:wood/planks/${wood.wooden}_slab`,//台阶
            c: `${wood.mod}:wood/planks/${wood.wooden}`,//木板

        })

        //抽屉桌
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_desk_drawer`, [
            'bbb',
            'aca',
            'a a'
        ], {
            a: `${wood.mod}:wood/planks/${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:wood/planks/${wood.wooden}_slab`,//台阶
            c: `minecraft:chest`,

        })

        event.shaped(`everycomp:rfm/${wood.mod}/${wood.wooden}_crate`, [
            'bab',
            'bcb',
            'bab'
        ], {
            a: 'firmaciv:copper_bolt',
            b: `${wood.mod}:wood/lumber/${wood.wooden}`,//木材
            c: `minecraft:chest`,

        })
    })


    //泛用兼容木材配方修改【非TFC】
    const wooden = [
        { mod: 'valhelsia_structures', wooden: 'lapidified_jungle' },
        { mod: 'born_in_chaos_v1', wooden: 'scorched' },
        { mod: 'eidolon', wooden: 'illwood' },
        { mod: 'alexscaves', wooden: 'pewen' },
        { mod: 'alexscaves', wooden: 'thornwood' },
        { mod: 'ad_astra', wooden: 'glacian' },
        { mod: 'ad_astra', wooden: 'strophar' },
        { mod: 'vinery', wooden: 'dark_cherry' },
        { mod: 'ad_astra', wooden: 'aeronos' }
    ];
    wooden.forEach(wood => {
        //单格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_1`, [
            'bbb',
            'cac',
            'bbb'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:${wood.wooden}_planks`,
            c: 'firmaciv:copper_bolt'

        })
        //双格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_2`, [
            'bab',
            'cbc',
            'bab'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:${wood.wooden}_planks`,
            c: 'firmaciv:copper_bolt'

        })
        //四格抽屉
        event.shaped(`everycomp:fs/${wood.mod}/${wood.wooden}_4`, [
            'aba',
            'cbc',
            'aba'
        ], {
            a: `create:item_vault`,
            b: `${wood.mod}:${wood.wooden}_planks`,
            c: 'firmaciv:copper_bolt'
        })

        //============================================================
        //==========================家具===============================
        //============================================================

        //板凳
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_stool`, [
            'bb',
            'aa'
        ], {
            a: `${wood.mod}:${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:${wood.wooden}_slab`,//台阶

        })
        /*
        //椅子
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_chair`, [
            'a ',
            'bb',
            'aa'
        ], {
            a: `${wood.mod}:${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:${wood.wooden}_slab`,//台阶

        })
        */
        //草垫椅子
        event.shaped(`everycomp:vf/${wood.mod}/hay_${wood.wooden}_chair`, [
            'ab'
        ], {
            a: `everycomp:vf/${wood.mod}/${wood.wooden}_chair`,
            b: `minecraft:hay_block`,

        })
        /*
        //桌子
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_table`, [
            'bbb',
            'a a',
            'a a'
        ], {
            a: `${wood.mod}:${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:${wood.wooden}_slab`,//台阶

        })
        */
        //书桌
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_desk`, [
            'bbb',
            'aca',
            'a a'
        ], {
            a: `${wood.mod}:${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:${wood.wooden}_slab`,//台阶
            c: `${wood.mod}:${wood.wooden}_plank`,//木板

        })

        //抽屉桌
        event.shaped(`everycomp:vf/${wood.mod}/${wood.wooden}_desk_drawer`, [
            'bbb',
            'aca',
            'a a'
        ], {
            a: `${wood.mod}:${wood.wooden}_fence`,//栅栏
            b: `${wood.mod}:${wood.wooden}_slab`,//台阶
            c: `minecraft:chest`,

        })

    })
    //event.shaped('create:fluid_tank', [['#forge:plates/copper'], ['immersiveengineering:wooden_barrel'], ['#forge:plates/copper']])//流体储罐
    event.shaped('create:item_vault', [['#forge:plates/iron'], ['immersiveengineering:crate'], ['#forge:plates/iron']])//机械动力保险箱
    event.shaped('2x create:item_vault', [["tfc:metal/sheet/steel"], ['immersiveengineering:crate'], ["tfc:metal/sheet/steel"]])//机械动力保险箱

    event.shaped('sophisticatedbackpacks:backpack', ['aba', 'cdc', 'eee'],
        {
            a: "sns:pack_frame",
            b: "kubejs:steel_handguard_weapon_part",
            c: "sns:unfinished_leather_sack",
            d: "kubejs:hardened_leather",
            e: "kubejs:leather_plate"
        })//背包合成困难
})



