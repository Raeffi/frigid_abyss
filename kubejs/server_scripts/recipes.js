// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(e => {
    
//EUREKA RECIPES
//####################################################################################


e.remove({output: 'vs_eureka:balloon'})


e.shaped('4x vs_eureka:balloon', [
    ' A ', 
    'ABA',
    ' A '  
  ], {
    A: 'minecraft:leather', 
    B: 'enlightened_end:helium_jar',
  }
) 

e.shaped('16x vs_eureka:balloon', [
    ' A ', 
    'ABA',
    ' A '  
  ], {
    A: "minecraft:phantom_membrane", 
    B: 'enlightened_end:helium_jar',
  }
) 

e.shaped('4x vs_eureka:balloon', [
    ' A ', 
    'ABA',
    ' A '  
  ], {
    A: "#minecraft:wool", 
    B: 'enlightened_end:helium_jar',
  }
) 

e.remove({ output: "vs_eureka:engine" })

e.remove({output: "create_eureka:rotation_engine"})

e.recipes.create.mechanical_crafting("create_eureka:rotation_engine", [
    ' TTT ',
    'TRRRT',
    'SPFPS',
    'TTETT',
    ' TTT '
], {
    S: "create:shaft",
    P: "create:precision_mechanism",
    F: "create:flywheel",
    R: "create:rose_quartz_lamp",
    T: "#forge:plates/steel",
    E: "create:electron_tube"
})

//####################################################################################

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

//CRAYFISH GUN MOD RECIPES

e.remove({output: "cgm:missile"})

e.recipes.create.mechanical_crafting( "cgm:missile", [
    '  H  ',
    ' APA ',
    ' APA ',
    'AAGAA'
], {
    H: "createbigcannons:he_shell",
    A: "#forge:plates/aluminum",
    G: "minecraft:gunpowder",
    P: "minecraft:blaze_powder"

})

e.remove({output: "cgm:basic_bullet"})

let inter = "kubejs:unfinished_basic_bullet"

e.recipes.create.sequenced_assembly(['cgm:basic_bullet'], "#forge:plates/copper", [
    e.recipes.createPressing(inter, inter),
    e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
    e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"])
]).transitionalItem(inter).loops(1)


e.remove({output: "cgm:advanced_bullet"})

inter = "kubejs:unfinished_advanced_bullet"

e.recipes.create.sequenced_assembly(['cgm:advanced_bullet'], "#forge:plates/brass", [
    e.recipes.createPressing(inter, inter),
    e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
    e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
    e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"])
]).transitionalItem(inter).loops(1)


e.remove({output: "cgm:shell"})

inter = "kubejs:unfinished_shell"

e.recipes.create.sequenced_assembly(['cgm:shell'], "#forge:plates/brass", [
    e.recipes.createDeploying(inter, [inter, "#forge:ingots/plastic"]),
    e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
    e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
    e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"]),
    e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"]),
    e.recipes.createPressing(inter, inter)
]).transitionalItem(inter).loops(1)

//####################################################################################

//CREATE RECIPES

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
], 'create:golden_sheet', [ // 'create:golden_sheet' is the input
    // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
    e.recipes.createDeploying(inter, [inter, 'create:cogwheel']),
    // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
    e.recipes.createDeploying(inter, [inter, 'create:large_cogwheel']),
    e.recipes.createDeploying(inter, [inter, '#forge:nuggets/steel'])
]).transitionalItem(inter).loops(5) // set the transitional item and the number of loops


//####################################################################################

//PNEUMATICRAFT RECIPES
e.replaceInput(
    [{ output: "pneumaticcraft:pressure_chamber_wall" },{ output: "pneumaticcraft:pressure_chamber_glass" }],
    "pneumaticcraft:reinforced_bricks",
    "create:sturdy_sheet"
  )
e.replaceInput(
    { output: "pneumaticcraft:pressure_chamber_valve" },
    "#forge:ingots/compressed_iron",
    "create:sturdy_sheet"
  )

//####################################################################################

//IE RECIPES

e.recipes.create.mixing("minecraft:tuff", '#forge:slag').superheated()

//####################################################################################
})

