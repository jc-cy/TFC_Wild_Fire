//startup_scripts
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
const $Character = Java.loadClass('java.lang.Character');
StartupEvents.postInit((event) => {

    $PatchouliAPI.registerMultiblock(
        'tfc:submarine',
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
            "create:orange_seat",
            new $Character('M'),
            "kubejs:underwater_turbine[facing=east]"
        )
    );
});
