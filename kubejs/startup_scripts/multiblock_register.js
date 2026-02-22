//startup_scripts
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
const $Character = Java.loadClass('java.lang.Character');
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey');
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey');
StartupEvents.postInit((event) => {
    let BLOCK = $ResourceKey.createRegistryKey('block');


    /*/
    方块tag写法
    $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, '方块tag'))
    */
    $PatchouliAPI.registerMultiblock(
        'tfc:submarine',//潜水艇
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '_____', '__E__', '_____', '_____'],
                ['_____', '_HHH_', '_HHH_', '_CDC_', '_FIF_', '_____'],
                ['_____', '_HHH_', '_HKH_', '_CCC_', '_FCF_', '__M__'],
                ['A___A', 'FG0GF', 'IJJJI', '_GGG_', '_____', '_____']
            ],
            new $Character('0'),
            "kubejs:submarine_core[facing=west]",
            new $Character('A'),
            "create:encased_fan[facing=west]",
            new $Character('B'),
            "minecraft:iron_block",
            new $Character('C'),
            "immersiveengineering:light_engineering",
            new $Character('D'),
            "immersiveengineering:coil_lv",
            new $Character('E'),
            "immersiveengineering:steel_fence",
            new $Character('F'),
            "immersiveengineering:sheetmetal_copper",
            new $Character('G'),
            "tfc:metal/block/copper_slab[type=top]",
            new $Character('H'),
            "createprism:copper_clear_glass_casing",
            new $Character('I'),
            "tfc:metal/block/copper",
            new $Character('J'),
            "immersiveengineering:slab_sheetmetal_iron[type=top]",
            new $Character('K'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('M'),
            "kubejs:underwater_turbine[facing=east]"

        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:biplane',//飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['_______', '_______', '_______', '_______', '___i___',],
                ['MMMOMMM', 'NNN0NNN', '__IHL__', '___T___', '__mTm__',]
            ],
            new $Character('O'),
            "create:encased_fan[facing=east]",
            new $Character('M'),
            "minecraft:oak_stairs[facing=west]",
            new $Character('N'),
            "minecraft:oak_stairs[facing=east]",
            new $Character('0'),
            "minecraft:furnace[facing=east]",
            new $Character('H'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('I'),
            "minecraft:spruce_wall_sign[facing=south]",//需要全部木头的靠墙告示牌【
            new $Character('L'),
            "minecraft:spruce_wall_sign[facing=north]",//需要全部木头的靠墙告示牌【
            new $Character('T'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:planks')),
            new $Character('m'),
            "create:white_sail[facing=up]",
            new $Character('i'),
            "create:white_sail[facing=south]"

        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:airship',//飞艇
        $PatchouliAPI.makeMultiblock(
            [
                ['_Z_', '_H_', '_H_', '___', '___',],
                ['_I_', '_H_', '_H_', '_Z_', '___',],
                ['_I_', '___', '___', '_I_', '___',],
                ['_Z_', 'itl', 'itl', '_0_', '_K_',]
            ],
            new $Character('0'),
            "minecraft:observer[facing=east]",
            new $Character('t'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('i'),
            "minecraft:spruce_wall_sign[facing=south]",//需要全部木头的靠墙告示牌【
            new $Character('l'),
            "minecraft:spruce_wall_sign[facing=north]",//需要全部木头的靠墙告示牌【
            new $Character('I'),
            "farmersdelight:rope",
            new $Character('Z'),
            "create:white_sail[facing=south]",
            new $Character('H'),
            "minecraft:white_wool",
            new $Character('H'),
            "minecraft:white_wool",
            new $Character('K'),
            "create:encased_fan[facing=west]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:cargo_airship',//货运飞艇
        $PatchouliAPI.makeMultiblock(
            [
                ['_Z_', '_H_', '_H_', '___', '___',],
                ['_I_', '_H_', 'KHK', '_Z_', '___',],
                ['_I_', '___', '___', '_I_', '___',],
                ['_Z_', 'MtU', 'MtU', '_0_', '_K_',]
            ],
            new $Character('0'),
            "minecraft:observer[facing=east]",
            new $Character('t'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('M'),
            "minecraft:chest[facing=south]",
            new $Character('I'),
            "farmersdelight:rope",
            new $Character('U'),
            "minecraft:chest[facing=north]",
            new $Character('Z'),
            "create:white_sail[facing=south]",
            new $Character('H'),
            "minecraft:white_wool",
            new $Character('K'),
            "create:encased_fan[facing=west]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:warship',//战斗大型飞艇
        $PatchouliAPI.makeMultiblock(
            [
                ['_________', '_________', '____H____', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '____H____', '____H____', '____H____',],
                ['____H____', '____H____', '____H____', '___OOO___', '_RO___OR_', '_RO___OR_', '_RO___OR_', '_RO___OR_', '___OOO___', '_________', '_________', '_________',],
                ['_________', '____H____', '____H____', 'ITTRRRTTI', 'BRO___ORB', 'IRO___ORI', 'IRO___ORI', 'BRO___ORB', 'ITIOOOITI', '__D_D_D__', '_________', '_________',],
                ['_________', '_________', '____H____', '___OOO___', '_ROOOOOR_', '_ROOOOOR_', '_ROOOOOR_', '_ROOOOOR_', '___OOO___', '_________', '_________', '_________',],
                ['_________', '_________', '_________', '_________', '__ITTTI__', '_________', '_________', '__ITTTI__', '_________', '_________', '_________', '_________',],
                ['_________', '_________', '_________', '_________', '__ii_ii__', '_________', '_________', '__ii_ii__', '_________', '_________', '_________', '_________',],
                ['_________', '_________', '___MMM___', '_________', '___i_i___', '_________', '_________', '___i0i___', '____D____', '_________', '_________', '_________',],
                ['_________', '_________', '___TRT___', '___ILI___', '___RAR___', '___RtR___', '__cRtRC__', '__cRARC__', '_________', '_________', '_________', '_________',]
            ],
            new $Character('0'),
            "minecraft:blast_furnace[facing=east]",
            new $Character('H'),
            "create:white_sail[facing=south]",
            new $Character('M'),
            "create:industrial_iron_window_pane",
            new $Character('R'),
            "create:industrial_iron_block",
            new $Character('T'),
            "create:metal_girder",//不知道怎么写金属梁的x为ture
            new $Character('I'),
            "create:metal_girder",//不知道怎么写金属梁的z为ture
            new $Character('A'),
            "create:andesite_casing",
            new $Character('L'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'interiors:floor_chairs')),//不知道怎么写方向、方向为[facing=east]
            new $Character('t'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('i'),
            "farmersdelight:rope",
            new $Character('O'),
            "minecraft:white_wool",
            new $Character('B'),
            "tfc:metal/block/copper",
            new $Character('C'),
            "minecraft:chest[facing=north]",
            new $Character('c'),
            "minecraft:chest[facing=south]",
            new $Character('D'),
            "minecraft:smoker[facing=west]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:gyrodyne',//人力飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '_____', '__B__', '_____', '_____',],
                ['_____', '_____', '_____', '__L__', '_____', '_____',],
                ['__I__', '__I__', '__0__', '_itl_', 'mmtmm', '__U__',]
            ],
            new $Character('0'),
            "minecraft:beehive[facing=west]",
            new $Character('I'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:fences')),
            new $Character('t'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('i'),
            "minecraft:spruce_wall_sign[facing=south]",
            new $Character('l'),
            "minecraft:spruce_wall_sign[facing=north]",
            new $Character('L'),
            "create:shaft[axis=y]",
            new $Character('B'),
            "minecraft:oak_pressure_plate",
            new $Character('m'),
            "create:white_sail[facing=up]",
            new $Character('U'),
            "minecraft:spruce_fence_gate[facing=east]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:quadrocopter',//四轴飞行器
        $PatchouliAPI.makeMultiblock(
            [
                ['B_B', '___', 'B_B',],
                ['I_I', 'itl', 'I0I',]
            ],
            new $Character('0'),
            "minecraft:observer[facing=east]",
            new $Character('t'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'create:seats')),
            new $Character('i'),
            "minecraft:spruce_wall_sign[facing=south]",//需要全部木头的靠墙告示牌【
            new $Character('l'),
            "minecraft:spruce_wall_sign[facing=north]",//需要全部木头的靠墙告示牌【
            new $Character('I'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:fences')),
            new $Character('B'),
            "minecraft:oak_pressure_plate"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:bamboo_hopper',//浮筒飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['______MMM______', '______M_M______', '___v_______v___', '___v_______v___', '_______________', '_______________', '_______________', '___I_______I___', '___I_______I___', '_______________',],
                ['______RRR______', '______A0A______', 'TTTpTT_L_TTpTTT', '___T__L_L__T___', '___O__APA__O___', '___I_______I___', '___I_______I___', '__ToT_____ToT__', '___T_______T___', '___K_______K___',],
                ['_______________', '___Q__AAA__Q___', '___Q__AAA__Q___', '___Q__AAA__Q___', '___I_______I___', '_______________', '_______________', '_______________', '_______________', '_______________',]
            ],
            new $Character('0'),
            "minecraft:lectern[facing=west]",
            new $Character('R'),
            "create:industrial_iron_block",
            new $Character('M'),
            "create:industrial_iron_window_pane",
            new $Character('A'),
            "create:andesite_casing",
            new $Character('L'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'interiors:floor_chairs')),//不知道怎么写方向、方向为[facing=east]
            new $Character('K'),
            "create:encased_fan[facing=west]",
            new $Character('P'),
            "minecraft:piston[facing=west]",
            new $Character('p'),
            "minecraft:piston[facing=east]",
            new $Character('Q'),
            "immersiveengineering:cushion",
            new $Character('T'),
            "create:copper_scaffolding",
            new $Character('v'),
            "create:copper_table_cloth",
            new $Character('O'),
            "tfc:metal/block/copper_stairs[facing=west]",//[half=top]
            new $Character('o'),
            "tfc:metal/block/copper_stairs[facing=east]",//[half=top]
            new $Character('I'),
            "create:copper_bars",
        )
    );
});
