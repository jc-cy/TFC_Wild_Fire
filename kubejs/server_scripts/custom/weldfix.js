NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.AnvilWeldEvent"),/**@param {Internal.AnvilWeldEvent} event*/ event => {
    let { left, right } = event
    if (left.getItem().id == 'tfc:metal/ingot/bismuth_bronze' && right.getItem().id == 'tfc:metal/knife/bismuth_bronze') {
        event.setLeft("air")
        event.setRight("acacia_wood")
        event.setResult("allow")
    }
})