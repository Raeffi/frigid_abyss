// // Forge 1.20.1 — must be in startup_scripts, not server_scripts
// // Prevents flowing water from washing away large door control blocks

// let $FluidPlaceBlockEvent = Java.loadClass(
//   "net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent"
// );

// let PROTECTED_BLOCKS = [
// "g3project_doors_reborn:elevator_door",
//   "g3project_doors_reborn:factory_door1",
//   "g3project_doors_reborn:security_door1",
//   "g3project_doors_reborn:door_3x3",
//   "g3project_doors_reborn:door_3x3_v2",
//   "g3project_doors_reborn:tech_door1",
//   "g3project_doors_reborn:tech_door_glass",
//   "g3project_doors_reborn:silo_door",
//   "g3project_doors_reborn:ship_door",
//   "g3project_doors_reborn:ark",
//   "g3project_doors_reborn:sliding_security_door",
//   "g3project_doors_reborn:lab_door1",
//   "g3project_doors_reborn:lab_door2",
//   "g3project_doors_reborn:lab_door3",
//   "g3project_doors_reborn:lab_door4",
//   "g3project_doors_reborn:lab_door5",
//   "g3project_doors_reborn:lab_door6",
//   "manyideas_doors:big_door_art",
//   "manyideas_doors:big_door_dwarf",
//   "manyideas_doors:big_door_factory",
//   "manyideas_doors:big_door_french",
//   "manyideas_doors:big_door_glass",
//   "manyideas_doors:big_door_laboratory",
//   "manyideas_doors:big_door_pipe",
//   "manyideas_doors:big_door_portcullis",
//   "manyideas_doors:big_door_safe",
//   "manyideas_doors:big_door_terrace",
//   "manyideas_doors:big_door_acacia",
//   "manyideas_doors:big_door_barn",
//   "manyideas_doors:big_door_birch",
//   "manyideas_doors:big_door_crimson",
//   "manyideas_doors:big_door_dark_oak",
//   "manyideas_doors:big_door_darsser",
//   "manyideas_doors:big_door_fairy_tale",
//   "manyideas_doors:big_door_jungle",
//   "manyideas_doors:big_door_oak",
//   "manyideas_doors:big_door_ship",
//   "manyideas_doors:big_door_shiro",
//   "manyideas_doors:big_door_spruce",
//   "manyideas_doors:big_door_warped",
// ];

// ForgeEvents.onEvent($FluidPlaceBlockEvent, event => {
//   try {
//     let id = event.getOriginalState().getBlock().getDescriptionId();
//     console.log("[DoorProtect] fluid tried to replace: " + id);
//     for (let blockId of PROTECTED_BLOCKS) {
//       if (id === "block." + blockId.replace(":", ".")) {
//         event.setCanceled(true);
//         console.log("[DoorProtect] protected: " + id);
//         return;
//       }
//     }
//   } catch (err) {
//     console.error("[DoorProtect] Error: " + err);
//   }
// });


// BlockEvents.modification(event => {
//   event.modify("g3project_doors_reborn:g3_door_3x3", block => {
//     block.waterlogged = true;
//   });
// });