ServerEvents.tags('item', e => {
//Tags for food temperatures
    e.add('frigid_abyss:ice_cream', 'delightful:salmonberry_ice_cream')
    e.add('frigid_abyss:ice_cream', 'delightful:matcha_ice_cream')
    e.add('frigid_abyss:ice_cream', 'undead_revamp2:fizzysnowgoo')
    e.add('frigid_abyss:ice_cream', 'delightful:cantaloupe_popsicle')
    e.add('frigid_abyss:ice_cream', 'farmersdelight:melon_popsicle')
    e.add('frigid_abyss:ice_cream', 'ends_delight:chorus_fruit_popsicle')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:chocolate_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:coffee_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:cream_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:glow_berry_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:mocha_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:napolitano_ice_cream')
    e.add('frigid_abyss:ice_cream', 'kawaiidishes:sweet_berry_ice_cream')

    e.add('frigid_abyss:cold_ice_cream', 'appliedenergisticsdelight:certus_quartz_ice_cream')

    e.add('frigid_abyss:soup', 'minecraft:mushroom_stew')
    e.add('frigid_abyss:soup', 'minecraft:beetroot_stew')
    e.add('frigid_abyss:soup', 'minecraft:rabbit_stew')
    e.add('frigid_abyss:soup', 'minecraft:suspicious_stew')
    e.add('frigid_abyss:soup', 'farmersdelight:beef_stew')
    e.add('frigid_abyss:soup', 'farmersdelight:vegetable_soup')
    e.add('frigid_abyss:soup', 'farmersdelight:noodle_soup')
    e.add('frigid_abyss:soup', 'farmersdelight:fish_stew')
    e.add('frigid_abyss:soup', 'farmersdelight:baked_cod_stew')
    e.add('frigid_abyss:soup', 'farmersdelight:chicken_soup')
    e.add('frigid_abyss:soup', 'farmersdelight:pumpkin_soup')
    e.add('frigid_abyss:soup', 'farmersdelight:sinigang')
    e.add('frigid_abyss:soup', 'nethersdelight:strider_moss_stew')
    e.add('frigid_abyss:soup', 'ends_delight:dragon_meat_stew')
    e.add('frigid_abyss:soup', 'ends_delight:dragons_breath_and_chorus_soup')
    e.add('frigid_abyss:soup', 'enlightened_end:chorus_soup')

    e.add('frigid_abyss:hot_drink', 'ends_delight:chorus_flower_tea')
    e.add('frigid_abyss:hot_drink', 'ends_delight:bubble_tea')
    e.add('frigid_abyss:hot_drink', 'ends_delight:chorus_fruit_milk_tea')
    e.add('frigid_abyss:hot_drink', 'delightful:lavender_tea')
    e.add('frigid_abyss:hot_drink', 'create:builders_tea')
    e.add('frigid_abyss:hot_drink', 'farmersdelight:hot_cocoa')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:cappuccino_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:doppio_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:expresso_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:latte_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:macchiato_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:mocha_coffee')
    e.add('frigid_abyss:hot_drink', 'kawaiidishes:american_coffee')

    e.add('frigid_abyss:cold_drink', 'kawaiidishes:chocolate_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:coffee_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:cream_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:glow_berry_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:mocha_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:napolitano_milkshake')
    e.add('frigid_abyss:cold_drink', 'kawaiidishes:sweet_berry_milkshake')

})
    
ColdSweatEvents.registries(e =>
{
    e.addFoodTemperature(food =>
        food.items("#frigid_abyss:ice_cream")
            .temperature(-10)
            .duration(1200)
            .stackLimit(5)
    )

    e.addFoodTemperature(food =>
        food.items("#frigid_abyss:cold_ice_cream")
            .temperature(-25)
            .duration(1200)
            .stackLimit(5)
    )

    e.addFoodTemperature(food =>
        food.items("#frigid_abyss:soup")
            .temperature(20)
            .duration(1200)
            .stackLimit(25)
    )

    e.addFoodTemperature(food =>
        food.items("#frigid_abyss:hot_drink")
            .temperature(10)
            .duration(1200)
            .stackLimit(15)
    )

    e.addFoodTemperature(food =>
        food.items("#frigid_abyss:cold_drink")
            .temperature(-5)
            .duration(1200)
            .stackLimit(5)
    )

})