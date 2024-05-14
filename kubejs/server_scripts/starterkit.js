PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('starting_items')) {
        e.player.stages.add('starting_items')
        e.player.give(Item.of("cold_sweat:fur_cap", 1))
        e.player.give(Item.of("cold_sweat:fur_parka", 1))
        e.player.give(Item.of("cold_sweat:fur_pants", 1))
        e.player.give(Item.of("cold_sweat:fur_boots", 1))
        e.player.give(Item.of("minecraft:wooden_pickaxe", 1))
        e.player.give(Item.of("minecraft:wooden_axe", 1))
        e.player.give(Item.of("farmersdelight:bacon_sandwich", 5))
        e.player.give(Item.of("farmersdelight:hot_cocoa", 10))
        e.player.give(Item.of('patchouli:guide_book','{"patchouli:book": "patchouli:frigid_abyss_guidebook"}'))
    }
  })