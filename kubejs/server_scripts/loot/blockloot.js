LootJS.modifiers(e => {
    const ores = [
        ['#forge:ores/iron',     'minecraft:raw_iron',                'immersivegeology:crushed_ore_hematite'],
        ['#forge:ores/copper',   'minecraft:raw_copper',              'immersivegeology:crushed_ore_copper'],
        ['#forge:ores/gold',     'minecraft:raw_gold',                'immersivegeology:crushed_ore_gold'],
        ['#forge:ores/zinc',     'create:raw_zinc',                   'immersivegeology:crushed_ore_sphalerite'],
        ['#forge:ores/silver',   'immersiveengineering:raw_silver',   'immersivegeology:crushed_ore_silver'],
        ['#forge:ores/lead',     'immersiveengineering:raw_lead',     'immersivegeology:crushed_ore_lead'],
        ['#forge:ores/aluminum', 'immersiveengineering:raw_aluminum', 'immersivegeology:crushed_ore_bauxite'],
        ['#forge:ores/nickel',   'immersiveengineering:raw_nickel',   'immersivegeology:crushed_ore_millerite'],
    ];
    
    ores.forEach(([ore, silkDrop, crushedDrop]) => {
        const WhenFortune = LootEntry.of(crushedDrop)
            .applyOreBonus('minecraft:fortune')
            .when(c => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:fortune')));

        const WhenSilkTouch = LootEntry.of(ore)
            .when(c => c.matchMainHand(ItemFilter.hasEnchantment('minecraft:silk_touch')));

        e.addBlockLootModifier(ore)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(WhenFortune, WhenSilkTouch, crushedDrop);
    });
});

// ServerEvents.blockLootTables(event => {

//     // Replace ALL drops entirely
//     event.addBlock('minecraft:coal_ore', table => {
//         table.addPool(pool => {
//             pool.addItem('minecraft:diamond'); // now drops diamond instead
//         });
//     });

//     // Add an extra drop on top of existing ones
//     event.modifyBlock('minecraft:oak_log', table => {
//         table.addPool(pool => {
//             pool.addItem('farmersdelight:tree_bark');
//             pool.rolls = 1;
//         });
//     });

//     // Drop with fortune bonus
//     event.modifyBlock('minecraft:iron_ore', table => {
//         table.addPool(pool => {
//             pool.addItem('minecraft:raw_iron', 1, 3);
//             pool.bonusRolls = 1; // extra rolls per fortune level
//         });
//     });

//     // Conditional drop (only with silk touch)
//     event.modifyBlock('minecraft:grass_block', table => {
//         table.addPool(pool => {
//             pool.addItem('minecraft:grass_block');
//             pool.addCondition({ condition: 'minecraft:match_tool', predicate: { enchantments: [{ enchantment: 'minecraft:silk_touch', levels: { min: 1 } }] } });
//         });
//     });

// });