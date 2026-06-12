ServerEvents.recipes(e => {
    //ORE COMPAT
    //####################################################################################

    //remove all ingot smelting and blasting
    e.remove({ output: '#forge:ingots', type: 'minecraft:smelting' });
    e.remove({ output: '#forge:ingots', type: 'minecraft:blasting' });


    // e.forEachRecipe({ output: '#forge:ingots' }, recipe => {

    //     //filter to keep certain recipes
    //     if (
    //         recipe.id === 'zps:aluminium_ingot_from_blasting_anorthite_crystal' ||
    //         recipe.id === 'zps:aluminium_ingot_from_blasting_anorthite'
    //     ) {
    //         return;
    //     }

    //     if (
    //         recipe.type === 'minecraft:smelting' ||
    //         recipe.type === 'minecraft:blasting'
    //     ) {

    //     try {
    //         let json = JSON.parse(recipe.json.toString());
    //         let ingredient = json.ingredient ?? json.ingredients ?? [];
    //         let ingredients = Array.isArray(ingredient) ? ingredient : [ingredient];

    //         let hasDustInput = ingredients.some(i => i?.tag === 'forge:dusts');
    //         let hasGritInput = ingredients.some(i => i?.tag === 'forge:grits');

    //         if (hasDustInput || hasGritInput) return;
    //     } catch (err) {
    //         // If we can't parse the recipe, leave it alone
    //         return;
    //     }

    //     recipe.remove();

    //     }

    // });

    // Remove smelting and blasting that output ingots, excluding dust/grit inputs
    e.forEachRecipe({ output: '#forge:ingots', type: 'minecraft:smelting' }, recipe => {

        let json = JSON.parse(recipe.json.toString());
        let ingredient = json.ingredient ?? json.ingredients ?? [];
        let ingredients = Array.isArray(ingredient) ? ingredient : [ingredient];
        if (ingredients.some(i => i?.tag?.startsWith('forge:dusts') || i?.tag?.startsWith('forge:grits'))) return;
        
        recipe.remove();
    });

    e.forEachRecipe({ output: '#forge:ingots', type: 'minecraft:blasting' }, recipe => {
        if (/^zps:aluminium_ingot_from_blasting_anorthite/.test(recipe.id)) return;
        if (/^zps:aluminium_ingot_from_blasting_anorthite_crystal/.test(recipe.id)) return;
        
        let json = JSON.parse(recipe.json.toString());
        let ingredient = json.ingredient ?? json.ingredients ?? [];
        let ingredients = Array.isArray(ingredient) ? ingredient : [ingredient];
        if (ingredients.some(i => i?.tag?.startsWith('forge:dusts') || i?.tag?.startsWith('forge:grits'))) return;
        
        recipe.remove();
    });

    // e.forEachRecipe({ output: '#forge:nuggets' }, recipe => {
    //     if (recipe.type === 'create:splashing') {
    //         let json = recipe.json;
    //         let results = json.results ?? [];

    //         // Keep recipes where any output is one of these
    //         let keepItems = [
    //             'create_wizardry:mithril_nugget',
    //             'bygonenether:netherite_scrap_nugget'
    //         ];

    //         let hasKeptOutput = results.some(recipe => keepItems.includes(recipe.item));
            
    //         console.log('keep item: ' + hasKeptOutput + ' ' + recipe.item);

    //         if (hasKeptOutput) {
    //             return;
    //         }

    //         recipe.remove();
    //     }
    // });

    //REMOVE RECIPES WHERE PURE METAL DUSTS CAN BE EXTRATED FROM ORES
    e.forEachRecipe({ output: '#forge:dusts', type: 'immersiveengineering:crusher' }, recipe => {
        let json = JSON.parse(recipe.json.toString());
        let inputTag = json.input?.tag;

        if (inputTag && inputTag.startsWith('forge:ingots')) return;

        recipe.remove();
    });

    e.remove({ output: /.*:(?!mithril_nugget|netherite_scrap_nugget).*nugget.*/, type: 'create:splashing' });

    e.replaceInput(
        {input: "create:crushed_raw_iron"},
        "create:crushed_raw_iron",
        "immersivegeology:crushed_ore_iron"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_iron"},
        "create:crushed_raw_iron",
        "immersivegeology:crushed_ore_hematite"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_hematite', 1), // arg 1: output
    [
        ['minecraft:raw_iron', "create:crushed_raw_iron"],
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_copper"},
        "create:crushed_raw_copper",
        "immersivegeology:crushed_ore_copper"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_copper"},
        "create:crushed_raw_copper",
        "immersivegeology:crushed_ore_copper"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_copper', 1), // arg 1: output
    [
        ['minecraft:raw_copper', "create:crushed_raw_copper"],
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_gold"},
        "create:crushed_raw_gold",
        "immersivegeology:crushed_ore_gold"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_gold"},
        "create:crushed_raw_gold",
        "immersivegeology:crushed_ore_gold"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_gold', 1), // arg 1: output
    [
        ['minecraft:raw_gold', "create:crushed_raw_gold"],
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_zinc"},
        "create:crushed_raw_zinc",
        "immersivegeology:crushed_ore_sphalerite"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_zinc"},
        "create:crushed_raw_zinc",
        "immersivegeology:crushed_ore_sphalerite"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_sphalerite', 1), // arg 1: output
    [
        'create:raw_zinc',
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_silver"},
        "create:crushed_raw_silver",
        "immersivegeology:crushed_ore_silver"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_silver"},
        "create:crushed_raw_silver",
        "immersivegeology:crushed_ore_silver"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_silver', 1), // arg 1: output
    [
        'create:raw_silver',
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_lead"},
        "create:crushed_raw_lead",
        "immersivegeology:crushed_ore_lead"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_lead"},
        "create:crushed_raw_lead",
        "immersivegeology:crushed_ore_lead"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_lead', 1), // arg 1: output
    [
        'create:raw_lead',
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_aluminum"},
        "create:crushed_raw_aluminum",
        "immersivegeology:crushed_ore_bauxite"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_aluminum"},
        "create:crushed_raw_aluminum",
        "immersivegeology:crushed_ore_bauxite"
    )
    e.shapeless(
    Item.of('immersivegeology:crushed_ore_bauxite', 1), // arg 1: output
    [
        'create:raw_aluminum',
    ]
    )

    e.replaceInput(
        {input: "create:crushed_raw_nickel"},
        "create:crushed_raw_nickel",
        "immersivegeology:metal_oxide_nickel"
    )
    e.replaceOutput(
        {output: "create:crushed_raw_nickel"},
        "create:crushed_raw_nickel",
        "immersivegeology:metal_oxide_nickel"
    )
    e.shapeless(
    Item.of('immersivegeology:metal_oxide_nickel', 1), // arg 1: output
    [
        'create:raw_nickel',
    ]
    )
})