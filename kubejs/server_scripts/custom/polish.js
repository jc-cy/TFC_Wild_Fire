BlockEvents.rightClicked(event => {
    // 1. 解构事件参数（KubeJS 6 推荐写法）
    const { block, player } = event

    // 过滤条件1：只处理主手右键（跳过副手/空手）
    if (event.getHand() == 'main_hand') {
        const heldItem = player.getMainHandItem(); // KubeJS 6 中 getItem 改为 getMainHandItem()
        if (!heldItem) return;
        if (heldItem.isEmpty()) {
            player.sendSystemMessage(Text.literal('你手上没有物品可以抛光！')); // KubeJS 6 改用 sendSystemMessage + Text 构建消息
            return;
        }


        if (block.hasTag('kubejs:polisher')) {


            let polishValue = 0;
            if (heldItem.hasNBT()) {
                player.sendSystemMessage(Text.literal('抛光！'));
                polishValue = heldItem.nbt.getInt('Polish') || 0;
            }


            polishValue += 40;

            // heldItem.orCreateTag.merge(`{"Polish":${Math.min(polishValue, 300)}}`)
            heldItem.getOrCreateTag().putInt('Polish', Math.min(polishValue, 300));

            player.sendSystemMessage(
                Text.green(` 物品抛光值 +40，当前值：${polishValue}`)
            );
        }
    }
});