TFCEvents.registerItemStackModifier(event => {
    event.withInventory('kubejs:binding_bonus', (output, input, inventory) => {
        let binding_level = 0
        let forging_bonus = 0
        let broken = false
        let Quenching = 0
        if (input.hasNBT()) {
            if (input.nbt.contains("tfc:forging_bonus")) {
                forging_bonus = input.nbt.getInt("tfc:forging_bonus")
            }
            if (input.nbt.contains("Quenching")) {
                Quenching = input.nbt.getInt("Quenching")
            }
        }

        let { maxDamage } = output
        inventory.forEach(stack => {
            if (stack.hasTag('kubejs:low_binding')) binding_level = 1
            else if (stack.hasTag('kubejs:medium_binding')) binding_level = 2
            else if (stack.hasTag('kubejs:advanced_binding')) binding_level = 3
            if (stack.hasNBT() && stack.nbt.contains("Broken")) broken = true

        })
        if (broken) {
            output.getOrCreateTag().putBoolean("Broken", true);
        }
        if (binding_level == 1) {
            output.setDamageValue(maxDamage * 0.15 + Math.floor(Quenching / 2))
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        else if (binding_level == 2) {
            output.setDamageValue(Math.floor(Quenching / 3))
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        else if (binding_level == 3) {
            output.setDamageValue(Math.floor(Quenching / 3))
            output.orCreateTag.merge(`{"tfc:forging_bonus":${(forging_bonus + 1).toFixed(0)}}`)
        }
        else {
            output.setDamageValue(maxDamage * 0.3 + Math.floor(Quenching / 3))
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`)
        }
        //output.orCreateTag.merge(`{"Polish":${Math.min(Quenching, 300)}}`)
        output.orCreateTag.putInt("Polish", Math.min(Quenching, 300))
        
        return output
    })
})