// client
// zh_cn "tooltip.hot":"§c烫烫烫"
ItemEvents.tooltip(event => {
    event.addAdvancedToAll((item, advanced, text) => {
        /*console.log("物品ID：", item.id);
        console.log("是否有tool_head标签：", item.hasTag('kubejs:tool_head'));
        console.log("是否有Quenching NBT：", item.hasNBT("Quenching"));
        console.log("是否有Polish NBT：", item.hasNBT("Polish"));*/

        // 1. 淬火提示模块（已修复，保留）
        if (item.hasTag('kubejs:tool_head') && item.nbt && item.nbt.Quenching != undefined) {
            // 直接从nbt属性取值，无需getInt()
            const quench = parseInt(item.nbt.Quenching) || 0;

            if (quench > 325 && item.nbt.Broken != undefined) {
                text.add(Text.translate('tooltip.quench9', quench)); // 淬火龟裂
            } else if (quench > 325) {
                text.add(Text.translate('tooltip.quench8', quench)); // 淬火微裂
            } else if (quench > 300) {
                text.add(Text.translate('tooltip.quench7', quench)); // 淬火精淬1
            } else if (quench > 250) {
                text.add(Text.translate('tooltip.quench6', quench)); // 淬火精淬0
            } else if (quench > 200) {
                text.add(Text.translate('tooltip.quench5', quench)); // 淬火淬火4
            } else if (quench > 150) {
                text.add(Text.translate('tooltip.quench4', quench)); // 淬火淬火3
            } else if (quench > 100) {
                text.add(Text.translate('tooltip.quench3', quench)); // 淬火淬火2
            } else if (quench > 50) {
                text.add(Text.translate('tooltip.quench2', quench)); // 淬火淬火1
            } else if (quench > 0) {
                text.add(Text.translate('tooltip.quench1', quench)); // 淬火淬火0
            }
        }

        // ==================== 2. 抛光提示（终极兼容写法） ====================
        if (item.hasTag('kubejs:polish') && item.nbt && item.nbt.Polish != undefined) {
            // 直接从nbt属性取值，无需getInt()
            const polish = parseInt(item.nbt.Polish) || 0;

            if (polish > 450) {
                text.add(Text.translate('tooltip.polish10', polish)); // 极致锃亮（满级）
            } else if (polish > 400) {
                text.add(Text.translate('tooltip.polish9', polish)); // 锋锐0
            } else if (polish > 350) {
                text.add(Text.translate('tooltip.polish8', polish)); // 锃亮0
            } else if (polish > 300) {
                text.add(Text.translate('tooltip.polish7', polish)); // 锃亮0
            } else if (polish > 250) {
                text.add(Text.translate('tooltip.polish6', polish)); // 锃亮0
            } else if (polish > 200) {
                text.add(Text.translate('tooltip.polish5', polish)); // 锃亮0
            } else if (polish > 150) {
                text.add(Text.translate('tooltip.polish4', polish)); // 锃亮0
            } else if (polish > 100) {
                text.add(Text.translate('tooltip.polish3', polish)); // 锃亮0
            } else if (polish > 50) {
                text.add(Text.translate('tooltip.polish2', polish)); // 粗磨1
            } else if (polish > 0) {
                text.add(Text.translate('tooltip.polish1', polish)); // 粗磨0
            }
        }

        if (TFC.misc.getHeat(item) != null) {

            if (TFC.misc.getHeat(item).getTemperature() > 300) {
                if (!item.hasTag('kubejs:nohot')) text.add(Text.translate('tooltip.hot'))

            }
        }
        else if (item.hasTag('kubejs:hot_items')) {
            text.add(Text.translate('tooltip.hot'))
        }
        if (TFC.misc.getHeat(item) != null) {

            if (TFC.misc.getHeat(item).getTemperature() == 0 && item.id == 'kubejs:heating_warmer') {

                text.add(Text.translate('tooltip.warmer'))
            }
        }






    })

})
