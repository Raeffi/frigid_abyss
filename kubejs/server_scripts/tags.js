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

})