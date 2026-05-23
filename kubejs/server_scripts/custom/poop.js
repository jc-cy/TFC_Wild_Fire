
let MobPoopData = Java.loadClass("first.wildfires.api.MobPoopData")
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.MobPoopDataModifyEvent"),/**@param {Internal.MobPoopDataModifyEvent} event*/ event => {
    event.addMobPoopData("zombie_horse", 10, Item.of("acacia_boat"), "snow")

    const guanoOnlyMobs = [
        "tfc:donkey",
        "tfc:musk_ox",
        "tfc:sheep",
        "tfc:alpaca",
        "tfc:yak",
        "tfc:goat",
        "tfc:cow",
        "tfc:pig",
        "tfc:horse",
        "tfc:mule"
    ]

    guanoOnlyMobs.forEach(mob => {
        event.addMobPoopData(mob, 12000, null, "alexscaves:guano_layer")
    })
})
