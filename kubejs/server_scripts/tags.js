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

    e.add("forge:ores/aluminum", "zps:bauxite")
    e.add("forge:ores/aluminum", "genesis:anorthite")

    e.add("forge:nuggets", "create_wizardry:mithril_nugget")
})

//Block Tag events

ServerEvents.tags('block', e => {

    e.add("lostcities:rotatable", global.blocksWithFacing)//[blockWithFacing,"/trafficcraft:.*/"])

    e.add("car:drivable_blocks","/.*:.*asphalt:*/")

    //e.add(["car:generator","car:gas_station"],"/.*:.*asphalt:*/")

    e.add("minecraft:stairs","/.*:.*stairs.*/")
})

ServerEvents.tags('fluid', e => {
    e.add("forge:oxygen", "kubejs:oxygen")
})

ServerEvents.tags('worldgen/biome', e => {

    e.add("minecraft:is_beach", "minecraft:stony_shore")
    e.add("minecraft:is_beach", "biomesoplenty:dune_beach")

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

    e.removeAll("ae2:has_meteorites")
    //e.add("ae2:has_meteorites", "sgjourney:lantean_deep_ocean")

    e.add("naturalist:has_snake", "sgjourney:rima_cracks")
    e.add("naturalist:has_lizard", "sgjourney:rima_cracks")
    e.add("naturalist:has_firefly", "sgjourney:rima_cracks")
    e.add("naturalist:has_dragonfly", "sgjourney:rima_cracks")
    e.add("naturalist:has_canary", "sgjourney:rima_cracks")
    e.add("naturalist:has_butterfly", "sgjourney:rima_cracks")
    e.add("naturalist:has_alligator", "sgjourney:rima_cracks")

    e.add("scorpions:has_emperor_scorpions", "sgjourney:rima_cracks")
    e.add("scorpions:has_brown_scorpions", "sgjourney:rima_cracks")

    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "abandonedworld:dying_land")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "abandonedworld:eroded_expanse")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "abandonedworld:rotting_forest")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "abandonedworld:the_wasteland")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "biomesoplenty:wasteland")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_deepslate_biomes", "biomesoplenty:wasteland_steppe")

    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:calming_skies")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:brightlands")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:slushlands")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:frostbitten_forest")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:peeking_ocean")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:midday_shore")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:snow_covered_pines")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:deep_peeking_ocean")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:brisk_meadow")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:polar_highland")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:frostbitten_forest_clearing")
    e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_snow_biomes", "blue_skies:brumble_forest")

    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:unorthodox_valley")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:shaded_woodlands")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:crystal_dunes")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:sunset_maple_forest")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:rising_creek")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:moonlit_reservoir")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:crystal_roughs")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:searing_grassland")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:crescent_orchard")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:crescent_orchard_lake")
    // e.add("sgjourney:has_structure/stargate_pedestal/stargate_pedestal_biomes", "blue_skies:crystal_dunes_spikes")

})

ServerEvents.tags('entity_type', e => {
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:buddy")
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:grazer")
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:roach")
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:survey")
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:utility")
    e.add("beyond_oxygen:survives_vacuum", "abandonedworld:watcher")

    e.add("beyond_oxygen:survives_vacuum", "scguns:cog_knight")
    e.add("beyond_oxygen:survives_vacuum", "scguns:cog_minion")
    e.add("beyond_oxygen:survives_vacuum", "scguns:scamp_rocket")
    e.add("beyond_oxygen:survives_vacuum", "scguns:scamp_tank")
    e.add("beyond_oxygen:survives_vacuum", "scguns:scampler")
    e.add("beyond_oxygen:survives_vacuum", "scguns:signal_beacon")
    e.add("beyond_oxygen:survives_vacuum", "scguns:sky_carrier")
    e.add("beyond_oxygen:survives_vacuum", "scguns:supply_scamp")
    e.add("beyond_oxygen:survives_vacuum", "scguns:trauma_unit")
    e.add("beyond_oxygen:survives_vacuum", "scguns:trauma_hook")
    e.add("beyond_oxygen:survives_vacuum", "scguns:raid_flare")
    e.add("beyond_oxygen:survives_vacuum", "scguns:beacon_projectile")

    e.add("beyond_oxygen:survives_vacuum", "corundumguardian:corundum_guardian")
})

// const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

// ServerEvents.tags('entity_type', e => {
//     BuiltInRegistries.ENTITY_TYPE.keySet().forEach(resourceLocation => {
//         e.add('forge:cold_creatures', resourceLocation.toString())
//     })
// })

// const MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
// const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
// const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

// ServerEvents.tick(event => {
//     if (event.server.tickCount % 80 !== 0) return

//     // Look up the modded effect from the registry
//     const effect = BuiltInRegistries.MOB_EFFECT.get(new ResourceLocation('gelaria', 'cold_resistance'))
//     if (!effect) return // safety check in case the mod isn't loaded

//     event.server.getAllLevels().forEach(level => {
//         level.getEntities(null, level.getWorldBorder()).forEach(entity => {
//             entity.addEffect(new MobEffectInstance(effect, 100, 0, false, false, false))
//         })
//     })
// })