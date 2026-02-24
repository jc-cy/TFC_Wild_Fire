 /*
  event.shaped('minecraft:prismarine_shard', ['aaa', 'aab', ' aa'], {
        a: {
            "type": "tfc:heatable",
            "min_temp": 120,
            "ingredient": { "item": "tfc:ore/normal_hematite" }

        }, b: '#tfc:knives'
    }).damageIngredient({ tag: '#tfc:knives' }, 20)//测试  
    // event.custom(
    {
        "type":"minecraft:crafting_shaped",
        "pattern":[
            "aba",
            "bab",
            "aba"
        ],
        "key":{
            "a":{
                "item":"tfc:burlap_cloth",
                "count":1 
            },
            "b":{
                "item":"tfc:jute_fiber",
                "count":1 
            }            
        },
        "result":{
            "item":"vc_gliders:reinforced_paper",
            "count":1
        }
    }
).id('kubejs:vc_gliders/reinforced_paper')//普通布
*/
ServerEvents.recipes(event => {
     event.custom(
    {
        "type":"minecraft:crafting_shaped",
        "pattern":[
            "aba",
            "bab",
            "aba"
        ],
        "key":{
            "a":{
                "item":"tfc:burlap_cloth",
                "count":1 
            },
            "b":{
                "item":"tfc:jute_fiber",
                "count":1 
            }            
        },
        "result":{
            "item":"vc_gliders:reinforced_paper",
            "count":1
        }
    }
).id('kubejs:vc_gliders/reinforced_paper')//普通布
event.custom(
    {
        "type":"minecraft:crafting_shaped",
        "pattern":[
            "aba",
            "cdc",
            "c c"
        ],
        "key":{
            "a":{
                "item":"tfc:small_scraped_hide",
                "count":1 
            },
            "b":{
                "item":"tfc:straw",
                "count":1 
            },           
            "c":{
                "item":"minecraft:stick",
                "count":1 
            }, 
            "d":{
                "item":"tfc:large_scraped_hide",
                "count":1 
            },
        },
        "result":{
            "item":"vc_gliders:paraglider_wood",
            "count":1
        }
    }
).id('kubejs:vc_gliders/paraglider_wood')//皮的
event.shaped('vc_gliders:reinforced_paper_iron', 
    ['ab',
     'ac'], 
    {
        c: TFC.ingredient.heatable('tfc:metal/rod/copper', 600, null), 
        a:"vc_gliders:reinforced_paper",
        b:'#tfc:hammers'
    }).damageIngredient({ tag: '#tfc:hammers' }, 20)//铜的
event.shaped('vc_gliders:reinforced_paper_gold', 
    ['aab',
     'aac',
    '   '], 
    {
        c: {
            "type": "tfc:heatable",
            "min_temp": 300,
            "ingredient": {"item":"immersiveengineering:stick_aluminum"}

        },
        a:"tfc:silk_cloth",
        b:'#tfc:hammers'
    }).damageIngredient({ tag: '#tfc:hammers' }, 20)//铝的
event.shaped('vc_gliders:reinforced_paper_diamond', 
    ['bab',
     'aca',
    'bab'], 
    {
        c: {
            "type": "tfc:heatable",
            "min_temp": 1000,
            "ingredient": {"item": "tfc:metal/rod/steel"}

        },
        a:"tfc:silk_cloth",
        b:'vintageimprovements:steel_wire'
    })//钢的
event.shaped('vc_gliders:reinforced_paper_netherite', 
    ['bab',
     'aca',
    'bab'], 
    {
        c: {
            "type": "tfc:heatable",
            "min_temp": 1000,
            "ingredient": {"item": "tfc:metal/rod/black_steel"}

        },
        a:"vc_gliders:reinforced_paper_diamond",
        b:'vintageimprovements:steel_wire'
    })//高锰钢的    
event.shaped('vc_gliders:copper_upgrade', 
    ['b b',
     'aca',
    'b b'], 
    {
        c: {
            "type": "tfc:heatable",
            "min_temp": 350,
            "ingredient": {"item": "immersiveengineering:ingot_aluminum"}

        },
        a:"immersiveengineering:wire_aluminum",
         b: {
            "type": "tfc:heatable",
            "min_temp": 350,
            "ingredient": {"item": "immersiveengineering:stick_aluminum"}

        },
    })//铝架子  
event.shaped('vc_gliders:nether_upgrade', 
    ['bdb',
     'aca',
    'b b'], 
    {

        a:"immersiveengineering:wire_aluminum",
        d:"immersiveengineering:wire_steel",
        b: {
            "type": "tfc:heatable",
            "min_temp": 1000,
            "ingredient": {"item": "tfc:metal/rod/steel"}

        },
        c: {
            "type": "tfc:heatable",
            "min_temp": 1000,
            "ingredient": {"item": "tfc:metal/sheet/steel"}

        }
    })//钢架子  
event.shaped('vc_gliders:paraglider_netherite', 
    ['aaa',
     'bcb',
    'd d'], 
    {
        a:"vc_gliders:reinforced_paper_netherite",
        b:"immersiveengineering:wire_steel",
        c:"vc_gliders:nether_upgrade",
        d:"tfc:metal/rod/black_steel",
    })//钢  
event.shaped('vc_gliders:paraglider_diamond', 
    ['aaa',
     'bcb',
    'd d'], 
    {
        a:"vc_gliders:reinforced_paper_diamond",
        b:"immersiveengineering:wire_aluminum",
        c:"vc_gliders:nether_upgrade",
        d:"tfc:metal/rod/steel",
    })//铁  
event.shaped('vc_gliders:paraglider_gold', 
    ['aaa',
     'bcb',
    'ded'], 
    {
        a:"vc_gliders:reinforced_paper_gold",
        b:"minecraft:string",
        c:"vc_gliders:copper_upgrade",
        d:"immersiveengineering:stick_aluminum",
        e:"immersiveengineering:stick_treated",
    })//铝  
event.shaped('vc_gliders:paraglider_iron', 
    ['aea',
     'bdb',
    'd d'], 
    {
        a:"vc_gliders:reinforced_paper_iron",
        b:"bsa:sinew_string",
        d:"immersiveengineering:stick_treated",
        e:"vc_gliders:reinforced_paper",
    })//普
})