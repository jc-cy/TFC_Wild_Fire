ForgeEvents.onEvent("first.wildfires.api.customEvent.InventoryEffectRenderEvent", event => {
    const removeeffect = [
        'effect.xaerominimap.no_cave_maps',
        'effect.xaerominimap.no_waypoints',
        'effect.xaerominimap.no_entity_radar',
        'effect.xaerominimap.no_minimap',
        'effect.xaeroworldmap.no_cave_maps',
        'effect.xaeroworldmap.no_world_map'
    ]
    event.getEffectList().removeIf(effectInstance => {
        let effectId = effectInstance.getEffect().getDescriptionId();
        return removeeffect.includes(effectId);
        
        //console.log(`检查效果：${effectId}`);
        //return effectId === "effect.minecraft.health_boost" || effectId === "effect.minecraft.health_boost";
    });
});
