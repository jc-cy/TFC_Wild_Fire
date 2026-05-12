ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal('foodrule')
            .then(Commands.argument('entity', Arguments.ENTITY.create(event))
                .then(Commands.argument('foodKill', Arguments.BOOLEAN.create(event))
                    .executes(context => {
                        let entity = Arguments.ENTITY.getResult(context, 'entity');
                        let needFood = Arguments.BOOLEAN.getResult(context, 'foodKill');

                        if (!entity.isPlayer()) {
                            player.server.tell('§c目标必须是一个玩家！');
                            return 0;
                        }

                        let player = entity;

                        if (needFood == true) {
                            player.server.tell(`已开启素食主义者模式`);
                            player.persistentData.foodKill = true;
                            return 1;
                        }

                        if (needFood == false) {
                            player.server.tell(`已关闭素食主义者模式`);

                            player.persistentData.foodKill = false;

                            return 1;
                        }
                    })
                )
            )
    );
});
const foodKillList = [
    //在这个List加入吃完后会死亡的食物
    "minecraft:cooked_beef",
    "farmersdelight:dog_food",
    "farmersdelight:horse_feed",
    "firmalife:food/bacon",
    "brewinandchewin:quiche_slice",
    "brewinandchewin:quiche",
    "brewinandchewin:scarlet_pierogi",
    "alexsmobs:kangaroo_meat",
    "alexsmobs:cooked_kangaroo_meat",
    "alexscaves:slam",
    "alexscaves:cooked_dinosaur_chop",
    "alexscaves:dinosaur_chop",
    "alexscaves:dinosaur_nugget",
    "born_in_chaos_v1:smoked_flesh",
    "born_in_chaos_v1:smoked_monster_flesh",
    "born_in_chaos_v1:monster_flesh",
    "farmersdelight:shepherds_pie",
    "farmersdelight:shepherds_pie_block",
    "farmersdelight:honey_glazed_ham",
    "farmersdelight:honey_glazed_ham_block",
    "farmersdelight:roasted_mutton_chops",
    "farmersdelight:grilled_salmon",
    "farm_and_charm:potato_with_roast_meat",
    "farm_and_charm:chicken_wrapped_in_bacon",
    "farm_and_charm:beef_patty_with_vegetables",
    "brewinandchewin:jerky",
    "farmersdelight:cod_slice",
    "farmersdelight:cooked_mutton_chops",
    "farmersdelight:mutton_chops",
    "alexsmobs:kangaroo_burger",
    "kubejs:iceland_mutton",
    "kubejs:rotten_meat",
    "farmersdelight:barbecue_stick",
    "farmersdelight:cooked_salmon_slice",
    "farmersdelight:salmon_slice",
    "farmersdelight:cooked_cod_slice",
    "farmersdelight:cooked_bacon",
    "farmersdelight:bacon",
    "farmersdelight:ham",
    "farmersdelight:cod_roll",
    "farmersdelight:baked_cod_stew",
    "farmersdelight:noodle_soup",
    "farmersdelight:bacon_and_eggs",
    "farmersdelight:pasta_with_mutton_chop",
    "tfc:food/rainbow_trout",
    "tfc:food/largemouth_bass",
    "tfc:food/lake_trout",
    "tfc:food/crappie",
    "tfc:food/bluegill",
    "tfc:food/shellfish",
    "farmersdelight:salmon_roll",
    "farmersdelight:stuffed_potato",
    "farmersdelight:squid_ink_pasta",
    "farmersdelight:smoked_ham",
    "tfc:food/frog_legs",
    "tfc:food/tropical_fish",
    "tfc:food/cooked_salmon",
    "tfc:food/salmon",
    "tfc:food/cooked_cod",
    "tfc:food/cod",
    "firmalife:food/nachos",
    "firmalife:food/cooked_lasagna",
    "farmersdelight:stuffed_pumpkin_block",
    "farmersdelight:stuffed_pumpkin",
    "farmersdelight:roast_chicken_block",
    "farmersdelight:roast_chicken",
    "firmalife:food/raw_lasagna",
    "firmalife:food/burrito",
    "firmalife:food/taco",
    "firmalife:food/cooked_pizza",
    "firmalife:food/maki_roll",
    "firmalife:food/futo_maki_roll",
    "tfc:food/cooked_bluegill",
    "tfc:food/cooked_crappie",
    "tfc:food/cooked_lake_trout",
    "tfc:food/cooked_largemouth_bass",
    "tfc:food/cooked_rainbow_trout",
    "tfc:food/cooked_smallmouth_bass",
    "tfc:food/smallmouth_bass",
    "tfc:food/cooked_frog_legs",
    "tfc:food/cooked_shellfish",
    "brewinandchewin:kippers",
    "brewery:sausage",
    "brewery:half_chicken",
    "firmalife:food/cooked_bacon",
    "farmersdelight:beef_stew",
    "farmersdelight:chicken_soup",
    "farmersdelight:fish_stew",
    "farmersdelight:pasta_with_meatballs",
    "refurbished_furniture:raw_meatlovers_pizza",
    "refurbished_furniture:cooked_meatlovers_pizza",
    "refurbished_furniture:meatlovers_pizza_slice",
    "tfc:food/beef",
    "tfc:food/pork",
    "tfc:food/cooked_duck",
    "tfc:food/cooked_hyena",
    "tfc:food/horse_meat",
    "farmersdelight:mutton_wrap",
    "farmersdelight:minced_beef",
    "minecraft:rabbit_stew",
    "minecraft:rotten_flesh",
    "tfc:food/duck",
    "tfc:food/hyena",
    "tfc:food/bear",
    "tfc:food/chicken",
    "tfc:food/cooked_chicken",
    "tfc:food/rabbit",
    "tfc:food/cooked_rabbit",
    "tfc:food/quail",
    "farmersdelight:chicken_sandwich",
    "farmersdelight:cooked_chicken_cuts",
    "farmersdelight:chicken_cuts",
    "farmersdelight:beef_patty",
    "tfc:food/fox",
    "tfc:food/wolf",
    "tfc:food/venison",
    "tfc:food/peafowl",
    "tfc:food/turkey",
    "tfc:food/cooked_mutton",
    "tfc:food/mutton",
    "tfc:food/cooked_pork",
    "tfc:food/cooked_pheasant",
    "tfc:food/cooked_turkey",
    "tfc:food/cooked_peafowl",
    "tfc:food/cooked_grouse",
    "tfc:food/cooked_venison",
    "tfc:food/cooked_wolf",
    "tfc:food/cooked_fox",
    "tfc:food/pheasant",
    "tfc:food/grouse",
    "brewery:fried_chicken",
    "tfc:food/cooked_horse_meat",
    "tfc:food/cooked_bear",
    "tfc:food/cooked_quail",
    "tfc:food/cooked_beef",
    "tfc:food/calamari",
    "tfc:food/camelidae",
    "tfc:food/turtle",
    "tfc:food/gran_feline",
    "tfc:food/chevon",
    "tfc:food/cooked_turtle",
    "tfc:food/cooked_calamari",
    "tfc:food/protein_soup",
    "tfc:food/protein_salad",
    "tfc:food/cooked_gran_feline",
    "tfc:food/cooked_camelidae",
    "tfc:food/cooked_chevon",
    "farmersdelight:bacon_sandwich",
    "bakery:vegetable_sandwich",
    "bakery:grilled_salmon_sandwich",
    "bakery:grilled_bacon_sandwich",
    "bakery:sandwich",
    "tfc:food/rice_bread_jam_sandwich",
    "tfc:food/wheat_bread_sandwich",
    "tfc:food/wheat_bread_jam_sandwich",
    "brewinandchewin:ham_and_cheese_sandwich",
    "tfc:food/rice_bread_sandwich",
    "tfc:food/rye_bread_jam_sandwich",
    "tfc:food/rye_bread_sandwich",
    "tfc:food/oat_bread_jam_sandwich",
    "tfc:food/oat_bread_sandwich",
    "tfc:food/maize_bread_sandwich",
    "tfc:food/maize_bread_jam_sandwich",
    "tfc:food/barley_bread_jam_sandwich",
    "tfc:food/barley_bread_sandwich",
    "farm_and_charm:goulash",
    "farm_and_charm:sausage_with_oat_patty",
    "farm_and_charm:lamb_with_corn",
    "farm_and_charm:cooked_cod",
    "farm_and_charm:cooked_salmon",
    "farm_and_charm:roasted_chicken",
    "farm_and_charm:bacon_with_eggs",
    "#forge:meats",
    "#forge:foods/meats"
]
ItemEvents.foodEaten(event => {
    const { player, server, item } = event
    if (foodKillList.indexOf(item.id) != -1) {
        if (player.persistentData.foodKill) {
            damagePlayer(server, player, 'kubejs:carnivorous', 1234567)
            // 在zh_ch "death.attack.carnivorous":"%1$s 死于肉食"
        }
    }
})