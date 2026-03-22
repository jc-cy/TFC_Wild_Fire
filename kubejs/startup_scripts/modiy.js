ItemEvents.modification(event => {
    event.modify("kaleidoscope_cookery:suspicious_stir_fry_rice_bowl", item => {
        item.setFoodProperties(food => {
            food.removeEffect('speed')
            food.removeEffect('jump_boost')
            food.removeEffect('haste')
            food.removeEffect('luck')
            food.removeEffect('mining_fatigue')
            food.removeEffect('nausea')
        })
    })

    event.modify("kaleidoscope_cookery:suspicious_stir_fry", item => {
        item.setFoodProperties(food => {
            food.removeEffect('speed')
            food.removeEffect('jump_boost')
            food.removeEffect('haste')
            food.removeEffect('luck')
            food.removeEffect('mining_fatigue')
            food.removeEffect('nausea')
        })
    })
})