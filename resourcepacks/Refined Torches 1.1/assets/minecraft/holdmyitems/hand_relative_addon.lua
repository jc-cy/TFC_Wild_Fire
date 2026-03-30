RefinedTorches_InternalState = RefinedTorches_InternalState or {}

local l = (context.bl and 1) or -1
local item = context.item
local matrices = context.matrices
local mainHand = context.mainHand
local player = context.player
local lampiao = {"minecraft:lantern", "minecraft:soul_lantern", "minecraft:copper_lantern", "minecraft:exposed_copper_lantern", "minecraft:weathered_copper_lantern", "minecraft:oxidized_copper_lantern", "minecraft:waxed_copper_lantern", "minecraft:waxed_exposed_copper_lantern", "minecraft:waxed_weathered_copper_lantern", "minecraft:waxed_oxidized_copper_lantern"}

for _, id in pairs(lampiao) do
         --patovskiz was here
    if I:isOf(item, Items:get(id)) then
     M:rotateZ(matrices, 90 * l, 0, 0, 0)
     M:moveX(matrices, -0.55 * l)
     M:moveY(matrices, -0.3)
     M:moveZ(matrices, 0.1)
        break
    end
end
