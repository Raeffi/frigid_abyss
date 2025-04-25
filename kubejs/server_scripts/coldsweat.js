ServerEvents.tags('block', e => {

    //Tags for temperatures
    e.add('frigid_abyss:campfire', 'decorative_blocks:brazier')
    e.add('frigid_abyss:campfire', 'valhelsia_structures:brazier')
    e.add('frigid_abyss:campfire', 'minecraft:campfire')

    e.add('frigid_abyss:coldcampfire', 'decorative_blocks:soul_brazier')
    e.add('frigid_abyss:coldcampfire', 'valhelsia_structures:soul_brazier')
    e.add('frigid_abyss:coldcampfire', 'minecraft:soul_campfire')

    e.add('frigid_abyss:fire', 'minecraft:fire')
    e.add('frigid_abyss:fire', 'cataclysm:altar_of_fire')
    e.add('frigid_abyss:fire', 'immersiveengineering:storage_uranium')

    e.add('frigid_abyss:magmablocks', 'minecraft:magma_block')
    e.add('frigid_abyss:magmablocks', '#chipped:magma_block')
    e.add('frigid_abyss:magmablocks', 'architects_palette:molten_nether_bricks')

    e.add('frigid_abyss:snow', 'minecraft:snow_block')
    e.add('frigid_abyss:snow', '#chipped:snow_block')
    e.add('frigid_abyss:snow', 'architects_palette:coarse_snow')

    e.add('frigid_abyss:ice', '#minecraft:ice')

    e.add('frigid_abyss:packed_ice', 'minecraft:packed_ice')
    e.add('frigid_abyss:packed_ice', '#chipped:packed_ice')
    e.add('frigid_abyss:packed_ice', 'architects_palette:chiseled_packed_ice' 				)
    e.add('frigid_abyss:packed_ice', 'architects_palette:polished_packed_ice_wall' 		)
    e.add('frigid_abyss:packed_ice', 'architects_palette:polished_packed_ice_stairs' 		)
    e.add('frigid_abyss:packed_ice', 'architects_palette:polished_packed_ice_vertical_slab')
    e.add('frigid_abyss:packed_ice', 'architects_palette:polished_packed_ice_slab' 		)
    e.add('frigid_abyss:packed_ice', 'architects_palette:polished_packed_ice' 				)
    e.add('frigid_abyss:packed_ice', 'architects_palette:packed_ice_pillar' 				)

    e.add('frigid_abyss:blue_ice', 'minecraft:blue_ice')
    e.add('frigid_abyss:blue_ice', '#chipped:blue_ice')
    e.add('frigid_abyss:blue_ice', 'minecraft:powder_snow')
    e.add('frigid_abyss:blue_ice', 'ratatouille:frozen_block')

    e.add('frigid_abyss:cryo_ice', 'enlightened_end:frostburn_ice')

    e.add('frigid_abyss:blazeburner', 'createaddition:liquid_blaze_burner')
    e.add('frigid_abyss:blazeburner', 'create_central_kitchen:blaze_stove')
    e.add('frigid_abyss:blazeburner', 'create:blaze_burner')

    e.add('frigid_abyss:geothermal', 'biomesoplenty:brimstone_fumarole')
    e.add('frigid_abyss:geothermal', 'biomesoplenty:thermal_calcite_vent')
    e.add('frigid_abyss:geothermal', 'scguns:geothermal_vent')
    e.add('frigid_abyss:geothermal', 'scguns:sulfur_vent')

    e.add('frigid_abyss:furnace', 'nethersdelight:blackstone_stove')
    e.add('frigid_abyss:furnace', 'farmersdelight:stove')
    e.add('frigid_abyss:furnace', 'ends_delight:end_stove')
    e.add('frigid_abyss:furnace', 'engineersdecor:small_electrical_furnace')
    e.add('frigid_abyss:furnace', 'engineersdecor:small_lab_furnace')
    e.add('frigid_abyss:furnace', 'mtetm:hellforge')
})

ColdSweatEvents.registries(e => {
    e.addBlockTemperature(0.476, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:campfire")
                .maxEffect(0.8)
                .range(7)
                .state("lit", true)

    )

    e.addBlockTemperature(-0.476, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:coldcampfire")
                .maxEffect(0.8)
                .range(7)
                .state("lit", true)

    )

    e.addBlockTemperature(0.476, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:fire")
                .maxEffect(0.8)
                .range(7)

    )

    e.addBlockTemperature(0.25, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:magmablocks")
                .maxEffect(1)
                .range(3)

    )

    e.addBlockTemperature(0.5, "mc",
        blockTemp =>
            blockTemp.blocks("minecraft:lava_cauldron")
                .maxEffect(1.5)
                .range(7)

    )

    e.addBlockTemperature(-0.01, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:snow")
                .maxEffect(0.5)
                .range(4)

    )

    e.addBlockTemperature(-0.15, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:ice")
                .maxEffect(0.6)
                .range(4)

    )

    e.addBlockTemperature(-0.25, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:packed_ice")
                .maxEffect(1)
                .range(4)

    )

    e.addBlockTemperature(-0.35, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:blue_ice")
                .maxEffect(1.4)
                .range(4)

    )

    e.addBlockTemperature(-2, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:cryo_ice")
                .maxEffect(5)
                .range(4)

    )

    e.addBlockTemperature(1, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:blazeburner","create_enchantment_industry:blaze_enchanter")
                .maxEffect(2)
                .range(4)
                .state("blaze", "seething")

    )
    e.addBlockTemperature(0.8, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:blazeburner","create_enchantment_industry:blaze_enchanter")
                .maxEffect(1.5)
                .range(4)
                .state("blaze", "kindled")

    )
    e.addBlockTemperature(0.6, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:blazeburner")
                .maxEffect(1)
                .range(4)
                .state("blaze", "fading")

    )
    e.addBlockTemperature(0.45, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:blazeburner","create_enchantment_industry:blaze_enchanter")
                .maxEffect(0.8)
                .range(4)
                .state("blaze", "smouldering")

    )

    e.addBlockTemperature(2, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:geothermal")
                .maxEffect(30)
                .range(3)

    )

    e.addBlockTemperature(0.5, "mc",
        blockTemp =>
            blockTemp.blocks("#frigid_abyss:furnace")
                .maxEffect(0.6)
                .range(5)
                .state("lit", true)

    )

    //SPECIAL BLOCKS

    e.addBlockTemperature(0.4, "mc",
        blockTemp =>
            blockTemp.blocks("engineersdecor:small_mineral_smelter")
                .maxEffect(0.6)
                .range(7)
                .state("phase", "1")

    )

    e.addBlockTemperature(0.6, "mc",
        blockTemp =>
            blockTemp.blocks("engineersdecor:small_mineral_smelter")
                .maxEffect(0.8)
                .range(7)
                .state("phase", "2")

    )

    e.addBlockTemperature(0.8, "mc",
        blockTemp =>
            blockTemp.blocks("engineersdecor:small_mineral_smelter")
                .maxEffect(1)
                .range(7)
                .state("phase", "3")

    )

    e.addBlockTemperature(0.3, "mc",
        blockTemp =>
            blockTemp.blocks("jumbofurnace:jumbo_furnace")
                .maxEffect(1)
                .range(5)
                .state("lit", true)

    )

    e.addBlockTemperature(0.25, "mc",
        blockTemp =>
            blockTemp.blocks("tfmg:coke_oven")
                .maxEffect(1)
                .range(5)
                .state("controller_type", ["top_on","middle_on","bottom_on"])

    )

    e.addBlockTemperature(0.08, "mc",
        blockTemp =>
            blockTemp.blocks("immersiveengineering:alloy_smelter")
                .maxEffect(1)
                .range(5)
                .state("active", true)

    )

    e.addBlockTemperature(0.09, "mc",
        blockTemp =>
            blockTemp.blocks("immersiveengineering:advanced_blast_furnace")
                .maxEffect(1.2)
                .range(5)
                .state("active", true)

    )

    e.addBlockTemperature(0.07, "mc",
        blockTemp =>
            blockTemp.blocks("immersiveengineering:blast_furnace")
                .maxEffect(1.1)
                .range(5)
                .state("active", true)

    )

    e.addBlockTemperature(0.05, "mc",
        blockTemp =>
            blockTemp.blocks("immersiveengineering:coke_oven")
                .maxEffect(1)
                .range(5)
                .state("active", true)

    )

    e.addBlockTemperature(0.476, "mc",
        blockTemp =>
            blockTemp.blocks("immersiveengineering:furnace_heater")
                .maxEffect(0.8)
                .range(6)
                .state("active", true)

    )


    e.addBlockTemperature(0.476, "mc",
        blockTemp =>
            blockTemp.blocks("create:lit_blaze_burner")
                .maxEffect(0.8)
                .range(7)
                .state("flame_type", "regular")
    
    )
    

    e.addBlockTemperature(-0.476, "mc",
        blockTemp =>
            blockTemp.blocks("create:lit_blaze_burner")
                .maxEffect(0.8)
                .range(7)
                .state("flame_type", "soul")

    )

})