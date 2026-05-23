ServerEvents.tags("worldgen/biome", event => {
    event.add("createpickywheels:waterwheels_whitelist", [
        "tfc:deep_ocean",
        "tfc:ocean",
        "tfc:ocean_reef",
        "tfc:deep_ocean_trench"
    ])

    event.add("createpickywheels:waterwheels_boosted", [
        "#tfc:is_river",
        "tfc:river"
    ])
    event.add("createpickywheels:windmills_whitelist", [
        "#tfc:has_predictable_winds"
    ])

    event.add("createpickywheels:windmills_boosted", [
        "#tfc:is_ocean",
        "tfc:badlands",
        "tfc:highlands",
        "tfc:mountain_lake",
        "tfc:inverted_badlands",
        "tfc:mountains",
        "tfc:old_mountain_lake",
        "tfc:old_mountains"
    ])

})
