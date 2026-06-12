ServerEvents.recipes(e => {
    //TOMS STORAGE RECIPES

    e.recipes.create.mechanical_crafting( "toms_storage:ts.wireless_terminal", [
        'W  ',
        'CTC',
        'CRC',
        'CCC'
    ], {
        W: "create:redstone_link",
        T: "toms_storage:ts.storage_terminal",
        C: "create:andesite_casing",
        R: "create_things_and_misc:radar"
    })

    e.recipes.create.mechanical_crafting( "toms_storage:ts.adv_wireless_terminal", [
        'A  ',
        'STS',
        'SRS',
        'SSS'
    ], {
        A: "create:redstone_link",
        T: "toms_storage:ts.wireless_terminal",
        S: "create:sturdy_sheet",
        R: "minecraft:nether_star"
    })

    //####################################################################################

})