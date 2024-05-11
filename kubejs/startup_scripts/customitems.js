// Listen to item registry event
StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    e.create('unfinished_basic_bullet').displayName("Unfinished Basic Bullet")
    e.create('unfinished_advanced_bullet').displayName("Unfinished Advanced Bullet")
    e.create('unfinished_shell').displayName("Unfinished Shell")
    e.create('unfinished_iron_component').displayName("Unfinished Iron Mechanical Component")
    e.create('unfinished_steel_component').displayName("Unfinished Steel Mechanical Component")
    
    // If you want to specify a different texture location you can do that too, like this:
    //e.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
    
    // You can chain builder methods as much as you like
    //e.create('test_item_2').maxStackSize(16).glow(true)
    
    // You can specify item type as 2nd argument in create(), some types have different available methods
    //.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)
  })