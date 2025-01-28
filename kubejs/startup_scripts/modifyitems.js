// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const $UUID = Java.loadClass('java.util.UUID');

ItemEvents.modification(e => {
    
    e.modify(Ingredient.all, item => {
        if (item.maxStackSize > 16){
         item.setMaxStackSize(16) }
        })

    // const temperatureAttributes = (itemname, value) =>  e.modify(itemname, item => {
    //                                                     item.addAttribute("cold_sweat:cold_resistance", $UUID.randomUUID().toString(), itemname, value, 'addition')
    //                                                     item.addAttribute("cold_sweat:heat_resistance", $UUID.randomUUID().toString(), itemname, value, 'addition')
    //                                                     item.attr
    //                                                     })

    // temperatureAttributes('creatingspace:basic_spacesuit_helmet',0.25)
    // temperatureAttributes('creatingspace:copper_oxygen_backtank',0.25)
    // temperatureAttributes('creatingspace:basic_spacesuit_leggings',0.25)
    // temperatureAttributes('creatingspace:basic_spacesuit_boots',0.25)

    // temperatureAttributes('creatingspace:advanced_spacesuit_helmet',0.25)
    // temperatureAttributes('creatingspace:netherite_oxygen_backtank',0.25)
    // temperatureAttributes('creatingspace:advanced_spacesuit_leggings',0.25)
    // temperatureAttributes('creatingspace:advanced_spacesuit_boots',0.25)

    // temperatureAttributes('creatingspace:basic_spacesuit_helmet',0.23)
    // temperatureAttributes('creatingspace:copper_oxygen_backtank',0.23)
    // temperatureAttributes('creatingspace:basic_spacesuit_leggings',0.23)
    // temperatureAttributes('creatingspace:basic_spacesuit_boots',0.23)

    // temperatureAttributes('creatingspace:advanced_spacesuit_helmet',0.24)
    // temperatureAttributes('creatingspace:netherite_oxygen_backtank',0.25)
    // temperatureAttributes('creatingspace:advanced_spacesuit_leggings',0.25)
    // temperatureAttributes('creatingspace:advanced_spacesuit_boots',0.25)
});