ServerEvents.tags('minecraft:block', event => {//

    //event.add('kubejs:polisher', '#forge:sandstone');//给所有沙岩打上抛光标签
    event.add('tfc:mineable_with_glass_saw', 'minecraft:ice');//玻璃


})
ServerEvents.tags('minecraft:item', event => {//
    const buliao = ['immersiveengineering:ersatz_leather', 'firmalife:pineapple_leather', 'tfc:wool_cloth', 'textile:cotton_cloth', 'textile:linen_cloth', 'minecraft:leather']
    buliao.forEach(item => {
        event.add('kubejs:fabric', item);//布料
    })
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/brown_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/white_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/black_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/red_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/yellow_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/green_slab")//平滑砂岩台阶
    event.add("kubejs:smooth_sandstone", "tfc:smooth_sandstone/pink_slab")//平滑砂岩台阶

    event.add("kubejs:hard_rock_brick", 'tfc:brick/gabbro')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/diorite')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/granite')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/dacite')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/andesite')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/basalt')//硬质岩石砖
    event.add("kubejs:hard_rock_brick", 'tfc:brick/rhyolite')//硬质岩石砖



    event.add('kubejs:4ore', "immersiveengineering:dust_iron");//热矿粉


    event.add('curios:body', 'kubejs:rubber_hot_water_bag');//热水袋

    event.add('curios:body', 'kubejs:leather_hot_water_bag');

    event.add('curios:hands', "minecraft:compass");
    event.add('curios:hands', "minecraft:spyglass");



    event.add('curios:body', "kubejs:metal_hot_water_bag");

    event.add('curios:feet', 'kubejs:heating_warmer');
    event.add('curios:charm', 'kubejs:heating_warmer');
    event.add('curios:body', 'kubejs:heating_warmer');




    event.add('kubejs:nohot', 'kubejs:leather_hot_water_bag');
    event.add('kubejs:nohot', 'kubejs:rubber_hot_water_bag');
    event.add('kubejs:nohot', 'kubejs:metal_hot_water_bag');

    event.add('textile:animal_furs', 'textile:crocodile_leather');//鳄鱼皮
    event.add('tfc:scrapable', 'textile:crocodile_leather');//鳄鱼皮


    const ore = ["tfc_ie_addon:powder/galena", 'tfc:powder/sphalerite', 'tfc:powder/native_copper', 'tfc:powder/native_gold', 'tfc:powder/hematite', 'tfc:powder/native_silver', 'tfc:powder/cassiterite', 'tfc:powder/bismuthinite', 'tfc:powder/garnierite', 'tfc:powder/malachite', 'tfc:powder/magnetite', 'tfc:powder/tetrahedrite', 'tfc:powder/limonite']

    ore.forEach(item => {
        event.add('kubejs:ore', item);//热矿粉


    })

})

ServerEvents.tags('minecraft:fluid', event => {//


    event.add('tfc:usable_in_pot', 'immersiveengineering:redstone_acid');//红石酸

})