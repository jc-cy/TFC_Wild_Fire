ServerEvents.recipes(event => {
  const { tfc, create, kubejs, immersiveengineering } = event.recipes;
  function crucible(input, output, amount, temperature) {
    event.custom({
      "type": "createmetallurgy:bulk_melting",
      "conditions":
        [{
          "type": "forge:not", "value":
            { "type": "forge:tag_empty", "tag": "forge:storage_blocks/iron" }
        }],
      "ingredients": [{ "item": input }],
      "maxHeatRequirement": 50, "minHeatRequirement": Math.ceil(temperature / 300), "processingTime": 200,
      "results": [{ "amount": amount, "fluid": output }]
    })
  }

  const metalHeatingConfig = {
    "bismuth": { temp: 271, fluid: "tfc:metal/bismuth" },
    "bismuth_bronze": { temp: 960, fluid: "tfc:metal/bismuth_bronze" },
    "black_bronze": { temp: 1050, fluid: "tfc:metal/black_bronze" },
    "bronze": { temp: 950, fluid: "tfc:metal/bronze" },
    "copper": { temp: 1085, fluid: "tfc:metal/copper" },
    "gold": { temp: 1064, fluid: "tfc:metal/gold" },
    "nickel": { temp: 1455, fluid: "tfc:metal/nickel" },
    "rose_gold": { temp: 1060, fluid: "tfc:metal/rose_gold" },
    "silver": { temp: 961, fluid: "tfc:metal/silver" },
    "tin": { temp: 232, fluid: "tfc:metal/tin" },
    "zinc": { temp: 420, fluid: "tfc:metal/zinc" },
    "sterling_silver": { temp: 925, fluid: "tfc:metal/sterling_silver" },
    "cast_iron": { temp: 1150, fluid: "tfc:metal/cast_iron" },
    "wrought_iron": { temp: 1535, fluid: "tfc:metal/cast_iron" },
    "steel": { temp: 1540, fluid: "tfc:metal/steel" },
    "black_steel": { temp: 1784, fluid: "tfc:metal/black_steel" },
    "blue_steel": { temp: 1863, fluid: "tfc:metal/blue_steel" },
    "red_steel": { temp: 2066, fluid: "tfc:metal/red_steel" },
    "brass": { temp: 930, fluid: "tfc:metal/brass" },
    "electrum": { temp: 900, fluid: "tfc_ie_addon:metal/electrum" },
    "aluminum": { temp: 650, fluid: "tfc_ie_addon:metal/aluminum" },
    "lead": { temp: 500, fluid: "tfc_ie_addon:metal/lead" },
    "constantan": { temp: 750, fluid: "tfc_ie_addon:metal/constantan" },
    "uranium": { temp: 747, fluid: "tfc_ie_addon:metal/uranium" },
    "chromium": { temp: 1907, fluid: "firmalife:bucket/metal/chromium" },
    "stainless_steel": { temp: 1400, fluid: "firmalife:bucket/metal/stainless_steel" },
    "unknown": { temp: 400, fluid: "tfc:metal/unknown" }
  };

  function tfc_heating(input, amount, metalName, useDurability) {
    const metalConfig = metalHeatingConfig[metalName];
    try {
      //群峦烧金属
      let heatingLogic = tfc.heating(input, metalConfig.temp).resultFluid(Fluid.of(metalConfig.fluid, amount));
      if (useDurability === true) {
        heatingLogic.useDurability(true);
      }
      //坩埚加热
      crucible(input, metalConfig.fluid, amount, metalConfig.temp);
    } catch (error) { console.log(`[TFC加热] 处理 ${input} (金属: ${metalName}) 时出错: ${error.message}`, error); }
  }

  const metalList = [
    // { name: 'minecraft:netherite_ingot', number: 100, metal: "bismuth" },
    { name: 'kubejs:unfinished/double_ingot/bismuth_bronze', number: 200, metal: "bismuth_bronze" },
    { name: 'kubejs:unfinished/hot_double_ingot/bismuth_bronze', number: 200, metal: "bismuth_bronze" },
    { name: 'kubejs:unfinished/double_ingot/black_bronze', number: 200, metal: "black_bronze" },
    { name: 'kubejs:unfinished/hot_double_ingot/black_bronze', number: 200, metal: "black_bronze" },
    { name: 'kubejs:unfinished/double_ingot/bronze', number: 200, metal: "bronze" },
    { name: 'kubejs:unfinished/hot_double_ingot/bronze', number: 200, metal: "bronze" },
    { name: 'kubejs:unfinished/double_ingot/copper', number: 200, metal: "copper" },
    { name: 'kubejs:unfinished/hot_double_ingot/copper', number: 200, metal: "copper" },
    { name: 'kubejs:unfinished/double_ingot/wrought_iron', number: 200, metal: "wrought_iron" },
    { name: 'kubejs:unfinished/hot_double_ingot/wrought_iron', number: 200, metal: "wrought_iron" },
    { name: 'kubejs:unfinished/double_ingot/steel', number: 200, metal: "steel" },
    { name: 'kubejs:unfinished/hot_double_ingot/steel', number: 200, metal: "steel" },
    { name: 'kubejs:unfinished/double_ingot/black_steel', number: 200, metal: "black_steel" },
    { name: 'kubejs:unfinished/hot_double_ingot/black_steel', number: 200, metal: "black_steel" },
    { name: 'kubejs:unfinished/double_ingot/blue_steel', number: 200, metal: "blue_steel" },
    { name: 'kubejs:unfinished/hot_double_ingot/blue_steel', number: 200, metal: "blue_steel" },
    { name: 'kubejs:unfinished/double_ingot/red_steel', number: 200, metal: "red_steel" },
    { name: 'kubejs:unfinished/hot_double_ingot/red_steel', number: 200, metal: "red_steel" },
    { name: 'kubejs:unfinished/double_ingot/cast_iron', number: 200, metal: "cast_iron" },
    { name: 'kubejs:unfinished/hot_double_ingot/cast_iron', number: 200, metal: "cast_iron" },
    { name: 'kubejs:unfinished/double_ingot/gold', number: 200, metal: "gold" },
    { name: 'kubejs:unfinished/hot_double_ingot/gold', number: 200, metal: "gold" },
    { name: 'kubejs:unfinished/double_ingot/rose_gold', number: 200, metal: "rose_gold" },
    { name: 'kubejs:unfinished/hot_double_ingot/rose_gold', number: 200, metal: "rose_gold" },
    { name: 'kubejs:unfinished/double_ingot/electrum', number: 200, metal: "electrum" },
    { name: 'kubejs:unfinished/hot_double_ingot/electrum', number: 200, metal: "electrum" },
    { name: 'kubejs:unfinished/double_ingot/constantan', number: 200, metal: "constantan" },
    { name: 'kubejs:unfinished/hot_double_ingot/constantan', number: 200, metal: "constantan" },
    { name: 'kubejs:unfinished/double_ingot/brass', number: 200, metal: "brass" },
    { name: 'kubejs:unfinished/hot_double_ingot/brass', number: 200, metal: "brass" },
    { name: 'kubejs:unfinished/double_ingot/lead', number: 200, metal: "lead" },
    { name: 'kubejs:unfinished/hot_double_ingot/lead', number: 200, metal: "lead" },
    { name: 'kubejs:unfinished/double_ingot/bismuth', number: 200, metal: "bismuth" },
    { name: 'kubejs:unfinished/hot_double_ingot/bismuth', number: 200, metal: "bismuth" },
    { name: 'kubejs:unfinished/double_ingot/uranium', number: 200, metal: "uranium" },
    { name: 'kubejs:unfinished/hot_double_ingot/uranium', number: 200, metal: "uranium" },
    { name: 'kubejs:unfinished/double_ingot/aluminum', number: 200, metal: "aluminum" },
    { name: 'kubejs:unfinished/hot_double_ingot/aluminum', number: 200, metal: "aluminum" },
    { name: 'kubejs:unfinished/double_ingot/silver', number: 200, metal: "silver" },
    { name: 'kubejs:unfinished/hot_double_ingot/silver', number: 200, metal: "silver" },
    { name: 'kubejs:unfinished/double_ingot/sterling_silver', number: 200, metal: "sterling_silver" },
    { name: 'kubejs:unfinished/hot_double_ingot/sterling_silver', number: 200, metal: "sterling_silver" },
    { name: 'kubejs:unfinished/double_ingot/tin', number: 200, metal: "tin" },
    { name: 'kubejs:unfinished/hot_double_ingot/tin', number: 200, metal: "tin" },
    { name: 'kubejs:unfinished/double_ingot/nickel', number: 200, metal: "nickel" },
    { name: 'kubejs:unfinished/hot_double_ingot/nickel', number: 200, metal: "nickel" },
    { name: 'kubejs:unfinished/double_ingot/chromium', number: 200, metal: "chromium" },
    { name: 'kubejs:unfinished/hot_double_ingot/chromium', number: 200, metal: "chromium" },
    { name: 'kubejs:unfinished/double_ingot/zinc', number: 200, metal: "zinc" },
    { name: 'kubejs:unfinished/hot_double_ingot/zinc', number: 200, metal: "zinc" },
    { name: 'kubejs:unfinished/double_ingot/stainless_steel', number: 200, metal: "stainless_steel" },
    { name: 'kubejs:unfinished/hot_double_ingot/stainless_steel', number: 200, metal: "stainless_steel" },
    { name: 'kubejs:unfinished/double_ingot/titanium_alloy', number: 200, metal: "titanium_alloy" },
    { name: 'kubejs:unfinished/hot_double_ingot/titanium_alloy', number: 200, metal: "titanium_alloy" },
    { name: 'kubejs:unfinished/double_ingot/titanium', number: 200, metal: "titanium" },
    { name: 'kubejs:unfinished/hot_double_ingot/titanium', number: 200, metal: "titanium" },
    { name: 'kubejs:unfinished/double_ingot/vanadium', number: 200, metal: "vanadium" },
    { name: 'kubejs:unfinished/hot_double_ingot/vanadium', number: 200, metal: "vanadium" },
    { name: 'kubejs:unfinished/double_ingot/manganese', number: 200, metal: "manganese" },
    { name: 'kubejs:unfinished/hot_double_ingot/manganese', number: 200, metal: "manganese" },

    // ========== 双层薄板相关 (number: 400) ==========
    { name: 'kubejs:unfinished/double_sheet/bismuth_bronze', number: 400, metal: "bismuth_bronze" },
    { name: 'kubejs:unfinished/hot_double_sheet/bismuth_bronze', number: 400, metal: "bismuth_bronze" },
    { name: 'kubejs:unfinished/double_sheet/black_bronze', number: 400, metal: "black_bronze" },
    { name: 'kubejs:unfinished/hot_double_sheet/black_bronze', number: 400, metal: "black_bronze" },
    { name: 'kubejs:unfinished/double_sheet/bronze', number: 400, metal: "bronze" },
    { name: 'kubejs:unfinished/hot_double_sheet/bronze', number: 400, metal: "bronze" },
    { name: 'kubejs:unfinished/double_sheet/copper', number: 400, metal: "copper" },
    { name: 'kubejs:unfinished/hot_double_sheet/copper', number: 400, metal: "copper" },
    { name: 'kubejs:unfinished/double_sheet/wrought_iron', number: 400, metal: "wrought_iron" },
    { name: 'kubejs:unfinished/hot_double_sheet/wrought_iron', number: 400, metal: "wrought_iron" },
    { name: 'kubejs:unfinished/double_sheet/steel', number: 400, metal: "steel" },
    { name: 'kubejs:unfinished/hot_double_sheet/steel', number: 400, metal: "steel" },
    { name: 'kubejs:unfinished/double_sheet/black_steel', number: 400, metal: "black_steel" },
    { name: 'kubejs:unfinished/hot_double_sheet/black_steel', number: 400, metal: "black_steel" },
    { name: 'kubejs:unfinished/double_sheet/blue_steel', number: 400, metal: "blue_steel" },
    { name: 'kubejs:unfinished/hot_double_sheet/blue_steel', number: 400, metal: "blue_steel" },
    { name: 'kubejs:unfinished/double_sheet/red_steel', number: 400, metal: "red_steel" },
    { name: 'kubejs:unfinished/hot_double_sheet/red_steel', number: 400, metal: "red_steel" },
    { name: 'kubejs:unfinished/double_sheet/cast_iron', number: 400, metal: "cast_iron" },
    { name: 'kubejs:unfinished/hot_double_sheet/cast_iron', number: 400, metal: "cast_iron" },
    { name: 'kubejs:unfinished/double_sheet/gold', number: 400, metal: "gold" },
    { name: 'kubejs:unfinished/hot_double_sheet/gold', number: 400, metal: "gold" },
    { name: 'kubejs:unfinished/double_sheet/rose_gold', number: 400, metal: "rose_gold" },
    { name: 'kubejs:unfinished/hot_double_sheet/rose_gold', number: 400, metal: "rose_gold" },
    { name: 'kubejs:unfinished/double_sheet/electrum', number: 400, metal: "electrum" },
    { name: 'kubejs:unfinished/hot_double_sheet/electrum', number: 400, metal: "electrum" },
    { name: 'kubejs:unfinished/double_sheet/constantan', number: 400, metal: "constantan" },
    { name: 'kubejs:unfinished/hot_double_sheet/constantan', number: 400, metal: "constantan" },
    { name: 'kubejs:unfinished/double_sheet/brass', number: 400, metal: "brass" },
    { name: 'kubejs:unfinished/hot_double_sheet/brass', number: 400, metal: "brass" },
    { name: 'kubejs:unfinished/double_sheet/lead', number: 400, metal: "lead" },
    { name: 'kubejs:unfinished/hot_double_sheet/lead', number: 400, metal: "lead" },
    { name: 'kubejs:unfinished/double_sheet/bismuth', number: 400, metal: "bismuth" },
    { name: 'kubejs:unfinished/hot_double_sheet/bismuth', number: 400, metal: "bismuth" },
    { name: 'kubejs:unfinished/double_sheet/uranium', number: 400, metal: "uranium" },
    { name: 'kubejs:unfinished/hot_double_sheet/uranium', number: 400, metal: "uranium" },
    { name: 'kubejs:unfinished/double_sheet/aluminum', number: 400, metal: "aluminum" },
    { name: 'kubejs:unfinished/hot_double_sheet/aluminum', number: 400, metal: "aluminum" },
    { name: 'kubejs:unfinished/double_sheet/silver', number: 400, metal: "silver" },
    { name: 'kubejs:unfinished/hot_double_sheet/silver', number: 400, metal: "silver" },
    { name: 'kubejs:unfinished/double_sheet/sterling_silver', number: 400, metal: "sterling_silver" },
    { name: 'kubejs:unfinished/hot_double_sheet/sterling_silver', number: 400, metal: "sterling_silver" },
    { name: 'kubejs:unfinished/double_sheet/tin', number: 400, metal: "tin" },
    { name: 'kubejs:unfinished/hot_double_sheet/tin', number: 400, metal: "tin" },
    { name: 'kubejs:unfinished/double_sheet/nickel', number: 400, metal: "nickel" },
    { name: 'kubejs:unfinished/hot_double_sheet/nickel', number: 400, metal: "nickel" },
    { name: 'kubejs:unfinished/double_sheet/chromium', number: 400, metal: "chromium" },
    { name: 'kubejs:unfinished/hot_double_sheet/chromium', number: 400, metal: "chromium" },
    { name: 'kubejs:unfinished/double_sheet/zinc', number: 400, metal: "zinc" },
    { name: 'kubejs:unfinished/hot_double_sheet/zinc', number: 400, metal: "zinc" },
    { name: 'kubejs:unfinished/double_sheet/stainless_steel', number: 400, metal: "stainless_steel" },
    { name: 'kubejs:unfinished/hot_double_sheet/stainless_steel', number: 400, metal: "stainless_steel" },
    { name: 'kubejs:unfinished/double_sheet/titanium_alloy', number: 400, metal: "titanium_alloy" },
    { name: 'kubejs:unfinished/hot_double_sheet/titanium_alloy', number: 400, metal: "titanium_alloy" },
    { name: 'kubejs:unfinished/double_sheet/titanium', number: 400, metal: "titanium" },
    { name: 'kubejs:unfinished/hot_double_sheet/titanium', number: 400, metal: "titanium" },
    { name: 'kubejs:unfinished/double_sheet/vanadium', number: 400, metal: "vanadium" },
    { name: 'kubejs:unfinished/hot_double_sheet/vanadium', number: 400, metal: "vanadium" },
    { name: 'kubejs:unfinished/double_sheet/manganese', number: 400, metal: "manganese" },
    { name: 'kubejs:unfinished/hot_double_sheet/manganese', number: 400, metal: "manganese" }
  ];


  metalList.forEach(metalItem => {
    tfc_heating(metalItem.name, metalItem.number, metalItem.metal, false);
  });


})




ServerEvents.recipes(e => {

  const { tfc, create, kubejs, shiny_ornaments, immersiveengineering } = e.recipes;
  function crucible(input, output, amount, temperature) {
    e.custom({
      "type": "createmetallurgy:bulk_melting",
      "conditions":
        [{
          "type": "forge:not", "value":
            { "type": "forge:tag_empty", "tag": "forge:storage_blocks/iron" }
        }],
      "ingredients": [{ "item": input }],
      "maxHeatRequirement": 50, "minHeatRequirement": Math.ceil(temperature / 300), "processingTime": 200,
      "results": [{ "amount": amount, "fluid": output }]
    })
  }
  const metaltype = [
    { name: 'ingot', number: 100 },
    { name: 'double_ingot', number: 200 },
    { name: 'sheet', number: 200 },
    { name: 'double_sheet', number: 400 },
    { name: 'rod', number: 50 }]
  const allmetal = [
    { name: "bismuth", temperature: 271, metal: "bismuth" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "gold", temperature: 1064, metal: "gold" },
    { name: "nickel", temperature: 1455, metal: "nickel" },
    { name: "rose_gold", temperature: 1060, metal: "rose_gold" },
    { name: "silver", temperature: 961, metal: "silver" },
    { name: "tin", temperature: 232, metal: "tin" },
    { name: "zinc", temperature: 420, metal: "zinc" },
    { name: "sterling_silver", temperature: 925, metal: "sterling_silver" },
    { name: "wrought_iron", temperature: 1535, metal: "cast_iron" },
    { name: "cast_iron", temperature: 1150, metal: "cast_iron" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "black_steel", temperature: 1784, metal: "black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "red_steel" }
  ];
  const metal = [
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1070, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "black_steel", temperature: 1784, metal: "black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "red_steel" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }
  ];
  allmetal.forEach(metala => {
    metaltype.forEach(type => {
      crucible(`tfc:metal/${type.name}/${metala.name}`, `tfc:metal/${metala.metal}`, type.number, metala.temperature)
    })
  })
  const tfctool = [
    // { mod: 'tfc:metal/', tool: 'tuyere/', number: 200 },        // 鼓风口
    { mod: 'tfc:metal/', tool: 'propick_head/', number: 100 },       // 勘探镐
    { mod: 'tfc:metal/', tool: 'axe_head/', number: 100 },           // 斧头
    { mod: 'tfc:metal/', tool: 'shovel_head/', number: 100 },        // 铲子
    { mod: 'tfc:metal/', tool: 'hoe_head/', number: 100 },           // 锄头
    { mod: 'tfc:metal/', tool: 'chisel_head/', number: 100 },        // 凿子
    { mod: 'tfc:metal/', tool: 'hammer_head/', number: 100 },        // 锤子
    { mod: 'tfc:metal/', tool: 'saw_blade/', number: 100 },           // 锯子 
    { mod: 'tfc:metal/', tool: 'knife_blade/', number: 100 },         // 小刀
    { mod: 'tfc:metal/', tool: 'scythe_blade/', number: 100 },        // 镰刀
    { mod: 'tfc:metal/', tool: 'sword_blade/', number: 200 },         // 剑
    { mod: 'tfc:metal/', tool: 'mace_head/', number: 200 },          // 钉头锤
    { mod: 'tfc:metal/', tool: 'fishing_rod/', number: 150 },   // 钓鱼竿 
    //{ mod: 'tfc:metal/', tool: 'shears_head/', number: 200 },        // 剪刀
    //{ mod: 'tfc:metal/', tool: 'shield/', number: 200 },        // 盾牌
    { mod: 'tfc:metal/unfinished_', tool: 'chestplate/', number: 400 },    // 胸甲
    { mod: 'tfc:metal/unfinished_', tool: 'boots/', number: 200 },         // 靴子
    { mod: 'tfc:metal/unfinished_', tool: 'greaves/', number: 400 },       // 护腿
    { mod: 'tfc:metal/unfinished_', tool: 'helmet/', number: 400 },        // 头盔

    { mod: 'artisanal:metal/', tool: 'circle_blade/', number: 50 },  // 开罐刀片
    { mod: 'artisanal:metal/', tool: 'can_opener/', number: 100 },  // 开罐刀片
    { mod: 'tfc_hammer_time:metal/', tool: 'excavator_head/', number: 200 },   // 挖掘器
    { mod: 'tfc_hammer_time:metal/', tool: 'sledgehammer_head/', number: 300 },   // 大锤
    { mod: 'precisionprospecting:metal/', tool: 'mineral_prospector_head/', number: 200 }, // 矿物勘探仪
    { mod: 'precisionprospecting:metal/', tool: 'prospector_drill_head/', number: 400 },   // 勘探钻头
    { mod: 'precisionprospecting:metal/', tool: 'prospector_hammer_head/', number: 200 }   // 勘探锤

  ]
  metal.forEach(metala => {
    tfctool.forEach(tool => {
      tfc.heating(`${tool.mod}${tool.tool}${metala.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, tool.number))
      crucible(`${tool.mod}${tool.tool}${metala.name}`, `tfc:metal/${metala.metal}`, tool.number, metala.temperature)
    })
  })//武器部件熔铸
  const weaponry = [
    { name: "quarterstaff", number: 200 },        // 长棍
    { name: "dagger", number: 100 },              // 匕首
    { name: "parrying_dagger", number: 150 },     // 格挡匕首
    { name: "longsword", number: 250 },           // 长刀
    { name: "greatsword", number: 350 },          // 大剑
    { name: "saber", number: 250 },               // 军刀
    { name: "rapier", number: 250 },              // 迅捷剑
    { name: "katana", number: 250 },              // 太刀
    { name: "battleaxe", number: 400 },           // 战斧
    { name: "battle_hammer", number: 200 },       // 长柄锤
    { name: "warhammer", number: 400 },           // 大锤
    { name: "javelin", number: 400 },             // 标枪
    { name: "spear", number: 100 },               // 矛
    { name: "pike", number: 100 },                // 长矛
    { name: "lance", number: 400 },               // 骑枪
    { name: "glaive", number: 350 },              // 长柄刀
    { name: "halberd", number: 400 },             // 戟
    { name: "throwing_knife", number: 100 },      // 飞刀
    { name: "tomahawk", number: 200 },            // 印第安投斧
    { name: "scythe", number: 400 },              // 战镰
    { name: "flanged_mace", number: 300 },        // 页锤
    { name: "boomerang", number: 100 }            // 回旋镖
  ];
  const weapon_part = [
    { name: "tomahawk_weapon_part", number: 100 },        // 印第安投斧武器部件
    { name: "throwing_knife_weapon_part", number: 100 },  // 飞刀武器部件
    { name: "dagger_weapon_part", number: 100 },          // 匕首武器部件
    { name: "handguard_weapon_part", number: 50 },       // 护手武器部件
    { name: "longsword_weapon_part", number: 200 },       // 长刀武器部件
    { name: "katana_weapon_part", number: 200 },          // 太刀武器部件
    { name: "saber_weapon_part", number: 200 },           // 军刀武器部件
    { name: "rapier_weapon_part", number: 200 },          // 迅捷剑武器部件
    { name: "battle_hammer_weapon_part", number: 200 },   // 战锤武器部件
    { name: "warhammer_weapon_part", number: 300 },       // 大战锤武器部件
    { name: "battleaxe_weapon_part", number: 300 },       // 战斧武器部件
    { name: "flanged_mace_weapon_part", number: 300 },    // 带刺钉头锤武器部件
    { name: "greatsword_weapon_part", number: 300 },      // 大剑武器部件
    { name: "halberd_weapon_part", number: 400 },         // 戟武器部件
    { name: "glaive_weapon_part", number: 300 },          // 长柄刀武器部件
    { name: "scythe_weapon_part", number: 400 },          // 战镰武器部件
    { name: "lance_weapon_part", number: 400 },           // 骑枪武器部件
    { name: "quarterstaff_weapon_part", number: 100 }     // 长棍武器部件
  ];
  metal.forEach(metala => {
    weapon_part.forEach(weapon_parta => {
      tfc.heating(`kubejs:${metala.name}_${weapon_parta.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, weapon_parta.number))
      crucible(`kubejs:${metala.name}_${weapon_parta.name}`, `tfc:metal/${metala.metal}`, weapon_parta.number, metala.temperature)
    })
  })//武器部件熔铸
  metal.forEach(metala => {
    weaponry.forEach(weaponrya => {
      tfc.heating(`kubejs:${metala.name}_${weaponrya.name}`, metala.temperature)
        .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, weaponrya.number))
        .useDurability(true);
    });
  });


  const item = [

    //戒指
    { name: "copper_ring", metal: "copper", number: 50, temperature: 1080 }, // 铜戒指
    { name: "bronze_ring", metal: "bronze", number: 50, temperature: 950 }, // 青铜戒指
    { name: "black_bronze_ring", metal: "black_bronze", number: 50, temperature: 1080 }, // 黑铜戒指
    { name: "bismuth_bronze_ring", metal: "bismuth_bronze", number: 50, temperature: 1080 }, // 铋铜戒指
    { name: "silver_ring", metal: "silver", number: 50, temperature: 961 }, // 银戒指
    { name: "sterling_silver_ring", metal: "sterling_silver", number: 50, temperature: 950 }, // 纹银戒指
    { name: "gold_ring", metal: "gold", number: 50, temperature: 1064 }, // 金戒指
    { name: "rose_gold_ring", metal: "rose_gold", number: 50, temperature: 1064 }, // 玫瑰金戒指
    { name: "steel_ring", metal: "steel", number: 50, temperature: 1535 }, // 钢戒指
    { name: "black_steel_ring", metal: "black_steel", number: 50, temperature: 1784 }, // 黑钢戒指
  ];
  item.forEach(metala => {

    tfc.heating(`shiny_ornaments:${metala.name}`, metala.temperature)
      .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number)).useDurability(true);
    crucible(`shiny_ornaments:${metala.name}`, `tfc:metal/${metala.metal}`, metala.number, metala.temperature)

  });

  const items = [

    { name: "black_bronze_fragments", metal: "black_bronze", number: 20, temperature: 1080 }, // 黑铜碎片
    { name: "bismuth_bronze_fragments", metal: "bismuth_bronze", number: 20, temperature: 1080 }, // 铋铜碎片
    { name: "wrought_iron_fragments", metal: "cast_iron", number: 20, temperature: 1535 }, // 锻铁碎片
    { name: "steel_fragments", metal: "steel_fragments", number: 20, temperature: 1535 }, // 钢碎片
    { name: "black_steel_fragments", metal: "black_steel", number: 20, temperature: 1784 }, // 黑钢碎片
    { name: "red_steel_fragments", metal: "red_steel", number: 20, temperature: 2066 }, // 精金碎片
    { name: "blue_steel_fragments", metal: "blue_steel", number: 20, temperature: 1863 }, // 秘银碎片
    { name: "copper_fragments", metal: "copper", number: 20, temperature: 1080 }, // 铜碎片
    { name: "bronze_fragments", metal: "bronze", number: 20, temperature: 950 }, // 青铜碎片
    { name: "rusty_iron_fragments", metal: 'cast_iron', number: 20, temperature: 1535 }, // 生锈的铁碎片
    { name: "silver_fragments", metal: "silver", number: 20, temperature: 961 }, // 银碎片
    { name: "gold_fragments", metal: "gold", number: 20, temperature: 1064 }, // 金碎片
    { name: "rose_gold_fragments", metal: "rose_gold", number: 20, temperature: 1064 }, // 玫瑰金碎片
    { name: "amber_gold_fragments", metal: "amber_gold", number: 20, temperature: 1064 }, // 琥珀金碎片

    //箭类
    { name: "copper_arrow", metal: "copper", number: 12, temperature: 1080 }, // 铜箭头
    { name: "wrought_iron_arrow", metal: "cast_iron", number: 12, temperature: 1535 }, // 铁箭头
    { name: "steel_arrow", metal: "steel", number: 12, temperature: 1540 }, // 钢箭头
    { name: "black_steel_arrow", metal: "black_steel", number: 12, temperature: 1784 }, // 黑钢箭头

    //废料
    { name: "copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 铜甲片
    { name: "rusty_copper_scrap", metal: "copper", number: 75, temperature: 1080 }, // 生锈的铜甲片
    { name: "rusty_bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 生锈的青铜甲片
    { name: "bronze_scrap", metal: "bronze", number: 75, temperature: 950 }, // 青铜甲片
    { name: "rusty_iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 生锈的铁甲片
    { name: "iron_scrap", metal: 'cast_iron', number: 75, temperature: 1535 }, // 铁甲片
    { name: "ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 古代钢甲片
    { name: "rusty_ancient_steel_scrap", metal: "steel", number: 75, temperature: 1540 }, // 生锈的古代钢甲片
    { name: "copper_link", metal: "copper", number: 25, temperature: 1080 }, // 铜链环
    { name: "rusty_copper_link", metal: "copper", number: 25, temperature: 1080 }, // 生锈的铜链环
    { name: "bronze_link", metal: "bronze", number: 25, temperature: 950 }, // 青铜链环
    { name: "rusty_bronze_link", metal: "bronze", number: 25, temperature: 950 }, // 生锈的青铜链环
    { name: "rusty_iron_link", metal: 'cast_iron', number: 25, temperature: 1535 }, // 生锈的铁链环
    { name: "iron_link", metal: 'cast_iron', number: 25, temperature: 1535 }, // 铁链环
    { name: "crown", metal: "gold", number: 5, temperature: 1064 }, // 金币
    //三锭
    { name: "triple_copper", temperature: 1080, metal: "copper", number: 300 },
    { name: "triple_bismuth_bronze", temperature: 960, metal: "bismuth_bronze", number: 300 },
    { name: "triple_black_bronze", temperature: 1050, metal: "black_bronze", number: 300 },
    { name: "triple_bronze", temperature: 950, metal: "bronze", number: 300 },
    { name: "triple_black_steel", temperature: 1784, metal: "black_steel", number: 300 },
    { name: "triple_blue_steel", temperature: 1863, metal: "blue_steel", number: 300 },
    { name: "triple_red_steel", temperature: 2066, metal: "red_steel", number: 300 },
    { name: "triple_steel", temperature: 1540, metal: "steel", number: 300 },
    // 钥匙类
    { name: "brass_simple_key", temperature: 940, metal: "brass", number: 100 },    // 黄铜简易钥匙（kubejs:brass_simple_key）
    { name: "gold_simple_key", temperature: 1064, metal: "gold", number: 100 },    // 黄金简易钥匙（kubejs:gold_simple_key）
    { name: "bismuth_bronze_simple_key", temperature: 960, metal: "bismuth_bronze", number: 100 },    // 铋铜简易钥匙（kubejs:bismuth_bronze_simple_key）
    { name: "black_bronze_simple_key", temperature: 1050, metal: "black_bronze", number: 100 },    // 黑铜简易钥匙（kubejs:black_bronze_simple_key）
    { name: "bronze_simple_key", temperature: 950, metal: "bronze", number: 100 },    // 青铜简易钥匙（kubejs:bronze_simple_key）
    { name: "copper_simple_key", temperature: 1080, metal: "copper", number: 100 },    // 铜制简易钥匙（kubejs:copper_simple_key）

    // 开锁器类
    { name: "bismuth_bronze_lockpick", temperature: 960, metal: "bismuth_bronze", number: 50 },    // 铋铜开锁器（kubejs:bismuth_bronze_lockpick）
    { name: "black_bronze_lockpick", temperature: 1050, metal: "black_bronze", number: 50 },    // 黑铜开锁器（kubejs:black_bronze_lockpick）
    { name: "bronze_lockpick", temperature: 950, metal: "bronze", number: 50 },    // 青铜开锁器（kubejs:bronze_lockpick）
    { name: "copper_lockpick", temperature: 1080, metal: "copper", number: 50 },    // 铜制开锁器（kubejs:copper_lockpick）
    { name: "cast_iron_lockpick", temperature: 1150, metal: "cast_iron", number: 50 },    // 铸铁开锁器（kubejs:cast_iron_lockpick）
    { name: "wrought_iron_lockpick", temperature: 1535, metal: "cast_iron", number: 50 },    // 锻铁开锁器（kubejs:wrought_iron_lockpick）
    { name: "steel_lockpick", temperature: 1540, metal: "steel", number: 50 },    // 钢制开锁器（kubejs:steel_lockpick）
    { name: "black_steel_lockpick", temperature: 1784, metal: "black_steel", number: 50 },    // 黑钢开锁器（kubejs:black_steel_lockpick）

    // 撬棍类
    { name: "wrought_iron_crowbar", temperature: 1535, metal: "cast_iron", number: 200 },    // 锻铁撬棍（kubejs:wrought_iron_crowbar）
    { name: "steel_crowbar", temperature: 1540, metal: "steel", number: 200 },    // 钢撬棍（kubejs:steel_crowbar）
    { name: "black_steel_crowbar", temperature: 1784, metal: "black_steel", number: 200 },    // 黑钢撬棍（kubejs:black_steel_crowbar）
    // 支撑梁
    { name: "copper_support", temperature: 1080, metal: "copper", number: 10 },//铜支撑梁
    { name: "bismuth_bronze_support", temperature: 960, metal: "bismuth_bronze", number: 10 },//铋铜支撑梁
    { name: "black_bronze_support", temperature: 1050, metal: "black_bronze", number: 10 },//黑铜支撑梁
    { name: "bronze_support", temperature: 950, metal: "bronze", number: 10 },//青铜支撑梁
    { name: "wrought_iron_support", temperature: 1535, metal: "cast_iron", number: 10 },//锻铁支撑梁
    { name: "cast_iron_support", temperature: 1150, metal: "cast_iron", number: 10 },//铸铁支撑梁
    { name: "steel_support", temperature: 1540, metal: "steel", number: 10 },//钢支撑梁
    { name: "black_steel_support", temperature: 1784, metal: "black_steel", number: 10 },//黑钢支撑梁
    { name: "blue_steel_support", temperature: 1863, metal: "blue_steel", number: 10 },//秘银支撑梁
    { name: "red_steel_support", temperature: 2066, metal: "red_steel", number: 10 },//精金支撑梁
  ];
  items.forEach(metala => {

    tfc.heating(`kubejs:${metala.name}`, metala.temperature)
      .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number)).useDurability(true);
    crucible(`kubejs:${metala.name}`, `tfc:metal/${metala.metal}`, metala.number, metala.temperature)

  });
  const itemss = [
    { name: "anvil", temperature: 1535, metal: "cast_iron", number: 1400, mods: "minecraft:" },
    { name: "chipped_anvil", temperature: 1535, metal: "cast_iron", number: 1200, mods: "minecraft:" },
    { name: "damaged_anvil", temperature: 1535, metal: "cast_iron", number: 1000, mods: "minecraft:" },
    { name: "material_component_steel", temperature: 1580, metal: "steel", number: 50, mods: "kubejs:" },
    { name: "material_component_black_steel", temperature: 1784, metal: "black_steel", number: 50, mods: "kubejs:" },
    { name: "material_component_wrought_iron", temperature: 1500, metal: "cast_iron", number: 50, mods: "kubejs:" },
    { name: "brass_forge_door", temperature: 930, metal: "brass", number: 400, mods: "kubejs:" },
    { name: "bloomery", temperature: 930, metal: "brass", number: 1800, mods: "tfc:" }
  ]
  itemss.forEach(metala => {

    tfc.heating(`${metala.mods}${metala.name}`, metala.temperature)
      .resultFluid(Fluid.of(`tfc:metal/${metala.metal}`, metala.number))
    crucible(`${metala.mods}${metala.name}`, `tfc:metal/${metala.metal}`, metala.number, metala.temperature)
  });

  tfc.heating('tfc:ceramic/unfired_bowl', 1399).resultItem('minecraft:bowl')//碗
  tfc.heating('kubejs:unfired_mold_mechanical', 1399).resultItem('kubejs:mold_mechanical')//零件模具
  tfc.heating('kubejs:unfired_mold_simple_key', 1399).resultItem('kubejs:mold_simple_key')//钥匙模具

  tfc.heating('kubejs:unfired_mold_sheet', 1399).resultItem('kubejs:mold_sheet')//板模具
  tfc.heating('kubejs:unfired_mold_rods', 1399).resultItem('kubejs:mold_rods')//棒模具

  tfc.heating('kubejs:unfired_crucible_mold', 1399).resultItem('kubejs:crucible_mold')//坩埚模具

  tfc.heating("immersiveengineering:dust_iron", 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 20))//铁粉

  tfc.heating('tfc:brass_mechanisms', 940).resultFluid(Fluid.of('tfc:metal/brass', 50))//黄铜机件融化
  tfc.heating("sns:pack_frame", 1535).resultFluid(Fluid.of('tfc:metal/cast_iron', 200))//背包框架融化
  crucible('sns:pack_frame', 'tfc:metal/cast_iron', 200, 1535)
  crucible('immersiveengineering:dust_iron', 'tfc:metal/cast_iron', 20, 1535)
  crucible('tfc:brass_mechanisms', 'tfc:metal/brass', 50, 940)

  const metaltongs = [
    { name: "bismuth_bronze", temperature: 860, metal: "tfc:metal/bismuth_bronze" },
    { name: "black_bronze", temperature: 910, metal: "tfc:metal/black_bronze" },
    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1085, metal: "tfc:metal/copper" },
    { name: "wrought_iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1540, metal: "tfc:metal/steel" },
    { name: "black_steel", temperature: 1784, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "tfc:metal/red_steel" },
    { name: "cast_iron", temperature: 1200, metal: "tfc:metal/cast_iron" },
    { name: "gold", temperature: 1060, metal: "tfc:metal/gold" },
    { name: "rose_gold", temperature: 960, metal: "tfc:metal/rose_gold" },
    { name: "brass", temperature: 930, metal: "tfc:metal/brass" },
    { name: "bismuth", temperature: 271, metal: "tfc:metal/bismuth" },
    { name: "silver", temperature: 961, metal: "tfc:metal/silver" },
    { name: "sterling_silver", temperature: 940, metal: "tfc:metal/sterling_silver" },
    { name: "nickel", temperature: 1453, metal: "tfc:metal/nickel" },
    { name: "chromium", temperature: 1907, metal: "firmalife:bucket/metal/chromium" },
    { name: "zinc", temperature: 419, metal: "tfc:metal/zinc" },
    { name: "stainless_steel", temperature: 1400, metal: "firmalife:bucket/metal/stainless_steel" },
  ];
  metaltongs.forEach(metal => {

    tfc.heating(`kubejs:${metal.name}_tong`, metal.temperature).resultFluid(Fluid.of(metal.metal, 100))//完整融化
    tfc.heating(`kubejs:${metal.name}_tong_part`, metal.temperature).resultFluid(Fluid.of(metal.metal, 50))//部件融化
    crucible(`kubejs:${metal.name}_tong`, metal.metal, 100, metal.temperature)
    crucible(`kubejs:${metal.name}_tong_part`, metal.metal, 50, metal.temperature)
  })

  const metal_fish_hooks = [
    { name: "bismuth_bronze", temperature: 985, metal: "tfc:metal/bismuth_bronze" },
    { name: "black_bronze", temperature: 1070, metal: "tfc:metal/black_bronze" },
    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1080, metal: "tfc:metal/copper" },
    { name: "wrought_iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1540, metal: "tfc:metal/steel" },
    { name: "black_steel", temperature: 1784, metal: "tfc:metal/black_steel" },
    { name: "blue_steel", temperature: 1863, metal: "tfc:metal/blue_steel" },
    { name: "red_steel", temperature: 2066, metal: "tfc:metal/red_steel" }
  ];
  metal_fish_hooks.forEach(metal => {

    tfc.heating(`tfc:metal/fish_hook/${metal.name}`, metal.temperature).resultFluid(Fluid.of(metal.metal, 50))//鱼钩融化
    crucible(`tfc:metal/fish_hook/${metal.name}`, metal.metal, 50, metal.temperature)

    tfc.heating(`tfcgroomer:${metal.name}_grooming_station`, metal.temperature).resultFluid(Fluid.of(metal.metal, 400))//喂食盆融化
    crucible(`tfcgroomer:${metal.name}_grooming_station`, metal.metal, 400, metal.temperature)
  })

  const color_block = [

    { name: "white" },
    { name: "orange" },
    { name: "magenta" },
    { name: "light_blue" },
    { name: "yellow" },
    { name: "lime" },
    { name: "pink" },
    { name: "gray" },
    { name: "light_gray" },
    { name: "cyan" },
    { name: "purple" },
    { name: "blue" },
    { name: "brown" },
    { name: "green" },
    { name: "red" },
    { name: "black" },

  ];
  color_block.forEach(color => {

    tfc.heating(`immersiveengineering:sheetmetal_colored_${color.name}`, 400).resultFluid(Fluid.of("tfc:metal/unknown", 100))//金属方块融化
    crucible(`immersiveengineering:sheetmetal_colored_${color.name}`, "tfc:metal/unknown", 100, 400)

    tfc.heating(`immersiveengineering:slab_sheetmetal_colored_${color.name}`, 400).resultFluid(Fluid.of("tfc:metal/unknown", 50))//金属台阶融化
    crucible(`immersiveengineering:slab_sheetmetal_colored_${color.name}`, "tfc:metal/unknown", 40, 400)


    tfc.heating(`design_decor:${color.name}_metal_plate`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
    crucible(`design_decor:${color.name}_metal_plate`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_plate_wall`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
    crucible(`design_decor:${color.name}_metal_plate_wall`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_plate_stairs`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
    crucible(`design_decor:${color.name}_metal_plate_stairs`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_plate_slab`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 12))//金属板材融化
    crucible(`design_decor:${color.name}_metal_plate_slab`, "tfc:metal/cast_iron", 12, 1535)



    tfc.heating(`design_decor:${color.name}_metal_sheet`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
    crucible(`design_decor:${color.name}_metal_sheet`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_sheet_wall`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
    crucible(`design_decor:${color.name}_metal_sheet_wall`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_sheet_stairs`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
    crucible(`design_decor:${color.name}_metal_sheet_stairs`, "tfc:metal/cast_iron", 25, 1535)

    tfc.heating(`design_decor:${color.name}_metal_sheet_slab`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 12))//金属镶板融化
    crucible(`design_decor:${color.name}_metal_sheet_slab`, "tfc:metal/cast_iron", 12, 1535)

    //工业灯融化
    tfc.heating(`ad_astra:${color.name}_industrial_lamp`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 50))
    crucible(`ad_astra:${color.name}_industrial_lamp`, "tfc:metal/cast_iron", 50, 1535)

    tfc.heating(`ad_astra:small_${color.name}_industrial_lamp`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 12))
    crucible(`ad_astra:small_${color.name}_industrial_lamp`, "tfc:metal/cast_iron", 12, 1535)
  })

  const large_chain = [

    { name: "bronze", temperature: 950, metal: "tfc:metal/bronze" },
    { name: "copper", temperature: 1085, metal: "tfc:metal/copper" },
    { name: "iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "steel", temperature: 1540, metal: "tfc:metal/steel" },
    { name: "cast_iron", temperature: 1535, metal: "tfc:metal/cast_iron" },
    { name: "gold", temperature: 1060, metal: "tfc:metal/gold" },
    { name: "brass", temperature: 930, metal: "tfc:metal/brass" },
    { name: "silver", temperature: 961, metal: "tfc:metal/silver" },
    { name: "zinc", temperature: 419, metal: "tfc:metal/zinc" },
    { name: "electrum", temperature: 900, metal: "tfc_ie_addon:metal/electrum" },//琥珀金
    { name: "aluminium", temperature: 650, metal: "tfc_ie_addon:metal/aluminum" },//铝
    { name: "lead", temperature: 500, metal: "tfc_ie_addon:metal/lead" },//铅
    { name: "silver", temperature: 961, metal: "tfc:metal/silver" },//银
    { name: "tin", temperature: 961, metal: "tfc:metal/tin" },//锡

  ];
  large_chain.forEach(block => {
    //大型锁链融化
    tfc.heating(`design_decor:${block.name}_large_chain`, block.temperature).resultFluid(Fluid.of(block.metal, 25))
    crucible(`design_decor:${block.name}_large_chain`, block.metal, 25, block.temperature)

  })

  //精金秘银黑钢工具熔融补充
  const steel = [
    //精金
    { name: "tfc_hammer_time:metal/excavator/red_steel", number: 250, color: "red", temperature: 2066 },
    { name: "sns:metal/horseshoes/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "sns:metal/horseshoe/red_steel", number: 50, color: "red", temperature: 2066 },
    { name: "waterflasks:unfinished_red_steel_flask", number: 200, color: "red", temperature: 2066 },
    { name: "waterflasks:red_steel_flask", number: 200, color: "red", temperature: 2066 },
    { name: "survivorsdelight:skillet_head/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "survivorsdelight:unfinished_skillet/red_steel", number: 250, color: "red", temperature: 2066 },
    { name: "survivorsdelight:skillet/red_steel", number: 250, color: "red", temperature: 2066 },
    { name: "tfc_hammer_time:metal/sledgehammer/red_steel", number: 350, color: "red", temperature: 2066 },
    { name: "precisionprospecting:metal/mineral_prospector_head/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "precisionprospecting:metal/prospector_drill/red_steel", number: 400, color: "red", temperature: 2066 },
    { name: "precisionprospecting:metal/mineral_prospector/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "precisionprospecting:metal/prospector_hammer/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "tfcscraping:metal/scraping_knife/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "tfcscraping:metal/scraping_knife_blade/red_steel", number: 200, color: "red", temperature: 2066 },
    { name: "tfc:metal/bucket/red_steel", number: 200, color: "red", temperature: 2066 },
    //秘银
    { name: "tfc_hammer_time:metal/excavator/blue_steel", number: 250, color: "blue", temperature: 1863 },
    { name: "sns:metal/horseshoes/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "sns:metal/horseshoe/blue_steel", number: 50, color: "blue", temperature: 1863 },
    { name: "survivorsdelight:skillet_head/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "survivorsdelight:unfinished_skillet/blue_steel", number: 250, color: "blue", temperature: 1863 },
    { name: "survivorsdelight:skillet/blue_steel", number: 250, color: "blue", temperature: 1863 },
    { name: "tfc_hammer_time:metal/sledgehammer/blue_steel", number: 350, color: "blue", temperature: 1863 },
    { name: "precisionprospecting:metal/mineral_prospector_head/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "precisionprospecting:metal/prospector_drill/blue_steel", number: 400, color: "blue", temperature: 1863 },
    { name: "precisionprospecting:metal/mineral_prospector/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "precisionprospecting:metal/prospector_hammer/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "tfcscraping:metal/scraping_knife/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "tfcscraping:metal/scraping_knife_blade/blue_steel", number: 200, color: "blue", temperature: 1863 },
    { name: "tfc:metal/bucket/blue_steel", number: 200, color: "blue", temperature: 1863 },
    //黑钢
    { name: "tfcscraping:metal/scraping_knife/black_steel", number: 200, color: "black", temperature: 1784 },
    { name: "tfcscraping:metal/scraping_knife_blade/black_steel", number: 200, color: "black", temperature: 1784 },
    { name: "tfc_hammer_time:metal/sledgehammer/black_steel", number: 350, color: "black", temperature: 1784 },
    { name: "tfc_hammer_time:metal/excavator/black_steel", number: 250, color: "black", temperature: 1784 },
    { name: "precisionprospecting:metal/prospector_drill/black_steel", number: 400, color: "black", temperature: 1784 },
    { name: "precisionprospecting:metal/prospector_hammer/black_steel", number: 200, color: "black", temperature: 1784 },
    { name: "sns:metal/horseshoe/black_steel", number: 50, color: "black", temperature: 1784 },
    { name: "sns:metal/horseshoes/black_steel", number: 200, color: "black", temperature: 1784 },
    { name: "survivorsdelight:skillet_head/black_steel", number: 200, color: "black", temperature: 1784 },
    { name: "survivorsdelight:unfinished_skillet/black_steel", number: 250, color: "black", temperature: 1784 },
    { name: "survivorsdelight:skillet/black_steel", number: 250, color: "black", temperature: 1784 },

  ];
  steel.forEach(steel => {
    tfc.heating(`${steel.name}`, steel.temperature).resultFluid(Fluid.of(`tfc:metal/${steel.color}_steel`, steel.number))
      .useDurability(true);
    crucible(`${steel.name}`, `tfc:metal/${steel.color}_steel`, steel.number, steel.temperature)

  })

  const metal_block = [
    { name: "firmaciv:copper_bolt", temperature: 1085, metal: "tfc:metal/copper", number: 20 },//铜螺栓



    //金属板材
    //方块
    { name: "immersiveengineering:sheetmetal_iron", temperature: 1535, metal: "tfc:metal/cast_iron", number: 100 },//锻铁
    { name: "immersiveengineering:sheetmetal_electrum", temperature: 900, metal: "tfc_ie_addon:metal/electrum", number: 100 },//琥珀金
    { name: "immersiveengineering:sheetmetal_aluminum", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 100 },//铝
    { name: "immersiveengineering:sheetmetal_lead", temperature: 500, metal: "tfc_ie_addon:metal/lead", number: 100 },//铅
    { name: "immersiveengineering:sheetmetal_silver", temperature: 961, metal: "tfc:metal/silver", number: 100 },//银
    { name: "immersiveengineering:sheetmetal_nickel", temperature: 1453, metal: "tfc:metal/nickel", number: 100 },//镍
    { name: "immersiveengineering:sheetmetal_copper", temperature: 1080, metal: "tfc:metal/copper", number: 100 },//铜
    { name: "immersiveengineering:sheetmetal_uranium", temperature: 747, metal: "tfc_ie_addon:metal/uranium", number: 100 },//铀
    { name: "immersiveengineering:sheetmetal_constantan", temperature: 750, metal: "tfc_ie_addon:metal/constantan", number: 100 },//康铜
    { name: "immersiveengineering:sheetmetal_steel", temperature: 1540, metal: "tfc:metal/steel", number: 100 },//钢
    { name: "immersiveengineering:sheetmetal_gold", temperature: 1060, metal: "tfc:metal/gold", number: 100 },//金
    //台阶
    { name: "immersiveengineering:slab_sheetmetal_iron", temperature: 1535, metal: "tfc:metal/cast_iron", number: 50 },//锻铁
    { name: "immersiveengineering:slab_sheetmetal_electrum", temperature: 900, metal: "tfc_ie_addon:metal/electrum", number: 50 },//琥珀金
    { name: "immersiveengineering:slab_sheetmetal_aluminum", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 50 },//铝
    { name: "immersiveengineering:slab_sheetmetal_lead", temperature: 500, metal: "tfc_ie_addon:metal/lead", number: 50 },//铅
    { name: "immersiveengineering:slab_sheetmetal_silver", temperature: 961, metal: "tfc:metal/silver", number: 50 },//银
    { name: "immersiveengineering:slab_sheetmetal_nickel", temperature: 1453, metal: "tfc:metal/nickel", number: 50 },//镍
    { name: "immersiveengineering:slab_sheetmetal_copper", temperature: 1080, metal: "tfc:metal/copper", number: 50 },//铜
    { name: "immersiveengineering:slab_sheetmetal_uranium", temperature: 747, metal: "tfc_ie_addon:metal/uranium", number: 50 },//铀
    { name: "immersiveengineering:slab_sheetmetal_constantan", temperature: 750, metal: "tfc_ie_addon:metal/constantan", number: 50 },//康铜
    { name: "immersiveengineering:slab_sheetmetal_steel", temperature: 1540, metal: "tfc:metal/steel", number: 50 },//钢
    { name: "immersiveengineering:slab_sheetmetal_gold", temperature: 1060, metal: "tfc:metal/gold", number: 50 },//金
    //金属滑道
    { name: "immersiveengineering:chute_iron", temperature: 1535, metal: "tfc:metal/cast_iron", number: 50 },//锻铁
    { name: "immersiveengineering:chute_aluminum", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 50 },//铝
    { name: "immersiveengineering:chute_copper", temperature: 1080, metal: "tfc:metal/copper", number: 50 },//铜
    { name: "immersiveengineering:chute_steel", temperature: 1540, metal: "tfc:metal/steel", number: 50 },//钢
    // 实心金属块
    { name: "create:zinc_block", temperature: 419, metal: "tfc:metal/zinc", number: 1000 },
    { name: "minecraft:iron_block", temperature: 1535, metal: "tfc:metal/cast_iron", number: 1000 },
    { name: "minecraft:gold_block", temperature: 1060, metal: "tfc:metal/gold", number: 1000 },
    { name: "create:brass_block", temperature: 930, metal: "tfc:metal/brass", number: 1000 },
    { name: "immersiveengineering:storage_nickel", temperature: 1453, metal: "tfc:metal/nickel", number: 1000 },
    { name: "immersiveengineering:storage_steel", temperature: 1540, metal: "tfc:metal/steel", number: 1000 },
    { name: "immersiveengineering:storage_constantan", temperature: 750, metal: "tfc_ie_addon:metal/constantan", number: 1000 },
    { name: "immersiveengineering:storage_electrum", temperature: 900, metal: "tfc_ie_addon:metal/electrum", number: 1000 },
    { name: "immersiveengineering:storage_aluminum", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 1000 },
    { name: "immersiveengineering:storage_lead", temperature: 500, metal: "tfc_ie_addon:metal/lead", number: 1000 },
    { name: "immersiveengineering:storage_silver", temperature: 961, metal: "tfc:metal/silver", number: 1000 },

    //温室方块
    //铁温室
    { name: "firmalife:iron_greenhouse_wall", temperature: 1535, metal: "tfc:metal/cast_iron", number: 35 },
    { name: "firmalife:iron_greenhouse_panel_wall", temperature: 1535, metal: "tfc:metal/cast_iron", number: 35 },
    { name: "firmalife:iron_greenhouse_panel_roof", temperature: 1535, metal: "tfc:metal/cast_iron", number: 35 },
    { name: "firmalife:iron_greenhouse_roof", temperature: 1535, metal: "tfc:metal/cast_iron", number: 35 },
    { name: "firmalife:iron_greenhouse_roof_top", temperature: 1535, metal: "tfc:metal/cast_iron", number: 17 },
    { name: "firmalife:iron_greenhouse_trapdoor", temperature: 1535, metal: "tfc:metal/cast_iron", number: 17 },
    { name: "firmalife:iron_greenhouse_door", temperature: 1535, metal: "tfc:metal/cast_iron", number: 75 },
    { name: "firmalife:iron_greenhouse_port", temperature: 1535, metal: "tfc:metal/cast_iron", number: 4 },
    { name: "firmalife:rusted_iron_greenhouse_wall", temperature: 1535, metal: "tfc:metal/cast_iron", number: 30 },
    { name: "firmalife:rusted_iron_greenhouse_panel_wall", temperature: 1535, metal: "tfc:metal/cast_iron", number: 30 },
    { name: "firmalife:rusted_iron_greenhouse_panel_roof", temperature: 1535, metal: "tfc:metal/cast_iron", number: 30 },
    { name: "firmalife:rusted_iron_greenhouse_roof", temperature: 1535, metal: "tfc:metal/cast_iron", number: 30 },
    { name: "firmalife:rusted_iron_greenhouse_roof_top", temperature: 1535, metal: "tfc:metal/cast_iron", number: 13 },
    { name: "firmalife:rusted_iron_greenhouse_trapdoor", temperature: 1535, metal: "tfc:metal/cast_iron", number: 13 },
    { name: "firmalife:rusted_iron_greenhouse_port", temperature: 1535, metal: "tfc:metal/cast_iron", number: 2 },
    //铜温室
    { name: "firmalife:copper_greenhouse_wall", temperature: 1085, metal: "tfc:metal/copper", number: 35 },
    { name: "firmalife:copper_greenhouse_panel_wall", temperature: 1085, metal: "tfc:metal/copper", number: 35 },
    { name: "firmalife:copper_greenhouse_panel_roof", temperature: 1085, metal: "tfc:metal/copper", number: 35 },
    { name: "firmalife:copper_greenhouse_roof", temperature: 1085, metal: "tfc:metal/copper", number: 35 },
    { name: "firmalife:copper_greenhouse_roof_top", temperature: 1085, metal: "tfc:metal/copper", number: 17 },
    { name: "firmalife:copper_greenhouse_trapdoor", temperature: 1085, metal: "tfc:metal/copper", number: 17 },
    { name: "firmalife:copper_greenhouse_door", temperature: 1085, metal: "tfc:metal/copper", number: 75 },
    { name: "firmalife:copper_greenhouse_port", temperature: 1085, metal: "tfc:metal/copper", number: 4 },

    { name: "firmalife:exposed_copper_greenhouse_wall", temperature: 1085, metal: "tfc:metal/copper", number: 34 },
    { name: "firmalife:exposed_copper_greenhouse_panel_wall", temperature: 1085, metal: "tfc:metal/copper", number: 34 },
    { name: "firmalife:exposed_copper_greenhouse_panel_roof", temperature: 1085, metal: "tfc:metal/copper", number: 34 },
    { name: "firmalife:exposed_copper_greenhouse_roof", temperature: 1085, metal: "tfc:metal/copper", number: 34 },
    { name: "firmalife:exposed_copper_greenhouse_roof_top", temperature: 1085, metal: "tfc:metal/copper", number: 16 },
    { name: "firmalife:exposed_copper_greenhouse_trapdoor", temperature: 1085, metal: "tfc:metal/copper", number: 16 },
    { name: "firmalife:exposed_copper_greenhouse_door", temperature: 1085, metal: "tfc:metal/copper", number: 73 },
    { name: "firmalife:exposed_copper_greenhouse_port", temperature: 1085, metal: "tfc:metal/copper", number: 3 },

    { name: "firmalife:weathered_copper_greenhouse_wall", temperature: 1085, metal: "tfc:metal/copper", number: 32 },
    { name: "firmalife:weathered_copper_greenhouse_panel_wall", temperature: 1085, metal: "tfc:metal/copper", number: 32 },
    { name: "firmalife:weathered_copper_greenhouse_panel_roof", temperature: 1085, metal: "tfc:metal/copper", number: 32 },
    { name: "firmalife:weathered_copper_greenhouse_roof", temperature: 1085, metal: "tfc:metal/copper", number: 32 },
    { name: "firmalife:weathered_copper_greenhouse_roof_top", temperature: 1085, metal: "tfc:metal/copper", number: 14 },
    { name: "firmalife:weathered_copper_greenhouse_trapdoor", temperature: 1085, metal: "tfc:metal/copper", number: 14 },
    { name: "firmalife:weathered_copper_greenhouse_door", temperature: 1085, metal: "tfc:metal/copper", number: 70 },
    { name: "firmalife:weathered_copper_greenhouse_port", temperature: 1085, metal: "tfc:metal/copper", number: 2 },

    { name: "firmalife:oxidized_copper_greenhouse_wall", temperature: 1085, metal: "tfc:metal/copper", number: 30 },
    { name: "firmalife:oxidized_copper_greenhouse_panel_wall", temperature: 1085, metal: "tfc:metal/copper", number: 30 },
    { name: "firmalife:oxidized_copper_greenhouse_panel_roof", temperature: 1085, metal: "tfc:metal/copper", number: 30 },
    { name: "firmalife:oxidized_copper_greenhouse_roof", temperature: 1085, metal: "tfc:metal/copper", number: 30 },
    { name: "firmalife:oxidized_copper_greenhouse_roof_top", temperature: 1085, metal: "tfc:metal/copper", number: 11 },
    { name: "firmalife:oxidized_copper_greenhouse_trapdoor", temperature: 1085, metal: "tfc:metal/copper", number: 11 },
    { name: "firmalife:oxidized_copper_greenhouse_door", temperature: 1085, metal: "tfc:metal/copper", number: 67 },
    { name: "firmalife:oxidized_copper_greenhouse_port", temperature: 1085, metal: "tfc:metal/copper", number: 1 },

    //铁工业方块
    { name: "ad_astra:iron_plating", temperature: 1535, metal: "tfc:metal/cast_iron", number: 27 },
    { name: "ad_astra:iron_plating_stairs", temperature: 1535, metal: "tfc:metal/cast_iron", number: 40 },
    { name: "ad_astra:iron_plating_slab", temperature: 1535, metal: "tfc:metal/cast_iron", number: 13 },
    { name: "ad_astra:iron_pillar", temperature: 1535, metal: "tfc:metal/cast_iron", number: 27 },
    { name: "ad_astra:glowing_iron_pillar", temperature: 1535, metal: "tfc:metal/cast_iron", number: 27 },
    { name: "ad_astra:marked_iron_pillar", temperature: 1535, metal: "tfc:metal/cast_iron", number: 27 },
    { name: "minecraft:cauldron", temperature: 1535, metal: "tfc:metal/cast_iron", number: 1000 },

    //钢工业方块
    { name: "immersiveengineering:steel_scaffolding_standard", temperature: 1540, metal: "tfc:metal/steel", number: 50 },
    { name: "immersiveengineering:slab_steel_scaffolding_standard", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "immersiveengineering:stairs_steel_scaffolding_standard", temperature: 1540, metal: "tfc:metal/steel", number: 75 },
    { name: "immersiveengineering:steel_scaffolding_grate_top", temperature: 1540, metal: "tfc:metal/steel", number: 50 },
    { name: "immersiveengineering:slab_steel_scaffolding_grate_top", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "immersiveengineering:stairs_steel_scaffolding_grate_top", temperature: 1540, metal: "tfc:metal/steel", number: 75 },
    { name: "immersiveengineering:steel_scaffolding_wooden_top", temperature: 1540, metal: "tfc:metal/steel", number: 50 },
    { name: "immersiveengineering:slab_steel_scaffolding_wooden_top", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "immersiveengineering:stairs_steel_scaffolding_wooden_top", temperature: 1540, metal: "tfc:metal/steel", number: 75 },
    { name: "ad_astra:steel_factory_block", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "ad_astra:encased_steel_block", temperature: 1540, metal: "tfc:metal/steel", number: 15 },
    { name: "ad_astra:steel_panel", temperature: 1540, metal: "tfc:metal/steel", number: 18 },
    { name: "ad_astra:steel_plating", temperature: 1540, metal: "tfc:metal/steel", number: 27 },
    { name: "ad_astra:steel_plating_stairs", temperature: 1540, metal: "tfc:metal/steel", number: 40 },
    { name: "ad_astra:steel_plating_slab", temperature: 1540, metal: "tfc:metal/steel", number: 13 },
    { name: "ad_astra:steel_pillar", temperature: 1540, metal: "tfc:metal/steel", number: 27 },
    { name: "immersiveengineering:steel_fence", temperature: 1540, metal: "tfc:metal/steel", number: 165 },
    { name: "immersiveengineering:steel_wallmount", temperature: 1540, metal: "tfc:metal/steel", number: 85 },
    { name: "immersiveengineering:steel_post", temperature: 1540, metal: "tfc:metal/steel", number: 330 },
    { name: "immersiveengineering:steel_slope", temperature: 1540, metal: "tfc:metal/steel", number: 75 },

    { name: "fluid:copper_tap", temperature: 1540, metal: "tfc:metal/steel", number: 250 },//钢龙头

    //铝工业方块
    { name: "immersiveengineering:alu_scaffolding_standard", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 50 },
    { name: "immersiveengineering:slab_alu_scaffolding_standard", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 25 },
    { name: "immersiveengineering:stairs_alu_scaffolding_standard", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 75 },
    { name: "immersiveengineering:alu_scaffolding_grate_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 50 },
    { name: "immersiveengineering:slab_alu_scaffolding_grate_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 25 },
    { name: "immersiveengineering:stairs_alu_scaffolding_grate_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 75 },
    { name: "immersiveengineering:alu_scaffolding_wooden_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 50 },
    { name: "immersiveengineering:slab_alu_scaffolding_wooden_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 25 },
    { name: "immersiveengineering:stairs_alu_scaffolding_wooden_top", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 75 },
    { name: "immersiveengineering:alu_slope", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 75 },

    //冲压头
    { name: "vintageimprovements:convex_curving_head", temperature: 1535, metal: "tfc:metal/cast_iron", number: 800 },
    { name: "vintageimprovements:concave_curving_head", temperature: 1535, metal: "tfc:metal/cast_iron", number: 800 },
    { name: "vintageimprovements:w_shaped_curving_head", temperature: 1535, metal: "tfc:metal/cast_iron", number: 800 },
    { name: "vintageimprovements:v_shaped_curving_head", temperature: 1535, metal: "tfc:metal/cast_iron", number: 800 },

    // 铜方块
    { name: "minecraft:waxed_copper_block", temperature: 1085, metal: "tfc:metal/copper", number: 1000 },
    { name: "minecraft:copper_block", temperature: 1085, metal: "tfc:metal/copper", number: 1000 },
    { name: "minecraft:cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 1000 },
    { name: "minecraft:waxed_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 1000 },
    { name: "minecraft:exposed_copper", temperature: 1085, metal: "tfc:metal/copper", number: 980 },
    { name: "minecraft:exposed_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 980 },
    { name: "minecraft:weathered_copper", temperature: 1085, metal: "tfc:metal/copper", number: 950 },
    { name: "minecraft:weathered_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 950 },
    { name: "minecraft:oxidized_copper", temperature: 1085, metal: "tfc:metal/copper", number: 900 },
    { name: "minecraft:oxidized_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 900 },
    { name: "minecraft:waxed_exposed_copper", temperature: 1085, metal: "tfc:metal/copper", number: 980 },
    { name: "minecraft:waxed_exposed_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 980 },
    { name: "minecraft:waxed_weathered_copper", temperature: 1085, metal: "tfc:metal/copper", number: 950 },
    { name: "minecraft:waxed_weathered_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 950 },
    { name: "minecraft:waxed_oxidized_copper", temperature: 1085, metal: "tfc:metal/copper", number: 900 },
    { name: "minecraft:waxed_oxidized_cut_copper", temperature: 1085, metal: "tfc:metal/copper", number: 900 },
    { name: "createprism:copper_glass_casing", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "createprism:copper_clear_glass_casing", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "createprism:copper_illumination_casing", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "create:copper_scaffolding", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "createprism:copper_glass_scaffolding", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "createprism:copper_clear_glass_scaffolding", temperature: 1085, metal: "tfc:metal/copper", number: 50 },

    //黄铜制品
    { name: "create:brass_ladder", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "create:brass_scaffolding", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "create:brass_table_cloth", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "create:brass_bars", temperature: 930, metal: "tfc:metal/brass", number: 25 },
    { name: "design_decor:brass_floor", temperature: 930, metal: "tfc:metal/brass", number: 25 },
    { name: "create:brass_casing", temperature: 930, metal: "tfc:metal/brass", number: 100 },
    { name: "create:copper_casing", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "createprism:brass_glass_casing", temperature: 930, metal: "tfc:metal/brass", number: 100 },
    { name: "createprism:brass_clear_glass_casing", temperature: 930, metal: "tfc:metal/brass", number: 100 },
    { name: "createprism:brass_illumination_casing", temperature: 930, metal: "tfc:metal/brass", number: 100 },
    { name: "create:brass_scaffolding", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "createprism:brass_glass_scaffolding", temperature: 930, metal: "tfc:metal/brass", number: 50 },
    { name: "createprism:brass_clear_glass_scaffolding", temperature: 930, metal: "tfc:metal/brass", number: 50 },

    // 铜台阶（已删除重复）
    { name: "minecraft:cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 500 },
    { name: "minecraft:waxed_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 500 },
    { name: "minecraft:exposed_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 490 },
    { name: "minecraft:weathered_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 475 },
    { name: "minecraft:oxidized_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 450 },
    { name: "minecraft:waxed_exposed_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 490 },
    { name: "minecraft:waxed_weathered_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 475 },
    { name: "minecraft:waxed_oxidized_cut_copper_slab", temperature: 1085, metal: "tfc:metal/copper", number: 450 },
    //铜楼梯
    { name: "minecraft:cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 500 },
    { name: "minecraft:waxed_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 500 },
    { name: "minecraft:exposed_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 490 },
    { name: "minecraft:weathered_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 475 },
    { name: "minecraft:oxidized_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 450 },
    { name: "minecraft:waxed_exposed_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 490 },
    { name: "minecraft:waxed_weathered_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 475 },
    { name: "minecraft:waxed_oxidized_cut_copper_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 450 },

    // 工业工程金属台阶
    { name: "immersiveengineering:slab_storage_nickel", temperature: 1453, metal: "tfc:metal/nickel", number: 500 },
    { name: "immersiveengineering:slab_storage_steel", temperature: 1540, metal: "tfc:metal/steel", number: 500 },
    { name: "immersiveengineering:slab_storage_constantan", temperature: 750, metal: "tfc_ie_addon:metal/constantan", number: 500 },
    { name: "immersiveengineering:slab_storage_electrum", temperature: 900, metal: "tfc_ie_addon:metal/electrum", number: 500 },
    { name: "immersiveengineering:slab_storage_aluminum", temperature: 650, metal: "tfc_ie_addon:metal/aluminum", number: 500 },
    { name: "immersiveengineering:slab_storage_lead", temperature: 500, metal: "tfc_ie_addon:metal/lead", number: 500 },
    { name: "immersiveengineering:slab_storage_silver", temperature: 961, metal: "tfc:metal/silver", number: 500 },

    // 铜楼梯（已删除重复）


    // 机械动力铜方块
    { name: "create:copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "create:exposed_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 96 },
    { name: "create:weathered_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 88 },
    { name: "create:oxidized_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 80 },
    { name: "create:copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "create:exposed_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 48 },
    { name: "create:weathered_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 44 },
    { name: "create:oxidized_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 40 },
    { name: "create:copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 75 },
    { name: "create:exposed_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 72 },
    { name: "create:weathered_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 66 },
    { name: "create:oxidized_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 60 },
    { name: "create:waxed_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "create:waxed_exposed_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 96 },
    { name: "create:waxed_weathered_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 88 },
    { name: "create:waxed_oxidized_copper_shingles", temperature: 1085, metal: "tfc:metal/copper", number: 80 },
    { name: "create:waxed_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "create:waxed_exposed_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 48 },
    { name: "create:waxed_weathered_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 44 },
    { name: "create:waxed_oxidized_copper_shingle_slab", temperature: 1085, metal: "tfc:metal/copper", number: 40 },
    { name: "create:waxed_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 75 },
    { name: "create:waxed_exposed_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 72 },
    { name: "create:waxed_weathered_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 66 },
    { name: "create:waxed_oxidized_copper_shingle_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 60 },
    { name: "create:copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "create:exposed_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 96 },
    { name: "create:weathered_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 88 },
    { name: "create:oxidized_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 80 },
    { name: "create:copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "create:exposed_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 48 },
    { name: "create:weathered_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 44 },
    { name: "create:oxidized_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 40 },
    { name: "create:copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 75 },
    { name: "create:exposed_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 72 },
    { name: "create:weathered_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 66 },
    { name: "create:oxidized_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 60 },
    { name: "create:waxed_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 100 },
    { name: "create:waxed_exposed_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 96 },
    { name: "create:waxed_weathered_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 88 },
    { name: "create:waxed_oxidized_copper_tiles", temperature: 1085, metal: "tfc:metal/copper", number: 80 },
    { name: "create:waxed_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "create:waxed_exposed_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 48 },
    { name: "create:waxed_weathered_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 44 },
    { name: "create:waxed_oxidized_copper_tile_slab", temperature: 1085, metal: "tfc:metal/copper", number: 40 },
    { name: "create:waxed_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 75 },
    { name: "create:waxed_exposed_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 72 },
    { name: "create:waxed_weathered_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 66 },
    { name: "create:waxed_oxidized_copper_tile_stairs", temperature: 1085, metal: "tfc:metal/copper", number: 60 },

    //锌制品和伪装方块的融化
    { name: "design_decor:zinc_screw", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_byte", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_vertical_stairs", temperature: 419, metal: "tfc:metal/zinc", number: 90 },
    { name: "copycats:copycat_vertical_half_layer", temperature: 419, metal: "tfc:metal/zinc", number: 5 },
    { name: "design_decor:zinc_bolt", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_half_panel", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_vertical_slice", temperature: 419, metal: "tfc:metal/zinc", number: 5 },
    { name: "copycats:copycat_wooden_pressure_plate", temperature: 419, metal: "tfc:metal/zinc", number: 15 },
    { name: "copycats:copycat_layer", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_slope", temperature: 419, metal: "tfc:metal/zinc", number: 40 },
    { name: "design_decor:zinc_railing", temperature: 419, metal: "tfc:metal/zinc", number: 22 },
    { name: "copycats:copycat_half_layer", temperature: 419, metal: "tfc:metal/zinc", number: 5 },
    { name: "copycats:copycat_trapdoor", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_wooden_button", temperature: 419, metal: "tfc:metal/zinc", number: 2 },
    { name: "copycats:copycat_folding_door", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "copycats:copycat_slab", temperature: 419, metal: "tfc:metal/zinc", number: 35 },
    { name: "copycats:copycat_stairs", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "design_decor:zinc_catwalk", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_block", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "copycats:copycat_sliding_door", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "create:copycat_panel", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_vertical_slope", temperature: 419, metal: "tfc:metal/zinc", number: 40 },
    { name: "copycats:copycat_board", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_ladder", temperature: 419, metal: "tfc:metal/zinc", number: 12 },
    { name: "copycats:copycat_corner_slice", temperature: 419, metal: "tfc:metal/zinc", number: 3 },
    { name: "copycats:copycat_door", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "copycats:copycat_beam", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_stacked_half_layer", temperature: 419, metal: "tfc:metal/zinc", number: 3 },
    { name: "create:copycat_step", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_stone_pressure_plate", temperature: 419, metal: "tfc:metal/zinc", number: 12 },
    { name: "copycats:copycat_stone_button", temperature: 419, metal: "tfc:metal/zinc", number: 2 },
    { name: "copycats:copycat_slice", temperature: 419, metal: "tfc:metal/zinc", number: 3 },
    { name: "copycats:copycat_fence", temperature: 419, metal: "tfc:metal/zinc", number: 60 },
    { name: "copycats:copycat_pane", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_wall", temperature: 419, metal: "tfc:metal/zinc", number: 80 },
    { name: "copycats:copycat_fence_gate", temperature: 419, metal: "tfc:metal/zinc", number: 60 },
    { name: "copycats:copycat_byte_panel", temperature: 419, metal: "tfc:metal/zinc", number: 3 },
    { name: "copycats:copycat_shaft", temperature: 419, metal: "tfc:metal/zinc", number: 15 },
    { name: "copycats:copycat_iron_trapdoor", temperature: 419, metal: "tfc:metal/zinc", number: 45 },
    { name: "copycats:copycat_heavy_weighted_pressure_plate", temperature: 419, metal: "tfc:metal/zinc", number: 30 },
    { name: "copycats:copycat_flat_pane", temperature: 419, metal: "tfc:metal/zinc", number: 10 },
    { name: "copycats:copycat_light_weighted_pressure_plate", temperature: 419, metal: "tfc:metal/zinc", number: 30 },
    { name: "design_decor:zinc_floor", temperature: 419, metal: "tfc:metal/zinc", number: 20 },
    { name: "copycats:copycat_ghost_block", temperature: 419, metal: "tfc:metal/zinc", number: 45 },
    { name: "copycats:copycat_slope_layer", temperature: 419, metal: "tfc:metal/zinc", number: 9 },
    { name: "copycats:copycat_vertical_step", temperature: 419, metal: "tfc:metal/zinc", number: 19 },
    { name: "design_decor:zinc_checker_tiles", temperature: 419, metal: "tfc:metal/zinc", number: 23 },

    // ============================
    //非方块凑数的
    // ============================

    //钻头
    { name: "immersiveengineering:drillhead_iron", temperature: 1535, metal: "tfc:metal/cast_iron", number: 400 },
    { name: "immersiveengineering:drillhead_steel", temperature: 1540, metal: "tfc:metal/steel", number: 400 },
    { name: "tfc_ie_addon:drillhead_black_steel", temperature: 1784, metal: "tfc:metal/black_steel", number: 400 },
    { name: "tfc_ie_addon:drillhead_blue_steel", temperature: 1863, metal: "tfc:metal/blue_steel", number: 400 },
    { name: "tfc_ie_addon:drillhead_red_steel", temperature: 2066, metal: "tfc:metal/red_steel", number: 400 },

    //弹簧
    { name: "vintageimprovements:iron_spring", temperature: 1538, metal: "tfc:metal/cast_iron", number: 50 },
    { name: "vintageimprovements:steel_spring", temperature: 1540, metal: "tfc:metal/steel", number: 50 },
    { name: "vintageimprovements:bronze_spring", temperature: 950, metal: "tfc:metal/cast_iron", number: 50 },
    { name: "vintageimprovements:copper_spring", temperature: 1085, metal: "tfc:metal/copper", number: 50 },
    { name: "vintageimprovements:golden_spring", temperature: 1060, metal: "tfc:metal/gold", number: 50 },
    { name: "vintageimprovements:small_iron_spring", temperature: 1538, metal: "tfc:metal/cast_iron", number: 25 },
    { name: "vintageimprovements:small_steel_spring", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "vintageimprovements:small_bronze_spring", temperature: 950, metal: "tfc:metal/cast_iron", number: 25 },
    { name: "vintageimprovements:small_copper_spring", temperature: 1085, metal: "tfc:metal/copper", number: 25 },
    { name: "vintageimprovements:small_golden_spring", temperature: 1060, metal: "tfc:metal/gold", number: 25 },

    //箭
    { name: "spartanweaponry:copper_arrow", temperature: 1085, metal: "tfc:metal/copper", number: 12 },
    { name: "spartanweaponry:iron_arrow", temperature: 1535, metal: "tfc:metal/cast_iron", number: 12 },
    { name: "spartanweaponry:diamond_arrow", temperature: 1540, metal: "tfc:metal/steel", number: 12 },
    { name: "spartanweaponry:netherite_arrow", temperature: 1784, metal: "tfc:metal/black_steel", number: 12 },
    //金属粒
    { name: "immersiveengineering:nugget_lead", temperature: 1060, metal: "tfc_ie_addon:metal/lead", number: 10 },//弹壳
    { name: "immersiveengineering:nugget_aluminum", temperature: 1535, metal: "tfc_ie_addon:metal/aluminum", number: 10 },//弹壳    
    { name: "immersiveengineering:nugget_nickel", temperature: 1060, metal: "tfc:metal/nickel", number: 10 },//工程师护目镜
    { name: "immersiveengineering:nugget_uranium", temperature: 940, metal: "tfc_ie_addon:metal/uranium", number: 10 },//分液池
    { name: "immersiveengineering:nugget_constantan", temperature: 1060, metal: "tfc_ie_addon:metal/constantan", number: 10 },//工程师护目镜
    { name: "immersiveengineering:nugget_electrum", temperature: 940, metal: "tfc_ie_addon:metal/electrum", number: 10 },//分液池

    { name: "spartanweaponry:copper_bolt", temperature: 1085, metal: "tfc:metal/copper", number: 25 },
    { name: "spartanweaponry:bolt", temperature: 1535, metal: "tfc:metal/cast_iron", number: 25 },
    { name: "spartanweaponry:diamond_bolt", temperature: 1540, metal: "tfc:metal/steel", number: 25 },
    { name: "spartanweaponry:netherite_bolt", temperature: 1784, metal: "tfc:metal/black_steel", number: 25 },

    { name: "firmalife:sprinkler", temperature: 1085, metal: "tfc:metal/copper", number: 200 },//洒水器

    { name: "scguns:small_copper_casing", temperature: 1085, metal: "tfc:metal/copper", number: 7 },//弹壳
    { name: "scguns:medium_copper_casing", temperature: 1085, metal: "tfc:metal/copper", number: 9 },//弹壳
    { name: "scguns:small_iron_casing", temperature: 1535, metal: "tfc:metal/cast_iron", number: 7 },//弹壳
    { name: "scguns:large_iron_casing", temperature: 1535, metal: "tfc:metal/cast_iron", number: 15 },//弹壳
    { name: "scguns:small_brass_casing", temperature: 940, metal: "tfc:metal/brass", number: 7 },//弹壳
    { name: "scguns:medium_brass_casing", temperature: 940, metal: "tfc:metal/brass", number: 9 },//弹壳
    { name: "scguns:large_brass_casing", temperature: 940, metal: "tfc:metal/brass", number: 15 },//弹壳
    //扳手
    { name: "create:wrench", temperature: 1060, metal: "tfc:metal/gold", number: 600 },//弹壳
    { name: "ad_astra:wrench", temperature: 1535, metal: "tfc:metal/cast_iron", number: 500 },//弹壳    
    { name: "create:goggles", temperature: 1060, metal: "tfc:metal/gold", number: 200 },//工程师护目镜
    { name: "create:item_drain", temperature: 940, metal: "tfc:metal/brass", number: 600 },//分液池

  ];
  metal_block.forEach(metal_block => {
    //金属方块融化
    tfc.heating(`${metal_block.name}`, metal_block.temperature).resultFluid(Fluid.of(metal_block.metal, metal_block.number))
      .useDurability(true);
    crucible(`${metal_block.name}`, metal_block.metal, metal_block.number, metal_block.temperature)
  })

  const ingot_type = [
    { name: 'ingot', number: 100 },
    { name: 'double_ingot', number: 200 },
    { name: 'sheet', number: 200 },
    { name: 'double_sheet', number: 400 },
    { name: 'rod', number: 50 }]
  const new_metal = [

    { name: "titanium_alloy", temperature: 1680, metal: "tfc:metal/titanium_alloy" },
    { name: "titanium", temperature: 1668, metal: "tfc:metal/titanium" },
    { name: "vanadium", temperature: 1910, metal: "tfc:metal/vanadium" },
    { name: "manganese", temperature: 1246, metal: "tfc:metal/manganese" }
  ]
  new_metal.forEach(metal => {
    ingot_type.forEach(type => {
      //新金属融化
      tfc.heating(`tfc:metal/${type.name}/${metal.name}`, metal.temperature).resultFluid(Fluid.of(metal.metal, type.number))
        .useDurability(true);
      crucible(`tfc:metal/${type.name}/${metal.name}`, metal.metal, type.number, metal.temperature)
    })
  })


  tfc.heating('kubejs:alkalized_bauxite_raw_material', 1500).resultItem('kubejs:bauxite_clinker')
  tfc.heating('kubejs:unfired_corundum_brick', 2000).resultItem('kubejs:corundum_brick')
  tfc.heating('kubejs:corundum_brick', 2600).resultFluid(Fluid.of("kubejs:molten_corundum", 50))//刚玉融化
  tfc.heating('kubejs:corundum_brick_block', 2600).resultFluid(Fluid.of("kubejs:molten_corundum", 200))//刚玉融化
  crucible('kubejs:corundum_brick', 'kubejs:molten_corundum', 50, 2600)
  crucible('kubejs:corundum_brick_block', 'kubejs:molten_corundum', 200, 2600)

  tfc.heating('create:metal_girder', 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 70))//金属梁融化
  crucible('create:metal_girder', 'tfc:metal/cast_iron', 70, 1535)

  tfc.heating('design_decor:diagonal_girder', 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 70))//金属斜梁融化
  crucible('design_decor:diagonal_girder', 'tfc:metal/cast_iron', 70, 1535)

  tfc.heating('design_decor:metal_support', 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 20))//金属支柱融化
  crucible('design_decor:metal_support', 'tfc:metal/cast_iron', 20, 1535)

  tfc.heating('design_decor:diagonal_metal_support', 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 20))//金属斜柱融化
  crucible('design_decor:diagonal_metal_support', 'tfc:metal/cast_iron', 20, 1535)

  tfc.heating('create:metal_bracket', 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 80))//金属支架融化
  crucible('create:metal_bracket', 'tfc:metal/cast_iron', 80, 1535)


  tfc.heating(`design_decor:metal_plate`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
  crucible(`design_decor:metal_plate`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_plate_wall`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
  crucible(`design_decor:metal_plate_wall`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_plate_stairs`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属板材融化
  crucible(`design_decor:metal_plate_stairs`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_plate_slab`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 13))//金属板材融化
  crucible(`design_decor:metal_plate_slab`, "tfc:metal/cast_iron", 13, 1535)

  tfc.heating(`design_decor:metal_sheet`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
  crucible(`design_decor:metal_sheet`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_sheet_wall`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
  crucible(`design_decor:metal_sheet_wall`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_sheet_stairs`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//金属镶板融化
  crucible(`design_decor:metal_sheet_stairs`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`design_decor:metal_sheet_slab`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 13))//金属镶板融化
  crucible(`design_decor:metal_sheet_slab`, "tfc:metal/cast_iron", 13, 1535)

  tfc.heating(`create:industrial_iron_block`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//工业铁块融化
  crucible(`create:industrial_iron_block`, "tfc:metal/cast_iron", 25, 1535)
  tfc.heating(`design_decor:industrial_plating_block`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//工业铁块融化
  crucible(`design_decor:industrial_plating_block`, "tfc:metal/cast_iron", 25, 1535)


  tfc.heating(`create:industrial_iron_window`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 35))//工业窗户融化
  crucible(`create:industrial_iron_window`, "tfc:metal/cast_iron", 35, 1535)
  tfc.heating(`create:weathered_iron_window`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 28))
  crucible(`create:weathered_iron_window`, "tfc:metal/cast_iron", 28, 1535)
  tfc.heating(`create:industrial_iron_window_pane`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 15))
  crucible(`create:industrial_iron_window_pane`, "tfc:metal/cast_iron", 15, 1535)
  tfc.heating(`create:weathered_iron_window_pane`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 11))
  crucible(`create:weathered_iron_window_pane`, "tfc:metal/cast_iron", 11, 1535)
  tfc.heating(`design_decor:industrial_iron_floor`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 3))
  crucible(`design_decor:industrial_iron_floor`, "tfc:metal/cast_iron", 3, 1535)
  tfc.heating(`design_decor:industrial_iron_large_chain`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 12))
  crucible(`design_decor:industrial_iron_large_chain`, "tfc:metal/cast_iron", 12, 1535)
  tfc.heating(`design_decor:industrial_gear_large`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))
  crucible(`design_decor:industrial_gear_large`, "tfc:metal/cast_iron", 25, 1535)
  tfc.heating(`design_decor:industrial_gear`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))
  crucible(`design_decor:industrial_gear`, "tfc:metal/cast_iron", 25, 1535)
  tfc.heating(`design_decor:industrial_iron_boiler_large`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//工业铁块融化
  crucible(`design_decor:industrial_iron_boiler_large`, "tfc:metal/cast_iron", 25, 1535)
  tfc.heating(`design_decor:industrial_iron_boiler`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 25))//工业铁块融化
  crucible(`design_decor:industrial_iron_boiler`, "tfc:metal/cast_iron", 25, 1535)

  tfc.heating(`create:weathered_iron_block`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 18))//锈蚀工业铁块融化
  crucible(`create:weathered_iron_block`, "tfc:metal/cast_iron", 18, 1535)

  tfc.heating(`immersiveengineering:wirecoil_copper`, 1085).resultFluid(Fluid.of("tfc:metal/copper", 100))//低压线圈和铜线圈融化
  crucible(`immersiveengineering:wirecoil_copper`, "tfc:metal/copper", 100, 1085)
  tfc.heating(`immersiveengineering:coil_lv`, 1085).resultFluid(Fluid.of("tfc:metal/copper", 800))
  crucible(`immersiveengineering:coil_lv`, "tfc:metal/copper", 800, 1085)

  tfc.heating(`immersiveengineering:wirecoil_electrum`, 1085).resultFluid(Fluid.of("tfc_ie_addon:metal/electrum", 100))//中压线圈和琥珀金线圈融化
  crucible(`immersiveengineering:wirecoil_electrum`, "tfc_ie_addon:metal/electrum", 100, 1085)
  tfc.heating(`immersiveengineering:coil_mv`, 1085).resultFluid(Fluid.of("tfc_ie_addon:metal/electrum", 800))
  crucible(`immersiveengineering:coil_mv`, "tfc_ie_addon:metal/electrum", 800, 1085)


  tfc.heating(`create:whisk`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 300))//锻铁搅拌头和锻铁搅拌器以及锻铁双杆融化
  crucible(`create:whisk`, "tfc:metal/cast_iron", 300, 1535)
  tfc.heating(`kubejs:whisk_stirrer_head_blank`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 100))
  crucible(`kubejs:whisk_stirrer_head_blank`, "tfc:metal/cast_iron", 100, 1535)
  tfc.heating(`kubejs:wrought_iron_double_rod`, 1535).resultFluid(Fluid.of("tfc:metal/cast_iron", 100))
  crucible(`kubejs:wrought_iron_double_rod`, "tfc:metal/cast_iron", 100, 1535)

  tfc.heating(`createmetallurgy:sturdy_whisk`, 1784).resultFluid(Fluid.of("tfc:metal/black_steel", 300))//黑钢搅拌头和坚固搅拌器以及黑钢双杆融化
  crucible(`createmetallurgy:sturdy_whisk`, "tfc:metal/black_steel", 300, 1784)
  tfc.heating(`kubejs:whisk_black_steel_head_blank`, 1784).resultFluid(Fluid.of("tfc:metal/black_steel", 100))
  crucible(`kubejs:whisk_black_steel_head_blank`, "tfc:metal/black_steel", 100, 1784)
  tfc.heating(`kubejs:black_steel_double_rod`, 1784).resultFluid(Fluid.of("tfc:metal/black_steel", 100))
  crucible(`kubejs:black_steel_double_rod`, "tfc:metal/black_steel", 100, 1784)
  tfc.heating('kubejs:leather_hot_water_bag', 60)
    .resultItem(Item.of('kubejs:leather_hot_water_bag'))
  tfc.heating('kubejs:rubber_hot_water_bag', 100)
    .resultItem(Item.of('kubejs:rubber_hot_water_bag'))
  tfc.heating('kubejs:metal_hot_water_bag', 110)
    .resultItem(Item.of('kubejs:metal_hot_water_bag'))
  tfc.heating('kubejs:heating_warmer', 60)
    .resultItem(Item.of('kubejs:heating_warmer'))
  tfc.heating('minecraft:brown_mushroom', 200)
    .resultItem(Item.of('repas_de_survie:cooked_brown_mushroom'))
  tfc.heating('minecraft:red_mushroom', 200)
    .resultItem(Item.of('repas_de_survie:cooked_red_mushroom'))
  tfc.heating('repas_de_survie:rat', 200)
    .resultItem(Item.of('repas_de_survie:cooked_rat'))
});
