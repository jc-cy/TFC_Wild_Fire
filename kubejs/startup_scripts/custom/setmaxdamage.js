// priority: -1
ItemEvents.modification(event => {



    const itema = [
        { name: 'tfc_hammer_time:metal/sledgehammer/copper', num: 1200 },//挖矿锤
        { name: 'tfc_hammer_time:metal/sledgehammer/bismuth_bronze', num: 2400 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_bronze', num: 3000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_bronze', num: 2600 },
        { name: 'tfc_hammer_time:metal/sledgehammer/wrought_iron', num: 4500 },
        { name: 'tfc_hammer_time:metal/sledgehammer/steel', num: 6600 },
        { name: 'tfc_hammer_time:metal/sledgehammer/black_steel', num: 9000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/red_steel', num: 15000 },
        { name: 'tfc_hammer_time:metal/sledgehammer/blue_steel', num: 15000 },

        { name: 'butcher:skinning_knife', num: 2000 },
        { name: 'butcher:butchers_knife', num: 2000 },
        { name: 'butcher:boneskinningknife', num: 50 },
        { name: 'create:sand_paper', num: 32 },



        { name: 'tfc:metal/boots/black_steel', num: 4000 },
        { name: 'tfc:metal/helmet/blue_steel', num: 4000 },
        { name: 'tfc:metal/chestplate/blue_steel', num: 4000 },
        { name: 'tfc:metal/greaves/blue_steel', num: 4000 },
        { name: 'tfc:metal/boots/blue_steel', num: 4000 },
        { name: 'tfc:metal/helmet/red_steel', num: 4000 },
        { name: 'tfc:metal/chestplate/red_steel', num: 4000 },
        { name: 'tfc:metal/greaves/red_steel', num: 4000 },
        { name: 'tfc:metal/boots/red_steel', num: 4000 },
        { name: 'tfc:metal/helmet/black_bronze', num: 4000 },
        { name: 'tfc:metal/chestplate/black_bronze', num: 4000 },
        { name: 'tfc:metal/greaves/black_bronze', num: 4000 },
        { name: 'tfc:metal/boots/black_bronze', num: 4000 },
        { name: 'tfc:metal/helmet/bismuth_bronze', num: 4000 },
        { name: 'tfc:metal/chestplate/bismuth_bronze', num: 4000 },
        { name: 'tfc:metal/greaves/bismuth_bronze', num: 4000 },
        { name: 'tfc:metal/boots/bismuth_bronze', num: 4000 },
        { name: 'tfc:metal/helmet/bronze', num: 4000 },
        { name: 'tfc:metal/chestplate/bronze', num: 4000 },
        { name: 'tfc:metal/greaves/bronze', num: 4000 },
        { name: 'tfc:metal/boots/bronze', num: 4000 },
        { name: 'tfc:metal/helmet/copper', num: 4000 },
        { name: 'tfc:metal/chestplate/copper', num: 4000 },
        { name: 'tfc:metal/greaves/copper', num: 4000 },
        { name: 'tfc:metal/boots/copper', num: 4000 },
        { name: 'tfc:metal/helmet/wrought_iron', num: 4000 },
        { name: 'tfc:metal/chestplate/wrought_iron', num: 4000 },
        { name: 'tfc:metal/greaves/wrought_iron', num: 4000 },
        { name: 'tfc:metal/boots/wrought_iron', num: 4000 },
        { name: 'tfc:metal/helmet/steel', num: 4000 },
        { name: 'tfc:metal/chestplate/steel', num: 4000 },
        { name: 'tfc:metal/greaves/steel', num: 4000 },
        { name: 'tfc:metal/boots/steel', num: 4000 },
        { name: 'tfc:metal/helmet/black_steel', num: 4000 },
        { name: 'tfc:metal/chestplate/black_steel', num: 4000 },
        { name: 'tfc:metal/greaves/black_steel', num: 4000 }


    ]
    itema.forEach(itema => {
        event.modify(itema.name, modify => { modify.setMaxDamage(itema.num) })
    })




    event.modify('artisanal:stone/flint_and/pyrite', modify => {
        modify.setMaxDamage(20)
    })//黄铁打火石
    event.modify('create:extendo_grip', modify => {
        modify.setMaxDamage(800)
    })//黄铁打火石
    event.modify('create:super_glue', modify => {
        modify.setMaxDamage(500)
    })//强力胶
    event.modify('bsa:bone/fishing_rod', modify => {
        modify.setMaxDamage(50)
    })//骨头吊杆
    const attack = [
        { name: 'tfc:metal/hoe/bismuth_bronze', att: 2 },
        { name: 'tfc:metal/hoe/black_bronze', att: 2 },
        { name: 'tfc:metal/hoe/bronze', att: 2 },
        { name: 'tfc:metal/hoe/copper', att: 2 },
        { name: 'tfc:metal/hoe/wrought_iron', att: 3 },
        { name: 'tfc:metal/hoe/steel', att: 4 },
        { name: 'tfc:metal/hoe/black_steel', att: 4 },
        { name: 'tfc:metal/hoe/red_steel', att: 5 },
        { name: 'tfc:metal/hoe/blue_steel', att: 5 },
        /*// 新增：钻石材质工具（material: 'diamond', attackDamage: 1）
        { name: 'kubejs:rock_tool/diamond_hammer', att: 4 },       // 钻石锤子：基础伤害4
        { name: 'kubejs:rock_tool/diamond_javelin', att: 4 },      // 钻石标枪：3+1=4（代码明确）
        { name: 'kubejs:rock_tool/diamond_hoe', att: 3 },          // 钻石锄头：基础伤害3
        { name: 'kubejs:rock_tool/diamond_knife', att: 3.5 },      // 钻石小刀：基础伤害3.5
        { name: 'kubejs:rock_tool/diamond_axe', att: 5 },          // 钻石斧头：基础伤害5
        { name: 'kubejs:rock_tool/diamond_shovel', att: 4 },       // 钻石铲子：基础伤害4
        { name: 'kubejs:rock_tool/diamond_acheulian', att: 3 },  // 钻石阿舍利手斧：略高于普通斧头

        // 新增：黑曜石材质工具（material: 'obsidian', attackDamage: 3）
        { name: 'kubejs:rock_tool/obsidian_hammer', att: 5 },      // 黑曜石锤子：基础伤害5
        { name: 'kubejs:rock_tool/obsidian_javelin', att: 6 },     // 黑曜石标枪：3+3=6（代码明确）
        { name: 'kubejs:rock_tool/obsidian_hoe', att: 4 },         // 黑曜石锄头：基础伤害4
        { name: 'kubejs:rock_tool/obsidian_knife', att: 4.5 },     // 黑曜石小刀：基础伤害4.5
        { name: 'kubejs:rock_tool/obsidian_axe', att: 7 },         // 黑曜石斧头：基础伤害7
        { name: 'kubejs:rock_tool/obsidian_shovel', att: 5 },      // 黑曜石铲子：基础伤害5
        { name: 'kubejs:rock_tool/obsidian_acheulian', att: 5 }, // 黑曜石阿舍利手斧：略高于普通斧头

        // 新增：燧石材质工具（material: 'flint', attackDamage: 0.5）
        { name: 'kubejs:rock_tool/flint_hammer', att: 3 },         // 燧石锤子：基础伤害3
        { name: 'kubejs:rock_tool/flint_javelin', att: 3.5 },      // 燧石标枪：3+0.5=3.5（代码明确）
        { name: 'kubejs:rock_tool/flint_hoe', att: 2.5 },          // 燧石锄头：基础伤害2.5
        { name: 'kubejs:rock_tool/flint_knife', att: 2.8 },        // 燧石小刀：基础伤害2.8
        { name: 'kubejs:rock_tool/flint_axe', att: 4.5 },          // 燧石斧头：基础伤害4.5
        { name: 'kubejs:rock_tool/flint_shovel', att: 3.2 },       // 燧石铲子：基础伤害3.2
        { name: 'kubejs:rock_tool/flint_acheulian', att: 3 },      // 燧石阿舍利手斧：略高于普通斧头*/

    ]
    attack.forEach(att =>
        event.modify(att.name, modification => {
            //modification.setAttackDamage(att.att);
            modification.setAttackSpeed(0.6);
        })
    )

}

)