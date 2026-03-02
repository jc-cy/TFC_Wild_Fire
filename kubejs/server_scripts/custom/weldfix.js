// ======================== 事件外部：全局固定配置（只初始化一次） ========================
// 1. 定义「金属名→工具ID列表」映射表（全局初始化）
const metalToToolsMap = {
    "copper": [],
    "bismuth_bronze": [],
    "black_bronze": [],
    "bronze": [],
    "black_steel": [],
    "blue_steel": [],
    "red_steel": [],
    "steel": [],
    "wrought_iron": []
};

// 2. 武器配置（全局固定）
const weaponry = [
    { name: "quarterstaff", number: 200, type: 7.5 },
    { name: "dagger", number: 100, type: 15 },
    { name: "parrying_dagger", number: 150, type: 10 },
    { name: "longsword", number: 250, type: 5 },
    { name: "greatsword", number: 350, type: 4 },
    { name: "saber", number: 250, type: 5 },
    { name: "rapier", number: 250, type: 5 },
    { name: "katana", number: 250, type: 5 },
    { name: "battleaxe", number: 400, type: 4 },
    { name: "battle_hammer", number: 200, type: 7.5 },
    { name: "warhammer", number: 400, type: 4 },
    { name: "javelin", number: 400, type: 4 },
    { name: "spear", number: 100, type: 15 },
    { name: "pike", number: 100, type: 15 },
    { name: "lance", number: 400, type: 4 },
    { name: "glaive", number: 350, type: 4 },
    { name: "halberd", number: 400, type: 4 },
    { name: "throwing_knife", number: 100, type: 15 },
    { name: "tomahawk", number: 200, type: 7.5 },
    { name: "scythe", number: 400, type: 7.5 },
    { name: "flanged_mace", number: 300, type: 5 },
    { name: "boomerang", number: 100, type: 15 }
];

// 3. TFC工具配置（全局固定）
const tfctool = [
    { mod: 'tfc:metal/', tool: 'tuyere/', type: 4 },
    { mod: 'tfc:metal/', tool: 'propick/', type: 15 },
    { mod: 'tfc:metal/', tool: 'axe/', type: 15 },
    { mod: 'tfc:metal/', tool: 'shovel/', type: 15 },
    { mod: 'tfc:metal/', tool: 'hoe/', type: 15 },
    { mod: 'tfc:metal/', tool: 'chisel/', type: 15 },
    { mod: 'tfc:metal/', tool: 'hammer/', type: 15 },
    { mod: 'tfc:metal/', tool: 'saw/', type: 15 },
    { mod: 'tfc:metal/', tool: 'knife/', type: 15 },
    { mod: 'tfc:metal/', tool: 'scythe/', type: 15 },
    { mod: 'tfc:metal/', tool: 'sword/', type: 7.5 },
    { mod: 'tfc:metal/', tool: 'mace/', type: 7.5 },
    { mod: 'tfc:metal/', tool: 'fishing_rod/', type: 15 },
    { mod: 'tfc:metal/', tool: 'shears/', type: 7.5 },
    { mod: 'tfc:metal/', tool: 'shield/', type: 4 },
    { mod: 'tfc:metal/', tool: 'chestplate/', type: 2 },
    { mod: 'tfc:metal/', tool: 'boots/', type: 4 },
    { mod: 'tfc:metal/', tool: 'greaves/', type: 2 },
    { mod: 'tfc:metal/', tool: 'helmet/', type: 2 },
    { mod: 'artisanal:metal/', tool: 'can_opener/', type: 15 },
    { mod: 'tfc_hammer_time:metal/', tool: 'excavator/', type: 7.5 },
    { mod: 'tfc_hammer_time:metal/', tool: 'sledgehammer/', type: 4 },
    { mod: 'precisionprospecting:metal/', tool: 'mineral_prospector/', type: 7.5 },
    { mod: 'precisionprospecting:metal/', tool: 'prospector_drill/', type: 4 },
    { mod: 'precisionprospecting:metal/', tool: 'prospector_hammer/', type: 7.5 }
];

// 4. 预填充映射表（全局只执行一次）
const metalNames = Object.keys(metalToToolsMap); // 获取所有金属名
metalNames.forEach(metal => {
    // 4.1 填充武器（kubejs:金属_武器名）
    weaponry.forEach(weapon => {
        const weaponId = `kubejs:${metal}_${weapon.name}`;
        metalToToolsMap[metal].push({ id: weaponId, type: weapon.type });
    });

    // 4.2 填充TFC工具（${mod}${tool}${metal}）
    tfctool.forEach(tool => {
        const toolId = `${tool.mod}${tool.tool}${metal}`;
        metalToToolsMap[metal].push({ id: toolId, type: tool.type });
    });
});

// ======================== 事件内部：只处理焊接逻辑（每次触发执行） ========================
NativeEvents.onEvent(Java.loadClass("first.wildfires.api.customEvent.AnvilWeldEvent"),/**@param {Internal.AnvilWeldEvent} event*/ event => {
    let { left, right } = event;

    // 基础防护：空物品/非物品直接返回
    if (left.isEmpty() || right.isEmpty() || !left.getItem() || !right.getItem()) return;

    // 1. 获取左侧/右侧物品ID
    const leftItemId = left.getItem().id;   // 左侧：kubejs:copper_fragments（金属碎片）
    const rightItemId = right.getItem().id; // 右侧：kubejs:copper_dagger 或 tfc:metal/axe/copper
    //console.log(`左侧物品ID：${leftItemId}，右侧物品ID：${rightItemId}`);

    // 2. 从左侧金属碎片ID中提取金属名
    let matchedMetal = null;
    metalNames.forEach(metal => {
        if (leftItemId === `kubejs:${metal}_fragments`) { // 匹配金属碎片ID
            matchedMetal = metal;
        }
    });
    if (!matchedMetal) return; // 左侧不是目标金属碎片，直接返回

    // 3. 匹配右侧工具是否属于该金属，并获取对应的type值
    let matchedToolInfo = null;
    metalToToolsMap[matchedMetal].forEach(toolInfo => {
        if (toolInfo.id === rightItemId) {
            matchedToolInfo = toolInfo;
        }
    });
    if (!matchedToolInfo) return; // 右侧不是该金属的工具，直接返回

    // 4. 修复工具耐久 + 调整抛光值
    const rightCopy = right.copy();
    const maxDamage = rightCopy.getMaxDamage();
    if (maxDamage <= 0) return; // 无耐久的工具无需修复

    // 4.1 计算耐久修复
    const currentDamage = rightCopy.getDamageValue();
    const repairPercent = matchedToolInfo.type * 0.01;
    const damageValue = Math.max(currentDamage - Math.floor(maxDamage * repairPercent), 0);
    rightCopy.setDamageValue(damageValue);

    // 4.2 调整抛光值
    const polishValue = rightCopy.getOrCreateTag().getInt('Polish') || 0;
    const newPolish = Math.max(polishValue - 50, 0); // 降低50，最低0
    rightCopy.getOrCreateTag().putInt('Polish', newPolish);

    // 5. 触发焊接
    event.setLeft("air");
    event.setRight(rightCopy);
    event.setResult("allow");

    /* 调试日志（可选）
    console.log(`焊接修复成功：
      金属：${matchedMetal}
      工具：${rightItemId}
      修复比例：${matchedToolInfo.type}%
      原耐久：${currentDamage}/${maxDamage} → 修复后：${damageValue}/${maxDamage}
      原抛光值：${polishValue} → 调整后：${newPolish}`);
    */
});