//多方块实体搭建
MultiBlockCreateVehicle(
    //多方块名称
    'tfc:submarine',
    //生成的实体名称
    'alexscaves:submarine',
    //搭建的核心方块
    'kubejs:submarine_core',
    //搭建需要的工具
    "#tfc:hammers"
);
const MultiBlock = [
    { name: "biplane", block: "minecraft:furnace" },
    { name: "airship", block: "minecraft:chiseled_bookshelf" },
    { name: "cargo_airship", block: "supplementaries:clock_block" },
    { name: "warship", block: "minecraft:blast_furnace" },
    { name: "gyrodyne", block: "minecraft:beehive" },
    { name: "quadrocopter", block: "minecraft:observer" },
    { name: "bamboo_hopper", block: "minecraft:lectern" }
]

MultiBlock.forEach(multi => {
    MultiBlockCreateVehicle(
        //多方块名称
        `tfc:${multi.name}`,
        //生成的实体名称
        `immersive_aircraft:${multi.name}`,
        //搭建的核心方块
        multi.block,
        //搭建需要的工具
        "#tfc:hammers"
    );
});