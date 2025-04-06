gamerule commandBlockOutput false
execute if block ~ ~ ~5 minecraft:command_block run function frigidabyss:rails_3split/rails_3split_n
execute if block ~ ~ ~5 railways:track_create_andesite_narrow[shape=cr_o] run function frigidabyss:rails_3split/rails_3split_n
execute if block ~ ~ ~-5 minecraft:command_block run function frigidabyss:rails_3split/rails_3split_s
execute if block ~ ~ ~-5 railways:track_create_andesite_narrow[shape=cr_o] run function frigidabyss:rails_3split/rails_3split_s