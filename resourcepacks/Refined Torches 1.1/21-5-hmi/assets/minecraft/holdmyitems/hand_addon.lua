RefinedTorches_InternalState = RefinedTorches_InternalState or {}

global.fall = 0.0;
local l = (bl and 1) or -1
local yr = P:getYaw(player) * math.pi / 180.0
local velTotal = math.sqrt(P:getXSpeed(player)^2 + P:getZSpeed(player)^2)
local velFrente = P:getXSpeed(player) * -M:sin(yr) + P:getZSpeed(player) * M:cos(yr)
local andandoRe = velFrente < -0.05
local apenasCorrer = ${apenasCorrer} == true
local correndo = velTotal > 0.12
local baixoDaAgua = P:isSubmergedInWater(player)
local tochas = {"minecraft:torch", "minecraft:soul_torch", "minecraft:redstone_torch"}

local smootherAndando = RefinedTorches_InternalState.smootherAndando or 0.0
local smootherAgua    = RefinedTorches_InternalState.smootherAgua    or 1.0
local prevAgua        = RefinedTorches_InternalState.aguaState       or false

local emMovimento = not andandoRe and ((apenasCorrer and correndo) or (not apenasCorrer and velTotal > 0.05))
local walking = (emMovimento and fall > -1.1 and fall < 3)
if walking then
    smootherAndando = smootherAndando + 0.02 * deltaTime * 30
else
    smootherAndando = smootherAndando - 0.03 * deltaTime * 30
end
smootherAndando = M:clamp(smootherAndando, 0, 1)

if baixoDaAgua then
    smootherAgua = smootherAgua - 0.05 * deltaTime * 30
else
    smootherAgua = smootherAgua + (prevAgua and 0.07 or 0.05) * deltaTime * 30
end
smootherAgua = M:clamp(smootherAgua, 0, 1)

RefinedTorches_InternalState.smootherAndando = smootherAndando
RefinedTorches_InternalState.smootherAgua    = smootherAgua
RefinedTorches_InternalState.aguaState       = baixoDaAgua

local smooth = Easings:easeInOutQuad(smootherAndando) * smootherAgua

for _, id in pairs(tochas) do
    if I:isOf(item, Items:get(id)) then
            --patovskiz was here
        if mainHand then
            M:moveX(matrices, smooth * -0.1)
            M:moveZ(matrices, smooth * -0.05)
            M:rotateZ(matrices, smooth * 15)
        else
            M:moveX(matrices, smooth * 0.1)
            M:moveZ(matrices, smooth * -0.05)
            M:rotateZ(matrices, smooth * -15)
        end
        break
    end
end