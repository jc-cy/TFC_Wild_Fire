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
                        info.serverTick(0,1,entity=> {
                               
                                let block = entity.getBlock()
                                let downblock = block.down
                                
                                if(downblock.getBlockState.isAir){
                                       block.level.destroyBlock(block.pos,true,null,1)
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


});
StartupEvents.registry('block', event => {
        event.create('unfired_crucible_mold') // 未硬化的坩埚模具
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

StartupEvents.registry("block", event => {
        const dirt = [
                { name: "loam", type: "grass", sound: "grass", float: 0.5 },
                { name: "sandy_loam", type: "grass", sound: "grass", float: 0.5 },
                { name: "silt", type: "grass", sound: "grass", float: 0.5 },
                { name: "silty_loam", type: "grass", sound: "grass", float: 0.5 },
                { name: "brown", type: "sand", sound: "sand", float: 0.5 },
                { name: "white", type: "sand", sound: "sand", float: 0.5 },
                { name: "black", type: "sand", sound: "sand", float: 0.5 },
                { name: "red", type: "sand", sound: "sand", float: 0.5 },
                { name: "yellow", type: "sand", sound: "sand", float: 0.5 },
                { name: "green", type: "sand", sound: "sand", float: 0.5 },
                { name: "pink", type: "sand", sound: "sand", float: 0.5 }
        ]
        dirt.forEach(dirt => {
                //泥土台阶
                event.create(`tfc:${dirt.type}/slab/${dirt.name}`,'slab')
                         .model(`kubejs:block/${dirt.type}/slab/${dirt.name}`)
                        .soundType(dirt.sound)
                        .hardness(dirt.float)
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