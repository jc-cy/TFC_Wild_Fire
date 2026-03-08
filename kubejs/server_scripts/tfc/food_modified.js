TFCEvents.data(event => {
  // 食物数据修改
  /**
   * 
   * @param {Internal.Ingredient} food 食物id
   * @param {number} [hunger] 饱食度
   * @param {number} [saturation] 饱和度
   * @param {number} [water] 水分,null为不修改,默认值为0
   * @param {number} [decayModifier] 腐烂速度(数值越大腐烂越快),null为不修改,默认值为1
   * @param {number} [protein] 蛋白质,null为不修改,默认值为0
   * @param {number} [fruit] 水果,null为不修改,默认值为0
   * @param {number} [grain] 谷物,null为不修改,默认值为0
   * @param {number} [vegetables] 蔬菜,null为不修改,默认值为0
   * @param {number} [dairy] 乳制品,null为不修改,默认值为0
   */
  let food_data = function (food, hunger, saturation, water, decayModifier, protein, fruit, grain, vegetables, dairy) {
    hunger = hunger || 4
    saturation = saturation || 0
    water = water || 0
    decayModifier = decayModifier || 1
    protein = protein || 0
    fruit = fruit || 0
    grain = grain || 0
    vegetables = vegetables || 0
    dairy = dairy || 0

    event.foodItem(food, f => {
      f.hunger(hunger)
      f.saturation(saturation / 5)
      f.water(water)
      f.decayModifier(decayModifier)
      f.protein(protein)
      f.fruit(fruit)
      f.grain(grain)
      f.vegetables(vegetables)
      f.dairy(dairy)
    })
  }

  const drink = [
    "vinery:red_grapejuice",
    "vinery:white_grapejuice",
    "vinery:red_taiga_grapejuice",
    "vinery:white_taiga_grapejuice",
    "vinery:red_jungle_grapejuice",
    "vinery:white_jungle_grapejuice",
    "vinery:red_savanna_grapejuice",
    "vinery:white_savanna_grapejuice",
    "vinery:noir_wine",
    "vinery:solaris_wine",
    "vinery:glowing_wine",
    "vinery:mellohi_wine",
    "vinery:apple_wine",
    "vinery:apple_cider",
    "vinery:mead",
    "vinery:apple_juice",
    "vinery:red_wine",
    "vinery:strad_wine",
    "vinery:cherry_wine",
    "vinery:cristel_wine",
    "vinery:creepers_crush",
    "vinery:kelp_cider",
    "vinery:lilitu_wine",
    "vinery:jo_special_mixture",
    "vinery:eiswein",
    "vinery:bottle_mojang_noir",
    "vinery:chenet_wine",
    "vinery:stal_wine",
    "vinery:magnetic_wine",
    "vinery:clark_wine",
    "vinery:villagers_fright",
    "vinery:chorus_wine",
    "vinery:bolvar_wine",
    "vinery:aegis_wine",
    "vinery:jellie_wine",
    "alexscaves:hot_chocolate_bottle",
    "alexscaves:purple_soda_bottle"

  ];
  drink.forEach(drink => {

    event.foodItem(drink, f => {
      f.water(20);
      f.decayModifier(0)
    })

    event.foodItem("farmersdelight:milk_bottle", f => { f.water(20); f.dairy(3); })
    event.foodItem("alexscaves:purple_soda_bottle", f => { f.water(20); })
    event.foodItem("alexscaves:hot_chocolate_bottle", f => { f.water(20); f.dairy(3); })
  })
  const butcher = [
    //格式{ id: "1111111111111", hunger: 11111111, saturation: 11111111, protein: 1111111111, decayModifier: 111111111 },//
    //==================================================//
    //==================================================//
    //大内脏类:生///饱食5、饱和3、蛋0.8/熟///饱食8、饱和7、蛋2
    { id: "butcher:endermanheart", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },
    { id: "butcher:heart", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },
    { id: "butcher:lungs", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },
    { id: "butcher:liver", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },
    { id: "butcher:endermanlungs", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },
    { id: "butcher:endermanliver", hunger: 5, saturation: 3, protein: 0.8, decayModifier: 5 },

    { id: "butcher:cookedlungs", hunger: 8, saturation: 7, protein: 2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedliver", hunger: 8, saturation: 7, protein: 2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedendermanlungs", hunger: 8, saturation: 7, protein: 2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedendermanliver", hunger: 8, saturation: 7, protein: 2, decayModifier: 5 * 0.8 },
    //小内脏类:生///饱食3、饱和0、蛋0.5/熟///饱食5、饱和3、蛋1.2
    { id: "butcher:kidney", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },
    { id: "butcher:stomach", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },
    { id: "butcher:intestines", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },
    { id: "butcher:endermankidney", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },
    { id: "butcher:endermanstomach", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },
    { id: "butcher:endermanintestines", hunger: 3, saturation: 0, protein: 0.5, decayModifier: 5 },

    { id: "butcher:cookedkidney", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedstomach", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedintestines", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedendermankidney", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedendermanstomach", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    { id: "butcher:cookedendermanintestines", hunger: 5, saturation: 3, protein: 1.2, decayModifier: 5 * 0.8 },
    //肉片/肉糜类:生///饱食3、饱和0、蛋0.7/熟///饱食5、饱和3、蛋1.3
    { id: "butcher:mincedbeef", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:mincedlamb", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:batmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:silverfishchunks", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawcatmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawocelotmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:cookedcyanaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:cookedblueexolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:cookedgoldaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:cookedlucyaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:cookedwildaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawblueaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawcyanaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawgoldaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawlucyaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },
    { id: "butcher:rawwildaxolotlmeat", hunger: 3, saturation: 0, protein: 0.7, decayModifier: 2 },

    { id: "butcher:cookedmincebeef", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedmincedlamb", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedbatmeat", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedsilverfishchunks", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedcatmeat", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedocelotmeat", hunger: 5, saturation: 3, protein: 1.3, decayModifier: 2 * 0.8 },
    //中肉类:生///饱食6、饱和4、蛋1.5/熟///饱食8、饱和10、蛋2.5
    { id: "butcher:raw_pork_loin", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_pork_shoulder", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_pork_ham", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_chuck_steak", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_rump_steak", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_sirloin_steak", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:rawlambloin", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:raw_lamb_sirloin", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:lambrib", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:rawstridermeat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:endermanmeat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:rawcreeperleg", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:rawcreepermeat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:sniffermeat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:rawpandameat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:hoglinmeat", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:sausages", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },
    { id: "butcher:bloodsausage", hunger: 6, saturation: 4, protein: 1.5, decayModifier: 2 },

    { id: "butcher:pork_loin", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:pork_shoulder", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:ham", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:chuck_steak", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:rump_steak", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:sirloin_steak", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:lamb_loin", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:lamb_sirloin", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cooked_lamb_rib", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedhoglinmeat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:pandameat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedsniffermeat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:creepermeat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:creeperleg", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedendermanmeat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedsausages", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedbloodsausage", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    { id: "butcher:cookedstridermeat", hunger: 8, saturation: 10, protein: 2.5, decayModifier: 2 * 0.8 },
    //大肉类:生///饱食8、饱和5、蛋2.0/熟///饱食12、饱和15、蛋3.5### 第一张
    { id: "butcher:raw_pork_leg", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },
    { id: "butcher:raw_pork_belly", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },
    { id: "butcher:raw_tbone_steak", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },
    { id: "butcher:raw_ribeye_steak", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },
    { id: "butcher:raw_leg_of_lamb", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },
    { id: "butcher:raw_lamb_shoulder", hunger: 8, saturation: 5, protein: 2, decayModifier: 2 },

    { id: "butcher:pork_belly", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    { id: "butcher:pork_leg", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    { id: "butcher:tbonesteak", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    { id: "butcher:rib_steak", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    { id: "butcher:leg_of_lamb", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    { id: "butcher:lamb_shoulder", hunger: 12, saturation: 15, protein: 3.5, decayModifier: 2 * 0.8 },
    //海产\两栖类:生///饱食4、饱和1、蛋1.3/熟///饱食6、饱和6、蛋2.1// 第一张
    { id: "butcher:frogsleg", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:gray_frog_leg", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:orange_frog_leg", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:spiderleg", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:cavespiderleg", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:rawsalmon", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:rawcodfillet", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:rawdolphinmeat", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:raweldermeat", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:rawshulkermeat", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:tentacle", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:glowtentacle", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:rawguardianmeat", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "butcher:shulkermeat", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "naturalist:catfish", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },
    { id: "naturalist:bass", hunger: 4, saturation: 1, protein: 1.3, decayModifier: 2 },

    { id: "butcher:cookedspiderleg", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cooked_green_frogs_leg", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cooked_gray_frog_leg", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cooked_orange_frog_leg", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cookedsalmon", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:codfillet", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:dolphinmeat", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:elder_meat", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cookedshulkermeat", hunger: 6, saturation: 1.8, protein: 1.8, decayModifier: 1 },
    { id: "butcher:calamari", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "butcher:cookedguardianmeat", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "naturalist:cooked_catfish", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    { id: "naturalist:cooked_bass", hunger: 6, saturation: 6, protein: 1.8, decayModifier: 1 },
    //恶肉类:生///饱食3、饱和0.2、蛋1.3/熟///饱食7、饱和3、蛋0.5
    { id: "butcher:humanflesh", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:humanmeat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:villager_meat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:pillagermeat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:rawevokermeat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:rawwitchmeat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },
    { id: "butcher:suspiciousmeat", hunger: 3, saturation: 0.2, protein: 0.2, decayModifier: 9 },

    { id: "butcher:cookedhumanmeat", hunger: 7, saturation: 3, protein: 0.5, decayModifier: 2 },
    { id: "butcher:cooked_villager_meat", hunger: 7, saturation: 3, protein: 0.5, decayModifier: 2 },
    { id: "butcher:cookedpillagermeat", hunger: 7, saturation: 3, protein: 0.5, decayModifier: 2 },
    { id: "butcher:cookedevokermeat", hunger: 7, saturation: 3, protein: 0.5, decayModifier: 2 },
    { id: "butcher:witchmeat", hunger: 7, saturation: 3, protein: 0.5, decayModifier: 2 },
    //特殊的肉
    { id: "butcher:porkscratchings", hunger: 7, saturation: 15, protein: 2, decayModifier: 1 },//猪油渣
    { id: "butcher:rawdragonmeat", hunger: 12, saturation: 8, protein: 5, decayModifier: 7 },//生龙肉
    { id: "butcher:cooked_dragon_meat", hunger: 18, saturation: 18, protein: 7, decayModifier: 4 },//龙肉
    //==================================================//
    //==================================================//
  ];

  butcher.forEach((meat) => {
    event.foodItem(`${meat.id}`, f => {
      f.hunger(meat.hunger / 5); f.saturation(meat.saturation / 5); f.protein(meat.protein); f.decayModifier(meat.decayModifier / 0.7);
    })
  });
  // 食物数据修改
  /**
   * 
   * @param {Internal.Ingredient} food 食物id
   * @param {number} [hunger] 饱食度
   * @param {number} [saturation] 饱和度
   * @param {number} [water] 水分,null为不修改,默认值为0
   * @param {number} [decayModifier] 腐烂速度(数值越大腐烂越快),null为不修改,默认值为1
   * @param {number} [protein] 蛋白质,null为不修改,默认值为0
   * @param {number} [fruit] 水果,null为不修改,默认值为0
   * @param {number} [grain] 谷物,null为不修改,默认值为0
   * @param {number} [vegetables] 蔬菜,null为不修改,默认值为0
   * @param {number} [dairy] 乳制品,null为不修改,默认值为0
   */
  //粗面团
  const dough = [
    "tfc:food/barley_dough",
    "tfc:food/maize_dough",
    "tfc:food/oat_dough",
    "tfc:food/rye_dough",
    "tfc:food/rice_dough",
    "tfc:food/wheat_dough",
    "tfc:food/yeast_dough/barley_dough",
    "tfc:food/yeast_dough/maize_dough",
    "tfc:food/yeast_dough/oat_dough",
    "tfc:food/yeast_dough/rye_dough",
    "tfc:food/yeast_dough/rice_dough",
    "tfc:food/yeast_dough/wheat_dough"
  ];
  dough.forEach(dough => {
    event.foodItem(dough, f => {
      f.hunger(3);
      f.saturation(1);
      f.grain(0.2);
      f.decayModifier(4)
      f.water(-7)
    })
  });
  //细面团
  const good_dough = [
    "firmalife:food/pie_dough",
    "firmalife:food/pumpkin_pie_dough",
    "firmalife:food/pizza_dough",
    "firmalife:food/cookie_dough",
    "firmalife:food/chocolate_chip_cookie_dough",
    "firmalife:food/masa",
    "firmalife:food/oat_dough",
    "firmalife:food/wheat_dough",
    "firmalife:food/barley_dough",
    "firmalife:food/maize_dough",
    "firmalife:food/rice_dough",
    "firmalife:food/rye_dough"
  ];
  good_dough.forEach(good_dough => {
    event.foodItem(good_dough, f => {
      f.hunger(3.5);
      f.saturation(1.5);
      f.grain(0.4);
      f.decayModifier(1.5)
    })
  });
  //面粉
  const flour = [
    "firmalife:food/masa_flour",
    "tfc:food/barley_flour",
    "tfc:food/maize_flour",
    "tfc:food/oat_flour",
    "tfc:food/rye_flour",
    "tfc:food/rice_flour",
    "tfc:food/wheat_flour",
    "kaleidoscope_cookery:flour"
  ];
  flour.forEach(flour => {
    event.foodItem(flour, f => {
      f.hunger(1.5);
      f.saturation(0.5);
      f.grain(0.2);
      f.decayModifier(0.15);
      f.water(-15)
    })
  });
  const grain = [
    "tfc:food/barley_grain",
    "tfc:food/maize_grain",
    "tfc:food/oat_grain",
    "tfc:food/rye_grain",
    "tfc:food/rice_grain",
    "tfc:food/wheat_grain"
  ];
  grain.forEach(grain => {
    event.foodItem(grain, f => {
      f.hunger(1.5);
      f.saturation(0.5);
      f.grain(0.02);
      f.decayModifier(0.45);
      f.water(-3)
    })
  });

  event.foodItem('farmersdelight:cooked_rice', f => { // 米饭
    f.hunger(10)
    f.saturation(3)
    f.grain(2)
    f.decayModifier(0.9)
  })

  event.foodItem('farmersdelight:glow_berry_custard', f => { // 蛋奶沙司
    f.hunger(5 / 5); f.saturation(2 / 5); f.dairy(3); f.fruit(3); f.water(15); f.decayModifier(0.9)
  })
  event.foodItem('brewinandchewin:kimchi', f => { // 泡菜
    f.hunger(5 / 5); f.saturation(2 / 5); f.vegetables(1.8); f.water(1); f.decayModifier(0.2)
  })
  event.foodItem('born_in_chaos_v1:corpse_maggot', f => { // 蛆
    f.hunger(5 / 5); f.saturation(2 / 5); f.protein(0.5); f.water(0.1); f.decayModifier(16)
  })
  event.foodItem('alexsmobs:maggot', f => { // 蛆
    f.hunger(5 / 5); f.saturation(2 / 5); f.protein(0.5); f.water(0.1); f.decayModifier(16)
  })
  event.foodItem('born_in_chaos_v1:fried_maggot', f => { // 油炸蛆
    f.hunger(5 / 5); f.saturation(2 / 5); f.protein(2); f.water(0.1); f.decayModifier(7)
  })
  event.foodItem('butcher:pigcorpse', f => { // 猪
    f.decayModifier(7)
  })
  event.foodItem('butcher:pig_corpse_item', f => { // 猪
    f.decayModifier(7)
  })

  event.foodItem('minecraft:enchanted_golden_apple', food => { // 附魔金苹果
    food.hunger(100)
    food.saturation(100 / 5)
    food.water(100)
    food.protein(100)
    food.fruit(100)
    food.grain(100)
    food.vegetables(100)
    food.dairy(100)
    food.decayModifier(0)
  })
  /*food_data("minecraft:enchanted_golden_apple", 100, 100, 100, 0, 100, 100, 100, 100, 100)*/
  /*food_data("cuisinedelight:suspicious_mix", 2, 0, null, 3)*/
  /*
    event.foodItem('cuisinedelight:suspicious_mix', food => { // 炒锅乐事-可疑大杂烩
      food.hunger(2)
      food.protein(0)
      food.fruit(0)
      food.grain(0)
      food.vegetables(0)
      food.decayModifier(3)
    })
    event.foodItem('cuisinedelight:ham_fried_rice', food => { // 炒锅乐事-火腿炒饭
      food.hunger(8)
      food.protein(4)
      food.grain(3)
      food.decayModifier(1.3)
    })
    event.foodItem('cuisinedelight:suspicious_mix', food => { // 炒锅乐事-可疑大杂烩
      food.hunger(2)
      food.protein(0)
      food.fruit(0)
      food.grain(0)
      food.vegetables(0)
      food.decayModifier(3)
    })
  
    event.foodItem('cuisinedelight:ham_fried_rice', food => { // 炒锅乐事-火腿炒饭
      food.hunger(8)
      food.protein(4)
      food.grain(3)
      food.decayModifier(1.3)
    })
  
    event.foodItem('cuisinedelight:fried_rice', food => { // 炒锅乐事-炒饭
      food.hunger(6)
      food.grain(4)
      food.decayModifier(1.3)
    })
  
    event.foodItem('cuisinedelight:mixed_fried_rice', food => { // 炒锅乐事-什锦炒饭
      food.hunger(8)
      food.fruit(1.3)
      food.grain(2.5)
      food.vegetables(1.3)
      food.decayModifier(1.2)
    })
  
    event.foodItem('cuisinedelight:meat_with_seafood', food => { // 炒锅乐事-肉与海鲜
      food.hunger(8)
      food.protein(4)
      food.decayModifier(0.8)
    })
  
    event.foodItem('cuisinedelight:meat_with_vegetables', food => { // 炒锅乐事-肉与蔬菜
      food.hunger(7)
      food.protein(2.8)
      food.fruit(1.3)
      food.vegetables(1.3)
      food.decayModifier(1.0)
    })
  
    event.foodItem('cuisinedelight:seafood_with_vegetables', food => { // 炒锅乐事-海鲜与蔬菜
      food.hunger(5)
      food.protein(2)
      food.vegetables(2)
      food.decayModifier(0.9)
    })
  
    event.foodItem('cuisinedelight:fried_pasta', food => { // 炒锅乐事-炒意大利面
      food.hunger(6)
      food.grain(2.7)
      food.decayModifier(1.5)
    })
  
    event.foodItem('cuisinedelight:mixed_pasta', food => { // 炒锅乐事-什锦意大利面
      food.hunger(7)
      food.protein(0.3)
      food.fruit(0.3)
      food.grain(2.1)
      food.vegetables(0.3)
      food.decayModifier(1.1)
    })
  
    event.foodItem('cuisinedelight:meat_fried_rice', food => { // 炒锅乐事-肉炒饭
      food.hunger(7)
      food.protein(2.3)
      food.grain(1.3)
      food.decayModifier(1.1)
    })
  
    event.foodItem('cuisinedelight:meat_pasta', food => { // 炒锅乐事-肉酱意大利面
      food.hunger(7)
      food.protein(0.6)
      food.grain(2.0)
      food.decayModifier(1.1)
    })
  
    event.foodItem('cuisinedelight:meat_platter', food => { // 炒锅乐事-肉类拼盘
      food.hunger(5)
      food.protein(3.3)
      food.decayModifier(0.6)
    })
  
    event.foodItem('cuisinedelight:seafood_fried_rice', food => { // 炒锅乐事-海鲜炒饭
      food.hunger(7)
      food.protein(1.9)
      food.grain(1.5)
      food.decayModifier(0.8)
    })
  
    event.foodItem('cuisinedelight:seafood_pasta', food => { // 炒锅乐事-海鲜意大利面
      food.hunger(6)
      food.protein(1.9)
      food.grain(1.5)
      food.decayModifier(0.8)
    })
  
    event.foodItem('cuisinedelight:seafood_platter', food => { // 炒锅乐事-海鲜拼盘
      food.hunger(4)
      food.protein(3)
      food.decayModifier(0.4)
    })
  
    event.foodItem('cuisinedelight:vegetable_fried_rice', food => { // 炒锅乐事-蔬菜炒饭
      food.hunger(7)
      food.fruit(1.1)
      food.grain(1.7)
      food.vegetables(1.2)
      food.decayModifier(1.3)
    })
  
    event.foodItem('cuisinedelight:vegetable_pasta', food => { // 炒锅乐事-蔬菜意大利面
      food.hunger(6)
      food.fruit(1.1)
      food.grain(1.7)
      food.vegetables(1.2)
      food.decayModifier(1.3)
    })
  
    event.foodItem('cuisinedelight:vegetable_platter', food => { // 炒锅乐事-蔬菜拼盘
      food.hunger(4)
      food.fruit(1.3)
      food.vegetables(1.3)
      food.decayModifier(1.0)
    })
  
    event.foodItem('cuisinedelight:fried_mushroom', food => { // 炒锅乐事-炸蘑菇
      food.hunger(4)
      food.protein(3.0)
      food.decayModifier(1.6)
    })
  
    event.foodItem('cuisinedelight:fried_meat_and_melon', food => { // 炒锅乐事-炸肉和甜瓜
      food.hunger(4)
      food.protein(1.2)
      food.fruit(1.2)
      food.decayModifier(0.7)
    })
  
    event.foodItem('cuisinedelight:scrambled_egg_and_tomato', food => { // 炒锅乐事-西红柿炒鸡蛋
      food.hunger(4)
      food.protein(2.3)
      food.vegetables(0.3)
      food.decayModifier(1.1)
    })
  */
})