
ServerEvents.recipes((event) => {

  const id_prefix = 'kubejs:thirace/create/createmetallurgy/alloying/';
  event.remove({ type: 'createmetallurgy:alloying' })


  const recipes = [
    {
      ingredients: [{ amount: 30, fluid: 'tfc:metal/gold' }, { amount: 10, fluid: 'tfc:metal/copper' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 40, fluid: 'tfc:metal/rose_gold' }],
      id: `${id_prefix}rose_gold`
    },
    {
      ingredients: [{ amount: 30, fluid: 'tfc:metal/silver' }, { amount: 20, fluid: 'tfc:metal/copper' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 40, fluid: 'tfc:metal/sterling_silver' }],
      id: `${id_prefix}sterling_silver`
    },
    {
      ingredients: [{ amount: 90, fluid: 'tfc:metal/copper' }, { amount: 10, fluid: 'tfc:metal/tin' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 100, fluid: 'tfc:metal/bronze' }],
      id: `${id_prefix}bronze`
    },
    {
      ingredients: [{ amount: 90, fluid: 'tfc:metal/copper' }, { amount: 10, fluid: 'tfc:metal/zinc' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 100, fluid: 'tfc:metal/brass' }],
      id: `${id_prefix}brass`
    },
    {
      ingredients: [{ amount: 20, fluid: 'tfc:metal/copper' }, { amount: 10, fluid: 'tfc:metal/zinc' }, { amount: 10, fluid: 'tfc:metal/bismuth' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 40, fluid: 'tfc:metal/bismuth_bronze' }],
      id: `${id_prefix}bismuth_bronze`
    },
    {
      ingredients: [{ amount: 20, fluid: 'tfc:metal/copper' }, { amount: 10, fluid: 'tfc:metal/gold' }, { amount: 10, fluid: 'tfc:metal/silver' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 40, fluid: 'tfc:metal/black_bronze' }],
      id: `${id_prefix}black_bronze`
    },
    /*{
      ingredients: [{ amount: 50, fluid: 'tfc:metal/black_steel' }, { amount: 20, fluid: 'tfc:metal/steel' }, { amount: 10, fluid: 'tfc:metal/brass' }, { amount: 10, fluid: 'tfc:metal/rose_gold' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 90, fluid: 'tfc:metal/weak_red_steel' }],
      id: `${id_prefix}weak_red_steel`
    },
    {
      ingredients: [{ amount: 50, fluid: 'tfc:metal/black_steel' }, { amount: 20, fluid: 'tfc:metal/steel' }, { amount: 10, fluid: 'tfc:metal/bismuth_bronze' }, { amount: 10, fluid: 'tfc:metal/sterling_silver' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 90, fluid: 'tfc:metal/weak_blue_steel' }],
      id: `${id_prefix}weak_blue_steel`
    },
    {
      ingredients: [{ amount: 20, fluid: 'tfc:metal/steel' }, { amount: 10, fluid: 'tfc:metal/black_bronze' }, { amount: 10, fluid: 'tfc:metal/nickel' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 90, fluid: 'tfc:metal/weak_steel' }],
      id: `${id_prefix}weak_steel`
    },*/
    {
      ingredients: [{ amount: 10, fluid: 'tfc:metal/gold' }, { amount: 10, fluid: 'tfc:metal/silver' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 20, fluid: 'tfc_ie_addon:metal/electrum' }],
      id: `${id_prefix}electrum`
    },
    {
      ingredients: [{ amount: 10, fluid: 'tfc:metal/copper' }, { amount: 10, fluid: 'tfc:metal/nickel' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 20, fluid: 'tfc_ie_addon:metal/constantan' }],
      id: `${id_prefix}constantan`
    },
    {
      ingredients: [{ amount: 30, fluid: 'tfc:metal/steel' }, { amount: 10, fluid: 'firmalife:metal/chromium' }, { amount: 10, fluid: 'tfc:metal/nickel' }],
      heatRequirement: 'superheated',
      processingTime: 40,
      results: [{ amount: 50, fluid: 'firmalife:metal/stainless_steel' }],
      id: `${id_prefix}stainless_steel`
    },


  ];


  recipes.forEach((recipe) => {
    recipe.type = 'createmetallurgy:alloying';
    event.custom(recipe).id(recipe.id);
  });
});
