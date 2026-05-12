//物品tag
ServerEvents.tags('item', event => {
     event.add('ad_astra:held_over_head', 'siegemachines:mortar')
     event.add('ad_astra:held_over_head', 'siegemachines:culverin')
     event.add('ad_astra:held_over_head', 'siegemachines:catapult')
     event.add('ad_astra:held_over_head', 'siegemachines:catapult')
     event.add('ad_astra:held_over_head', 'siegemachines:trebuchet')
     event.add('ad_astra:held_over_head', 'siegemachines:ballista')
     event.add('ad_astra:held_over_head', 'siegemachines:battering_ram')
     event.add('ad_astra:held_over_head', 'siegemachines:siege_ladder')
     event.add('ad_astra:held_over_head', 'trotting_wagons:armored_wagon')
     event.add('ad_astra:held_over_head', 'trotting_wagons:conestoga_wagon')
     event.add('ad_astra:held_over_head', 'trotting_wagons:royal_wagon')
     //毛皮刮制配方tag
     //大皮
     event.add('tfc:scrapable', 'textile:lion_fur')
     event.add('tfc:scrapable', 'alexsmobs:kangaroo_hide')
     event.add('tfc:scrapable', 'textile:sabertooth_fur')
     event.add('tfc:scrapable', 'textile:cougar_fur')
     event.add('tfc:scrapable', 'textile:caribou_fur')
     event.add('tfc:scrapable', 'textile:polar_bear_fur')
     event.add('tfc:scrapable', 'textile:grizzly_bear_fur')
     event.add('tfc:scrapable', 'textile:black_bear_fur')
     event.add('tfc:scrapable', 'alexscaves:tough_hide')
     event.add('tfc:scrapable', 'textile:panther_fur')
     event.add('tfc:scrapable', 'textile:tiger_fur')
     //中皮
     event.add('tfc:scrapable', 'textile:direwolf_fur')
     event.add('tfc:scrapable', 'born_in_chaos_v1:monster_skin')
     //小皮
     event.add('tfc:scrapable', 'minecraft:rabbit_hide')


})
//方块atg
ServerEvents.tags('block', event => {
     //探勘物品
     event.add('tfc:prospectable', 'tfc:kaolin_clay_grass')
     event.add('tfc:prospectable', 'tfc:white_kaolin_clay')
     event.add('tfc:prospectable', 'tfc:pink_kaolin_clay')
     event.add('tfc:prospectable', 'tfc:red_kaolin_clay')
     //锻铁炉建材
     event.add('tfc:bloomery_insulation', 'minecraft:hopper')
})