ServerEvents.recipes(event => {
    event.recipes.tfc.alloy(
        'tfc:metal',
        [
            TFC.alloyPart('tfc:copper', 0.2, 0.3),
            TFC.alloyPart('tfc:rose_gold', 0.4, 0.8),
            TFC.alloyPart('tfc:black_steel', 0.2, 0.5)
        ]
    )
})