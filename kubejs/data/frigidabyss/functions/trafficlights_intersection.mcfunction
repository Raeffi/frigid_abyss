gamerule commandBlockOutput false
#default east
execute if block ~ ~ ~ minecraft:command_block[facing=east] run \
place template frigidabyss:traffic_lights_intersection ~ ~ ~

#west
execute if block ~ ~ ~ minecraft:command_block[facing=west] run \
place template frigidabyss:traffic_lights_intersection ~-13 ~ ~-13

#north
execute if block ~ ~ ~ minecraft:command_block[facing=north] run \
place template frigidabyss:traffic_lights_intersection ~ ~ ~-13

#south
execute if block ~ ~ ~ minecraft:command_block[facing=south] run \
place template frigidabyss:traffic_lights_intersection ~-13 ~ ~