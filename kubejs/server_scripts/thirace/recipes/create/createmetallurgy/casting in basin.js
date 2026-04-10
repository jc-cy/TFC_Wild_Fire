// TFC Ceramic & Metallurgy Casting
ServerEvents.recipes((event) => {
    // 基础配置
    const ID_PREFIX = "kubejs:thirace/create/createmetallurgy/casting_in_basin/";

    // 移除旧配方
    event.remove({ type: "createmetallurgy:casting_in_basin" });

    /**
     * 核心注册函数
     * @param {string} output - 输出物品 ID
     * @param {string} fluid - 流体 ID
     * @param {number} amount - 流体数量 (mB)
     * @param {number} time - 处理时间 (tick)
     * @param {Object|string|null} extraInput - 额外的固体材料 (Item ID, Tag, 或者 null)
     * @param {string} idSuffix - ID 后缀 (如果不填，默认根据 output 自动生成)
     */
    const addCasting = (output, fluid, amount, time, extraInput, idSuffix) => {
        // 构建配料数组
        let ingredients = [
            { amount: amount, fluid: fluid, nbt: {} }
        ];

        // 如果有固体材料（如模具、木板），加入配料表
        if (extraInput) {
            // 判断是 Tag (#开头) 还是 Item
            if (typeof extraInput === 'string' && extraInput.startsWith('#')) {
                ingredients.unshift({ tag: extraInput.substring(1) });
            } else {
                ingredients.unshift({ item: extraInput });
            }
        }

        // 自动生成或清洗 ID
        // 核心修复：将 ID 路径中的冒号替换为下划线，防止报错
        let safeSuffix = idSuffix || output;
        safeSuffix = safeSuffix.replace(/:/g, '_').replace(/\//g, '_');

        event.custom({
            type: "createmetallurgy:casting_in_basin",
            ingredients: ingredients,
            mold_consumed: true,
            processingTime: time,
            result: { item: output }
        }).id(`${ID_PREFIX}${safeSuffix}`);
    };

    // ==========================================
    // 1. 特殊/独立配方 (Special Recipes)
    // ==========================================

    // 玻璃 (无模具，纯流体)
    addCasting('minecraft:glass', 'kubejs:molten_glass', 250, 80, null, 'glass_foundry');

    // TFC 坩埚 (需要模具)
    addCasting('tfc:crucible', 'kubejs:molten_corundum', 1000, 640, 'kubejs:crucible_mold', 'molten_corundum_crucible');

    // 镀镍块
    addCasting('tfc:metal/block/nickel', 'tfc:metal/refined_nickel', 100, 60, '#minecraft:planks', 'block/nickel');


    // ==========================================
    // 2. TFC 金属块配方 (TFC Metal Blocks)
    // 逻辑: 100mb 流体 + 木板 = 金属块
    // ==========================================

    const tfcMetals = [
        "bismuth", "bismuth_bronze", "black_bronze", "bronze", "brass",
        "copper", "gold", "rose_gold", "silver", "tin", "zinc",
        "sterling_silver",  "cast_iron", "steel",
        "black_steel", "blue_steel", "red_steel"
    ];

    tfcMetals.forEach((metal) => {
        addCasting(
            `tfc:metal/block/${metal}`,     // Output
            `tfc:metal/${metal}`,           // Fluid
            100,                            // Amount
            60,                             // Time
            '#minecraft:planks',            // Input (Tag)
            `block/${metal}`                // ID Suffix
        );
    });



    // ==========================================
    // 3. 存储块配方 (Storage Blocks)
    // 逻辑: 1000mb 流体 = 存储块 (无固体输入)
    // ==========================================
    const storageBlocks = [
        { out: "create:zinc_block", fluid: "tfc:metal/zinc" },
        { out: "minecraft:iron_block", fluid: "tfc:metal/cast_iron" },
        { out: "minecraft:gold_block", fluid: "tfc:metal/gold" },
        { out: "minecraft:copper_block", fluid: "tfc:metal/copper" },
        { out: "create:brass_block", fluid: "tfc:metal/brass" },
        { out: "immersiveengineering:storage_nickel", fluid: "tfc:metal/refined_nickel" },
        { out: "immersiveengineering:storage_steel", fluid: "tfc:metal/steel" },
        { out: "immersiveengineering:storage_constantan", fluid: "tfc_ie_addon:metal/constantan" },
        { out: "immersiveengineering:storage_electrum", fluid: "tfc_ie_addon:metal/electrum" },
        { out: "immersiveengineering:storage_aluminum", fluid: "tfc_ie_addon:metal/aluminum" },
        { out: "immersiveengineering:storage_lead", fluid: "tfc_ie_addon:metal/lead" },
        { out: "immersiveengineering:storage_silver", fluid: "tfc:metal/silver" }
    ];

    storageBlocks.forEach((entry) => {
        // 这里 ID 后缀直接用 fluid 名称，函数内部会自动处理冒号，不会再报错了
        addCasting(entry.out, entry.fluid, 1000, 270, null, `${entry.fluid}/block`);
    });

});