const $Rarity = Java.loadClass("net.minecraft.world.item.Rarity")
const $UnaryOperator = Java.loadClass("java.util.function.UnaryOperator")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
const $Style = Java.loadClass("net.minecraft.network.chat.Style")
const withColorMethod = $Style.EMPTY.class.declaredMethods.filter((method) => method.name.includes("m_131148_"))[0]

function createRarity (/** @type {string} */ name, /** @type {number} */ colorCode) {
  let color = $UtilsJS.makeFunctionProxy("startup", $UnaryOperator, (style) => {
    return withColorMethod.invoke(style, Color.of(colorCode).createTextColorJS())
  })
  return $Rarity["create(java.lang.String,java.util.function.UnaryOperator)"](name, color)
}

// create your rarities here
createRarity("ENDGAME", 0xef0003)

// Listen to item registry event
StartupEvents.registry('item', e => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    // e.create('unfinished_basic_bullet').displayName("Unfinished Basic Bullet")
    // e.create('unfinished_advanced_bullet').displayName("Unfinished Advanced Bullet")
    // e.create('unfinished_shell').displayName("Unfinished Shell")

    e.create('unfinished_iron_component').displayName("Unfinished Iron Mechanical Component")
    e.create('unfinished_steel_component').displayName("Unfinished Steel Mechanical Component")

    e.create('unfinished_hastelloy_component').displayName("Unfinished Hastelloy Mechanical Component")
    e.create('unfinished_tungsten_component').displayName("Unfinished Tungsten Mechanical Component")

    e.create('t1_mechanical_component').displayName("T1 Mechanical Component").rarity("common")
    e.create('t2_mechanical_component').displayName("T2 Mechanical Component").rarity("pity")
    e.create('t3_mechanical_component').displayName("T3 Mechanical Component").rarity("simple")
    e.create('t4_mechanical_component').displayName("T4 Mechanical Component").rarity("advanced")
    e.create('t5_mechanical_component').displayName("T5 Mechanical Component").rarity("legendary")
    e.create('t6_mechanical_component').displayName("T6 Mechanical Component").rarity("ENDGAME")

    e.create('t1_electrical_component').displayName("T1 Electrical Component").rarity("common")
    e.create('t2_electrical_component').displayName("T2 Electrical Component").rarity("pity")
    e.create('t3_electrical_component').displayName("T3 Electrical Component").rarity("simple")
    e.create('t4_electrical_component').displayName("T4 Electrical Component").rarity("advanced")
    e.create('t5_electrical_component').displayName("T5 Electrical Component").rarity("legendary")
    e.create('t6_electrical_component').displayName("T6 Electrical Component").rarity("ENDGAME")

    e.create('t1_computing_component').displayName("T1 Computing Component").rarity("common")
    e.create('t2_computing_component').displayName("T2 Computing Component").rarity("pity")
    e.create('t3_computing_component').displayName("T3 Computing Component").rarity("simple")
    e.create('t4_computing_component').displayName("T4 Computing Component").rarity("advanced")
    e.create('t5_computing_component').displayName("T5 Computing Component").rarity("legendary")
    e.create('t6_computing_component').displayName("T6 Computing Component").rarity("ENDGAME")

    // e.create('crystal_memory_card').displayName("Crystal Memory Card").rarity("ENDGAME")
    // e.create('crystal_computing_card').displayName("Crystal Computing Card").rarity("ENDGAME")
    // e.create('crystal_storage_card').displayName("Crystal Storage Card").rarity("ENDGAME")

    // If you want to specify a different texture location you can do that too, like this:
    //e.create('test_item_1').texture('mobbo:item/lava') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
    
    // You can chain builder methods as much as you like
    //e.create('test_item_2').maxStackSize(16).glow(true)
    
    // You can specify item type as 2nd argument in create(), some types have different available methods
    //.create('custom_sword', 'sword').tier('diamond').attackDamageBaseline(10.0)
  })

  StartupEvents.registry('fluid', e => {

    e.create('steam')
    .thinTexture(0xf2f2f2)
    .displayName('Steam')
    .noBucket()
    .noBlock()
    .gaseous()
    
  })