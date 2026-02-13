//烧杂酚油触发事件中毒事件
BlockEntityEvents.tick(event => {
    let blockEntity = event.blockEntity
    let { level, pos } = event
    if (level.time % 20 != 0) return;
    let block = level.getBlock(pos)
    let BlockList = [
        //存储杂酚油会导致中毒的方块
        "createdieselgenerators:diesel_engine",
        "createdieselgenerators:large_diesel_engine",
        "createdieselgenerators:huge_diesel_engine",
        "createdieselgenerators:burner"
    ]
    if (!BlockList.includes(block.id)) return;
    let fluidCap = blockEntity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get()
    if (fluidCap.getFluidInTank(0).fluid.getFluidType() != "immersiveengineering:creosote") return;
    let x = block.pos.x
    let y = block.pos.y
    let z = block.pos.z
    let aabb = AABB.of(x - 2, y - 1, z - 2, x + 3, y + 2, z + 3)
    let entities = level.getEntitiesWithin(aabb)
    let helmetList = [
        "alexscaves:hazmat_mask",
        "ad_astra:space_helmet",
        "ad_astra:netherite_space_helmet",
        "ad_astra:jet_suit_helmet",
        "create:copper_diving_helmet",
        "create:netherite_diving_helmet",
        "scguns:anthralite_respirator",
        "scguns:netherite_respirator"
    ]
    entities.forEach(entity => {
        if (entity.isAlive()) {
            if (entity.isPlayer()) {
                /** @type {Internal.Player} */
                let player = entity
                if (player.isCreative() || player.isSpectator()) return;
                let PlayerHeadSlot = player.getEquipment("head").getItem()
                if (!helmetList.includes(PlayerHeadSlot.id)) {
                    player.potionEffects.add("minecraft:poison", 100, 1,)
                }
            } else {
                let mobHeadSlot = entity.nbt.ArmorItems[3]
                if (!helmetList.includes(mobHeadSlot.id)) {
                    /** @type {Internal.LivingEntity} */
                    let LivingEntity = entity
                    LivingEntity.potionEffects.add("minecraft:poison", 100, 1)
                }
            }
        }
    })
})
//熔融金属流体燃烧事件
MEJSEvents.standOnFluid(event=>{
    let fluidIdList = [
        'kubejs:molten_glass',
        'kubejs:molten_corundum',
        'tfc:metal/manganese',
        'tfc:metal/titanium',
        'tfc:metal/vanadium',
        'tfc:metal/titanium_alloy'
    ]
    fluidIdList.forEach(fluidid=>{
        if (event.fluidState.fluidType != Fluid.of(fluidid).fluid.fluidType) return;
        event.entity.setRemainingFireTicks(20)
    })
})