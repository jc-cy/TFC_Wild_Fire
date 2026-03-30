RefinedTorches_InternalState = RefinedTorches_InternalState or {}

local l = (bl and 1) or -1
local lampiao = {"minecraft:lantern", "minecraft:soul_lantern"}

for _, id in pairs(lampiao) do
         --patovskiz was here
    if I:isOf(item, Items:get(id)) then
     M:rotateZ(matrices, 90 * l, 0, 0, 0)
     M:moveX(matrices, -0.55 * l)
     M:moveY(matrices, -0.3)
     M:moveZ(matrices, 0.1)
        return
    end
end
