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

e.replaceInput(
    {output: "#vs_eureka:ship_helms"},
    "#forge:ingots/gold",
    "create:precision_mechanism"
)

e.replaceInput(
    {output: "#vs_eureka:ship_helms"},
    "#forge:fences/wooden",
    "immersiveengineering:treated_fence"
)

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


e.remove({ id: "pneumaticcraft:explosion_crafting/compressed_iron_block" })
e.remove({ id: "pneumaticcraft:explosion_crafting/compressed_iron_ingot" })
e.remove({ id: "pneumaticcraft:pressure_chamber/compressed_iron_block" })
e.remove({ id: "pneumaticcraft:pressure_chamber/compressed_iron_ingot" })

e.custom({
    type: "pneumaticcraft:explosion_crafting",
    input: {
      tag: "forge:ingots/steel"
    },
    loss_rate: 20,
    results: [
      {
        item: "pneumaticcraft:ingot_iron_compressed"
      }
    ]
  })

e.custom({
    type: "pneumaticcraft:explosion_crafting",
    input: {
      tag: "forge:storage_blocks/steel"
    },
    loss_rate: 20,
    results: [
      {
        item: "pneumaticcraft:compressed_iron_block"
      }
    ]
  })

e.custom(
    {
      type: "pneumaticcraft:pressure_chamber",
      inputs: [
        {
          tag: "forge:ingots/steel"
        }
      ],
      pressure: 2.0,
      results: [
        {
          item: "pneumaticcraft:ingot_iron_compressed"
        }
      ]
    })

e.custom(
    {
      type: "pneumaticcraft:pressure_chamber",
      inputs: [
        {
          tag: "forge:storage_blocks/steel"
        }
      ],
      pressure: 2.0,
      results: [
        {
          item: "pneumaticcraft:compressed_iron_block"
        }
      ]
    })
//####################################################################################

//IE RECIPES

e.recipes.create.mixing("minecraft:tuff", ['#forge:slag',Fluid.lava(500)]).superheated()

e.replaceInput(
    {output: ["immersiveengineering:rs_engineering","immersiveengineering:light_engineering"]},
    "#forge:ingots/copper",
    "create:copper_casing"
  )

  e.shaped("8x immersiveengineering:treated_wood_horizontal", [// arg 1: output
    'WWW', 
    'WCW', // arg 2: the shape (array of strings)
    'WWW'  
    ], {
        W: '#minecraft:planks', 
        C: 'tfmg:creosote_bucket'   
        }
    )

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

//BITTERBALLEN RECIPES

e.remove({output: Fluid.of("create_bic_bit:frying_oil")})

e.recipes.create.compacting(Fluid.of("create_bic_bit:frying_oil", 250 * FluidAmounts.MB), "create_bic_bit:crushed_sunflower_seeds").heated()

//####################################################################################

//CC RECIPES

e.remove({ id: 'computercraft:turtle_normal' })

e.recipes.create.mechanical_crafting( "computercraft:turtle_normal", [
    'SSSSS',
    'SMCME',
    'SMIMS',
    'SRBRS'
], {
    C: "computercraft:computer_normal",
    S: "#forge:plates/iron",
    I: "create:item_vault",
    B: "create:belt_connector",
    R: "create:cogwheel",
    M: "immersiveengineering:component_iron",
    E: "cataclysm:mech_eye"
})

e.remove({ id: 'computercraft:turtle_advanced' })
e.remove({ id: 'computercraft:turtle_advanced_upgrade' })

e.recipes.create.mechanical_crafting( "computercraft:turtle_advanced", [
    'SSSSS',
    'SMCME',
    'SMIMS',
    'SRBRS'
], {
    C: "computercraft:computer_advanced",
    S: "#forge:plates/steel",
    I: "create:item_vault",
    B: "create:belt_connector",
    R: "create:cogwheel",
    M: "immersiveengineering:component_steel",
    E: "cataclysm:mech_eye"
})

e.remove({ id: 'computercraft:computer_normal' })

e.recipes.create.mechanical_crafting( "computercraft:computer_normal", [
    'SSSSS',
    'SPELG',
    'SPELG',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:computer_advanced' })
e.remove({ id: 'computercraft:computer_advanced_upgrade' })

e.recipes.create.mechanical_crafting( "computercraft:computer_advanced", [
    'SSSSS',
    'SPELG',
    'SPELG',
    'SSSSS'
], {
    S: "#forge:plates/steel",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic_adv",
    P: "pneumaticcraft:module_expansion_card",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:speaker' })

e.shaped("2x computercraft:speaker", [// arg 1: output
' C ', 
'FVF', // arg 2: the shape (array of strings)
' C '  
], {
    F: "create:filter", 
    C: "create:andesite_casing",
    V: "create_things_and_misc:vibration_mechanism" 
    }
)

e.remove({ id: 'computercraft:pocket_computer_normal' })

e.recipes.create.mechanical_crafting( "computercraft:pocket_computer_normal", [
    ' GGGGGG ',
    'SPLPELES',
    ' SSSSSS '
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:pocket_computer_advanced' })
e.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })

e.recipes.create.mechanical_crafting( "computercraft:pocket_computer_advanced", [
    ' GGGGGG ',
    'SPLPELES',
    ' SSSSSS '
], {
    S: "#forge:plates/steel",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic_adv",
    P: "pneumaticcraft:module_expansion_card",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:wireless_modem_normal' })

e.recipes.create.mechanical_crafting( "computercraft:wireless_modem_normal", [
    'W   W',
    'SSSSS',
    'SPELS',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:ender_pearl",
    W: "create:redstone_link"
})

e.remove({ id: 'computercraft:wireless_modem_advanced' })

e.recipes.create.mechanical_crafting( "computercraft:wireless_modem_advanced", [
    'W   W',
    'SSSSS',
    'SPELS',
    'SSSSS'
], {
    S: "#forge:plates/steel",
    E: "immersiveengineering:component_electronic_adv",
    P: "pneumaticcraft:module_expansion_card",
    L: "minecraft:ender_eye",
    W: "create:redstone_link"
})

e.remove({ id: 'computercraft:cable' })

e.shaped("6x computercraft:cable", [// arg 1: output
' S ', 
'SRS', // arg 2: the shape (array of strings)
' S '  
], {
    S: "#forge:plates/iron", 
    R: "minecraft:redstone" 
    }
)

e.remove({ id: 'computercraft:wired_modem' })

e.shaped("6x computercraft:wired_modem", [// arg 1: output
' S ', 
'SRS', // arg 2: the shape (array of strings)
'SES'  
], {
    S: "#forge:plates/iron", 
    R: "minecraft:redstone",
    E: "immersiveengineering:component_electronic",
    }
)

e.remove({ id: 'computercraft:monitor_normal' })

e.recipes.create.mechanical_crafting( "computercraft:monitor_normal", [
    'SSSS',
    'SELG',
    'SELG',
    'SSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:monitor_advanced' })

e.recipes.create.mechanical_crafting( "computercraft:monitor_advanced", [
    'SSSS',
    'SELG',
    'SELG',
    'SSSS'
], {
    S: "#forge:plates/steel",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic_adv",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: 'computercraft:printer' })

e.recipes.create.mechanical_crafting( "computercraft:printer", [
    'SSSSS',
    'SRBR ',
    'SBPES',
    'SRBR ',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    B: "create:belt_connector",
    R: "create:cogwheel"
})

e.remove({ id: 'computercraft:disk_drive' })

e.recipes.create.mechanical_crafting( "computercraft:disk_drive", [
    'SSSSS',
    'SP   ',
    'SMBR ',
    'SE   ',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    B: "create:belt_connector",
    R: "create:cogwheel",
    M: "create_new_age:basic_motor"
})

e.remove({ id: 'computer_cartographer:computerized_cartographer_block' })

e.recipes.create.mechanical_crafting( "computer_cartographer:computerized_cartographer", [
    'SSSSS',
    'SECPS',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    C: "minecraft:cartography_table"
})

//####################################################################################

//MEDIA RECIPES

e.remove({ id: "iammusicplayer:music_manager" })

e.recipes.create.mechanical_crafting( "iammusicplayer:music_manager", [
    'SSSS',
    'SPLG',
    'SELG',
    'SSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: "iammusicplayer:cassette_deck" })

e.recipes.create.mechanical_crafting( "iammusicplayer:cassette_deck", [
    'SSSSS',
    'BEJEB',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    J: "minecraft:jukebox",
    B: "supplementaries:speaker_block"
})

e.remove({ id: "iammusicplayer:boombox" })

e.recipes.create.mechanical_crafting( "iammusicplayer:boombox", [
    'SCCCS',
    'BEJEB',
    'SSSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    J: "minecraft:jukebox",
    B: "supplementaries:speaker_block",
    C: "#minecraft:buttons"
})

e.remove({ id: "waterframes:remote" })

e.shaped("waterframes:remote", [// arg 1: output
'SPS', 
'SRS', // arg 2: the shape (array of strings)
'SES'  
], {
    S: "#forge:plates/iron", 
    R: "minecraft:redstone",
    E: "immersiveengineering:component_electronic",
    P: "minecraft:ender_pearl"
    }
)

e.remove({ id: "waterframes:big_tv" })

e.recipes.create.mechanical_crafting( "waterframes:big_tv", [
    'SSSS',
    'SELG',
    'SPLG',
    'SPLG',
    'SELG',
    'SSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: "waterframes:tv" })

e.recipes.create.mechanical_crafting( "waterframes:tv", [
    'SSSS',
    'SELG',
    'SPLG',
    'SSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: "waterframes:frame" })

e.recipes.create.mechanical_crafting( "waterframes:frame", [
    'SSSS',
    'SPLG',
    'SSSS'
], {
    S: "#forge:plates/iron",
    G: "#forge:glass_panes",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp"
})

e.remove({ id: "waterframes:projector" })

e.recipes.create.mechanical_crafting( "waterframes:projector", [
    'SSSS',
    'SELA',
    'SPES',
    'SSSS'
], {
    S: "#forge:plates/iron",
    E: "immersiveengineering:component_electronic",
    P: "pneumaticcraft:printed_circuit_board",
    L: "minecraft:redstone_lamp",
    A: "minecraft:amethyst_shard"
})

//####################################################################################
})