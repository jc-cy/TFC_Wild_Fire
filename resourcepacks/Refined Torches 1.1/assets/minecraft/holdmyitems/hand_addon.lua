RefinedTorches_InternalState = RefinedTorches_InternalState or {}

global.fall = 0.0;
local l = (context.bl and 1) or -1
local item = context.item
local matrices = context.matrices
local mainHand = context.mainHand
local player = context.player
local deltaTime = context.deltaTime
local yr = P:getYaw(player) * math.pi / 180.0
local velTotal = math.sqrt(P:getXSpeed(player)^2 + P:getZSpeed(player)^2)
local velFrente = P:getXSpeed(player) * -M:sin(yr) + P:getZSpeed(player) * M:cos(yr)
local velLateral = P:getXSpeed(player) * M:cos(yr) + P:getZSpeed(player) * M:sin(yr)
local apenasLateral = math.abs(velLateral) > 0.05 and math.abs(velFrente) < 0.05
local andandoRe = velFrente < -0.05
local apenasCorrer = ${apenasCorrer} == true
local noChao = P:isOnGround(player)
local emMovimento = not andandoRe and ((apenasCorrer and (velTotal > 0.12) and (noChao or velTotal > 0.165)) or (not apenasCorrer and (velTotal > 0.05)))
local correndo = velTotal > 0.12
local walking = emMovimento and not tocandoAgua and (not apenasCorrer and (fall > -1.1 and fall < 3) or apenasCorrer and (correndo and (fall > -1.1 and fall < 3) or not correndo))
local baixoDaAgua = P:isSubmergedInWater(player)
local tocandoAgua = P:isTouchingWater(player) and not baixoDaAgua and P:isOnGround(player)
local tochas = {"minecraft:torch", "tfc:torch","minecraft:soul_torch", "minecraft:copper_torch", "minecraft:redstone_torch"}

local chaveSmoother  = mainHand and "smootherWalk_MAIN"   or "smootherWalk_OFF"
local chaveAgua      = mainHand and "smootherAgua_MAIN"   or "smootherAgua_OFF"
local chaveAguaState = mainHand and "aguaState_MAIN"      or "aguaState_OFF"
local chaveNaAgua    = mainHand and "smootherNaAgua_MAIN" or "smootherNaAgua_OFF"

local SmootherWalk   = RefinedTorches_InternalState[chaveSmoother] or 0.0
local SmootherAgua   = RefinedTorches_InternalState[chaveAgua]     or 1.0
local prevAgua       = RefinedTorches_InternalState[chaveAguaState] or false
local SmootherNaAgua = RefinedTorches_InternalState[chaveNaAgua]   or 0.0

if walking and not apenasLateral then
    SmootherWalk = SmootherWalk + 0.04 * deltaTime * 30
else
    SmootherWalk = SmootherWalk - 0.06 * deltaTime * 30
end
SmootherWalk = M:clamp(SmootherWalk, 0, 1)

if baixoDaAgua then
    SmootherAgua = SmootherAgua - 0.05 * deltaTime * 30
else
    SmootherAgua = SmootherAgua + (prevAgua and 0.07 or 0.05) * deltaTime * 30
end
SmootherAgua = M:clamp(SmootherAgua, 0, 1)

if tocandoAgua then
    SmootherNaAgua = SmootherNaAgua + 0.04 * deltaTime * 30
else
    SmootherNaAgua = SmootherNaAgua - 0.06 * deltaTime * 30
end
SmootherNaAgua = M:clamp(SmootherNaAgua, 0, 1)

RefinedTorches_InternalState[chaveSmoother]  = SmootherWalk
RefinedTorches_InternalState[chaveAgua]      = SmootherAgua
RefinedTorches_InternalState[chaveAguaState] = baixoDaAgua
RefinedTorches_InternalState[chaveNaAgua]    = SmootherNaAgua

local smoothAndar  = Easings:easeInOutSine(SmootherWalk) * SmootherAgua
local smoothNaAgua = Easings:easeInOutSine(SmootherNaAgua) * SmootherAgua
local smooth = M:clamp(smoothAndar + smoothNaAgua, 0, 1)

for _, id in pairs(tochas) do
    if I:isOf(item, Items:get(id)) then
            --patovskiz was here
        M:moveX(matrices, smooth * -0.1 * l)
        M:moveZ(matrices, smooth * -0.05)
        M:rotateZ(matrices, smooth * 15 * l)
        break
    end
end