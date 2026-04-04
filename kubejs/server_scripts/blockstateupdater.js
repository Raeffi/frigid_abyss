const RADIUS = 2; // radius in chunks
const LOST_CITIES_DIM = "lostcities:lostcity";
const BANNED_PROPERTIES = ["north", "south", "east", "west", "left", "right"];
const MIN_Y = 50;
const MAX_Y = 150;

const DIRECTION_OFFSETS = {
  north: [0, 0, -1],
  south: [0, 0, 1],
  west: [-1, 0, 0],
  east: [1, 0, 0]
};

const FACING_LEFT = {
  north: 'west',
  south: 'east',
  east: 'north',
  west: 'south'
};

const FACING_RIGHT = {
  north: 'east',
  south: 'west',
  east: 'south',
  west: 'north'
};

const OPPOSITE_FACING = {
  north: 'south',
  south: 'north',
  east: 'west',
  west: 'east'
};

ServerEvents.tick(event => {
  // Run this every 20 ticks (1 second) or adjust timing as needed
  if (event.server.getTickCount() % 20 !== 0) return;

  //DISABLE SCRIPT
  return;

  const level = event.server.getLevel(LOST_CITIES_DIM); // or get main level reference
  const players = event.server.getPlayerList().getPlayers();

  for (const player of players) {

    let playerChunkX = Math.floor(player.getBlockX() / 16);
    let playerChunkZ = Math.floor(player.getBlockZ() / 16);

    //console.log("player chunk x :" + playerChunkX)
    //console.log("player chunk y :" + playerChunkZ)

    for (let dx = -RADIUS; dx <= RADIUS; dx++) {
      for (let dz = -RADIUS; dz <= RADIUS; dz++) {

        let chunkX = playerChunkX + dx;
        let chunkZ = playerChunkZ + dz;

        //console.log("chunk x :" + chunkX)
        //console.log("chunk z :" + chunkZ)

        let chunk = level.getChunk(chunkX, chunkZ);
        if (!chunk) continue;

        let chunkKey = chunkX + "_" + chunkZ;
        let regionKey = chunk.getPos().getRegionX() + "_" + chunk.getPos().getRegionZ();  
        let data = Utils.server.persistentData;  

        if (!data.hasOwnProperty("regions")) {
            data.put("regions", {});
            console.log("!!! INITIALIZE regions !!!");
        }

        let regions = data.get("regions");

        if (!regions.hasOwnProperty(regionKey)) {
            regions[regionKey] = {};
            console.log("!!! ADDED NEW REGION" + regionKey + "!!!");
        }

        if (!regions[regionKey].hasOwnProperty(chunkKey)) {
            regions[regionKey][chunkKey] = false;
        }

        if( regions[regionKey][chunkKey] == false ){
            // Run your stair update logic on this chunk
                let chunkX = chunk.pos.getMinBlockX();
                let chunkZ = chunk.pos.getMinBlockZ();

                let passEven = [];
                let passOdd = [];

                for (let x = chunkX; x < chunkX + 16; x++) {
                    for (let z = chunkZ; z < chunkZ + 16; z++) {
                        for (let y = MIN_Y; y <= MAX_Y; y++) {

                            let block = level.getBlock(x, y, z);
                            if (block.hasTag("minecraft:stairs")) {
                                if ((x + z) % 2 === 0) {
                                    passEven.push([x, y, z]);
                                } else {
                                    passOdd.push([x, y, z]);
                                }
                            }
                        }
                    }
                }

          replaceStairsAt(level, passOdd, event);

          //event.server.scheduleInTicks(40, () => {
            //replaceStairsAt(level, passEven);
          //});

          // Second pass: fine correction (after neighbors are updated)
          // event.server.scheduleInTicks(2, () => {
          //     replaceStairsAt(level, passOdd);
          //     replaceStairsAt(level, passEven);

          //     // Final re-set to ensure blockstates are refreshed
          //     let allStairs = passEven.concat(passOdd);
          //     for (let pos of allStairs) {
          //         let [x, y, z] = pos;
          //         let state = level.getBlock(x, y, z).blockState;
          //         level.setBlock(BlockPos(x, y, z), state, 19);
          //     }
          // });


            regions[regionKey][chunkKey] = true;
        }

        data.put("regions", regions);
      
      }
    }
  };
});

function blockFilterProperties(block) {

let props = block.properties

let defaultBlockState = Block.getBlock(block.id).defaultBlockState();
let defaultProperties = defaultBlockState.getProperties(); // Java Set

let filteredProps = {}

  for (let prop of Object.keys(props)) {
    if (!BANNED_PROPERTIES.includes(prop)) {

        filteredProps[prop] = props[prop];

    }
    else
    {
        /*
        let selectedPropObject = null;
        for (const propObj of defaultProperties) {
            if (propObj.getName() === prop) {
                selectedPropObject = propObj;
                break;
            }
        }

        filteredProps[prop] = defaultBlockState.getValue(selectedPropObject);
        */
    }
  }

  return filteredProps;
}

function replaceStairsAt(level, list, event) {
  for (let i = 0; i < list.length; i++) {
    let [x, y, z] = list[i];
    let block = level.getBlock(x, y, z);

    if (block.hasTag("minecraft:stairs")) {
        let originalProps = block.properties;

        if (!("facing" in originalProps) || !("half" in originalProps)) {
            //console.warn(Skipping block at ${x},${y},${z} — missing 'facing' or 'half');
            continue;
        }

        let facing = originalProps.facing;
        let half = originalProps.half;
        let shape = calculateStairShape(level, x, y, z, facing, half);

        // Create a clean copy of only valid properties
        let props = {
            facing: facing,
            half: half,
            shape: shape
        };

        let old_block_id = block.id;

        //replace with copycat stairs first
        //placeCopycatStair(level, x, y, z, props, block.id)

        //set original block and replace again
        // block.set(block.id, props);

        //block.set("minecraft:purpur_stairs", props);
        
        //block.set(block.id, props);
        //level.setBlock(BlockPos(x, y, z), block.blockState, 19);
        
        if(block.id != "snowrealmagic:stairs"){
            placeCopycatStair(level,x,y,z,props,block.id)
            
            //event.server.scheduleInTicks(1, () => {
                //refresh block
                block = level.getBlock(x, y, z);
                //set original block
                block.set(old_block_id, props);
                level.setBlock(BlockPos(x, y, z), block.blockState, 19);
            //});
        }

    }
  }
}


function calculateStairShape(level, x, y, z, facing, half) {
  let isSameHalfStair = (block) =>
    block && block.hasTag("minecraft:stairs") &&
    block.properties?.half === half;

  let left = FACING_LEFT[facing];
  let right = FACING_RIGHT[facing];
  let back = OPPOSITE_FACING[facing];

  let frontOffset = DIRECTION_OFFSETS[facing];
  let backOffset = DIRECTION_OFFSETS[back];
  let leftOffset = DIRECTION_OFFSETS[left];
  let rightOffset = DIRECTION_OFFSETS[right];

  let front = level.getBlock(x + frontOffset[0], y, z + frontOffset[2]);
  let backBlock = level.getBlock(x + backOffset[0], y, z + backOffset[2]);
  let leftBlock = level.getBlock(x + leftOffset[0], y, z + leftOffset[2]);
  let rightBlock = level.getBlock(x + rightOffset[0], y, z + rightOffset[2]);

  // === INNER CORNER PRIORITY ===
  if (isSameHalfStair(backBlock)) {
    let b = backBlock.properties.facing;
    if (b === left && isValidInnerCorner(facing, b)) return "inner_left";
    if (b === right && isValidInnerCorner(facing, b)) return "inner_right";
  }

  if (isSameHalfStair(leftBlock)) {
    let lf = leftBlock.properties.facing;
    if (lf === back) return "inner_left";
  }

  if (isSameHalfStair(rightBlock)) {
    let rf = rightBlock.properties.facing;
    if (rf === back) return "inner_right";
  }

  if (isSameHalfStair(backBlock) && isSameHalfStair(leftBlock)) {
    let b = backBlock.properties.facing;
    let lf = leftBlock.properties.facing;
    if (b === left && lf === back) return "inner_left";
  }

  if (isSameHalfStair(backBlock) && isSameHalfStair(rightBlock)) {
    let b = backBlock.properties.facing;
    let rf = rightBlock.properties.facing;
    if (b === right && rf === back) return "inner_right";
  }

  // === OUTER CORNERS (fallback) ===
  if (isSameHalfStair(front)) {
    let f = front.properties.facing;
    if (f === left && isValidOuterCorner(facing, f)) return "outer_left";
    if (f === right && isValidOuterCorner(facing, f)) return "outer_right";
  }

  return "straight";
}



function isValidOuterCorner(currentFacing, neighborFacing) {
  // Outer: in front of you, turning left or right away from your direction
  return neighborFacing !== currentFacing && neighborFacing !== OPPOSITE_FACING[currentFacing];
}

function isValidInnerCorner(currentFacing, neighborFacing) {
  // Inner: behind you or side, turning into your direction (L-shape corner)
  return neighborFacing !== currentFacing && neighborFacing !== OPPOSITE_FACING[currentFacing];
}


function placeCopycatStair(level, x, y, z, props, id) {
    let pos = BlockPos(x, y, z);

    // 1. Set the blockstate
    let block = level.getBlock(x, y, z);
    block.set("copycats:copycat_stairs", props);
    level.setBlock(pos, block.blockState, 3); // flag 3 = update + client

    // 2. Get block entity AFTER it's placed
    let blockEntity = level.getBlockEntity(pos);

    if (blockEntity) {
        let nbt = blockEntity.nbt ?? {};

        nbt.EnableCT = true;

        nbt.Item = {
            id: id,
            Count: 1
        };

        nbt.Material = {
            Name: id
        };

        blockEntity.load(nbt);
    } else {
        console.warn(`⚠ No block entity found at ${x},${y},${z} after placing copycat_stairs.`);
    }
}



