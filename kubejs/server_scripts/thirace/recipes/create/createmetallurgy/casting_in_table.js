
//TFC Ceramic
ServerEvents.recipes((event) => {

  const id_prefix = 'kubejs:thirace/create/createmetallurgy/casting_in_table/';
  event.remove({ type: 'createmetallurgy:casting_in_table' })

  const recipes = [
    {
      ingredients: [
        { item: 'createmetallurgy:graphite_ingot_mold' },
        { amount: 100, fluid: 'tfc_ie_addon:metal/aluminum' }
      ],
      processingTime: 100,
      result: { item: 'kubejs:alumina_dioxide' },
      id: `${id_prefix}alumina_dioxide`
    },
    {
      ingredients: [
        { amount: 250, fluid: 'kubejs:molten_glass' }
      ],
      processingTime: 150,
      result: { item: 'minecraft:glass_pane' },
      id: `${id_prefix}glass_pane`
    },
    {
      ingredients: [
        { item: 'createmetallurgy:graphite_ingot_mold' },
        { amount: 50, fluid: 'kubejs:molten_corundum' }
      ],
      processingTime: 150,
      result: { item: 'kubejs:corundum_brick' },
      id: `${id_prefix}corundum_brick`
    },
    {
      ingredients: [
        { item: 'tfc:powder/soda_ash' },
        { amount: 100, fluid: 'kubejs:molten_glass' }
      ],
      mold_consumed: 'true',
      processingTime: 300,
      result: { item: 'firmalife:reinforced_glass' },
      id: `${id_prefix}reinforced_glass`
    },
  ];

  const metals = [
    'bronze',
    'black_bronze',
    'bismuth_bronze',
    'copper',
    'wrought_iron',
    'steel',
    'black_steel',
    //'blue_steel',
    //'red_steel'
  ];
  const molds_1 = [//100mb

    { mod: 'tfc', head: 'chisel_head' },
    { mod: 'tfc', head: 'propick_head' },
    { mod: 'tfc', head: 'knife_blade' },
    { mod: 'tfc', head: 'scythe_blade' },
    { mod: 'tfc', head: 'saw_blade' },
    { mod: 'tfc', head: 'javelin_head' },
    { mod: 'tfc', head: 'axe_head' },
    { mod: 'tfc', head: 'shovel_head' },
    { mod: 'tfc', head: 'pickaxe_head' },
    { mod: 'tfc', head: 'hoe_head' },
    { mod: 'tfc', head: 'hammer_head' },
    //{ mod: 'tfc', head: 'bell' },
    //{ mod: 'tfcchannelcasting', head: 'heart' },
  ]
  const molds_2 = [//200mb

    { mod: 'tfc', head: 'mace_head' },
    { mod: 'tfc', head: 'sword_blade' },
    { mod: 'tfcscraping', head: 'scraping_knife_blade' },
    { mod: 'precisionprospecting', head: 'mineral_prospector_head' },
    { mod: 'precisionprospecting', head: 'prospector_hammer_head' },
    { mod: 'tfc_hammer_time', head: 'excavator_head' },
  ]
  const molds_3 = [//300mb

    { mod: 'tfc_hammer_time', head: 'sledgehammer_head' },
  ]
  const molds_4 = [//400mb

    { mod: 'precisionprospecting', head: 'prospector_drill_head' },
  ]
  const molds_5 = [//50mb

    { mod: 'artisanal', head: 'circle_blade' },
    { mod: 'tfc', head: 'fish_hook' },
  ]
  metals.forEach((metal) => {
    molds_1.forEach((mold) => {
      recipes.push({
        ingredients: [
          { item: `kubejs:graphite_${mold.head}_mold` },
          { amount: 100, fluid: `tfc:metal/${metal}`, nbt: {} }
        ],
        processingTime: 200,
        result: { item: `${mold.mod}:metal/${mold.head}/${metal}` },
        id: `${id_prefix}${mold.head}/${metal}`
      });
    });
    molds_2.forEach((mold) => {
      recipes.push({
        ingredients: [
          { item: `kubejs:graphite_${mold.head}_mold` },
          { amount: 200, fluid: `tfc:metal/${metal}`, nbt: {} }
        ],
        processingTime: 400,
        result: { item: `${mold.mod}:metal/${mold.head}/${metal}` },
        id: `${id_prefix}${mold.head}/${metal}`
      });
    });
    molds_3.forEach((mold) => {
      recipes.push({
        ingredients: [
          { item: `kubejs:graphite_${mold.head}_mold` },
          { amount: 300, fluid: `tfc:metal/${metal}`, nbt: {} }
        ],
        processingTime: 600,
        result: { item: `${mold.mod}:metal/${mold.head}/${metal}` },
        id: `${id_prefix}${mold.head}/${metal}`
      });
    });
    molds_4.forEach((mold) => {
      recipes.push({
        ingredients: [
          { item: `kubejs:graphite_${mold.head}_mold` },
          { amount: 400, fluid: `tfc:metal/${metal}`, nbt: {} }
        ],
        processingTime: 800,
        result: { item: `${mold.mod}:metal/${mold.head}/${metal}` },
        id: `${id_prefix}${mold.head}/${metal}`
      });
    });
    molds_5.forEach((mold) => {
      recipes.push({
        ingredients: [
          { item: `kubejs:graphite_${mold.head}_mold` },
          { amount: 50, fluid: `tfc:metal/${metal}`, nbt: {} }
        ],
        processingTime: 100,
        result: { item: `${mold.mod}:metal/${mold.head}/${metal}` },
        id: `${id_prefix}${mold.head}/${metal}`
      });
    });
  })
  //镍锭单独配方
  recipes.push({
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 100, fluid: `tfc:metal/refined_nickel`, nbt: {} }
    ],
    processingTime: 100,
    result: { item: `tfc:metal/ingot/nickel` },
    id: `${id_prefix}ingot/nickel`
  });

  const molds_0 = [
    { item: 'weak_steel', type: '1' },
    { item: 'high_carbon_red_steel', type: '1' },
    { item: 'high_carbon_blue_steel', type: '1' },
    { item: 'high_carbon_black_steel', type: '1' },
    { item: 'high_carbon_steel', type: '1' },
    { item: 'weak_red_steel', type: '1' },
    { item: 'weak_blue_steel', type: '1' },
    { item: 'pig_iron', type: '1' },

    { item: 'brass', type: '1' },
    { item: 'bronze', type: '1' },
    { item: 'copper', type: '1' },
    { item: 'gold', type: '1' },
    { item: 'cast_iron', type: '1' },
    { item: 'silver', type: '1' },
    { item: 'steel', type: '1' },
    { item: 'tin', type: '1' },
    { item: 'zinc', type: '1' },
    { item: 'unknown', type: '1' },

    { item: 'blue_steel', type: '2' },
    { item: 'red_steel', type: '2' },
    { item: 'black_steel', type: '2' },
    { item: 'bismuth', type: '2' },
    { item: 'bismuth_bronze', type: '2' },
    { item: 'black_bronze', type: '2' },
    { item: 'rose_gold', type: '2' },
    { item: 'sterling_silver', type: '2' },
    { item: 'wrought_iron', type: '2' },
  ]
  molds_0.forEach((metal) => {
    if (metal.type == '1', '2')
      recipes.push({
        ingredients: [
          { item: 'createmetallurgy:graphite_ingot_mold' },
          { amount: 100, fluid: `tfc:metal/${metal.item}`, nbt: {} }
        ],
        processingTime: 100,
        result: { item: `tfc:metal/ingot/${metal.item}` },
        id: `${id_prefix}ingot/${metal.item}`
      });

    /*     if (metal.type == '2')
        recipes.push({
            ingredients: [
                { item: 'createmetallurgy:graphite_plate_mold' },
                { amount: 200 , fluid: `tfc:metal/${metal.item}`, nbt: {} }
            ],
            processingTime: 30,
            result: { item: `tfc:metal/sheet/${metal.item}` },
            id: `${id_prefix}sheet/${metal.item}`
        });
        if (metal.type == '2')
        recipes.push({
          ingredients: [
              { item: 'createmetallurgy:graphite_rod_mold' },
              { amount: 100 , fluid: `tfc:metal/${metal.item}`, nbt: {} }
          ],
          processingTime: 30,
          result: { item: `tfc:metal/rod/${metal.item}` },
          id: `${id_prefix}rod/${metal.item}`
      }); */
  });

  const molds_0_1 = [
    { item: 'chromium', type: '1_1' },
    { item: 'stainless_steel', type: '1_1' },
    { item: 'uranium', type: '1_2' },
    { item: 'lead', type: '1_2' },
    //{ item: 'aluminum', type: '1_2' },
    { item: 'constantan', type: '1_2' },
    { item: 'electrum', type: '1_2' },
  ]
  molds_0_1.forEach((metal) => {
    if (metal.type == '1_1')
      recipes.push({
        ingredients: [
          { item: 'createmetallurgy:graphite_ingot_mold' },
          { amount: 100, fluid: `firmalife:metal/${metal.item}`, nbt: {} }
        ],
        processingTime: 150,
        result: { item: `firmalife:metal/ingot/${metal.item}` },
        id: `${id_prefix}ingot/${metal.item}`
      });
    /*   if (metal.type == '1_1')
      recipes.push({
        ingredients: [
            { item: 'createmetallurgy:graphite_plate_mold' },
            { amount: 200 , fluid: `firmalife:metal/${metal.item}`, nbt: {} }
        ],
        processingTime: 30,
        result: { item: `firmalife:metal/sheet/${metal.item}` },
        id: `${id_prefix}sheet/${metal.item}`
      });
      if (metal.type == '1_1')
      recipes.push({
        ingredients: [
            { item: 'createmetallurgy:graphite_rod_mold' },
            { amount: 100 , fluid: `firmalife:metal/${metal.item}`, nbt: {} }
        ],
        processingTime: 30,
        result: { item: `firmalife:metal/rod/${metal.item}` },
        id: `${id_prefix}rod/${metal.item}`
      }); */
    if (metal.type == '1_2')
      recipes.push({
        ingredients: [
          { item: 'createmetallurgy:graphite_ingot_mold' },
          { amount: 100, fluid: `tfc_ie_addon:metal/${metal.item}`, nbt: {} }
        ],
        processingTime: 150,
        result: { item: `immersiveengineering:ingot_${metal.item}` },
        id: `${id_prefix}ingot/${metal.item}`
      });
    /*   if (metal.type == '1_2')
      recipes.push({
          ingredients: [
              { item: 'createmetallurgy:graphite_ingot_mold' },
              { amount: 100 , fluid: `tfc_ie_addon:metal/${metal.item}`, nbt: {} }
          ],
          processingTime: 30,
          result: { item: `tfc_ie_addon:metal/sheet/${metal.item}` },
          id: `${id_prefix}sheet/${metal.item}`
      }); */
  });







  recipes.forEach((recipe) => {
    recipe.type = 'createmetallurgy:casting_in_table';
    event.custom(recipe).id(recipe.id);
  });
});

/* const molds = [
  'precisionprospecting:ceramic/mineral_prospector_head_mold', 
  'precisionprospecting:ceramic/prospector_drill_head_mold', 
  'precisionprospecting:ceramic/prospector_hammer_head_mold', 

  'tfc_hammer_time:ceramic/excavator_head_mold', 
  'tfc_hammer_time:ceramic/sledgehammer_head_mold', 

  'tfcchannelcasting:heart_mold', 

  'tfc:ceramic/hammer_head_mold', 
  'tfc:ceramic/chisel_head_mold', 
  'tfc:ceramic/propick_head_mold',
  'tfc:ceramic/knife_blade_mold', 
  'tfc:ceramic/scythe_blade_mold', 
  'tfc:ceramic/bell_mold', 
  'tfc:ceramic/saw_blade_mold', 

  'tfc:ceramic/javelin_head_mold', 
  'tfc:ceramic/mace_head_mold', 
  'tfc:ceramic/sword_blade_mold',

  'tfc:ceramic/axe_head_mold'
  'tfc:ceramic/shovel_head_mold'
  'tfc:ceramic/pickaxe_head_mold'
]; */


/* const molds = [
  'kubejs:graphite_mineral_prospector_head_mold', 
  'kubejs:graphite_prospector_drill_head_mold', 
  'kubejs:graphite_prospector_hammer_head_mold', 

  'kubejs:graphite_excavator_head_mold', 
  'kubejs:graphite_sledgehammer_head_mold', 

  'kubejs:graphite_heart_mold', 

  'kubejs:graphite_hammer_head_mold', 
  'kubejs:graphite_chisel_head_mold', 
  'kubejs:graphite_propick_head_mold',
  'kubejs:graphite_knife_blade_mold', 
  'kubejs:graphite_scythe_blade_mold', 
  'kubejs:graphite_bell_mold', 
  'kubejs:graphite_saw_blade_mold', 
  'kubejs:graphite_javelin_head_mold', 
  'kubejs:graphite_mace_head_mold', 
  'kubejs:graphite_sword_blade_mold',
  'kubejs:graphite_axe_head_mold',
  'kubejs:graphite_shovel_head_mold',
  'kubejs:graphite_pickaxe_head_mold'

] */

