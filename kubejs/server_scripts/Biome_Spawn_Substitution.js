TFCEvents.data(event => {
    // 海洋生物（不限环境）
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:giant_squid'); // 大王乌贼，1-2只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:cachalot_whale'); // 抹香鲸，1-2只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:blobfish'); // 水滴鱼，1-2只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:frilled_shark'); // 皱鳃鲨，1-3只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:flying_fish'); // 飞鱼，2-8只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:skelewag'); // 骷髅剑鱼，1-3只

    // 其他水生生物
    // 鲶鱼：150-500mm降雨，>5°C，1-3只（整合1-2只与1-3只范围）
    event.fauna(climate => {
        climate.minRain(150);
        climate.maxRain(500);
        climate.minTemp(5);
    }, fauna => { }, 'alexsmobs:catfish');

    // 水龟：100-300mm降雨，5-10°C，1-3只
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(300);
        climate.minTemp(5);
        climate.maxTemp(10);
    }, fauna => { }, 'alexsmobs:terrapin');

    // 鲈鱼：150-500mm降雨，>5°C，1-3只
    event.fauna(climate => {
        climate.minRain(150);
        climate.maxRain(500);
        climate.minTemp(5);
    }, fauna => { }, 'naturalist:bass');

    // 鸭嘴兽：150-500mm降雨，10-28°C，0-1只
    event.fauna(climate => {
        climate.minRain(150);
        climate.maxRain(500);
        climate.minTemp(10);
        climate.maxTemp(28);
    }, fauna => { }, 'alexsmobs:platypus');

    // 弹涂鱼：150-500mm降雨，>5°C，1只
    event.fauna(climate => {
        climate.minRain(150);
        climate.maxRain(500);
        climate.minTemp(5);
    }, fauna => { }, 'alexsmobs:mudskipper');

    // 鲎虫 >5°C，1-3只
    event.fauna(climate => {
        climate.minTemp(5);
    }, fauna => { }, 'alexsmobs:triops');

    // 螳螂虾：>13°C，1-3只
    event.fauna(climate => {
        climate.minTemp(13);
    }, fauna => { }, 'alexsmobs:mantis_shrimp');

    // 拟态章鱼：>5°C（整合8-15°C范围），1-2只
    event.fauna(climate => {
        climate.minTemp(5);
    }, fauna => { }, 'alexsmobs:mimic_octopus');

    // 锤头鲨（不限环境）：1-2只
    event.fauna(climate => { }, fauna => { }, 'alexsmobs:hammerhead_shark');

    // 栉水母：<-15°C，1-4只，寒冷气候
    event.fauna(climate => {
        climate.maxTemp(-15);
    }, fauna => { }, 'alexsmobs:comb_jelly');

    // 海豹：-15至2°C，1-4只
    event.fauna(climate => {
        climate.minTemp(-15);
        climate.maxTemp(2);
    }, fauna => { }, 'alexsmobs:seal');

    // 海鸥：>8°C，1-5只
    event.fauna(climate => {
        climate.minTemp(8);
    }, fauna => { }, 'alexsmobs:seagull');
});
// 合并相同生物配置
TFCEvents.data(event => {
    // 沙漠蛛蜂：0-50mm降雨，1只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(100);
        climate.minTemp(0);
        climate.maxForest(2);
    }, fauna => { }, 'alexsmobs:tarantula_hawk');

    // 大猩猩：140-500mm降雨，>16°C，2-6只，潮湿气候
    event.fauna(climate => {
        climate.minRain(140);
        climate.maxRain(520);
        climate.minTemp(16);
    }, fauna => { }, 'alexsmobs:gorilla');

    // 卷尾猴：140-500mm降雨，>16°C，2-6只，潮湿气候
    event.fauna(climate => {
        climate.minRain(140);
        climate.maxRain(520);
        climate.minTemp(16);
    }, fauna => { }, 'alexsmobs:capuchin_monkey');

    // 驼鹿：110-500mm降雨，<-9°C，1只，寒冷气候
    event.fauna(climate => {
        climate.minRain(110);
        climate.maxRain(500);
        climate.maxTemp(-6);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:moose');

    // 雪豹：150-420mm降雨，<-5°C，1-2只，寒冷气候
    event.fauna(climate => {
        climate.minRain(150);
        climate.maxRain(420);
        climate.maxTemp(-5);
    }, fauna => { }, 'alexsmobs:snow_leopard');

    // 袋獾：250-350mm降雨，8-15°C，1-3只（整合1-2只与1-3只范围）
    event.fauna(climate => {
        climate.minRain(250);
        climate.maxRain(400);
        climate.minTemp(8);
        climate.maxTemp(15);
    }, fauna => { }, 'alexsmobs:tasmanian_devil');

    // 鬃狼：80-350mm降雨，>18°C，1-2只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(50);
        climate.maxRain(250);
        climate.minTemp(2);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:maned_wolf');

    // 犀牛：130-330mm降雨，>18°C，1-3只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(10);
        climate.maxRain(430);
        climate.minTemp(15);
    }, fauna => { }, 'alexsmobs:rhinoceros');

    // 走鹃：0-150mm降雨，1-3只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(150);
    }, fauna => { }, 'alexsmobs:roadrunner');

    // 鸸鹋：130-330mm降雨，>18°C，1-4只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(10);
        climate.maxRain(530);
        climate.minTemp(18);
    }, fauna => { }, 'alexsmobs:emu');

    // 巨嘴鸟：100-500mm降雨，>16°C，1-2只（整合1只与1-2只范围），潮湿气候
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(500);
        climate.minTemp(16);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:toucan');

    // 响尾蛇：130-330mm降雨，>18°C，1只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(130);
        climate.minTemp(5);
        climate.maxForest(2);
    }, fauna => { }, 'alexsmobs:rattlesnake');

    // 科莫多巨蜥：140-500mm降雨，>16°C，1-2只，常规气候和潮湿气候
    event.fauna(climate => {
        climate.minRain(140);
        climate.maxRain(500);
        climate.minTemp(10);
    }, fauna => { }, 'alexsmobs:komodo_dragon');

    // 大鳄龟：140-500mm降雨，>16°C，1-2只，任意
    event.fauna(climate => {
        climate.minRain(140);
        climate.maxRain(500);
        climate.minTemp(16);
    }, fauna => { }, 'alexsmobs:alligator_snapping_turtle');

    // 森蚺：140-500mm降雨，>16°C，1-2只（整合1只与1-2只范围），潮湿气候
    event.fauna(climate => {
        climate.minRain(140);
        climate.maxRain(500);
        climate.minTemp(16);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:anaconda');

    // 秃鹫：0-100mm降雨，1-4只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(130);
        climate.minTemp(0);
    }, fauna => { }, 'naturalist:vulture');

    // 蜻蜓：200-500mm降雨，>16°C，1-2只，任意
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(400);
        climate.minTemp(10);
    }, fauna => { }, 'naturalist:dragonfly');

    // 野牛：90-380mm降雨，-15至15°C，1-4只，任意
    event.fauna(climate => {
        climate.minRain(90);
        climate.maxRain(380);
        climate.minTemp(-15);
        climate.maxTemp(20);
    }, fauna => { }, 'alexsmobs:bison');

    // 老虎：120-380mm降雨，8至30°C，1只，任意
    event.fauna(climate => {
        climate.minRain(100);
        climate.minTemp(8);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:tiger');
    
    // 獠牙兽：110-500mm降雨，<-1°C，1~2只，寒冷气候
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(500);
        climate.maxTemp(-1);
    }, fauna => { }, 'alexsmobs:tusklin');

    // 切叶蚁：250-350mm降雨，2-15°C，1-3只，常规气候和潮湿气候
    event.fauna(climate => {
        climate.minRain(250);
        climate.maxRain(350);
        climate.minTemp(2);
        climate.maxTemp(15);
        climate.minForest(2);
    }, fauna => { }, 'alexsmobs:leafcutter_ant');

    // 大象：130-330mm降雨，>17°C，1-4只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(60);
        climate.maxRain(550);
        climate.minTemp(17);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:elephant');

    // 猛犸象：130-330mm降雨，>17°C，1-2只，寒冷
    event.fauna(climate => {
        climate.minRain(50);
        climate.maxRain(450);
        climate.maxTemp(-3);
    }, fauna => { }, 'naturalist:elephant');

    // 袋鼠：10-330mm降雨，>18°C，2-3只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(10);
        climate.minTemp(15);
    }, fauna => { }, 'alexsmobs:kangaroo');

    // 食蚁兽：250-350mm降雨，2-15°C，1只，常规气候
    event.fauna(climate => {
        climate.minRain(260);
        climate.maxRain(450);
        climate.minTemp(2);
        climate.maxTemp(15);
        climate.minForest(2);
    }, fauna => { }, 'alexsmobs:anteater');

    // 臭鼬：200-300mm降雨，10-28°C，1只，常规气候
    event.fauna(climate => {
        climate.minRain(80);
        climate.maxRain(450);
        climate.minTemp(5);
        climate.maxTemp(28);
    }, fauna => { }, 'alexsmobs:skunk');

    // 长颈鹿：60-330mm降雨，>18°C，1-3只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(60);
        climate.maxRain(440);
        climate.minTemp(18);
    }, fauna => { }, 'naturalist:giraffe');

    // 河马（水中）：130-430mm降雨，>18°C，1-2只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(130);
        climate.maxRain(550);
        climate.minTemp(10);
        climate.maxForest(3);
    }, fauna => {
    fauna.distanceBelowSeaLevel(-1)
    }, 'naturalist:hippo');

    // 蜗牛：400-500mm降雨，>10°C，1-2只，常规气候
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(550);
        climate.minTemp(10);
        climate.minForest(1);
    }, fauna => { }, 'naturalist:snail');

    // 狮子：400-500mm降雨，>9°C，1-3只，常规气候
    event.fauna(climate => {
        climate.minRain(80);
        climate.maxRain(330);
        climate.minTemp(9);
    }, fauna => { }, 'naturalist:lion');

    // 蜥蜴：400-500mm降雨，>16°C，1-3只，任意
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(450);
        climate.minTemp(5);
        climate.minForest(2);
    }, fauna => { }, 'naturalist:lizard');

    // 白头海雕：>5°C，1-3只，任意
    event.fauna(climate => {
        climate.minTemp(5);
        climate.maxForest(2);
    }, fauna => { }, 'alexsmobs:bald_eagle');

    // 香蕉蛞蝓：300-500mm降雨，4-15°C，1只，潮湿气候
    event.fauna(climate => {
        climate.minRain(220);
        climate.maxRain(550);
        climate.minTemp(4);
        climate.maxTemp(15);
        climate.minForest(2);
    }, fauna => { }, 'alexsmobs:banana_slug');

    // 浣熊：300-500mm降雨，10-28°C，1-3只，常规气候
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(500);
        climate.minTemp(5);
        climate.maxTemp(20);
    }, fauna => { }, 'alexsmobs:raccoon');

    // 乌鸦：300-500mm降雨，10-28°C，1-4只，常规气候和干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(500);
        climate.minTemp(8);
    }, fauna => { }, 'alexsmobs:crow');

    // 冠蓝鸦：100-350mm降雨，10-28°C，1-2只，常规气候和潮湿气候
    event.fauna(climate => {
        climate.minRain(80);
        climate.maxRain(450);
        climate.minTemp(0);
        climate.maxTemp(15);
        climate.minForest(1);
    }, fauna => { }, 'alexsmobs:blue_jay');

    // 鲸头鹳：0-50mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(200);
        climate.maxRain(500);
        climate.minTemp(18);
    }, fauna => { }, 'alexsmobs:shoebill');



    // 主红雀：100-300mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(300);
        climate.minTemp(-2);
        climate.maxTemp(20);
        climate.minForest(2);
    }, fauna => { }, 'naturalist:cardinal');

    // 金丝雀：50-250mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(50);
        climate.maxRain(250);
        climate.minTemp(5);
        climate.maxTemp(20);
        climate.minForest(3);
    }, fauna => { }, 'naturalist:canary');

    // 山雀：100-350mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(350);
        climate.minTemp(0);
        climate.maxTemp(30);
        climate.minForest(2);
    }, fauna => { }, 'naturalist:finch');

    // 麻雀：120-400mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(120);
        climate.maxRain(400);
        climate.minTemp(0);
        climate.maxTemp(26);
        climate.minForest(2);
    }, fauna => { }, 'naturalist:sparrow');

    // 知更鸟：100-350mm降雨，>10°C，1-2只
    event.fauna(climate => {
        climate.minRain(100);
        climate.maxRain(450);
        climate.minTemp(-5);
        climate.maxTemp(20);
        climate.minForest(2);
    }, fauna => { }, 'naturalist:robin');


    
    // 雨蛙：0-50mm降雨，>10°C，1只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(100);
        climate.minTemp(10);
    }, fauna => { }, 'alexsmobs:rain_frog');

    // 狮尾狒狒：80-350mm降雨，>18°C，3-6只，潮湿气候
    event.fauna(climate => {
        climate.minRain(80);
        climate.maxRain(500);
        climate.minTemp(18);
    }, fauna => { }, 'alexsmobs:gelada_monkey');

    // 跳鼠：0-50mm降雨，>10°C，1只，干旱气候
    event.fauna(climate => {
        climate.minRain(0);
        climate.maxRain(100);
        climate.minTemp(10);
    }, fauna => { }, 'alexsmobs:jerboa');



    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
    }, 'born_in_chaos_v1:decrepit_skeleton');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
    fauna.distanceBelowSeaLevel(40);
    }, 'alexsmobs:centipede_head');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
    }, 'born_in_chaos_v1:decaying_zombie');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
    }, 'born_in_chaos_v1:zombie_fisherman');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
    }, 'born_in_chaos_v1:zombie_lumberjack');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(15);
    }, 'born_in_chaos_v1:baby_spider');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(30);
    }, 'born_in_chaos_v1:mother_spider');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(50);
    }, 'born_in_chaos_v1:skeleton_thrasher');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(50);
    }, 'born_in_chaos_v1:zombie_bruiser');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(10);
    }, 'majruszsdifficulty:creeperling');

    event.fauna(climate => {
    }, fauna => {
    fauna.maxBrightness(0);
        fauna.distanceBelowSeaLevel(10);
    }, 'alexsmobs:cockroach');


});