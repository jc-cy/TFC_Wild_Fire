ServerEvents.recipes(event => {
    const create = event.recipes.create
    const ingot = [
        { type: "1", ingot: "bismuth" },
        { type: "1", ingot: "bismuth_bronze" },
        { type: "1", ingot: "black_bronze" },
        { type: "1", ingot: "black_steel" },
        { type: "1", ingot: "blue_steel" },
        { type: "1", ingot: "brass" },
        { type: "1", ingot: "bronze" },
        { type: "1", ingot: "cast_iron" },
        { type: "1", ingot: "copper" },
        { type: "1", ingot: "gold" },
        { type: "1", ingot: "nickel" },
        { type: "1", ingot: "steel" },
        { type: "1", ingot: "sterling_silver" },
        { type: "1", ingot: "wrought_iron" },
        { type: "1", ingot: "zinc" },
        { type: "1", ingot: "tin" },
        { type: "1", ingot: "red_steel" },
        { type: "1", ingot: "rose_gold" },
        { type: "1", ingot: "silver" },
        { type: "2", ingot: "chromium" },
        { type: "2", ingot: "stainless_steel" },
        { type: "3", ingot: "aluminum" },
        { type: "3", ingot: "uranium" },
        { type: "3", ingot: "constantan" },
        { type: "3", ingot: "electrum" },
        { type: "3", ingot: "lead" }
    ];


    //激光焊接


    function create_sequenced_assembly_ingottodoubleingot(input, type) {
        //输入  输出
        // 锭>双锭 部分
        if (type == "1") {
            create.deploying(`kubejs:unfinished/double_ingot/${input}`, [`tfc:metal/ingot/${input}`, `tfc:metal/ingot/${input}`]).id(`kubejs:deploying/double_ingot/${input}_hide`)
            event.shapeless(`kubejs:unfinished/double_ingot/${input}`, [`tfc:metal/ingot/${input}`, `tfc:metal/ingot/${input}`])
            event.shapeless(`2x tfc:metal/ingot/${input}`, `kubejs:unfinished/double_ingot/${input}`)

        }
        if (type == "2") {
            create.deploying(`kubejs:unfinished/double_ingot/${input}`, [`firmalife:metal/ingot/${input}`, `firmalife:metal/ingot/${input}`]).id(`kubejs:deploying/double_ingot/${input}_hide`)
            event.shapeless(`kubejs:unfinished/double_ingot/${input}`, [`firmalife:metal/ingot/${input}`, `firmalife:metal/ingot/${input}`])
            event.shapeless(`2x firmalife:metal/ingot/${input}`, `kubejs:unfinished/double_ingot/${input}`)
        }

        if (type == "3") {
            create.deploying(`kubejs:unfinished/double_ingot/${input}`, [`immersiveengineering:ingot_${input}`, `immersiveengineering:ingot_${input}`]).id(`kubejs:deploying/double_ingot/${input}_hide`)
            event.shapeless(`kubejs:unfinished/double_ingot/${input}`, [`immersiveengineering:ingot_${input}`, `immersiveengineering:ingot_${input}`])
            event.shapeless(`2x immersiveengineering:ingot_${input}`, `kubejs:unfinished/double_ingot/${input}`)
        }
        //双锭->热双锭->辊压 部分
        const create_sequenced_assembly = (input1) => {
            return event.custom({
                "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": `kubejs:unfinished/double_ingot/${input1}` }],
                "results": [{ "item": `kubejs:unfinished/hot_double_ingot/${input1}`, "count": 1 }], "energy": 1000, "maxChargeRate": 50
            })
        }
        const typemap = {
            "1": { in: `kubejs:unfinished/double_ingot/${input}`, out: `tfc:metal/double_ingot/${input}` },
            "2": { in: `kubejs:unfinished/double_ingot/${input}`, out: `firmalife:metal/double_ingot/${input}` },
            "3": { in: `kubejs:unfinished/double_ingot/${input}`, out: `tfc:metal/double_ingot/${input}` }
        }[type]
        if (typemap) {


            create.sequenced_assembly(typemap.out, typemap.in,
                [
                    create_sequenced_assembly(input),
                    create.pressing(typemap.out, `kubejs:unfinished/hot_double_ingot/${input}`),
                ]
            ).transitionalItem(`kubejs:unfinished/hot_double_ingot/${input}`).loops(1).id(`kubejs:sequenced_assembly/double_ingot/${input}_hide`)//隐藏


            if (type == "1") {
                create.sequenced_assembly(typemap.out, Item.of(`tfc:metal/ingot/${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_ingot/${input}`, [Item.of(`tfc:metal/ingot/${input}`, '{"hide":1}').weakNBT(), `tfc:metal/ingot/${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_ingot/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_ingot/${input}`).loops(1)
            }
            if (type == "2") {
                create.sequenced_assembly(typemap.out, Item.of(`firmalife:metal/ingot/${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_ingot/${input}`, [Item.of(`firmalife:metal/ingot/${input}`, '{"hide":1}').weakNBT(), `firmalife:metal/ingot/${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_ingot/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_ingot/${input}`).loops(1)
            }
            if (type == "3") {
                create.sequenced_assembly(typemap.out, Item.of(`immersiveengineering:ingot_${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_ingot/${input}`, [Item.of(`immersiveengineering:ingot_${input}`, '{"hide":1}').weakNBT(), `immersiveengineering:ingot_${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_ingot/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_ingot/${input}`).loops(1)
            }

        }

    }
    function create_sequenced_assembly_sheettodoublesheet(input, type) {
        //输入  输出
        // 锭>双锭 部分'tfc_ie_addon:metal/sheet/uranium'
        if (type == "1") {
            create.deploying(`kubejs:unfinished/double_sheet/${input}`, [`tfc:metal/sheet/${input}`, `tfc:metal/sheet/${input}`])
            event.shapeless(`kubejs:unfinished/double_sheet/${input}`, [`tfc:metal/sheet/${input}`, `tfc:metal/sheet/${input}`])
            event.shapeless(`2x tfc:metal/sheet/${input}`, `kubejs:unfinished/double_sheet/${input}`)

        }
        if (type == "2") {
            create.deploying(`kubejs:unfinished/double_sheet/${input}`, [`firmalife:metal/sheet/${input}`, `firmalife:metal/sheet/${input}`])
            event.shapeless(`kubejs:unfinished/double_sheet/${input}`, [`firmalife:metal/sheet/${input}`, `firmalife:metal/sheet/${input}`])
            event.shapeless(`2x firmalife:metal/sheet/${input}`, `kubejs:unfinished/double_sheet/${input}`)
        }

        if (type == "3") {
            create.deploying(`kubejs:unfinished/double_sheet/${input}`, [`tfc_ie_addon:metal/sheet/${input}`, `tfc_ie_addon:metal/sheet/${input}`])
            event.shapeless(`kubejs:unfinished/double_sheet/${input}`,  `2x tfc_ie_addon:metal/sheet/${input}`)
            event.shapeless(`2x tfc_ie_addon:metal/sheet/${input}`, `kubejs:unfinished/double_sheet/${input}`)
        }
             //双锭->热双锭->辊压 部分
        const create_sequenced_assembly = (input1) => {
            return event.custom({
                "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": `kubejs:unfinished/double_sheet/${input1}` }],
                "results": [{ "item": `kubejs:unfinished/hot_double_sheet/${input1}`, "count": 1 }], "energy": 1000, "maxChargeRate": 50
            })
        }
        const typemap = {
            "1": { in: `kubejs:unfinished/double_sheet/${input}`, out: `tfc:metal/double_sheet/${input}` },
            "2": { in: `kubejs:unfinished/double_sheet/${input}`, out: `firmalife:metal/double_sheet/${input}` },
            "3": { in: `kubejs:unfinished/double_sheet/${input}`, out: `immersiveengineering:double_sheet_${input}` }
        }[type]
        if (typemap) {
          

            create.sequenced_assembly(typemap.out, typemap.in,
                [
                    create_sequenced_assembly(input),
                    create.pressing(typemap.out, `kubejs:unfinished/hot_double_sheet/${input}`),
                ]
            ).transitionalItem(`kubejs:unfinished/hot_double_sheet/${input}`).loops(1).id(`kubejs:sequenced_assembly/double_sheet/${input}_hide`)//隐藏


            if (type == "1") {
                create.sequenced_assembly(typemap.out, Item.of(`tfc:metal/sheet/${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_sheet/${input}`, [Item.of(`tfc:metal/sheet/${input}`, '{"hide":1}').weakNBT(), `tfc:metal/sheet/${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_sheet/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_sheet/${input}`).loops(1)
            }
            if (type == "2") {
                create.sequenced_assembly(typemap.out, Item.of(`firmalife:metal/sheet/${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_sheet/${input}`, [Item.of(`firmalife:metal/sheet/${input}`, '{"hide":1}').weakNBT(), `firmalife:metal/sheet/${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_sheet/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_sheet/${input}`).loops(1)
            }
            if (type == "3") {
                create.sequenced_assembly(typemap.out, Item.of(`tfc_ie_addon:metal/sheet/${input}`, '{"hide":1}').weakNBT(),
                    [
                        create.deploying(`kubejs:unfinished/double_sheet/${input}`, [Item.of(`tfc_ie_addon:metal/sheet/${input}`, '{"hide":1}').weakNBT(), `tfc_ie_addon:metal/sheet/${input}`]),//第一步
                        create_sequenced_assembly(input),
                        create.pressing(typemap.out, `kubejs:unfinished/hot_double_sheet/${input}`),
                    ]
                ).transitionalItem(`kubejs:unfinished/hot_double_sheet/${input}`).loops(1)
            }

        }

    }

    ingot.forEach(ingot => {
        create_sequenced_assembly_ingottodoubleingot(ingot.ingot, ingot.type)
        create_sequenced_assembly_sheettodoublesheet(ingot.ingot, ingot.type)

    })






    //激光焊接-板>双层薄板
    /*
        double_ingots.forEach(di => {
            const input1 = `tfc:metal/sheet/${di}`
            const output1 = `tfc:metal/double_sheet/${di}`
            create.sequenced_assembly(output1, input1,
                [create.deploying(input1, [input1, input1]),
                event.custom({
                    "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": input1 }],
                    "results": [{ "item": input1, "count": 1 }], "energy": 2000, "maxChargeRate": 50
                }),
                create.pressing(input1, input1),
                ]
            ).transitionalItem(input1).loops(1)//
        })
        fdouble_ingots.forEach(di => {
            const input1 = `firmalife:metal/sheet/${di}`
            const output1 = `firmalife:metal/double_sheet/${di}`
            create.sequenced_assembly(output1, input1,
                [create.deploying(input1, [input1, input1]),
                event.custom({
                    "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": input1 }],
                    "results": [{ "item": input1, "count": 1 }], "energy": 2000, "maxChargeRate": 50
                }),
                create.pressing(input1, input1),
                ]
            ).transitionalItem(input1).loops(1)//
        })
    
        create.sequenced_assembly('immersiveengineering:sawblade', 'tfc:metal/sheet/wrought_iron',
            [
                create.deploying('tfc:metal/sheet/wrought_iron', ['tfc:metal/sheet/wrought_iron', 'tfc:metal/rod/wrought_iron']),
                event.custom({
                    "type": "vintageimprovements:laser_cutting", "ingredients": [{ "item": 'immersiveengineering:sawblade' }],
                    "results": [{ "item": 'tfc:metal/sheet/wrought_iron', "count": 1 }], "energy": 300, "maxChargeRate": 10
                }),
            ]
        ).transitionalItem('tfc:metal/sheet/wrought_iron').loops(4)//
    */

})