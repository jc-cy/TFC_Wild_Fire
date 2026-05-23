ServerEvents.tags("worldgen/placed_feature", event => {
    event.remove("tfc:land_plants", [
        "firmalife:wild_red_grapes_patch",
        "firmalife:wild_white_grapes_patch"
    ])
    
})