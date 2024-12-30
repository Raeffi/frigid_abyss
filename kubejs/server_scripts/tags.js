// Listen to item tag event
ServerEvents.tags('item', e => {

    e.add("pneumaticcraft:plastic_sheets", "tfmg:plastic_sheet")
    e.add("forge:ingots/plastic", "pneumaticcraft:plastic")
    e.add("forge:ingots", "pneumaticcraft:plastic")
    e.add("balm:ingots", "pneumaticcraft:plastic")
    e.add("create:create_ingots", "pneumaticcraft:plastic")

    e.add("forge:storage_blocks/coal_coke", "tfmg:coal_coke_block")

    e.add("forge:coal_coke", "tfmg:coal_coke")
    e.add("minecraft:coals", "tfmg:coal_coke")

    e.add("forge:seeds", "create_bic_bit:sunflower_seeds")
})

ServerEvents.tags('worldgen/biome', e => {
    e.add("finitewater:has_infinite_water", "minecraft:river")
    e.add("finitewater:has_infinite_water", "minecraft:frozen_river")

    e.add("finitewater:has_infinite_water", "minecraft:beach")
    e.add("finitewater:has_infinite_water", "minecraft:snowy_beach")
    e.add("finitewater:has_infinite_water", "minecraft:stony_shore")

    e.add("finitewater:has_infinite_water", "minecraft:deep_cold_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:cold_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:deep_frozen_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:frozen_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:deep_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:ocean")
    e.add("finitewater:has_infinite_water", "minecraft:deep_lukewarm_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:lukewarm_ocean")
    e.add("finitewater:has_infinite_water", "minecraft:warm_ocean")

    e.add("finitewater:has_infinite_water", "minecraft:dripstone_caves")
    e.add("finitewater:has_infinite_water", "minecraft:lush_caves")

    e.add("finitewater:has_infinite_water", "minecraft:swamp")
    e.add("finitewater:has_infinite_water", "minecraft:mangrove_swamp")

    e.removeAll("tetra:has_structure/forged_ruins")
    e.add("tetra:has_structure/forged_ruins", "#minecraft:is_mountain")
    e.add("tetra:has_structure/forged_ruins", "#minecraft:is_taiga")
    e.add("tetra:has_structure/forged_ruins", "#forge:is_mountain")
})
