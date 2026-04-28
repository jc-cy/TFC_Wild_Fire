TFCEvents.data(event => {
    //支撑梁支撑属性注册
    event.support([
        "kubejs:copper_support_horizontal",
        "kubejs:bismuth_bronze_support_horizontal",
        "kubejs:bronze_support_horizontal"
    ], 2, 1, 7),
        event.support([
            "kubejs:black_bronze_support_horizontal",
            "kubejs:cast_iron_support_horizontal"
        ], 3, 1, 8),
        event.support([
            "kubejs:wrought_iron_support_horizontal"
        ], 3, 3, 11),
        event.support([
            "alexscaves:metal_scaffolding",
            "kubejs:steel_support_horizontal"
        ], 4, 3, 12),
        event.support([
            "kubejs:black_steel_support_horizontal",
            "kubejs:galvanized_steel_support_horizontal"
        ], 5, 3, 15),
        event.support([
            "kubejs:red_steel_support_horizontal",
            "kubejs:blue_steel_support_horizontal"
        ], 7, 5, 20)
        //装饰用木梁注册支撑属性
    event.support([
        "kubejs:wood/stripped_log_support/cypress",
        "kubejs:wood/stripped_log_support/ironwood",
        "kubejs:wood/stripped_log_support/pine",
        "kubejs:wood/stripped_log_support/rosewood",
        "kubejs:wood/stripped_log_support/chestnut",
        "kubejs:wood/stripped_log_support/birch",
        "kubejs:wood/stripped_log_support/blackwood"
    ], 3, 1, 8),
    //创造模式支撑方块
        event.support([
           "kubejs:super_support_block"
        ], 10, 10, 25)
    //结构用缠根新成土支撑方块
        event.support([
           "kubejs:suppors_rooted_dirt/loam"
        ], 0, 0, 8)



        event.support([
           "lootr:lootr_chest"
        ], 1, 4, 0)
})
//装饰用木梁战利品表
ServerEvents.blockLootTables(event => {
        let tfcwood = ["oak", "pine", "rosewood", "chestnut", "birch", "blackwood"]
        let afcwood = ["cypress", "ironwood"]
        tfcwood.forEach(wood => {
                event.addBlock(`kubejs:wood/stripped_log_support/${wood}`, Loot => {
                        Loot.addPool(p => {
                                p.addItem(`tfc:wood/stripped_log/${wood}`).count(1)
                        })
                })
        })
        afcwood.forEach(wood => {
                event.addBlock(`kubejs:wood/stripped_log_support/${wood}`, Loot => {
                        Loot.addPool(p => {
                                p.addItem(`afc:wood/stripped_log/${wood}`).count(1)
                        })
                })
        })
})