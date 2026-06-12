ServerEvents.recipes(e => {
    //CREATE RECIPES

    let inter

    e.recipes.create.compacting( "minecraft:ice" , "8x minecraft:snow_block")

    e.remove({output: "create:sturdy_sheet"})

    inter = "create:unprocessed_obsidian_sheet"

    e.recipes.create.sequenced_assembly(["create:sturdy_sheet"], "#forge:dusts/obsidian", [
        e.recipes.createFilling(inter, [inter, Fluid.lava(500)]),
        e.recipes.createPressing(inter, inter),
        e.recipes.createDeploying(inter, [inter, "#forge:plates/steel"]),
        e.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(1)

    e.remove({output: "create:precision_mechanism"})

    inter = "create:incomplete_precision_mechanism"

    e.recipes.create.sequenced_assembly([
        Item.of('create:precision_mechanism').withChance(130.0), // this is the item that will appear in JEI as the result
        Item.of('create:golden_sheet').withChance(8.0), // the rest of these items will be part of the scrap
        Item.of('create:andesite_alloy').withChance(8.0),
        Item.of('create:cogwheel').withChance(5.0),
        Item.of('create:shaft').withChance(2.0),
        Item.of('create:crushed_gold_ore').withChance(2.0),
        Item.of('2x gold_nugget').withChance(2.0),
        'iron_ingot',
        'clock'
    ], "#forge:plates/gold", [ // 'create:golden_sheet' is the input
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
        // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
        e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
        e.recipes.createDeploying(inter, [inter, '#forge:nuggets/steel'])
    ]).transitionalItem(inter).loops(5) // set the transitional item and the number of loops

    e.recipes.create.mixing( Fluid.of("create:potion", 50 * FluidAmounts.MB, '{Potion:"minecraft:awkward"}'), ["minecraft:amethyst_shard","alexsmobs:banana_slug_slime","minecraft:poisonous_potato",'minecraft:fire_charge', Fluid.of("create:potion", 500 * FluidAmounts.MB, '{Potion:"minecraft:mundane"}')])

    e.replaceInput(
        {output: ["create:empty_blaze_burner","create:electron_tube","createaddition:alternator","createaddition:rolling_mill"]},
        "#forge:plates/iron",
        "#forge:plates/steel"
    )

    e.replaceInput(
        {output: ["create:mechanical_drill","create:mechanical_saw"]},
        "#forge:ingots/iron",
        "#forge:ingots/steel"
    )


    e.recipes.create.sandpaper_polishing("create:polished_rose_quartz", "biomesoplenty:rose_quartz_chunk")

    e.replaceInput(
        {output: ["create:water_wheel","create:large_water_wheel"]},
        "#minecraft:planks",
        "#forge:treated_wood"
    )

    e.replaceInput(
        {output: ["create:brass_casing","create:copper_casing"]},
        "#forge:stripped_logs",
        "#forge:treated_wood"
    )

    //####################################################################################

    //BITTERBALLEN RECIPES

    e.remove({output: Fluid.of("create_bic_bit:frying_oil")})

    e.recipes.create.compacting(Fluid.of("create_bic_bit:frying_oil", 250 * FluidAmounts.MB), "create_bic_bit:crushed_sunflower_seeds").heated()

    //####################################################################################
})