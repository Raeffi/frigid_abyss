StartupEvents.registry('block', event => {
  let $CrankBlock = Java.loadClass('net.mehvahdjukaar.supplementaries.common.block.blocks.CrankBlock')
  let $Properties = Java.loadClass('net.minecraft.world.level.block.state.BlockBehaviour$Properties')
  let $Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks')

  event.createCustom('kubejs:electrical_box', () =>
    new $CrankBlock($Properties.copy($Blocks.LEVER)))
    .displayName('Electrical Box')
    .tag('minecraft:mineable/pickaxe')
})

StartupEvents.registry('item', event => {
  let $BlockItem = Java.loadClass('net.minecraft.world.item.BlockItem')
  let $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

  event.createCustom('kubejs:electrical_box', () =>
    new $BlockItem(Block.getBlock('kubejs:electrical_box'), new $ItemProperties()))
})