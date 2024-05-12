// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ClientEvents.lang('en_us', e => {
    const rename = (item, newName) => e.add(Item.of(item).item.getDescriptionId(), newName)
    
    rename("pneumaticcraft:ingot_iron_compressed", "Pressure Treated Steel Ingot")
    rename("pneumaticcraft:compressed_iron_block", "Block of Pressure Treated Steel")

    rename("pneumaticcraft:compressed_iron_helmet"      , "Pressure Treated Steel Helmet")
    rename("pneumaticcraft:compressed_iron_chestplate"  , "Pressure Treated Steel Chestplate")
    rename("pneumaticcraft:compressed_iron_leggings"    , "Pressure Treated Steel Leggings")
    rename("pneumaticcraft:compressed_iron_boots"       , "Pressure Treated Steel Boots")

    rename("pneumaticcraft:drill_bit_compressed_iron"   , "Pressure Treated Steel Drill Bit")
    rename("pneumaticcraft:compressed_iron_gear"        , "Pressure Treated Steel Gear")
    rename("compressedcreativity:compressed_iron_casing", "Pressure Treated Steel Casing")

})

