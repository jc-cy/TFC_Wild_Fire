RefinedTorches_InternalState = RefinedTorches_InternalState or {}

global.fall = 0.0;
local player = data.player
local item = data.item
local deltaTime = data.deltaTime
local l = (data.bl and 1) or -1
local mainHand = data.mainHand
local acesa = P:getStandingBlock(player)=="minecraft:redstone_block"
local tochas = {"minecraft:torch", "minecraft:soul_torch", "minecraft:copper_torch"}
local fogueiras = {"minecraft:campfire","minecraft:soul_campfire"}
local yr = P:getYaw(player) * math.pi / 180.0
local velTotal = math.sqrt(P:getXSpeed(player)^2 + P:getZSpeed(player)^2)
local apenasCorrer = ${apenasCorrer} == true
local correndo = velTotal > 0.12
local emMovimento = (apenasCorrer and correndo) or (not apenasCorrer and velTotal > 0.05)
local walking = emMovimento and (fall > -1.1 and fall < 3)
local baixoDaAgua = P:isSubmergedInWater(player)
local tocandoAgua = P:isTouchingWater(player) and not baixoDaAgua
local ihMane = KeyBindManager:isKeyPressed(${j} ~= 0 and ${j} or 67)
local Comparador = I:isOf(P:getMainItem(player), Items:get("minecraft:comparator")) or I:isOf(P:getOffhandItem(player), Items:get("minecraft:comparator"))
local Repetidor  = I:isOf(P:getMainItem(player), Items:get("minecraft:repeater")) or I:isOf(P:getOffhandItem(player), Items:get("minecraft:repeater"))
local led    = RefinedTorches_InternalState["portaAberta"]   or false
local degrau = RefinedTorches_InternalState["degrau"] or 0
local jafoi    = RefinedTorches_InternalState["foiPressionado"]   or false

local chaveSmoother  = mainHand and "smootherWalk_MAIN"   or "smootherWalk_OFF"
local chaveAgua      = mainHand and "smootherAgua_MAIN"   or "smootherAgua_OFF"
local chaveAguaState = mainHand and "aguaState_MAIN"      or "aguaState_OFF"
local chaveNaAgua    = mainHand and "smootherNaAgua_MAIN" or "smootherNaAgua_OFF"

local SmootherWalk   = RefinedTorches_InternalState[chaveSmoother] or 0.0
local SmootherAgua   = RefinedTorches_InternalState[chaveAgua]     or 1.0
local prevAgua       = RefinedTorches_InternalState[chaveAguaState] or false
local SmootherNaAgua = RefinedTorches_InternalState[chaveNaAgua]   or 0.0

if ihMane and not jafoi then
    if Comparador then
        led = not led
    end
    if Repetidor then
        degrau = (degrau + 1) % 4
    end
end

RefinedTorches_InternalState["portaAberta"]       = led
RefinedTorches_InternalState["degrau"]            = degrau
RefinedTorches_InternalState["foiPressionado"]    = ihMane

local posicao = degrau * -0.0625

local function isIn(list)
    for _, id in ipairs(list) do
        if I:isOf(item, Items:get(id)) then return true end
    end
    return false
end

if walking then
    SmootherWalk = SmootherWalk + 0.02 * deltaTime * 30
else
    SmootherWalk = SmootherWalk - 0.03 * deltaTime * 30
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

local smoothAndar  = Easings:easeInOutQuad(SmootherWalk) * SmootherAgua
local smoothNaAgua = Easings:easeInOutQuad(SmootherNaAgua) * SmootherAgua
local smooth = M:clamp(smoothAndar + smoothNaAgua, 0, 1)

if isIn(tochas) then
        animator:moveZ(0, 1, -0.12)
        animator:rotateY(0, 1, -45 * l, 0.5, 0, 0.5)
        animator:moveX(0, 1, -0.015)
        animator:moveY(0, 1, smooth * -0.01)
        animator:moveX(0, 1, smooth * -0.015)
    if not mainHand then 
        animator:rotateY(0, 1, 180, 0.45, 0, 0.44)
        animator:moveZ(0, 1, -0.05, 0.45, 0, 0.44)
        animator:moveX(0, 1, -0.07)
    end
end

if isIn(tochas) and baixoDaAgua then
    animator:scale(0, 12, 0, 0, 0)
end
if isIn(fogueiras) and baixoDaAgua then
    animator:scale(0, 33, 0, 0, 0)
end
    --patovskiz was here
if I:isOf(item, Items:get("minecraft:redstone_torch")) and acesa then
    animator:scale(0, 10, 0, 0, 0)
end
if I:isOf(item, Items:get("minecraft:comparator")) and not acesa then
    animator:scale(0, 71, 0, 0, 0)
    animator:scale(138, 203, 0, 0, 0)
end
if I:isOf(item, Items:get("minecraft:comparator")) and led then
    animator:scale(72, 137, 0, 0, 0)
end
if I:isOf(item, Items:get("minecraft:repeater")) and not acesa then
    animator:scale(0, 137, 0, 0, 0)
end
if I:isOf(item, Items:get("minecraft:repeater")) then
    animator:moveZ(6, 71, posicao)
    animator:moveZ(144, 149, posicao)
end