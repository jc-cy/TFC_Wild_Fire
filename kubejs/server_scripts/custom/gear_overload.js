
//齿轮过载


let ArrayList = Java.loadClass("java.util.ArrayList")
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.KineticDataModifyEvent"),/**@param {Internal.KineticDataModifyEvent} event*/ event => {
    let list = new ArrayList()
    list.add(Item.of("acacia_boat"))
    list.add(Item.of("acacia_chest_boat"))
    //console.log("aaa")物品 转速 应力 输入物品

    //['createcasing:jungle_cogwheel', 'createcasing:crimson_cogwheel', 'createcasing:bamboo_cogwheel', 'createcasing:acacia_cogwheel', 'create:cogwheel', 'createcasing:warped_cogwheel', 'createcasing:mangrove_cogwheel', 'createcasing:dark_oak_cogwheel', 'createcasing:birch_cogwheel', 'createcasing:oak_cogwheel']
    //['createcasing:dark_oak_large_cogwheel', 'createcasing:birch_large_cogwheel', 'createcasing:warped_large_cogwheel', 'create:large_cogwheel', 'createcasing:acacia_large_cogwheel', 'createcasing:bamboo_large_cogwheel', 'createcasing:crimson_large_cogwheel', 'createcasing:jungle_large_cogwheel', 'createcasing:oak_large_cogwheel', 'createcasing:mangrove_large_cogwheel']
    //['createcasing:dark_oak_large_cogwheel', 'createcasing:birch_large_cogwheel', 'createcasing:warped_large_cogwheel', 'create:large_cogwheel', 'createcasing:acacia_large_cogwheel', 'createcasing:bamboo_large_cogwheel', 'createcasing:crimson_large_cogwheel', 'createcasing:jungle_large_cogwheel', 'createcasing:oak_large_cogwheel', 'createcasing:mangrove_large_cogwheel']
    // give awhites createprism: andesite_clear_glass_encased_cogwheel
    const casing = [
        'andesite',
        'brass',
        'copper',
        'railway',
        'industrial_iron',
        'weathered_iron']

    const cogwheels = [
        { cogwheel: 'createcasing:warped_cogwheel', large_cogwheel: 'createcasing:warped_large_cogwheel', speed: 64, stress: 8192 },//木齿轮
        { cogwheel: 'create:cogwheel', large_cogwheel: 'create:large_cogwheel', speed: 256, stress: 8192 },//安山合金齿轮
        { cogwheel: 'createcasing:birch_cogwheel', large_cogwheel: 'createcasing:birch_large_cogwheel', speed: 128, stress: 16384 },//铜壳齿轮
        { cogwheel: 'createcasing:acacia_cogwheel', large_cogwheel: 'createcasing:acacia_large_cogwheel', speed: 128, stress: 16384 },//铜齿轮
        { cogwheel: 'createcasing:bamboo_cogwheel', large_cogwheel: 'createcasing:bamboo_large_cogwheel', speed: 64, stress: 32768 },//铸铁齿轮
        { cogwheel: 'createcasing:dark_oak_cogwheel', large_cogwheel: 'createcasing:dark_oak_large_cogwheel', speed: 512, stress: 32768 },//铁壳齿轮
        { cogwheel: 'createcasing:crimson_cogwheel', large_cogwheel: 'createcasing:crimson_large_cogwheel', speed: 512, stress: 32768 },//锻铁齿轮
        { cogwheel: 'createcasing:mangrove_cogwheel', large_cogwheel: 'createcasing:mangrove_large_cogwheel', speed: 512, stress: 65536 },//钢壳齿轮
        { cogwheel: 'createcasing:jungle_cogwheel', large_cogwheel: 'createcasing:jungle_large_cogwheel', speed: 512, stress: 65536 },//钢齿轮
        { cogwheel: 'createcasing:oak_cogwheel', large_cogwheel: 'createcasing:oak_large_cogwheel', speed: 1024, stress: 104857600 },//高锰钢齿轮



    ]
    cogwheels.forEach(cog => {
        event.addKineticData(cog.cogwheel, cog.speed, cog.stress, cog.cogwheel)
        event.addKineticData(cog.large_cogwheel, cog.speed, cog.stress, cog.large_cogwheel)
    })
    // event.addKineticData("create:gearbox", 4, 256)
    event.addKineticData("create:andesite_encased_warped_cogwheel", 256, 8192, "create:cogwheel")
    event.addKineticData("create:andesite_encased_warped_large_cogwheel", 256, 8192, "create:large_cogwheel")
    event.addKineticData("create:brass_encased_warped_cogwheel", 256, 8192, "create:cogwheel")
    event.addKineticData("create:brass_encased_warped_large_cogwheel", 256, 8192, "create:large_cogwheel")

    event.addKineticData("design_decor:industrial_gear", 256, 10240, "design_decor:industrial_gear")
    event.addKineticData("design_decor:industrial_gear_large", 256, 10240, "design_decor:industrial_gear_large")
    casing.forEach(c => {

        cogwheels.forEach(cog => {

            if (cog.cogwheel != "create:cogwheel") {
                let cogwheelss = "createcasing:" + c + "_encased_" + cog.cogwheel.replace("createcasing:", "");
                let large_cogwheelss = "createcasing:" + c + "_encased_" + cog.large_cogwheel.replace("createcasing:", "");
                event.addKineticData(cogwheelss, cog.speed, cog.stress, cog.cogwheel)
                event.addKineticData(large_cogwheelss, cog.speed, cog.stress, cog.large_cogwheel)
            } else if (c != "andesite" && c != "brass") {
                event.addKineticData("createcasing:" + c + "_encased_cogwheel", cog.speed, cog.stress, cog.cogwheel)
                event.addKineticData("createcasing:" + c + "_encased_large_cogwheel", cog.speed, cog.stress, cog.large_cogwheel)
            }
        })

    })


})