
//金属流体

const molten_metal = [
    { id: 'titanium_alloy', Temperature: 1700, tier: 4 },
    { id: 'titanium', Temperature: 1668, tier: 3 },
    { id: 'vanadium', Temperature: 1910, tier: 2 },
    { id: 'manganese', Temperature: 1246, tier: 3 }
]

TFCEvents.data(event => {
    molten_metal.forEach(metal => {
        event.metal(
            `tfc:metal/${metal.id}`,
            metal.Temperature,
            0.00857,
            null,
            null,
            null,
            metal.tier,
            `tfc:${metal.id}`
        )
    })
})