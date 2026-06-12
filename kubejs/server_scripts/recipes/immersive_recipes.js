ServerEvents.recipes(e => {
    //IE RECIPES

    e.shaped(Item.of('immersiveengineering:hammer').withNBT({Damage: 100}), [
        ' LS',
        ' WL',
        'W  '
    ], {
        W: '#forge:rods/wooden',
        S: '#forge:string',
        L: '#minecraft:logs'
    });

    let inter

    e.recipes.create.mixing("minecraft:tuff", ['#forge:slag',Fluid.lava(500)]).superheated()

    e.replaceInput(
        {output: ["immersiveengineering:rs_engineering","immersiveengineering:light_engineering"]},
        "#forge:ingots/copper",
        "create:copper_casing"
    )

    // e.shaped("8x immersiveengineering:treated_wood_horizontal", [// arg 1: output
    //     'WWW', 
    //     'WCW', // arg 2: the shape (array of strings)
    //     'WWW'  
    //     ], {
    //         W: '#minecraft:planks', 
    //         C: 'tfmg:creosote_bucket'   
    //         }
    // )

    e.remove({output: "immersiveengineering:toolupgrade_drill_damage"})

    e.shaped("immersiveengineering:toolupgrade_drill_damage", [// arg 1: output
    ' S ', 
    'SM ', // arg 2: the shape (array of strings)
    '  V'  
    ], {
        S: "#forge:ingots/steel", 
        M: "immersiveengineering:component_iron",
        V: "create_things_and_misc:vibration_mechanism"
        }
    )

    e.remove({output: "immersiveengineering:component_iron"})

    inter = "kubejs:unfinished_iron_component"

    e.recipes.create.sequenced_assembly(["immersiveengineering:component_iron"], "#forge:ingots/copper", [
        e.recipes.createDeploying(inter, [inter, "#forge:plates/iron"]),
        e.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(4)

    inter = "kubejs:unfinished_steel_component"

    e.remove({output: "immersiveengineering:component_steel"})

    e.recipes.create.sequenced_assembly(["immersiveengineering:component_steel"], "#forge:ingots/copper", [
        e.recipes.createDeploying(inter, [inter, "#forge:plates/steel"]),
        e.recipes.createPressing(inter, inter)
    ]).transitionalItem(inter).loops(4)

    //####################################################################################

})