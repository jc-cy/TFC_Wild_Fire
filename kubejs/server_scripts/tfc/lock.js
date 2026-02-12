
ServerEvents.recipes(e => {
    // 钥匙
    const keys = [
        // 'old_key',// 老旧钥匙（注释保留，如需启用可改为对象格式：{ name: 'old', number: 1 }）
        { name: 'brass', number: 2 },          // 黄铜简易钥匙（kubejs:brass_simple_key）
        { name: 'gold', number: 1 },           // 黄金简易钥匙（kubejs:gold_simple_key）
        { name: 'bismuth_bronze', number: 2 }, // 铋铜简易钥匙（kubejs:bismuth_bronze_simple_key）
        { name: 'black_bronze', number: 2 },   // 黑铜简易钥匙（kubejs:black_bronze_simple_key）
        { name: 'bronze', number: 2 },         // 青铜简易钥匙（kubejs:bronze_simple_key）
        { name: 'copper', number: 1 }          // 铜制简易钥匙（kubejs:copper_simple_key）
    ];

    // 开锁器
    const lockpicks = [
        { name: 'bismuth_bronze', number: 2 }, // 铋铜开锁器（kubejs:bismuth_bronze_lockpick）
        { name: 'black_bronze', number: 2 },   // 黑铜开锁器（kubejs:black_bronze_lockpick）
        { name: 'bronze', number: 2 },         // 青铜开锁器（kubejs:bronze_lockpick）
        { name: 'copper', number: 1 },         // 铜制开锁器（kubejs:copper_lockpick）
        { name: 'cast_iron', number: 2 },      // 铸铁开锁器（kubejs:cast_iron_lockpick）
        { name: 'wrought_iron', number: 3 },   // 锻铁开锁器（kubejs:wrought_iron_lockpick）
        { name: 'steel', number: 4 },          // 钢制开锁器（kubejs:steel_lockpick）
        { name: 'black_steel', number: 5 },    // 锰钢开锁器（kubejs:black_steel_lockpick）
        // { name: 'homemade', number: 1 },// 自制开锁器
    ];

    // 撬棍
    const crowbars = [
        { name: 'wrought_iron', number: 3 },   // 锻铁撬棍（kubejs:wrought_iron_crowbar）
        { name: 'steel', number: 4 },          // 钢撬棍（kubejs:steel_crowbar）
        { name: 'black_steel', number: 5 }     // 锰钢撬棍（kubejs:black_steel_crowbar）
    ];


    const { tfc, kubejs, } = e.recipes;
    const id_prefix = 'kubejs:tfc/lock/';
    //开锁器只能锻造  钥匙只能铸造
    /*
    步骤    hit（敲击）、draw（拉伸）、punch（冲压）、bend（弯曲）、upset（镦粗）、shrink（收缩）
    顺序	any（任意顺序）、last（最后一步）、not_last（非最后一步）、second_last（倒数第二步）、third_last（倒数第三步）
    */
    lockpicks.forEach(itema => {
        tfc.anvil(
            `kubejs:${itema.name}_lockpick`,
            `tfc:metal/rod/${itema.name}`,
            [
                "draw_third_last",
                "bend_second_last",
                'hit_any'
            ]
        ).tier(`${itema.number}`).bonus(true).id(`${id_prefix}${itema.name}_lockpick/anvil`)//锻造开锁器
    })
    crowbars.forEach(itema => {
        tfc.anvil(
            `kubejs:${itema.name}_crowbar`,
            `tfc:metal/double_ingot/${itema.name}`,
            [
                "draw_third_last",
                "draw_second_last",
                'punch_any'
            ]
        ).tier(`${itema.number}`).bonus(true).id(`${id_prefix}${itema.name}_crowbar/anvil`)//锻造撬棍
    })
    keys.forEach(itema => {

        tfc.casting(`kubejs:${itema.name}_simple_key`, 'kubejs:mold_simple_key', TFC.fluidStackIngredient(`tfc:metal/${itema.name}`, 100), 1)
            .id(`${id_prefix}${itema.name}_simple_key/casting`)


    })

})