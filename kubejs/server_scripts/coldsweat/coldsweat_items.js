ColdSweatEvents.registries(e =>
{
    e.addInsulator(insulator =>
        insulator.items("irons_spellbooks:fireward_ring")
        .insulation(0, 999)
        .slot("curio"))
        
    e.addInsulator(insulator =>
        insulator.items("irons_spellbooks:frostward_ring")
        .insulation(999, 0)
        .slot("curio"))
})

//spacesuit 230
//advanced spacesuit 250