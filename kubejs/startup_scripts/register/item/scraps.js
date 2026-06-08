StartupEvents.registry('item', event => {
    event.create('kubejs:crown')
        //.texture('kubejs:item/scraps/crown')
    

    const metal = [
        { name: "copper", temperature: 1080, metal: "copper" },
        { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
        { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
        { name: "bronze", temperature: 950, metal: "bronze" },
        { name: "black_steel", temperature: 1485, metal: "black_steel" },
        { name: "blue_steel", temperature: 1538, metal: "blue_steel" },
        { name: "red_steel", temperature: 1538, metal: "red_steel" },
        { name: "steel", temperature: 1540, metal: "steel" },
        { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' },
          { name: "cast_iron", temperature: 1535, metal: 'cast_iron' }
    ];
    metal.forEach(metal => {
        event.create(`kubejs:${metal.name}_fragments`)
            .texture(`kubejs:item/scraps/${metal.name}_fragments`)
    })
})

StartupEvents.registry('item', event => {
  

    // 金属碎片类
    event.create('kubejs:rusty_iron_fragments')
        .texture('kubejs:item/scraps/rusty_iron_fragments');

    event.create('kubejs:silver_fragments')
        .texture('kubejs:item/scraps/silver_fragments');

    event.create('kubejs:gold_fragments')
        .texture('kubejs:item/scraps/gold_fragments');

    event.create('kubejs:rose_gold_fragments')
        .texture('kubejs:item/scraps/rose_gold_fragments'); // 碎玫瑰金

    event.create('kubejs:amber_gold_fragments')
        .texture('kubejs:item/scraps/amber_gold_fragments'); // 碎琥珀金

    // 甲片类（各类金属甲片）
    event.create('kubejs:copper_scrap')
        .texture('kubejs:item/scraps/copper_scrap'); // 铜甲片

    event.create('kubejs:rusty_copper_scrap')
        .texture('kubejs:item/scraps/rusty_copper_scrap'); // 锈铜甲片

    event.create('kubejs:rusty_bronze_scrap')
        .texture('kubejs:item/scraps/rusty_bronze_scrap'); // 锈青铜甲片

    event.create('kubejs:bronze_scrap')
        .texture('kubejs:item/scraps/bronze_scrap'); // 青铜甲片

    event.create('kubejs:rusty_iron_scrap')
        .texture('kubejs:item/scraps/rusty_iron_scrap'); // 锈铁甲片

    event.create('kubejs:iron_scrap')
        .texture('kubejs:item/scraps/iron_scrap'); // 铁甲片

    event.create('kubejs:ancient_steel_scrap')
        .texture('kubejs:item/scraps/ancient_steel_scrap'); // 古钢甲片

    event.create('kubejs:rusty_ancient_steel_scrap')
        .texture('kubejs:item/scraps/rusty_ancient_steel_scrap'); // 锈古钢甲片

    // 链环类
    event.create('kubejs:copper_link')
        .texture('kubejs:item/scraps/copper_link'); // 铜链环

    event.create('kubejs:rusty_copper_link')
        .texture('kubejs:item/scraps/rusty_copper_link'); // 锈铜链环

    event.create('kubejs:bronze_link')
        .texture('kubejs:item/scraps/bronze_link'); // 青铜链环

    event.create('kubejs:rusty_bronze_link')
        .texture('kubejs:item/scraps/rusty_bronze_link'); // 锈青铜链环

    event.create('kubejs:rusty_iron_link')
        .texture('kubejs:item/scraps/rusty_iron_link'); // 锈铁链环

    event.create('kubejs:iron_link')
        .texture('kubejs:item/scraps/iron_link'); // 铁链环

    // 皮革类物品
    event.create('kubejs:hardened_leather')
        .texture('kubejs:item/hardened_leather'); // 硬化皮革

    event.create('kubejs:leather_plate')
        .texture('kubejs:item/scraps/leather_plate'); // 皮板

    event.create('kubejs:leather_scrap')
        .texture('kubejs:item/scraps/leather_scrap'); // 缝制皮护板

    event.create('kubejs:rags', 'heal_item')
        .texture('kubejs:item/scraps/rags') // 破布
        .tooltip(Text.gray('一些破布条和烂线')) // 物品提示文本
        .useDuration(itemstack => 30) // 使用时长30游戏刻（1.5秒）
        .useAnimation("bow"); // 使用动画为拉弓动画

    // 氧化铝砖
    event.create('kubejs:alumina_dioxide')
        .texture('kubejs:item/scraps/alumina_dioxide'); // 氧化铝砖
})
