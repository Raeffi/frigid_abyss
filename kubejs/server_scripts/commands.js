let setDoor = (block, block_tall, facing, tall, doubledoor, positionX, positionY, positionZ, offsetX, offsetZ, ctx) => {

    if(tall)
    {
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY+2} ${positionZ} ${block_tall}[facing=${facing},hinge=left,open=false,powered=false,third=upper,waterlogged=false]`)
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY+1} ${positionZ} ${block_tall}[facing=${facing},hinge=left,open=false,powered=false,third=middle,waterlogged=false]`)
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY  } ${positionZ} ${block_tall}[facing=${facing},hinge=left,open=false,powered=false,third=lower,waterlogged=false]`)

        if(doubledoor)
        {
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY+2} ${positionZ+offsetZ} ${block_tall}[facing=${facing},hinge=right,open=false,powered=false,third=upper,waterlogged=false]`)
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY+1} ${positionZ+offsetZ} ${block_tall}[facing=${facing},hinge=right,open=false,powered=false,third=middle,waterlogged=false]`)
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY  } ${positionZ+offsetZ} ${block_tall}[facing=${facing},hinge=right,open=false,powered=false,third=lower,waterlogged=false]`)
        }

    }
    else
    {
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY+1} ${positionZ} ${block}[facing=${facing},hinge=left,open=false,powered=false,half=upper,waterlogged=false] replace`)
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY  } ${positionZ} ${block}[facing=${facing},hinge=left,open=false,powered=false,half=lower,waterlogged=false] replace`)

        if(doubledoor)
        {
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY+1} ${positionZ+offsetZ} ${block}[facing=${facing},hinge=right,open=false,powered=false,half=upper,waterlogged=false]`)
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY  } ${positionZ+offsetZ} ${block}[facing=${facing},hinge=right,open=false,powered=false,half=lower,waterlogged=false]`)
        }
    }

}

let setBed = (bed, facing, doublebed, positionX, positionY, positionZ, offsetX, offsetZ, direction, pillowcolor, bedcolor, ctx) => {

    if(offsetX!=0)
    {
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY} ${positionZ} ${bed}[color=${pillowcolor},facing=${facing},part=head] replace`)
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY} ${positionZ+direction} ${bed}[color=${bedcolor},facing=${facing},part=foot] replace`)
    }
    else
    {
        ctx.source.server.runCommandSilent(`setblock ${positionX} ${positionY} ${positionZ} ${bed}[color=${pillowcolor},facing=${facing},part=head] replace`)
        ctx.source.server.runCommandSilent(`setblock ${positionX+direction} ${positionY} ${positionZ} ${bed}[color=${bedcolor},facing=${facing},part=foot] replace`)       
    }

    if(doublebed)
    {
        if(offsetX!=0)
        {
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY} ${positionZ+offsetZ} ${bed}[color=${pillowcolor},facing=${facing},part=head] replace`)
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY} ${positionZ+offsetZ+direction} ${bed}[color=${bedcolor},facing=${facing},part=foot] replace`)
        }
        else
        {
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX} ${positionY} ${positionZ+offsetZ} ${bed}[color=${pillowcolor},facing=${facing},part=head] replace`)
            ctx.source.server.runCommandSilent(`setblock ${positionX+offsetX+direction} ${positionY} ${positionZ+offsetZ} ${bed}[color=${bedcolor},facing=${facing},part=foot] replace`)       
        }
    }

}

ServerEvents.commandRegistry(e => {
    const { commands: Commands, arguments: Arguments} = e

    e.register(
        Commands.literal("spawnRandomCar")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position;
			ctx.source.server.runCommandSilent(`summon car:car ${sourcePosition.x()} ${sourcePosition.y()} ${sourcePosition.z()}`);
            ctx.source.server.runCommandSilent(`setblock ${sourcePosition.x() - 0.5} ${sourcePosition.y() - 0.5} ${sourcePosition.z() - 0.5} minecraft:air`) ;
			return 1;
		})
    ) 

    e.register(
        Commands.literal("setdoor")
        .requires(src => src.hasPermission(2))
        .then(Commands.argument('block', Arguments.BLOCK_STATE.create(e))
        .then(Commands.argument('block_single', Arguments.BLOCK_STATE.create(e))
        .then(Commands.argument('block_tall', Arguments.BLOCK_STATE.create(e))
        .then(Commands.argument('block_single_tall', Arguments.BLOCK_STATE.create(e))
        .executes(ctx => {
            const block = Arguments.BLOCK_STATE.getResult(ctx, 'block').getState().getBlock().id;
            const block_tall = Arguments.BLOCK_STATE.getResult(ctx, 'block_tall').getState().getBlock().id;
            const block_single = Arguments.BLOCK_STATE.getResult(ctx, 'block_single').getState().getBlock().id;
            const block_single_tall = Arguments.BLOCK_STATE.getResult(ctx, 'block_single_tall').getState().getBlock().id;

            let position = ctx.source.position

            let x = position.x()-0.5
            let y = position.y()-0.5
            let z = position.z()-0.5

            let level = ctx.source.level


            let blockpos_cmd = new BlockPos(x,y,z)
            let commandBlock = level.getBlock(blockpos_cmd);

            let facing = commandBlock.properties.get('facing')

            let offsetX = 0;
            let offsetZ = 0;

            if(facing == "south")
            {
                offsetX = -1;
                offsetZ = 0;
            }
            else if(facing == "north")
            {
                offsetX = 1;
                offsetZ = 0;
            }
            else if(facing == "west")
            {
                offsetX = 0;
                offsetZ = -1;
            }
            else
            {
                offsetX = 0;
                offsetZ = 1;
            }

            let blockpos_up1 = new BlockPos(x,y+2,z)
            let blockpos_up2 = new BlockPos(x,y+3,z)
            let blockpos_over1 = new BlockPos(x+offsetX,y+1,z+offsetZ)

            let blockpos_over1_fb1
            let blockpos_over1_fb2

            if(frontBackX)
            {
                blockpos_over1_fb1 = new BlockPos(x+offsetX+1,y+1,z+offsetZ)
                blockpos_over1_fb2 = new BlockPos(x+offsetX-1,y+1,z+offsetZ)
            }
            else
            {
                blockpos_over1_fb1 = new BlockPos(x+offsetX,y+1,z+offsetZ+1)
                blockpos_over1_fb2 = new BlockPos(x+offsetX,y+1,z+offsetZ-1)                
            }
            let block_up1 = level.getBlock(blockpos_up1);
            let block_up2 = level.getBlock(blockpos_up2);
            let block_over1 = level.getBlock(blockpos_over1);

            let block_over1_fb1 = level.getBlock(blockpos_over1_fb1);
            let block_over1_fb2 = level.getBlock(blockpos_over1_fb2);

            let tall = ( block_up1.id == "minecraft:air" && block_up2.id != "minecraft:air" )

            let doubledoor = ( block_over1.id == "minecraft:air" && block_over1_fb1.id == "minecraft:air" && block_over1_fb2.id == "minecraft:air" )

            if( doubledoor )
            {
                setDoor(block, block_tall, facing ,tall, doubledoor, x, y, z, offsetX, offsetZ, ctx)
            }
            else
            {
                setDoor(block_single, block_single_tall, facing ,tall, doubledoor, x, y, z, offsetX, offsetZ, direction, ctx)
            }

            return 1;
        })
        ))))
    )

    e.register(
        Commands.literal("setbed")
        .requires(src => src.hasPermission(2))
        .then(Commands.argument('bed', Arguments.BLOCK_STATE.create(e))
        .then(Commands.argument('pillowcolor', Arguments.COLOR.create(e))
        .then(Commands.argument('bedcolor', Arguments.COLOR.create(e))
        .executes(ctx => {
            const bedblock = Arguments.BLOCK_STATE.getResult(ctx, 'bed');
            const pillowcolor = Arguments.COLOR.getResult(ctx, 'pillowcolor');
            const bedcolor = Arguments.COLOR.getResult(ctx, 'bedcolor');

            let bed = bedblock.getState().getBlock().id

            let position = ctx.source.position

            let x = position.x()-0.5
            let y = position.y()-0.5
            let z = position.z()-0.5

            let level = ctx.source.level

            let blockpos_cmd = new BlockPos(x,y,z)
            let commandBlock = level.getBlock(blockpos_cmd);

            let facing = commandBlock.properties.get('facing')
            let bedfacing

            let offsetX = 0;
            let offsetZ = 0;
            let direction = 0;

            if(facing == "south")
            {
                offsetX = -1;
                offsetZ = 0;
                direction = 1;
                bedfacing = "north"
            }
            else if(facing == "north")
            {
                offsetX = 1;
                offsetZ = 0;
                direction = -1;
                bedfacing = "south"
            }
            else if(facing == "west")
            {
                offsetX = 0;
                offsetZ = -1;
                direction = -1;
                bedfacing = "east"
            }
            else
            {
                offsetX = 0;
                offsetZ = 1;
                direction = 1;
                bedfacing = "west"
            }

            let blockpos_over1 = new BlockPos(x+offsetX,y,z+offsetZ)

            let block_over1 = level.getBlock(blockpos_over1);

            let doublebed = ( block_over1.id == "minecraft:air" )

            setBed(bed, bedfacing, doublebed, x, y, z, offsetX, offsetZ, direction, pillowcolor.getName(), bedcolor.getName(), ctx)

            return 1;
        })
        )))
    )

})