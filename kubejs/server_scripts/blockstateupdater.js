const RADIUS = 2; // radius in chunks
const LOST_CITIES_DIM = "lostcities:lostcity";
const BANNED_PROPERTIES = ["shape", "north", "south", "east", "west"];
const MIN_Y = 50;
const MAX_Y = 150;

ServerEvents.tick(event => {
  // Run this every 20 ticks (1 second) or adjust timing as needed
  if (event.server.getTickCount() % 1 !== 0) return;

  const level = event.server.getLevel(LOST_CITIES_DIM); // or get main level reference
  const players = event.server.getPlayerList().getPlayers();

  for (const player of players) {

    const playerChunkX = Math.floor(player.getBlockX() / 16);
    const playerChunkZ = Math.floor(player.getBlockZ() / 16);

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

                let stairPositions = [];

                for (let x = chunkX; x < (chunkX + 16); x++) {
                    for (let z = chunkZ; z < (chunkZ + 16); z++) {

                        //console.log(`Operation at ${x}, ${z}`)

                        for (let y = MIN_Y; y <= MAX_Y; y++) {

                            let block = level.getBlock(x, y, z);

                            //console.log(`setting block at ${x}, ${y}, ${z}: ${block.id}`);

                            //level.setBlock(BlockPos(x, y, z), Block.getBlock("minecraft:air").defaultBlockState(), 3);

                            //console.log(`Block check at ${x}, ${y}, ${z}`);
                            //level.setBlock( BlockPos(x, y, z), , 3);

                            if (block.hasTag("minecraft:stairs")) {

                                //level.setBlock( BlockPos(x, y, z), blockToString(block), 3);
                                //block.set( filteredBlock.id, filteredBlock.properties, 3 );

                                let filteredProperties = blockFilterProperties(block);
                                //block.set(block.id,filteredProperties);

                                block.set("minecraft:purpur_stairs",filteredProperties);

                                //level.setBlock(BlockPos(x, y, z), Block.getBlock("minecraft:stone").defaultBlockState(), 19);
                                level.setBlock(BlockPos(x, y, z), block.blockState, 19);
                                //console.log(`Block replaced at ${x}, ${y}, ${z}`);

                                stairPositions.push([x, y, z]); // Save for second pass
                            }
                        }
                    }
                }

                for (let [x, y, z] of stairPositions) {
                    let state = level.getBlock(x, y, z).blockState;
                    level.setBlock(BlockPos(x, y, z), state, 19); // 19 = update neighbors
                }

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

        let value = props[prop];

        filteredProps[prop] = value;

    }
    else
    {

        let selectedPropObject = null;
        for (const propObj of defaultProperties) {
            if (propObj.getName() === prop) {
                selectedPropObject = propObj;
                break;
            }
        }

        filteredProps[prop] = defaultBlockState.getValue(selectedPropObject);
    }
  }

  return filteredProps;
}