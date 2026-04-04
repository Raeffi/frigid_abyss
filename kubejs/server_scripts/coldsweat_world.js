let addDimensionOffset = (temp, dimension, units) => {
    if (units == null) units = "mc"
    e["addDimensionOffset(double min, double max, String units, String[] dimensions)"](
        temp,
        temp,
        units,
        [dimension]
    )
}

let addDimensionTemperature = (maxTemp, minTemp, dimension, units) => {
    if (units == null) units = "mc"
    e["addDimensionTemperature(double min, double max, String units, String[] dimensions)"](
        minTemp,
        maxTemp,
        units,
        [dimension]
    )
}

let addBiomeTemperature = (maxTemp, minTemp, biome, units) => {
    if (units == null) units = "mc"

    e["addBiomeTemperature(double minTemp, double maxTemp, String units, String[] biomes, double waterTemp)"](
        maxTemp,
        minTemp,
        units,
        [biome],
        temp - 10
    )
}

ColdSweatEvents.registries(e => {

    addDimensionOffset(0.6,"minecraft:the_nether")
    addDimensionOffset(-0.1,"minecraft:the_end")
    addDimensionOffset(-0.3,"minecraft:overworld")
    addDimensionOffset(0.3,"lostcities:lostcity")
    addDimensionOffset(0.3,"sgjourney:lantea")
    addDimensionOffset(0.3,"luminous_depths:luminous_depth")

    addDimensionTemperature(-60,-60,"genesis:great_unknown","C")
    addBiomeTemperature(-60,-60,"genesis:great_unknown","C")

    addBiomeTemperature(53,53,"minecraft:soul_sand_valley","F")
    addBiomeTemperature(58,72,"minecraft:old_growth_birch_forest","F")
    addBiomeTemperature(60,70,"minecraft:river","F")
    addBiomeTemperature(72,84,"minecraft:swamp","F")
    addBiomeTemperature(70,95,"minecraft:savanna","F")
    addBiomeTemperature(76,98,"minecraft:savanna_plateau","F")
    addBiomeTemperature(67,90,"minecraft:windswept_savanna","F")
    addBiomeTemperature(44,62,"minecraft:taiga","F")
    addBiomeTemperature(19,48,"minecraft:snowy_taiga","F")
    addBiomeTemperature(48,62,"minecraft:old_growth_pine_taiga","F")
    addBiomeTemperature(48,62,"minecraft:old_growth_spruce_taiga","F")
    addBiomeTemperature(48,115,"minecraft:desert","F")
    addBiomeTemperature(50,64,"minecraft:stony_shore","F")
    addBiomeTemperature(38,52,"minecraft:snowy_beach","F")
    addBiomeTemperature(24,38,"minecraft:snowy_slopes","F")
    addBiomeTemperature(48,66,"minecraft:windswept_forest","F")
    addBiomeTemperature(15,33,"minecraft:frozen_peaks","F")
    addBiomeTemperature(67,76,"minecraft:warm_ocean","F")
    addBiomeTemperature(56,65,"minecraft:deep_frozen_ocean","F")
    addBiomeTemperature(76,87,"minecraft:jungle","F")
    addBiomeTemperature(76,87,"minecraft:bamboo_jungle","F")
    addBiomeTemperature(84,120,"minecraft:badlands","F")
    addBiomeTemperature(80,108,"minecraft:wooded_badlands","F")
    addBiomeTemperature(88,120,"minecraft:eroded_badlands","F")
    addBiomeTemperature(63,63,"minecraft:deep_dark","F")

    addBiomeTemperature(67,78,"biomesoplenty:bayou","F")
    addBiomeTemperature(62,73,"biomesoplenty:bog","F")
    addBiomeTemperature(56,68,"biomesoplenty:fir_clearing","F")
    addBiomeTemperature(76,87,"biomesoplenty:marsh","F")
    addBiomeTemperature(63,74,"biomesoplenty:wetland","F")
    addBiomeTemperature(64,85,"biomesoplenty:field","F")
    addBiomeTemperature(65,72,"biomesoplenty:ominous_woods","F")
    addBiomeTemperature(44,58,"biomesoplenty:coniferous_forest","F")
    addBiomeTemperature(52,64,"biomesoplenty:seasonal_forest","F")
    addBiomeTemperature(57,78,"biomesoplenty:pumpkin_patch","F")
    addBiomeTemperature(67,80,"biomesoplenty:woodland","F")
    addBiomeTemperature(64,78,"biomesoplenty:mediterranean_forest","F")
    addBiomeTemperature(67,78,"biomesoplenty:dune_beach","F")
    addBiomeTemperature(73,86,"biomesoplenty:rocky_rainforest","F")
    addBiomeTemperature(65,78,"biomesoplenty:old_growth_woodland","F")
    addBiomeTemperature(64,78,"biomesoplenty:forested_field","F")
    addBiomeTemperature(73,86,"biomesoplenty:fungal_jungle","F")
    addBiomeTemperature(57,70,"biomesoplenty:highland","F")
    addBiomeTemperature(54,68,"biomesoplenty:highland_moor","F")
    addBiomeTemperature(58,82,"biomesoplenty:grassland","F")
    addBiomeTemperature(56,78,"biomesoplenty:clover_patch","F")
    addBiomeTemperature(57,70,"biomesoplenty:jade_cliffs","F")
    addBiomeTemperature(72,94,"biomesoplenty:lush_desert","F")
    addBiomeTemperature(67,97,"biomesoplenty:dryland","F")
    addBiomeTemperature(58,68,"biomesoplenty:maple_woods","F")
    addBiomeTemperature(65,72,"biomesoplenty:mystic_grove","F")
    addBiomeTemperature(58,78,"biomesoplenty:orchard","F")
    addBiomeTemperature(66,82,"biomesoplenty:prairie","F")
    addBiomeTemperature(65,80,"biomesoplenty:origin_valley","F")
    addBiomeTemperature(28,48,"biomesoplenty:snowy_coniferous_forest","F")
    addBiomeTemperature(32,51,"biomesoplenty:snowy_fir_clearing","F")
    addBiomeTemperature(32,48,"biomesoplenty:snowy_maple_woods","F")
    addBiomeTemperature(75,75,"biomesoplenty:spider_nest","F")
    addBiomeTemperature(82,95,"biomesoplenty:volcanic_plains","F")
    addBiomeTemperature(94,120,"biomesoplenty:volcano","F")
    addBiomeTemperature(78,95,"biomesoplenty:wooded_wasteland","F")

    addBiomeTemperature(-15,50,"sgjourney:cavum_tenebrae_shattered_crust","C")
})

