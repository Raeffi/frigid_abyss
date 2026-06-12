ServerEvents.recipes(e => {
    //COLD SWEAT RECIPES

    e.remove({output: "cold_sweat:soulspring_lamp"})

    e.recipes.create.mechanical_crafting( "cold_sweat:soulspring_lamp", [
        ' W ',
        ' N ',
        'PSP',
        'GHG',
        'PSP'
    ], {
        W: "immersiveengineering:wooden_grip",
        N: "#forge:nuggets/gold",
        S: "create:sturdy_sheet",
        P: "#forge:plates/steel",    
        G: "#forge:glass_panes",
        H: "cold_sweat:soul_sprout"
    })

    e.remove({output: "cold_sweat:hearth"})

    e.recipes.create.mechanical_crafting( "cold_sweat:hearth", [
        ' WPW ',
        ' WPW ',
        'CCFCC',
        'CTHTC',
        'CCCCC'
    ], {
        P: "create:fluid_pipe",
        C: "create:cut_scoria",
        W: "minecraft:cobblestone_wall",
        H: "create_things_and_misc:sprinkler",
        F: "create:propeller",
        T: "create:fluid_tank"
    })

    //####################################################################################

})