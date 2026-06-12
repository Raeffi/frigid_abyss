ServerEvents.recipes(e => {
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
})