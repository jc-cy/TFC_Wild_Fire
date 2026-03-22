const $TFCFoodData = Java.loadClass('net.dries007.tfc.common.capabilities.food.TFCFoodData')
const $FoodData = Java.loadClass('net.dries007.tfc.common.capabilities.food.FoodData')
const $FoodBiteBlock = Java.loadClass('com.github.ysbbbbbb.kaleidoscopecookery.block.food.FoodBiteBlock')

ItemEvents.foodEaten(event => {
    const { item, player } = event
    if(
        item.id != "kaleidoscope_cookery:suspicious_stir_fry_rice_bowl" &&
        item.id != "kaleidoscope_cookery:suspicious_stir_fry"
    ) {
        return
    }

    function suspiciousFoodNutrientGen() {
        const randomValue = Math.random() * 2 + 1
        let nutrients = new Array(5).fill(0)
        const randomPos = Math.floor(Math.random() * 5)
        nutrients[randomPos] = randomValue

        return nutrients
    }
    
    let foodData = player.foodData
    if(foodData instanceof $TFCFoodData) {
        let [g, f, v, p, d] = suspiciousFoodNutrientGen()
        let data = new $FoodData(4, 0, 0, g, f, v, p, d, 0)
        foodData["eat(net.dries007.tfc.common.capabilities.food.FoodData)"](data)
    }
})

BlockEvents.rightClicked(event => {
    const {hand, block, player, level, server} = event
    let blockId = "kaleidoscope_cookery:suspicious_stir_fry"
    if(hand.name() != 'MAIN_HAND') return
    if(block.id != blockId) return

    let foodBlock = block.blockState.block
    let bites = 1
    if(foodBlock instanceof $FoodBiteBlock){
        bites = block.blockState.getValue(foodBlock.getBites())
    }

    if(bites < 1) {
        player.eat(level, "kaleidoscope_cookery:suspicious_stir_fry")
        const {x , y, z} = block.pos
        server.runCommandSilent(`execute in ${block.dimension} run setblock ${x} ${y} ${z} ${blockId}[bites=1]`)
        event.success()
    }
})