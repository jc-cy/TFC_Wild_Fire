StartupEvents.registry("block", event => {
        event.create("kubejs:andesite_chassis", "basic")
                .noValidSpawns(false) // 上面是否生成怪物
                .hardness(0.3) // 硬度


})//安山齿轮机箱
StartupEvents.registry('block', event => {

        // 1. 天然水石
        event.create('kubejs:tfc/water_stone', "cardinal")
                //可以含水
                .hardness(0.5)          // 硬度
                .box(5, 0, 1, 11, 3, 15) // 自定义碰撞箱
                .requiresTool(false)
                .tagBlock("kubejs:polisher")
                .blockEntity(info => {
                        info.serverTick(0, 1, entity => {

                                let block = entity.getBlock()
                                let downblock = block.down

                                if (downblock.getBlockState.isAir) {
                                        block.level.destroyBlock(block.pos, true, null, 1)
                                }

                        })
                })



        // 2. 砂岩磨刀石
        event.create('kubejs:tfc/sandstone_whetstone', "cardinal")
                .hardness(0.5)


                .box(5, 0, 1, 11, 3, 15)
                .requiresTool(false)
                .tagBlock("kubejs:polisher")
        // 3. 磨刀石（基础款）
        event.create('kubejs:tfc/whetstone', "cardinal")
                .hardness(0.5)

                .box(5, 0, 1, 11, 3, 15)
                .requiresTool(false)
                .tagBlock("kubejs:polisher")

        // 4. 金刚石磨刀石
        event.create('kubejs:tfc/diamond_whetstone', "cardinal")
                .hardness(0.5)

                .box(5, 0, 1, 11, 3, 15)
                .requiresTool(false)
                .tagBlock("kubejs:polisher")

        // 5. 铝陶瓷磨刀石
        event.create('kubejs:tfc/ceramic_stone', "cardinal")
                .hardness(0.5)

                .box(5, 0, 1, 11, 3, 15)
                .requiresTool(false)
                .tagBlock("kubejs:polisher")

        event.create('kubejs:disabled_turret', "cardinal")
                .hardness(0.5)
                .soundType('netherite_block')
                .box(0, 0, 0, 16, 10, 16)
                .hardness(20)
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('tfc:needs_copper_tool')
                .requiresTool()
                .defaultCutout()
        event.create('kubejs:grizzly_bear_rug', "cardinal")
                .hardness(0.1)
                .soundType('wool')
                .box(0, 0, 0, 16, 2, 16)
                .defaultCutout()
                .noCollision()
                .notSolid()
        event.create('kubejs:polar_bear_rug', "cardinal")
                .hardness(0.1)
                .soundType('wool')
                .box(0, 0, 0, 16, 2, 16)
                .defaultCutout()
                .noCollision()
                .notSolid()
        event.create('kubejs:black_bear_rug', "cardinal")
                .hardness(0.1)
                .soundType('wool')
                .box(0, 0, 0, 16, 2, 16)
                .defaultCutout()
                .noCollision()
                .notSolid()
        event.create('kubejs:ore/small_manganese', "tfc:ground_cover")
                .hardness(0.5)
                .soundType('deepslate')
        event.create('kubejs:damaged_concrete', "cardinal")
                .hardness(0.6)
                .soundType('deepslate')
        event.create('kubejs:rusty_concrete', "cardinal")
                .hardness(0.6)
                .soundType('deepslate')
        event.create('kubejs:damaged_metal_plate', "cardinal")
                .hardness(0.6)
                .soundType('deepslate')
        event.create('kubejs:rusty_metal_plate', "cardinal")
                .hardness(0.6)
                .soundType('deepslate')
        event.create('kubejs:obsidian_shards', "tfc:ground_cover")
                .hardness(0.2)
                .soundType('deepslate')
                .noCollision()
                .notSolid()

});
StartupEvents.registry('block', event => {
        event.create('unfired_crucible_mold') // 未烧制的坩埚模具
        event.create('corundum_brick_block').tag("tfc:blast_furnace_insulation").tag("tfc:bloomery_insulation")// 刚玉砖块
        event.create('crucible_mold') // 坩埚模具
        event.create('kubejs:tfc/dried_sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()


        event.create('kubejs:wild_brown_mushroom')
                .material('moss')
                .soundType('crop')
                .hardness('0.5')
                .box(4, 0, 4, 12, 6, 12)
                .noCollision()
                .notSolid()
                .renderType('cutout_mipped')
                .model("kubejs:block/wild_crop/wild_brown_mushroom")
                .tagBlock('tfc:mineable_with_sharp_tool')

        event.create('kubejs:wild_red_mushroom')
                .material('moss')
                .soundType('crop')
                .hardness('0.5')
                .box(4, 0, 4, 12, 6, 12)
                .noCollision()
                .notSolid()
                .renderType('cutout_mipped')
                .model("kubejs:block/wild_crop/wild_red_mushroom")
                .tagBlock('tfc:mineable_with_sharp_tool')

        event.create('kubejs:wild_fluorescyst_shroom')
                .material('moss')
                .soundType('crop')
                .hardness('0.5')
                .box(4, 0, 4, 12, 6, 12)
                .noCollision()
                .notSolid()
                .renderType('cutout_mipped')
                .model("kubejs:block/wild_crop/wild_fluorescyst_shroom")
                .tagBlock('tfc:mineable_with_sharp_tool')
                .lightLevel(5)

        event.create('kubejs:tfc/sinew')
                .material('wood')
                .hardness(0.5)
                .box(0, 0, 0, 16, 1, 16)
                .noCollision()
                .blockEntity(info => {
                        info.serverTick(24001, 24000, entity => {
                                entity.getBlock().set('kubejs:tfc/dried_sinew')
                        })
                })

        event.create('kubejs:underwater_turbine', 'cardinal')//水下涡轮
                .model('kubejs:block/underwater_turbine')
                .soundType('netherite_block')
                .hardness(20) // 设置硬度
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('tfc:needs_wrought_iron_tool')
                .requiresTool()
                .defaultCutout()

        event.create('kubejs:submarine_core', 'cardinal')//潜艇核心
                .model('kubejs:block/submarine_core')
                .soundType('copper')
                .hardness(20) // 设置硬度
                .tagBlock('minecraft:mineable/pickaxe')
                .tagBlock('tfc:needs_copper_tool')
                .requiresTool()
                .defaultCutout()

        event.create('kubejs:simple_air_cushion', 'cardinal')//简易气球
                .model('kubejs:block/airship/simple_air_cushion')
                .soundType('wool')
                .hardness(5) // 设置硬度
                .defaultCutout()

        event.create('kubejs:air_cushion', 'cardinal')//气球
                .model('kubejs:block/airship/air_cushion')
                .soundType('wool')
                .hardness(5) // 设置硬度
                .defaultCutout()

        event.create('kubejs:double_wing', 'cardinal')//双翼
                .model('kubejs:block/airship/double_wing')
                .box(0, 3, 6, 16, 14, 26)
                .soundType('scaffolding')
                .tagBlock('minecraft:mineable/axe')
                .tagBlock('tfc:needs_copper_tool')
                .hardness(5) // 设置硬度
                .defaultCutout()
                .requiresTool()

        event.create('kubejs:airship_slats', 'cardinal')//飞艇侧板
                .model('kubejs:block/airship/airship_slats')
                .box(0, 4, 14, 16, 13, 16)
                .soundType('scaffolding')
                .tagBlock('minecraft:mineable/axe')
                .tagBlock('tfc:needs_copper_tool')
                .hardness(5) // 设置硬度
                .requiresTool()
                .defaultCutout()

        event.create('kubejs:gyrodyne_propeller')//人力飞机扇叶
                .model('kubejs:block/airship/gyrodyne_propeller')
                .box(7.75, -16, 7.75, 8.25, 16, 8.25)
                .soundType('scaffolding')
                .tagBlock('minecraft:mineable/axe')
                .tagBlock('tfc:needs_copper_tool')
                .hardness(5) // 设置硬度
                .requiresTool()
                .defaultCutout()

        const engine = [
                { name: "biplane_engine", box: [0, 0, 0, 16, 16, 16] },//双翼机引擎
                { name: "large_airship_engine", box: [-1, 0, -2, 17, 18, 16] },
                { name: "small_engine", box: [1, 0, 0, 15, 16, 16] },
                { name: "small_side_engine", box: [2, 2, 0, 14, 14, 16] },
                { name: "rugged_small_engine", box: [1, 0, 0, 15, 16, 16] },
                { name: "large_propeller", box: [5, 6, 12.5, 11, 12, 16.5] },
                { name: "large_twin_propeller", box: [5, 5, 12.5, 11, 11, 16.5] },
                { name: "medium_propeller", box: [5, 5, 12.5, 11, 11, 16.5] },
                { name: "small_propeller", box: [5, 5, 12.5, 11, 11, 16.5] },
        ]

        engine.forEach(engine => {
                event.create(`kubejs:${engine.name}`, 'cardinal')
                        .model(`kubejs:block/airship/${engine.name}`)
                        .box(
                                engine.box[0], engine.box[1], engine.box[2],
                                engine.box[3], engine.box[4], engine.box[5]
                        )
                        .soundType('netherite_block')
                        .hardness(20)
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('tfc:needs_copper_tool')
                        .requiresTool()
                        .defaultCutout()
        });
})
const $CrucibleBlock = Java.loadClass('net.dries007.tfc.common.blocks.devices.CrucibleBlock')
const $ExtendedProperties = Java.loadClass('net.dries007.tfc.common.blocks.ExtendedProperties')
const $TFCBlockEntities = Java.loadClass('net.dries007.tfc.common.blockentities.TFCBlockEntities')
const $CrucibleBlockEntity = Java.loadClass('net.dries007.tfc.common.blockentities.CrucibleBlockEntity')
const $TooltipBlockItem = Java.loadClass('net.dries007.tfc.common.items.TooltipBlockItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('block', event => {
        event.createCustom("kubejs:crucible", () => new $CrucibleBlock(
                $ExtendedProperties
                        .of()
                        .strength(3.0)
                        .sound(SoundType.METAL)
                        .blockEntity($TFCBlockEntities.CRUCIBLE)
                        .serverTicks((level, pos, state, entity) =>
                                $CrucibleBlockEntity.serverTick(level, pos, state, entity)
                        )
        ))
})

StartupEvents.registry('item', event => {
        event.createCustom("kubejs:crucible", () => new $TooltipBlockItem(
                Block.id('kubejs:crucible').getBlockState().block,
                new $ItemProperties()
        ))
})
/*
StartupEvents.registry("block", event => {
        const dirt = [
                { name: "loam", type: "grass", sound: "grass", float: 0.5 },
                { name: "sandy_loam", type: "grass", sound: "grass", float: 0.5 },
                { name: "silt", type: "grass", sound: "grass", float: 0.5 },
                { name: "silty_loam", type: "grass", sound: "grass", float: 0.5 }
        ]

        dirt.forEach(dirt => {
                //泥土台阶
                event.create(`tfc:${dirt.type}/slab/${dirt.name}`, 'slab')
                        .soundType(dirt.sound)
                        .hardness(dirt.float)
                        .tagBlock('minecraft:mineable/shovel')
                        .tagBlock('tfc:ore_deposits')
                        .tagBlock('tfc:can_landslide')
        })
});
*/
//结构用支撑原木
StartupEvents.registry('block', event => {
        const wood_support = [
                { name: "oak" },
                { name: "cypress" },
                { name: "ironwood" },
                { name: "pine" },
                { name: "rosewood" },
                { name: "chestnut" },
                { name: "birch" },
                { name: "blackwood" }
        ]
        wood_support.forEach(wood => {
                event.create(`kubejs:wood/stripped_log_support/${wood.name}`, `basic`)
                        .soundType("wood")
                        .textureAll(`kubejs:block/wood/stripped_log/${wood.name}`)
                        .tagBlock('minecraft:mineable/axe')
                        .tagBlock('tfc:needs_stone_tool')
                        .tagBlock('minecraft:logs')
                        .requiresTool()
        })
        //创造支撑梁
        event.create('kubejs:super_support_block', 'basic')
                .soundType("netherite_block")
                .texture("up", 'kubejs:block/super_support_block_top')
                .texture("down", 'kubejs:block/super_support_block_top')
                .texture("east", 'kubejs:block/super_support_block_side')
                .texture("north", 'kubejs:block/super_support_block')
                .texture("west", 'kubejs:block/super_support_block')
                .texture("south", 'kubejs:block/super_support_block_side')
                .hardness(-1)
                .noDrops()
})


//金属支撑梁
StartupEvents.registry('block', event => {
        const metal_support = [
                { name: "copper", need: "copper", sound: "copper" },
                { name: "bismuth_bronze", need: "copper", sound: "copper" },
                { name: "black_bronze", need: "copper", sound: "copper" },
                { name: "bronze", need: "copper", sound: "copper" },
                { name: "cast_iron", need: "copper", sound: "copper" },
                { name: "wrought_iron", need: "wrought_iron", sound: "netherite_block" },
                { name: "steel", need: "wrought_iron", sound: "netherite_block" },
                { name: "black_steel", need: "wrought_iron", sound: "netherite_block" },
                { name: "red_steel", need: "wrought_iron", sound: "netherite_block" },
                { name: "blue_steel", need: "wrought_iron", sound: "netherite_block" },
                { name: "galvanized_steel", need: "wrought_iron", sound: "netherite_block" },
        ]
        metal_support.forEach(support => {
                event.create(`kubejs:${support.name}_support`, `tfc:support`)
                        .hardness(13)
                        .tagBlock(`minecraft:mineable/pickaxe`)
                        .model(`kubejs:block/${support.name}_support`)
                        .soundType(`${support.sound}`)
                        .tagBlock(`tfc:needs_${support.need}_tool`)
                        .requiresTool()
        })
})
StartupEvents.registry("block", event => {
        const sand = [
                { name: "brown", type: "sand", sound: "sand", float: 0.5 },
                { name: "white", type: "sand", sound: "sand", float: 0.5 },
                { name: "black", type: "sand", sound: "sand", float: 0.5 },
                { name: "red", type: "sand", sound: "sand", float: 0.5 },
                { name: "yellow", type: "sand", sound: "sand", float: 0.5 },
                { name: "green", type: "sand", sound: "sand", float: 0.5 },
                { name: "pink", type: "sand", sound: "sand", float: 0.5 }
        ]
        sand.forEach(sand => {
                //沙子台阶
                event.create(`tfc:${sand.type}/slab/${sand.name}`, 'slab')
                        .textureAll(`tfc:block/${sand.type}/${sand.name}`)
                        .soundType(sand.sound)
                        .hardness(sand.float)
                        .tagBlock('minecraft:mineable/shovel')
                        .tagBlock('tfc:ore_deposits')
                        .tagBlock('tfc:can_landslide')
        })

});

StartupEvents.registry("block", event => {
        //注册宝石砂    
        const deposits = [
                'andesite',
                'basalt',
                'chalk',
                'chert',
                'claystone',
                'conglomerate',
                'dacite',
                'diorite',
                'dolomite',
                'gabbro',
                'gneiss',
                'granite',
                'limestone',
                'marble',
                'phyllite',
                'quartzite',
                'rhyolite',
                'schist',
                'shale',
                'slate'
        ]

        deposits.forEach(deposit => {
                //宝石砂
                event.create(`kubejs:deposit/gem_gravel/${deposit}`)
                        .gravelSoundType()
                        .model(`kubejs:block/deposit/gem_gravel/${deposit}`)
                        .tag('forge:gravel')
                        .tagBlock('minecraft:mineable/shovel')
                        .tagBlock('tfc:ore_deposits')
                        .tagBlock('tfc:can_landslide')
                        .requiresTool()
                //锰结核砂
                event.create(`kubejs:deposit/manganese/${deposit}`)
                        .gravelSoundType()
                        .model(`kubejs:block/deposit/manganese/${deposit}`)
                        .tag('forge:gravel')
                        .tagBlock('minecraft:mineable/shovel')
                        .tagBlock('tfc:ore_deposits')
                        .tagBlock('tfc:can_landslide')
                        .requiresTool()

                //钛铁矿
                event.create(`kubejs:ore/poor_ilmenite/${deposit}`)
                        .model(`kubejs:block/ore/poor_ilmenite/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/ilmenite')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()

                event.create(`kubejs:ore/ilmenite/${deposit}`)
                        .model(`kubejs:block/ore/ilmenite/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/ilmenite')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()

                event.create(`kubejs:ore/rich_ilmenite/${deposit}`)
                        .model(`kubejs:block/ore/rich_ilmenite/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/ilmenite')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()

                //原生钒矿
                event.create(`kubejs:ore/poor_native_vanadium/${deposit}`)
                        .model(`kubejs:block/ore/poor_native_vanadium/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/native_vanadium')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_stone_tool')
                        .hardness(5)
                        .requiresTool()

                event.create(`kubejs:ore/native_vanadium/${deposit}`)
                        .model(`kubejs:block/ore/native_vanadium/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/native_vanadium')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_stone_tool')
                        .hardness(5)
                        .requiresTool()

                event.create(`kubejs:ore/rich_native_vanadium/${deposit}`)
                        .model(`kubejs:block/ore/rich_native_vanadium/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/native_vanadium')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_stone_tool')
                        .hardness(5)
                        .requiresTool()

                //锰结核
                event.create(`kubejs:ore/poor_manganese/${deposit}`)
                        .model(`kubejs:block/ore/poor_manganese/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/manganese')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()

                event.create(`kubejs:ore/manganese/${deposit}`)
                        .model(`kubejs:block/ore/manganese/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/manganese')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()

                event.create(`kubejs:ore/rich_manganese/${deposit}`)
                        .model(`kubejs:block/ore/rich_manganese/${deposit}`)
                        .tag('forge:ores')
                        .tag('forge:ores/manganese')
                        .tagBlock('minecraft:mineable/pickaxe')
                        .tagBlock('minecraft:needs_diamond_tool')
                        .hardness(12)
                        .requiresTool()
        })
})