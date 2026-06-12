ServerEvents.recipes(e => {
    //CAR RECIPES

    e.remove({ id: "car:cable" })
    e.remove({ id: "car:fluid_pipe" })
    e.remove({ id: "car:fluid_extractor" })
    e.remove({ id: "car:iron_stick" })

    //tires with rubber ??

    e.remove({ id: "car:wheel" })

    e.shaped("car:wheel", [// arg 1: output
    ' R ', 
    'RMR', // arg 2: the shape (array of strings)
    ' R '  
    ], {
        M: "immersiveengineering:component_iron", 
        R: "create:belt_connector"
        }
    )

    e.remove({ id: "car:big_wheel" })

    e.shaped("car:big_wheel", [// arg 1: output
    'RRR', 
    'RMR', // arg 2: the shape (array of strings)
    'RRR'  
    ], {
        M: "immersiveengineering:component_iron", 
        R: "create:belt_connector"
        }
    )

    //engon

    e.remove({ id: "car:engine_3_cylinder" })

    e.recipes.create.mechanical_crafting( "car:engine_3_cylinder", [
        'IRRRI',
        'IPPPI',
        'IMMMI',
        'SSSSS'
    ], {
        S: "#forge:plates/steel",
        I: "#forge:ingots/steel",
        R: "tfmg:spark_plug",
        P: "car:engine_piston",
        M: "immersiveengineering:component_iron", 
    })

    e.remove({ id: "car:engine_6_cylinder" })

    e.recipes.create.mechanical_crafting( "car:engine_6_cylinder", [
        'IRRRRRRI',
        'IPPPPPPI',
        'IMMMMMMI',
        'SSSSSSSS'
    ], {
        S: "#forge:plates/steel",
        I: "#forge:ingots/steel",
        R: "tfmg:spark_plug",
        P: "car:engine_piston",
        M: "immersiveengineering:component_iron", 
    })


    e.remove({ id: "car:engine_truck" })

    e.recipes.create.mechanical_crafting( "car:engine_truck", [
        'IIIIIIII',
        'IPPPPPPI',
        'IMMMMMMI',
        'SSSSSSSS'
    ], {
        S: "#forge:plates/steel",
        I: "#forge:ingots/steel",
        P: "car:engine_piston",
        M: "immersiveengineering:component_iron", 
    })

    e.remove({ id: "car:engine_piston" })

    e.shaped("car:engine_piston", [// arg 1: output
    '  L', 
    ' R ', // arg 2: the shape (array of strings)
    'M  '  
    ], {
        I: "#forge:ingots/steel",
        R: "#forge:rods/steel",
        M: "immersiveengineering:component_iron"
        }
    )

    //colored bodies

    //gas station

    e.remove({ id: "car:gas_station" })

    e.recipes.create.mechanical_crafting( "car:gas_station", [
        'SSSS',
        'SDDS',
        'S  S',
        'SPHS',
        'SSSS'
    ], {
        S: "#forge:plates/steel",
        D: "create:display_board",
        P: "create:mechanical_pump",
        H: "create:hose_pulley"
    })

    //battery

    e.remove({ id: "car:battery" })

    e.shaped("car:battery", [// arg 1: output
    'LAL', 
    'PLP', // arg 2: the shape (array of strings)
    'PPP'  
    ], {
        L: "#forge:ingots/lead",
        P: "#forge:ingots/plastic",
        A: "immersiveengineering:redstone_acid_bucket"
        }
    )

    e.remove({ id: "car:dynamo" })

    e.shaped("car:dynamo", [// arg 1: output
    'IRI', 
    'ICI', // arg 2: the shape (array of strings)
    'III'  
    ], {
        R: "#forge:ingots/iron",
        I: "#forge:dusts/redstone",
        C: "immersiveengineering:coil_lv"
        }
    )

    e.remove({ id: "car:generator" })

    e.shaped("car:generator", [// arg 1: output
    'IRI', 
    'EMC', // arg 2: the shape (array of strings)
    'III'  
    ], {
        I: "#forge:ingots/iron",
        R: "#forge:dusts/redstone",
        C: "immersiveengineering:coil_lv",
        M: "immersiveengineering:component_iron",
        E: "car:engine_3_cylinder"
        }
    )

    e.replaceInput(
        {output: "car:oilmill"},
        "minecraft:piston",
        "#design_decor:millstones"
    )

    e.replaceInput(
        {output: "car:blastfurnace"},
        "minecraft:furnace",
        "immersiveengineering:furnace_heater"
    )

    let lada = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        ' SS',
        ' GG',
        'SIS'
        ], {
        S: "#forge:plates/steel",
        G: "#forge:glass_panes",
        I: colorInput
        })
    }

    lada("car:white_suv_body"         , "#forge:dyes/white")
    lada("car:light_gray_suv_body"    , "#forge:dyes/light_gray")
    lada("car:gray_suv_body"          , "#forge:dyes/gray")
    lada("car:black_suv_body"         , "#forge:dyes/black")
    lada("car:brown_suv_body"         , "#forge:dyes/brown")
    lada("car:red_suv_body"           , "#forge:dyes/red")
    lada("car:orange_suv_body"        , "#forge:dyes/orange")
    lada("car:yellow_suv_body"        , "#forge:dyes/yellow")
    lada("car:lime_suv_body"          , "#forge:dyes/lime")
    lada("car:green_suv_body"         , "#forge:dyes/green")
    lada("car:cyan_suv_body"          , "#forge:dyes/cyan")
    lada("car:light_blue_suv_body"    , "#forge:dyes/light_blue")
    lada("car:blue_suv_body"          , "#forge:dyes/blue")
    lada("car:purple_suv_body"        , "#forge:dyes/purple")
    lada("car:magenta_suv_body"       , "#forge:dyes/magenta")
    lada("car:pink_suv_body"          , "#forge:dyes/pink")

    let twingle = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        ' SS',
        'GGG',
        'SIS'
        ], {
        S: "#forge:plates/steel",
        G: "#forge:glass_panes",
        I: colorInput
        })
    }

    twingle("car:white_sport_body"         , "#forge:dyes/white")
    twingle("car:light_gray_sport_body"    , "#forge:dyes/light_gray")
    twingle("car:gray_sport_body"          , "#forge:dyes/gray")
    twingle("car:black_sport_body"         , "#forge:dyes/black")
    twingle("car:brown_sport_body"         , "#forge:dyes/brown")
    twingle("car:red_sport_body"           , "#forge:dyes/red")
    twingle("car:orange_sport_body"        , "#forge:dyes/orange")
    twingle("car:yellow_sport_body"        , "#forge:dyes/yellow")
    twingle("car:lime_sport_body"          , "#forge:dyes/lime")
    twingle("car:green_sport_body"         , "#forge:dyes/green")
    twingle("car:cyan_sport_body"          , "#forge:dyes/cyan")
    twingle("car:light_blue_sport_body"    , "#forge:dyes/light_blue")
    twingle("car:blue_sport_body"          , "#forge:dyes/blue")
    twingle("car:purple_sport_body"        , "#forge:dyes/purple")
    twingle("car:magenta_sport_body"       , "#forge:dyes/magenta")
    twingle("car:pink_sport_body"          , "#forge:dyes/pink")

    let fiat = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        ' SS',
        ' GG',
        'SIS'
        ], {
        S: "#forge:plates/iron",
        G: "#forge:glass_panes",
        I: colorInput
        })
    }

    fiat("car:oak_body"             , "#forge:dyes/light_gray")
    fiat("car:spruce_body"          , "#forge:dyes/green")
    fiat("car:birch_body"           , "#forge:dyes/white")
    fiat("car:jungle_body"          , "#forge:dyes/yellow")
    fiat("car:acacia_body"          , "#forge:dyes/orange")
    fiat("car:dark_oak_body"        , "#forge:dyes/black")
    fiat("car:crimson_body"         , "#forge:dyes/red")
    fiat("car:warped_body"          , "#forge:dyes/light_blue")

    let loaf = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        'SSS',
        'GSG',
        'SIS'
        ], {
        S: "#forge:plates/iron",
        G: "#forge:glass_panes",
        I: colorInput
        })
    }

    loaf("car:big_oak_body"             , "#forge:dyes/light_gray")
    loaf("car:big_spruce_body"          , "#forge:dyes/green")
    loaf("car:big_birch_body"           , "#forge:dyes/white")
    loaf("car:big_jungle_body"          , "#forge:dyes/yellow")
    loaf("car:big_acacia_body"          , "#forge:dyes/orange")
    loaf("car:big_dark_oak_body"        , "#forge:dyes/black")
    loaf("car:big_crimson_body"         , "#forge:dyes/red")
    loaf("car:big_warped_body"          , "#forge:dyes/light_blue")

    let truq = (output, colorInput) => {
        e.remove({output: output})
        e.recipes.create.mechanical_crafting( output, [
            'SS  ',
            'GISS',
            'SOOO'
        ], {
            S: "#forge:plates/steel",
            O: "#forge:ingots/steel",
            G: "#forge:glass_panes",
            I: colorInput
        })
    }

    truq("car:white_transporter_body"         , "#forge:dyes/white")
    truq("car:light_gray_transporter_body"    , "#forge:dyes/light_gray")
    truq("car:gray_transporter_body"          , "#forge:dyes/gray")
    truq("car:black_transporter_body"         , "#forge:dyes/black")
    truq("car:brown_transporter_body"         , "#forge:dyes/brown")
    truq("car:red_transporter_body"           , "#forge:dyes/red")
    truq("car:orange_transporter_body"        , "#forge:dyes/orange")
    truq("car:yellow_transporter_body"        , "#forge:dyes/yellow")
    truq("car:lime_transporter_body"          , "#forge:dyes/lime")
    truq("car:green_transporter_body"         , "#forge:dyes/green")
    truq("car:cyan_transporter_body"          , "#forge:dyes/cyan")
    truq("car:light_blue_transporter_body"    , "#forge:dyes/light_blue")
    truq("car:blue_transporter_body"          , "#forge:dyes/blue")
    truq("car:purple_transporter_body"        , "#forge:dyes/purple")
    truq("car:magenta_transporter_body"       , "#forge:dyes/magenta")
    truq("car:pink_transporter_body"          , "#forge:dyes/pink")

    let container = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        'IPI',
        'PVP',
        'IPI'
        ], {
        V: "create:item_vault",
        P: "#forge:plates/iron",
        I: colorInput
        })
    }

    container("car:white_container"         , "#forge:dyes/white")
    container("car:light_gray_container"    , "#forge:dyes/light_gray")
    container("car:gray_container"          , "#forge:dyes/gray")
    container("car:black_container"         , "#forge:dyes/black")
    container("car:brown_container"         , "#forge:dyes/brown")
    container("car:red_container"           , "#forge:dyes/red")
    container("car:orange_container"        , "#forge:dyes/orange")
    container("car:yellow_container"        , "#forge:dyes/yellow")
    container("car:lime_container"          , "#forge:dyes/lime")
    container("car:green_container"         , "#forge:dyes/green")
    container("car:cyan_container"          , "#forge:dyes/cyan")
    container("car:light_blue_container"    , "#forge:dyes/light_blue")
    container("car:blue_container"          , "#forge:dyes/blue")
    container("car:purple_container"        , "#forge:dyes/purple")
    container("car:magenta_container"       , "#forge:dyes/magenta")
    container("car:pink_container"          , "#forge:dyes/pink")

    let tank = (output, colorInput) => {
        e.remove({output: output})
        e.shaped(output, [
        'ITI',
        'TPT',
        'ITI'
        ], {
        T: "car:tank",
        P: "#forge:plates/iron",
        I: colorInput
        })
    }

    tank("car:white_tank_container"         , "#forge:dyes/white")
    tank("car:light_gray_tank_container"    , "#forge:dyes/light_gray")
    tank("car:gray_tank_container"          , "#forge:dyes/gray")
    tank("car:black_tank_container"         , "#forge:dyes/black")
    tank("car:brown_tank_container"         , "#forge:dyes/brown")
    tank("car:red_tank_container"           , "#forge:dyes/red")
    tank("car:orange_tank_container"        , "#forge:dyes/orange")
    tank("car:yellow_tank_container"        , "#forge:dyes/yellow")
    tank("car:lime_tank_container"          , "#forge:dyes/lime")
    tank("car:green_tank_container"         , "#forge:dyes/green")
    tank("car:cyan_tank_container"          , "#forge:dyes/cyan")
    tank("car:light_blue_tank_container"    , "#forge:dyes/light_blue")
    tank("car:blue_tank_container"          , "#forge:dyes/blue")
    tank("car:purple_tank_container"        , "#forge:dyes/purple")
    tank("car:magenta_tank_container"       , "#forge:dyes/magenta")
    tank("car:pink_tank_container"          , "#forge:dyes/pink")

    //####################################################################################

})