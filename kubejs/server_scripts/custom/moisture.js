//潮湿度




let WildfiresUtil = Java.loadClass("first.wildfires.utils.WildfiresUtil")
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.PlayerWetnessEvent$FluidIncrease"),/**@param {Internal.PlayerWetnessEvent$FluidIncrease} event*/ event => {
    let player = event.getPlayer()
    let vehicle = player.getVehicle()
    let helment = player.getEquipment("head")
    console.log(helment)
   
    if (vehicle != null && vehicle.getType() == "alexscaves:submarine") {
        event.setCanceled(true)
        
      
    }
    
    /*if (WildfiresUtil.isEquippedCurio(player, "泥土")) {
        event.setCanceled(true)
    }*/
})