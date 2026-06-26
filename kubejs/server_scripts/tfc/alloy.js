ServerEvents.recipes(event => {
    // 弱钢合金
    event.recipes.tfc.alloy(
        'tfc:weak_steel',
        [
            TFC.alloyPart('tfc:steel', 0.7, 0.8),
            TFC.alloyPart('tfc:ferromanganese', 0.2, 0.3),
            TFC.alloyPart('tfc:refined_nickel', 0.01, 0.05)
        ]
    )
})