/*
event.custom(
    {
        "type":"siegemachines:siege_workbench",
        "pattern":[
            "   ",
            "   ",
            "   "
        ],
        "key":{
            "":{
                "item":"",
                "count": 
            }
        },
        "result":{
            "item":"",
            "count":1
        }
    }
)
*/
ServerEvents.recipes(event => {
 event.custom(//红石工程块
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "key": {
              
                "a": {
                    "item": "tfc:metal/sheet/black_steel",
                    "count": 1
                },
                "b": {
                    "item": "immersiveengineering:wirecoil_redstone",
                    "count": 1
                },
                "c": {
                    "item": "create:electron_tube",
                    "count": 5
                }

            },
            "result": {
                "item": "immersiveengineering:rs_engineering",
                "count": 2
            }
        }
    )
    event.custom(//重型工程块
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "ada",
                "bcb",
                "ada"
            ],
            "key": {
              
                "a": {
                    "item": "tfc:metal/sheet/black_steel",
                    "count": 1
                },
                "b": {
                    "item": "kubejs:high_manganese_steel_bolt",
                    "count": 1
                },
                "c": {
                    "item": "kubejs:material_component_black_steel",
                    "count": 5
                },
                "d": {
                    "item": "tfc:metal/double_sheet/black_steel",
                    "count": 1
                }

            },
            "result": {
                "item": "immersiveengineering:heavy_engineering",
                "count": 2
            }
        }
    )
 event.custom(//轻型工程块
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "bcb",
                "aaa"
            ],
            "key": {
              
                "a": {
                    "item": "tfc:metal/sheet/steel",
                    "count": 1
                },
                "b": {
                    "item": "kubejs:steel_bolt",
                    "count": 1
                },
                "c": {
                    "item": "kubejs:material_component_steel",
                    "count": 5
                }

            },
            "result": {
                "item": "immersiveengineering:light_engineering",
                "count": 3
            }
        }
    )


    
    event.custom(//木梁支架
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "AaA",
                "a a",
                "AaA"
            ],
            "key": {
                "A": {
                    "item": 'siegemachines:beam',
                    "count": 2
                },
                "a": {
                    "item": 'siegemachines:beam',
                    "count": 1
                }

            },
            "result": {
                "item": "siegemachines:turret_base",
                "count": 1
            }
        }
    ).id('siegemachines:turret_base')
    
    
    
    //飞机配方
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                " b ",
                "dhc"
            ],
            "key": {
                "a": {
                    "item": 'immersive_aircraft:sail',
                    "count": 2
                },
                "b": {
                    "item": 'immersive_aircraft:hull',
                    "count": 2
                },
                "c": {
                    "item": 'create:propeller',
                    "count": 1
                },
                "d": {
                    "item": 'immersive_aircraft:sail',
                    "count": 1
                },
                "h": {
                    "item": 'immersive_aircraft:engine',
                    "count": 1
                }

            },
            "result": {
                "item": "immersive_aircraft:airship",
                "count": 1
            }
        }
    ).id('immersive_aircraft:airship')
    //小飞艇
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaC",
                "aad",
                "bec"
            ],
            "key": {
                "a": {
                    "item": 'immersive_aircraft:sail',
                    "count": 3
                },
                "b": {
                    "item": 'immersive_aircraft:hull',
                    "count": 3
                },
                "C": {
                    "item": 'create:propeller',
                    "count": 2
                },
                "c": {
                    "item": 'create:propeller',
                    "count": 1
                },
                "d": {
                    "item": 'immersive_aircraft:engine',
                    "count": 1
                },
                "e": {
                    "tag": 'handcrafted:chests',
                    "count": 4
                }

            },
            "result": {
                "item": "immersive_aircraft:cargo_airship",
                "count": 1
            }
        }
    ).id('immersive_aircraft:cargo_airship')
    //中飞艇
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "AAd",
                "aed",
                "bbC"
            ],
            "key": {
                "A": {
                    "item": 'immersive_aircraft:sail',
                    "count": 4
                },
                "a": {
                    "item": 'immersive_aircraft:sail',
                    "count": 1
                },
                "b": {
                    "item": 'immersive_aircraft:hull',
                    "count": 3
                },
                "C": {
                    "item": 'create:propeller',
                    "count": 2
                },
                "d": {
                    "item": 'immersive_aircraft:engine',
                    "count": 1
                },
                "e": {
                    "item": 'immersive_aircraft:cargo_airship',
                    "count": 1
                }

            },
            "result": {
                "item": "immersive_aircraft:warship",
                "count": 1
            }
        }
    ).id('immersive_aircraft:warship')
    //战斗飞艇
   /* event.custom( //手动旋翼机
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " T ",
                "BiB",
                "YHY"
            ],
            "key": {
                "T": {
                    "item": 'immersive_aircraft:propeller',
                    "count": 1
                },
                "i": {
                    "tag": 'tfc:axles',
                    "count": 4
                },
                "B": {
                    "item": 'immersive_aircraft:sail',
                    "count": 1
                },
                "H": {
                    "item": 'immersive_aircraft:hull',
                    "count": 2
                },
                "Y": {
                    "item": 'immersive_aircraft:sail',
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:gyrodyne",
                "count": 1
            }
        }
    ).id('immersive_aircraft:gyrodyne')*/
   
   event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "T T",
                "IhI",
                "HYH"
            ],
            "key": {
                "T": {
                    "item": 'immersive_aircraft:propeller',
                    "count": 2
                },
                "I": {
                    "item": 'minecraft:bamboo',
                    "count": 2
                },
                "h": {
                    "item": 'minecraft:scaffolding',
                    "count": 4
                },
                "H": {
                    "item": 'immersive_aircraft:hull',
                    "count": 1
                },
                "Y": {
                    "item": 'immersive_aircraft:engine',
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:quadrocopter",
                "count": 1
            }
        }
    ).id('immersive_aircraft:quadrocopter')
    //竹编四轴螺旋机
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "DH ",
                "hUF",
                "DHo"
            ],
            "key": {
                "H": {
                    "item": 'immersive_aircraft:hull',
                    "count": 5
                },
                "h": {
                    "tag": 'interiors:chairs',
                    "count": 1
                },
                "U": {
                    "item": 'immersive_aircraft:engine',
                    "count": 3
                },
                "F": {
                    "item": 'immersive_aircraft:propeller',
                    "count": 1
                },
                "o": {
                    "item": 'immersive_aircraft:improved_landing_gear',
                    "count": 2
                },
                "D": {
                    "item": 'immersive_aircraft:hull',
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:biplane",
                "count": 1
            }
        }
    ).id('immersive_aircraft:biplane')
    //双翼机

    //配件配方
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "aaa",
                "  c"
            ],
            "key": {
                "a": {
                    "tag": 'kubejs:can_make_sail',
                    "count": 1
                },
                "c": {
                    "tag": 'forge:string',
                    "count": 6
                }

            },
            "result": {
                "item": "immersive_aircraft:sail",
                "count": 3
            }
        }
    ).id('kubejs:immersive_aircraft/sail')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "bbb",
                "cdc"
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/cast_iron",
                    "count": 1
                },
                "b": {
                    "item": "createdieselgenerators:engine_piston",
                    "count": 2
                },
                "c": {
                    "item": "create:fluid_pipe",
                    "count": 2
                },
                "d": {
                    "item": "immersive_aircraft:boiler"
                }

            },
            "result": {
                "item": "immersive_aircraft:engine",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/engine')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "  a",
                " b ",
                "a  "
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/wrought_iron",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/rod/wrought_iron",
                    "count": 1
                },

            },
            "result": {
                "item": "immersive_aircraft:propeller",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/propeller')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " ab",
                "ab ",
                "cd "
            ],
            "key": {
                "a": {
                    "item": "vintageimprovements:iron_spring",
                    "count": 1
                },
                "b": {
                    "item": "minecraft:stick",
                    "count": 1
                },
                "c": {
                    "item": "minecraft:coal_block",
                    "count": 2
                },
                "d": {
                    "item": "create:shaft",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:improved_landing_gear",
                "count": 1
            }
        }
    ).id('kubejs:immersive_aircraft/improved_landing_gear')
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "bcb",
                "aaa"
            ],
            "key": {
                "a": {
                    "item": "siegemachines:beam",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/sheet/wrought_iron",
                    "count": 1
                },
                "c": {
                    "item": "siegemachines:beam",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:hull",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "ab ",
                "bcb",
                " ba"
            ],
            "key": {
                "a": {
                    "item": "vintageimprovements:small_brass_spring",
                    "count": 1
                },
                "b": {
                    "item": "tfc:metal/sheet/brass",
                    "count": 1
                },
                "c": {
                    "item": "tfc:brass_mechanisms",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:enhanced_propeller",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " a ",
                "bcb",
                "ded"
            ],
            "key": {
                "a": {
                    "item": "minecraft:crossbow",
                    "count": 1
                },
                "b": {
                    "item": "create:cogwheel",
                    "count": 1
                },
                "c": {
                    "item": "create:vertical_gearbox",
                    "count": 1
                },
                "d": {
                    "item": "siegemachines:beam",
                    "count": 1
                },
                "e": {
                    "item": "siegemachines:turret_base",
                    "count": 4
                }
            },
            "result": {
                "item": "immersive_aircraft:heavy_crossbow",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " ba",
                "c b",
                "dc "
            ],
            "key": {
                "a": {
                    "item": "create:cogwheel",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/sheet/copper",
                    "count": 1
                },
                "c": {
                    "item": "tfc:metal/sheet/wrought_iron",
                    "count": 1
                },
                "d": {
                    "item": "create:large_cogwheel",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:industrial_gears",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " a ",
                "aca",
                "bdb"
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/copper",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/double_ingot/copper",
                    "count": 2
                },
                "c": {
                    "item": "kubejs:charcoal_briquette",
                    "count": 1
                },
                "d": {
                    "item": "tfc:metal/trapdoor/copper",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:boiler",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "eae",
                "aca",
                "bdb"
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/steel",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/double_ingot/steel",
                    "count": 2
                },
                "c": {
                    "item": "kubejs:charcoal_briquette",
                    "count": 1
                },
                "d": {
                    "item": "tfc:metal/trapdoor/steel",
                    "count": 1
                },
                "e": {
                    "item": "immersive_aircraft:sturdy_pipes",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:steel_boiler",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "  a",
                "bcb",
                "a  "
            ],
            "key": {
                "a": {
                    "item": "create:fluid_pipe",
                    "count": 1
                },
                "b": {
                    "item": "create:andesite_alloy",
                    "count": 2
                },
                "c": {
                    "item": "create:fluid_pipe",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:sturdy_pipes",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " ab",
                "cdb",
                " e "
            ],
            "key": {
                "a": {
                    "item": "minecraft:compass",
                    "count": 1
                },
                "b": {
                    "item": "minecraft:repeater",
                    "count": 1
                },
                "c": {
                    "item": "minecraft:redstone_torch",
                    "count": 1
                },
                "d": {
                    "item": "create:flywheel",
                    "count": 1
                },
                "e": {
                    "tag": "tfc:axles",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:gyroscope",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                " a ",
                " b ",
                "cdc"
            ],
            "key": {
                "": {
                    "item": "create:vertical_gearbox",
                    "count": 1
                },
                "": {
                    "item": "minecraft:spyglass",
                    "count": 1
                },
                "": {
                    "item": "vintageimprovements:andesite_sheet",
                    "count": 2
                },
                "": {
                    "item": "siegemachines:turret_base",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:telescope",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aaa",
                "bcd",
                "aaa"
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/cast_iron",
                    "count": 1
                },
                "b": {
                    "item": "create:cogwheel",
                    "count": 2
                },
                "c": {
                    "item": "create:item_vault",
                    "count": 4
                },
                "d": {
                    "item": "create:large_cogwheel",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:bomb_bay",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aba",
                "cdc",
                " e "
            ],
            "key": {
                "a": {
                    "item": "create:potato_cannon",
                    "count": 1
                },
                "b": {
                    "item": "tfc:metal/double_ingot/copper",
                    "count": 2
                },
                "c": {
                    "item": "create:vertical_gearbox",
                    "count": 1
                },
                "d": {
                    "item": "immersive_aircraft:industrial_gears",
                    "count": 1
                },
                "e": {
                    "item": "siegemachines:turret_base",
                    "count": 2
                }
            },
            "result": {
                "item": "immersive_aircraft:rotary_cannon",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "aba",
                "cdc",
                "efe"
            ],
            "key": {
                "a": {
                    "item": "tfc:steel_pipe",
                    "count": 2
                },
                "b": {
                    "item": "tfc:metal/trapdoor/black_steel",
                    "count": 1
                },
                "c": {
                    "item": "tfc:metal/sheet/black_steel",
                    "count": 2
                },
                "d": {
                    "item": "immersive_aircraft:engine",
                    "count": 1
                },
                "e": {
                    "item": "tfc:metal/double_ingot/black_steel",
                    "count": 1
                },
                "f": {
                    "item": "tfc:blast_furnace",
                    "count": 1
                }
            },
            "result": {
                "item": "immersive_aircraft:nether_engine",
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "siegemachines:siege_workbench",
            "pattern": [
                "a a",
                "aba",
                " c "
            ],
            "key": {
                "a": {
                    "item": "tfc:metal/sheet/wrought_iron",
                    "count": 1
                },
                "b": {
                    "item": "tfc:metal/double_sheet/wrought_iron",
                    "count": 1
                },
                "c": {
                    "item": "tfc:metal/ingot/cast_iron",
                    "count": 2
                }
            },
            "result": {
                "item": "siegemachines:barrel",
                "count": 1
            }
        }
    )

})
