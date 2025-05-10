gamerule commandBlockOutput false
execute if block ~ ~ ~ minecraft:command_block[facing=east] run place template frigidabyss:traffic_lights_intersection ~ ~ ~
execute if block ~ ~ ~ minecraft:command_block[facing=west] run place template frigidabyss:traffic_lights_intersection ~-13 ~ ~-13
execute if block ~ ~ ~ minecraft:command_block[facing=north] run place template frigidabyss:traffic_lights_intersection ~ ~ ~-13
execute if block ~ ~ ~ minecraft:command_block[facing=south] run place template frigidabyss:traffic_lights_intersection ~-13 ~ ~