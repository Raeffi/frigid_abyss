
    //e.add('vs_eureka:engine', ['DISABLED use Rotation Engine instead'])
// JEIEvents.information(e => {
//     e.addItem('quark:chute', ['Drops items deposited in it (always in the center).'])
//     e.addItem('diamond', 'This is a precious gem.')
//     e.addItem('emerald', 'This is another precious gem.')
//     const items = [{
//             id: 'quark:chute',
//             desc: ['Drops items deposited in it (always in the center).']
//         },
//         {
//             id: 'quark:ender_watcher',
//             desc: ['Gives a redstone signal when looked at.']
//         },
//     ]
//     items.forEach(i => e.addItem(i.id, i.desc))
// })

ClientEvents.highPriorityAssets(e => {

    //function to allow for changing name and description of items
    const rename = (item, newName, descriptionKey, newDescription) => {
      e.add(Item.of(item).item.getDescriptionId(), newName)
      e.add(descriptionKey, newDescription)
    }
    
    // rename cold eye to frost eye and set description
    rename('vs_eureka:engine', "Test", 'item.vs_eureka.engine.description', "Test")
    
})
