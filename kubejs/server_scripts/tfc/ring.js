ServerEvents.recipes(e => {
    const { tfc, create, kubejs, immersiveengineering } = e.recipes;
    const rings = [//戒指锻造

        { name: "sterling_silver", temperature: 961, metal: "sterling_silver" }, // 纹银戒指
        { name: "silver", temperature: 961, metal: "silver" }, // 银戒指
        { name: "gold", temperature: 1064, metal: "golden" }, // 金戒指
        { name: "rose_gold", temperature: 1064, metal: "rose_gold" }, // 玫瑰金戒指
        { name: "steel", temperature: 1540, metal: "steel" },// 钢戒指
        { name: "black_steel", temperature: 1540, metal: "black_steel" } // 钢戒指

    ];
    const ringGems = [
        { name: "sapphire", mod: "tfc:", gem: "gem/sapphire" }, // 蓝宝石
        { name: "topaz", mod: "tfc:", gem: "gem/topaz" }, // 黄宝石
        { name: "lapis", mod: "tfc:", gem: "gem/lapis_lazuli" }, // 青金石
        { name: "ender_pearl", mod: "minecraft:", gem: "ender_pearl" }, // 末影珍珠
        { name: "pyrite", mod: "tfc:", gem: "gem/pyrite" }, // 黄铁矿
        { name: "diamond", mod: "tfc:", gem: "gem/diamond" }, // 钻石
        { name: "amethyst", mod: "tfc:", gem: "gem/amethyst" }, // 紫水晶
        { name: "opal", mod: "tfc:", gem: "gem/opal" }, // 蛋白石
        { name: "ruby", mod: "tfc:", gem: "gem/ruby" }, // 红宝石
        { name: "jade", mod: "call_of_yucutan:", gem: "jade" }, // 翡翠
        { name: "cinnabar", mod: "tfc:", gem: "ore/cinnabar" }, // 朱砂
        { name: "emerald", mod: "tfc:", gem: "gem/emerald" } // 绿宝石
    ];
    rings.forEach(item => {
        tfc.anvil(
            `shiny_ornaments:${item.name}_ring_base`,
            `tfc:metal/rod/${item.name}`,
            [
                'hit_any',
            ]
        ).tier(1).bonus(true).id(`tfc:shiny_ornaments/${item.name}_ring/anvil`)//棒锻打成戒指

        tfc.welding(
            `shiny_ornaments:${item.name}_ring`,       // 输出
            `shiny_ornaments:${item.name}_ring_base`,
            `shiny_ornaments:${item.name}_ring_base`,
            1 // 砧等级 0是石头 1铜 2铜合金 3锻铁 4钢 5锰钢 6红秘银
        );


        tfc.heating(`shiny_ornaments:${item.name}_ring_base`, item.temperature)
            .resultFluid(Fluid.of(`tfc:metal/${item.name}`, 50))
        tfc.heating(`shiny_ornaments:${item.name}_ring`, item.temperature)
            .resultFluid(Fluid.of(`tfc:metal/${item.name}`, 100))


    });
    ringGems.forEach(itema => {
        rings.forEach(itemb => {

            e.shapeless(Item.of(`shiny_ornaments:${itemb.metal}_${itema.name}_ring`),
                [`shiny_ornaments:${itemb.name}_ring`, `${itema.mod}${itema.gem}`])




        })
    })
})