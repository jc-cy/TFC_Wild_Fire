RefinedTorches_InternalState = RefinedTorches_InternalState or {}

local l = (bl and 1) or -1
local isMainHand = mainHand
local tochas = {"minecraft:torch", "minecraft:soul_torch", "minecraft:redstone_torch"}
local lanterns = {"minecraft:lantern", "minecraft:soul_lantern"}
local fogueiras = {"minecraft:campfire", "minecraft:soul_campfire"}
local reds = {"minecraft:repeater", "minecraft:comparator"}
local age = P:getAge(player)
local baixoDaAgua = P:isSubmergedInWater(player)
local chaveAgua = isMainHand and "agua_MAIN" or "agua_OFF"
local chaveSomTocha = isMainHand and "somTocha_MAIN" or "somTocha_OFF"
local chaveSomFogo = isMainHand and "somFogo_MAIN" or "somFogo_OFF"
local chaveBolhas = isMainHand and "bolhas_MAIN" or "bolhas_OFF"
local tickSom = math.floor(age / 8)
local BUBBLE_POP  = 5
local itensReagemAgua = {"minecraft:torch", "minecraft:soul_torch", "minecraft:campfire", "minecraft:soul_campfire"}
local underWater = baixoDaAgua and 0.0 or 1.0
local ease = 1 - M:cos(underWater * 3.14159 / 2)
local pulso = M:sin(age * 0.15) * 22 + M:sin(age * 0.37) * 10
local Mz = M:clamp(ease * 225, 0, 200 + pulso)
local frameRedstone = math.floor(age * 0.45) % 5
local texRedstone = Texture:of("minecraft", "textures/particle/vermei" .. frameRedstone .. ".png")
local frameSmoke = math.floor(age * 0.3) % 5
local texSmoke = Texture:of("minecraft", "textures/particle/fumaca" .. frameSmoke .. ".png")
local alturaSmoke = {0.12, 0.18, 0.25}
local alturaFogo = {0.12, 0.18, 0.25}
local texFogo = {"textures/particle/par1.png","textures/particle/par2.png","textures/particle/par3.png"}
local texSoul = {"textures/particle/par1_azul.png","textures/particle/par2_azul.png","textures/particle/par3_azul.png"}
local soulAnimLen  = 28
local soulCycleLen = 140
local soulPos1     = age % soulCycleLen
local soulPos2     = (age + 47) % soulCycleLen
local soulAtiva1   = soulPos1 < soulAnimLen
local soulAtiva2   = soulPos2 < soulAnimLen
local soulPhase1   = soulPos1 / soulAnimLen
local soulPhase2   = soulPos2 / soulAnimLen
local soulSeed1    = math.floor(age / soulCycleLen) * 3 + 0
local soulSeed2    = math.floor((age + 47) / soulCycleLen) * 3 + 1

local function tochasBloco(lista)
    for _, id in ipairs(lista) do
        renderAsBlock:put(id, false)
    end
end
tochasBloco(tochas)
tochasBloco(fogueiras)

local function itemEstaEm(lista)
    for _, id in pairs(lista) do
        if I:isOf(item, Items:get(id)) then return true end
    end
    return false
end

if itemEstaEm(tochas) then
    M:moveY(matrices, 0.06)
end

if itemEstaEm(lanterns) then
    M:moveY(matrices, 0.1)
    M:moveX(matrices, -0.05 * l)
end

if itemEstaEm(fogueiras) then
    M:rotateX(matrices, -80)
    M:rotateZ(matrices, 40 * l)
    M:rotateY(matrices, 5 * l)
    M:moveZ(matrices, 0.22)
    M:moveY(matrices, -0.05)
end

if itemEstaEm(reds) then
    M:rotateX(matrices, -60)
    M:rotateZ(matrices, 40 * l)
    M:rotateY(matrices, 20 * l)
    M:moveZ(matrices, 0.12)
    M:moveY(matrices, -0.2)
    M:moveX(matrices, 0.05 * l)
end

local bubbleStartAge = RefinedTorches_InternalState[chaveBolhas]
if type(bubbleStartAge) ~= "number" then bubbleStartAge = -999 end

local bx1 = RefinedTorches_InternalState[chaveBolhas.."_x1"] or -0.14*l
local bx2 = RefinedTorches_InternalState[chaveBolhas.."_x2"] or -0.04*l
local bx3 = RefinedTorches_InternalState[chaveBolhas.."_x3"] or  0.06*l

local function emitirBolha(x, startY, riseTicks, riseY, ehFogueira)
    local pos = age - bubbleStartAge
    if pos < 0 or pos >= riseTicks + BUBBLE_POP then return end
    if pos < riseTicks then
        local t = pos / riseTicks
        local py = ehFogueira and startY         or startY + riseY * t
        local pz = ehFogueira and startY + riseY * t or 0.1
        particleManager:addParticle(particles,false,x,py,pz,0,0,0,0,0,0,0,0,0,0.15,Texture:of("minecraft","textures/particle/bubble.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,180)
    else
        local frame = pos - riseTicks
        local tex = Texture:of("minecraft","textures/particle/bubble_pop_"..frame..".png")
        local py = ehFogueira and startY         or startY + riseY
        local pz = ehFogueira and startY + riseY or 0.1
        particleManager:addParticle(particles,false,x,py,pz,0,0,0,0,0,0,0,0,0,0.15,tex,"ITEM",hand,"SPAWN","ADDITIVE",0,180)
    end
end

if itemEstaEm(itensReagemAgua) then
    local foiMolhado = RefinedTorches_InternalState[chaveAgua]
    local ehFogueira = I:isOf(item, Items:get("minecraft:campfire")) or I:isOf(item, Items:get("minecraft:soul_campfire"))
    if baixoDaAgua and not foiMolhado then
        S:playSound("block.fire.extinguish", 0.5)
        S:playSound("block.bubble_column.upwards_ambient", 1.0)
        bubbleStartAge = age
        bx1 = math.random(-180, 180) * 0.0001 * (l >= 0 and 1 or -1) + (-0.14*l)
        bx2 = math.random(-180, 180) * 0.0001 * (l >= 0 and 1 or -1) + (-0.04*l)
        bx3 = math.random(-180, 180) * 0.0001 * (l >= 0 and 1 or -1) + ( 0.06*l)
        RefinedTorches_InternalState[chaveBolhas]        = bubbleStartAge
        RefinedTorches_InternalState[chaveBolhas.."_x1"] = bx1
        RefinedTorches_InternalState[chaveBolhas.."_x2"] = bx2
        RefinedTorches_InternalState[chaveBolhas.."_x3"] = bx3
    end
    if not baixoDaAgua and foiMolhado then
        S:playSound("item.firecharge.use", isMainHand and 0.4 or 0.7)
    end
    RefinedTorches_InternalState[chaveAgua] = baixoDaAgua
end

if itemEstaEm(itensReagemAgua) then
    local ehFogueira = I:isOf(item, Items:get("minecraft:campfire")) or I:isOf(item, Items:get("minecraft:soul_campfire"))
    if ehFogueira then
        emitirBolha(-0.5*l, 0.2, 12, 0.25, true)
        emitirBolha(-0.25*l, 0.13,  4, 0.10, true)
        emitirBolha( 0.08*l, 0.05,  8, 0.18, true)
    else
        emitirBolha(bx1, 0.3, 12, 0.35, false)
        emitirBolha(bx2, 0.3,  4, 0.12, false)
        emitirBolha(bx3, 0.2,  8, 0.24, false)
    end
end

local function emitirFasca(cfg, chance)
    if math.random() > chance then return end
    local idx = math.random(#cfg.texturas)
    local tex = Texture:of("minecraft", cfg.texturas[idx])
    local ox = cfg.ox ~= nil and cfg.ox or (math.random(-120,120)*0.0001)
    local oy = cfg.oy[idx]
    local oz = cfg.oz
    local vx = math.random(cfg.vxMin, cfg.vxMax) * cfg.vxMult
    local vy = cfg.vyFn and cfg.vyFn() or (math.random(cfg.vyMin, cfg.vyMax) * cfg.vyMult)
    local vz = math.random(cfg.vzMin, cfg.vzMax) * cfg.vzMult
    particleManager:addParticle(particles,false,ox,oy,oz,vx,vy,vz,0,0,0,0,0,cfg.gravidade or 0,cfg.tamanho,tex,"ITEM",hand,cfg.modo,cfg.blend,cfg.vida,cfg.alpha)
end

local function emitirBrasa(texturasFogo, chance)
    if math.random() > chance then return end
    local idx = math.random(3)
    local px = math.random(-90,90)*0.0001
    local py = alturaFogo[idx]
    local pz = math.random(10,25)*0.01
    local vx = math.random(-50,50)*0.0015
    local vy = math.random(-10,15)*0.001
    local vz = math.random(3,25)*0.001
    particleManager:addParticle(particles,false,px,py,pz,vx,vy,vz,0,0,0,0,0,0,0.02,Texture:of("minecraft",texturasFogo[idx]),"ITEM",hand,"OPACITY","ADDITIVE",3,254)
end

local function emitirRedstone(chance)
    if math.random() > chance then return end
    particleManager:addParticle(particles,false,0,0.13,0.02,math.random(-120,120)*0.0001,M:clamp(math.random(-50,100)*0.001,-0.04,0.04),math.random(-30,30)*0.001,0,0,0,0,0,0,0.3,texRedstone,"ITEM",hand,"SCALE","CUTOUT_L",3,254)
end

local function emitirFumaca(chance)
    if math.random() > chance then return end
    local idx = math.random(3)
    local px = math.random(-30, 30) * 0.005
    local vx = math.random(-4, 4) * 0.0003
    particleManager:addParticle(particles,false,px,alturaSmoke[idx],0.2,vx,0,math.random(40,55)*0.001,0,0,0,0,0,-0.0005,0.7,texSmoke,"ITEM",hand,"SCALE","NORMAL",1,255)
end

local function emitirSoulAnim(ativa, phase, seed, ehCampfire, pxFixo, pyBase, pyRise, pzBase, pzRise)
    if not ativa then return end
    local frameAtual = math.min(math.floor(phase * 11), 10)
    local texAtual = Texture:of("minecraft", "textures/particle/soul_" .. frameAtual .. ".png")
    local px = pxFixo ~= nil and pxFixo or (((seed * 1.618) % 1.0 - 0.5) * 0.3)
    local py = (pyBase or 0.25) + phase * (pyRise or 0.45)
    local pz = pzBase ~= nil and (pzBase + phase * (pzRise or 0)) or (ehCampfire and -0.25 or -0.02)
    local alpha = phase < 0.7 and 190 or math.floor(190 * (1 - (phase - 0.7) / 0.3))
    particleManager:addParticle(particles,false,px,py,pz,0,0,0,0,0,0,0,0,0,0.2,texAtual,"ITEM",hand,"SPAWN","ADDITIVE",0,alpha)
end

local cfgTocha = {
    texturas = {"textures/particle/par1.png","textures/particle/par2.png","textures/particle/par3.png"},
    ox = 0, oy = {0.13,0.13,0.13}, oz = 0.02,
    vxMin=-120,vxMax=120,vxMult=0.0001,
    vyMin=100,vyMax=120,vyMult=0.0005,
    vzMin=0,vzMax=0,vzMult=0,
    tamanho=0.02, modo="OPACITY", blend="ADDITIVE", vida=3, alpha=254
}
local cfgAzul = {
    texturas = {"textures/particle/par1_azul.png","textures/particle/par2_azul.png","textures/particle/par3_azul.png"},
    ox = 0, oy = {0.13,0.13,0.13}, oz = 0.02,
    vxMin=-120,vxMax=120,vxMult=0.0001,
    vyMin=100,vyMax=120,vyMult=0.0005,
    vzMin=0,vzMax=0,vzMult=0,
    tamanho=0.02, modo="OPACITY", blend="ADDITIVE", vida=3, alpha=254
    --patovskiz was here
}

if I:isOf(item, Items:get("minecraft:torch")) then
    particleManager:addParticle(particles,false,0,0.25,0,0,0,0,0,0,0,0,0,0,2.5,Texture:of("minecraft","textures/particle/laranja.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,Mz)
end

if I:isOf(item, Items:get("minecraft:soul_torch")) then
    particleManager:addParticle(particles,false,0,0.25,0,0,0,0,0,0,0,0,0,0,2.5,Texture:of("minecraft","textures/particle/azul.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,Mz)
end

if I:isOf(item, Items:get("minecraft:redstone_torch")) then
    particleManager:addParticle(particles,false,0,0.25,0,0,0,0,0,0,0,0,0,0,2.5,Texture:of("minecraft","textures/particle/vermelho.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,M:clamp(150+(30*M:sin(age*0.2)),0,180))
end

if I:isOf(item,Items:get("minecraft:lantern")) then
    particleManager:addParticle(particles,false,0.5 * l,0.25,0.5,0,0,0,0,0,0,0,0,0,4,Texture:of("minecraft","textures/particle/laranja.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,M:clamp(150+(30*M:sin(age*0.2)),0,180))
end

if I:isOf(item,Items:get("minecraft:soul_lantern")) then
    particleManager:addParticle(particles,false,0.5 * l,0.25,0.5,0,0,0,0,0,0,0,0,0,4,Texture:of("minecraft","textures/particle/azul.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,M:clamp(150+(30*M:sin(age*0.2)),0,180))
end

if I:isOf(item,Items:get("minecraft:campfire")) then
    particleManager:addParticle(particles,false,0,0.12,0,0,0,0,0,0,0,0,0,0,2.5,Texture:of("minecraft","textures/particle/laranja.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,M:clamp(Easings:easeInSine(underWater)*225,0,225+(20*M:sin(P:getAge(player)*0.2))))
end

if I:isOf(item,Items:get("minecraft:soul_campfire")) then
    particleManager:addParticle(particles,false,0,0.12,0,0,0,0,0,0,0,0,0,0,2.5,Texture:of("minecraft","textures/particle/azul.png"),"ITEM",hand,"SPAWN","ADDITIVE",0,M:clamp(Easings:easeInSine(underWater)*225,0,225+(20*M:sin(P:getAge(player)*0.2))))
end

if I:isOf(item, Items:get("minecraft:torch")) and not baixoDaAgua then
    if (${particulastochas}) then emitirFasca(cfgTocha, 0.003) end
    if (${sonstocha}) and tickSom ~= RefinedTorches_InternalState[chaveSomTocha] then
        S:playSound("block.campfire.crackle", math.random()*0.2, 1.0)
        RefinedTorches_InternalState[chaveSomTocha] = tickSom
    end
end
if I:isOf(item, Items:get("minecraft:soul_torch")) and not baixoDaAgua then
    if (${particulastochas}) then
        emitirFasca(cfgAzul, 0.003)
    end
    if (${alminhas}) then
        emitirSoulAnim(soulAtiva1, soulPhase1, soulSeed1, false)
        emitirSoulAnim(soulAtiva2, soulPhase2, soulSeed2, false)
    end
    if (${sonstocha}) and tickSom ~= RefinedTorches_InternalState[chaveSomTocha] then
        S:playSound("block.campfire.crackle", math.random()*0.2, 1.0)
        RefinedTorches_InternalState[chaveSomTocha] = tickSom
    end
end
if I:isOf(item, Items:get("minecraft:redstone_torch")) and not baixoDaAgua then
    if (${particulasred}) then emitirRedstone(0.01) end
end
if I:isOf(item, Items:get("minecraft:comparator")) and not baixoDaAgua then
    if (${particulasred}) then emitirRedstone(0.005) end
end
if I:isOf(item, Items:get("minecraft:repeater")) and not baixoDaAgua then
    if (${particulasred}) then emitirRedstone(0.01) end
end
if I:isOf(item, Items:get("minecraft:campfire")) and not baixoDaAgua then
    if (${fumacas}) then emitirFumaca(0.02) end
    if (${particulasfogueiras}) then emitirBrasa(texFogo, 0.005) end
    if (${sonsfogo}) and tickSom ~= RefinedTorches_InternalState[chaveSomFogo] then
        S:playSound("block.campfire.crackle", math.random()*0.5, 1.0)
        RefinedTorches_InternalState[chaveSomFogo] = tickSom
    end
end
if I:isOf(item, Items:get("minecraft:soul_campfire")) and not baixoDaAgua then
    if (${fumacas}) then
        emitirFumaca(0.02)
    end
    if (${particulasfogueiras}) then
        emitirBrasa(texSoul, 0.005)
    end
    if (${alminhas}) then
        local opts = {
            {x= -0.5*l,  py=0.2,  pzStart=0.2,  pzEnd=0.2+0.25},
            {x= -0.25*l, py=0.13, pzStart=0.35, pzEnd=0.35+0.10},
            {x=  0.08*l, py=0.05, pzStart=0.1,  pzEnd=0.1+0.18},
        }
        local o = opts[(math.floor(soulSeed1 / 3) % 3) + 1]
        emitirSoulAnim(soulAtiva1, soulPhase1, soulSeed1, true, o.x, o.py, 0, o.pzStart, o.pzEnd - o.pzStart)
    end
    if (${sonsfogo}) and tickSom ~= RefinedTorches_InternalState[chaveSomFogo] then
        S:playSound("block.campfire.crackle", math.random()*0.5, 1.0)
        RefinedTorches_InternalState[chaveSomFogo] = tickSom
    end
end