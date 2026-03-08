StartupEvents.registry('item', event => {
    const axetag = {}
    const toolParts = [
        "javelin_head",
        "hammer_head",
        "hoe_head",
        "axe_head",
        "shovel_head",
        "knife_head"
    ];
    //attackDamageBaseline
    // 注册工具部件
    toolParts.forEach(part => {
        event.create(`diamond_${part}`, "basic")
            .texture(`kubejs:item/tfc/diamond/${part}`)

        event.create(`obsidian_${part}`, "basic")
            .texture(`kubejs:item/tfc/obsidian/${part}`);
        event.create(`flint_${part}`, "basic")
            .texture(`kubejs:item/tfc/flint/${part}`);
    });


    function registerTFCTools(event, material, maxDamage, hammerattackDamage, javelinattackDamage, hoeattackDamage, knifeattackDamage, axeattackDamage, shovelattackDamage, acheulianattackDamage) {

        const acheulianDmg = Math.floor(maxDamage * 0.8);

        // 1. 锤子
        event.create(`kubejs:rock_tool/${material}_hammer`, 'tfc:hammer')
            .maxDamage(maxDamage)
            .tag('tfc:usable_on_tool_rack')
            .texture(`kubejs:item/tfc/${material}/hammer`)
            .metalTexture('kubejs:block/trip_hammers/electrum') // 锤击纹理沿用原配置
            .attackDamageBaseline(hammerattackDamage - 3);

        // 2. 标枪
        event.create(`kubejs:rock_tool/${material}_javelin`, 'tfc:javelin')
            .maxDamage(maxDamage)
            .thrownDamage(1 + javelinattackDamage)
            .texture(`kubejs:item/tfc/${material}/javelin`)
            .tag('tfc:usable_on_tool_rack')
            .attackDamageBaseline(javelinattackDamage - 3);


        // 3. 锄头
        event.create(`kubejs:rock_tool/${material}_hoe`, 'tfc:hoe')
            .maxDamage(maxDamage)
            .texture(`kubejs:item/tfc/${material}/hoe`)

            .attackDamageBaseline(hoeattackDamage - 3);


        // 4. 小刀
        event.create(`kubejs:rock_tool/${material}_knife`, 'tfc:tool')
            .maxDamage(maxDamage)
            .texture(`kubejs:item/tfc/${material}/knife`)
            .tag('tfc:usable_on_tool_rack')
            .knife()
            .attackDamageBaseline(knifeattackDamage - 3);


        // 5. 斧头
        event.create(`kubejs:rock_tool/${material}_axe`, "axe")

            .maxDamage(maxDamage)
            .tag('tfc:axes')
            .tag('tfc:axes_that_log')
            .tag('tfc:usable_on_tool_rack')
            .tag("tfc:inefficient_logging_axes")
            .texture(`kubejs:item/tfc/${material}/axe`)
            .attackDamageBaseline(axeattackDamage - 3);

        // 6. 铲子
        event.create(`kubejs:rock_tool/${material}_shovel`, "shovel")

            .maxDamage(maxDamage)
            .tag('tfc:usable_on_tool_rack')
            .texture(`kubejs:item/tfc/${material}/shovel`)
            .attackDamageBaseline(shovelattackDamage - 3);

        // 7. 阿舍利手斧
        event.create(`kubejs:rock_tool/${material}_acheulian`, 'tfc:tool')
            .maxDamage(acheulianDmg)
            .tag('minecraft:shovels')
            .tag('minecraft:axes')
            .tag('tfc:axes')
            .tag('tfc:axes_that_log')
            .tag("tfc:inefficient_logging_axes")
            .tag("tfc:deals_slashing_damage")
            .tag('tfc:knives')
            .texture(`kubejs:item/tfc/${material}/acheulian`)
            .attackDamageBaseline(acheulianattackDamage - 3);
    }

    // 批量注册三种材质的工具//耐久  锤子伤害 标枪伤害 锄头伤害 小刀 斧头 铲子 阿舍利
    registerTFCTools(event, 'diamond', 700, 6, 4.25, 2.5, 3, 5.5, 3.75, 3);    // 钻石基础耐久700 → 阿舍利手斧560（700×0.8）
    registerTFCTools(event, 'obsidian', 150, 3, 5, 3, 6, 7, 3.75, 4);   // 黑曜石基础耐久250 → 阿舍利手斧200（250×0.8）
    registerTFCTools(event, 'flint', 120, 3.5, 3, 2.5, 2.5, 4.5, 3.75, 2.5);      // 燧石基础耐久120 → 阿舍利手斧96（120×0.8）



    event.create(`kubejs:rock_tool/extrusive_acheulian`, 'tfc:tool')
        .maxDamage(70 * 0.8)
        .tag('minecraft:shovels').tag('minecraft:axes').tag('tfc:axes').tag('tfc:axes_that_log').tag("tfc:inefficient_logging_axes")
        .tag("tfc:deals_slashing_damage").tag('tfc:knives')
        .texture(`kubejs:item/tfc/rock/extrusive_acheulian`)
        .attackDamageBaseline(-1);

    event.create(`kubejs:rock_tool/intrusive_acheulian`, 'tfc:tool')
        .maxDamage(60 * 0.8)
        .tag('minecraft:shovels').tag('minecraft:axes').tag('tfc:axes').tag('tfc:axes_that_log').tag("tfc:inefficient_logging_axes")
        .tag("tfc:deals_slashing_damage").tag('tfc:knives')
        .texture(`kubejs:item/tfc/rock/intrusive_acheulian`)
        .attackDamageBaseline(-1);

    event.create(`kubejs:rock_tool/metamorphic_acheulian`, 'tfc:tool')
        .maxDamage(55 * 0.8)
        .tag('minecraft:shovels').tag('minecraft:axes').tag('tfc:axes').tag('tfc:axes_that_log').tag("tfc:inefficient_logging_axes")
        .tag("tfc:deals_slashing_damage").tag('tfc:knives')
        .texture(`kubejs:item/tfc/rock/metamorphic_acheulian`)
        .attackDamageBaseline(-1);

    event.create(`kubejs:rock_tool/sedimentary_acheulian`, 'tfc:tool')
        .maxDamage(50 * 0.8)
        .tag('minecraft:shovels').tag('minecraft:axes').tag('tfc:axes').tag('tfc:axes_that_log').tag("tfc:inefficient_logging_axes")
        .tag("tfc:deals_slashing_damage").tag('tfc:knives')
        .texture(`kubejs:item/tfc/rock/sedimentary_acheulian`)
        .attackDamageBaseline(-1);




})