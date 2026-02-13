
const removeeffect = [
        "effect.xaerominimap.no_cave_maps",
        "effect.xaerominimap.no_waypoints",
        "effect.xaerominimap.no_entity_radar",
        "effect.xaerominimap.no_minimap",
        "effect.xaeroworldmap.no_cave_maps",
        "effect.xaeroworldmap.no_world_map"
    ]

ForgeEvents.onEvent("first.wildfires.api.customEvent.InventoryEffectRenderEvent", event => {
    
    event.getEffectList().removeIf(effectInstance => {
        let effectId = effectInstance.getEffect().getDescriptionId();
        return removeeffect.includes(effectId);
        
        //console.log(`检查效果：${effectId}`);
        //return effectId === "effect.minecraft.health_boost" || effectId === "effect.minecraft.health_boost";
    });
});





ForgeEvents.onEvent("first.wildfires.api.customEvent.JadeRenderEffectEvent", event => {
  

    // 3. 获取当前要渲染的药水效果名称（事件传递的单个效果名）
    const effectName = event.getName();
    const targetStr = effectName.replace("\"translate\":", "").replace("{", "").replace("}", "").replace("\"", "");
    //console.log(`${effectName}`); // 日志调试
      
    // 4. 判空防御（避免空值报错）
    if (!effectName) return;
    console.log(targetStr); // 日志调试
 //console.log(`{"${targetStr}"}`); // 日志调试
    // 5. 核心逻辑：如果是要隐藏的效果，取消事件（Mixin会跳过显示）
    if (removeeffect.includes(targetStr)) {
        event.setCanceled(true); // 关键：取消事件 → Jade 不显示这个效果
        console.log(`✅ 隐藏Jade提示中的效果：${targetStr}`); // 日志调试
    }
});