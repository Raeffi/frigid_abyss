PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.stages.add('starting_items')
        event.player.give( [
                            "cold_sweat:fur_cap",
                            "cold_sweat:fur_parka",
                            "cold_sweat:fur_pants",
                            "cold_sweat:fur_boots",
                            "minecraft:wooden_pickaxe",
                            "minecraft:wooden_axe",
                            "farmersdelight:bacon_sandwich"
                        ] )
    }
  })