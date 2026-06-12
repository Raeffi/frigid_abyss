PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('starting_items')) {
        e.player.stages.add('starting_items');

        // Delay by 1 second (20 ticks) to let inventory fully initialize
        e.player.server.scheduleInTicks(20, () => {
            const p = e.player;
            p.give(Item.of("scguns:powder_and_ball", 16));
            p.give(Item.of("scguns:flintlock_pistol", 1));
            p.give(Item.of("cold_sweat:goat_fur_helmet", 1));
            p.give(Item.of("cold_sweat:goat_fur_chestplate", 1));
            p.give(Item.of("cold_sweat:goat_fur_leggings", 1));
            p.give(Item.of("cold_sweat:goat_fur_boots", 1));
            p.give(Item.of("minecraft:wooden_pickaxe", 1));
            p.give(Item.of("minecraft:wooden_axe", 1));
            p.give(Item.of("farmersdelight:bacon_sandwich", 5));
            p.give(Item.of("farmersdelight:hot_cocoa", 10));
            p.give(Item.of('patchouli:guide_book', '{"patchouli:book": "patchouli:frigid_abyss_guidebook"}'));
            // p.give(Item.of("immersiveengineering:hammer", {Damage:100}, 1));
            p.give(Item.of("minecraft:lantern", {Damage:100}, 1));
        });
    }
});