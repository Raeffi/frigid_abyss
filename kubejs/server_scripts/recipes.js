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
    H: "minecraft:blue_ice"
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
})

