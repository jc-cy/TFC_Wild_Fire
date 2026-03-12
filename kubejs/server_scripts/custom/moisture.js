//潮湿度
const allowhelmet = [
    "create:copper_diving_helmet"
]
const allowchest = [
    "create:copper_backtank"
]
const allowlegs = [
    "alexscaves:diving_leggings"
]
const allowfeet = [
    "create:copper_diving_boots",
    "alexscaves:diving_boots"
]

let WildfiresUtil = Java.loadClass("first.wildfires.utils.WildfiresUtil")
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.PlayerWetnessEvent$FluidIncrease"),/**@param {Internal.PlayerWetnessEvent$FluidIncrease} event*/ event => {
    let player = event.getPlayer()
    let vehicle = player.getVehicle()
    let helmet = player.getEquipment("head")
    let feet = player.getEquipment("feet")
    let legs = player.getEquipment("legs")
    let chest = player.getEquipment("chest")
    console.log(helmet)
    if (allowhelmet.includes(helmet.getItem().id) && allowchest.includes(chest.getItem().id) && allowlegs.includes(legs.getItem().id) && allowfeet.includes(feet.getItem().id)) {
        event.setCanceled(true)
    }
    if (vehicle != null && vehicle.getType() == "alexscaves:submarine") {
        event.setCanceled(true)


    }

    /*if (WildfiresUtil.isEquippedCurio(player, "泥土")) {
        event.setCanceled(true)
    }*/
})