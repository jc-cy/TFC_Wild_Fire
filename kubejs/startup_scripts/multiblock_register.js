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
            "create:black_seat",
            new $Character('M'),
            "kubejs:underwater_turbine[facing=east]"

        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:biplane',//飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['_______', '_______', '_______', '_______', '_______', '___i___',],
                ['___t___', '___ONNN', 'MMM0___', '__IHL__', '___T___', '__mTm__',]
            ],
            new $Character('0'),
            "kubejs:biplane_engine[facing=west]",
            new $Character('O'),
            "create:mechanical_bearing[facing=west]",
            new $Character('N'),
            "kubejs:double_wing[facing=east]",
            new $Character('M'),
            "kubejs:double_wing[facing=west]",
            new $Character('I'),
            "kubejs:airship_slats[facing=south]",
            new $Character('L'),
            "kubejs:airship_slats[facing=north]",
            new $Character('H'),
            "create:black_seat",
            new $Character('t'),
            "kubejs:medium_propeller[facing=east]",
            new $Character('T'),
            "create:andesite_casing",
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
                ['___', '_H_', '_H_', '_Z_', '___',],
                ['_Z_', '_H_', '_H_', '_I_', '___',],
                ['_I_', '___', '___', '_I_', '___',],
                ['_Z_', 'itl', 'itl', '_0_', '_K_',]
            ],
            new $Character('0'),
            "kubejs:small_engine[facing=east]",
            new $Character('t'),
            "create:black_seat",
            new $Character('i'),
            "kubejs:airship_slats[facing=south]",
            new $Character('l'),
            "kubejs:airship_slats[facing=north]",
            new $Character('I'),
            "farmersdelight:rope",
            new $Character('Z'),
            "create:white_sail[facing=south]",
            new $Character('H'),
            "kubejs:simple_air_cushion",
            new $Character('K'),
            "kubejs:small_propeller[facing=west]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:cargo_airship',//货运飞艇
        $PatchouliAPI.makeMultiblock(
            [
                ['___', '_H_', '_H_', '_Z_', '___',],
                ['_Z_', '_H_', 'KHK', 'kIk', '___',],
                ['_I_', '___', '___', '_I_', '___',],
                ['_Z_', 'MtU', 'MtU', '_0_', '_k_',]
            ],
            new $Character('0'),
            "kubejs:rugged_small_engine[facing=east]",
            new $Character('t'),
            "create:black_seat",
            new $Character('U'),
            "minecraft:chest[facing=south]",
            new $Character('M'),
            "minecraft:chest[facing=north]",
            new $Character('I'),
            "farmersdelight:rope",
            new $Character('Z'),
            "create:white_sail[facing=south]",
            new $Character('H'),
            "kubejs:simple_air_cushion",
            new $Character('k'),
            "kubejs:small_propeller[facing=west]",
            new $Character('K'),
            "kubejs:small_side_engine[facing=east]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:warship',//战斗大型飞艇
        $PatchouliAPI.makeMultiblock(
            [
                ['_________', '_________', '____H____', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '___OOO___', '____H____', '____H____', '____H____',],
                ['_________', '____H____', '____H____', '___OOO___', '_RO___OR_', '_RO___OR_', '_RO___OR_', '_RO___OR_', '___OOO___', '_________', '_________', '_________',],
                ['____H____', '____H____', '____H____', 'ITTRRRTTI', 'BRO___ORB', 'IR_____RI', 'IR_____RI', 'BRO___ORB', 'ITIRRRITI', '__D_D_D__', '__w_w_w__', '_________',],
                ['_________', '_________', '____H____', '___OOO___', '_ROOOOOR_', '_ROOOOOR_', '_ROOOOOR_', '_ROOOOOR_', '___OOO___', '_________', '_________', '_________',],
                ['_________', '_________', '_________', '_________', '__ITTTI__', '_________', '_________', '__ITTTI__', '_________', '_________', '_________', '_________',],
                ['_________', '_________', '_________', '_________', '__ii_ii__', '_________', '_________', '__ii_ii__', '_________', '_________', '_________', '_________',],
                ['_________', '_________', '___MMM___', '_________', '___i_i___', '_________', '_________', '___i0i___', '____w____', '_________', '_________', '_________',],
                ['_________', '_________', '___TRT___', '___ILI___', '___RAR___', '___RtR___', '__cRtRC__', '__cRARC__', '_________', '_________', '_________', '_________',]
            ],
            new $Character('0'),
            "kubejs:large_airship_engine[facing=east]",
            new $Character('H'),
            "create:white_sail[facing=south]",
            new $Character('M'),
            "create:industrial_iron_window_pane",
            new $Character('R'),
            "create:industrial_iron_block",
            new $Character('T'),
            "create:metal_girder[axis=z]",//不知道怎么写金属梁的x为ture
            new $Character('I'),
            "create:metal_girder[axis=x]",//不知道怎么写金属梁的z为ture
            new $Character('A'),
            "create:andesite_casing",
            new $Character('L'),
            "bits_n_bobs:black_chair[facing=west]",//不知道怎么写方向、方向为[facing=east]
            new $Character('t'),
            "create:black_seat",
            new $Character('i'),
            "farmersdelight:rope",
            new $Character('O'),
            "kubejs:air_cushion",
            new $Character('B'),
            "tfc:metal/block/copper",
            new $Character('C'),
            "minecraft:chest[facing=south]",
            new $Character('c'),
            "minecraft:chest[facing=north]",
            new $Character('D'),
            "kubejs:large_airship_engine[facing=east]",
            new $Character('w'),
            "kubejs:large_propeller[facing=west]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:gyrodyne',//人力飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_____', '_____', '__B__', '_____', '_____',],
                ['_____', '_____', '_____', '__L__', '_____', '_____',],
                ['__I__', '__I__', '__0__', '_itl_', 'mmtmm', '_i_l_',]
            ],
            new $Character('0'),
            "minecraft:beehive[facing=east]",
            new $Character('I'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:fences')),
            new $Character('t'),
            "create:black_seat",
            new $Character('l'),
            "kubejs:airship_slats[facing=south]",
            new $Character('i'),
            "kubejs:airship_slats[facing=north]",
            new $Character('L'),
            "create:shaft[axis=y]",
            new $Character('B'),
            "minecraft:oak_pressure_plate",
            new $Character('m'),
            "create:white_sail[facing=up]"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:quadrocopter',//四轴飞行器
        $PatchouliAPI.makeMultiblock(
            [
                ['B_B', '___', 'B_B',],
                ['IHI', 'itl', 'I0I',]
            ],
            new $Character('0'),
            "minecraft:observer[facing=east]",
            new $Character('t'),
            "create:black_seat",
            new $Character('i'),
            "kubejs:airship_slats[facing=south]",//需要全部木头的靠墙告示牌【
            new $Character('l'),
            "kubejs:airship_slats[facing=north]",//需要全部木头的靠墙告示牌【
            new $Character('I'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:fences')),
            new $Character('B'),
            "minecraft:oak_pressure_plate",
            new $Character('H'),
            "create:andesite_casing"
        )
    );
    $PatchouliAPI.registerMultiblock(
        'tfc:bamboo_hopper',//浮筒飞机
        $PatchouliAPI.makeMultiblock(
            [
                ['______MMM______', '______M_M______', '___v_______v___', '___v_______v___', '___v_______v___', '_______________', '_______________', '___I_______I___', '___I_______I___', '_______________',],
                ['______RRR______', '______A0A______', 'TTTpTT_L_TTpTTT', '___T__L_L__T___', '___O__APA__O___', '___I_______I___', '___I_______I___', '__ToT_____ToT__', '___T_______T___', '___K_______K___',],
                ['_______________', '___Q__AAA__Q___', '___Q__AAA__Q___', '___Q__AAA__Q___', '___I_______I___', '_______________', '_______________', '_______________', '_______________', '_______________',]
            ],
            new $Character('0'),
            "minecraft:lectern[facing=east]",
            new $Character('R'),
            "create:industrial_iron_block",
            new $Character('M'),
            "create:industrial_iron_window_pane",
            new $Character('A'),
            "create:andesite_casing",
            new $Character('L'),
            "bits_n_bobs:black_chair[facing=west]",//不知道怎么写方向、方向为[facing=east]
            new $Character('K'),
            "create:white_sail[facing=south]",
            new $Character('p'),
            "minecraft:piston[facing=west]",
            new $Character('P'),
            "minecraft:piston[facing=east]",
            new $Character('Q'),
            "immersiveengineering:cushion",
            new $Character('T'),
            "create:brass_scaffolding",
            new $Character('v'),
            "create:brass_table_cloth",
            new $Character('o'),
            "tfc:metal/block/brass_stairs[facing=west,half=top]",//[half=top]
            new $Character('O'),
            "tfc:metal/block/brass_stairs[facing=east,half=top]",//[half=top]
            new $Character('I'),
            "create:brass_bars",
        )
    );
});
