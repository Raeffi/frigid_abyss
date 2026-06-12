// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(e => {
    
//GENERAL RECIPES +FIXES
//####################################################################################

e.shaped('minecraft:chest', [
    'AAA', 
    'A A',
    'AAA'  
  ], {
    A: '#minecraft:planks'
  }
) 

e.shaped('4x minecraft:chest', [
    'AAA', 
    'A A',
    'AAA'  
  ], {
    A: '#minecraft:logs'
  }
) 

e.replaceInput(
    {output: "handcrafted:hammer"},
    "#forge:ingots/iron",
    "#minecraft:logs"
)


//EUREKA RECIPES
//####################################################################################

// e.remove({output: 'vs_eureka:balloon'})


// e.shaped('4x vs_eureka:balloon', [
//     ' A ', 
//     'ABA',
//     ' A '  
//   ], {
//     A: 'minecraft:leather', 
//     B: 'enlightened_end:helium_jar',
//   }
// ) 

// e.shaped('16x vs_eureka:balloon', [
//     ' A ', 
//     'ABA',
//     ' A '  
//   ], {
//     A: "minecraft:phantom_membrane", 
//     B: 'enlightened_end:helium_jar',
//   }
// ) 

// e.shaped('4x vs_eureka:balloon', [
//     ' A ', 
//     'ABA',
//     ' A '  
//   ], {
//     A: "#minecraft:wool", 
//     B: 'enlightened_end:helium_jar',
//   }
// ) 

// e.remove({ output: "vs_eureka:engine" })

// e.remove({output: "create_eureka:rotation_engine"})

// e.recipes.create.mechanical_crafting("create_eureka:rotation_engine", [
//     ' TTT ',
//     'TRRRT',
//     'SPFPS',
//     'TTETT',
//     ' TTT '
// ], {
//     S: "create:shaft",
//     P: "create:precision_mechanism",
//     F: "create:flywheel",
//     R: "create:rose_quartz_lamp",
//     T: "#forge:plates/steel",
//     E: "create:electron_tube"
// })

// e.replaceInput(
//     {output: "#vs_eureka:ship_helms"},
//     "#forge:ingots/gold",
//     "create:precision_mechanism"
// )

// e.replaceInput(
//     {output: "#vs_eureka:ship_helms"},
//     "#forge:fences/wooden",
//     "immersiveengineering:treated_fence"
// )

//####################################################################################

//CRAYFISH GUN MOD RECIPES

// e.remove({output: "cgm:missile"})

// e.recipes.create.mechanical_crafting( "cgm:missile", [
//     '  H  ',
//     ' APA ',
//     ' APA ',
//     'AAGAA'
// ], {
//     H: "createbigcannons:he_shell",
//     A: "#forge:plates/aluminum",
//     G: "minecraft:gunpowder",
//     P: "minecraft:blaze_powder"

// })

// e.remove({output: "cgm:basic_bullet"})

// let inter = "kubejs:unfinished_basic_bullet"

// e.recipes.create.sequenced_assembly(['8x cgm:basic_bullet'], "#forge:plates/copper", [
//     e.recipes.createPressing(inter, inter),
//     e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"])
// ]).transitionalItem(inter).loops(1)


// e.remove({output: "cgm:advanced_bullet"})

// inter = "kubejs:unfinished_advanced_bullet"

// e.recipes.create.sequenced_assembly(['4x cgm:advanced_bullet'], "#forge:plates/brass", [
//     e.recipes.createPressing(inter, inter),
//     e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"])
// ]).transitionalItem(inter).loops(1)


// e.remove({output: "cgm:shell"})

// inter = "kubejs:unfinished_shell"

// e.recipes.create.sequenced_assembly(['4x cgm:shell'], "#forge:plates/brass", [
//     e.recipes.createDeploying(inter, [inter, "#forge:ingots/plastic"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:gunpowder"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"]),
//     e.recipes.createDeploying(inter, [inter, "#forge:nuggets/lead"]),
//     e.recipes.createPressing(inter, inter)
// ]).transitionalItem(inter).loops(1)

//####################################################################################








})