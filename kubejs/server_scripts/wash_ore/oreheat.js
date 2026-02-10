TFCEvents.data(event => {
  //const triplemetaltp = 3 * 2.857
  event.itemHeat('#kubejs:ore', 0.05 * 2.8, null, null)
  event.itemHeat('#kubejs:4ore', 0.2 * 2.8, null, null)
  event.itemHeat('#kubejs:8ore', 0.4 * 2.8, null, null)
  event.itemHeat('#kubejs:16ore', 0.8 * 2.8, null, null)
  event.itemHeat("#kubejs:dirty_pile", 0.01 * 2.8, null, null);
  event.itemHeat('#kubejs:1ingot', 2.8, null, null)
  event.itemHeat('#kubejs:2ingot', 2 * 2.8, null, null)
  event.itemHeat('#kubejs:3ingot', 3 * 2.8, null, null)
  event.itemHeat('#kubejs:4ingot', 4 * 2.8, null, null)
  const metal = [
    { name: "copper", temperature: 1080, metal: "copper" },
    { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze" },
    { name: "black_bronze", temperature: 1050, metal: "black_bronze" },
    { name: "bronze", temperature: 950, metal: "bronze" },
    { name: "black_steel", temperature: 1485, metal: "black_steel" },
    { name: "blue_steel", temperature: 1538, metal: "blue_steel" },
    { name: "red_steel", temperature: 1538, metal: "red_steel" },
    { name: "steel", temperature: 1540, metal: "steel" },
    { name: "wrought_iron", temperature: 1535, metal: 'cast_iron' }
  ];
  metal.forEach(metal => {
    event.itemHeat(`kubejs:${metal.name}_fragments`, 0.2 * 2.8, null, metal.temperature * 0.8);

  })





})