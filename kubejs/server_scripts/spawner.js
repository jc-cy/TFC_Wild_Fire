BlockEvents.rightClicked("minecraft:spawner", event => {
  const { block, item } = event
  if (item.id != "minecraft:netherite_sword") return;
  let SpawnerEntityData = {
    Delay: 0,                //距离下次生成的时间。如果此值为-1，则玩家接近时此值会重置为一个随机的生成延迟；如果此值不大于0，则玩家接近时立刻生成。
    MaxNearbyEntities: 6,    //生成实体的范围内具有与刷怪笼生成实体类型相同的实体的最大数量。如果附近符合条件的实体数量超过此值则刷怪笼不再生成实体。
    MaxSpawnDelay: 40,      //与短整型MinSpawnDelay一起设置时生效）随机生成延迟的上限。
    MinSpawnDelay: 20,      //随机生成延迟的下限。
    RequiredPlayerRange: 16, //（默认为16，与短整型MaxNearbyEntities一起设置时生效）玩家激活刷怪笼所需的距离。若为负数则无视玩家距离激活。
    SpawnCount: 4,           //（默认为4，与短整型MinSpawnDelay一起设置时生效）每次尝试生成实体的数量
    SpawnRange: 4,           //（默认为4）生成实体的范围，采用切比雪夫距离，越靠近刷怪笼生成在此位置的概率越大。
    SpawnData: {             //下一次生成实体的数据。在决定生成一次实体后，此项数据会从NBT列表/JSON数组SpawnPotentials中随机挑选一项作为自身的数据，并覆盖之前的数据
      custom_spawn_rules: {     //可选
        block_light_limit: [0, 15], //（0≤值≤15）方块光照限制。复合标签形式只用于加载，游戏只保存为整数（上下限相同时）或列表（上下限不同且不为[0,15]时）形式
        sky_light_limit: [0, 15]    //（0≤值≤15）天空光照限制，格式与方块光照限制相同。
      },
      entity: {
        id: "minecraft:pillager",  //实体类型id
        ArmorItems: [            //装备
          {
            Count: 1,
            id: "minecraft:air"
          },
          {
            Count: 1,
            id: "tfc:metal/greaves/bismuth_bronze"
          },
          {
            Count: 1,
            id: "tfc:metal/chestplate/wrought_iron"
          },
          {
            Count: 1,
            id: "tfc:metal/helmet/copper"
          }
        ],
        HandItems: [             //手持物品
          {
            Count: 1,
            id: "scguns:scrapper"
          },
          {
            Count: 1,
            id: "tfc:metal/shield/steel"
          }
        ]
      }
    },
    SpawnPotentials: [           //一个包含可能生成的实体的列表。
      {
        data: {                //下一次生成实体的数据。在决定生成一次实体后，此项数据会从NBT列表/JSON数组SpawnPotentials中随机挑选一项作为自身的数据，并覆盖之前的数据
          custom_spawn_rules: {     //可选
            block_light_limit: [0, 15], //（0≤值≤15）方块光照限制。复合标签形式只用于加载，游戏只保存为整数（上下限相同时）或列表（上下限不同且不为[0,15]时）形式
            sky_light_limit: [0, 15]    //（0≤值≤15）天空光照限制，格式与方块光照限制相同。
          },         //一项生成项，与SpawnData结构相同。
          entity: {
            id: "takesapillage:skirmisher",  //实体类型id
            ArmorItems: [            //装备
              {
                Count: 1,
                id: "tfc:metal/boots/blue_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/greaves/blue_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/chestplate/blue_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/helmet/blue_steel"
              }
            ],
            HandItems: [             //手持物品
              {
                Count: 1,
                id: "kubejs:blue_steel_dagger"
              },
              {
                Count: 1,
                id: "kubejs:blue_steel_parrying_dagger"
              }
            ]
          }
        },
        weight: 1          //权重
      },
      {
        data: {                  //下一次生成实体的数据。在决定生成一次实体后，此项数据会从NBT列表/JSON数组SpawnPotentials中随机挑选一项作为自身的数据，并覆盖之前的数据
          custom_spawn_rules: {     //可选
            block_light_limit: [0, 15], //（0≤值≤15）方块光照限制。复合标签形式只用于加载，游戏只保存为整数（上下限相同时）或列表（上下限不同且不为[0,15]时）形式
            sky_light_limit: [0, 15]    //（0≤值≤15）天空光照限制，格式与方块光照限制相同。
          },       //一项生成项，与SpawnData结构相同。
          entity: {
            id: "minecraft:vindicator",  //实体类型id
            ArmorItems: [            //装备
              {
                Count: 1,
                id: "tfc:metal/boots/black_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/greaves/black_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/chestplate/black_steel"
              },
              {
                Count: 1,
                id: "tfc:metal/helmet/black_steel"
              }
            ],
            HandItems: [             //手持物品
              {
                Count: 1,
                id: "kubejs:black_steel_greatsword"
              },
              {
                Count: 1,
                id: "minecraft:air"
              }
            ]
          }
        },
        weight: 1          //权重
      }
    ]
  }
  block.mergeEntityData(SpawnerEntityData)
})