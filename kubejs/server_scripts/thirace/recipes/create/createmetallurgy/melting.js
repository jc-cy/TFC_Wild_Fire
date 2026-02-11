
//TFC Ceramic
ServerEvents.recipes((event) => {

    const id_prefix = 'kubejs:thirace/create/createmetallurgy/melting/';

    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/ingot/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/dust/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/plate/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/wire/})
    //event.remove({id: /createmetallurgy:melting\/[a-z]+\/rod/})

    event.remove({ type: 'createmetallurgy:melting' })


    const recipes = [

        //手写铸铁融化配方
        {
            ingredients: [{ item: `tfc:metal/ingot/cast_iron` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}ingots/cast_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/double_ingot/cast_iron` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}double_ingots/cast_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/sheet/cast_iron` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}sheets/cast_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/double_sheet/cast_iron` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}double_sheets/cast_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/rod/cast_iron` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}rod/cast_iron`
        },

        //锻铁
        {
            ingredients: [{ item: `tfc:metal/ingot/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}ingots/wrought_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/double_ingot/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}double_ingots/wrought_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/sheet/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}sheets/wrought_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/double_sheet/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}double_sheets/wrought_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/rod/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 100, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}rod/wrought_iron`
        },
        {
            ingredients: [{ item: `tfc:metal/tuyere/wrought_iron` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `tfc:metal/cast_iron` }],
            id: `${id_prefix}tuyere/wrought_iron`
        },

        //生铁
        {
            ingredients: [{ item: `tfc:metal/ingot/pig_iron` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/pig_iron` }],
            id: `${id_prefix}ingots/pigq_iron`
        },

        {
            ingredients: [{ item: 'immersiveengineering:stick_aluminum' }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: 'tfc_ie_addon:metal/aluminum' }],
            id: `${id_prefix}aluminum_rod`
        },
        {
            ingredients: [{ tag: 'forge:glass' }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 1000, fluid: 'kubejs:molten_glass' }],
            id: `${id_prefix}molten_glass`
        },
        {
            ingredients: [{ tag: 'forge:sand' }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 50, fluid: 'kubejs:molten_glass' }],
            id: `${id_prefix}molten_glass_from_sand`
        },
        {
            ingredients: [{ tag: 'tfc:glass_batches' }],
            heatRequirement: 'heated',
            processingTime: 100,
            results: [{ amount: 250, fluid: 'kubejs:molten_glass' }],
            id: `${id_prefix}molten_glass_from_batches`
        },



    ];


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////

    const materials = [
        { name: 'garnierite', fluid: 'nickel', heat: 'superheated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'magnetite', fluid: 'cast_iron', heat: 'superheated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'limonite', fluid: 'cast_iron', heat: 'superheated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'hematite', fluid: 'cast_iron', heat: 'superheated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'tetrahedrite', fluid: 'copper', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'malachite', fluid: 'copper', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'bismuthinite', fluid: 'bismuth', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'sphalerite', fluid: 'zinc', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'cassiterite', fluid: 'tin', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'copper', fluid: 'copper', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'gold', fluid: 'gold', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'silver', fluid: 'silver', heat: 'heated', mod: 'tfc', types: ['pellet', 'briquet', /* 'dirty_dust' */] },

        { name: 'galena', fluid: 'lead', heat: 'heated', mod: 'tfc_ie_addon', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'uraninite', fluid: 'uranium', heat: 'superheated', mod: 'tfc_ie_addon', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
        { name: 'bauxite', fluid: 'aluminum', heat: 'superheated', mod: 'tfc_ie_addon', types: ['pellet', 'briquet', /* 'dirty_dust' */] },

        { name: 'chromium', fluid: 'chromium', heat: 'heated', mod: 'firmalife', types: ['pellet', 'briquet', /* 'dirty_dust' */] },
    ]

    materials.forEach((material) => {
        let heatInput
        let timeInput

        if (material.heat === 'heated') {
            heatInput = 'heated'
            timeInput = 20
        } else if (material.heat === 'superheated') {
            heatInput = 'superheated'
            timeInput = 40
        }

        /* material.types.forEach((type) => {
             let fluidOutput
              if (type === 'dirty_dust') {
                 fluidOutput = 5
             } 
             if (type === 'pellet') {
                 fluidOutput = 20
             }
             if (type === 'briquet') {
                 fluidOutput = 80
             }
 
             recipes.push({
                 ingredients: { item: `tfcorewashing:${type}_${material.name}` },
                 heatRequirement: heatInput,
                 processingTime: timeInput,
                 results: { amount: fluidOutput, fluid: `${material.mod}:metal/${material.fluid}` },
                 id: `${id_prefix}${heatInput}/${type}_${material.name}`
             })
         })*/
    })


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////


    const tfc_metal_tuyere_heated = [
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'copper',
    ]

    tfc_metal_tuyere_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ item: `tfc:metal/tuyere/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}tuyere/${heated}`
        })

    });
    const tfc_metal_tuyere_super_heated = [
        'cast_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel',
    ]

    tfc_metal_tuyere_super_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ item: `tfc:metal/tuyere/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}tuyere/${heated}`
        })

    });



    

    const tfc_metal_heated = [
        'bismuth_bronze',
        'bismuth',
        'black_bronze',
        'bronze',
        'brass',
        'copper',
        'gold',
        'rose_gold',
        'silver',
        'sterling_silver',
        'zinc',
        'tin'
    ]

    tfc_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `tfc:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });







    const ie_metal_heated = [
        'aluminum',
        'lead',
        'constantan',
        'electrum',
        'uranium'
    ]

    ie_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `tfc_ie_addon:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
    });





    const fl_metal_heated = [
        'chromium',
    ]

    fl_metal_heated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        });
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'heated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////



    const tfc_metal_superheated = [
        { item: 'weak_steel', type: '1' },
        { item: 'high_carbon_red_steel', type: '1' },
        { item: 'high_carbon_blue_steel', type: '1' },
        { item: 'high_carbon_black_steel', type: '1' },
        { item: 'high_carbon_steel', type: '1' },
        { item: 'weak_red_steel', type: '1' },
        { item: 'weak_blue_steel', type: '1' },

        { item: 'nickel', type: '2' },
        // { item: 'wrought_iron', type: '2' },
        //{ item: 'cast_iron', type: '2' },
        { item: 'steel', type: '2' },
        { item: 'black_steel', type: '2' },
        { item: 'blue_steel', type: '2' },
        { item: 'red_steel', type: '2' },

        //{ item: 'pig_iron', type: '2' },
    ]

    tfc_metal_superheated.forEach((heated) => {
        if (heated.type == '1', '2')
            recipes.push({
                ingredients: [{ tag: `forge:ingots/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 60,
                results: [{ amount: 100, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}`
            })
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:double_ingots/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 120,
                results: [{ amount: 200, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}double_${heated.item}`
            })
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:rods/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 30,
                results: [{ amount: 50, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_rod`
            });
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:sheets/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 120,
                results: [{ amount: 200, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_plate`
            });
        if (heated.type == '2')
            recipes.push({
                ingredients: [{ tag: `forge:double_sheets/${heated.item}` }],
                heatRequirement: 'superheated',
                processingTime: 240,
                results: [{ amount: 400, fluid: `tfc:metal/${heated.item}` }],
                id: `${id_prefix}${heated.item}_double_sheet`
            });
    });








    const fl_metal_superheated = [
        'stainless_steel'
    ]

    fl_metal_superheated.forEach((heated) => {
        recipes.push({
            ingredients: [{ tag: `forge:ingots/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 60,
            results: [{ amount: 100, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:double_ingots/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}double_${heated}`
        })
        recipes.push({
            ingredients: [{ tag: `forge:rods/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 30,
            results: [{ amount: 50, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_rod`
        });
        recipes.push({
            ingredients: [{ tag: `forge:sheets/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 120,
            results: [{ amount: 200, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_plate`
        });
        recipes.push({
            ingredients: [{ tag: `forge:double_sheets/${heated}` }],
            heatRequirement: 'superheated',
            processingTime: 240,
            results: [{ amount: 400, fluid: `firmalife:metal/${heated}` }],
            id: `${id_prefix}${heated}_double_sheet`
        });
    });


    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////



    const tfc_powders = [
        { dust: 'garnierite', fluid: 'nickel', type: 'superheated' },
        { dust: 'magnetite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'limonite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'hematite', fluid: 'cast_iron', type: 'superheated' },
        { dust: 'tetrahedrite', fluid: 'copper', type: 'heated' },
        { dust: 'malachite', fluid: 'copper', type: 'heated' },
        { dust: 'bismuthinite', fluid: 'bismuth', type: 'heated' },
        { dust: 'sphalerite', fluid: 'zinc', type: 'heated' },
        { dust: 'cassiterite', fluid: 'tin', type: 'heated' },
        { dust: 'native_copper', fluid: 'copper', type: 'heated' },
        { dust: 'native_gold', fluid: 'gold', type: 'heated' },
        { dust: 'native_silver', fluid: 'silver', type: 'heated' },
    ]

    tfc_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
        if (powder.type == 'superheated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'superheated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc:metal/${powder.fluid}` }],
                id: `${id_prefix}superheated_${powder.dust}`
            })
    });




    const ie_powders = [
        { dust: 'galena', fluid: 'lead', type: 'heated' },
        { dust: 'uraninite', fluid: 'uranium', type: 'superheated' },
        //{ dust: 'bauxite', fluid: 'aluminum', type: 'superheated' }
    ]
    ie_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc_ie_addon:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
        if (powder.type == 'superheated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'superheated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `tfc_ie_addon:metal/${powder.fluid}` }],
                id: `${id_prefix}superheated_${powder.dust}`
            })
    });





/*   const tfccore_powders = [
        { dust: 'chromium', fluid: 'chromium', type: 'heated' },
    ]
    tfccore_powders.forEach((powder) => {
        if (powder.type == 'heated')
            recipes.push({
                ingredients: [{ tag: `forge:powder/${powder.dust}` }],
                heatRequirement: 'heated',
                processingTime: 3,
                results: [{ amount: 5, fluid: `firmalife:metal/${powder.fluid}` }],
                id: `${id_prefix}heated_${powder.dust}`
            })
    });
*/



    //////////////////////////////////////
    //////////////////////////////////////
    //////////////////////////////////////


    recipes.forEach((recipe) => {
        recipe.type = 'createmetallurgy:melting';
        event.custom(recipe).id(recipe.id);
    });
});





/* const mods = [
    'tfc',
    'firmalife',
    'immersiveengineering',
    'tfc_ie_addon'
 
  ]
 
  const heateds = [
    'tfc:metal/ingot/bismuth_bronze', 
    'tfc:metal/ingot/black_bronze', 
    'tfc:metal/ingot/bronze', 
    'tfc:metal/ingot/brass', 
    'tfc:metal/ingot/copper', 
    'tfc:metal/ingot/gold', 
    'tfc:metal/ingot/rose_gold', 
    'tfc:metal/ingot/silver', 
    'tfc:metal/ingot/sterling_silver',
    'tfc:metal/ingot/zinc', 
    'tfc:metal/ingot/tin',
    'immersiveengineering:ingot_aluminum', 
    'immersiveengineering:ingot_lead', 
    'immersiveengineering:ingot_constantan', 
    'immersiveengineering:ingot_electrum', 
    'immersiveengineering:ingot_uranium', 
    'firmalife:metal/ingot/chromium', 
 
 
    'tfc:metal/double_ingot/bismuth_bronze', 
    'tfc:metal/double_ingot/black_bronze', 
    'tfc:metal/double_ingot/bronze', 
    'tfc:metal/double_ingot/brass', 
    'tfc:metal/double_ingot/copper', 
    'tfc:metal/double_ingot/gold', 
    'tfc:metal/double_ingot/rose_gold', 
    'tfc:metal/double_ingot/silver', 
    'tfc:metal/double_ingot/sterling_silver',
    'tfc:metal/double_ingot/zinc', 
    'tfc:metal/double_ingot/tin',
    'tfc_ie_addon:metal/double_ingot/aluminum', 
    'tfc_ie_addon:metal/double_ingot/lead', 
    'tfc_ie_addon:metal/double_ingot/constantan', 
    'tfc_ie_addon:metal/double_ingot/electrum', 
    'tfc_ie_addon:metal/double_ingot/uranium', 
    'firmalife:metal/double_ingot/chromium', 
 
]
 
  const superheateds = [
    'tfc:metal/ingot/nickel', 
    'tfc:metal/ingot/wrought_iron', 
    'tfc:metal/ingot/cast_iron', 
    'tfc:metal/ingot/pig_iron', 
    'tfc:metal/ingot/steel', 
    'tfc:metal/ingot/black_steel', 
    'tfc:metal/ingot/blue_steel', 
    'tfc:metal/ingot/red_steel', 
    'tfc:metal/ingot/weak_steel',
    'firmalife:metal/ingot/stainless_steel', 
    'tfc:metal/ingot/high_carbon_red_steel', 
    'tfc:metal/ingot/high_carbon_blue_steel', 
    'tfc:metal/ingot/high_carbon_black_steel', 
    'tfc:metal/ingot/high_carbon_steel', 
    'tfc:metal/ingot/weak_red_steel', 
    'tfc:metal/ingot/weak_blue_steel',
 
    'tfc:metal/double_ingot/nickel', 
    'tfc:metal/double_ingot/wrought_iron', 
    'tfc:metal/double_ingot/cast_iron', 
    'tfc:metal/double_ingot/steel', 
    'tfc:metal/double_ingot/black_steel', 
    'tfc:metal/double_ingot/blue_steel', 
    'tfc:metal/double_ingot/red_steel', 
    'firmalife:metal/double_ingot/stainless_steel'
] */

