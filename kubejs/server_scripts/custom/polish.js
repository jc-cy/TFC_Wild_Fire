const polishConfig = {
    'kubejs:tfc/water_stone': {          // 天然水石
        addPolish: 8,    // 每次打磨值+8
        maxPolish: 55,   // 最高打磨值55
        durabilityCost: 4 ,// 消耗4耐久
        sound:4
    },
    'kubejs:tfc/sandstone_whetstone': {  // 砂岩磨刀石
        addPolish: 10,
        maxPolish: 110,
        durabilityCost: 6,
        sound:5
    },
    'kubejs:tfc/whetstone': {            // 基础磨刀石
        addPolish: 15,
        maxPolish: 220,
        durabilityCost: 8,
        sound:6
    },
    'kubejs:tfc/diamond_whetstone': {    // 金刚石磨刀石
        addPolish: 23,
        maxPolish: 370,
        durabilityCost: 19,
        sound:7
    },
    'kubejs:tfc/ceramic_stone': {        // 铝陶瓷磨刀石
        addPolish: 8,
        maxPolish: 500,
        durabilityCost: 5,
        sound:8
    }
};

BlockEvents.rightClicked(event => {
    const { player, block } = event;
   
    let time = block.level.getTime()+10
    const heldItem = player.getMainHandItem();

    if (block.hasTag('kubejs:polisher')) {


        if (heldItem.isEmpty()) return;
        const blockId = block.id;
        //player.tell(blockId)
        const pconfig = polishConfig[blockId];
        // 获取当前抛光值以及耐久
        let currentPolish = heldItem.getOrCreateTag().getInt('Polish') || 0;
        const maxdamage = heldItem.getMaxDamage();
        const nowdamage = heldItem.getOrCreateTag().getInt('Damage') || 0;
        const comparisondamage = maxdamage-nowdamage
        // 计算新抛光值（不超过该磨刀石的最高值）
        const newPolish = Math.min(currentPolish + pconfig.addPolish, pconfig.maxPolish);
        const newDamage = nowdamage + pconfig.durabilityCost




        if (event.getHand() == 'main_hand' && heldItem.hasTag('kubejs:polish')&&comparisondamage>pconfig.durabilityCost) {
            
            //player.tell("ok")
            // 更新NBT

            heldItem.getOrCreateTag().putInt('Damage', newDamage);
            if (newPolish > currentPolish) heldItem.getOrCreateTag().putInt('Polish', newPolish);//防止打磨值因为打磨降低

            block.level.playSound(null,block.pos.x, block.pos.y, block.pos.z, "minecraft:block.grindstone.use", "blocks", 5,pconfig.sound);
            
        }

    }

});