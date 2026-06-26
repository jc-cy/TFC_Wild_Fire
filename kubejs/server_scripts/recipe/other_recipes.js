ServerEvents.recipes(event => {
  const { tfc, create, kubejs, immersiveengineering } = event.recipes;

  tfc.casting('2x tfc:brass_mechanisms', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/brass', 100), 1)//黄铜机件
  tfc.casting('5x firmaciv:copper_bolt', 'kubejs:mold_mechanical', TFC.fluidStackIngredient('tfc:metal/copper', 100), 1)//铜螺栓


  tfc.casting('tfc:metal/sheet/copper', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/copper', 200), 1)//铜板
  tfc.casting('tfc:metal/sheet/rose_gold', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/rose_gold', 200), 1)//玫瑰金板
  tfc.casting('tfc:metal/sheet/silver', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/silver', 200), 1)//银板
  tfc.casting('tfc:metal/sheet/tin', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/tin', 200), 1)//锡板
  tfc.casting('tfc:metal/sheet/zinc', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/zinc', 200), 1)//锌板
  tfc.casting('tfc:metal/sheet/black_bronze', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/black_bronze', 200), 1)//黑青铜板
  tfc.casting('tfc:metal/sheet/cast_iron', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/cast_iron', 200), 1)//铸铁板
  tfc.casting('tfc:metal/sheet/bismuth', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/bismuth', 200), 1)//铋板
  tfc.casting('tfc:metal/sheet/brass', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/brass', 200), 1)//黄铜板
  tfc.casting('tfc:metal/sheet/bronze', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/bronze', 200), 1)//青铜板
  tfc.casting('tfc:metal/sheet/bismuth_bronze', 'kubejs:mold_sheet', TFC.fluidStackIngredient('tfc:metal/bismuth_bronze', 200), 1)//铋青铜板

  tfc.casting("tfc:metal/rod/copper", 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/copper', 50), 1)//铜棒
  tfc.casting("tfc:metal/rod/bronze", 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/bronze', 50), 1)//青铜棒
  tfc.casting('tfc:metal/rod/rose_gold', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/rose_gold', 50), 1)//玫瑰金棒
  tfc.casting('tfc:metal/rod/silver', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/silver', 50), 1)//银棒
  tfc.casting('tfc:metal/rod/tin', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/tin', 50), 1)//锡棒
  tfc.casting('tfc:metal/rod/zinc', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/zinc', 50), 1)//锌棒
  tfc.casting('tfc:metal/rod/black_bronze', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/black_bronze', 50), 1)//黑青铜棒
  tfc.casting('tfc:metal/rod/cast_iron', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/cast_iron', 50), 1)//铸铁棒
  tfc.casting('tfc:metal/rod/bismuth', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/bismuth', 50), 1)//铋棒
  tfc.casting('tfc:metal/rod/brass', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/brass', 50), 1)//黄铜棒
  tfc.casting('tfc:metal/rod/bismuth_bronze', 'kubejs:mold_rods', TFC.fluidStackIngredient('tfc:metal/bismuth_bronze', 50), 1)//铋青铜棒

  create.sandpaper_polishing("kubejs:iron_needle", "tfc:metal/rod/wrought_iron")
  create.sandpaper_polishing("kubejs:steel_needle", "tfc:metal/rod/steel")

  /*create.sequenced_assembly('kubejs:hologram_frontpanel', 'tfc:metal/sheet/black_steel',
    [create.deploying(inputcailiao, [inputcailiao, 'tfc:metal/double_sheet/wrought_iron']),
    create.deploying(inputcailiao, [inputcailiao, 'mekanism:elite_control_circuit']),
    create.deploying(inputcailiao, [inputcailiao, 'ae2:printed_calculation_processor']),
    create.deploying(inputcailiao, [inputcailiao, 'ae2:printed_engineering_processor']),
    create.deploying(inputcailiao, [inputcailiao, 'ad_astra:photovoltaic_etrium_cell']),
    create.pressing(inputcailiao, inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//六方全息面板*/


  create.sequenced_assembly("2x kubejs:iron_needle", "tfc:metal/rod/wrought_iron",
    [create.cutting("tfc:metal/rod/wrought_iron", "tfc:metal/rod/wrought_iron"),
    event.custom({ "type": "vintageimprovements:polishing", "speedLimits": 1, "ingredients": [{ "item": "tfc:metal/rod/wrought_iron" }], "results": [{ "item": "tfc:metal/rod/wrought_iron", "count": 1 }], "processingTime": 20 }),
    event.custom({ "type": "vintageimprovements:polishing", "speedLimits": 1, "ingredients": [{ "item": "tfc:metal/rod/wrought_iron" }], "results": [{ "item": "tfc:metal/rod/wrought_iron", "count": 1 }], "processingTime": 20 })
    ]
  ).transitionalItem("tfc:metal/rod/wrought_iron").loops(1)//铁针

  create.sequenced_assembly("2x kubejs:steel_needle", "tfc:metal/rod/steel",
    [create.cutting("tfc:metal/rod/steel", "tfc:metal/rod/steel"),
    event.custom({ "type": "vintageimprovements:polishing", "speedLimits": 1, "ingredients": [{ "item": "tfc:metal/rod/steel" }], "results": [{ "item": "tfc:metal/rod/steel", "count": 1 }], "processingTime": 20 }),
    event.custom({ "type": "vintageimprovements:polishing", "speedLimits": 1, "ingredients": [{ "item": "tfc:metal/rod/steel" }], "results": [{ "item": "tfc:metal/rod/steel", "count": 1 }], "processingTime": 20 })
    ]
  ).transitionalItem("tfc:metal/rod/steel").loops(1)//钢针


  //create.cutting("2x kubejs:iron_needle","tfc:metal/rod/wrought_iron")
  //create.cutting("2x kubejs:steel_needle","tfc:metal/rod/steel")
  //安山合金合成

  tfc.barrel_sealed(16000)
    .outputItem('create:rose_quartz_block')
    .inputs('tfc_ie_addon:mineral/quartz_block', TFC.fluidStackIngredient('immersiveengineering:redstone_acid', 1000))



  tfc.casting(
    'kubejs:trachyandesite_alloy',
    'kubejs:rock_powder',
    TFC.fluidStackIngredient('tfc:metal/zinc', 40),
    1
  )
  tfc.pot(
    [
      'minecraft:redstone',
      'minecraft:redstone',
      'minecraft:redstone',
      'minecraft:redstone'
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 1000),
    // 熬制温度：
    200,
    // 熬制时间：
    2000
  ).outputs([], Fluid.of('immersiveengineering:redstone_acid', 200),
  )//红石酸

  tfc.pot(

    [
      'kubejs:rubber_hot_water_bag'
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 100),
    // 熬制温度：
    200,
    // 熬制时间：
    200
  ).itemOutput(TFC.itemStackProvider.of('kubejs:rubber_hot_water_bag').addHeat(100))// 输出物品：橡胶热水袋
  tfc.pot(

    [
      'kubejs:leather_hot_water_bag'
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 100),
    // 熬制温度：
    200,
    // 熬制时间：
    200
  ).itemOutput(TFC.itemStackProvider.of('kubejs:leather_hot_water_bag').addHeat(60))// 输出物品：皮革热水袋
  create.milling(
    'kubejs:rock_powder',
    "tfc:rock/loose/andesite",
  ).id("tfcorewashing:rock_powder/milling")
  tfc.pot(

    [
      "kubejs:metal_hot_water_bag"
    ],
    // 输入流体：100mb 水
    Fluid.of('minecraft:water', 100),
    // 熬制温度：
    200,
    // 熬制时间：
    200
  ).itemOutput(TFC.itemStackProvider.of("kubejs:metal_hot_water_bag").addHeat(100))// 输出物品：金属热水袋



  const rockinout = [

    { in: "granite", out: "granite" },
    { in: "diorite", out: "diorite" },
    { in: "gabbro", out: "gabbro" },
    { in: "rhyolite", out: "rhyolite" },
    { in: "basalt", out: "basalt" },
    { in: "dacite", out: "dacite" }
  ];
  rockinout.forEach(rock => {

    event.shaped(`wildfires:${rock.out}_millstone`, [
      'tfc:handstone', 'kubejs:andesite_chassis', `tfc:rock/smooth/${rock.in}`
    ]);//石磨
    create.mechanical_crafting(`2x wildfires:${rock.out}_crushing_wheel`, [
      " aba ",
      "acdca",
      "bdedb",
      "acdca",
      " aba ",
    ], {
      a: `tfc:rock/smooth/${rock.in}`,
      b: 'tfc:metal/sheet/wrought_iron',
      c: 'vintageimprovements:andesite_sheet',
      d: '#minecraft:logs',
      e: 'create:large_cogwheel',
    }) // 粉碎轮
  })

  event.shaped('create:millstone', [
    'tfc:handstone', 'kubejs:andesite_chassis', 'tfc:rock/smooth/andesite'
  ]);//石磨
  create.mechanical_crafting('2x create:crushing_wheel', [
    " aba ",
    "acdca",
    "bdedb",
    "acdca",
    " aba ",
  ], {
    a: 'tfc:rock/smooth/andesite',
    b: 'tfc:metal/sheet/wrought_iron',
    c: 'vintageimprovements:andesite_sheet',
    d: '#minecraft:logs',
    e: 'create:large_cogwheel',
  }) // 粉碎轮
  create.mechanical_crafting('createdieselgenerators:pumpjack_bearing', [
    " a a ",
    "ebcbe",
    " ada ",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/double_sheet/zinc',
    c: 'create:mechanical_bearing',
    d: 'create:percision_mechanism',
    e: 'create:shaft',
  }) // 抽油机轴承
  create.mechanical_crafting('createdieselgenerators:pumpjack_head', [
    " aba",
    "cd  ",
    " aba",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/sheet/zinc',
    c: 'create:andesite_alloy_block',
    d: 'tfc:metal/rod/steel',
  }) // 抽油机驴头
  event.shaped('createdieselgenerators:diesel_engine', [
    "aba",
    "aca",
    "ded"
  ], {
    a: 'createdieselgenerators:engine_piston',
    b: 'vintageimprovements:andesite_sheet',
    c: 'minecraft:flint',
    d: 'tfc:metal/sheet/cast_iron',
    e: 'createdieselgenerators:canister'
  }) // 小型柴油引擎

  create.mechanical_crafting('createdieselgenerators:large_diesel_engine', [
    " b ",
    "aca",
    "dbd",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/block/wrought_iron_slab',
    c: 'createdieselgenerators:diesel_engine',
    d: 'tfc:metal/sheet/cast_iron',
  }) // 模块柴油引擎
  create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', [
    "aba c",
    "defgh",
    "aba c",
  ], {
    a: 'vintageimprovements:andesite_sheet',
    b: 'tfc:metal/sheet/wrought_iron',
    c: 'create:andesite_alloy_block',
    d: 'create:fluid_pipe',
    e: 'tfc:metal/block/steel',
    f: 'tfc:metal/rod/wrought_iron',
    g: 'tfc:metal/sheet/bronze',
    h: 'create:shaft',
  }) // 大型柴油引擎
  create.mechanical_crafting('moreburners:electric_burner', [
    " aaa ",
    "cbbbc",
    " ede ",
    " gfg ",
  ], {
    a: 'firmalife:reinforced_glass',
    b: 'moreburners:copper_coil',
    c: 'tfc:metal/rod/steel',
    d: 'immersiveengineering:furnace_heater',
    e: 'tfc:metal/double_sheet/wrought_iron',
    f: 'create:empty_blaze_burner',
    g: 'tfc:metal/sheet/wrought_iron',
  }) // 电磁炉
  create.mechanical_crafting('createdieselgenerators:pumpjack_crank', [
    "a a",
    "dbd",
    "cec",
    "fbf",
    "cec",
  ], {
    a: 'create:metal_girder',
    b: 'create:shaft',
    c: 'vintageimprovements:andesite_sheet',
    d: 'vintageimprovements:iron_spring',
    e: 'tfc:metal/double_sheet/zinc',
    f: 'tfc:metal/sheet/cast_iron',
  }) // 抽油机曲柄
  create.mechanical_crafting('createdieselgenerators:engine_piston', [
    "a",
    "d",
    "b",
    "c",
  ], {
    a: 'tfc:metal/sheet/wrought_iron',
    b: 'tfc:metal/rod/wrought_iron',
    c: 'create:zinc_nugget',
    d: 'tfc:brass_mechanisms',
  }) // 引擎活塞
  event.shaped('3x createdieselgenerators:engine_silencer',
    [
      'ca ',
      'aca',
      ' ab'
    ],
    {
      a: 'vintageimprovements:andesite_sheet',
      b: 'tfc:metal/rod/wrought_iron',
      c: '#loot:clean_cloth'
    }
  ) //引擎消嘤器
  create.mechanical_crafting('2x createdieselgenerators:engine_turbocharger', [
    "cba",
    "bdb",
    " b ",
  ], {
    a: 'create:fluid_pipe',
    b: 'vintageimprovements:andesite_sheet',
    c: 'tfc:metal/sheet/wrought_iron',
    d: 'create:propeller',
  }) // 引擎涡轮增压器


  function farmersdelight_cutting(outputitem, inputitem, num, tool, id) {
    let processedTool = tool; // 先定义变量接收原始tool值
    if (processedTool.startsWith('#')) { // 判断是否以#开头
      processedTool = processedTool.substring(1); // 截取从第2个字符开始的字符串，移除#
    }

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": inputitem }],
      "result": [{ "count": num, "item": outputitem }],
      "tool": { "tag": processedTool } // 使用处理后的tool参数
    }).id(id);

    //console.log(`调用成功`);
  }



  farmersdelight_cutting(`kubejs:copper_fragments`, 'tfc:metal/ingot/copper', 5, 'tfc:hammers', `kubejs:cutting_reciped_copper_fragments`)// 铜锭 → 5个铜碎片
  farmersdelight_cutting(`kubejs:bismuth_bronze_fragments`, 'tfc:metal/ingot/bismuth_bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_bismuth_bronze_fragments`)// 铋青铜锭 → 5个铋青铜碎片
  farmersdelight_cutting(`kubejs:black_bronze_fragments`, 'tfc:metal/ingot/black_bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_black_bronze_fragments`)// 黑青铜锭 → 5个黑青铜碎片
  farmersdelight_cutting(`kubejs:bronze_fragments`, 'tfc:metal/ingot/bronze', 5, 'tfc:hammers', `kubejs:cutting_reciped_bronze_fragments`)// 青铜锭 → 5个青铜碎片
  farmersdelight_cutting(`kubejs:red_steel_fragments`, 'tfc:metal/ingot/red_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_red_steel_fragments`)// 精金锭 →
  farmersdelight_cutting(`kubejs:steel_fragments`, 'tfc:metal/ingot/steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_steel_fragments`)// 钢锭 → 5个钢碎片
  farmersdelight_cutting(`kubejs:wrought_iron_fragments`, 'tfc:metal/ingot/wrought_iron', 5, 'tfc:hammers', `kubejs:cutting_reciped_wrought_iron_fragments`)// 锻铁锭 → 5个熟铁碎片
  farmersdelight_cutting(`kubejs:black_steel_fragments`, 'tfc:metal/ingot/black_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_black_steel_fragments`)// 高锰钢锭 → 5个高锰钢碎片
  farmersdelight_cutting(`kubejs:blue_steel_fragments`, 'tfc:metal/ingot/blue_steel', 5, 'tfc:hammers', `kubejs:cutting_reciped_blue_steel_fragments`)// 秘银锭 → 5个秘银碎片

  // 皮毛/皮革 JS 数组
  const furAndLeatherItems = [
    { furid: 'crocodile_leather', fur: 'crocodile_leather', modid: 'textile', size: 'large' },
    { furid: 'lion_fur', fur: 'lion_fur', modid: 'textile', size: 'large' },
    { furid: 'tiger_fur', fur: 'tiger_fur', modid: 'textile', size: 'large' },
    { furid: 'panther_fur', fur: 'panther_fur', modid: 'textile', size: 'large' },
    { furid: 'sabertooth_fur', fur: 'sabertooth_fur', modid: 'textile', size: 'large' },
    { furid: 'cougar_fur', fur: 'cougar_fur', modid: 'textile', size: 'large' },
    { furid: 'direwolf_fur', fur: 'direwolf_fur', modid: 'textile', size: 'large' },
    { furid: 'polar_bear_fur', fur: 'polar_bear_fur', modid: 'textile', size: 'large' },
    { furid: 'caribou_fur', fur: 'caribou_fur', modid: 'textile', size: 'large' },
    { furid: 'grizzly_bear_fur', fur: 'grizzly_bear_fur', modid: 'textile', size: 'large' },
    { furid: 'black_bear_fur', fur: 'black_bear_fur', modid: 'textile', size: 'large' },
    { furid: 'bison_fur', fur: 'bison_fur', modid: 'kubejs', size: 'large' },
    //屠宰的


    //'tfc:large_sheepskin_hide'
  ];
  for (var i = 0; i < furAndLeatherItems.length; i++) {
    var ore = furAndLeatherItems[i];
    // console.log("开始调用");
    farmersdelight_cutting('tfc:large_raw_hide', `${ore.modid}:${ore.fur}`, 1, 'tfcscraping:scraping_knives', `kubejs:cutting_reciped_furleather_${i}`)// 皮毛/皮革处理生皮

    tfc.scraping(
      `tfc:${ore.size}_raw_hide`,
      `${ore.modid}:${ore.fur}`,
      `kubejs:item/tfc/fur/${ore.size}_raw_hide`,
      `kubejs:item/tfc/fur/${ore.furid}`
    )
  }

  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:large_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:large_raw_hide' },
    { "item": 'tfc:wool', "count": 3 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_large_sheepskin_hide`)//大羊毛
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:medium_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:medium_raw_hide' },
    { "item": 'tfc:wool', "count": 2 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_medium_sheepskin_hide`)//中羊毛
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:small_sheepskin_hide' }]
    , "result": [{ "item": 'tfc:small_raw_hide' },
    { "item": 'tfc:wool', "count": 1 }]
    , "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_small_sheepskin_hide`)//小羊毛 

  event.custom({

    "type": "farmersdelight:cutting",
    "ingredients": [{ "item": 'tfc:large_soaked_hide' }],
    "result": [{ "item": 'tfc:large_scraped_hide' }],
    "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_large_soaked_hide`)//大浸泡皮
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:medium_soaked_hide' }],
    "result": [{ "item": 'tfc:medium_scraped_hide' }],
    "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_medium_soaked_hide`)//中浸泡皮
  event.custom({

    "type": "farmersdelight:cutting", "ingredients": [{ "item": 'tfc:small_soaked_hide' }],
    "result": [{ "item": 'tfc:small_scraped_hide' }],
    "sound": "minecraft:item.axe.strip", "tool":
      { "tag": 'tfcscraping:scraping_knives', "action": "axe_strip" }
  }).id(`kubejs:cutting_reciped_small_soaked_hidee`)//小浸泡皮

  tfc.quern('kubejs:item/ore/dirty_dust/hematite', 'kubejs:warm_warmer')
  //手推磨磨粉
  create.milling('kubejs:item/ore/dirty_dust/hematite', 'kubejs:warm_warmer')
  //机械动力磨粉

  tfc.quern('kubejs:item/ore/dirty_dust/hematite', 'kubejs:heating_warmer')
  //手推磨磨粉
  create.milling('kubejs:item/ore/dirty_dust/hematite', 'kubejs:heating_warmer')
  //机械动力磨粉

  "kubejs:wrought_iron_fragments"

  tfc.quern("immersiveengineering:dust_iron", "kubejs:wrought_iron_fragments")
  //手推磨磨粉 铁粉
  create.milling(["immersiveengineering:dust_iron"], "kubejs:wrought_iron_fragments")
  //机械动力磨粉 铁粉
})
ServerEvents.recipes(event => {




  event.forEachRecipe(//合成木板
    {
      not: { mod: 'quark' },
      type: "crafting_shapeless",
      output: "#minecraft:planks"
    }, r => {
      var slab_id = r.getOriginalRecipeResult().getId()
      var block_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]
      event.shapeless(Item.of(slab_id, 2), [block_id, '#tfc:saws']).damageIngredient({ tag: '#tfc:saws' }, 1)
    })
  event.remove([{ not: { mod: "kubejs" }, input: "#minecraft:logs", type: "crafting_shapeless", output: "#minecraft:planks" }])//移除所有合成木板配方
  event.remove([{ not: { mod: "kubejs" }, input: ["#minecraft:logs", "#minecraft:planks"], type: "crafting_shaped", output: "#forge:chests" }])//移除所有箱子配方





})//region木板，箱子
ServerEvents.recipes(event => {

  function farmersdelight_cutting(outputitem, inputitem, num, tool) {
    let processedTool = tool; // 先定义变量接收原始tool值
    if (processedTool.startsWith('#')) { // 判断是否以#开头
      processedTool = processedTool.substring(1); // 截取从第2个字符开始的字符串，移除#
    }

    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": inputitem }],
      "result": [{ "count": num, "item": outputitem }],
      "tool": { "tag": processedTool } // 使用处理后的tool参数
    });
  }

  event.replaceInput({ output: 'ars_nouveau:scribes_table' }, '#forge:logs/archwood', '#forge:ingots/steel')
  event.replaceInput({ output: 'ars_nouveau:scribes_table' }, 'ars_nouveau:archwood_slab', 'immersiveengineering:slab_treated_wood_horizontal')
  event.replaceInput({ output: 'create:tree_fertilizer' }, '#forge:coral', 'coralstfc:coral_powder')//珊瑚
  event.replaceInput({ output: '@mekanism' }, "tfc:metal/ingot/wrought_iron", 'tfc:metal/ingot/steel')
  event.replaceInput({ output: '@mekanism' }, 'minecraft:iron_ingot', 'tfc:metal/ingot/steel')


  //致密压头压中间锭配方
  const high_carbon_metal =
    [
      { metal1: 'kubejs:hot_raw_nickel_bloom', metal2: 'kubejs:refined_nickel_bloom', },
      { metal1: 'kubejs:hot_raw_iron_bloom', metal2: 'tfc:refined_iron_bloom', },
      { metal1: 'tfc:raw_iron_bloom', metal2: 'tfc:refined_iron_bloom', },
      { metal1: 'tfc:refined_iron_bloom', metal2: 'tfc:metal/ingot/wrought_iron', },
      { metal1: 'kubejs:raw_nickel_bloom', metal2: 'kubejs:refined_nickel_bloom', },
      { metal1: 'kubejs:refined_nickel_bloom', metal2: 'tfc:metal/ingot/nickel', },
      { metal1: 'tfc:metal/ingot/pig_iron', metal2: 'tfc:metal/ingot/high_carbon_steel', },
      { metal1: 'tfc:metal/ingot/high_carbon_steel', metal2: 'tfc:metal/ingot/steel', },
      { metal1: 'tfc:metal/ingot/high_carbon_black_steel', metal2: 'tfc:metal/ingot/black_steel', },
      { metal1: 'tfc:metal/ingot/high_carbon_blue_steel', metal2: 'tfc:metal/ingot/blue_steel', },
      { metal1: 'tfc:metal/ingot/high_carbon_red_steel  ', metal2: 'tfc:metal/ingot/red_steel', },
      { metal1: 'kubejs:raw_ferromanganese_bloom', metal2: 'kubejs:raw_ferromanganese_ingot', },
      { metal1: 'kubejs:hot_raw_ferromanganese_bloom', metal2: 'kubejs:raw_ferromanganese_ingot', },
    ];
  high_carbon_metal.forEach(high_carbon_metal => {
    event.custom({
      "type": "immersiveengineering:metal_press",
      "energy": 2300,
      "input": {
        "item": `${high_carbon_metal.metal1}`
      },
      "mold": "kubejs:dense_indenter",
      "result": {
        "item": `${high_carbon_metal.metal2}`
      }
    })
  })


  //金属冲压机配方
  //致密压头直接双锭压板配方
  const metal_press =
    [
      { metal: 'bismuth', modid: 'tfc', temp: 1500 },
      { metal: 'bismuth_bronze', modid: 'tfc', temp: 1500 },
      { metal: 'black_bronze', modid: 'tfc', temp: 1500 },
      { metal: 'bronze', modid: 'tfc', temp: 1500 },
      { metal: 'copper', modid: 'tfc', temp: 1500 },
      { metal: 'gold', modid: 'tfc', temp: 1300 },
      { metal: 'nickel', modid: 'tfc', temp: 1300 },
      { metal: 'rose_gold', modid: 'tfc', temp: 1500 },
      { metal: 'silver', modid: 'tfc', temp: 1300 },
      { metal: 'tin', modid: 'tfc', temp: 1500 },
      { metal: 'zinc', modid: 'tfc', temp: 1300 },
      { metal: 'sterling_silver', modid: 'tfc', temp: 1500 },
      { metal: 'cast_iron', modid: 'tfc', temp: 2300 },
      { metal: 'wrought_iron', modid: 'tfc', temp: 2300 },
      { metal: 'steel', modid: 'tfc', temp: 2600 },
      { metal: 'black_steel', modid: 'tfc', temp: 2800 },
      { metal: 'blue_steel', modid: 'tfc', temp: 3000 },
      { metal: 'red_steel', modid: 'tfc', temp: 3000 },
      { metal: 'brass', modid: 'tfc', temp: 1500 },
      { metal: 'electrum', modid: 'tfc_ie_addon', temp: 1300 },
      { metal: 'aluminum', modid: 'tfc_ie_addon', temp: 1300 },
      { metal: 'lead', modid: 'tfc_ie_addon', temp: 1300 },
      { metal: 'constantan', modid: 'tfc_ie_addon', temp: 1300 },
      { metal: 'uranium', modid: 'tfc_ie_addon', temp: 1300 },
      { metal: 'chromium', modid: 'firmalife', temp: 1300 },
      { metal: 'stainless_steel', modid: 'firmalife', temp: 2800 }
    ];
  metal_press.forEach(metal => {

    event.custom({
      "type": "immersiveengineering:metal_press",
      "energy": metal.temp,
      "input": {
        "item": `${metal.modid}:metal/double_ingot/${metal.metal}`
      },
      "mold": "kubejs:dense_indenter",
      "result": {
        "item": `${metal.modid}:metal/sheet/${metal.metal}`
      }
    })
  })




  //event.shaped('12x create:shaft', ['A','B','A'],{A:'create:andesite_alloy',B:'minecraft:iron_nugget'})//传动杆变难

  //event.shaped('tfc_metal_items:steel_tilt_hammer_head', ['BAB', 'B B', 'AAA'], { A: 'tfc:metal/double_ingot/wrought_iron', B: 'tfc:metal/ingot/wrought_iron' })//杠杆锤头变简单



  event.replaceInput({ output: 'minecraft:slime_ball' }, 'create:dough', '#tfc:foods/dough')//粘液球面团替换
  event.replaceInput({ input: 'minecraft:iron_ingot', type: "crafting_shaped" }, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')//锻铁替换铁
  event.replaceOutput({}, 'create_power_loader:empty_andesite_chunk_loader', 'create_power_loader:andesite_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_andesite_chunk_loader” 替换为 “create_power_loader:andesite_chunk_loader”
  event.replaceOutput({}, 'create_power_loader:empty_brass_chunk_loader', 'create_power_loader:brass_chunk_loader') // 将配方中的产出物品 “create_power_loader:empty_brass_chunk_loader” 替换为 “create_power_loader:brass_chunk_loader”
  event.replaceInput({ id: 'create:crafting/kinetics/super_glue' }, 'minecraft:slime_ball', '#forge:glue') //强力胶
  event.replaceInput({ id: 'create:crafting/materials/sand_paper' }, 'minecraft:sand', '#forge:sand')//砂纸
  event.replaceInput({ input: 'firmalife:food/bacon' }, 'firmalife:food/bacon', 'farmersdelight:bacon')//培根替换
  event.replaceInput({ input: 'immersiveengineering:plate_steel' }, 'immersiveengineering:plate_steel', 'tfc:metal/sheet/steel') // 将配方中钢板换成钢薄板


  //打磨配方
  event.custom(
    { "type": "create:sandpaper_polishing", "ingredients": [{ "item": `tfc:gem/amethyst` }], "results": [{ "item": `createutilities:polished_amethyst` }] }
  )


  // event.create('leather_hot_water_bag', 'basic').texture('kubejs:item/tfc/leather_hot_water_bag');// 皮革热水袋


  farmersdelight_cutting('kubejs:tfc/crushed_sinew', 'kubejs:tfc/dried_sinew', 1, 'tfc:hammers')//捣碎筋腱
  farmersdelight_cutting('kubejs:tfc/sinew_thread', 'kubejs:tfc/crushed_sinew', 2, 'tfc:knives')//筋线
})
//基础修改
ServerEvents.recipes(event => {
  const create = event.recipes.create


  /*//灵魂火
  create.haunting(Item.of('minecraft:blaze_rod'), 'createaddition:electrum_rod')//烈焰棒
  create.mixing("minecraft:soul_sand", ['#forge:sand', 'minecraft:rotten_flesh'])//灵魂沙*/



  //搅拌
  /*create.compacting('minecraft:glass', ['#forge:sand', 'tfc:powder/flux']).heated()//玻璃*/
  const compost_greens =
    [
      { tag: 'tfc:compost_greens_low', number: 8 },
      { tag: 'tfc:compost_greens', number: 4 },
      { tag: 'tfc:compost_greens_high', number: 2 },
    ];
  const compost_browns =
    [
      { tag: 'tfc:compost_browns_low', number: 8 },
      { tag: 'tfc:compost_browns', number: 4 },
      { tag: 'tfc:compost_browns_high', number: 2 },
    ]

  compost_greens.forEach(green => {
    compost_browns.forEach(brown => {
      create.mixing('tfc:unfermented_compost', [`${green.number}x #${green.tag}`, `${brown.number}x #${brown.tag}`])
    })
  })

  create.mixing('2x tfc:unfermented_meat_compost', ['2x tfc:unfermented_compost', '#tfc:compost_poisons',])



  create.compacting('2x tfc:fire_clay', ['2x tfc:powder/kaolinite', '2x tfc:powder/graphite', 'minecraft:clay_ball']).heated()//耐火粘土

  create.mixing('kubejs:trachyandesite_alloy', ['2x kubejs:rock_powder', Fluid.of('tfc:metal/cast_iron', 35)]).heated()//粗安山合金-铸铁
  create.mixing('kubejs:trachyandesite_alloy', ['2x kubejs:rock_powder', Fluid.of('tfc:metal/zinc', 35)])//粗安山合金-锌

  create.mixing(Fluid.of('kubejs:pulp', 75), ['4x createdieselgenerators:wood_chip', Fluid.of('tfc:lye', 50)]).heated()//纸浆
  create.compacting('kubejs:pulp_film', Fluid.of('kubejs:pulp', 5))//纸浆薄膜
  create.compacting('kubejs:paper_film', '5x kubejs:pulp_film')//纸膜

  /* create.compacting(Item.of('minecraft:netherite_ingot'), ['ad_astra:ostrum_ingot', 'tfc:metal/ingot/unknown', 'tfc:metal/ingot/gold']).superheated()//下界合金锭
   create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1), ['ad_astra:infernal_spire_block', 'tfc:metal/ingot/unknown']).superheated()//下界合金碎片（金星
   create.mixing(Item.of('minecraft:ancient_debris').withChance(0.1), ['ad_astra:infernal_spire_block', Fluid.of('tfc:metal/unknown', 100)]).superheated()//下界合金碎片（金星
 */
  //辊压

  create.compacting(Fluid.of('artisanal:lard', 100), "artisanal:pork_fat").heated()//猪脂
  create.compacting(Fluid.of('artisanal:schmaltz', 100), "artisanal:poultry_fat").heated()//鸡脂
  create.compacting(Fluid.of('tfc:tallow', 100), "artisanal:suet").heated()//牛脂
  create.compacting(Fluid.of('tfc:tallow', 100), "artisanal:animal_fat").heated()//动物脂
  create.compacting(Fluid.of('tfc:tallow', 100), "artisanal:bear_fat").heated()//熊脂

  create.compacting(
    ['4x createdieselgenerators:asphalt_block', Fluid.of('createdieselgenerators:diesel', 20)],
    [Fluid.of('kubejs:heavy_oil', 50), '2x #forge:gravel', '2x #forge:sand']
  )//沥青制作

  //石磨
  create.milling('2x tfc:olive_paste', 'tfc:food/olive') // 橄榄 => 2个橄榄糊
  //create.milling('4x tfc:powder/sulfur', 'tfc:ore/sulfur') // 硫磺矿石 => 4份硫磺粉末
  create.milling('6x tfc:powder/flux', 'tfc:ore/borax') // 硼砂矿石 => 6份助熔剂粉末
  create.milling('2x tfc:powder/flux', '#tfc:fluxstone') // 标签为 #tfc:fluxstone 的物品 => 2份助熔剂粉末
  create.milling('tfc:ore/gypsum', 'tfc:rock/raw/limestone') // 原始石灰石 => 石膏矿石
  create.milling('4x tfc:powder/ruby', 'tfc:ore/ruby') // 红宝石矿石 => 4份红宝石粉末
  create.milling('4x tfc:powder/ruby', 'tfc:gem/ruby') // 红宝石宝石 => 4份红宝石粉末
  //create.milling('8x minecraft:redstone', 'tfc:ore/cinnabar') // 辰砂矿石 => 8个原版红石
  //create.milling('8x minecraft:redstone', 'tfc:ore/cryolite') // 冰晶石矿石 => 8个原版红石
  create.milling('4x tfc:powder/pyrite', 'tfc:gem/pyrite') // 黄铁矿宝石 => 4份黄铁矿粉末
  create.milling('4x tfc:powder/pyrite', 'tfc:ore/pyrite') // 黄铁矿矿石 => 4份黄铁矿粉末
  create.milling('4x tfc:powder/lapis_lazuli', 'tfc:ore/lapis_lazuli') // 青金石矿石 => 4份青金石粉末
  create.milling('4x tfc:powder/lapis_lazuli', 'tfc:gem/lapis_lazuli') // 青金石宝石 => 4份青金石粉末
  create.milling('4x tfc:powder/diamond', 'tfc:gem/diamond') // 钻石宝石 => 4份钻石粉末
  create.milling('4x tfc:powder/diamond', 'tfc:ore/diamond') // 钻石矿石 => 4份钻石粉末
  create.milling('4x tfc:powder/opal', 'tfc:gem/opal') // 蛋白石宝石 => 4份蛋白石粉末
  create.milling('4x tfc:powder/opal', 'tfc:ore/opal') // 蛋白石矿石 => 4份蛋白石粉末
  create.milling('4x tfc:powder/emerald', 'tfc:gem/emerald') // 祖母绿宝石 => 4份祖母绿粉末
  create.milling('4x tfc:powder/emerald', 'tfc:ore/emerald') // 祖母绿矿石 => 4份祖母绿粉末
  create.milling('4x tfc:powder/topaz', 'tfc:gem/topaz') // 黄玉宝石 => 4份黄玉粉末
  create.milling('4x tfc:powder/topaz', 'tfc:ore/topaz') // 黄玉矿石 => 4份黄玉粉末
  create.milling('4x tfc:powder/sapphire', 'tfc:gem/sapphire') // 蓝宝石宝石 => 4份蓝宝石粉末
  create.milling('4x tfc:powder/sapphire', 'tfc:ore/sapphire') // 蓝宝石矿石 => 4份蓝宝石粉末
  create.milling('4x tfc:powder/amethyst', 'tfc:gem/amethyst') // 紫水晶宝石 => 4份紫水晶粉末
  create.milling('4x tfc:powder/amethyst', 'tfc:ore/amethyst') // 紫水晶矿石 => 4份紫水晶粉末 

  create.milling('4x createdieselgenerators:wood_chip', 'farmersdelight:tree_bark') // 树皮=木屑
  create.milling('6x createdieselgenerators:wood_chip', 'tfc:stick_bunch') // 木棍堆=木屑
  create.milling('12x createdieselgenerators:wood_chip', 'tfc:stick_bundle') // 木棍捆=木屑
  create.milling('1x createdieselgenerators:wood_chip', '#minecraft:saplings') // 树苗=木屑


  create.milling('1x immersiveengineering:dust_coke', 'immersiveengineering:coal_coke') // 焦煤粉

  event.custom({
    "type": "vintageimprovements:curving",
    "itemAsHead": "kubejs:wooden_slat_grid",
    "ingredients": [
      { "fluid": ('kubejs:pulp', 5) }],
    "results": [
      { "item": "kubejs:pulp_film" }]
  }),


    create.compacting('4x minecraft:cobbled_deepslate', '4x minecraft:cobblestone').heated()//深板岩
  create.compacting('minecraft:smooth_stone', 'minecraft:cobblestone').superheated()//平滑石头
  create.deploying('minecraft:paper', ['tfc:unrefined_paper', '#tfc:knives']).keepHeldItem()
  //注液
  create.filling('minecraft:glowstone_dust', ['kubejs:rock_powder', Fluid.of('minecraft:lava', 20)])//萤石

  create.filling('kubejs:galvanized_steel_support', ['kubejs:steel_support', Fluid.of('tfc:metal/zinc', 10)])//镀锌方钢梁

  create.filling('wildfire:beer_maize', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_maize', 250)])//玉米啤酒
  create.filling('wildfire:beer_barley', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_barley', 250)])//大麦啤酒
  create.filling('wildfire:beer_hops', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_hops', 250)])//酒花啤酒
  create.filling('wildfire:beer_rye', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_rye', 250)])//玉米啤酒
  create.filling('wildfire:beer_oat', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_oat', 250)])//燕麦啤酒
  create.filling('wildfire:beer_berries', ['brewinandchewin:tankard', Fluid.of('kubejs:beer_haley', 250)])//海利啤酒

  create.filling('brewery:whiskey_jojannik', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_jojannik', 250)])//酒
  create.filling('brewery:whiskey_lilitusinglemalt', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_lilitusinglemalt', 250)])//酒
  create.filling('brewery:whiskey_cristelwalker', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_cristelwalker', 250)])//酒
  create.filling('brewery:whiskey_maggoallan', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_maggoallan', 250)])//酒
  create.filling('brewery:whiskey_carrasconlabel', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_carrasconlabel', 250)])//酒
  create.filling('brewery:whiskey_ak', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_ak', 250)])//酒
  create.filling('brewery:whiskey_highland_hearth', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_highland_hearth', 250)])//酒
  create.filling('brewery:whiskey_smokey_reverie', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_smokey_reverie', 250)])//酒
  create.filling('brewery:whiskey_jamesons_malt', ['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_jamesons_malt', 250)])//酒

  //分液
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_maize', 250)], 'wildfire:beer_maize')//玉米啤酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_barley', 250)], 'wildfire:beer_barley')//大麦啤酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_hops', 250)], 'wildfire:beer_hops')//酒花啤酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_rye', 250)], 'wildfire:beer_rye')//玉米啤酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_oat', 250)], 'wildfire:beer_oat')//燕麦啤酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:beer_haley', 250)], 'wildfire:beer_berries')//海利啤酒

  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_jojannik', 250)], 'brewery:whiskey_jojannik')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_lilitusinglemalt', 250)], 'brewery:whiskey_lilitusinglemalt')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_cristelwalker', 250)], 'brewery:whiskey_cristelwalker')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_maggoallan', 250)], 'brewery:whiskey_maggoallan')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_carrasconlabel', 250)], 'brewery:whiskey_carrasconlabel')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_ak', 250)], 'brewery:whiskey_ak')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_highland_hearth', 250)], 'brewery:whiskey_highland_hearth')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_smokey_reverie', 250)], 'brewery:whiskey_smokey_reverie')//酒
  create.emptying(['brewinandchewin:tankard', Fluid.of('kubejs:whiskey_jamesons_malt', 250)], 'brewery:whiskey_jamesons_malt')//酒
  //event.recipes.tfc.barrel_sealed(5000).outputItem('tfc:unrefined_paper').inputs('farmersdelight:tree_bark', TFC.fluidStackIngredient('tfc:limewater', 50))//获取未精致纸



  //序列洗碗
  const dirty = [
    { item: 'artisanal:dirty_bowl', item2: 'minecraft:bowl' },
    { item: 'artisanal:dirty_jar', item2: 'tfc:empty_jar' },
    { item: 'artisanal:ceramic/dirty_small_pot', item2: 'artisanal:ceramic/small_pot' },
    { item: 'artisanal:metal/dirty_tin_can', item2: 'artisanal:metal/tin_can' },
    { item: 'artisanal:metal/dirty_dented_tin_can', item2: 'artisanal:metal/dented_tin_can' },

  ]
  dirty.forEach(dirty => {
    create.sequenced_assembly(`${dirty.item2}`, `${dirty.item}`,
      [
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)])
      ]
    ).transitionalItem(`${dirty.item}`).loops(1)
    create.sequenced_assembly(`${dirty.item2}`, dirty.item,
      [
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('artisanal:soapy_water', 5)]),
        create.filling(`${dirty.item}`, [`${dirty.item}`, Fluid.of('minecraft:water', 25)])
      ]
    ).transitionalItem(`${dirty.item}`).loops(1)
    create.mixing(Item.of(`${dirty.item2}`), [`${dirty.item}`, Fluid.of('minecraft:water', 1000)])
    create.mixing(Item.of(`${dirty.item2}`), [`${dirty.item}`, Fluid.of('artisanal:soapy_water', 10), Fluid.of('minecraft:water', 150)])
  })

  const component = [
    { item1: 'tfc:metal/rod/wrought_iron', item2: 'kubejs:material_component_wrought_iron' },
    { item1: 'tfc:metal/rod/steel', item2: 'kubejs:material_component_steel' },
    { item1: 'tfc:metal/rod/black_steel', item2: 'kubejs:material_component_black_steel' },
    { item1: 'tfc:metal/rod/brass', item2: 'tfc:anvil/brass_mechanisms' }

  ]
  component.forEach(item => {
    create.sequenced_assembly(`${item.item2}`, `${item.item1}`,
      [
        create.cutting(`${item.item1}`, `${item.item1}`),
        create.cutting(`${item.item1}`, `${item.item1}`),
        create.pressing(`${item.item1}`, `${item.item1}`),
        event.custom({
          "type": "vintageimprovements:curving",
          "itemAsHead": "immersiveengineering:mold_mechanical",
          "ingredients": [{ "item": `${item.item1}` }],
          "results": [{ "item": `${item.item1}`, "count": 1 }]
        }),
        create.pressing(`${item.item1}`, `${item.item1}`)
      ]
    ).transitionalItem(`${item.item1}`).loops(1)

  })

  //森罗油脂凝固配方
  const vat = [
    "artisanal:lard",
    "artisanal:schmaltz",
    "tfc:tallow",
    "createdieselgenerators:plant_oil",
    "immersiveengineering:plantoil",
  ];

  vat.forEach(item => {
    const idPath = item.replace(/:/g, '/');
    event.custom({
      "type": "tfc:barrel_sealed",
      "input_fluid": { "ingredient": item, "amount": 100 },
      "output_item": { "item": "kaleidoscope_cookery:oil" },
      "duration": 7000
    })
      .id(`tfc:barrel_sealed/oil/${idPath}`);
  });




  //发酵面团发酵配方
  const dough = [
    { name1: "barley" },
    { name1: "maize" },
    { name1: "oat" },
    { name1: "rye" },
    { name1: "rice" },
    { name1: "wheat" },
  ];
  dough.forEach(dough => {
    //瞬时大桶制作发酵面团配方
    event.recipes.tfc.barrel_instant()
      .outputItem(TFC.isp.of(`tfc:food/yeast_dough/${dough.name1}_dough`).copyFood())
      .inputs(Item.of(`tfc:food/${dough.name1}_dough`), Fluid.of('firmalife:yeast_starter', 5))
      .id(`tfc:barrel_instant/food/yeast_dough/${dough.name1}_dough`);
    //密封大桶发面面团配方
    event.recipes.tfc.barrel_sealed(5000)
      .inputItem(TFC.ingredient.notRotten(`tfc:food/yeast_dough/${dough.name1}_dough`))
      .outputItem(`firmalife:food/${dough.name1}_dough`)
      .id(`tfc:barrel_sealed/food/${dough.name1}_dough`)
    //面粉加水加酵母简便混合配方
    create.mixing(`2x tfc:food/${dough.name1}_dough`, [`tfc:food/${dough.name1}_flour`, Fluid.of('minecraft:water', 100)])
      .id(`create:mixing/food/${dough.name1}_dough`)
    //面粉加水加酵母直接合成酵母面团配方
    create.mixing(`2x tfc:food/yeast_dough/${dough.name1}_dough`, [`tfc:food/${dough.name1}_flour`, Fluid.of('minecraft:water', 100), Fluid.of('firmalife:yeast_starter', 15)])
      .id(`create:mixing/food/yeast_dough/${dough.name1}_dough`)
    //粗面团注液酵种制作发酵面团配方
    create.filling(`tfc:food/yeast_dough/${dough.name1}_dough`, [`tfc:food/${dough.name1}_dough`, Fluid.of('firmalife:yeast_starter', 5)])
      .id(`create:filling/food/yeast_dough/${dough.name1}_dough`)

    //面团发酵配方
    event.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` },
      ],
      "processingTime": 2000,
      "results": [{
        "count": 10,
        "item": `firmalife:food/${dough.name1}_dough`
      }]
    }).id(`create:fermenting/food/much_${dough.name1}_dough`)
    event.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        { "item": `tfc:food/yeast_dough/${dough.name1}_dough` }
      ],
      "processingTime": 300,
      "results": [{
        "count": 1,
        "item": `firmalife:food/${dough.name1}_dough`
      }]
    }).id(`create:fermenting/food/${dough.name1}_dough`)
  });
  //=========================================================
  //=========================================================
  event.recipes.tfc.barrel_instant()
      .outputItem(TFC.isp.of(`wildfire:pumpkin_yeast_dough`).copyFood())
      .inputs(Item.of(`wildfire:pumpkin_rough_dough`), Fluid.of('firmalife:yeast_starter', 5))
      .id(`tfc:barrel_instant/food/yeast_dough/pumpkin_dough`);
  event.recipes.tfc.barrel_sealed(5000)
      .inputItem(TFC.ingredient.notRotten(`wildfire:pumpkin_yeast_dough`))
      .outputItem(`wildfire:pumpkin_dough`)
      .id(`tfc:barrel_sealed/food/pumpkin_dough`);
  create.mixing(`3x wildfire:pumpkin_rough_dough`, [`#tfc:foods/flour`, `tfc:food/pumpkin_chunks`, Fluid.of('minecraft:water', 100)])
      .id(`create:mixing/food/dough/pumpkin_dough`)
  create.mixing(`3x wildfire:pumpkin_yeast_dough`, [`#tfc:foods/flour`, `tfc:food/pumpkin_chunks`, Fluid.of('minecraft:water', 100), Fluid.of('firmalife:yeast_starter', 15)])
      .id(`create:mixing/food/yeast_dough/pumpkin_dough`)
  create.filling(`wildfire:pumpkin_yeast_dough`, [`wildfire:pumpkin_rough_dough`, Fluid.of('firmalife:yeast_starter', 5)])
      .id(`create:filling/food/yeast_dough/pumpkin_dough`)
  event.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },
        { "item": `wildfire:pumpkin_yeast_dough` },

      ],
      "processingTime": 2000,
      "results": [{
        "count": 10,
        "item": `wildfire:pumpkin_dough`
      }]
    }).id(`create:fermenting/food/much_pumpkin_dough`);
  event.custom({
      "type": "createdieselgenerators:basin_fermenting",
      "ingredients": [
        { "item": `wildfire:pumpkin_yeast_dough` },

      ],
      "processingTime": 300,
      "results": [{
        "count": 10,
        "item": `wildfire:pumpkin_dough`
      }]
    }).id(`create:fermenting/foodpumpkin_dough`);


  //蒸米饭啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊

  event.custom({
    "type": "kaleidoscope_cookery:stockpot",
    //提取物
    "carrier": { "item": "minecraft:bowl" },
    //泡泡颜色
    "cooking_bubble_color": 12501441,
    //烹饪贴图
    "cooking_texture": "kubejs:stockpot/rice_cooking",
    //完成泡泡
    "finished_bubble_color": 16119285,
    //完成贴图
    "finished_texture": "kubejs:stockpot/rice_finished",
    //输入食材
    "ingredients": [
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" }
    ],
    //输出食材
    "result":
      { "item": "farmersdelight:cooked_rice" },
    //所需汤底
    "soup_base": "minecraft:water",
    //所需时间
    "time": 600,
  }).id(`kaleidoscope_cookery:stockpot/food/rice_cooking_1`);

  event.custom({
    "type": "kaleidoscope_cookery:stockpot",
    "carrier": { "item": "minecraft:bowl" },
    "cooking_bubble_color": 12501441,
    "cooking_texture": "kubejs:stockpot/rice_cooking",
    "finished_bubble_color": 16119285,
    "finished_texture": "kubejs:stockpot/rice_finished",
    "ingredients": [
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" }
    ],
    "result": { "count": 2, "item": "farmersdelight:cooked_rice" }, "soup_base": "minecraft:water", "time": 600,
  }).id(`kaleidoscope_cookery:stockpot/food/rice_cooking_2`);

  event.custom({
    "type": "kaleidoscope_cookery:stockpot",
    "carrier": { "item": "minecraft:bowl" },
    "cooking_bubble_color": 12501441,
    "cooking_texture": "kubejs:stockpot/rice_cooking",
    "finished_bubble_color": 16119285,
    "finished_texture": "kubejs:stockpot/rice_finished",
    "ingredients": [
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" }
    ],
    "result": { "count": 3, "item": "farmersdelight:cooked_rice" }, "soup_base": "minecraft:water", "time": 600,
  }).id(`kaleidoscope_cookery:stockpot/food/rice_cooking_3`);

  event.custom({
    "type": "kaleidoscope_cookery:stockpot",
    "carrier": { "item": "minecraft:bowl" },
    "cooking_bubble_color": 12501441,
    "cooking_texture": "kubejs:stockpot/rice_cooking",
    "finished_bubble_color": 16119285,
    "finished_texture": "kubejs:stockpot/rice_finished",
    "ingredients": [
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" }
    ],
    "result": { "count": 4, "item": "farmersdelight:cooked_rice" }, "soup_base": "minecraft:water", "time": 600,
  }).id(`kaleidoscope_cookery:stockpot/food/rice_cooking_4`);

  event.custom({
    "type": "kaleidoscope_cookery:stockpot",
    "carrier": { "item": "minecraft:bowl" },
    "cooking_bubble_color": 12501441,
    "cooking_texture": "kubejs:stockpot/rice_cooking",
    "finished_bubble_color": 16119285,
    "finished_texture": "kubejs:stockpot/rice_finished",
    "ingredients": [
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" },
      { "item": "tfc:food/rice_grain" }
    ],
    "result": { "count": 5, "item": "farmersdelight:cooked_rice" }, "soup_base": "minecraft:water", "time": 600,
  }).id(`kaleidoscope_cookery:stockpot/food/rice_cooking_5`);
  //=========================================================
  //=========================================================

  event.custom(
    {
      "type": "vintageimprovements:pressurizing",
      "heatRequirement": "heated",
      "processingTime": 400,
      "ingredients": [
        { "fluid": "immersiveengineering:creosote", "amount": 50 }, { "tag": "tfc:lumber" }],
      "results": [{ "item": "tfc_ie_addon:treated_wood_lumber" }]
    })
  //压缩抽屉配方
  //金属粉末
  const ore_dust =
    [
      { mod: 'tfc_ie_addon', type: '/type_', ore: 'uraninite' },
      { mod: 'tfc_ie_addon', type: '/type_', ore: 'galena', },
      { mod: 'tfc_ie_addon', type: '/type_', ore: 'bauxite' },
      { mod: 'firmalife', type: '/type_', ore: 'chromite' },
      { mod: 'tfc', type: '/type_', ore: 'limonite' },
      { mod: 'tfc', type: '/type_', ore: 'magnetite' },
      { mod: 'tfc', type: '/type_', ore: 'hematite' },
      { mod: 'tfc', type: '/type_', ore: 'native_copper' },
      { mod: 'tfc', type: '/type_', ore: 'native_gold' },
      { mod: 'tfc', type: '/type_', ore: 'native_silver' },
      { mod: 'tfc', type: '/type_', ore: 'tetrahedrite' },
      { mod: 'tfc', type: '/type_', ore: 'sphalerite' },
      { mod: 'tfc', type: '/type_', ore: 'cassiterite' },
      { mod: 'tfc', type: '/type_', ore: 'bismuthinite' },
      { mod: 'tfc', type: '/type_', ore: 'malachite' },
    ];
  ore_dust.forEach(ore => {
    event.custom(
      {
        "type": "functionalstorage:custom_compacting",
        "higher_input": { "count": 1, "item": `kubejs:item/ore/dirty_dust/${ore.ore}` },
        "lower_input": { "count": 4, "item": `kubejs:item/ore/dirty_pile/${ore.ore}` }
      }
    ),
      event.custom(
        {
          "type": "functionalstorage:custom_compacting",
          "higher_input": { "count": 1, "item": `kubejs:item/ore/dust_lump/${ore.ore}` },
          "lower_input": { "count": 4, "item": `${ore.mod}:powder/${ore.ore}` }
        }
      ),
      event.custom(
        {
          "type": "functionalstorage:custom_compacting",
          "higher_input": { "count": 1, "item": `kubejs:item/ore/dust_lump/${ore.ore}` },
          "lower_input": { "count": 4, "item": `kubejs:item/ore/purified_dust/${ore.ore}` }
        }
      ),
      event.custom(
        {
          "type": "functionalstorage:custom_compacting",
          "higher_input": { "count": 1, "item": `kubejs:item/ore/dust_lump/${ore.ore}` },
          "lower_input": { "count": 2, "item": `kubejs:item/ore/refined_dust/${ore.ore}` }
        }
      ),
      event.custom(
        {
          "type": "functionalstorage:custom_compacting",
          "higher_input": { "count": 1, "item": `kubejs:item/ore/dust_clump/${ore.ore}` },
          "lower_input": { "count": 4, "item": `kubejs:item/ore/dust_lump/${ore.ore}` }
        }
      ),
      event.custom(
        {
          "type": "functionalstorage:custom_compacting",
          "higher_input": { "count": 1, "item": `kubejs:item/ore/dust_brick/${ore.ore}` },
          "lower_input": { "count": 9, "item": `kubejs:item/ore/refined_dust/${ore.ore}` },
        }
      )

  })
  //非金属粉末
  const ore_dust_2 =
    [
      { ore2: 'sulfur' },
      { ore2: 'graphite' },
      { ore2: 'cryolite' },
      { ore2: 'cinnabar' }
    ];
  ore_dust_2.forEach(ore => {
    event.custom(
      {
        "type": "functionalstorage:custom_compacting",
        "higher_input": { "count": 1, "item": `kubejs:item/ore/dirty_dust/${ore.ore2}` },
        "lower_input": { "count": 4, "item": `kubejs:item/ore/dirty_pile/${ore.ore2}` }
      }
    )
  })
  //激光焊接脆钢
  const weak_metal =
    [
      { metal1: 'tfc:metal/ingot/weak_steel', metal2: 'tfc:metal/ingot/pig_iron', metal3: 'tfc:metal/ingot/high_carbon_black_steel', },
      { metal1: 'tfc:metal/ingot/weak_blue_steel', metal2: 'tfc:metal/ingot/black_steel', metal3: 'tfc:metal/ingot/high_carbon_blue_steel', },
      { metal1: 'tfc:metal/ingot/weak_red_steel', metal2: 'tfc:metal/ingot/black_steel', metal3: 'tfc:metal/ingot/high_carbon_red_steel', }
    ];
  weak_metal.forEach(metal => {
    create.sequenced_assembly(metal.metal3, metal.metal1,
      [create.deploying(metal.metal1, [metal.metal1, metal.metal2]),
      event.custom({
        "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": metal.metal1 }],
        "results": [{ "item": metal.metal1, "count": 1 }], "energy": 2000, "maxChargeRate": 30
      }),
      create.pressing(metal.metal1, metal.metal1),
      ]
    ).transitionalItem(metal.metal1).loops(1)//
  })

  const gold_sheet = 'tfc:metal/sheet/gold'
  create.sequenced_assembly([
    Item.of("create:precision_mechanism").withChance(0.8),
    Item.of("petrolsparts:large_coaxial_gear").withChance(0.02),
    Item.of("kubejs:wrought_iron_fragments").withChance(0.05),
    Item.of("create:shaft").withChance(0.02),
    Item.of("tfc:metal/sheet/gold").withChance(0.1),
    Item.of("minecraft:clock").withChance(0.01)
  ], 'tfc:metal/sheet/gold',
    [
      create.pressing(gold_sheet, 'create:incomplete_precision_mechanism'),
      create.deploying(gold_sheet, ['create:incomplete_precision_mechanism', 'petrolsparts:coaxial_gear']),
      create.deploying(gold_sheet, ['create:incomplete_precision_mechanism', 'petrolsparts:large_coaxial_gear']),
      create.deploying(gold_sheet, ['create:incomplete_precision_mechanism', 'create:shaft']),
      create.deploying(gold_sheet, ['create:incomplete_precision_mechanism', 'kubejs:wrought_iron_fragments']),
      create.deploying(gold_sheet, ['create:incomplete_precision_mechanism', 'tfc:brass_mechanisms'])
    ]
  ).transitionalItem('create:incomplete_precision_mechanism').loops(2)//精密构建

  const inputcailiao = 'tfc:metal/sheet/black_steel'
  create.sequenced_assembly('kubejs:basic_crystal_pannel', 'tfc:metal/sheet/black_steel',
    [create.deploying(inputcailiao, [inputcailiao, 'create:andesite_alloy']),
    create.pressing(inputcailiao, inputcailiao),
    create.deploying(inputcailiao, [inputcailiao, 'create_new_age:copper_circuit']),
    create.deploying(inputcailiao, [inputcailiao, 'create:precision_mechanism']),
    create.deploying(inputcailiao, [inputcailiao, 'create:electron_tube']),
    create.pressing(inputcailiao, inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//基础晶体面板
  create.sequenced_assembly('kubejs:moon_crystal_panel', 'tfc:metal/sheet/black_steel',
    [create.deploying(inputcailiao, [inputcailiao, 'tfc:metal/double_sheet/brass']),
    create.deploying(inputcailiao, [inputcailiao, 'immersiveengineering:circuit_board']),
    create.deploying(inputcailiao, [inputcailiao, 'create_new_age:copper_circuit']),
    create.deploying(inputcailiao, [inputcailiao, 'create:precision_mechanism']),
    create.deploying(inputcailiao, [inputcailiao, 'create:electron_tube']),
    create.pressing(inputcailiao, inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//月球晶体面板
  create.sequenced_assembly('kubejs:hologram_frontpanel', 'tfc:metal/sheet/black_steel',
    [create.deploying(inputcailiao, [inputcailiao, 'tfc:metal/double_sheet/wrought_iron']),
    create.deploying(inputcailiao, [inputcailiao, 'mekanism:elite_control_circuit']),
    create.deploying(inputcailiao, [inputcailiao, 'ae2:printed_calculation_processor']),
    create.deploying(inputcailiao, [inputcailiao, 'ae2:printed_engineering_processor']),
    create.deploying(inputcailiao, [inputcailiao, 'ad_astra:photovoltaic_etrium_cell']),
    create.pressing(inputcailiao, inputcailiao)]
  ).transitionalItem(inputcailiao).loops(2)//六方全息面板



  //TFC
  event.recipes.tfc.knapping('2x kubejs:unfired_mold_mechanical', 'tfc:clay', [
    'XXXXX',
    'X X X',
    'X X X',
    'X X X',
    'XXXXX']).outsideSlotRequired(false)

  event.recipes.tfc.welding('tfc:metal/double_ingot/cast_iron', 'tfc:metal/ingot/cast_iron', 'tfc:metal/ingot/cast_iron')//铸铁焊接











})
//沃土系数更改
ServerEvents.recipes(e => {
  const CROP_GROWTH_TIME_MULTIPLIER = 0.8;// 沃土加速系数，暂定 1
  const BASE_GROWTH_TIME = 45000;// 基础生长时间
  const ADJUSTED_GROWTH_TIME = BASE_GROWTH_TIME * CROP_GROWTH_TIME_MULTIPLIER;// 计算调整后的生长时间  不是哥们这一开始写的意义是什么
  const RICH_SOIL = 'farmersdelight:rich_soil';// 沃土土壤类型

  const crops = [// 定义作物列表，每个作物包含名称、产出物品、种子物品和作物方块
    { name: 'wheat', product: 'tfc:food/wheat', count: 2, seed: 'tfc:seeds/wheat', cropBlock: 'tfc:crop/wheat', type: 'crop' },
    { name: 'tomato', product: 'tfc:food/tomato', count: 2, seed: 'tfc:seeds/tomato', cropBlock: 'tfc:crop/tomato', type: 'crop' },
    { name: 'sugarcane', product: 'tfc:food/sugarcane', count: 2, seed: 'tfc:seeds/sugarcane', cropBlock: 'tfc:crop/sugarcane', type: 'crop' },
    { name: 'squash', product: 'tfc:food/squash', count: 2, seed: 'tfc:seeds/squash', cropBlock: 'tfc:crop/squash', type: 'crop' },
    { name: 'soybean', product: 'tfc:food/soybean', count: 2, seed: 'tfc:seeds/soybean', cropBlock: 'tfc:crop/soybean', type: 'crop' },
    { name: 'rye', product: 'tfc:food/rye', count: 2, seed: 'tfc:seeds/rye', cropBlock: 'tfc:crop/rye', type: 'crop' },
    { name: 'rice', product: 'tfc:food/rice', count: 2, seed: 'tfc:seeds/rice', cropBlock: 'tfc:crop/rice', type: 'crop' },
    { name: 'pumpkin', product: 'tfc:pumpkin', count: 2, seed: 'tfc:seeds/pumpkin', cropBlock: 'tfc:crop/pumpkin', type: 'crop' },
    { name: 'potato', product: 'tfc:food/potato', count: 2, seed: 'tfc:seeds/potato', cropBlock: 'tfc:crop/potato', type: 'crop' },
    { name: 'onion', product: 'tfc:food/onion', count: 2, seed: 'tfc:seeds/onion', cropBlock: 'tfc:crop/onion', type: 'crop' },
    { name: 'oat', product: 'tfc:food/oat', count: 2, seed: 'tfc:seeds/oat', cropBlock: 'tfc:crop/oat', type: 'crop' },
    { name: 'melon', product: 'tfc:melon', count: 2, seed: 'tfc:seeds/melon', cropBlock: 'tfc:crop/melon', type: 'crop' },
    { name: 'maize', product: 'tfc:food/maize', count: 2, seed: 'tfc:seeds/maize', cropBlock: 'tfc:crop/maize', type: 'crop' },
    { name: 'jute', product: 'tfc:jute', count: 3, seed: 'tfc:seeds/jute', cropBlock: 'tfc:crop/jute', type: 'crop' },
    { name: 'green_bean', product: 'tfc:food/green_bean', count: 2, seed: 'tfc:seeds/green_bean', type: 'tfc:crop/green_bean', type: 'crop' },
    { name: 'garlic', product: 'tfc:food/garlic', count: 2, seed: 'tfc:seeds/garlic', cropBlock: 'tfc:crop/garlic', type: 'crop' },
    { name: 'carrot', product: 'tfc:food/carrot', count: 2, seed: 'tfc:seeds/carrot', cropBlock: 'tfc:crop/carrot', type: 'crop' },
    { name: 'cabbage', product: 'tfc:food/cabbage', count: 2, seed: 'tfc:seeds/cabbage', cropBlock: 'tfc:crop/cabbage', type: 'crop' },
    { name: 'beet', product: 'tfc:food/beet', count: 2, seed: 'tfc:seeds/beet', cropBlock: 'tfc:crop/beet', type: 'crop' },
    { name: 'barley', product: 'tfc:food/barley', count: 2, seed: 'tfc:seeds/barley', cropBlock: 'tfc:crop/barley', type: 'crop' },
    { name: 'papyrus', product: 'tfc:papyrus', count: 3, seed: 'tfc:seeds/papyrus', cropBlock: 'tfc:crop/papyrus', type: 'crop' },

    { name: 'flax', product: 'textile:flax', count: 4, seed: 'textile:seeds/flax', cropBlock: 'textile:crop/flax', type: 'crop' },
    { name: 'cotton', product: 'textile:cotton_ball', count: 4, seed: 'textile:seeds/cotton', cropBlock: 'textile:crop/cotton', type: 'crop' },

    { name: 'white_grape', product: 'firmalife:food/white_grapes', count: 3, seed: 'firmalife:seeds/white_grape', cropBlock: 'firmalife:plant/wild_white_grapes', type: 'generic' },
    { name: 'red_grape', product: 'firmalife:food/red_grapes', count: 3, seed: 'firmalife:seeds/red_grape', cropBlock: 'firmalife:plant/wild_red_grapes', type: 'generic' },
    { name: 'snowberry', product: 'tfc:food/snowberry', count: 4, seed: 'tfc:plant/snowberry_bush', cropBlock: 'tfc:plant/snowberry_bush', type: 'generic' },
    { name: 'bunchberry', product: 'tfc:food/bunchberry', count: 4, seed: 'tfc:plant/bunchberry_bush', cropBlock: 'tfc:plant/bunchberry_bush', type: 'generic' },
    { name: 'gooseberry', product: 'tfc:food/gooseberry', count: 4, seed: 'tfc:plant/gooseberry_bush', cropBlock: 'tfc:plant/gooseberry_bush', type: 'generic' },
    { name: 'cloudberry', product: 'tfc:food/cloudberry', count: 4, seed: 'tfc:plant/cloudberry_bush', cropBlock: 'tfc:plant/cloudberry_bush', type: 'generic' },
    { name: 'strawberry', product: 'tfc:food/strawberry', count: 4, seed: 'tfc:plant/strawberry_bush', cropBlock: 'tfc:plant/strawberry_bush', type: 'generic' },
    { name: 'cranberry', product: 'tfc:food/cranberry', count: 4, seed: 'tfc:plant/cranberry_bush', cropBlock: 'tfc:plant/cranberry_bush', type: 'generic' },

    { name: 'blackberry', product: 'tfc:food/blackberry', count: 4, seed: 'tfc:plant/blackberry_bush', cropBlock: 'tfc:plant/blackberry_bush', type: 'generic' },
    { name: 'raspberry', product: 'tfc:food/raspberry', count: 4, seed: 'tfc:plant/raspberry_bush', cropBlock: 'tfc:plant/raspberry_bush', type: 'generic' },
    { name: 'elderberry', product: 'tfc:food/elderberry', count: 4, seed: 'tfc:plant/elderberry_bush', cropBlock: 'tfc:plant/elderberry_bush', type: 'generic' },
    { name: 'blueberry', product: 'tfc:food/blueberry', count: 4, seed: 'tfc:plant/blueberry_bush', cropBlock: 'tfc:plant/blueberry_bush', type: 'generic' },

    { name: 'pineaple', product: 'firmalife:food/pineaple', count: 3, seed: 'firmalife:plant/pineaple_bush', cropBlock: 'firmalife:plant/pineaple_bush', type: 'generic' },
    { name: 'wintergreen_berry', product: 'tfc:food/wintergreen_berry', count: 4, seed: 'tfc:plant/wintergreen_berry_bush', cropBlock: 'tfc:plant/wintergreen_berry_bush', type: 'generic' },

    { name: 'cherry', product: 'tfc:food/cherry', count: 4, seed: 'tfc:plant/cherry_sapling', cropBlock: 'tfc:plant/cherry_sapling', type: 'generic' },
    { name: 'green_apple', product: 'tfc:food/green_apple', count: 4, seed: 'tfc:plant/green_apple_sapling', cropBlock: 'tfc:plant/green_apple_sapling', type: 'generic' },
    { name: 'lemon', product: 'tfc:food/lemon', count: 4, seed: 'tfc:plant/lemon_sapling', cropBlock: 'tfc:plant/lemon_sapling', type: 'generic' },
    { name: 'olive', product: 'tfc:food/olive', count: 4, seed: 'tfc:plant/olive_sapling', cropBlock: 'tfc:plant/olive_sapling', type: 'generic' },
    { name: 'orange', product: 'tfc:food/orange', count: 4, seed: 'tfc:plant/orange_sapling', cropBlock: 'tfc:plant/orange_sapling', type: 'generic' },
    { name: 'peach', product: 'tfc:food/peach', count: 4, seed: 'tfc:plant/peach_sapling', cropBlock: 'tfc:plant/peach_sapling', type: 'generic' },
    { name: 'plum', product: 'tfc:food/plum', count: 4, seed: 'tfc:plant/plum_sapling', cropBlock: 'tfc:plant/plum_sapling', type: 'generic' },
    { name: 'red_apple', product: 'tfc:food/red_apple', count: 4, seed: 'tfc:plant/red_apple_sapling', cropBlock: 'tfc:plant/red_apple_sapling', type: 'generic' },
    { name: 'banana', product: 'alexsmobs:banana', count: 4, seed: 'tfc:plant/banana_sapling', cropBlock: 'tfc:plant/banana_sapling', type: 'generic' },
    { name: 'cocoa', product: 'firmalife:food/cocoa_beans', count: 4, seed: 'firmalife:plant/cocoa_sapling', cropBlock: 'firmalife:plant/cocoa_sapling', type: 'generic' },
    { name: 'fig', product: 'firmalife:food/fig', count: 4, seed: 'firmalife:plant/fig_sapling', cropBlock: 'firmalife:plant/fig_sapling', type: 'generic' }
  ];

  crops.forEach(crop => {
    e.custom({
      "type": "immersiveengineering:cloche",
      "results": [
        { "item": crop.product, "count": crop.count },
        { "item": crop.seed, "count": 1 }
      ],
      "input": { "item": crop.seed },
      "soil": { "item": RICH_SOIL },
      "time": ADJUSTED_GROWTH_TIME,
      "render": { "type": crop.type, "block": crop.cropBlock }
    });
    console.log(`为 ${crop.name} 创建了种植配方`);
  });
})

//刷铁机产线
ServerEvents.recipes(event => {
  event.remove({ id: "create:splashing/gravel" })
  const create = event.recipes.create
  // create.splashing([Item.of('minecraft:flint').withChance(0.25), Item.of('tfc:ore/small_limonite').withChance(0.12)], 'minecraft:gravel')
  //create.splashing([Item.of('minecraft:flint').withChance(0.25), Item.of('tfc:ore/small_limonite').withChance(0.12)], '#tfc:rock/gravel')

  //create.crushing([Item.of('minecraft:flint').withChance(0.25),Item.of('tfc:ore/small_limonite').withChance(0.1)],"#forge:gravel")
  // 定义生成生铁液体合成配方的函数
  function createCastIronMixing(fluidAmount, oreItem) {
    try {
      event.custom({
        "type": "woodencog:heated_mixing",
        "heatRequirement": 1500,
        "processingTime": 2000,
        "ingredients": [
          {
            "ingredient": {
              "item": oreItem
            }
          }
        ],
        "results": [
          {
            "amount": fluidAmount,
            "fluid": 'tfc:metal/cast_iron',
            "nbt": {}
          }
        ]
      })



      //  create.mixing(Fluid.of('tfc:metal/cast_iron', fluidAmount), [oreItem]).heated();
    } catch (error) {
      console.error(`生成 ${oreItem} 对应的生铁液体合成配方时出错:`, error);
    }
  }

  // 定义不同品质矿石对应的液体量
  const oreAmountMap = {
    'small': 5,
    'poor': 10,
    'normal': 20,
    'rich': 30
  };

  // 定义不同类型的铁矿石
  const ironOres = ['limonite', 'hematite', 'magnetite'];

  // 遍历不同品质和类型的铁矿石进行合成操作
  Object.keys(oreAmountMap).forEach(quality => {
    const fluidAmount = oreAmountMap[quality];
    ironOres.forEach(ore => {
      const oreItem = `tfc:ore/${quality}_${ore}`;
      createCastIronMixing(fluidAmount, oreItem);
    });
  });
  const oreAmountMap2 = {
    'powder': 5,
    'tfcorewashing:pellet': 20,
    'tfcorewashing:briquet': 80,
  };
  Object.keys(oreAmountMap2).forEach(quality => {
    const fluidAmount = oreAmountMap2[quality];
    ironOres.forEach(ore => {
      const oreItem = `${quality}_${ore}`;
      createCastIronMixing(fluidAmount, oreItem);
    });
  });
  create.mixing(Fluid.of('tfc:metal/cast_iron', 100), ['tfc:metal/ingot/cast_iron']).heated()




  ///织布机织布配方

  const loom_string =
    [
      { item: 'tfc:jute_fiber', count1: 12, type: 'knitted_cloth', color: '#bfa975', results: 'tfc:burlap_cloth', count2: 1 },
      { item: 'minecraft:string', count1: 16, type: 'knitted_cloth', color: '#f9f9f9', results: 'tfc:silk_cloth', count2: 1 },
      { item: 'textile:flax_fiber', count1: 16, type: 'knitted_cloth', color: '#cfbd8e', results: 'textile:linen_cloth', count2: 1 },
      { item: 'firmalife:pineapple_yarn', count1: 16, type: 'knitted_cloth', color: '#9fa285', results: 'firmalife:pineapple_leather', count2: 1 },
      { item: 'tfc:wool_yarn', count1: 16, type: 'knitted_cloth', color: '#ffffff', results: 'tfc:wool_cloth', count2: 1 },
      { item: 'textile:cotton_string', count1: 16, type: 'knitted_cloth', color: '#e0e0e0', results: 'textile:cotton_cloth', count2: 1 },
    ];
  loom_string.forEach(loom => {
    event.custom(
      {
        "type": "wildfires:weaving",
        "ingredients": [
          {
            "item": `${loom.item}`,
            "count": loom.count1
          },
        ],
        "results": [
          {
            "item": `${loom.results}`,
            "count": loom.count2
          }
        ],
        "color": `${loom.color}`,
        "weaving_type": `${loom.type}`
      }
    )
  })
})
//弓箭工艺
/*ServerEvents.recipes(event => {
  const INITIAL_HEATING_TEMPERATURE = 200;
  // 定义每次温度递增常量
  const TEMPERATURE_INCREMENT = 30;
  // 定义大桶浸油时间，8 分钟，假设游戏刻速为 20 刻/秒，8 分钟就是 8 * 60 * 20 = 9600 刻
  const BARREL_DURATION = 9600;



  // 泡过水的弓臂 -> 正在烧制的弓臂
  event.recipes.tfc.heating('kubejs:soaked_bow_arm', INITIAL_HEATING_TEMPERATURE)
    .resultItem('kubejs:burning_bow_arm');

  // 正在烧制的弓臂 -> 烧制正好的弓臂
  event.recipes.tfc.heating('kubejs:burning_bow_arm', INITIAL_HEATING_TEMPERATURE + TEMPERATURE_INCREMENT)
    .resultItem('kubejs:perfectly_burned_bow_arm');

  // 烧制正好的弓臂 -> 烧过了头的弓臂
  event.recipes.tfc.heating('kubejs:perfectly_burned_bow_arm', INITIAL_HEATING_TEMPERATURE + 2 * TEMPERATURE_INCREMENT)
    .resultItem('kubejs:overburned_bow_arm');

  // 烧过了头的弓臂 -> 烧糊了的弓臂
  event.recipes.tfc.heating('kubejs:overburned_bow_arm', INITIAL_HEATING_TEMPERATURE + 3 * TEMPERATURE_INCREMENT)
    .resultItem('kubejs:charred_bow_arm');

  // 正在烧制的弓臂浸油配方，锻造奖励设为 2
  event.recipes.tfc.barrel_sealed(BARREL_DURATION)
    .inputItem('kubejs:burning_bow_arm')
    .inputFluid(Fluid.of('tfc:oil', 1000))
    .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":2}'))
    .sound('minecraft:block.barrel.open');

  // 烧制正好的弓臂浸油配方，锻造奖励设为 4
  event.recipes.tfc.barrel_sealed(BARREL_DURATION)
    .inputItem('kubejs:perfectly_burned_bow_arm')
    .inputFluid(Fluid.of('tfc:oil', 1000))
    .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":4}'))
    .sound('minecraft:block.barrel.open');

  // 烧过了头的弓臂浸油配方，锻造奖励设为 1
  event.recipes.tfc.barrel_sealed(BARREL_DURATION)
    .inputItem('kubejs:overburned_bow_arm')
    .inputFluid(Fluid.of('tfc:oil', 1000))
    .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":1}'))
    .sound('minecraft:block.barrel.open');

  // 烧糊了的弓臂浸油配方，锻造奖励设为 0
  event.recipes.tfc.barrel_sealed(BARREL_DURATION)
    .inputItem('kubejs:charred_bow_arm')
    .inputFluid(Fluid.of('tfc:oil', 1000))
    .outputItem(Item.of("kubejs:oiled_bow_arm", '{"tfc:forging_bonus":0}'))
    .sound('minecraft:block.barrel.open');
})*/

//辊压机碎矿一次处理

/*  imdouble_ingots.forEach(di => {
    const input1 = `tfc_ie_addon:metal/sheet/${di}`
    const output1 = `tfc_ie_addon:metal/double_sheet/${di}`
    create.sequenced_assembly(output1, input1,
      [create.deploying(input1, [input1, input1]),
      event.custom({
        "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": input1 }],
        "results": [{ "item": input1, "count": 1 }], "energy": 2000, "maxChargeRate": 50
      }),
      create.pressing(input1, input1),
      ]
    ).transitionalItem(input1).loops(1)//
   
  }) */





