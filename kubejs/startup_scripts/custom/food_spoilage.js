NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.FoodRottenEvent"),/**@param {Internal.FoodRottenEvent} event*/ event => {
 if (event.getItemStack().getItem().id == "tfc:food/beef") {
        event.setItemStack('tfc:wood/encased_axle/birch')
    }/*
    const rotten_meat = [
        'tfc:food/hyena', 'tfc:food/duck', 'tfc:food/chevon', 'tfc:food/gran_feline',
        'tfc:food/camelidae', 'tfc:food/cooked_beef', 'tfc:food/cooked_pork',
        'tfc:food/cooked_chicken', 'tfc:food/cooked_quail', 'farmersdelight:minced_beef',
        'minecraft:rotten_flesh', 'minecraft:cooked_rabbit', 'minecraft:rabbit',
        'minecraft:cooked_chicken', 'minecraft:chicken', 'minecraft:cooked_mutton',
        'minecraft:mutton', 'minecraft:beef', 'tfc:food/bear', 'tfc:food/mutton',
        'tfc:food/quail', 'tfc:food/chicken', 'tfc:food/pork', 'tfc:food/beef',
        'farmersdelight:cooked_chicken_cuts', 'farmersdelight:chicken_cuts',
        'farmersdelight:beef_patty', 'tfc:food/fox', 'tfc:food/rabbit', 'tfc:food/wolf',
        'tfc:food/venison', 'tfc:food/peafowl', 'tfc:food/turkey', 'tfc:food/grouse',
        'tfc:food/pheasant', 'tfc:food/horse_meat', 'butcher:rawfoxmeat',
        'butcher:villager_meat', 'butcher:cooked_villager_meat', 'butcher:hoglinmeat',
        'butcher:cookedhoglinmeat', 'butcher:turtle_meat', 'butcher:cookedturtlemeat',
        'butcher:batmeat', 'butcher:cookedbatmeat', 'tfc:food/cooked_wolf',
        'tfc:food/cooked_venison', 'tfc:food/cooked_grouse', 'tfc:food/cooked_peafowl',
        'tfc:food/cooked_turkey', 'tfc:food/cooked_pheasant', 'tfc:food/cooked_horse_meat',
        'tfc:food/cooked_bear', 'tfc:food/cooked_mutton', 'tfc:food/cooked_rabbit',
        'tfc:food/cooked_fox', 'tfc:food/cooked_hyena', 'tfc:food/cooked_duck',
        'tfc:food/cooked_chevon', 'tfc:food/cooked_camelidae', 'tfc:food/cooked_gran_feline',
        'brewery:fried_chicken', 'butcher:raw_pork_belly', 'butcher:pork_belly',
        'butcher:raw_pork_shoulder', 'butcher:pork_shoulder', 'butcher:raw_pork_ham',
        'butcher:raw_chuck_steak', 'butcher:chuck_steak', 'butcher:raw_rump_steak',
        'butcher:rump_steak', 'butcher:raw_lamb_shoulder', 'alexscaves:dinosaur_nugget',
        'alexscaves:slam', 'alexsmobs:kangaroo_meat', 'alexsmobs:cooked_kangaroo_meat',
        'totemic:buffalo_meat', 'totemic:cooked_buffalo_meat', 'naturalist:venison',
        'naturalist:cooked_duck', 'butcher:foxmeat', 'butcher:rawllamameat',
        'butcher:rawpandameat', 'butcher:pandameat', 'butcher:rawbearmeat',
        'butcher:bearmeat', 'butcher:rawdolphinmeat', 'butcher:dolphinmeat',
        'butcher:mincedbeef', 'butcher:camelmeat', 'butcher:rawcamelmeat',
        'butcher:elder_meat', 'butcher:raweldermeat', 'butcher:cooked_dragon_meat',
        'butcher:rawdragonmeat', 'butcher:cookedmincedlamb', 'butcher:mincedlamb',
        'butcher:cookedmincebeef', 'butcher:rawcreepermeat', 'butcher:creepermeat',
        'butcher:pillagermeat', 'butcher:cookedpillagermeat', 'butcher:humanflesh',
        'butcher:humanmeat', 'butcher:cookedhumanmeat', 'naturalist:duck',
        'naturalist:cooked_venison', 'firmalife:food/bacon', 'firmalife:food/cooked_bacon',
        'tfc:food/frog_legs', 'tfc:food/calamari', 'tfc:food/shellfish',
        'tfc:food/cooked_calamari', 'tfc:food/cooked_shellfish', 'tfc:food/cooked_frog_legs'
    ];

    // 鱼类物品ID列表 → 腐烂后：kubejs:rotten_fish
    const rotten_fish = [
        'tfc:food/cooked_cod', 'tfc:food/cooked_tropical_fish', 'tfc:food/cooked_bluegill',
        'tfc:food/cooked_crappie', 'tfc:food/cooked_lake_trout', 'tfc:food/cooked_largemouth_bass',
        'tfc:food/cooked_rainbow_trout', 'tfc:food/cooked_salmon', 'tfc:food/cooked_smallmouth_bass',
        'tfc:food/smallmouth_bass', 'tfc:food/salmon', 'tfc:food/rainbow_trout',
        'tfc:food/largemouth_bass', 'tfc:food/lake_trout', 'tfc:food/crappie',
        'tfc:food/bluegill', 'tfc:food/tropical_fish', 'tfc:food/cod'
    ];

    // 蔬菜类物品ID列表 → 腐烂后：kubejs:rotten_vegetables
    const rotten_vegetables = [
        'tfc:food/dried_kelp', 'tfc:food/onion', 'tfc:food/green_bell_pepper',
        'tfc:food/green_bean', 'tfc:food/garlic', 'tfc:food/carrot',
        'tfc:food/cabbage', 'tfc:food/beet', 'tfc:plant/leafy_kelp',
        'tfc:plant/winged_kelp', 'tfc:food/dried_seaweed', 'tfc:food/yellow_bell_pepper',
        'tfc:food/fresh_seaweed', 'tfc:food/squash', 'tfc:food/sugarcane',
        'tfc:food/soybean', 'tfc:food/red_bell_pepper', 'tfc:food/baked_potato',
        'tfc:food/potato'
    ];

    // 水果类物品ID列表 → 腐烂后：kubejs:rot
    const rotten_fruits = [
        'tfc:food/plum', 'tfc:food/red_apple', 'tfc:food/pumpkin_chunks',
        'tfc:food/melon_slice', 'tfc:food/tomato', 'tfc:food/cattail_root',
        'tfc:food/taro_root', 'tfc:food/snowberry', 'tfc:food/raspberry',
        'tfc:food/gooseberry', 'tfc:food/elderberry', 'tfc:food/cranberry',
        'tfc:food/cloudberry', 'tfc:food/bunchberry', 'tfc:food/blueberry',
        'tfc:food/blackberry', 'tfc:food/peach', 'tfc:food/orange',
        'tfc:food/olive', 'tfc:food/lemon', 'tfc:food/green_apple',
        'tfc:food/cherry', 'tfc:food/banana', 'tfc:food/wintergreen_berry',
        'tfc:food/strawberry'
    ];

    // 谷物类物品ID列表 → 腐烂后：kubejs:rot
    const rotten_grains = [
        'tfc:food/maize_flour', 'tfc:food/maize_dough', 'tfc:food/maize_grain',
        'tfc:food/maize', 'tfc:food/barley_flour', 'tfc:food/barley_dough',
        'tfc:food/barley_grain', 'tfc:food/barley', 'tfc:food/rye_dough',
        'tfc:food/rye_flour', 'tfc:food/rye_grain', 'tfc:food/rye',
        'tfc:food/oat_flour', 'tfc:food/oat_dough', 'tfc:food/oat_grain',
        'tfc:food/oat', 'tfc:food/wheat_dough', 'tfc:food/wheat_grain',
        'tfc:food/wheat', 'tfc:food/cooked_rice', 'tfc:food/rice_bread',
        'tfc:food/rice_flour', 'tfc:food/rice_dough', 'tfc:food/rice_grain',
        'tfc:food/rice', 'tfc:food/wheat_flour'
    ];

    // 加工食品类ID列表 → 腐烂后：kubejs:rotten_platter
    const rotten_processed_foods = [
        'firmalife:food/maize_slice', 'firmalife:food/rice_slice', 'firmalife:food/rye_slice',
        'firmalife:food/oat_flatbread', 'firmalife:food/wheat_flatbread', 'firmalife:food/barley_flatbread',
        'firmalife:food/rye_flatbread', 'tfc:food/rye_bread_jam_sandwich', 'tfc:food/rye_bread_sandwich',
        'tfc:food/oat_bread_jam_sandwich', 'tfc:food/oat_bread_sandwich', 'tfc:food/maize_bread_jam_sandwich',
        'tfc:food/maize_bread_sandwich', 'tfc:food/barley_bread_jam_sandwich', 'tfc:food/barley_bread_sandwich',
        'tfc:food/cheese', 'tfc:food/boiled_egg', 'tfc:food/cooked_egg',
        'tfc:food/wheat_bread_jam_sandwich', 'tfc:food/rice_bread_sandwich', 'tfc:food/rice_bread_jam_sandwich',
        'tfc:food/wheat_bread_sandwich', 'firmalife:food/barley_slice', 'firmalife:food/yak_curd',
        'firmalife:food/frothy_coconut', 'firmalife:food/tofu', 'firmalife:food/soy_mixture',
        'firmalife:food/goat_curd', 'firmalife:food/milk_curd', 'firmalife:food/oat_slice',
        'firmalife:food/wheat_slice', 'firmalife:food/rye_flatbread', 'firmalife:food/rice_flatbread',
        'firmalife:food/maize_flatbread', 'firmalife:food/dark_chocolate_blend', 'firmalife:food/milk_chocolate_blend',
        'firmalife:food/white_chocolate', 'firmalife:food/dark_chocolate', 'firmalife:food/milk_chocolate',
        'firmalife:food/cured_maize', 'firmalife:food/nixtamal', 'firmalife:food/masa_flour',
        'firmalife:food/masa', 'firmalife:food/toast_with_butter', 'firmalife:food/toast_with_jam',
        'firmalife:food/toast', 'firmalife:food/rye_dough', 'firmalife:food/rice_dough',
        'firmalife:food/maize_dough', 'firmalife:food/barley_dough', 'firmalife:food/wheat_dough',
        'firmalife:food/oat_dough', 'firmalife:food/pie_dough', 'firmalife:food/butter',
        'firmalife:food/shosha', 'firmalife:food/feta', 'firmalife:food/gouda',
        'firmalife:food/rajya_metok', 'firmalife:food/chevre', 'firmalife:food/cheddar',
        'firmalife:food/garlic_bread', 'firmalife:food/white_chocolate_blend', 'firmalife:food/cocoa_powder',
        'firmalife:food/cocoa_butter', 'firmalife:food/roasted_cocoa_beans', 'firmalife:food/cocoa_beans',
        'firmalife:food/pickled_egg', 'firmalife:food/shredded_cheese', 'firmalife:food/pizza_dough',
        'firmalife:food/pumpkin_pie_dough', 'firmalife:food/nachos', 'firmalife:food/smashed_red_grapes',
        'firmalife:food/smashed_white_grapes', 'firmalife:food/soybean_paste', 'firmalife:food/dehydrated_soybeans',
        'firmalife:food/filled_pie', 'firmalife:food/raw_pizza', 'firmalife:food/nightshade_berry',
        'firmalife:food/banana_split', 'firmalife:food/chocolate_ice_cream', 'firmalife:food/strawberry_ice_cream',
        'firmalife:food/vanilla_ice_cream', 'firmalife:food/salsa', 'firmalife:food/tomato_sauce_mix',
        'firmalife:food/tomato_sauce', 'firmalife:food/taco_shell', 'firmalife:food/corn_tortilla',
        'firmalife:food/chocolate_chip_cookie', 'firmalife:food/sugar_cookie', 'firmalife:food/chocolate_chip_cookie_dough',
        'firmalife:food/cookie_dough', 'firmalife:food/cooked_pie', 'firmalife:food/cooked_pizza',
        'firmalife:food/taco', 'firmalife:food/burrito', 'firmalife:food/cookie_dough_ice_cream',
        'firmalife:food/tortilla_chips', 'firmalife:food/raw_rice_noodles', 'firmalife:food/raw_egg_noodles',
        'firmalife:food/cooked_lasagna', 'firmalife:food/raw_lasagna', 'firmalife:food/hardtack_dough',
        'firmalife:food/hardtack', 'firmalife:food/futo_maki_roll', 'firmalife:food/maki_roll',
        'firmalife:food/fig', 'firmalife:food/pineapple', 'firmalife:food/red_grapes',
        'firmalife:food/white_grapes', 'artisanal:food/tomato_mash', 'artisanal:food/fruit_mash',
        'artisanal:food/carrot_mash', 'bsa:food/coarse_rye_flour', 'bsa:food/coarse_rice_flour',
        'bsa:food/coarse_oat_flour', 'bsa:food/coarse_maize_flour', 'bsa:food/coarse_barley_flour',
        'bsa:food/crushed_wheat_grain', 'bsa:food/crushed_rye_grain', 'bsa:food/crushed_oat_grain',
        'bsa:food/crushed_barley_grain', 'tfcchannelcasting:food/dark_chocolate_bell',
        'tfcchannelcasting:food/dark_chocolate_heart', 'tfcchannelcasting:food/milk_chocolate_knife',
        'tfcchannelcasting:food/milk_chocolate_bell', 'tfcchannelcasting:food/milk_chocolate_heart',
        'tfcchannelcasting:food/white_chocolate_knife', 'tfcchannelcasting:food/white_chocolate_bell',
        'tfcchannelcasting:food/white_chocolate_heart', 'bsa:food/coarse_wheat_flour',
        'artisanal:food/cleaned_sugarcane', 'tfcchannelcasting:food/dark_chocolate_knife'
    ];

    // 盘装食物ID列表 → 腐烂后：kubejs:rotten_platter
    const plated_food = [
        'tfc:food/dairy_salad', 'tfc:food/protein_salad', 'tfc:food/vegetables_salad',
        'tfc:food/fruit_salad', 'tfc:food/grain_salad', 'tfc:food/dairy_soup',
        'tfc:food/protein_soup', 'tfc:food/vegetables_soup', 'tfc:food/fruit_soup',
        'tfc:food/grain_soup'
    ];

    // 果酱罐ID列表 → 腐烂后：kubejs:rotten_jam
    const jar = [
        'tfc:jar/green_apple_unsealed', 'tfc:jar/lemon', 'tfc:jar/lemon_unsealed',
        'tfc:jar/olive', 'tfc:jar/olive_unsealed', 'tfc:jar/cloudberry_unsealed',
        'tfc:jar/cloudberry', 'tfc:jar/bunchberry_unsealed', 'tfc:jar/bunchberry',
        'tfc:jar/blueberry_unsealed', 'tfc:jar/blueberry', 'tfc:jar/blackberry_unsealed',
        'tfc:jar/blackberry', 'tfc:jar/raspberry_unsealed', 'tfc:jar/raspberry',
        'tfc:jar/gooseberry_unsealed', 'tfc:jar/gooseberry', 'tfc:jar/elderberry_unsealed',
        'tfc:jar/elderberry', 'tfc:jar/cranberry_unsealed', 'tfc:jar/cranberry',
        'tfc:jar/banana_unsealed', 'tfc:jar/banana', 'tfc:jar/wintergreen_berry_unsealed',
        'tfc:jar/wintergreen_berry', 'tfc:jar/strawberry_unsealed', 'tfc:jar/strawberry',
        'tfc:jar/snowberry_unsealed', 'tfc:jar/snowberry', 'tfc:jar/cherry',
        'tfc:jar/cherry_unsealed', 'tfc:jar/green_apple', 'tfc:jar/red_apple_unsealed',
        'tfc:jar/red_apple', 'tfc:jar/plum_unsealed', 'tfc:jar/plum',
        'tfc:jar/peach_unsealed', 'tfc:jar/peach', 'tfc:jar/orange_unsealed',
        'tfc:jar/orange', 'tfc:jar/melon_slice_unsealed', 'tfc:jar/melon_slice',
        'tfc:jar/pumpkin_chunks_unsealed', 'tfc:jar/pumpkin_chunks', 'firmalife:jar/fig',
        'firmalife:jar/pineapple', 'firmalife:jar/red_grapes', 'firmalife:jar/white_grapes',
        'firmalife:jar/fig_unsealed', 'firmalife:jar/pineapple_unsealed',
        'firmalife:jar/red_grapes_unsealed', 'firmalife:jar/white_grapes_unsealed'
    ];


    const rottenConfig = {};

    // 批量填充所有物品的腐烂映射关系
    rotten_meat.forEach(meatId => rottenConfig[meatId] = 'kubejs:rotten_meat');
    rotten_fish.forEach(fishId => rottenConfig[fishId] = 'kubejs:rotten_fish');
    rotten_vegetables.forEach(vegId => rottenConfig[vegId] = 'kubejs:rotten_vegetables');
    rotten_fruits.forEach(fruitId => rottenConfig[fruitId] = 'kubejs:rot');
    rotten_grains.forEach(grainId => rottenConfig[grainId] = 'kubejs:rot');
    rotten_processed_foods.forEach(procId => rottenConfig[procId] = 'kubejs:rotten_platter');
    plated_food.forEach(plateId => rottenConfig[plateId] = 'kubejs:rotten_platter');
    jar.forEach(jarId => rottenConfig[jarId] = 'kubejs:rotten_jam');

将以上所有的腐烂映射关系注册到事件中
例子：
   
*/
    
})