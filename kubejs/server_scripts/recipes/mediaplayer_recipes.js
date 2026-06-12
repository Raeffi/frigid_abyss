ServerEvents.recipes(e => {
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