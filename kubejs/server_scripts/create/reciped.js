
ServerEvents.recipes(event => {
    const create = event.recipes.create
    const id_prefix = 'kubejs:create/reciped/';


    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [{ "item": "kubejs:unvacuumed_tube" }],
        "results": [{ "item": "create:electron_tube", "count": 1 }],
        "processingTime": 40
    })//真空抽电子管
    event.custom({
        "type": "vintageimprovements:vacuumizing",
        "ingredients": [{ "item": "kubejs:unvacuumed_precision_tube" }],
        "results": [{ "item": "kubejs:vacuumed_precision_tube", "count": 1 }],
        "processingTime": 40
    })//真空抽精密电子管


    


    event.shaped('create:water_wheel',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'tfc_ie_addon:treated_wood_lumber',
            B: 'create:shaft'
        }
    ).id(`${id_prefix}water_wheel`)//小水车
    event.shaped('create:large_water_wheel',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'immersiveengineering:treated_wood_horizontal',
            B: 'create:water_wheel'
        }
    ).id(`${id_prefix}large_water_wheel`)//大水车

    const gem = ['amethyst', 'diamond', 'emerald', 'lapis_lazuli', 'opal', 'pyrite', 'ruby', 'sapphire', 'topaz']
    gem.forEach(gem =>
        event.custom(
            { "type": "create:sandpaper_polishing", "ingredients": [{ "item": `tfc:ore/${gem}` }], "results": [{ "item": `tfc:gem/${gem}` }] }
        ))
    event.custom(
        {
            "type": "vintageimprovements:pressurizing",
            "heatRequirement": "heated",
            "processingTime": 800,
            "ingredients": [
                { "fluid": "tfc:limewater", "amount": 100 }, { "item": "kubejs:bauxite_clinker" }],
            "results": [{ "item": "kubejs:alumina_powder" }]
        })
    // 定义所有需要生成配方的砖块ID列表
    const brickIds = [
        'tfc:brick/granite',
        'tfc:brick/diorite',
        'tfc:brick/gabbro',
        'tfc:brick/shale',
        'tfc:brick/claystone',
        'tfc:brick/limestone',
        'tfc:brick/conglomerate',
        'tfc:brick/dolomite',
        'tfc:brick/chert',
        'tfc:brick/chalk',
        'tfc:brick/rhyolite',
        'tfc:brick/basalt',
        'tfc:brick/andesite',
        'tfc:brick/dacite',
        'tfc:brick/quartzite',
        'tfc:brick/slate',
        'tfc:brick/phyllite',
        'tfc:brick/schist',
        'tfc:brick/gneiss',
        'tfc:brick/marble'
    ];

    brickIds.forEach(brickId => {
        const brickType = brickId.split('/')[1];
        const output = `4x tfc:rock/bricks/${brickType}`;
        // 输入：5个对应砖块 + 250mb沉浸式工程混凝土流体
        const inputs = [
            `5x ${brickId}`,
            Fluid.of('immersiveengineering:concrete', 50)
        ];
        create.mixing(output, inputs)
            .id(`kubejs:mixing/brick_to_bricks_${brickType}`);
    });
    create.mixing(Fluid.of('immersiveengineering:concrete', 250), [Fluid.of('tfc:limewater', 250), '#minecraft:sand', '#forge:gravel', 'minecraft:clay_ball'])

})