// startup_scripts/temperature_modify.js
ForgeEvents.onEvent("first.wildfires.api.customEvent.TemperatureEnumModifyEvent", tempEventInstance => {
    let temperatureEnum = tempEventInstance.getTemperatureEnum();
    let enumName = temperatureEnum.name().toLowerCase();

    switch(enumName) {
        case "frostbite":
            tempEventInstance.setLowerBound(0);
            tempEventInstance.setUpperBound(4);
            break;
        case "cold":
            tempEventInstance.setLowerBound(4);
            tempEventInstance.setUpperBound(12);
            break;
        case "normal":
            tempEventInstance.setLowerBound(12);
            tempEventInstance.setUpperBound(28);
            break;
        case "hot":
            tempEventInstance.setLowerBound(28);
            tempEventInstance.setUpperBound(35);
            break;
        case "heat_stroke":
            tempEventInstance.setLowerBound(35);
            tempEventInstance.setUpperBound(48);
            break;
    }

    console.log(`修改${enumName}范围：${tempEventInstance.getLowerBound()} ~ ${tempEventInstance.getUpperBound()}`);
});


  // 原范围: FROSTBITE(0, 10), COLD(10, 16), NORMAL(16, 24), HOT(24, 30), HEAT_STROKE(30, 40)
    // console.log(`开始温度`);
    /*
    // 霜冻：非常寒冷，可能导致冻伤
    Config.setTemperatureEnum("frostbite", 0, 5)
    
    // 寒冷：需要保暖的温度
    Config.setTemperatureEnum("cold", 5, 15)

    // 正常：舒适的温度范围
    Config.setTemperatureEnum("normal", 15, 26)

    // 炎热：需要降温的温度
    Config.setTemperatureEnum("hot", 26, 32)

    // 中暑：危险的高温
    Config.setTemperatureEnum("heat_stroke", 32, 99)
    */
    // 霜冻：非常寒冷，可能导致冻伤