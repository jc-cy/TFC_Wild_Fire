TFCEvents.data(e => {
  e.itemHeat('artisanal:metal/tinplate', 2.8, null, 1200)//马口铁
  e.itemHeat('kubejs:leather_hot_water_bag', 300, null, null)
  e.itemHeat('kubejs:rubber_hot_water_bag', 400, null, null)
  e.itemHeat("kubejs:metal_hot_water_bag", 360, null, null)
  e.itemHeat('kubejs:heating_warmer', 350, null, null)

  //烤肉
  e.itemHeat('#forge:meats', 1, null, null)
  e.itemHeat('#forge:weapons', 1, null, null)
  //矿物融化
  e.itemHeat('#tfc:ore_pieces', 0.7, null, null)
  //海带加热
  e.itemHeat('tfc:plant/leafy_kelp', 1, null, null)
  e.itemHeat('tfc:plant/winged_kelp', 1, null, null)
  e.itemHeat('tfc:plant/laminaria', 1, null, null)
  //零件模具
  e.itemHeat('kubejs:unfired_mold_mechanical', 1, null, null)
  //简易钥匙模具
  e.itemHeat('kubejs:unfired_mold_simple_key', 1, null, null)
  //黄铜机件融化
  e.itemHeat('tfc:brass_mechanisms', 1, null, null)
  //烤弓
  e.itemHeat('kubejs:burned_bow_arm', 1, null, null)
  e.itemHeat('kubejs:soaked_bow_arm', 1, null, null);
  e.itemHeat('kubejs:burned_bow_arm', 1, null, null)
  e.itemHeat('kubejs:soaked_bow_arm', 1, null, null);
  e.itemHeat('kubejs:burning_bow_arm', 1, null, null);
  e.itemHeat('kubejs:perfectly_burned_bow_arm', 1, null, null);
  e.itemHeat('kubejs:overburned_bow_arm', 1, null, null);
  e.itemHeat('kubejs:charred_bow_arm', 1, null, null);
  e.itemHeat('kubejs:oiled_bow_arm', 1, null, null);
  e.itemHeat('minecraft:anvil', 1, null, null)
  e.itemHeat('minecraft:chipped_anvil', 1, null, null)
  e.itemHeat('minecraft:damaged_anvil', 1, null, null)
  e.itemHeat('@vintageimprovements', 1, null, null)
  e.itemHeat('#forge:rods/all_metal', 1, null, null)
  e.itemHeat('#tfc:rock/gravel', 1, null, null)

  e.itemHeat('immersiveengineering:nugget_lead', 0.2, null, null)
  e.itemHeat('immersiveengineering:nugget_aluminum', 0.2, null, null)
  e.itemHeat('immersiveengineering:nugget_nickel', 0.2, null, null)
  e.itemHeat('immersiveengineering:nugget_uranium', 0.2, null, null)
  e.itemHeat('immersiveengineering:nugget_constantan', 0.2, null, null)
  e.itemHeat('immersiveengineering:nugget_electrum', 0.2, null, null)

  e.itemHeat('minecraft:brown_mushroom', 0.9, null, null)
  e.itemHeat('minecraft:red_mushroom', 0.9, null, null)
  e.itemHeat('wildfire:rat', 0.9, null, null)
  e.itemHeat('wildfire:pumpkin_dough', 1, null, null)
  e.itemHeat('tfc:food/red_bell_pepper', 1, null, null)
  e.itemHeat('tfc:food/yellow_bell_pepper', 1, null, null)
  e.itemHeat('tfc:food/green_bell_pepper', 1, null, null)
  e.itemHeat('tfc:food/maize', 1, null, null)
  e.itemHeat('tfc:food/garlic', 1, null, null)
  e.itemHeat('tfc:food/carrot', 1, null, null)
  e.itemHeat('tfc:food/red_apple', 1, null, null)
  e.itemHeat('tfc:food/green_apple', 1, null, null)
  e.itemHeat('wildfire:rat', 1, null, null)
  e.itemHeat('wildfire:cooked_rat', 1, null, null)
  e.itemHeat('wildfire:raw_sausage', 1, null, null)
  e.itemHeat('wildfire:cooked_sausage', 1, null, null)
  e.itemHeat('kubejs:unfired_crucible_mold', 3.5, null, null)
  e.itemHeat('kubejs:corundum_brick', 2.6, null, null)
  e.itemHeat('kubejs:corundum_brick_block', 2.6, null, null)

  e.itemHeat('@create', 1, null, null)
  e.itemHeat('@immersiveengineering', 1, null, null)
  e.itemHeat('@copycats', 1, null, null)
  e.itemHeat('@tfc_ie_addon', 1, null, null)
  e.itemHeat('@ad_astra', 1, null, null)
  e.itemHeat('@firmalife', 1, null, null)
  e.itemHeat('@createprism', 1, null, null)
  e.itemHeat('@minecraft', 1, null, null)
  /*e.itemHeat('#tfc:dirty_piles', 0.1, null, null)
  const heatitem = [
    '#forge:ores/rocky_chunks',
    '#forge:ores/chunks',
<<<<<<< Updated upstream
    '#forge:ores/dirty_dusts',

=======
<<<<<<< HEAD
    //'#forge:ores/dirty_dusts',//ERROE
    
=======
    '#forge:ores/dirty_dusts',

>>>>>>> origin/main
>>>>>>> Stashed changes
    '#forge:metal/pellet',
    '#forge:metal/briquet'
  ]
  heatitem.forEach((item) => {
    e.itemHeat(item, 1, null, null)
  })
*/
})
TFCEvents.data(event => {
  const metaltp = {
    copper: 1080,
    bismuth_bronze: 960,
    black_bronze: 1050,
    bronze: 950,
    black_steel: 1600,
    blue_steel: 1600,
    red_steel: 1600,
    steel: 1540,
    wrought_iron: 1535,
    nickel: 1453,
    manganese: 1246,
  };
  const triplemetaltp = 3 * 2.857
  //铋铜三层锭
  event.itemHeat('kubejs:triple_bismuth_bronze', triplemetaltp,
    Math.floor(metaltp.bismuth_bronze * 0.6),
    Math.floor(metaltp.bismuth_bronze * 0.8)
  );

  //黑铜三层锭
  event.itemHeat('kubejs:triple_black_bronze', triplemetaltp,
    Math.floor(metaltp.black_bronze * 0.6),
    Math.floor(metaltp.black_bronze * 0.8)
  );

  //青铜三层锭
  event.itemHeat('kubejs:triple_bronze', triplemetaltp,
    Math.floor(metaltp.bronze * 0.6),
    Math.floor(metaltp.bronze * 0.8)
  );

  //铜三层锭
  event.itemHeat('kubejs:triple_copper', triplemetaltp,
    Math.floor(metaltp.copper * 0.6),
    Math.floor(metaltp.copper * 0.8)
  );

  //锻铁三层锭
  event.itemHeat('kubejs:triple_wrought_iron', triplemetaltp,
    Math.floor(metaltp.wrought_iron * 0.6),
    Math.floor(metaltp.wrought_iron * 0.8)
  );

  //钢三层锭
  event.itemHeat('kubejs:triple_steel', triplemetaltp,
    Math.floor(metaltp.steel * 0.6),
    Math.floor(metaltp.steel * 0.8)
  );

  //高锰钢三层锭
  event.itemHeat('kubejs:triple_black_steel', triplemetaltp,
    Math.floor(metaltp.black_steel * 0.6),
    Math.floor(metaltp.black_steel * 0.8)
  );

  //秘银三层锭
  event.itemHeat('kubejs:triple_blue_steel', triplemetaltp,
    Math.floor(metaltp.blue_steel * 0.6),
    Math.floor(metaltp.blue_steel * 0.8)
  );

  //精金三层锭
  event.itemHeat('kubejs:triple_red_steel', triplemetaltp,
    Math.floor(metaltp.red_steel * 0.6),
    Math.floor(metaltp.red_steel * 0.8)

  );
  //搅拌头
  event.itemHeat('create:whisk', triplemetaltp,
    Math.floor(metaltp.wrought_iron * 0.6),
    Math.floor(metaltp.wrought_iron * 0.8)
  );

  //搅拌头
  event.itemHeat('kubejs:whisk_stirrer_head_blank', 2.857,
    Math.floor(metaltp.wrought_iron * 0.6),
    Math.floor(metaltp.wrought_iron * 0.8)
  );

  //锻铁双杆
  event.itemHeat('kubejs:wrought_iron_double_rod', 2.857,
    Math.floor(metaltp.wrought_iron * 0.6),
    Math.floor(metaltp.wrought_iron * 0.8)
  );

  //高锰钢搅拌器
  event.itemHeat('createmetallurgy:sturdy_whisk', triplemetaltp,
    Math.floor(metaltp.black_steel * 0.6),
    Math.floor(metaltp.black_steel * 0.8)
  );

  //高锰钢搅拌器
  event.itemHeat('kubejs:whisk_black_steel_head_blank', 2.857,
    Math.floor(metaltp.black_steel * 0.6),
    Math.floor(metaltp.black_steel * 0.8)
  );

  //高锰钢搅拌器
  event.itemHeat('kubejs:black_steel_double_rod', 2.857,
    Math.floor(metaltp.black_steel * 0.6),
    Math.floor(metaltp.black_steel * 0.8)
  );
  
  //镍方坯
  event.itemHeat('kubejs:raw_nickel_bloom', 2.857,
    Math.floor(metaltp.nickel * 0.6),
    Math.floor(metaltp.nickel * 0.8)
  );
  
  //镍方坯
  event.itemHeat('kubejs:refined_nickel_bloom', 2.857,
    Math.floor(metaltp.nickel * 0.6),
    Math.floor(metaltp.nickel * 0.8)
  );

  //炽熔镍方坯
  event.itemHeat('kubejs:hot_raw_nickel_bloom', 2.857,
    Math.floor(metaltp.nickel * 0.6),
    Math.floor(metaltp.nickel * 0.8)
  );

  //粗锰铁方坯
  event.itemHeat('kubejs:raw_ferromanganese_bloom', 2.857,
    Math.floor(metaltp.manganese * 0.6),
    Math.floor(metaltp.manganese * 0.8)
  );

  //炽融粗锰铁方坯
  event.itemHeat('kubejs:hot_raw_ferromanganese_bloom', 2.857,
    Math.floor(metaltp.manganese * 0.6),
    Math.floor(metaltp.manganese * 0.8)
  );
  
  //炽熔铁方坯
  event.itemHeat('kubejs:hot_raw_iron_bloom', 2.857,
    Math.floor(metaltp.wrought_iron * 0.6),
    Math.floor(metaltp.wrought_iron * 0.8)
  );

});//三锭
TFCEvents.data(event => {
  // 1. 基础配置表
  const metal = [
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "black_steel", temperature: 1784, metal: "black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "red_steel" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }
  ];

  const weaponry = [
    { name: "quarterstaff", number: 200 },
    { name: "dagger", number: 100 },
    { name: "parrying_dagger", number: 150 },
    { name: "longsword", number: 250 },
    { name: "greatsword", number: 350 },
    { name: "saber", number: 250 },
    { name: "rapier", number: 250 },
    { name: "katana", number: 250 },
    { name: "battleaxe", number: 400 },
    { name: "battle_hammer", number: 200 },
    { name: "warhammer", number: 400 },
    { name: "javelin", number: 400 },
    { name: "spear", number: 100 },
    { name: "pike", number: 100 },
    { name: "lance", number: 400 },
    { name: "glaive", number: 350 },
    { name: "halberd", number: 400 },
    { name: "throwing_knife", number: 100 },
    { name: "tomahawk", number: 200 },
    { name: "scythe", number: 400 },
    { name: "flanged_mace", number: 300 },
    { name: "boomerang", number: 100 },
    { name: "tomahawk_weapon_part", number: 100 },
    { name: "throwing_knife_weapon_part", number: 100 },
    { name: "dagger_weapon_part", number: 100 },
    { name: "handguard_weapon_part", number: 50 },
    { name: "longsword_weapon_part", number: 200 },
    { name: "katana_weapon_part", number: 200 },
    { name: "saber_weapon_part", number: 200 },
    { name: "rapier_weapon_part", number: 200 },
    { name: "battle_hammer_weapon_part", number: 200 },
    { name: "warhammer_weapon_part", number: 300 },
    { name: "battleaxe_weapon_part", number: 300 },
    { name: "flanged_mace_weapon_part", number: 300 },
    { name: "greatsword_weapon_part", number: 300 },
    { name: "halberd_weapon_part", number: 400 },
    { name: "glaive_weapon_part", number: 300 },
    { name: "scythe_weapon_part", number: 400 },
    { name: "lance_weapon_part", number: 400 },
    { name: "quarterstaff_weapon_part", number: 100 }
  ];
  metal.forEach(metalItem => {//可以焊接修复的金属碎块
    const heatTemperature = metalItem.temperature * 0.9;

    event.itemHeat(`kubejs:${metalItem.name}_fragments`, 0.2 * 2.8, null, heatTemperature);
  });
  metal.forEach(metalItem => {

    weaponry.forEach(equipment => {

      const itemId = `kubejs:${metalItem.name}_${equipment.name}`;
      event.itemHeat(itemId, equipment.number / 100 * 2.857, null, null);
    });
  });

});//斯巴达武器
TFCEvents.data(event => {

  const items = [

    { name: "rusty_iron_fragments", metal: 'cast_iron', number: 35, temperature: 1535 },
    { name: "silver_fragments", metal: "silver", number: 35, temperature: 961 },
    { name: "gold_fragments", metal: "gold", number: 35, temperature: 1064 },
    { name: "rose_gold_fragments", metal: "rose_gold", number: 35, temperature: 1064 },
    { name: "amber_gold_fragments", metal: "amber_gold", number: 35, temperature: 1064 },
    { name: "copper_scrap", metal: "copper", number: 75, temperature: 1080 },
    { name: "rusty_copper_scrap", metal: "copper", number: 75, temperature: 1080 },
    { name: "rusty_bronze_scrap", metal: "bronze", number: 75, temperature: 950 },
    { name: "bronze_scrap", metal: "bronze", number: 75, temperature: 950 },
    { name: "rusty_iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 },
    { name: "iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 },
    { name: "ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 },
    { name: "rusty_ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 },
    { name: "copper_link", metal: "copper", number: 25, temperature: 1080 },
    { name: "rusty_copper_link", metal: "copper", number: 25, temperature: 1080 },
    { name: "bronze_link", metal: "bronze", number: 25, temperature: 950 },
    { name: "rusty_bronze_link", metal: "bronze", number: 25, temperature: 950 },
    { name: "rusty_iron_link", metal: 'cast_iron', number: 25, temperature: 1535 },
    { name: "iron_link", metal: 'cast_iron', number: 25, temperature: 1535 },
    { name: "crown", metal: "gold", number: 5, temperature: 1064 },

    // 钥匙类
    { name: "brass_simple_key", temperature: 940, metal: "brass", number: 100 },
    { name: "gold_simple_key", temperature: 1064, metal: "gold", number: 100 },
    { name: "bismuth_bronze_simple_key", temperature: 960, metal: "bismuth_bronze", number: 100 },
    { name: "black_bronze_simple_key", temperature: 1050, metal: "black_bronze", number: 100 },
    { name: "bronze_simple_key", temperature: 950, metal: "bronze", number: 100 },
    { name: "copper_simple_key", temperature: 1080, metal: "copper", number: 100 },
    // 开锁器类
    { name: "bismuth_bronze_lockpick", temperature: 960, metal: "bismuth_bronze", number: 50 },
    { name: "black_bronze_lockpick", temperature: 1050, metal: "black_bronze", number: 50 },
    { name: "bronze_lockpick", temperature: 950, metal: "bronze", number: 50 },
    { name: "copper_lockpick", temperature: 1080, metal: "copper", number: 50 },
    { name: "cast_iron_lockpick", temperature: 1150, metal: "cast_iron", number: 50 },
    { name: "wrought_iron_lockpick", temperature: 1535, metal: "cast_iron", number: 50 },
    { name: "steel_lockpick", temperature: 1540, metal: "steel", number: 50 },
    { name: "black_steel_lockpick", temperature: 1784, metal: "black_steel", number: 50 },
    // 撬棍类
    { name: "wrought_iron_crowbar", temperature: 1535, metal: "cast_iron", number: 200 },
    { name: "steel_crowbar", temperature: 1540, metal: "steel", number: 200 },
    { name: "black_steel_crowbar", temperature: 1784, metal: "black_steel", number: 200 },
  ];
  items.forEach(item => {
    const itemId = `kubejs:${item.name}`; // 物品ID直接使用物件name字段
    event.itemHeat(itemId, item.number / 100 * 2.857, null, null);
  });
});//杂项
TFCEvents.data(event => {
  // 多模组物品配置表（含模组前缀、温度、热容量基数）
  const itemss = [
    { name: "anvil", temperature: 1535, metal: "cast_iron", number: 1400, mods: "minecraft:" },
    { name: "chipped_anvil", temperature: 1535, metal: "cast_iron", number: 1200, mods: "minecraft:" },
    { name: "damaged_anvil", temperature: 1535, metal: "cast_iron", number: 1000, mods: "minecraft:" },
    { name: "material_component_steel", temperature: 1580, metal: "steel", number: 50, mods: "kubejs:" },
    { name: "material_component_black_steel", temperature: 1620, metal: "black_steel", number: 50, mods: "kubejs:" },
    { name: "material_component_wrought_iron", temperature: 1500, metal: "cast_iron", number: 50, mods: "kubejs:" },
    { name: "brass_forge_door", temperature: 930, metal: "brass", number: 400, mods: "kubejs:" },
    { name: "bloomery", temperature: 930, metal: "brass", number: 1800, mods: "tfc:" }
  ];

  // 遍历所有多模组物品，生成热力配置
  itemss.forEach(item => {
    const itemId = `${item.mods}${item.name}`; // 拼接模组前缀+物品名，生成完整ID
    event.itemHeat(itemId, item.number / 100 * 2.857, null, null);
  });
});//杂项2
TFCEvents.data(event => {
  // 钳子配置表（含金属类型、熔点、对应金属流体）
  const metaltongs = [
    { name: "bismuth_bronze", temperature: 860, metal: "tfc:metal/bismuth_bronze" },
    { name: "black_bronze", temperature: 910, metal: "tfc:metal/black_bronze" },
    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1085, metal: "tfc:metal/copper" },
    { name: "wrought_iron", temperature: 1538, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1538, metal: "tfc:metal/steel" },
    { name: "black_steel", temperature: 1420, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1450, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 1480, metal: "tfc:metal/red_steel" },
    { name: "cast_iron", temperature: 1200, metal: "tfc:metal/cast_iron" },
    { name: "gold", temperature: 1064, metal: "tfc:metal/gold" },
    { name: "rose_gold", temperature: 1050, metal: "tfc:metal/rose_gold" },
    { name: "brass", temperature: 900, metal: "tfc:metal/brass" },
    { name: "bismuth", temperature: 271, metal: "tfc:metal/bismuth" },
    { name: "silver", temperature: 961, metal: "tfc:metal/silver" },
    { name: "sterling_silver", temperature: 940, metal: "tfc:metal/sterling_silver" },
    { name: "nickel", temperature: 1455, metal: "tfc:metal/nickel" },
    { name: "chromium", temperature: 1907, metal: "firmalife:bucket/metal/chromium" },
    { name: "zinc", temperature: 419, metal: "tfc:metal/zinc" },
    { name: "stainless_steel", temperature: 1400, metal: "firmalife:bucket/metal/stainless_steel" },
    { name: "black_steel", temperature: 1538, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "tfc:metal/red_steel" },
    { name: "black_steel", temperature: 1784, metal: "tfc:metal/black_steel" }
  ];

  metaltongs.forEach(metal => {
    const tongId = `kubejs:${metal.name}_tong`;
    event.itemHeat(tongId, 2 * 2.857, null, null);

    // 2. 钳子部件：热力配置
    const tongPartId = `kubejs:${metal.name}_tong_part`;
    event.itemHeat(tongPartId, 1 * 2.857, null, null);


  });
});//钳子
TFCEvents.data(event => {
  // 戒指配置表
  const rings = [
    { name: "copper", temperature: 1080, metal: "copper" }, // 铜戒指
    { name: "bronze", temperature: 950, metal: "bronze" }, // 铜戒指
    { name: "bismuth_bronze", temperature: 1080, metal: "bismuth_bronze" }, // 铜戒指
    { name: "black_bronze", temperature: 1080, metal: "black_bronze" }, // 铜戒指
    { name: "sterling_silver", temperature: 961, metal: "sterling_silver" }, // 纹银戒指
    { name: "silver", temperature: 961, metal: "silver" }, // 银戒指
    { name: "gold", temperature: 1064, metal: "golden" }, // 金戒指
    { name: "rose_gold", temperature: 1064, metal: "rose_gold" }, // 玫瑰金戒指
    { name: "steel", temperature: 1540, metal: "steel" }, // 钢戒指
    { name: "black_steel", temperature: 1784, metal: "black_steel" } // 高锰钢戒指
  ];

  // 遍历生成所有戒指的热力配置
  rings.forEach(ring => {

    const forgingTemp = Math.floor(ring.temperature * 0.6); // 锻造温度=熔点60%
    const weldingTemp = Math.floor(ring.temperature * 0.8); // 焊接温度=熔点80%
    const itemId = `shiny_ornaments:${ring.name}_ring`;
    const itemId2 = `shiny_ornaments:${ring.name}_ring_base`;
    event.itemHeat(itemId, 0.5 * 2.857, forgingTemp, weldingTemp);
    event.itemHeat(itemId2, 1 * 2.857, forgingTemp, weldingTemp);
  });

  //新金属融化热值
  const ingot_type = [
    { name: 'ingot', number: 100, triplemetaltp: 2.857 },
    { name: 'double_ingot', number: 200, triplemetaltp: 2.857 * 2 },
    { name: 'sheet', number: 200, triplemetaltp: 2.857 * 2 },
    { name: 'double_sheet', number: 400, triplemetaltp: 2.857 * 4 },
    { name: 'rod', number: 50, triplemetaltp: 2.857 / 2 }]
  const new_metal = [

    { name: "titanium_alloy", temperature: 1680, metal: "tfc:metal/titanium_alloy" },
    { name: "titanium", temperature: 1668, metal: "tfc:metal/titanium" },
    { name: "vanadium", temperature: 1917, metal: "tfc:metal/vanadium" },
    { name: "manganese", temperature: 1246, metal: "tfc:metal/manganese" }
  ]
  new_metal.forEach(metal => {
    ingot_type.forEach(type => {

      event.itemHeat(`tfc:metal/${type.name}/${metal.name}`, type.triplemetaltp,
        Math.floor(metal.temperature * 0.6),
        Math.floor(metal.temperature * 0.8)
      )
    })
  })

});