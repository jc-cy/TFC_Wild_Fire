//priority: 1
let wash_ore = [
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'uraninite', temperature: 1130, color: 0x262626, out: 'tfc_ie_addon:metal/uranium' },
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'galena', temperature: 1157, color: 0x808080, out: 'tfc_ie_addon:metal/lead' },
    { mod: 'tfc_ie_addon:ore', type: '/type_', ore: 'bauxite', temperature: 2072, color: 0xA0522D, out: 'tfc_ie_addon:metal/aluminum' },
    { mod: 'firmalife:ore', type: '/type_', ore: 'chromite', temperature: 1907, color: 0x4F4F4F, out: 'firmalife:metal/chromium' },
    { mod: 'tfc:ore', type: '/type_', ore: 'limonite', color: 0xD2691E, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'limonite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'magnetite', color: 0x363636, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'magnetite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'hematite', color: 0xB22222, temperature: 1538, out: 'tfc:metal/cast_iron', metal: 'hematite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_copper', color: 0xB87333, temperature: 1085, out: 'tfc:metal/copper', metal: 'copper' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_gold', color: 0xFFD700, temperature: 1064, out: 'tfc:metal/gold', metal: 'gold' },
    { mod: 'tfc:ore', type: '/type_', ore: 'native_silver', color: 0xC0C0C0, temperature: 961, out: 'tfc:metal/silver', metal: 'silver' },
    { mod: 'tfc:ore', type: '/type_', ore: 'tetrahedrite', color: 0x556B2F, temperature: 1083, out: 'tfc:metal/copper', metal: 'tetrahedrite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'sphalerite', color: 0x9370DB, temperature: 419, out: 'tfc:metal/zinc', metal: 'sphalerite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'cassiterite', color: 0x708090, temperature: 232, out: 'tfc:metal/tin', metal: 'cassiterite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'bismuthinite', color: 0x8A2BE2, temperature: 271, out: 'tfc:metal/bismuth', metal: 'bismuthinite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'garnierite', color: 0x7CCD7C, temperature: 1453, out: 'tfc:metal/nickel', metal: 'garnierite' },
    { mod: 'tfc:ore', type: '/type_', ore: 'malachite', color: 0x00FF7F, temperature: 1085, out: 'tfc:metal/copper', metal: 'malachite' },
    { mod: 'tfc:ore', type: '/', ore: 'sulfur', color: 0xFFFF00 },
    { mod: 'tfc:ore', type: '/', ore: 'graphite', color: 0x202020 },
    { mod: 'tfc:ore', type: '/', ore: 'cryolite', color: 0xF0F8FF },
    { mod: 'tfc:ore', type: '/', ore: 'cinnabar', color: 0xFF0000 },

    { mod: 'tfc:ore', type: '/', ore: 'ilmenite', color: 0xFF0000 },//钛铁
    { mod: 'tfc:ore', type: '/type_', ore: 'manganese', color: 0xFF0000, temperature: 1246, out: 'tfc:metal/raw_ferromanganese', metal: 'manganese' },///锰
    { mod: 'tfc:ore', type: '/', ore: 'native_vanadium', color: 0xFF0000 },//钒
];
const washoretype = [
    { type: "rocky_chunks", num: 4 },//多石
    { type: "chunks", num: 4 },//粗块
    { type: "dirty_dust", num: 5 },//脏粉
    { type: "dirty_pile", num: 1 },//小堆脏粉
    { type: "purified_dust", num: 5 },//除杂矿粉
    { type: "refined_dust", num: 10 },//精炼矿粉
    { type: "dust_lump", num: 20 },     //矿粉块
    { type: "dust_clump", num: 80 }, //矿粉团
    { type: "dust_brick", num: 90 } //精炼矿粉砖
];
ServerEvents.recipes(event => {
    const recipedid = 'kubejs:wash_ore/heatore/';
    const { tfc, create } = event.recipes;
    wash_ore.forEach(ore => {
        if (ore.temperature) {
            washoretype.forEach(ore1 => {
                tfc.heating(`kubejs:item/ore/${ore1.type}/${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, ore1.num))
                    .id(`${recipedid}${ore1.type}/${ore.ore}`);//加热矿f粉融化
            })
            if (ore.mod == 'tfc_ie_addon:ore') {
                tfc.heating(`tfc_ie_addon:powder/${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/powder_${ore.ore}`)//粉末
                tfc.heating(`tfc_ie_addon:ore/small_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/small_${ore.ore}`)//粒
                tfc.heating(`tfc_ie_addon:ore/poor_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10)).id(`${recipedid}heating/poor_${ore.ore}`)//贫瘠
                tfc.heating(`tfc_ie_addon:ore/normal_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15)).id(`${recipedid}heating/normal_${ore.ore}`)//普通
                tfc.heating(`tfc_ie_addon:ore/rich_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25)).id(`${recipedid}heating/rich_${ore.ore}`)//富集
            }
            if (ore.mod == 'firmalife:ore') {
                tfc.heating(`firmalife:powder/${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/powder_${ore.ore}`)//粉末
                tfc.heating(`firmalife:ore/small_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/small_${ore.ore}`)//粒
                tfc.heating(`firmalife:ore/poor_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10)).id(`${recipedid}heating/poor_${ore.ore}`)//贫瘠
                tfc.heating(`firmalife:ore/normal_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15)).id(`${recipedid}heating/normal_${ore.ore}`)//普通
                tfc.heating(`firmalife:ore/rich_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25)).id(`${recipedid}heating/rich_${ore.ore}`)//富集
            }
            if (ore.mod == 'tfc:ore' && ore.type == '/type_' && ore.ore != 'manganese') {
                tfc.heating(`tfc:powder/${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/powder_${ore.ore}`)//粉末
                tfc.heating(`tfc:ore/small_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/small_${ore.ore}`)//粒
                tfc.heating(`tfc:ore/poor_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10)).id(`${recipedid}heating/poor_${ore.ore}`)//贫瘠
                tfc.heating(`tfc:ore/normal_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15)).id(`${recipedid}heating/normal_${ore.ore}`)//普通
                tfc.heating(`tfc:ore/rich_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25)).id(`${recipedid}heating/rich_${ore.ore}`)//富集
            } else if (ore.mod == 'tfc:ore' && ore.type == '/type_' && ore.ore == 'manganese') {
                tfc.heating(`tfc:powder/${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/powder_${ore.ore}`)//粉末
                tfc.heating(`kubejs:ore/small_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 5)).id(`${recipedid}heating/small_${ore.ore}`)//粒
                tfc.heating(`tfc:ore/poor_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 10)).id(`${recipedid}heating/poor_${ore.ore}`)//贫瘠
                tfc.heating(`tfc:ore/normal_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 15)).id(`${recipedid}heating/normal_${ore.ore}`)//普通
                tfc.heating(`tfc:ore/rich_${ore.ore}`, `${ore.temperature}`).resultFluid(Fluid.of(`${ore.out}`, 25)).id(`${recipedid}heating/rich_${ore.ore}`)//富集



            }


            tfc.barrel_sealed(30 * 20)//变成矿浆处理
                .outputFluid(Fluid.of(`kubejs:fluid/ore/slurry/${ore.ore}`, 250))
                .inputs(`kubejs:item/ore/dirty_dust/${ore.ore}`, TFC.fluidStackIngredient('minecraft:water', 250))
                .id(`${recipedid}barrel_sealed/slurry/${ore.ore}`)
            tfc.pot(//矿浆处理
                [],
                Fluid.of(`kubejs:fluid/ore/slurry/${ore.ore}`, 1000), 20 * 25, 100).itemOutput(`5x kubejs:item/ore/purified_dust/${ore.ore}`)
                .id(`${recipedid}pot/slurry/${ore.ore}`)




            //机械动力简易化
            create.mixing(Fluid.of(`kubejs:fluid/ore/slurry/${ore.ore}`, 250), [`kubejs:item/ore/dirty_dust/${ore.ore}`, Fluid.of('minecraft:water', 250)])//矿浆
            event.custom({//发酵矿浆精炼
                "type": "createdieselgenerators:basin_fermenting",
                "heatRequirement": "heated",
                "ingredients": [
                    {
                        "amount": 250,
                        "fluid": `kubejs:fluid/ore/slurry/${ore.ore}`
                    }
                ],
                "processingTime": 20,
                "results": [
                    {
                        "item": `kubejs:item/ore/refined_dust/${ore.ore}`
                    }
                ]
            }).id(`${recipedid}mixing/heatslurry/refined_${ore.ore}`)//原浆发酵成精矿粉末


            event.custom({//加热矿浆蒸发
                "type": "create:mixing",
                "heatRequirement": "heated",
                "processingTime": 100,
                "ingredients": [

                    {
                        "amount": 200,
                        "fluid": `kubejs:fluid/ore/slurry/${ore.ore}`,

                    }
                ],
                "results": [
                    {
                        "item": `kubejs:item/ore/purified_dust/${ore.ore}`

                    }
                ]
            }).id(`${recipedid}mixing/heatslurry/${ore.ore}`);


            /*  washoretype.forEach(ore1 => {
                  if (ore1.type != "dirty_dust") {
                      event.custom({//加热搅拌矿石融化
                          "type": "woodencog:heated_mixing",
                          "heatRequirement": ore.temperature,
                          "processingTime": 100,
                          "ingredients": [
                              {
                                  "type": "woodencog:heated",
                                  "ingredient": {
                                      "item": `kubejs:item/ore/${ore1.type}/${ore.ore}`
                                  },
  
  
                              }
                          ],
                          "results": [
                              {
                                  "amount": ore1.num,
                                  "fluid": ore.out
                              }
                          ]
                      }).id(`${recipedid}mixing/${ore1.type}/${ore.ore}`);
                  }
              })*/





        }


    })









})