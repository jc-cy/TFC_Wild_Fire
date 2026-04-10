  ServerEvents.recipes(event => {
    //目前先把所有添加的食物的加热配方都整合到这里面来
  event.forEachRecipe(//所有肉的烤制配方
    {

      mod: 'butcher',
      type: "smoking",
      output: '#minecraft:meat'
    }, r => {

      var cookmeat_id = r.getOriginalRecipeResult().getId()
      var meat_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]

      if ((!cookmeat_id || (!meat_id || meat_id.length === 0) || (!meat_id || meat_id.length === 0))) {

        return;
      }

      event.recipes.tfc.heating(meat_id, 200).resultItem(TFC.itemStackProvider.of(cookmeat_id).addHeat(100))
    })



  const burnt = ['tfc:food/cooked_tropical_fish', 'tfc:food/protein_soup',
    'butcher:cookedbatmeat', 'butcher:cookedsalmon', 'butcher:cookedmincebeef',
    'butcher:cookedmincedlamb', 'butcher:cookedpillagermeat', 'butcher:cookedspiderleg',
    'butcher:cookedsausages', 'tfc:food/cooked_tropical_fish', 'tfc:food/cooked_calamari',
    'tfc:food/cooked_shellfish', 'tfc:food/cooked_bluegill', 'tfc:food/cooked_crappie',
    'tfc:food/cooked_lake_trout', 'tfc:food/cooked_largemouth_bass', 'tfc:food/cooked_rainbow_trout',
    'tfc:food/cooked_smallmouth_bass', 'butcher:cookedintestines', 'butcher:cookedlungs',
    'butcher:cookedliver', 'butcher:cookedkidney', 'butcher:cookedstomach', 'butcher:pork_belly',
    'butcher:pork_loin', 'butcher:pork_shoulder', 'butcher:pork_leg', 'butcher:cooked_lamb_rib',
    'butcher:lamb_loin', 'butcher:lamb_shoulder', 'butcher:lamb_sirloin', 'butcher:leg_of_lamb',
    'butcher:cooked_villager_meat', 'butcher:cookedhoglinmeat', 'butcher:cooked_green_frogs_leg',
    'butcher:cooked_orange_frog_leg', 'tfc:food/cooked_turtle', 'tfc:food/cooked_gran_feline',
    'tfc:food/cooked_frog_legs', 'tfc:food/cooked_wolf', 'tfc:food/cooked_fox', 'tfc:food/cooked_hyena',
    'tfc:food/cooked_duck', 'tfc:food/cooked_chevon', 'tfc:food/cooked_camelidae', 'farmersdelight:cooked_chicken_cuts',
    'farmersdelight:cooked_bacon', 'farmersdelight:cooked_cod_slice', 'farmersdelight:cooked_salmon_slice',
    'farmersdelight:cooked_mutton_chops', 'firmalife:food/cooked_bacon', 'firmalife:food/cooked_pizza',
    'firmalife:food/cooked_pie', 'firmalife:food/cooked_lasagna', 'refurbished_furniture:cooked_vegetable_pizza',
    'refurbished_furniture:cooked_meatlovers_pizza', 'tfc:food/cooked_pork', 'tfc:food/cooked_mutton',
    'tfc:food/cooked_chicken', 'tfc:food/cooked_rabbit', 'tfc:food/cooked_cod', 'tfc:food/cooked_salmon',
    'tfc:food/cooked_rice', 'tfc:food/cooked_beef', 'tfc:food/cooked_quail', 'tfc:food/cooked_bear',
    'tfc:food/cooked_horse_meat', 'tfc:food/cooked_pheasant', 'tfc:food/cooked_turkey',
    'tfc:food/cooked_peafowl', 'tfc:food/cooked_grouse', 'tfc:food/cooked_venison',
    'butcher:cookedhumanmeat', 'butcher:cookedsniffermeat', 'alexsmobs:cooked_kangaroo_meat',
    'aquaculture:fish_fillet_cooked', 'alexscaves:cooked_tripodfish', 'alexscaves:cooked_mussel',
    'butcher:cookedhumanmeat', 'butcher:cookedblueexolotlmeat', 'butcher:cookedcyanaxolotlmeat',
    'butcher:cookedgoldaxolotlmeat', 'butcher:creepermeat', 'butcher:creeperleg', 'butcher:cookedlucyaxolotlmeat',
    'butcher:cookedwildaxolotlmeat', 'butcher:cookedocelotmeat', 'butcher:cookedsniffermeat',
    'butcher:cookedstridermeat', 'butcher:cookedevokermeat', 'butcher:cookedguardianmeat',
    'butcher:cookedshulkermeat', 'butcher:cookedcatmeat', 'butcher:cookedendermanlungs',
    'butcher:cookedendermankidney', 'butcher:cookedendermanintestines', 'butcher:cookedendermanliver',
    'butcher:cookedendermanstomach', 'butcher:cookedbloodsausage', 'butcher:cookedheart',
    'alexsmobs:cooked_kangaroo_meat', 'alexsmobs:cooked_catfish', 'alexscaves:cooked_trilocaris_tail',
    'alexscaves:cooked_radgill', 'alexscaves:cooked_lanternfish', 'firmalife:food/corn_tortilla',
    'tfc:food/wheat_bread', 'tfc:food/rice_bread', 'tfc:food/rye_bread', 'tfc:food/oat_bread',
    'tfc:food/maize_bread', 'tfc:food/barley_bread', 'firmalife:food/rye_flatbread'
    , 'firmalife:food/rice_flatbread', 'firmalife:food/maize_flatbread', 'firmalife:food/barley_flatbread',
    'firmalife:food/wheat_flatbread', 'firmalife:food/oat_flatbread']
  burnt.forEach(burntfood => {
    event.recipes.tfc.heating(burntfood, 700).resultItem('kubejs:burnt_food_residue')
  })

    /*event.forEachRecipe(//所有的烤制配方烧糊
    {


      type: "smoking"

    }, r => {

      var cookmeat_id = r.getOriginalRecipeResult().getId()
      var meat_id = r.getOriginalRecipeIngredients()[0].getItemIds()[0]

      if ((!cookmeat_id || (!meat_id || meat_id.length === 0) || (!meat_id || meat_id.length === 0))) {

        return;
      }
      if (cookmeat_id == 'immersiveengineering:clinker_brick' || cookmeat_id == 'tfc:food/dried_kelp' || cookmeat_id == 'tfc:food/dried_seaweed' || cookmeat_id == 'tfc:powder/soda_ash' || cookmeat_id == 'tfc:torch' || cookmeat_id == 'tfc:stick_bunch') {
        return;
      }

      event.recipes.tfc.heating(cookmeat_id, 700).resultItem('kubejs:burnt_food_residue')
    })*/



  //event.custom({ "type": "tfc:heating", "ingredient": { "item": 'create:empty_blaze_burner' }, "result_item": { "item": 'create:blaze_burner' }, "temperature": 1538 })//烈焰人燃烧室

  event.custom({//烧海带
    "type": "tfc:heating",
    "ingredient": { "tag": 'tfc:plants/kelp' },
    "result_item": { "item": "tfc:food/dried_kelp" },
    "temperature": 200
  })
  event.custom({//烧海带
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:plant/laminaria' },
    "result_item": { "item": "tfc:food/dried_kelp" },
    "temperature": 200
  })
  event.custom({//食物：烤玉米
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/maize' },
    "result_item": { "item": "wildfire:baked_maize" },
    "temperature": 200
  })
    event.custom({//食物：烤胡萝卜
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/carrot' },
    "result_item": { "item": "wildfire:baked_carrot" },
    "temperature": 200
  })
  event.custom({//食物：烤红辣椒
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/red_bell_pepper' },
    "result_item": { "item": "wildfire:baked_red_pepper" },
    "temperature": 200
  })
  event.custom({//食物：烤黄甜椒
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/yellow_bell_pepper' },
    "result_item": { "item": "wildfire:baked_yellow_bell_pepper" },
    "temperature": 200
  })
  event.custom({//食物：烤青椒
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/green_bell_pepper' },
    "result_item": { "item": "wildfire:baked_green_pepper" },
    "temperature": 200
  })
  event.custom({//食物：烤大蒜
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/garlic' },
    "result_item": { "item": "wildfire:baked_garlic" },
    "temperature": 200
  })
  event.custom({//食物：烤红苹果
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/red_apple' },
    "result_item": { "item": "wildfire:baked_red_apple" },
    "temperature": 200
  })
  event.custom({//食物：烤青苹果
    "type": "tfc:heating",
    "ingredient": { "item": 'tfc:food/green_apple' },
    "result_item": { "item": "wildfire:baked_green_apple" },
    "temperature": 200
  })
  event.custom({//食物：南瓜面包
    "type": "tfc:heating",
    "ingredient": { "item": 'wildfire:pumpkin_dough' },
    "result_item": { "item": "wildfire:pumpkin_bread" },
    "temperature": 200
  })
})