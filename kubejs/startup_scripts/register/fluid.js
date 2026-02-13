

StartupEvents.registry("fluid", event => {
    event.create("uncommon_ink")
        .thickTexture(0X266a1f)
        .noBlock()
    event.create("rare_ink")
        .thickTexture(0X22634d)
        .noBlock()
    event.create("epic_ink")
        .thickTexture(0Xcb40bf)
        .noBlock()
    event.create("legendary_ink")
        .thickTexture(0Xf9ad1c)
        .noBlock()

    event.create('molten_corundum',)
        .stillTexture('kubejs:fluid/glass/molten_corundum_still')
        .flowingTexture('kubejs:fluid/glass/molten_corundum_flowing')
        .noBlock()
    // 人造刚玉
})
StartupEvents.registry("fluid", event => {

    event.create("kubejs:petroleum_gas")//石油气
        .thinTexture(0Xffffff)
        .noBlock()
        .noBucket()
        .gaseous()

    event.create("kubejs:pulp")//纸浆
        .thinTexture(0Xd4cbb5)
        .noBlock()

    event.create("kubejs:heavy_oil")
        .thickTexture(0X1F1826)
        .noBlock()

    event.create("kubejs:light_oil")
        .thickTexture(0X261A15)
        .noBlock()

    event.create("kubejs:beer_maize")
        .stillTexture('kubejs:fluid/alcohol/beer_maize')
        .flowingTexture('kubejs:fluid/alcohol/beer_maize_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:beer_barley")
        .stillTexture('kubejs:fluid/alcohol/beer_barley')
        .flowingTexture('kubejs:fluid/alcohol/beer_barley_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:beer_hops")
        .stillTexture('kubejs:fluid/alcohol/beer_hops')
        .flowingTexture('kubejs:fluid/alcohol/beer_hops_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:beer_rye")
        .stillTexture('kubejs:fluid/alcohol/beer_rye')
        .flowingTexture('kubejs:fluid/alcohol/beer_rye_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:beer_oat")
        .stillTexture('kubejs:fluid/alcohol/beer_oat')
        .flowingTexture('kubejs:fluid/alcohol/beer_oat_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:beer_haley")
        .stillTexture('kubejs:fluid/alcohol/beer_haley')
        .flowingTexture('kubejs:fluid/alcohol/beer_haley_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_jojannik")
        .stillTexture('kubejs:fluid/alcohol/whiskey_jojannik')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_jojannik_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_lilitusinglemalt")
        .stillTexture('kubejs:fluid/alcohol/whiskey_lilitusinglemalt')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_lilitusinglemalt_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_cristelwalker")
        .stillTexture('kubejs:fluid/alcohol/whiskey_cristelwalker')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_cristelwalker_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_maggoallan")
        .stillTexture('kubejs:fluid/alcohol/whiskey_maggoallan')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_maggoallan_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_carrasconlabel")
        .stillTexture('kubejs:fluid/alcohol/whiskey_carrasconlabel')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_carrasconlabel_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_ak")
        .stillTexture('kubejs:fluid/alcohol/whiskey_ak')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_ak_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_highland_hearth")
        .stillTexture('kubejs:fluid/alcohol/whiskey_highland_hearth')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_highland_hearth_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_smokey_reverie")
        .stillTexture('kubejs:fluid/alcohol/whiskey_smokey_reverie')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_smokey_reverie_flowing')
        .noBlock()
        .noBucket()

    event.create("kubejs:whiskey_jamesons_malt")
        .stillTexture('kubejs:fluid/alcohol/whiskey_jamesons_malt')
        .flowingTexture('kubejs:fluid/alcohol/whiskey_jamesons_malt_flowing')
        .noBlock()
        .noBucket()

    //各种酒水流体

    event.create("kubejs:beetroot_juice")
        .thinTexture(0XE08888)
    //甜菜汁

    event.create("kubejs:condensed_beetroot_juice")
        .thinTexture(0XC16051)
    //浓缩甜菜汁

    event.create("kubejs:molten_glass")
        .stillTexture('kubejs:fluid/glass/molten_glass_still')
        .flowingTexture('kubejs:fluid/glass/molten_glass_flowing')
        .noBlock()
    //熔融玻璃

    event.create("tfc:metal/manganese")
        .stillTexture('kubejs:fluid/molten/molten_manganese_still')
        .flowingTexture('kubejs:fluid/molten/molten_manganese_flowing')
    //熔融锰

    event.create("tfc:metal/titanium")
        .stillTexture('kubejs:fluid/molten/molten_titanium_still')
        .flowingTexture('kubejs:fluid/molten/molten_titanium_flowing')
    //熔融钛

    event.create("tfc:metal/vanadium")
        .stillTexture('kubejs:fluid/molten/molten_vanadium_still')
        .flowingTexture('kubejs:fluid/molten/molten_vanadium_flowing')
    //熔融钒

    event.create("tfc:metal/titanium_alloy")
        .stillTexture('kubejs:fluid/molten/molten_titanium_alloy_still')
        .flowingTexture('kubejs:fluid/molten/molten_titanium_alloy_flowing')
    //熔融钛合金

})