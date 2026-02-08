JEIAddedEvents.registerRecipeCatalysts(event => {
    const tfc_wood_type = [
        'acacia',
        'ash',
        'aspen',
        'birch',
        'blackwood',
        'chestnut',
        'douglas_fir',
        'hickory',
        'kapok',
        'mangrove',
        'maple',
        'oak',
        'palm',
        'pine',
        'rosewood',
        'sequoia',
        'spruce',
        'sycamore',
        'white_cedar',
        'willow'
    ]

    let splashing = new $RecipeType(new ResourceLocation("create", "fan_washing"), $SplashingRecipe)

    tfc_wood_type.forEach(type => {
        event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](
            `tfc:wood/sluice/${type}`,
            splashing
        )
    })
    const TFCanvils = [
        "tfc:metal/anvil/bismuth_bronze",
        "tfc:metal/anvil/black_bronze",
        "tfc:metal/anvil/bronze",
        "tfc:metal/anvil/copper",
        "tfc:metal/anvil/wrought_iron",
        "tfc:metal/anvil/steel",
        "tfc:metal/anvil/black_steel",
        "tfc:metal/anvil/blue_steel",
        "tfc:metal/anvil/red_steel"
    ]

    let hammering = new $RecipeType(new ResourceLocation("vintageimprovements", "hammering"), $HammeringRecipe)

    TFCanvils.forEach(anvil => {
        event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](
            anvil,
            hammering
        )
    })

})