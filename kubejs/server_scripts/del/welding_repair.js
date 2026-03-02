// 阻止工具放在错误的位置 工具检测 '#minecraft:tools'
/*BlockEvents.rightClicked(event => {
    const { item, block, player } = event
    if (!item.hasTag('tfc:hammers')) return
    if (!block.hasTag('tfc:anvils')) return
    if (!player.shiftKeyDown) return

    let wrong_recipe = false

    //let Items = /**@type {Array} */ //(block.getEntityData()['inventory']['Items'])
   /*   Items.forEach(slot => {
      if (slot.Slot == 1) {
            if (Item.of(slot.id).hasTag('tfc:usable_on_tool_rack')) {
                wrong_recipe = true
            }
        }
    })
    if (wrong_recipe) event.cancel()
})*/

/*ServerEvents.recipes(event => {
    const { welding } = event.recipes.tfc

    /**
     * 焊接修复配方函数
     * @param {string} toolId 工具id
     * @param {string} materialId 修复用的材料id
     * @param {number} tier 砧的等级
     * @param {"percentage" | "value"} repairType 
     */
   /* function welding_repair(toolId, materialId, tier, repairType) {
        tier = typeof tier != 'undefined' ? tier : 0
        repairType = typeof repairType != 'undefined' ? repairType : "percentage"

        let name = toolId.replace(':', '/')
        const toolStack = Item.of(toolId)
        const inputToolStack = Item.of(toolId)
        const outputToolStack = Item.of(toolId)
        if (repairType == "percentage15") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage15']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "percentage10") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage10']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "percentage7.5") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage7.5']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "percentage5") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage5']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "percentage4") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage4']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "percentage2") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_percentage2']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(outputToolStack.maxDamage * 0.4)
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
        else if (repairType == "value") {
            // 真配方（隐藏）
            welding(
                TFC.itemStackProvider.of(toolStack, ['kubejs:welding_repair_value']).copyForgingBonus(),
                toolStack,
                materialId,
                tier
            ).id(`jeihide:welding/${name}`)

            inputToolStack.setDamageValue(inputToolStack.maxDamage * 0.6)
            outputToolStack.setDamageValue(Math.max(0, inputToolStack.damageValue - 400))
            // 假配方（展示）
            welding(
                TFC.itemStackProvider.of(outputToolStack).copyForgingBonus(),
                inputToolStack.weakNBT(),
                materialId,
                tier
            ).id(`tfc:welding/${name}`)
        }
    }

    // 配方
    const repairdamage = [
        { type: 1, num: 25 },
        { type: 2, num: 15 },
        { type: 3, num: 10 },
        { type: 4, num: 7.5 }
    ]

    const metal = [
        { name: "copper", temperature: 1080, metal: "copper", level: 1 },
        { name: "bismuth_bronze", temperature: 960, metal: "bismuth_bronze", level: 2 },
        { name: "black_bronze", temperature: 1050, metal: "black_bronze", level: 2 },
        { name: "bronze", temperature: 950, metal: "bronze", level: 2 },
        { name: "black_steel", temperature: 1485, metal: "black_steel", level: 5 },
        { name: "blue_steel", temperature: 1538, metal: "blue_steel", level: 6 },
        { name: "red_steel", temperature: 1538, metal: "red_steel", level: 6 },
        { name: "steel", temperature: 1540, metal: "steel", level: 4 },
        { name: "wrought_iron", temperature: 1535, metal: 'cast_iron', level: 3 }
    ];
    const weaponry = [

        { name: "quarterstaff", number: 200, type: 'percentage7.5' },        // 长棍
        { name: "dagger", number: 100, type: 'percentage15' },              // 匕首
        { name: "parrying_dagger", number: 150, type: 'percentage10' },     // 格挡匕首
        { name: "longsword", number: 250, type: 'percentage5' },         // 长刀
        { name: "greatsword", number: 350, type: 'percentage4' },         // 大剑
        { name: "saber", number: 250, type: 'percentage5' },             // 军刀
        { name: "rapier", number: 250, type: 'percentage5' },            // 迅捷剑
        { name: "katana", number: 250, type: 'percentage5' },            // 太刀
        { name: "battleaxe", number: 400, type: 'percentage4' },          // 战斧
        { name: "battle_hammer", number: 200, type: 'percentage7.5' },       // 长柄锤
        { name: "warhammer", number: 400, type: 'percentage4' },          // 大锤
        { name: "javelin", number: 400, type: 'percentage4' },            // 标枪
        { name: "spear", number: 100, type: 'percentage15' },               // 矛
        { name: "pike", number: 100, type: 'percentage15' },                // 长矛
        { name: "lance", number: 400, type: 'percentage4' },              // 骑枪
        { name: "glaive", number: 350, type: 'percentage4' },             // 长柄刀
        { name: "halberd", number: 400, type: 'percentage4' },            // 戟
        { name: "throwing_knife", number: 100, type: 'percentage15' },      // 飞刀
        { name: "tomahawk", number: 200, type: 'percentage7.5' },            // 印第安投斧
        { name: "scythe", number: 400, type: 'percentage7.5' },             // 战镰
        { name: "flanged_mace", number: 300, type: 'percentage5' },        // 页锤
        { name: "boomerang", number: 100, type: 'percentage15' }            // 回旋镖
    ]

    weaponry.forEach(weapon => {
        metal.forEach(metal => {
            //100b
            welding_repair(`kubejs:${metal.name}_${weapon.name}`, `kubejs:${metal.name}_fragments`, metal.level, weapon.type)
        })
    })


    const tfctool = [
        { mod: 'tfc:metal/', tool: 'tuyere/', type: 'percentage4' },        // 鼓风口
        { mod: 'tfc:metal/', tool: 'propick/', type: 'percentage15' },       // 勘探镐
        { mod: 'tfc:metal/', tool: 'axe/', type: 'percentage15' },           // 斧头
        { mod: 'tfc:metal/', tool: 'shovel/', type: 'percentage15' },        // 铲子
        { mod: 'tfc:metal/', tool: 'hoe/', type: 'percentage15' },           // 锄头
        { mod: 'tfc:metal/', tool: 'chisel/', type: 'percentage15' },        // 凿子
        { mod: 'tfc:metal/', tool: 'hammer/', type: 'percentage15' },        // 锤子
        { mod: 'tfc:metal/', tool: 'saw/', type: 'percentage15' },           // 锯子
        { mod: 'tfc:metal/', tool: 'knife/', type: 'percentage15' },         // 小刀
        { mod: 'tfc:metal/', tool: 'scythe/', type: 'percentage15' },        // 镰刀
        { mod: 'tfc:metal/', tool: 'sword/', type: 'percentage7.5' },         // 剑
        { mod: 'tfc:metal/', tool: 'mace/', type: 'percentage7.5' },          // 钉头锤
        { mod: 'tfc:metal/', tool: 'fishing_rod/', type: 'percentage15' },   // 钓鱼竿
        { mod: 'tfc:metal/', tool: 'shears/', type: 'percentage7.5' },        // 剪刀
        { mod: 'tfc:metal/', tool: 'shield/', type: 'percentage4' },        // 盾牌
        { mod: 'tfc:metal/', tool: 'chestplate/', type: 'percentage2' },    // 胸甲
        { mod: 'tfc:metal/', tool: 'boots/', type: 'percentage4' },         // 靴子
        { mod: 'tfc:metal/', tool: 'greaves/', type: 'percentage2' },       // 护腿
        { mod: 'tfc:metal/', tool: 'helmet/', type: 'percentage2' },        // 头盔

        { mod: 'artisanal:metal/', tool: 'can_opener/', type: 'percentage15' },  // 开罐器
        { mod: 'tfc_hammer_time:metal/', tool: 'excavator/', type: 'percentage7.5' },   // 挖掘器
        { mod: 'tfc_hammer_time:metal/', tool: 'sledgehammer/', type: 'percentage4' },   // 大锤
        { mod: 'precisionprospecting:metal/', tool: 'mineral_prospector/', type: 'percentage7.5' }, // 矿物勘探仪
        { mod: 'precisionprospecting:metal/', tool: 'prospector_drill/', type: 'percentage4' },   // 勘探钻头
        { mod: 'precisionprospecting:metal/', tool: 'prospector_hammer/', type: 'percentage7.5' }   // 勘探锤
    ]
    /*const kubejstool = [
        { mod: 'kubejs:', tool: 'tong', type: 'percentage15' },   // 铋青铜钳子
        { mod: 'kubejs:', tool: 'lockpick', type: 'percentage15' }, // 铋青铜开锁器
    ]*/
   /* tfctool.forEach(tool => {
        metal.forEach(metal => {
            welding_repair(`${tool.mod}${tool.tool}${metal.name}`, `kubejs:${metal.name}_fragments`, metal.level, tool.type)
        })*/
   // })
    /*kubejstool.forEach(tool => {
        metal.forEach(metal => {
            welding_repair(`kubejs:${metal.name}_${tool.tool}`, `kubejs:${metal.name}_fragments`, metal.level, tool.type)
        })
    })*/

    //100
    //welding_repair('kubejs:wrought_iron_tong', 'minecraft:iron_nugget', 3)
    // welding_repair('tfc:metal/knife/wrought_iron', 'minecraft:iron_nugget', 3, 'value')
//})