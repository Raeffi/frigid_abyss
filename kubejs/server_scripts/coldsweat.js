ServerEvents.tags('block', e => {

    //Tags for temperatures
    e.add('frigid_abyss:campfire', 'decorative_blocks:brazier')
    e.add('frigid_abyss:campfire', 'valhelsia_structures:brazier')
    e.add('frigid_abyss:campfire', 'minecraft:campfire')

    e.add('frigid_abyss:coldcampfire', 'decorative_blocks:soul_brazier')
    e.add('frigid_abyss:coldcampfire', 'valhelsia_structures:soul_brazier')
    e.add('frigid_abyss:coldcampfire', 'minecraft:soul_campfire')

    e.add('frigid_abyss:fire', 'minecraft:fire')

    e.add('frigid_abyss:magmablocks', 'minecraft:magma_block')

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

    e.add('frigid_abyss:cryo_ice', 'enlightened_end:frostburn_ice')
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
})