ServerEvents.loaded(event => {
    // 设置物品自定义重量
    // 参数1: 物品ID (字符串)
    // 参数2: 重量值 (整数，数值越大越重)
    
    MoreAttributes.setItemWeight("tfc:food/barley_bread", 50)
    MoreAttributes.setItemWeight("minecraft:diamond", 200)
    MoreAttributes.setItemWeight("minecraft:iron_ingot", 100)
    
    // 查询物品重量
    // let weight = MoreAttributes.getItemWeight("tfc:food/barley_bread")
    // event.server.tell("大麦面包重量: " + weight)
})