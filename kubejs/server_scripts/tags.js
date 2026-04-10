// priority: 0

//可用于锻造工具的金属
const toolMetals = ['bismuth_bronze', 'black_bronze', 'bronze', 'copper', 'wrought_iron', 'steel', 'black_steel', 'blue_steel', 'red_steel'];

// 工具头可淬火
ServerEvents.tags("item", event => {
    // 1. 定义基础数据：工具头模板（金属名用 {metal} 占位） + 金属列表
    const toolHeadTemplates = [
        'tfc_hammer_time:metal/excavator_head/{metal}',
        'kubejs:{metal}_glaive_weapon_part',
        'kubejs:{metal}_halberd_weapon_part',
        'kubejs:{metal}_lance_weapon_part',
        'kubejs:{metal}_scythe_weapon_part',
        'tfc:metal/sword_blade/{metal}',
        'kubejs:{metal}_greatsword_weapon_part',
        'kubejs:{metal}_flanged_mace_weapon_part',
        'kubejs:{metal}_battleaxe_weapon_part',
        'tfc:metal/javelin_head/{metal}',
        'tfc:metal/scythe_blade/{metal}',
        'tfc:metal/knife_blade/{metal}',
        'tfc:metal/saw_blade/{metal}',
        'tfc:metal/hoe_head/{metal}',
        'kubejs:{metal}_saber_weapon_part',
        'tfc:metal/pickaxe_head/{metal}',
        'tfc:metal/shovel_head/{metal}',
        'tfc:metal/axe_head/{metal}',
        'kubejs:{metal}_throwing_knife_weapon_part',
        'kubejs:{metal}_dagger_weapon_part',
        'kubejs:{metal}_katana_weapon_part',
        'kubejs:{metal}_rapier_weapon_part',
        'kubejs:{metal}_tomahawk_weapon_part',
        'kubejs:{metal}_longsword_weapon_part'
    ];

    toolMetals.forEach(metal => {
        if (metal == "copper") return
        toolHeadTemplates.forEach(template => {
            // 替换模板中的 {metal} 为当前金属名（生成完整的物品ID）
            const toolHeadId = template.replace(/{metal}/g, metal);
            event.add(`kubejs:tool_head`, toolHeadId);
            //console.log(`已给物品 ${toolHeadId} 添加标签 kubejs:tool_head`);
        });
    });
});
//工具应用打磨值
ServerEvents.tags("item", event => {

    const toolItemIds = [
        'tfc:metal/axe/bismuth_bronze',
        'kubejs:bismuth_bronze_battleaxe',
        'tfc:metal/pickaxe/bismuth_bronze',
        'tfc:metal/shovel/bismuth_bronze',
        'tfc:metal/hoe/bismuth_bronze',
        'tfc:metal/saw/bismuth_bronze',
        'tfc:metal/knife/bismuth_bronze',
        'tfc:metal/scythe/bismuth_bronze',
        'tfc:metal/javelin/bismuth_bronze',
        'tfc:metal/sword/bismuth_bronze',
        'kubejs:bismuth_bronze_tomahawk',
        'kubejs:bismuth_bronze_throwing_knife',
        'kubejs:bismuth_bronze_parrying_dagger',
        'kubejs:bismuth_bronze_dagger',
        'kubejs:bismuth_bronze_katana',
        'kubejs:bismuth_bronze_rapier',
        'kubejs:bismuth_bronze_saber',
        'kubejs:bismuth_bronze_longsword',
        'kubejs:bismuth_bronze_glaive',
        'kubejs:bismuth_bronze_pike',
        'kubejs:bismuth_bronze_javelin',
        'kubejs:bismuth_bronze_spear',
        'kubejs:bismuth_bronze_halberd',
        'kubejs:bismuth_bronze_lance',
        'kubejs:bismuth_bronze_greatsword',
        'kubejs:bismuth_bronze_scythe'
    ];
    // 金属列表
    toolMetals.forEach(metal => {
        toolItemIds.forEach(itemId => {
            // 替换物品ID中的 bismuth_bronze 为当前金属名
            const targetItemId = itemId.replace('bismuth_bronze', metal);
            event.add('kubejs:polish', targetItemId);
            //console.log(`已给物品 ${targetItemId} 添加标签 kubejs:polish`);
        });
    });
});





const rock = [
    'andesite',
    'basalt',
    'chalk',
    'chert',
    'claystone',
    'conglomerate',
    'dacite',
    'diorite',
    'dolomite',
    'gabbro',
    'gneiss',
    'granite',
    'limestone',
    'marble',
    'phyllite',
    'quartzite',
    'rhyolite',
    'schist',
    'shale',
    'slate'
];
const ore_tag = [
    'tfc:can_trigger_collapse',
    'tfc:can_start_collapse',
    'tfc:can_collapse',
    'tfc:prospectable'
];
ServerEvents.tags("block", event => {
    rock.forEach(rock => {
        ore_tag.forEach(tag => {


            event.add(tag,
                [
                    `kubejs:ore/rich_manganese/${rock}`,
                    `kubejs:ore/normal_manganese/${rock}`,
                    `kubejs:ore/poor_manganese/${rock}`,
                    `kubejs:ore/rich_ilmenite/${rock}`,
                    `kubejs:ore/normal_ilmenite/${rock}`,
                    `kubejs:ore/poor_ilmenite/${rock}`,
                    `kubejs:ore/rich_native_vanadium/${rock}`,
                    `kubejs:ore/normal_native_vanadium/${rock}`,
                    `kubejs:ore/poor_native_vanadium/${rock}`,
                ]
            )
        })
    })
});

const loose = [
    'andesite',
    'basalt',
    'chalk',
    'chert',
    'claystone',
    'conglomerate',
    'dacite',
    'diorite',
    'dolomite',
    'gabbro',
    'gneiss',
    'granite',
    'limestone',
    'marble',
    'phyllite',
    'quartzite',
    'rhyolite',
    'schist',
    'shale',
    'slate'
];
ServerEvents.tags("item", event => {
    loose.forEach(loose => {
        event.add('supplementaries:throwable_bricks',
            [
                `tfc:brick/${loose}`
            ]
        )
    })
});
ServerEvents.tags("block", event => {

    event.add('create_compatible_storage:silent_mounted_storage',
        [
            "ae2:smooth_sky_stone_chest",
            "immersiveengineering:crate",
            "immersiveengineering:reinforced_crate"
        ]
    )
    event.add('tfc:toughness_1', 'kubejs:copper_support') // 铜
    event.add('tfc:toughness_1', 'kubejs:copper_support_horizontal')
    event.add('tfc:toughness_1', 'kubejs:bismuth_bronze_support') // 铋铜
    event.add('tfc:toughness_1', 'kubejs:bismuth_bronze_support_horizontal')
    event.add('tfc:toughness_1', 'kubejs:bronze_support') // 青铜
    event.add('tfc:toughness_1', 'kubejs:bronze_support_horizontal')
    event.add('tfc:toughness_1', 'kubejs:black_bronze_support') // 黑铜
    event.add('tfc:toughness_1', 'kubejs:black_bronze_support_horizontal')
    event.add('tfc:toughness_2', 'kubejs:cast_iron_support') // 铸铁
    event.add('tfc:toughness_2', 'kubejs:cast_iron_support_horizontal')
    event.add('tfc:toughness_2', 'kubejs:wrought_iron_support') // 锻铁
    event.add('tfc:toughness_2', 'kubejs:wrought_iron_support_horizontal')
    event.add('tfc:toughness_2', 'kubejs:steel_support') // 钢
    event.add('tfc:toughness_2', 'kubejs:steel_support_horizontal')
    event.add('tfc:toughness_3', 'kubejs:black_steel_support') // 高锰钢
    event.add('tfc:toughness_3', 'kubejs:black_steel_support_horizontal')
    event.add('tfc:toughness_3', 'kubejs:galvanized_steel_support') // 镀锌方钢
    event.add('tfc:toughness_3', 'kubejs:galvanized_steel_support_horizontal')
    event.add('tfc:toughness_3', 'kubejs:red_steel_support') // 精金
    event.add('tfc:toughness_3', 'kubejs:red_steel_support_horizontal')
    event.add('tfc:toughness_3', 'kubejs:blue_steel_support') // 秘银
    event.add('tfc:toughness_3', 'kubejs:blue_steel_support_horizontal')
    event.add('tfc:forge_invisible_whitelist', 'createmetallurgy:foundry_basin')//铸造盆    
    event.add('tfc:forge_invisible_whitelist', 'createmetallurgy:industrial_crucible')//工业坩埚
    event.add('create:chest_mounted_storage',
        [
            "afc:wood/chest/baobab",
            "afc:wood/chest/eucalyptus",
            "afc:wood/chest/mahogany",
            "afc:wood/chest/hevea",
            "afc:wood/chest/tualang",
            "afc:wood/chest/teak",
            "afc:wood/chest/cypress",
            "afc:wood/chest/fig",
            "afc:wood/chest/ironwood",
            "afc:wood/chest/ipe",
            "tfc:wood/chest/acacia",
            "tfc:wood/chest/ash",
            "tfc:wood/chest/aspen",
            "tfc:wood/chest/birch",
            "tfc:wood/chest/blackwood",
            "tfc:wood/chest/chestnut",
            "tfc:wood/chest/douglas_fir",
            "tfc:wood/chest/hickory",
            "tfc:wood/chest/kapok",
            "tfc:wood/chest/sycamore",
            "tfc:wood/chest/spruce",
            "tfc:wood/chest/sequoia",
            "tfc:wood/chest/rosewood",
            "tfc:wood/chest/pine",
            "tfc:wood/chest/palm",
            "tfc:wood/chest/oak",
            "tfc:wood/chest/maple",
            "tfc:wood/chest/mangrove",
            "tfc:wood/chest/white_cedar",
            "tfc:wood/chest/willow",
            "afc:wood/trapped_chest/baobab",
            "afc:wood/trapped_chest/eucalyptus",
            "afc:wood/trapped_chest/mahogany",
            "afc:wood/trapped_chest/hevea",
            "afc:wood/trapped_chest/tualang",
            "afc:wood/trapped_chest/teak",
            "afc:wood/trapped_chest/cypress",
            "afc:wood/trapped_chest/fig",
            "afc:wood/trapped_chest/ironwood",
            "afc:wood/trapped_chest/ipe",
            "tfc:wood/trapped_chest/acacia",
            "tfc:wood/trapped_chest/ash",
            "tfc:wood/trapped_chest/aspen",
            "tfc:wood/trapped_chest/birch",
            "tfc:wood/trapped_chest/blackwood",
            "tfc:wood/trapped_chest/trapped_chestnut",
            "tfc:wood/trapped_chest/douglas_fir",
            "tfc:wood/trapped_chest/hickory",
            "tfc:wood/trapped_chest/kapok",
            "tfc:wood/trapped_chest/sycamore",
            "tfc:wood/trapped_chest/spruce",
            "tfc:wood/trapped_chest/sequoia",
            "tfc:wood/trapped_chest/rosewood",
            "tfc:wood/trapped_chest/pine",
            "tfc:wood/trapped_chest/palm",
            "tfc:wood/trapped_chest/oak",
            "tfc:wood/trapped_chest/maple",
            "tfc:wood/trapped_chest/mangrove",
            "tfc:wood/trapped_chest/white_cedar",
            "tfc:wood/trapped_chest/willow"
        ]
    ),
        event.add('tfc:bloomery_insulation','tfc:charcoal_pile' ),
        event.add('tfc:forge_insulation','tfc:charcoal_pile' ),
        event.add('tfc:bloomery_insulation','tfc:charcoal_forge' ),
        event.add('tfc:forge_insulation','tfc:charcoal_forge' ),

        event.add('minecraft:mineable/axe','simplytents:tent_roof_block' ),
        event.add('tfc:needs_copper_tool','simplytents:tent_roof_block' )
}),
    /*
    ,
    
                    
    */
    ServerEvents.tags("fluid", event => {


        event.add('kubejs:petroleum_gas', 'kubejs:petroleum_gas')
    }),
    ServerEvents.tags("item", event => {
        /*
        //合理的种子物品
        event.add('tfc:small_fishing_bait',
            [
                "tfc:seeds/wheat",
                "tfc:seeds/barley",
                "tfc:seeds/oat",
                "tfc:seeds/rye",
                "tfc:seeds/maize",
                "tfc:seeds/rice",
                "tfc:seeds/beet",
                "tfc:seeds/cabbage",
                "tfc:seeds/carrot",
                "tfc:seeds/garlic",
                "tfc:seeds/green_bean",
                "tfc:seeds/red_bell_pepper",
                "tfc:seeds/yellow_bell_pepper",
                "tfc:seeds/melon",
                "tfc:crop/horsetail_seeds",
                "tfc:seeds/onion",
                "tfc:seeds/soybean",
                "tfc:seeds/squash",
                "tfc:seeds/sugarcane",
                "tfc:seeds/tomato",
                "tfc:seeds/jute",
                "tfc:seeds/papyrus",
                "tfc:seeds/pumpkin",
                "tfc:crop/hops_seeds",
                "tfc:crop/marigold_seeds",
                "tfc:crop/trillium_seeds",
                "tfc:crop/labrador_tea_seeds",
                "tfc:crop/red_palm_seeds"
            ])*/
        //可以夹三明治的小吃
        event.add('tfc:foods/usable_in_sandwich',
            [
                "#forge:cooked_eggs",
            ])

        event.add('forge:tools/tridents',
            [
                "alexscaves:limestone_spear",
                "alexscaves:extinction_spear",
                "alexscaves:frostmint_spear",
                "kubejs:rock_tool/diamond_javelin",
                "kubejs:rock_tool/obsidian_javelin",
                "kubejs:rock_tool/flint_javelin",
                "tfc:stone/javelin/igneous_extrusive",
                "tfc:stone/javelin/igneous_intrusive",
                "tfc:stone/javelin/metamorphic",
                "tfc:stone/javelin/sedimentary",
                "tfc:metal/javelin/bismuth_bronze",
                "tfc:metal/javelin/black_bronze",
                "tfc:metal/javelin/bronze",
                "tfc:metal/javelin/copper",
                "tfc:metal/javelin/wrought_iron",
                "tfc:metal/javelin/steel",
                "tfc:metal/javelin/black_steel",
                "tfc:metal/javelin/blue_steel",
                "tfc:metal/javelin/red_steel",
                "spartanweaponry:wooden_javelin",
                "spartanweaponry:stone_javelin",
                "spartanweaponry:golden_javelin",
                "spartanweaponry:netherite_javelin",
                "spartanweaponry:tin_javelin",
                "spartanweaponry:silver_javelin",
                "spartanweaponry:electrum_javelin",
                "spartanweaponry:lead_javelin",
                "spartanweaponry:nickel_javelin",
                "spartanweaponry:invar_javelin",
                "spartanweaponry:constantan_javelin",
                "spartanweaponry:platinum_javelin",
                "spartanweaponry:aluminum_javelin",
                "kubejs:copper_javelin",
                "kubejs:wrought_iron_javelin",
                "kubejs:steel_javelin",
                "kubejs:bismuth_bronze_javelin",
                "kubejs:black_bronze_javelin",
                "kubejs:bronze_javelin",
                "kubejs:black_steel_javelin",
                "kubejs:blue_steel_javelin",
                "kubejs:red_steel_javelin"
            ])

        event.add('forge:tools/hammers', '#tfc:hammers')

        const metals = [
            'bismuth_bronze',
            'black_bronze',
            'bronze',
            'copper',
            'wrought_iron',
            'steel',
            'black_steel',
            'blue_steel',
            'red_steel',
            'cast_iron',
            'gold',
            'rose_gold',
            'brass',
            'bismuth',
            'silver',
            'sterling_silver',
            'nickel',
            'chromium',
            'zinc',
            'stainless_steel'
        ];
        const metalsinf = [
            'black_steel',
            'blue_steel',
            'red_steel'
        ];
        metalsinf.forEach(metal => {
            event.add('kubejs:inf_tongs', `kubejs:${metal}_tong`)
            event.add('kubejs:tongs', `kubejs:${metal}_tong`)
            event.add('kubejs:hot_items', `tfc:bucket/metal/${metal}`)
        }
        )
        metals.forEach(metal => {
            event.add('kubejs:tongs', `kubejs:${metal}_tong`)
            event.add('kubejs:hot_items', `tfc:bucket/metal/${metal}`)
        }
        )

        event.add('tfcscraping:quarter_scraping', 'butcher:boneskinningknife')
        event.add('tfc:usable_on_tool_rack', 'butcher:boneskinningknife')
        event.add('tfc:sharp_tools', 'butcher:boneskinningknife')

        event.add('tfc_farm_charm:raw_dough', 'tfc_farm_charm:unfinished_croissant')
        event.add('tfc_farm_charm:raw_dough', 'tfc_farm_charm:unfinished_braided_bread')
        event.add('tfc_farm_charm:bread', '#tfc:foods/breads')

        event.add('kubejs:tongs', 'create:extendo_grip')//机械臂

        event.add('kubejs:shaft', 'create:shaft')//机械臂

        event.add('kubejs:wild_mushroom', 'kubejs:wild_red_mushroom')//野生红蘑菇
        event.add('kubejs:wild_mushroom', 'kubejs:wild_brown_mushroom')//野生棕蘑菇

        event.add('firmalife:oven_fuel', 'kubejs:wood_briquette')
        event.add('firmalife:smoking_fuel', 'kubejs:wood_briquette')
        event.add('tfc:firepit_fuel', 'kubejs:wood_briquette')

        event.add('kubejs:dust_brick_copper', 'kubejs:item/ore/dust_brick/malachite')
        event.add('kubejs:dust_brick_copper', 'kubejs:item/ore/dust_brick/tetrahedrite')
        event.add('kubejs:dust_brick_copper', 'kubejs:item/ore/dust_brick/native_copper')
        event.add('kubejs:dust_brick_iron', 'kubejs:item/ore/dust_brick/magnetite')
        event.add('kubejs:dust_brick_iron', 'kubejs:item/ore/dust_brick/hematite')
        event.add('kubejs:dust_brick_iron', 'kubejs:item/ore/dust_brick/limonite')

        event.add('kubejs:red_mushroom', 'minecraft:red_mushroom')
        event.add('kubejs:red_mushroom', 'wildfire:cooked_red_mushroom')
        event.add('kubejs:brown_mushroom', 'minecraft:brown_mushroom')
        event.add('kubejs:brown_mushroom', 'wildfire:cooked_brown_mushroom')
        event.add('farmersdelight:cabbage_roll_ingredients', 'wildfire:cooked_red_mushroom')
        event.add('farmersdelight:cabbage_roll_ingredients', 'wildfire:cooked_brown_mushroom')
        event.add('farmersdelight:cabbage_roll_ingredients', 'wildfire:rat')
        event.add('farmersdelight:cabbage_roll_ingredients', 'wildfire:cooked_rat')
        event.add('brewinandchewin:pizza_toppings', 'wildfire:cooked_red_mushroom')
        event.add('brewinandchewin:pizza_toppings', 'wildfire:cooked_brown_mushroom')

        event.add('tfc:foods/vegetables', 'wildfire:cooked_red_mushroom')
        event.add('tfc:foods/vegetables', 'wildfire:cooked_brown_mushroom')

        event.add('tfc:foods/meats', 'wildfire:thick_meat')
        event.add('tfc:foods/meats', 'wildfire:cooked_thick_meat')
        event.add('tfc:foods/meats', 'wildfire:snake')
        event.add('tfc:foods/meats', 'wildfire:cooked_snake')
        event.add('tfc:foods/meats', 'wildfire:rat')
        event.add('tfc:foods/meats', 'wildfire:cooked_rat')

        event.add('tfc:foods/raw_meats', 'wildfire:thick_meat')
        event.add('tfc:foods/raw_meats', 'wildfire:snake')
        event.add('tfc:foods/raw_meats', 'wildfire:rat')

        event.add('tfc:foods/can_be_salted', 'wildfire:thick_meat')
        event.add('tfc:foods/can_be_salted', 'wildfire:snake')
        event.add('tfc:foods/can_be_salted', 'wildfire:rat')

        event.add('tfc:foods/usable_in_soup', 'wildfire:thick_meat')
        event.add('tfc:foods/usable_in_soup', 'wildfire:cooked_thick_meat')
        event.add('tfc:foods/usable_in_soup', 'wildfire:snake')
        event.add('tfc:foods/usable_in_soup', 'wildfire:cooked_snake')
        event.add('tfc:foods/usable_in_soup', 'wildfire:rat')
        event.add('tfc:foods/usable_in_soup', 'wildfire:cooked_rat')

        event.add('tfc:foods/usable_in_soup', 'minecraft:red_mushroom')

        event.add('tfc:foods/usable_in_soup', 'wildfire:cooked_red_mushroom')
        event.add('tfc:foods/usable_in_soup', 'wildfire:cooked_brown_mushroom')

        event.add('tfc:foods/cooked_meats', 'wildfire:cooked_thick_meat')
        event.add('tfc:foods/cooked_meats', 'wildfire:cooked_snake')
        event.add('tfc:foods/cooked_meats', 'wildfire:cooked_rat')

        event.add('tfc:foods', 'wildfire:thick_meat')
        event.add('tfc:foods', 'wildfire:cooked_thick_meat')
        event.add('tfc:foods', 'wildfire:snake')
        event.add('tfc:foods', 'wildfire:cooked_snake')

        event.add('loot:clean_cloth', 'tfc:wool_cloth')

        event.add('kubejs:peel',
            [
                "kubejs:peel",
                "kubejs:cast_iron_peel",
                "kubejs:stainless_steel_peel"
            ])
        event.add('firmalife:usable_on_oven',
            [
                "kubejs:peel",
                "kubejs:cast_iron_peel",
                "kubejs:stainless_steel_peel"
            ])
        event.add('kubejs:glue',
            [
                "tfc:glue",
                "minecraft:slime_ball"
            ])

        event.add('kubejs:ore/normal_ilmenite',
            [
                "tfc:ore/poor_ilmenite",
                "tfc:ore/normal_ilmenite",
                "tfc:ore/rich_ilmenite"
            ])
        event.add('kubejs:ore/normal_manganese',
            [
                "tfc:ore/poor_manganese",
                "tfc:ore/normal_manganese",
                "tfc:ore/rich_manganese"
            ])
        event.add('kubejs:ore/vanadium',
            [
                "tfc:ore/poor_vanadium",
                "tfc:ore/vanadium",
                "tfc:ore/rich_vanadium"
            ])

        //投掷砖块
        event.add('supplementaries:throwable_bricks',
            [
                `kubejs:rotten_meat`,
                `kubejs:rotten_fish`,
                `kubejs:rotten_vegetables`,
                `kubejs:rotten_fruit`,
                `kubejs:rot`,
                `tfc:mud_brick/loam`,
                `tfc:mud_brick/sandy_loam`,
                `tfc:mud_brick/silty_loam`,
                `tfc:mud_brick/silt`,
                `tfc:drying_bricks/loam`,
                `tfc:drying_bricks/sandy_loam`,
                `tfc:drying_bricks/silty_loam`,
                `tfc:drying_bricks/silt`,
                `tfc:alabaster_brick`,
                `tfc:ceramic/unfired_brick`,
                `tfc:ceramic/unfired_fire_brick`,
                `tfc:ceramic/fire_brick`
            ]
        )


        // 将手套加入进饰品tag
        event.add('kubejs:tongs', 'kubejs:wooden_tong')
        event.add('curios:hands', 'kubejs:glove')
        // 熔岩桶和熔融桶是烫手的物品
        event.add('kubejs:hot_items',
            [
                "kubejs:hot_raw_nickel_bloom",
                "kubejs:hot_raw_iron_bloom",
                'minecraft:lava_bucket',
                "firmalife:bucket/metal/chromium",
                "firmalife:bucket/metal/stainless_steel",
                "tfc_ie_addon:bucket/metal/electrum",
                "tfc_ie_addon:bucket/metal/constantan",
                "tfc_ie_addon:bucket/metal/aluminum",
                "tfc_ie_addon:bucket/metal/lead",
                "tfc_ie_addon:bucket/metal/uranium",
                "tfc:bucket/metal/bismuth",
                "tfc:bucket/metal/bismuth_bronze",
                "tfc:bucket/metal/black_bronze",
                "tfc:bucket/metal/bronze",
                "tfc:bucket/metal/brass",
                "tfc:bucket/metal/copper",
                "tfc:bucket/metal/gold",
                "tfc:bucket/metal/nickel",
                "tfc:bucket/metal/rose_gold",
                "tfc:bucket/metal/silver",
                "tfc:bucket/metal/tin",
                "tfc:bucket/metal/zinc",
                "tfc:bucket/metal/sterling_silver",
                "tfc:bucket/metal/weak_blue_steel",
                "tfc:bucket/metal/red_steel",
                "tfc:bucket/metal/weak_steel",
                "tfc:bucket/metal/blue_steel",
                "tfc:bucket/metal/black_steel",
                "tfc:bucket/metal/steel",
                "tfc:bucket/metal/pig_iron",
                "tfc:bucket/metal/cast_iron",
                "tfc:bucket/metal/wrought_iron",
                "tfc:bucket/metal/weak_red_steel",
                "tfc:bucket/metal/high_carbon_steel",
                "tfc:bucket/metal/high_carbon_black_steel",
                "tfc:bucket/metal/high_carbon_blue_steel",
                "tfc:bucket/metal/high_carbon_red_steel",
                "tfc:bucket/metal/unknown",
                "kubejs:molten_corundum_bucket",
                "kubejs:molten_glass_bucket",
                "survivorsaquaculture:bucket/metal/neptunian_steel",
                "survivorsaquaculture:bucket/metal/neptunium",
                "kubejs:molten_manganese_bucket",
                "kubejs:molten_titanium_bucket",
                "kubejs:molten_vanadium_bucket",
                "kubejs:molten_titanium_alloy_bucket"
            ])

        // 灼热的物品
        event.add('kubejs:hot_items',
            [
                "minecraft:magma_block",
                "alexscaves:primal_magma",
                "tfc:rock/magma/basalt",
                "tfc:rock/magma/granite",
                "tfc:rock/magma/diorite",
                "tfc:rock/magma/rhyolite",
                "tfc:rock/magma/andesite",
                "tfc:rock/magma/dacite",
                "alexscaves:volcanic_core",
                "scguns:vehement_coal_block",
                "scguns:vehement_coal"
            ])

        // 三锭
        event.add('kubejs:triple_ingot',
            [
                "kubejs:triple_copper",
                "kubejs:triple_bismuth_bronze",
                "kubejs:triple_black_bronze",
                "kubejs:triple_bronze",
                "kubejs:triple_black_steel",
                "kubejs:triple_blue_steel",
                "kubejs:triple_red_steel",
                "kubejs:triple_steel",
                "kubejs:triple_wrought_iron"
            ])

        //打火tag
        event.add('kubejs:flint',
            [
                "minecraft:flint_and_steel",
                "artisanal:stone/flint_and/pyrite",
                "artisanal:stone/flint_and/cut_pyrite",
                "artisanal:metal/flint_and/black_steel",
                "artisanal:metal/flint_and/blue_steel",
                "artisanal:metal/flint_and/red_steel",
                "createdieselgenerators:lighter"
            ])

        //可以制作草药的植物
        event.add('kubejs:can_make_herb',
            [
                "tfc:plant/canna",
                "tfc:plant/goldenrod",
                "tfc:plant/pampas_grass",
                "tfc:plant/allium",
                "tfc:plant/anthurium",
                "tfc:plant/blood_lily",
                "tfc:plant/blue_orchid",
                "tfc:plant/bur_reed",
                "tfc:plant/butterfly_milkweed",
                "tfc:plant/hibiscus",
                "tfc:plant/heliconia",
                "tfc:plant/guzmania",
                "tfc:plant/grape_hyacinth",
                "tfc:plant/foxglove",
                "tfc:plant/desert_flame",
                "tfc:plant/dandelion",
                "tfc:plant/black_orchid",
                "tfc:plant/houstonia",
                "tfc:plant/kangaroo_paw",
                "tfc:plant/labrador_tea",
                "tfc:plant/lady_fern",
                "tfc:plant/lily_of_the_valley",
                "tfc:plant/lilac",
                "tfc:plant/marigold",
                "tfc:plant/meads_milkweed",
                "tfc:plant/nasturtium",
                "tfc:plant/snapdragon_red",
                "tfc:plant/snapdragon_pink",
                "tfc:plant/primrose",
                "tfc:plant/poppy",
                "tfc:plant/sacred_datura",
                "tfc:plant/pickerelweed",
                "tfc:plant/rose",
                "tfc:plant/oxeye_daisy",
                "tfc:plant/pulsatilla",
                "tfc:plant/calendula",
                "tfc:plant/snapdragon_white",
                "tfc:plant/snapdragon_yellow",
                "tfc:plant/sapphire_tower",
                "tfc:plant/tulip_orange",
                "tfc:plant/tulip_pink",
                "tfc:plant/tulip_red",
                "tfc:plant/tulip_white",
                "tfc:plant/vriesea",
                "tfc:plant/water_canna",
                "minecraft:red_tulip",
                "minecraft:torchflower",
                "minecraft:cornflower",
                "minecraft:lily_of_the_valley",
                "minecraft:oxeye_daisy",
                "minecraft:pink_tulip",
                "minecraft:white_tulip",
                "minecraft:orange_tulip",
                "tfc:plant/yucca",
                "minecraft:azure_bluet",
                "minecraft:allium",
                "minecraft:blue_orchid",
                "minecraft:poppy",
                "minecraft:dandelion"

            ])

        //可以制作更好更多草药的植物
        event.add('kubejs:can_better_make_herb',
            [
                "kubejs:marigold",
                "kubejs:trillium",
                "kubejs:labrador_tea",
                "kubejs:horsetail",
                "tfc:plant/sea_lavender",
                "tfc:plant/strelitzia",
                "tfc:plant/trillium",
                "tfc:plant/blue_ginger",
                "tfc:plant/field_horsetail"

            ])
        //能制作风帆的材料
        event.add('kubejs:can_make_sail',
            [
                "textile:linen_cloth",
                "sns:reinforced_fabric",
                "tfc:burlap_cloth"

            ])

        //宝石原矿
        event.add('tfc:gem_ore',
            [
                "tfc:ore/amethyst",
                "tfc:ore/emerald",
                "tfc:ore/opal",
                "tfc:ore/pyrite",
                "tfc:ore/ruby",
                "tfc:ore/sapphire",
                "tfc:ore/topaz",
                "tfc:ore/lapis_lazuli",
                "tfc:ore/diamond"

            ])

        //森罗物语油脂
        event.add('kaleidoscope_cookery:oil',
            [
                "butcher:raw_pork_belly",
                "butcher:pork_belly",
                "firmalife:food/butter",
                "artisanal:animal_fat",
                "artisanal:suet",
                "artisanal:pork_fat",
                "artisanal:poultry_fat",
                "artisanal:bear_fat",
                "tfc:blubber"

            ])


        //可以作为杠杆锤的砧的砧
        event.add('vintageimprovements:anvils',
            [
                "irons_spellbooks:arcane_anvil",
                "tfc:metal/anvil/wrought_iron",
                "tfc:metal/anvil/bismuth_bronze",
                "tfc:metal/anvil/black_bronze",
                "tfc:metal/anvil/bronze",
                "tfc:metal/anvil/copper",
                "tfc:metal/anvil/red_steel",
                "tfc:metal/anvil/steel",
                "tfc:metal/anvil/black_steel",
                "tfc:metal/anvil/blue_steel",
                "tfc:rock/anvil/granite",
                "tfc:rock/anvil/dacite",
                "tfc:rock/anvil/diorite",
                "tfc:rock/anvil/gabbro",
                "tfc:rock/anvil/rhyolite",
                "tfc:rock/anvil/andesite",
                "tfc:rock/anvil/basalt"
            ])
        //给烂菜加堆肥tag
        event.add('tfc:compost_greens_high',
            [
                "kubejs:rotten_vegetables",
                "kubejs:rotten_fruit",
                "kubejs:rotten_fruit"
            ])
        //给烂肉加烂肥tag
        event.add('tfc:compost_poisons',
            [
                "kubejs:rotten_fish",
                "kubejs:rotten_meat",
                "kubejs:rotten_platter"
            ])

        event.add('sliceanddice:allowed_tools', '#minecraft:tools')
        //石墨铸模
        event.add('forge:graphite_molds',
            [
                "kubejs:graphite_mineral_prospector_head_mold",
                "kubejs:graphite_prospector_drill_head_mold",
                "kubejs:graphite_prospector_hammer_head_mold",
                "kubejs:graphite_excavator_head_mold",
                "kubejs:graphite_excavator_head_mold",
                "kubejs:graphite_sledgehammer_head_mold",
                "kubejs:graphite_hammer_head_mold",
                "kubejs:graphite_chisel_head_mold",
                "kubejs:graphite_propick_head_mold",
                "kubejs:graphite_scythe_blade_mold",
                "kubejs:graphite_saw_blade_mold",
                "kubejs:graphite_javelin_head_mold",
                "kubejs:graphite_mace_head_mold",
                "kubejs:graphite_sword_blade_mold",
                "kubejs:graphite_axe_head_mold",
                "kubejs:graphite_shovel_head_mold",
                "kubejs:graphite_pickaxe_head_mold",
                "kubejs:graphite_fish_hook_mold",
                "kubejs:graphite_hoe_head_mold",
                "kubejs:graphite_scraping_knife_blade_mold",
                "kubejs:graphite_circle_blade_mold"

            ])
        //磁力物品
        event.add('alexscaves:ferromagnetic_items',
            [
                "tfc:metal/shovel/wrought_iron",
                "tfc:metal/pickaxe/wrought_iron",
                "tfc:metal/axe/wrought_iron",
                "tfc:metal/hoe/wrought_iron",
                "tfc:metal/sword/wrought_iron",
                "tfc:metal/propick/wrought_iron",
                "tfc:metal/chisel/wrought_iron",
                "tfc:metal/hammer/wrought_iron",
                "tfc:metal/saw/wrought_iron",
                "tfc:metal/knife/wrought_iron",
                "tfc:metal/scythe/wrought_iron",
                "tfc:metal/javelin/wrought_iron",
                "tfc:metal/mace/wrought_iron",
                "tfc:metal/shears/wrought_iron",
                "tfc:metal/shield/wrought_iron",
                "tfc_hammer_time:metal/excavator/wrought_iron",
                "tfc_hammer_time:metal/sledgehammer/wrought_iron",
                "precisionprospecting:metal/prospector_hammer/wrought_iron",
                "precisionprospecting:metal/prospector_drill/wrought_iron",
                "precisionprospecting:metal/mineral_prospector/wrought_iron",
                "kubejs:wrought_iron_dagger",
                "kubejs:wrought_iron_parrying_dagger",
                "kubejs:wrought_iron_longsword",
                "kubejs:wrought_iron_katana",
                "kubejs:wrought_iron_saber",
                "kubejs:wrought_iron_rapier",
                "kubejs:wrought_iron_greatsword",
                "kubejs:wrought_iron_battle_hammer",
                "kubejs:wrought_iron_warhammer",
                "kubejs:wrought_iron_halberd",
                "kubejs:wrought_iron_pike",
                "kubejs:wrought_iron_lance",
                "kubejs:wrought_iron_throwing_knife",
                "kubejs:wrought_iron_tomahawk",
                "kubejs:wrought_iron_javelin",
                "kubejs:wrought_iron_boomerang",
                "kubejs:wrought_iron_battleaxe",
                "kubejs:wrought_iron_flanged_mace",
                "kubejs:wrought_iron_glaive",
                "kubejs:wrought_iron_quarterstaff",
                "kubejs:wrought_iron_scythe",
                "kubejs:wrought_iron_spear",
                "tfc:metal/shovel/steel",
                "tfc:metal/pickaxe/steel",
                "tfc:metal/axe/steel",
                "tfc:metal/hoe/steel",
                "tfc:metal/sword/steel",
                "tfc:metal/propick/steel",
                "tfc:metal/chisel/steel",
                "tfc:metal/hammer/steel",
                "tfc:metal/saw/steel",
                "tfc:metal/knife/steel",
                "tfc:metal/scythe/steel",
                "tfc:metal/javelin/steel",
                "tfc:metal/mace/steel",
                "tfc:metal/shears/steel",
                "tfc:metal/shield/steel",
                "tfc_hammer_time:metal/excavator/steel",
                "tfc_hammer_time:metal/sledgehammer/steel",
                "precisionprospecting:metal/prospector_hammer/steel",
                "precisionprospecting:metal/prospector_drill/steel",
                "precisionprospecting:metal/mineral_prospector/steel",
                "kubejs:steel_dagger",
                "kubejs:steel_parrying_dagger",
                "kubejs:steel_longsword",
                "kubejs:steel_katana",
                "kubejs:steel_saber",
                "kubejs:steel_rapier",
                "kubejs:steel_greatsword",
                "kubejs:steel_battle_hammer",
                "kubejs:steel_warhammer",
                "kubejs:steel_halberd",
                "kubejs:steel_pike",
                "kubejs:steel_lance",
                "kubejs:steel_throwing_knife",
                "kubejs:steel_tomahawk",
                "kubejs:steel_javelin",
                "kubejs:steel_boomerang",
                "kubejs:steel_battleaxe",
                "kubejs:steel_flanged_mace",
                "kubejs:steel_glaive",
                "kubejs:steel_quarterstaff",
                "kubejs:steel_scythe",
                "kubejs:steel_spear",
                "tfc:metal/shovel/black_steel",
                "tfc:metal/pickaxe/black_steel",
                "tfc:metal/axe/black_steel",
                "tfc:metal/hoe/black_steel",
                "tfc:metal/sword/black_steel",
                "tfc:metal/propick/black_steel",
                "tfc:metal/chisel/black_steel",
                "tfc:metal/hammer/black_steel",
                "tfc:metal/saw/black_steel",
                "tfc:metal/knife/black_steel",
                "tfc:metal/scythe/black_steel",
                "tfc:metal/javelin/black_steel",
                "tfc:metal/mace/black_steel",
                "tfc:metal/shears/black_steel",
                "tfc:metal/shield/black_steel",
                "tfc_hammer_time:metal/excavator/black_steel",
                "tfc_hammer_time:metal/sledgehammer/black_steel",
                "precisionprospecting:metal/prospector_hammer/black_steel",
                "precisionprospecting:metal/prospector_drill/black_steel",
                "precisionprospecting:metal/mineral_prospector/black_steel",
                "kubejs:black_steel_dagger",
                "kubejs:black_steel_parrying_dagger",
                "kubejs:black_steel_longsword",
                "kubejs:black_steel_katana",
                "kubejs:black_steel_saber",
                "kubejs:black_steel_rapier",
                "kubejs:black_steel_greatsword",
                "kubejs:black_steel_battle_hammer",
                "kubejs:black_steel_warhammer",
                "kubejs:black_steel_halberd",
                "kubejs:black_steel_pike",
                "kubejs:black_steel_lance",
                "kubejs:black_steel_throwing_knife",
                "kubejs:black_steel_tomahawk",
                "kubejs:black_steel_javelin",
                "kubejs:black_steel_boomerang",
                "kubejs:black_steel_battleaxe",
                "kubejs:black_steel_flanged_mace",
                "kubejs:black_steel_glaive",
                "kubejs:black_steel_quarterstaff",
                "kubejs:black_steel_scythe",
                "kubejs:black_steel_spear",
                "tfc:metal/shovel/blue_steel",
                "tfc:metal/pickaxe/blue_steel",
                "tfc:metal/axe/blue_steel",
                "tfc:metal/hoe/blue_steel",
                "tfc:metal/sword/blue_steel",
                "tfc:metal/propick/blue_steel",
                "tfc:metal/chisel/blue_steel",
                "tfc:metal/hammer/blue_steel",
                "tfc:metal/saw/blue_steel",
                "tfc:metal/knife/blue_steel",
                "tfc:metal/scythe/blue_steel",
                "tfc:metal/javelin/blue_steel",
                "tfc:metal/mace/blue_steel",
                "tfc:metal/shears/blue_steel",
                "tfc:metal/shield/blue_steel",
                "tfc_hammer_time:metal/excavator/blue_steel",
                "tfc_hammer_time:metal/sledgehammer/blue_steel",
                "precisionprospecting:metal/prospector_hammer/blue_steel",
                "precisionprospecting:metal/prospector_drill/blue_steel",
                "precisionprospecting:metal/mineral_prospector/blue_steel",
                "kubejs:blue_steel_dagger",
                "kubejs:blue_steel_parrying_dagger",
                "kubejs:blue_steel_longsword",
                "kubejs:blue_steel_katana",
                "kubejs:blue_steel_saber",
                "kubejs:blue_steel_rapier",
                "kubejs:blue_steel_greatsword",
                "kubejs:blue_steel_battle_hammer",
                "kubejs:blue_steel_warhammer",
                "kubejs:blue_steel_halberd",
                "kubejs:blue_steel_pike",
                "kubejs:blue_steel_lance",
                "kubejs:blue_steel_throwing_knife",
                "kubejs:blue_steel_tomahawk",
                "kubejs:blue_steel_javelin",
                "kubejs:blue_steel_boomerang",
                "kubejs:blue_steel_battleaxe",
                "kubejs:blue_steel_flanged_mace",
                "kubejs:blue_steel_glaive",
                "kubejs:blue_steel_quarterstaff",
                "kubejs:blue_steel_scythe",
                "kubejs:blue_steel_spear",
                "tfc:metal/shovel/red_steel",
                "tfc:metal/pickaxe/red_steel",
                "tfc:metal/axe/red_steel",
                "tfc:metal/hoe/red_steel",
                "tfc:metal/sword/red_steel",
                "tfc:metal/propick/red_steel",
                "tfc:metal/chisel/red_steel",
                "tfc:metal/hammer/red_steel",
                "tfc:metal/saw/red_steel",
                "tfc:metal/knife/red_steel",
                "tfc:metal/scythe/red_steel",
                "tfc:metal/javelin/red_steel",
                "tfc:metal/mace/red_steel",
                "tfc:metal/shears/red_steel",
                "tfc:metal/shield/red_steel",
                "tfc_hammer_time:metal/excavator/red_steel",
                "tfc_hammer_time:metal/sledgehammer/red_steel",
                "precisionprospecting:metal/prospector_hammer/red_steel",
                "precisionprospecting:metal/prospector_drill/red_steel",
                "precisionprospecting:metal/mineral_prospector/red_steel",
                "kubejs:red_steel_dagger",
                "kubejs:red_steel_parrying_dagger",
                "kubejs:red_steel_longsword",
                "kubejs:red_steel_katana",
                "kubejs:red_steel_saber",
                "kubejs:red_steel_rapier",
                "kubejs:red_steel_greatsword",
                "kubejs:red_steel_battle_hammer",
                "kubejs:red_steel_warhammer",
                "kubejs:red_steel_halberd",
                "kubejs:red_steel_pike",
                "kubejs:red_steel_lance",
                "kubejs:red_steel_throwing_knife",
                "kubejs:red_steel_tomahawk",
                "kubejs:red_steel_javelin",
                "kubejs:red_steel_boomerang",
                "kubejs:red_steel_battleaxe",
                "kubejs:red_steel_flanged_mace",
                "kubejs:red_steel_glaive",
                "kubejs:red_steel_quarterstaff",
                "kubejs:red_steel_scythe",
                "kubejs:red_steel_spear"
            ])

    })


ServerEvents.tags("item", event => {
    //删除tag
    event.remove('tfc:lumber', 'tfc_ie_addon:treated_wood_lumber'
    ),

        event.remove('tfcchannelcasting:accepted_in_mold_table', [
            'tfcscraping:ceramic/scraping_knife_blade_mold',
            'tfc:ceramic/javelin_head_mold',
            'tfc:ceramic/shovel_head_mold',
            'tfc:ceramic/hoe_head_mold',
            'tfc:ceramic/hammer_head_mold',
            'tfc:ceramic/axe_head_mold',
            'tfc:ceramic/pickaxe_head_mold',
            'tfc:ceramic/saw_blade_mold',
            'tfc:ceramic/propick_head_mold',
            'tfc:ceramic/chisel_head_mold',
            'tfcscraping:ceramic/scraping_knife_blade_mold',
            'tfc:ceramic/scythe_blade_mold',
            'tfc:ceramic/knife_blade_mold',
            'tfc:ceramic/mace_head_mold'
        ]
        ),

        event.remove('sns:allowed_in_ore_sack', [
            "tfc:ore/rich_cassiterite",
            "tfc:ore/rich_native_silver",
            "tfc:ore/rich_hematite",
            "tfc:ore/rich_native_gold",
            "tfc:ore/rich_native_copper",
            "tfc_ie_addon:ore/rich_uraninite",
            "tfc_ie_addon:ore/rich_galena",
            "tfc_ie_addon:ore/rich_bauxite",
            "firmalife:ore/rich_chromite",
            "tfc:ore/rich_bismuthinite",
            "tfc:ore/rich_garnierite",
            "tfc:ore/rich_malachite",
            "tfc:ore/rich_magnetite",
            "tfc:ore/rich_limonite",
            "tfc:ore/rich_sphalerite",
            "tfc:ore/rich_tetrahedrite",
        ])
    //删除ie坚韧布料tag
    event.remove('forge:fabric_hemp', [
        "tfc:burlap_cloth",
        "immersiveengineering:hemp_fabric"
    ])
    event.add('forge:fabric_hemp', [
        "sns:reinforced_fabric",
    ]);

    //删除一些没用的配方tag
    //柴油动力的锤子
    event.remove('immersiveengineering:tools/hammers', [
        "createdieselgenerators:hammer"
    ])
    //金属线
    event.remove('forge:wires', [
        "vintageimprovements:aluminum_wire",
        "vintageimprovements:andesite_wire",
        "vintageimprovements:brass_wire",
        "vintageimprovements:bronze_wire",
        "vintageimprovements:calorite_wire",
        "vintageimprovements:cast_iron_wire",
        "vintageimprovements:constantan_wire",
        "vintageimprovements:desh_wire",
        "vintageimprovements:lead_wire",
        "vintageimprovements:netherite_wire",
        "vintageimprovements:nickel_wire",
        "vintageimprovements:ostrum_wire",
        "vintageimprovements:rose_gold_wire",
        "vintageimprovements:silver_wire",
        "vintageimprovements:steel_wire",
        "vintageimprovements:tin_wire",
        "vintageimprovements:vanadium_wire",
        "vintageimprovements:zinc_wire",
        "vintageimprovements:amethyst_bronze_wire",
        "vintageimprovements:cobalt_wire",
        "vintageimprovements:enderium_wire",
        "vintageimprovements:hepatizon_wire",
        "vintageimprovements:invar_wire",
        "vintageimprovements:lumium_wire",
        "vintageimprovements:manyullyn_wire",
        "vintageimprovements:osmium_wire",
        "vintageimprovements:palladium_wire",
        "vintageimprovements:pig_iron_wire",
        "vintageimprovements:platinum_wire",
        "vintageimprovements:pure_gold_wire",
        "vintageimprovements:refined_glowstone_wire",
        "vintageimprovements:refined_obsidian_wire",
        "vintageimprovements:rhodium_wire",
        "vintageimprovements:signalum_wire",
        "vintageimprovements:uranium_wire",
        "vintageimprovements:refined_radiance_wire",
        "vintageimprovements:ironwood_wire",
        "vintageimprovements:knightmetal_wire",
        "vintageimprovements:queens_slime_wire",
        "vintageimprovements:slimesteel_wire",
        "vintageimprovements:fiery_wire",
        "vintageimprovements:shadow_steel_wire",
        "vintageimprovements:nethersteel_wire",
        "vintageimprovements:aluminum_wire"
    ])
    /*
    
    //删除群峦的箱子tag
    const remove_tag = [
        'forge:chests',
        'forge:chests/wooden',
        'create:chests',
        'handcraft:chests',
        'balm:wooden_chests',
    ];
    remove_tag.forEach((tag) => {
        event.remove(
            `${tag}`,
            [
                "afc:wood/chest/baobab",
                "afc:wood/chest/eucalyptus",
                "afc:wood/chest/mahogany",
                "afc:wood/chest/hevea",
                "afc:wood/chest/tualang",
                "createutilities:void_chest",
                "lootr:lootr_trapped_chest",
                "afc:wood/chest/teak",
                "afc:wood/chest/cypress",
                "afc:wood/chest/fig",
                "afc:wood/chest/ironwood",
                "afc:wood/chest/ipe",
                "tfc:wood/chest/acacia",
                "tfc:wood/chest/ash",
                "tfc:wood/chest/aspen",
                "tfc:wood/chest/birch",
                "tfc:wood/chest/blackwood",
                "tfc:wood/chest/chestnut",
                "tfc:wood/chest/douglas_fir",
                "tfc:wood/chest/hickory",
                "tfc:wood/chest/kapok",
                "tfc:wood/chest/sycamore",
                "tfc:wood/chest/spruce",
                "tfc:wood/chest/sequoia",
                "tfc:wood/chest/rosewood",
                "tfc:wood/chest/pine",
                "tfc:wood/chest/palm",
                "tfc:wood/chest/oak",
                "tfc:wood/chest/maple",
                "tfc:wood/chest/mangrove",
                "tfc:wood/chest/white_cedar",
                "tfc:wood/chest/willow"
            ])
    })
    const add_tag = [
        'forge:chests/wooden',
    ];

    add_tag.forEach((tag) => {
        event.add(
            `${tag}`,
            [
                "afc:wood/chest/baobab",
                "afc:wood/chest/eucalyptus",
                "afc:wood/chest/mahogany",
                "afc:wood/chest/hevea",
                "afc:wood/chest/tualang",
                "createutilities:void_chest",
                "lootr:lootr_trapped_chest",
                "afc:wood/chest/teak",
                "afc:wood/chest/cypress",
                "afc:wood/chest/fig",
                "afc:wood/chest/ironwood",
                "afc:wood/chest/ipe",
                "tfc:wood/chest/acacia",
                "tfc:wood/chest/ash",
                "tfc:wood/chest/aspen",
                "tfc:wood/chest/birch",
                "tfc:wood/chest/blackwood",
                "tfc:wood/chest/chestnut",
                "tfc:wood/chest/douglas_fir",
                "tfc:wood/chest/hickory",
                "tfc:wood/chest/kapok",
                "tfc:wood/chest/sycamore",
                "tfc:wood/chest/spruce",
                "tfc:wood/chest/sequoia",
                "tfc:wood/chest/rosewood",
                "tfc:wood/chest/pine",
                "tfc:wood/chest/palm",
                "tfc:wood/chest/oak",
                "tfc:wood/chest/maple",
                "tfc:wood/chest/mangrove",
                "tfc:wood/chest/white_cedar",
                "tfc:wood/chest/willow"
            ])
    })
            */

})
const registerAsticorCartsItemTags = (event) => {

    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerAsticorCartsBlockTags = (event) => {

    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}