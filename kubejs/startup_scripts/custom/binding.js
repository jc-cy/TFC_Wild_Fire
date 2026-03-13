// 注册物品堆栈修改器，用于处理绑定奖励逻辑
TFCEvents.registerItemStackModifier(event => {
    // 为名为'kubejs:binding_bonus'的库存注册处理函数
    // output: 输出物品栈
    // input: 输入物品栈
    // inventory: 库存中的其他物品
    event.withInventory('kubejs:binding_bonus', (output, input, inventory) => {
        // 初始化变量
        let binding_level = 0; // 绑定等级：0-无绑定，1-低等，2-中等，3-高等
        let forging_bonus = 0; // 锻造奖励值
        let broken = false; // 是否有破损材料
        let Quenching = 0; // 淬火值
        let TempDuration = 0; // 临时耐久  
        
        // 检查输入物品是否有NBT数据
        if (input.hasNBT()) {
            // 获取锻造奖励值
            if (input.nbt.contains("tfc:forging_bonus")) {
                forging_bonus = input.nbt.getInt("tfc:forging_bonus");
            }
            // 获取淬火值
            if (input.nbt.contains("Quenching")) {
                Quenching = input.nbt.getInt("Quenching");
            }
        }

        // 获取输出物品的最大耐久度
        let { maxDamage } = output;
        
        // 遍历库存中的所有物品，检查绑定材料等级和是否有破损
        inventory.forEach(stack => {
            // 检查绑定材料等级
            if (stack.hasTag('kubejs:low_binding')) binding_level = 1;
            else if (stack.hasTag('kubejs:medium_binding')) binding_level = 2;
            else if (stack.hasTag('kubejs:advanced_binding')) binding_level = 3;
            
            // 检查是否有破损材料
            if (stack.hasNBT() && stack.nbt.contains("Broken")) broken = true;
            // 检测木棍是否是高级木棍
            if (stack.id == 'minecraft:stick' ) {
                 output.orCreateTag.putInt("TempDuration", 300);
                 
            }
        });
        
        // 如果有破损材料，标记输出物品为破损
        if (broken) {
            output.getOrCreateTag().putBoolean("Broken", true);
        }
        
        // 根据绑定等级设置不同的伤害值和锻造奖励
        if (binding_level == 1) {
            // 低等绑定：设置伤害值为最大耐久的15%加上淬火值的一半
            output.setDamageValue(maxDamage * 0.15 + Math.floor(Quenching / 2));
            // 保留原有的锻造奖励
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`);
        }
        else if (binding_level == 2) {
            // 中等绑定：设置伤害值为淬火值的三分之一
            output.setDamageValue(Math.floor(Quenching / 3));
            // 保留原有的锻造奖励
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`);
        }
        else if (binding_level == 3) {
            // 高等绑定：设置伤害值为淬火值的三分之一
            output.setDamageValue(Math.floor(Quenching / 3));
            // 锻造奖励+1
            output.orCreateTag.merge(`{"tfc:forging_bonus":${(forging_bonus + 1).toFixed(0)}}`);
        }
        else {
            // 无绑定：设置伤害值为最大耐久的30%加上淬火值的三分之一
            output.setDamageValue(maxDamage * 0.3 + Math.floor(Quenching / 3));
            // 保留原有的锻造奖励
            output.orCreateTag.merge(`{"tfc:forging_bonus":${forging_bonus}}`);
        }
        
        // 设置抛光值，最大为300
        // 注释掉的代码是另一种设置方式
        // output.orCreateTag.merge(`{"Polish":${Math.min(Quenching, 300)}}`)
        output.orCreateTag.putInt("Polish", Math.min(Quenching, 300));
        
        // 返回修改后的输出物品
        return output;
    });
});