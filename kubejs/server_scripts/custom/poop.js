
let MobPoopData = Java.loadClass("first.wildfires.api.MobPoopData")
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.MobPoopDataModifyEvent"),/**@param {Internal.MobPoopDataModifyEvent} event*/ event => {
    event.addMobPoopData("zombie_horse", 10, Item.of("acacia_boat"), "snow")
})
