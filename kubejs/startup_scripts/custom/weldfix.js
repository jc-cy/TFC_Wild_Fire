ForgeEvents.onEvent("first.wildfires.api.customEvent.AnvilWeldEvent", event => {



// 获取左侧物品堆（ItemStack）
    const leftStack = event.getLeft();
    // 获取右侧物品堆
    const rightStack = event.getRight();
    
    // KubeJS中常用的物品判断：获取物品ID（比如 "tfc:copper_ingot"）
    const leftItemId = leftStack.getItem().getRegistryName().toString();
    const rightItemId = rightStack.getItem().getRegistryName().toString();
    
    // 打印调试信息（控制台/日志中查看）
    console.log("铁砧左侧物品：", leftItemId, "数量：", leftStack.getCount());
    console.log("铁砧右侧物品：", rightItemId, "数量：", rightStack.getCount());

    // ===================== 2. 场景1：修改焊接的物品（比如强制右侧物品为金锭） =====================
    // 构建新的物品堆：1个金锭（KubeJS标准写法）
    const goldIngot = Item.of("kubejs:gold_fragments", 1);
    // 修改事件中的右侧物品
    event.setRight(goldIngot);


})