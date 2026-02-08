ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/item_application/';

    event.remove({ id: 'create:crafting/kinetics/encased_fan' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_drill' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_saw' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_mixer' })
    event.remove({ id: 'create:crafting/kinetics/millstone' })
    event.remove({ id: 'create:crafting/kinetics/mechanical_press' })

    
    const recipes = [
        {
            ingredients: [{ item: 'create:andesite_casing' }, { tag: 'tfc:chisels' }],
            results: [{ item: 'kubejs:andesite_chassis' }],
            id: `${id_prefix}andesite_chassis`
        },
        {
            ingredients: [{ tag: 'forge:stripped_logs' }, {  item: 'vintageimprovements:andesite_sheet' }],
            results: [{ item: 'create:andesite_casing' }],
            id: `${id_prefix}andesite_casing`
        },
        {
            ingredients: [{ item: 'kubejs:andesite_chassis' }, { item: 'create:propeller' }],
            results: [{ item: 'create:encased_fan' }],
            id: `${id_prefix}encased_fan`
        },
        {
            ingredients: [{ item: 'kubejs:andesite_chassis' }, { item: 'tfc:quern' }],
            results: [{ item: 'create:millstone' }],
            id: `${id_prefix}millstone`
        },
        {
            ingredients: [{ item: 'minecraft:stonecutter' }, 'vintageimprovements:andesite_sheet'],
            results: [{ item: 'create:mechanical_saw' }],
            id: `${id_prefix}mechanical_saw`
        },
        {
            ingredients: [{ item: 'kubejs:andesite_chassis' }, { item: 'immersiveengineering:drillhead_steel' }],
            results: [{ item: 'create:mechanical_drill' }],
            id: `${id_prefix}mechanical_drill`
        },
        {
            ingredients: [{ item: 'kubejs:andesite_chassis' }, { item: 'create:whisk' }],
            results: [{ item: 'create:mechanical_mixer' }],
            id: `${id_prefix}mechanical_mixer`
        },
        {
            ingredients: [{ item: 'kubejs:andesite_chassis' }, { item: 'kubejs:cast_iron_indenter' }],
            results: [{ item: 'create:mechanical_press' }],
            id: `${id_prefix}mechanical_press`
        },


    ];




    recipes.forEach((recipe) => {
        recipe.type = 'create:item_application';
        event.custom(recipe).id(recipe.id);
    });
});
