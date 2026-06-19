TFCEvents.registerFaunas(event => {
    event.replace('alexsmobs:giant_squid', 'in_water', 'ocean_floor_wg');
    // 抹香鲸（水中）→ 海洋底部
    event.replace('alexsmobs:cachalot_whale', 'in_water', 'ocean_floor');
    // 水滴鱼（水中）→ 海洋表面（浅水层）
    event.replace('alexsmobs:blobfish', 'in_water', 'world_surface');
    // 皱鳃鲨（水中）→ 海洋底部
    event.replace('alexsmobs:frilled_shark', 'in_water', 'ocean_floor_wg');
    // 飞鱼（水中）→ 海洋表面（跃出水面逻辑用世界表面）
    event.replace('alexsmobs:flying_fish', 'in_water', 'world_surface_wg');
    // 骷髅剑鱼（水中）→ 海洋表面
    event.replace('alexsmobs:skelewag', 'in_water', 'world_surface');
    // 鲶鱼（水中）→ 世界表面（河流/湖泊水面下用 world_surface）
    // event.replace('alexsmobs:crocodile', 'in_water', 'world_surface_wg');
    // 水龟（水中）→ 世界表面（河岸浅水区）
    event.replace('alexsmobs:terrapin', 'in_water', 'world_surface');
    // 鲈鱼（水中）→ 世界表面（湖泊/河流）
    event.replace('naturalist:bass', 'in_water', 'world_surface_wg');
    // 鸭嘴兽（水中）→ 世界表面（淡水区域）
    event.replace('alexsmobs:platypus', 'in_water', 'world_surface');
    // 弹涂鱼（水中）→ 世界表面（潮间带，用 world_surface 模拟）
    event.replace('alexsmobs:mudskipper', 'in_water', 'world_surface_wg');
    // 螳螂虾（水中）→ 海洋底部（珊瑚礁区，用 ocean_floor 模拟）
    event.replace('alexsmobs:mantis_shrimp', 'in_water', 'ocean_floor');
    // 拟态章鱼（水中）→ 世界表面（浅海）
    event.replace('alexsmobs:mimic_octopus', 'in_water', 'world_surface_wg');
    // 锤头鲨（水中）→ 世界表面（热带海洋表层）
    event.replace('alexsmobs:hammerhead_shark', 'in_water', 'world_surface');
    // 栉水母（水中）→ 海洋表面（北冰洋表层，用 world_surface 模拟）
    event.replace('alexsmobs:comb_jelly', 'in_water', 'world_surface_wg');
    // 海豹（水中）→ 世界表面（北极海岸浅水区）
    event.replace('alexsmobs:seal', 'on_ground', 'world_surface');
    // 大鳄龟（水中）→ 世界表面（沼泽水域）
    event.replace('alexsmobs:alligator_snapping_turtle', 'on_ground', 'world_surface_wg');
    // 森蚺（水中）→ 世界表面（丛林沼泽）
    event.replace('alexsmobs:anaconda', 'in_water', 'world_surface_wg');
    // 河马（水中）→ 世界表面（热带草原河流）
    event.replace('naturalist:hippo', 'on_ground', 'world_surface_wg');
    // 鲎虫（水中）→ 世界表面（临时池塘）
    event.replace('alexsmobs:triops', 'on_ground', 'world_surface');
    // 鲸头鹳（地面）→ 世界表面（湿地）
    event.replace('alexsmobs:shoebill', 'on_ground', 'world_surface_wg');
    // 海鸥（无限制，模拟飞行逻辑用 on_ground）→ 世界表面（海岸天空，用 world_surface 占位）
    event.replace('alexsmobs:seagull', 'on_ground', 'world_surface');
    // 沙漠蛛蜂（地面）→ 世界表面（沙漠）
    event.replace('alexsmobs:tarantula_hawk', 'on_ground', 'world_surface_wg');
    // 大猩猩（地面）→ 世界表面（丛林地面）
    event.replace('alexsmobs:gorilla', 'on_ground', 'world_surface');
    // 卷尾猴（地面/树上，简化为 on_ground）→ 世界表面（热带树木区）
    event.replace('alexsmobs:capuchin_monkey', 'on_ground', 'world_surface_wg');
    // 驼鹿（地面）→ 世界表面（北方森林）
    event.replace('alexsmobs:moose', 'on_ground', 'world_surface');
    // 雪豹（地面）→ 世界表面（山地雪地）
    event.replace('alexsmobs:snow_leopard', 'on_ground', 'world_surface_wg');
    // 袋獾（地面）→ 世界表面（温带森林）
    event.replace('alexsmobs:tasmanian_devil', 'on_ground', 'world_surface');
    // 鬃狼（地面）→ 世界表面（热带草原）
    event.replace('alexsmobs:maned_wolf', 'on_ground', 'world_surface_wg');
    // 走鹃（地面）→ 世界表面（沙漠）
    event.replace('alexsmobs:roadrunner', 'on_ground', 'world_surface');
    // 鸸鹋（地面）→ 世界表面（草原）
    event.replace('alexsmobs:emu', 'on_ground', 'world_surface_wg');
    // 巨嘴鸟（地面/树上，简化为 on_ground）→ 世界表面（热带树冠区）
    event.replace('alexsmobs:toucan', 'on_ground', 'world_surface');
    // 响尾蛇（地面）→ 世界表面（沙漠岩石区）
    event.replace('alexsmobs:rattlesnake', 'on_ground', 'world_surface_wg');
    // 科莫多巨蜥（地面）→ 世界表面（热带岛屿）
    event.replace('alexsmobs:komodo_dragon', 'on_ground', 'world_surface');
    // 秃鹫（无限制，模拟飞行）→ 世界表面（沙漠天空）
    event.replace('naturalist:vulture', 'on_ground', 'world_surface_wg');
    // 蜻蜓（无限制，模拟飞行）→ 世界表面（湿地天空）
    event.replace('naturalist:dragonfly', 'on_ground', 'world_surface');
    // 野牛（地面）→ 世界表面（草原平原）
    event.replace('alexsmobs:bison', 'on_ground', 'world_surface_wg');
    //老虎（地面）→ 世界表面（草原平原）
    event.replace('alexsmobs:tiger', 'on_ground', 'world_surface_wg');
    // 獠牙兽（地面）→ 世界表面（北极苔原）
    event.replace('alexsmobs:tusklin', 'on_ground', 'world_surface_wg');
    // 切叶蚁（地面）→ 世界表面（热带草地）
    event.replace('alexsmobs:leafcutter_ant', 'on_ground', 'world_surface_wg');
    // 大象（地面）→ 世界表面（热带草原草地）
    event.replace('alexsmobs:elephant', 'on_ground', 'world_surface_wg');
    // 猛犸象（地面）→ 世界表面（北极苔原）
    event.replace('naturalist:elephant', 'on_ground', 'world_surface_wg');
    // 袋鼠（地面）→ 世界表面（澳大利亚内陆）
    event.replace('alexsmobs:kangaroo', 'on_ground', 'world_surface_wg');
    // 食蚁兽（地面）→ 世界表面（热带草原）
    event.replace('alexsmobs:anteater', 'on_ground', 'world_surface');
    // 臭鼬（地面）→ 世界表面（温带草地）
    event.replace('alexsmobs:skunk', 'on_ground', 'world_surface_wg');
    // 长颈鹿（地面）→ 世界表面（热带稀树草原）
    event.replace('naturalist:giraffe', 'on_ground', 'world_surface');
    // 蜗牛（地面）→ 世界表面（温带森林地面）
    event.replace('naturalist:lion', 'on_ground', 'world_surface');
    // 狮子（地面）→ 世界表面（温带森林地面）
    event.replace('naturalist:lizard', 'on_ground', 'world_surface');
    // 蜥蜴（地面）→ 世界表面（温带森林地面）
    event.replace('naturalist:snail', 'on_ground', 'world_surface_wg');
    // 白头海雕（无限制，模拟飞行）→ 世界表面（温带天空）
    event.replace('alexsmobs:bald_eagle', 'on_ground', 'world_surface');
    // 香蕉蛞蝓（地面）→ 世界表面（温带雨林）
    event.replace('alexsmobs:banana_slug', 'on_ground', 'world_surface_wg');
    // 浣熊（地面）→ 世界表面（温带森林边缘）
    event.replace('alexsmobs:raccoon', 'on_ground', 'world_surface');
    // 乌鸦（无限制，模拟飞行）→ 世界表面（城市天空）
    event.replace('alexsmobs:crow', 'on_ground', 'world_surface_wg');
    // 冠蓝鸦（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('alexsmobs:blue_jay', 'on_ground', 'world_surface');

    // 主红雀（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('naturalist:cardinal', 'on_ground', 'world_surface');
    // 金丝雀（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('naturalist:canary', 'on_ground', 'world_surface');
    // 山雀（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('naturalist:finch', 'on_ground', 'world_surface');
    // 麻雀（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('naturalist:sparrow', 'on_ground', 'world_surface');
    // 知更鸟（地面/树上，简化为 on_ground）→ 世界表面（温带树木区）
    event.replace('naturalist:robin', 'on_ground', 'world_surface');

    // 雨蛙（地面）→ 世界表面（热带雨林地面）
    event.replace('alexsmobs:rain_frog', 'on_ground', 'world_surface_wg');
    // 狮尾狒狒（地面）→ 世界表面（山地草地）
    event.replace('alexsmobs:gelada_monkey', 'on_ground', 'world_surface');
    // 跳鼠（地面）→ 世界表面（干旱沙漠）
    event.replace('alexsmobs:jerboa', 'on_ground', 'world_surface_wg');
    // 为犀牛注册动物群定义
    event.replace('alexsmobs:rhinoceros', 'on_ground', 'world_surface_wg');


    // 注册怪物生成-破碎骷髅
    event.replace('born_in_chaos_v1:decrepit_skeleton', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-巨型蜈蚣
    event.replace('alexsmobs:centipede_head', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-腐烂僵尸
    event.replace('born_in_chaos_v1:decaying_zombie', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-僵尸渔夫
    event.replace('born_in_chaos_v1:zombie_fisherman', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-僵尸伐木工
    event.replace('born_in_chaos_v1:zombie_lumberjack', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-幼年蜘蛛
    event.replace('born_in_chaos_v1:baby_spider', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-蜘蛛之母
    event.replace('born_in_chaos_v1:mother_spider', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-骷髅猛击者（大锤骷髅）
    event.replace('born_in_chaos_v1:skeleton_thrasher', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-强壮僵尸
    event.replace('born_in_chaos_v1:zombie_bruiser', 'on_ground', 'world_surface_wg');
    // 注册怪物生成-小苦力怕
    event.replace('majruszsdifficulty:creeperling', 'on_ground', 'world_surface_wg');
    // 注册南方小精灵生成
    event.replace('alexsmobs:cockroach', 'on_ground', 'world_surface_wg');
});
