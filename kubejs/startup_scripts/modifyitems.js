// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ItemEvents.modification(e => {
    
    e.modify(Ingredient.all, item => {
        if (item.maxStackSize > 16){
         item.setMaxStackSize(16) }
        })

})
