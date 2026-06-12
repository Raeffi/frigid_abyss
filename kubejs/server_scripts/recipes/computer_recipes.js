ServerEvents.recipes(e => {
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
})    