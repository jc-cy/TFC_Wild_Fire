ServerEvents.recipes(event => {
    const { tfc, create, kubejs, immersiveengineering } = event.recipes;
    const id_in = "kubejs:recipe/shapeless/"

    event.shapeless('kubejs:unfired_mold_sheet', ['#forge:sheets', "minecraft:clay"]).keepIngredient({ item: '#forge:sheets' }); //未完成的板模具
    event.shapeless('kubejs:unfired_mold_rods', ['#forge:rods/all_metal',"minecraft:clay"]).keepIngredient({ item: '#forge:rods/all_metal' }); //未完成的棒模具


    event.shapeless('2x kubejs:charcoal_pellet', ['createdieselgenerators:wood_chip', '2x tfc:powder/charcoal', 'tfc:daub']);//木炭颗粒
    event.shapeless('2x kubejs:coal_pellet', ['kubejs:coal_powder', '2x tfc:powder/charcoal', 'tfc:daub']);//煤炭颗粒
    event.shapeless('2x kubejs:charcoal_briquette', ['8x kubejs:charcoal_pellet', 'tfc:daub']);//木屑块
    event.shapeless('2x kubejs:wood_briquette', ['8x kubejs:wood_pellet', 'tfc:daub']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
    event.shapeless('2x kubejs:coal_briquette', ['8x kubejs:coal_pellet', 'tfc:daub']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）

    event.shapeless('2x kubejs:wood_pellet', ['3x createdieselgenerators:wood_chip', '#kubejs:glue']);//木屑颗粒
    event.shapeless('2x kubejs:charcoal_pellet', ['createdieselgenerators:wood_chip', '2x tfc:powder/charcoal', '#kubejs:glue']);//木炭颗粒
    event.shapeless('2x kubejs:coal_pellet', ['kubejs:coal_powder', '2x tfc:powder/charcoal', '#kubejs:glue']);//煤炭颗粒
    event.shapeless('2x kubejs:coke_pellet', ['immersiveengineering:dust_coke', '2x kubejs:coal_powder', '#kubejs:glue']);//焦煤颗粒
    event.shapeless('2x kubejs:high_performance_fuel_pellet', ['tfc:powder/graphite', '2x immersiveengineering:dust_coke', '#kubejs:glue']);//高性能颗粒

    event.shapeless('2x kubejs:charcoal_briquette', ['8x kubejs:charcoal_pellet', '#kubejs:glue']);//木屑块
    event.shapeless('2x kubejs:wood_briquette', ['8x kubejs:wood_pellet', '#kubejs:glue']);//木料炭块（木屑颗粒原料3倍倍增，贴合炭块为颗粒压缩形态）
    event.shapeless('2x kubejs:coal_briquette', ['8x kubejs:coal_pellet', '#kubejs:glue']);//煤炭块（煤炭颗粒原料8倍倍增，匹配木炭块的原料数量级）
    event.shapeless('2x kubejs:coke_briquette', ['8x kubejs:coke_pellet', '#kubejs:glue']);//焦煤块（焦煤颗粒原料8倍倍增）
    event.shapeless('2x kubejs:high_performance_fuel_briquette', ['8x kubejs:high_performance_fuel_pellet', '#kubejs:glue']);//高性能燃料块（高性能颗粒原料8倍倍增，粘结剂沿用glue）



    event.shapeless('2x kubejs:wood_sustained_heat_pellet', ['7x kubejs:charcoal_pellet', '2x #kubejs:glue']);//木屑保温燃料块
    event.shapeless('2x kubejs:coal_sustained_heat_pellet', ['7x kubejs:coal_pellet', '2x #kubejs:glue']);//煤炭保温燃料块
    event.shapeless('2x kubejs:high_performance_fuel_sustained_heat_pellet', ['7x kubejs:high_performance_fuel_pellet', '2x #kubejs:glue']);//高性能保温燃料块

    event.shapeless('2x kubejs:wood_sustained_heat_pellet', ['7x kubejs:charcoal_pellet', '2x tfc:daub']);//木屑保温燃料块
    event.shapeless('2x kubejs:coal_sustained_heat_pellet', ['7x kubejs:coal_pellet', '2x tfc:daub']);//煤炭保温燃料块
    //event.shapeless('2x kubejs:high_performance_fuel_sustained_heat_pellet', ['7x kubejs:high_performance_fuel_pellet', '2x tfc:daub']);//高性能保温燃料块

    event.shapeless("6x scguns:powder_and_ball", ["2x minecraft:flint", "minecraft:gunpowder", "minecraft:paper"]);//纸包火药弹
    event.shapeless("6x scguns:grapeshot", ["3x minecraft:flint", "2x minecraft:gunpowder", "minecraft:paper"]);//纸包葡萄弹

    event.shapeless("12x scguns:powder_and_ball", ["2x immersiveengineering:nugget_lead", "minecraft:gunpowder", "minecraft:paper"]);//铅弹纸包火药弹
    event.shapeless("10x scguns:grapeshot", ["3x immersiveengineering:nugget_lead", "minecraft:gunpowder", "minecraft:paper"]);//铅弹纸包葡萄弹

    event.shapeless("3x scguns:powder_and_ball", ["2x minecraft:flint", "minecraft:gunpowder", "farmersdelight:canvas"]);//草布包火药弹
    event.shapeless("3x scguns:grapeshot", ["3x minecraft:flint", "2x minecraft:gunpowder", "farmersdelight:canvas"]);//草布包葡萄弹





    event.shapeless("4x kubejs:warm_warmer", ["tfc:powder/salt", "tfc:powder/charcoal", "immersiveengineering:dust_iron", "kubejs:rock_powder", "tfc:glue", "minecraft:paper"]);//暖宝宝
    kubejs.shapeless(
        "kubejs:rock_powder",
        [
            "tfc:rock/loose/andesite",
            "#forge:tools/hammers"
        ]
    ).damageIngredient("#forge:tools/hammers").id("tfcorewashing:rock_powder/hammering")



    kubejs.shapeless(
        "2x kubejs:wood_briquette",
        [
            "8x kubejs:wood_pellet",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/wood_briquette_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:charcoal_briquette",
        [
            "8x kubejs:charcoal_pellet",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/charcoal_briquette_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:coal_briquette",
        [
            "8x kubejs:coal_pellet",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/coal_briquette_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:coke_briquette",
        [
            "8x kubejs:coke_pellet",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/coke_briquette_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:high_performance_fuel_briquette",
        [
            "8x kubejs:high_performance_fuel_pellet",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/high_performance_fuel_briquette_from_super_glue")


    kubejs.shapeless(
        "2x kubejs:wood_pellet",
        [
            "3x createdieselgenerators:wood_chip",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/wood_pellet_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:charcoal_pellet",
        [
            "createdieselgenerators:wood_chip",
            "2x tfc:powder/charcoal",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/charcoal_pellet_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:coal_pellet",
        [
            "kubejs:coal_powder",
            "2x tfc:powder/charcoal",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/coal_pellet_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:coke_pellet",
        [
            "immersiveengineering:dust_coke",
            "2x tfc:powder/charcoal",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/coke_pellet_from_super_glue")
    kubejs.shapeless(
        "2x kubejs:high_performance_fuel_pellet",
        [
            "tfc:powder/graphite",
            "2x immersiveengineering:dust_coke",
            "create:super_glue"
        ]
    ).damageIngredient("create:super_glue").id("kubejs:crafting/high_performance_fuel_from_super_glue")



    /*
      // 金属锭锤碎成碎片配方（TFC模组适配，需锤子工具）
      event.shapeless('5x kubejs:copper_fragments', ['tfc:metal/ingot/copper', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 铜锭 → 5个铜碎片
      event.shapeless('5x kubejs:bismuth_bronze_fragments', ['tfc:metal/ingot/bismuth_bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 铋青铜锭 → 5个铋青铜碎片
      event.shapeless('5x kubejs:black_bronze_fragments', ['tfc:metal/ingot/black_bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 黑青铜锭 → 5个黑青铜碎片
      event.shapeless('5x kubejs:bronze_fragments', ['tfc:metal/ingot/bronze', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 青铜锭 → 5个青铜碎片
      event.shapeless('5x kubejs:red_steel_fragments', ['tfc:metal/ingot/red_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 精金锭 → 5个精金碎片
      event.shapeless('5x kubejs:steel_fragments', ['tfc:metal/ingot/steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 钢锭 → 5个钢碎片
      event.shapeless('5x kubejs:wrought_iron_fragments', ['tfc:metal/ingot/wrought_iron', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 锻铁锭 → 5个熟铁碎片
      event.shapeless('5x kubejs:black_steel_fragments', ['tfc:metal/ingot/black_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 锰钢锭 → 5个锰钢碎片
      event.shapeless('5x kubejs:blue_steel_fragments', ['tfc:metal/ingot/blue_steel', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 秘银锭 → 5个秘银碎片
      //event.shapeless('5x kubejs:silver_fragments', ['tfc:metal/ingot/silver', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 银锭 → 5个银碎片
      //event.shapeless('5x kubejs:gold_fragments', ['tfc:metal/ingot/gold', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' },3); // 金锭 → 5个金碎片
      */

    event.shapeless('3x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'tfc_ie_addon:powder/bauxite']); //碱化铝土生料
    event.shapeless('3x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'kubejs:item/ore/purified_dust/bauxite']); //碱化铝土生料
    event.shapeless('4x kubejs:alkalized_bauxite_raw_material', ['tfc:powder/salt', 'tfc:powder/flux', 'kubejs:item/ore/refined_dust/bauxite']); //碱化铝土生料

    event.shapeless('kubejs:aluminum_chromium_mix_powder', ['kubejs:alumina_powder', 'kubejs:item/ore/refined_dust/chromite']); //铬铝混合粉

    event.shapeless('kubejs:unfired_corundum_brick', ['kubejs:aluminum_chromium_mix_powder', 'minecraft:clay_ball', 'tfc:ceramic/ingot_mold']).keepIngredient({ item: 'tfc:ceramic/ingot_mold' }); //未完成的刚玉砖


    event.shapeless('create:super_glue', ['create:super_glue', '#kubejs:glue']).id("kubejs:crafting/super_glue_refill").modifyResult((inputItems, outputItem) => {
        const items = inputItems.findAll('create:super_glue')
        let glue = items[0].copy()
        let damageValue = Math.max(glue.damageValue - 50, 0)
        glue.setDamageValue(damageValue)
        return glue
    });//回耐久
    event.shapeless('supplementaries:candle_holder', ['tfc:candle', 'tfc:metal/ingot/cast_iron']).keepIngredient({ item: '#tfc:chisels' })//橡木原木  橡木

    event.shapeless('minecraft:oak_log', ['#tfc:chisels', 'tfc:wood/log/oak']).keepIngredient({ item: '#tfc:chisels' })//橡木原木  橡木
    event.shapeless('minecraft:oak_log', ['#tfc:chisels', 'afc:wood/log/ancient_oak']).keepIngredient({ item: '#tfc:chisels' })//橡木原木  古代
    event.shapeless('minecraft:spruce_log', ['#tfc:chisels', 'tfc:wood/log/spruce']).keepIngredient({ item: '#tfc:chisels' })//云杉木原木  云杉
    event.shapeless('minecraft:spruce_log', ['#tfc:chisels', 'afc:wood/log/ancient_spruce']).keepIngredient({ item: '#tfc:chisels' })//云杉木原木  古代
    event.shapeless('minecraft:birch_log', ['#tfc:chisels', 'tfc:wood/log/birch']).keepIngredient({ item: '#tfc:chisels' })//白桦木原木  白桦
    event.shapeless('minecraft:birch_log', ['#tfc:chisels', 'afc:wood/log/ancient_birch']).keepIngredient({ item: '#tfc:chisels' })//白桦木原木  古代
    event.shapeless('minecraft:jungle_log', ['#tfc:chisels', 'tfc:wood/log/kapok']).keepIngredient({ item: '#tfc:chisels' })//丛林木原木  木棉
    event.shapeless('minecraft:jungle_log', ['#tfc:chisels', 'afc:wood/log/ancient_kapok']).keepIngredient({ item: '#tfc:chisels' })//丛林木原木  古代
    event.shapeless('minecraft:acacia_log', ['#tfc:chisels', 'tfc:wood/log/acacia']).keepIngredient({ item: '#tfc:chisels' })//金合欢原木  金合欢
    event.shapeless('minecraft:acacia_log', ['#tfc:chisels', 'afc:wood/log/ancient_acacia']).keepIngredient({ item: '#tfc:chisels' })//金合欢原木  古代
    event.shapeless('minecraft:dark_oak_log', ['#tfc:chisels', 'afc:wood/log/black_oak']).keepIngredient({ item: '#tfc:chisels' })//深色木原木  黑橡木
    event.shapeless('minecraft:dark_oak_log', ['#tfc:chisels', 'afc:wood/log/ancient_black_oak']).keepIngredient({ item: '#tfc:chisels' })//深色橡木原木  古代
    event.shapeless('minecraft:mangrove_log', ['#tfc:chisels', 'tfc:wood/log/mangrove']).keepIngredient({ item: '#tfc:chisels' })//红木原木  红木
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  无花果
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/rubber_fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  古代无花果
    event.shapeless('minecraft:cherry_log', ['#tfc:chisels', 'afc:wood/log/ancient_fig']).keepIngredient({ item: '#tfc:chisels' })//樱花原木  橡皮树

    event.shapeless('2x kubejs:vellum', ['#tfc:knives', 'tfc:treated_hide']).damageIngredient({ tag: '#tfc:knives' }, 5).id(`${id_in}vellum`)//兽皮纸
    //event.shapeless(Item.of('create_power_loader:brass_chunk_loader'), ['create_power_loader:empty_brass_chunk_loader']);//黄铜区块加载器
    //event.shapeless(Item.of('create_power_loader:andesite_chunk_loader'), ['create_power_loader:empty_andesite_chunk_loader']);//安山区块加载

    event.shapeless(Item.of('create_new_age:magnetite_block'), ['9x tfcorewashing:rocky_chunks_magnetite']);//磁铁矿块

    //event.shapeless(Item.of('4x tfcorewashing:pellet_malachite'),['tfcorewashing:briquet_malachite'])
    event.shapeless(Item.of('minecraft:kelp'), ['tfc:plant/leafy_kelp'])
    event.shapeless(Item.of('4x tfc:plant/moss'), ['tfc:plant/moss', 'tfc:groundcover/humus'])
    event.shapeless(Item.of('minecraft:moss_block'), ['tfc:plant/moss', '#minecraft:dirt'])
    event.shapeless(Item.of('2x minecraft:tuff'), ['2x minecraft:flint', '2x #forge:gravel'])//燧石
    event.shapeless(Item.of('9x minecraft:spruce_planks'), ['9x afc:wood/planks/cypress'])
    //  event.shapeless(Item.of('vinery:cherry_sapling'),['tfc:plant/cherry_sapling'])//樱桃树苗
    event.shapeless(Item.of('minecraft:amethyst_shard'), ['tfc:gem/amethyst'])//紫水晶

    event.shapeless(Item.of('kubejs:unfired_mold_simple_key', 1), [//合成简易钥匙模具
        'kubejs:old_key',
        "minecraft:clay"
    ])
    //.replaceIngredient({ item:'kubejs:old_key', }, 'kubejs:old_key',)//这是不消耗钥匙

    // event.shapeless('kubejs:tfc/crushed_sinew', ['kubejs:tfc/dried_sinew', '#tfc:hammers']).damageIngredient({ tag: '#tfc:hammers' }, 1)//捣碎筋腱
    //event.shapeless('2x kubejs:tfc/sinew_thread', ['kubejs:tfc/crushed_sinew', '#tfc:knives']).damageIngredient({ tag: '#tfc:knives' }, 1)//筋线

    const woodTypes = ['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut', 'douglas_fir', 'hickory', 'kapok', 'mangrove', 'maple', 'oak', 'palm', 'pine', 'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow',];
    const adcwoodTypes = ['baobab', 'black_oak', 'cypress', 'eucalyptus', 'fig', 'gum_arabic', 'hevea', 'ipe', 'ironwood', 'mahogany', 'poplar', 'rainbow_eucalyptus', 'redcedar', 'rubber_fig', 'teak', 'tualang',];


    woodTypes.forEach(woodType => {
        event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
            `tfc:wood/log/${woodType}`,
            '#tfc:knives'
        ])
            .replaceIngredient({ item: `tfc:wood/log/${woodType}` }, `tfc:wood/stripped_log/${woodType}`)
            .damageIngredient({ tag: '#tfc:knives' }, 2);

    });
    adcwoodTypes.forEach(adcwoodTypes => {
        event.shapeless(Item.of('farmersdelight:tree_bark', 1), [
            `afc:wood/log/${adcwoodTypes}`,
            '#tfc:knives'
        ])
            .replaceIngredient({ item: `afc:wood/log/${adcwoodTypes}` }, `afc:wood/stripped_log/${adcwoodTypes}`)
            .damageIngredient({ tag: '#tfc:knives' }, 2);


    });
})