global.blocksWithFacing = []
BlockEvents.modification(event=>{
    event.modify("*", block => {
        if(block.stateDefinition.getProperty("facing")){
            global.blocksWithFacing.push(block.id)
        }    
    })
})