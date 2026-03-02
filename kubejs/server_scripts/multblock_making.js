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
    { name: "biplane", block: "kubejs:biplane_engine" },
    { name: "airship", block: "kubejs:small_engine" },
    { name: "cargo_airship", block: "kubejs:rugged_small_engine" },
    { name: "warship", block: "kubejs:large_airship_engine" },
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