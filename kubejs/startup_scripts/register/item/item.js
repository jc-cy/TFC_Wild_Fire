StartupEvents.registry('item', event => {
    /* event.create('brass_cartridge_nest').texture('kubejs:item/gun/brass_cartridge_nest'); // 黄铜弹巢
     event.create('cast_iron_firing_hammer').texture('kubejs:item/gun/cast_iron_firing_hammer'); // 铸铁击锤
     event.create('cast_iron_gun_barrel').texture('kubejs:item/gun/cast_iron_gun_barrel'); // 铸铁枪管
     event.create('standard_type_muzzle_brake_parts_steel').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_steel'); // 制式制退器配件（钢）
     event.create('standard_type_muzzle_brake_parts_copper').texture('kubejs:item/gun/standard_type_muzzle_brake_parts_copper'); // 制式制退器配件（铜）
     event.create('standard_type_handguard_parts_steel').texture('kubejs:item/gun/standard_type_handguard_parts_steel'); // 制式护手配件（钢）
     event.create('standard_type_handguard_parts_copper').texture('kubejs:item/gun/standard_type_handguard_parts_copper'); // 制式护手配件（铜）
     event.create('standard_type_gun_body_parts_steel').texture('kubejs:item/gun/standard_type_gun_body_parts_steel'); // 制式枪身配件（钢）
     event.create('standard_type_gun_body_parts_copper').texture('kubejs:item/gun/standard_type_gun_body_parts_copper'); // 制式枪身配件（铜）
     event.create('standard_type_pistol_slide_parts_steel').texture('kubejs:item/gun/standard_type_pistol_slide_parts_steel'); // 制式手枪滑套配件（钢）
     event.create('standard_type_pistol_slide_parts_copper').texture('kubejs:item/gun/standard_type_pistol_slide_parts_copper'); // 制式手枪滑套配件（铜）
     event.create('standard_type_magazine_parts_steel').texture('kubejs:item/gun/standard_type_magazine_parts_steel'); // 制式弹匣配件（钢）
     event.create('standard_type_magazine_parts_copper').texture('kubejs:item/gun/standard_type_magazine_parts_copper'); // 制式弹匣配件（铜）
     event.create('standard_type_grip_parts_steel').texture('kubejs:item/gun/standard_type_grip_parts_steel'); // 制式握把配件（钢）
     event.create('standard_type_grip_parts_copper').texture('kubejs:item/gun/standard_type_grip_parts_copper'); // 制式握把配件（铜）
     event.create('standard_type_gunstock_parts_steel').texture('kubejs:item/gun/standard_type_gunstock_parts_steel'); // 制式枪托配件（钢）
     event.create('standard_type_gunstock_parts_copper').texture('kubejs:item/gun/standard_type_gunstock_parts_copper'); // 制式枪托配件（铜）*/


    event.create('mold_mechanical', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_mechanical').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//零件模具
    event.create('unfired_mold_mechanical', 'basic').texture('kubejs:item/tfc/unfired_mold_mechanical').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//没烧的零件模具

    event.create('mold_simple_key', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_simple_key').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//简易钥匙模具
    event.create('unfired_mold_simple_key', 'basic').texture('kubejs:item/tfc/unfired_mold_simple_key').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//没烧的简易钥匙模具

    event.create('mold_rods', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_rods').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//棒模具
    event.create('unfired_mold_rods', 'basic').texture('kubejs:item/tfc/unfired_mold_rods').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//没烧的棒模具

    event.create('mold_sheet', 'tfc:mold').capacity(100).texture('kubejs:item/tfc/mold_sheet').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//板模具
    event.create('unfired_mold_sheet', 'basic').texture('kubejs:item/tfc/unfired_mold_sheet').tag('tfc:molds').tag('tfcchannelcasting:accepted_in_mold_table')//没烧的板模具

    event.create('aerospace_suit_fabric', 'basic').texture('kubejs:item/ad/aerospace_suit_fabric')//ad航空服布料
    event.create('netherite_reinforcement_plate', 'basic').texture('kubejs:item/ad/netherite_reinforcement_plate')//ad下界合金强化片
    event.create('heat_resistant_reinforcement_plate', 'basic').texture('kubejs:item/ad/heat_resistant_reinforcement_plate')//ad耐热强化片
    event.create('vellum', 'basic').texture('kubejs:item/vellum')//兽皮纸
    event.create('rock_powder', 'tfc:mold').capacity(100)//岩石粉末模具
    event.create('trachyandesite_alloy', 'basic').texture('kubejs:item/create/trachyandesite_alloy')//粗安山合金
    event.create('wrought_iron_double_rod', 'basic').texture('kubejs:item/create/wrought_iron_double_rod');// 锻铁双棒
    event.create('black_steel_double_rod', 'basic').texture('kubejs:item/create/black_steel_double_rod');// 锰钢双棒
    event.create('fan_blade_blank', 'basic').texture('kubejs:item/create/fan_blade_blank');// 扇叶半成品
    event.create('fan_blade_blank_part', 'basic').texture('kubejs:item/create/fan_blade_blank_part');// 扇叶片
    event.create('whisk_stirrer_head_blank', 'basic').texture('kubejs:item/create/whisk_stirrer_head_blank');// 搅拌头半成品
    event.create('whisk_black_steel_head_blank', 'basic').texture('kubejs:item/create/whisk_black_steel_head_blank');// 锰钢搅拌头半成品
    event.create('material_component_wrought_iron', 'basic').texture('kubejs:item/create/material_component_wrought_iron');// 锻铁零件
    event.create('material_component_steel', 'basic').texture('kubejs:item/create/material_component_steel');// 钢制零件
    event.create('material_component_black_steel', 'basic').texture('kubejs:item/create/material_component_black_steel');// 锰钢零件
    event.create('rotten_meat', 'basic').texture('kubejs:item/rotten_meat');// 注册腐烂的肉
    event.create('rotten_fish', 'basic').texture('kubejs:item/rotten_fish');// 注册腐烂的鱼
    event.create('rotten_vegetables', 'basic').texture('kubejs:item/rotten_vegetables');// 注册腐烂的蔬菜
    event.create('rotten_fruit', 'basic').texture('kubejs:item/rotten_fruit');// 注册腐烂的水果
    event.create('rot', 'basic').texture('kubejs:item/rot');// 注册腐烂物
    event.create('burnt_food_residue', 'basic').texture('kubejs:item/burnt_food_residue');// 注册烧焦的食物残渣
    event.create('rotten_jam', 'basic').texture('kubejs:item/rotten_jam');   // 注册腐烂的果酱
    event.create('brass_forge_door', 'basic').texture('kubejs:item/brass_forge_door');// 黄铜锻炉门
    event.create('bad_brass_forge_door', 'basic').texture('kubejs:item/bad_brass_forge_door');   // 黄铜坏门
    event.create('oldcrown', 'basic').texture('kubejs:item/scraps/oldcrown');   // 古老金币
    event.create('rotten_platter', 'basic').texture('kubejs:item/rotten_platter'); // 注册一盘腐烂物

    event.create('leather_hot_water_bag', 'basic').texture('kubejs:item/tfc/leather_hot_water_bag').maxStackSize(1);// 皮革热水袋
    event.create('rubber_hot_water_bag', 'basic').texture('kubejs:item/tfc/rubber_hot_water_bag').maxStackSize(1);// 橡胶热水袋
    event.create('metal_hot_water_bag', 'basic').texture('kubejs:item/tfc/metal_hot_water_bag').maxStackSize(1);// 金属热水袋
    event.create('warm_warmer', 'basic').texture('kubejs:item/tfc/warm_warmer').maxStackSize(4);//暖手宝
    event.create('heating_warmer', 'basic').texture('kubejs:item/tfc/heating_warmer').maxStackSize(4);//暖手宝


    event.create('kubejs:tfc/crushed_sinew', 'basic').texture('kubejs:item/tfc/crushed_sinew'); // 捣碎的筋腱
    event.create('kubejs:tfc/sinew_thread', 'basic').texture('kubejs:item/tfc/sinew_thread'); // 筋线

    event.create('coal_powder', 'basic').texture('kubejs:item/fuel/coal_powder'); // 煤炭粉
    event.create('kubejs:crushed_raw_desh') // 创建粉碎的原始Desh物品.texture('kubejs:item/crushed_raw_desh') 
    event.create('kubejs:crushed_raw_calorite') // 创建粉碎的原始Calorite物品.texture('kubejs:item/crushed_raw_calorite') 
    event.create('kubejs:crushed_raw_ostrum') // 创建粉碎的原始Ostrum物品.texture('kubejs:item/crushed_raw_ostrum')

    // 燃料颗粒类物品注册 tfc:firepit_fuel tfc:forge_fuel
    event.create('wood_pellet', 'basic').texture('kubejs:item/fuel/wood_pellet').tag("tfc:firepit_fuel").tag("tfc:forge_fuel"); // 木料颗粒
    event.create('charcoal_pellet', 'basic').texture('kubejs:item/fuel/charcoal_pellet').tag("tfc:firepit_fuel").tag("tfc:forge_fuel"); // 木炭颗粒
    event.create('coal_pellet', 'basic').texture('kubejs:item/fuel/coal_pellet').tag("tfc:firepit_fuel").tag("tfc:forge_fuel"); // 煤炭颗粒
    event.create('coke_pellet', 'basic').texture('kubejs:item/fuel/coke_pellet').tag("tfc:firepit_fuel").tag("tfc:forge_fuel"); // 焦煤颗粒
    event.create('high_performance_fuel_pellet', 'basic').texture('kubejs:item/fuel/high_performance_fuel_pellet').tag("tfc:firepit_fuel").tag("tfc:forge_fuel"); // 高性能燃料颗粒

    // 燃料炭块（压块）类物品注册 tfc:log_pile_logs tfc:forge_fuel
    event.create('wood_briquette', 'basic').texture('kubejs:item/fuel/wood_briquette').tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 木料炭块
    event.create('charcoal_briquette', 'basic').texture('kubejs:item/fuel/charcoal_briquette').tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 木炭块
    event.create('coal_briquette', 'basic').texture('kubejs:item/fuel/coal_briquette').tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 煤炭块
    event.create('coke_briquette', 'basic').texture('kubejs:item/fuel/coke_briquette').tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 焦煤块
    event.create('high_performance_fuel_briquette', 'basic').texture('kubejs:item/fuel/high_performance_fuel_briquette').tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 高性能燃料块
    //保温碳
    event.create('wood_sustained_heat_pellet', 'basic').texture('kubejs:item/fuel/wood_briquette').tag("tfc:firepit_fuel").tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 木料保温块
    event.create('coal_sustained_heat_pellet', 'basic').texture('kubejs:item/fuel/coal_briquette').tag("tfc:firepit_fuel").tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 煤炭保温块
    event.create('high_performance_fuel_sustained_heat_pellet', 'basic').texture('kubejs:item/fuel/high_performance_fuel_briquette').tag("tfc:firepit_fuel").tag("tfc:forge_fuel").tag("tfc:log_pile_logs"); // 高性能保温块

    event.create('charcoal_stick', 'basic').texture('kubejs:item/charcoal_stick'); // 炭笔

    event.create('bone_fish_hook', 'basic').texture('kubejs:item/tfc/bone_fish_hook'); // 骨钩
    event.create('bone_skinningknife_blade', 'basic').texture('kubejs:item/tfc/bone_skinningknife_blade'); // 骨刀
    event.create('bone_butchersknife_blade', 'basic').texture('kubejs:item/tfc/bone_butchersknife_blade'); // 骨刮皮刀

    event.create('pulp_film', 'basic').texture('kubejs:item/pulp_film'); // 纸浆膜
    event.create('paper_film', 'basic').texture('kubejs:item/paper_film'); // 纸膜


    event.create('alkalized_bauxite_raw_material', 'basic').texture('kubejs:item/tfc/alkalized_bauxite_raw_material').tag("kubejs:ore"); // 碱化铝土生料

    event.create('bauxite_clinker', 'basic').texture('kubejs:item/tfc/bauxite_clinker');// 铝土熟料

    event.create('aluminum_chromium_mix_powder', 'basic').texture('kubejs:item/tfc/aluminum_chromium_mix_powder');// 铝铬混合粉

    event.create('alumina_powder', 'basic').texture('kubejs:item/tfc/alumina_powder').tag("kubejs:ore"); // 氧化铝粉
    event.create('unfired_corundum_brick', 'basic').texture('kubejs:item/tfc/unfired_corundum_brick').tag("kubejs:ore");   // 未完成的刚玉砖
    event.create('corundum_brick', 'basic').texture('kubejs:item/tfc/corundum_brick');   // 刚玉砖



    //万象瑞雪模型以及
    event.create('rock_powder_blank') //粗粗安山合金模型
    event.create('emergency_hammer') //应急安全锤模型
    event.create('cast_iron_indenter', 'basic')//铸铁压头
    event.create('dense_indenter', 'basic')//致密压头
    event.create('noheating_warmer', 'basic')//燃尽暖手宝

    event.create('wooden_slat_grid', 'basic').tag("vintageimprovements:curving_heads");//木条编网
    //硅以及相关材料注册
    event.create('glass_mixture').texture('kubejs:item/create/glass_mixture');//玻璃混合物
    event.create('silicon').texture('kubejs:item/create/silicon');//硅
    event.create('silicon_board').texture('kubejs:item/create/silicon_board');//硅板
    event.create('unshaped_silicon').texture('kubejs:item/create/unshaped_silicon');//硅粉
    event.create('aluminum_mixture').texture('kubejs:item/create/aluminum_mixture');//玻璃混合物


    const metal = [//金属列表
        "copper",
        "bismuth_bronze",
        "black_bronze",
        "bronze",
        "black_steel",
        "blue_steel",
        "red_steel",
        "steel",
        "wrought_iron"
    ]
    const weapon_part = [//武器部件列表
        "tomahawk_weapon_part",
        "throwing_knife_weapon_part",
        "dagger_weapon_part",
        "handguard_weapon_part",
        "longsword_weapon_part",
        "katana_weapon_part",
        "saber_weapon_part",
        "rapier_weapon_part",
        "battle_hammer_weapon_part",
        "warhammer_weapon_part",
        "battleaxe_weapon_part",
        "flanged_mace_weapon_part",
        "greatsword_weapon_part",
        "halberd_weapon_part",
        "glaive_weapon_part",
        "scythe_weapon_part",
        "lance_weapon_part",
        "quarterstaff_weapon_part"
    ];
    metal.forEach(metal => {//三层锭注册
        event.create(`triple_${metal}`, 'basic').texture(`kubejs:item/metal/triple_${metal}`);
    })


    metal.forEach(metal => {//斯巴达武器部件注册
        weapon_part.forEach(weapon_parta => {
            event.create(`${metal}_${weapon_parta}`, 'basic').texture(`kubejs:item/weapon_part/${metal}_${weapon_parta}`);
        })
    })

})
StartupEvents.registry("item", event => {//航空/航天相关部件
    // 基础成品部件
    event.create('kubejs:advanced_cabin').texture('kubejs:item/ad/advanced_cabin'); // 高级驾驶舱
    event.create('kubejs:advanced_plating').texture('kubejs:item/ad/advanced_plating'); // 高级镀层
    event.create('kubejs:basic_cabin').texture('kubejs:item/ad/basic_cabin'); // 基础驾驶舱
    event.create('kubejs:basic_crystal_pannel').texture('kubejs:item/ad/basic_crystal_pannel'); // 基础水晶面板
    event.create('kubejs:basic_plating').texture('kubejs:item/ad/basic_plating'); // 基础镀层
    event.create('kubejs:basic_propeller').texture('kubejs:item/ad/basic_propeller'); // 基础螺旋桨
    event.create('kubejs:columbus_propeller').texture('kubejs:item/ad/columbus_propeller'); // 哥伦布螺旋桨
    event.create('kubejs:explorer_cabin').texture('kubejs:item/ad/explorer_cabin'); // 探索者驾驶舱
    event.create('kubejs:flare_plating').texture('kubejs:item/ad/flare_plating'); // 耀斑镀层
    event.create('kubejs:hologram_frontpanel').texture('kubejs:item/ad/hologram_frontpanel'); // 全息前面板
    event.create('kubejs:moon_crystal_panel').texture('kubejs:item/ad/moon_crystal_panel'); // 月球水晶面板
    event.create('kubejs:moon_propeller').texture('kubejs:item/ad/moon_propeller'); // 月球螺旋桨
    event.create('kubejs:venus_plating').texture('kubejs:item/ad/venus_plating'); // 金星镀层


    event.create('kubejs:stone_arrow').texture('kubejs:item/tfc/stone_arrow'); // 石箭头
    event.create('kubejs:copper_arrow').texture('kubejs:item/tfc/copper_arrow'); // 铜箭头
    event.create('kubejs:wrought_iron_arrow').texture('kubejs:item/tfc/wrought_iron_arrow'); // 锻铁箭头
    event.create('kubejs:steel_arrow').texture('kubejs:item/tfc/steel_arrow'); // 钢箭头
    event.create('kubejs:black_steel_arrow').texture('kubejs:item/tfc/black_steel_arrow'); // 锰钢箭头
    event.create('kubejs:gps').texture('kubejs:item/gps').maxStackSize(1); // 全球定位器




})
StartupEvents.registry("item", event => {   //工业线盔甲相关
    // 半成品黄铜骑士盔甲
    event.create('kubejs:prototype_finished_cogknight_helmet', 'helmet').texture('kubejs:item/armor/prototype_cogknight_helmet').tier('brass').maxStackSize(1); // 原型齿轮骑士头盔
    event.create('kubejs:prototype_finished_cogknight_chestplate', 'chestplate').texture('kubejs:item/armor/prototype_cogknight_chestplate').tier('brass').maxStackSize(1); // 原型齿轮骑士胸甲
    event.create('kubejs:prototype_finished_cogknight_leggings', 'leggings').texture('kubejs:item/armor/prototype_cogknight_leggings').tier('brass').maxStackSize(1); // 原型齿轮骑士护腿
    // 未完成黄铜骑士盔甲中间产物
    event.create('kubejs:unfinished_prototype_cogknight_helmet').texture('kubejs:item/armor/unfinished_prototype_cogknight_helmet').maxStackSize(1); // 未完成原型齿轮骑士头盔
    event.create('kubejs:unfinished_prototype_cogknight_chestplate').texture('kubejs:item/armor/unfinished_prototype_cogknight_chestplate').maxStackSize(1) // 未完成原型齿轮骑士胸甲
    event.create('kubejs:unfinished_prototype_cogknight_leggings').texture('kubejs:item/armor/unfinished_prototype_cogknight_leggings').maxStackSize(1); // 未完成原型齿轮骑士护腿
    event.create('kubejs:unfinished_cogknight_boots').texture('kubejs:item/armor/unfinished_cogknight_boots').maxStackSize(1); // 未完成齿轮骑士靴子

    // 未完成黄铜骑士盔甲第二步中间产物
    event.create('kubejs:unfinished_cogknight_helmet').texture('kubejs:item/armor/unfinished_cogknight_helmet').maxStackSize(1); // 未完成齿轮骑士头盔
    event.create('kubejs:unfinished_cogknight_chestplate').texture('kubejs:item/armor/unfinished_cogknight_chestplate').maxStackSize(1); // 未完成齿轮骑士胸甲
    event.create('kubejs:unfinished_cogknight_leggings').texture('kubejs:item/armor/unfinished_cogknight_leggings').maxStackSize(1); // 未完成齿轮骑士护腿

    // 未完成工业钢盔甲中间产物
    event.create('kubejs:unfinished_steel_helmet').texture('kubejs:item/armor/unfinished_steel_helmet').maxStackSize(1); // 未完成工业钢头盔
    event.create('kubejs:unfinished_steel_chestplate').texture('kubejs:item/armor/unfinished_steel_chestplate').maxStackSize(1); // 未完成工业钢胸甲
    event.create('kubejs:unfinished_steel_leggings').texture('kubejs:item/armor/unfinished_steel_leggings').maxStackSize(1); // 未完成工业钢护腿
    event.create('kubejs:unfinished_steel_boots').texture('kubejs:item/armor/unfinished_steel_boots').maxStackSize(1); // 未完成工业钢靴子

    event.create('kubejs:unfinished_thermometer').texture('kubejs:item/unfinished_thermometer').maxStackSize(1); // 未完成温度计

});
StartupEvents.registry("item", event => {  //半成品
    const allmetal = [
        "bismuth_bronze",
        "black_bronze",
        "bronze",
        "copper",
        "wrought_iron",
        "steel",
        "black_steel",
        "blue_steel",
        "red_steel",
        "cast_iron",
        "gold",
        "rose_gold",
        "electrum",
        "constantan",
        "brass",
        "lead",
        "bismuth",
        "uranium",
        "aluminum",
        "silver",
        "sterling_silver",
        "tin",
        "nickel",
        "chromium",
        "zinc",
        "stainless_steel"]
    allmetal.forEach(metal => {
        event.create(`kubejs:unfinished/double_ingot/${metal}`).tag("kubejs:2ingot"); // 激光焊接半成品-双锭
        event.create(`kubejs:unfinished/hot_double_ingot/${metal}`).tag("kubejs:2ingot"); // 激光焊接半成品-热双锭
        event.create(`kubejs:unfinished/double_sheet/${metal}`).tag("kubejs:4ingot"); // 激光焊接半成品-双层薄板
        event.create(`kubejs:unfinished/hot_double_sheet/${metal}`).tag("kubejs:4ingot"); // 激光焊接半成品-热双层薄板
    })
    // 未完成部件
    event.create('kubejs:advanced_plating_unfinished').texture('kubejs:item/ad/advanced_plating_unfinished'); // 高级镀层_未完成
    event.create('kubejs:basic_crystal_pannel_unfinished').texture('kubejs:item/ad/basic_crystal_pannel_unfinished'); // 基础水晶面板_未完成
    event.create('kubejs:basic_plating_unfinished').texture('kubejs:item/ad/basic_plating_unfinished'); // 基础镀层_未完成
    event.create('kubejs:flare_plating_unfinished').texture('kubejs:item/ad/flare_plating_unfinished'); // 耀斑镀层_未完成
    event.create('kubejs:hologram_frontpanel_unfinished').texture('kubejs:item/ad/hologram_frontpanel_unfinished'); // 全息前面板_未完成
    event.create('kubejs:moon_crystal_panel_unfinished').texture('kubejs:item/ad/moon_crystal_panel_unfinished'); // 月球水晶面板_未完成
    event.create('kubejs:venus_plating_unfinished').texture('kubejs:item/ad/venus_plating_unfinished'); // 金星镀层_未完成


})

StartupEvents.registry("item", event => {   //新金属
    //太空金属锭
    const molten_metal = [
        { id: 'titanium_alloy' },
        { id: 'titanium' },
        { id: 'vanadium' },
        { id: 'manganese' }
    ]
    molten_metal.forEach(metal => {
        event.create(`kubejs:metal/ingot/${metal.id}`).texture(`kubejs:item/metal/ingot/${metal.id}`)
        .tag('balm:ingots')
        .tag(`forge:ingots`)
        .tag('tfc:pileable_ingots')
        .tag(`forge:ingots/${metal.id}`)
        .tag(`tfc:metal_item/${metal.id}`)
        event.create(`kubejs:metal/double_ingot/${metal.id}`).texture(`kubejs:item/double_ingot/ingot/${metal.id}`)
        .tag('tfc:pileable_double_ingots')
        .tag('tfc:pileable_sheets')
        .tag(`forge:double_ingots`)
        .tag(`forge:double_ingots/${metal.id}`)
        .tag(`tfc:metal_item/${metal.id}`)
        event.create(`kubejs:metal/sheet/${metal.id}`).texture(`kubejs:item/metal/sheet/${metal.id}`)
        .tag('tfc:pileable_sheets')
        .tag(`forge:sheets`)
        .tag(`forge:sheets/${metal.id}`)
        .tag(`tfc:metal_item/${metal.id}`)
        event.create(`kubejs:metal/double_sheet/${metal.id}`).texture(`kubejs:item/metal/double_sheet/${metal.id}`)
        .tag(`forge:double_sheets`)
        .tag(`forge:double_sheets/${metal.id}`)
        .tag(`tfc:metal_item/${metal.id}`)

    })
    //矿物
    const ore = [
        'lmenite',
        'native_vanadium',
        'manganese'

    ]
    ore.forEach(ore => {
        event.create(`kubejs:ore/rich_${ore}`).texture(`kubejs:item/ore/rich_${ore}`)
        .tag('tfc:ore_pieces')
        event.create(`kubejs:ore/${ore}`).texture(`kubejs:item/ore/${ore}`)
        .tag('tfc:ore_pieces')
        event.create(`kubejs:ore/poor_${ore}`).texture(`kubejs:item/ore/poor_${ore}`)
        .tag('tfc:ore_pieces')
    })

})  