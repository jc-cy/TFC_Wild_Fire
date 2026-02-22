let config0 = [
    { entity: "minecraft:bee", ticks: 20, list: ["acacia_boat"] }
]


ForgeEvents.onEvent("first.wildfires.api.customEvent.MobPoopDataModifyEvent", event => {//拉屎
    
    let $ArrayList = Java.loadClass("java.util.ArrayList")
    config0.forEach(c => {
        let list = new $ArrayList()
        c.list.forEach(item => {
            list.add(Item.of(item))
        })
        event.addMobPoopData(c.entity, c.ticks, list)
         console.log(`成功拉屎`);
    })
})




ForgeEvents.onEvent("first.wildfires.api.customEvent.PlayerWetnessEvent$FluidIncrease", event => {//潮湿度
     console.log(`潮湿`);
    event.setWetness(0)
})