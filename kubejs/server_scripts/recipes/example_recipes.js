ServerEvents.recipes(e => {
//IE RECIPES
//####################################################################################

e.custom({
  type: "immersiveengineering:alloy",
  conditions: [
    {
      type: "forge:not",
      value: {
        type: "forge:tag_empty",
        tag: "forge:ingots/brass"
      }
    },
    {
      type: "forge:not",
      value: {
        type: "forge:tag_empty",
        tag: "forge:ingots/zinc"
      }
    }
  ],
  input0: {
    tag: "forge:ingots/copper"
  },
  input1: {
    tag: "forge:ingots/zinc"
  },
  result: {
    base_ingredient: {
      tag: "forge:ingots/gold"
    },
    count: 2
  },
  time: 200
}).id("kubejs:ie_example_alloy");

e.custom({
  type: "immersiveengineering:arc_furnace",
  additives: [
    {
      tag: "forge:dusts/coal_coke"
    }
  ],
  energy: 204800,
  input: {
    tag: "forge:ingots/iron"
  },
  results: [
    {
      tag: "forge:ingots/gold"
    }
  ],
  slag: {
    tag: "forge:slag"
  },
  time: 400
}).id("kubejs:ie_example_arc_furnace");

e.custom({
  type: "immersiveengineering:blast_furnace",
  input: {
    tag: "forge:ingots/iron"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  slag: {
    tag: "forge:slag"
  },
  time: 1200
}).id("kubejs:ie_example_blast_furnace");

e.custom({
  type: "immersiveengineering:blueprint",
  category: "components",
  inputs: [
    {
      tag: "forge:plates/plastic"
    },
    {
      tag: "forge:plates/copper"
    }
  ],
  result: {
    tag: "forge:ingots/gold"
  }
}).id("kubejs:ie_example_workbench");

e.custom({
  type: "immersiveengineering:bottling_machine",
  fluid: {
    amount: 250,
    tag: "minecraft:water"
  },
  input: {
    item: "minecraft:dirt"
  },
  results: [
    {
      tag: "forge:ingots/gold"
    }
  ]
}).id("kubejs:ie_example_bottling");

e.custom({
  type: "immersiveengineering:cloche",
  input: {
    item: "minecraft:red_mushroom"
  },
  render: {
    type: "generic",
    block: "minecraft:red_mushroom"
  },
  results: [
    {
      tag: "forge:ingots/gold"
    }
  ],
  soil: [
    {
      item: "minecraft:mycelium"
    },
    {
      item: "minecraft:podzol"
    }
  ],
  time: 480
}).id("kubejs:ie_example_cloche");

e.custom({
  type: "immersiveengineering:coke_oven",
  creosote: 500,
  input: {
    item: "minecraft:coal"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  time: 1800
}).id("kubejs:ie_example_coke");

e.custom({
  type: "immersiveengineering:crusher",
  energy: 1600,
  input: {
    item: "minecraft:charcoal"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  secondaries: [
    {
      chance: 0.2,
      output: {
        item: "minecraft:gray_dye"
      }
    }
  ]
}).id("kubejs:ie_example_crusher");

e.custom({
  type: "immersiveengineering:fermenter",
  energy: 6400,
  fluid: {
    amount: 250,
    fluid: "immersiveengineering:ethanol"
  },
  input: {
    item: "minecraft:honey_bottle"
  },
  result: {
    tag: "forge:ingots/gold"
  }
}).id("kubejs:ie_example_fermenting");

e.custom({
  type: "immersiveengineering:mixer",
  energy: 3200,
  fluid: {
    amount: 500,
    tag: "minecraft:water"
  },
  inputs: [
    {
      base_ingredient: {
        tag: "forge:sand"
      },
      count: 2
    },
    {
      tag: "forge:gravel"
    },
    {
      tag: "forge:clay"
    }
  ],
  result: {
    amount: 500,
    fluid: "minecraft:lava"
  }
}).id("kubejs:ie_example_mixing");

e.custom({
  type: "immersiveengineering:refinery",
  catalyst: {
    tag: "forge:ingots/gold"
  },
  energy: 80,
  input0: {
    amount: 8,
    tag: "forge:plantoil"
  },
  input1: {
    amount: 8,
    tag: "forge:ethanol"
  },
  result: {
    amount: 16,
    fluid: "minecraft:lava"
  }
}).id("kubejs:ie_example_refining");

e.custom({
  type: "immersiveengineering:sawmill",
  energy: 1600,
  input: {
    item: "minecraft:crimson_hyphae"
  },
  result: {
    count: 6,
    tag: "forge:ingots/gold"
  },
  secondaries: [
    {
      output: {
        tag: "forge:dusts/wood"
      },
      stripping: true
    },
    {
      output: {
        tag: "forge:dusts/wood"
      },
      stripping: false
    }
  ],
  stripped: {
    item: "minecraft:stripped_crimson_hyphae"
  }
}).id("kubejs:ie_example_sawing");

e.custom({
  type: "immersiveengineering:squeezer",
  energy: 19200,
  fluid: {
    amount: 120,
    fluid: "immersiveengineering:plantoil"
  },
  input: {
    base_ingredient: {
      tag: "forge:dusts/coal_coke"
    },
    count: 8
  },
  result: {
    tag: "forge:ingots/gold"
  }
}).id("kubejs:ie_example_squeezing");

e.custom({
  type: "immersivetechnology:distiller",
  energy: 10000,
  input: {
    amount: 1000,
    tag: "minecraft:water"
  },
  item_output: {
    chance: 0.5,
    tag: "forge:ingots/gold"
  },
  result: {
    amount: 500,
    fluid: "minecraft:lava"
  },
  time: 20
}).id("kubejs:ie_example_distilling");

e.custom({
  type: "immersivetechnology:solar_melter",
  input: {
    amount: 1000,
    tag: "minecraft:water"
  },
  output: {
    amount: 500,
    fluid: "minecraft:lava"
  },
  requiredTemp: 1000,
  time: 20
}).id("kubejs:ie_example_solar_melting");

e.custom({
  type: "immersivegeology:small_chemical_reactor",
  damage_per_second: 2,
  energy: 25600,
  fluidInputA: {
    amount: 250,
    tag: "minecraft:water"
  },
  fluidInputB: {
    amount: 250,
    tag: "minecraft:lava"
  },
  fluidResult: {
    amount: 432,
    fluid: "minecraft:milk"
  },
  itemInput: {
    tag: "forge:ingots/iron"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  time: 200
}).id("kubejs:ie_example_chemical_reactor");

e.custom({
  type: "immersivegeology:crystallizer",
  energy: 38400,
  fluidResult: {
    amount: 120,
    fluid: "minecraft:water"
  },
  input: {
    amount: 144,
    tag: "minecraft:lava"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  time: 300
}).id("kubejs:ie_example_crystalizer");

e.custom({
  type: "immersivegeology:centrifuge",
  energy: 614400,
  fluid_input: {
    amount: 144,
    tag: "minecraft:water"
  },
  item_output: {
    tag: "forge:ingots/gold"
  },
  primary_fluid_out: {
    amount: 120,
    fluid: "minecraft:lava"
  },
  secondary_fluid_out: {
    amount: 0,
    fluid: "minecraft:empty"
  },
  time: 1200
}).id("kubejs:ie_example_centrifuge");

e.custom({
  type: "immersivegeology:chemical_reactor",
  energy: 51200,
  fluidInputA: {
    amount: 144,
    tag: "minecraft:water"
  },
  fluidInputB: {
    amount: 144,
    tag: "minecraft:lava"  
  },
  fluidInputC: {
    amount: 144,
    tag: "immersivetechnology:distilled_water" 
  },
  fluidResult: {
    amount: 250,
    fluid: "immersivegeology:fluid_chemical_waste"
  },
  itemInput: {
    tag: "forge:ingots/iron"
  },
  result: {
    tag: "forge:ingots/gold"
  },
  time: 200
}).id("kubejs:ie_example_big_chemical_reactor");

e.custom({
  type: "immersivepetroleum:hydrotreater",
  energy: 8000,
  input: {
    amount: 1000,
    tag: "minecraft:water"
  },
  result: {
    amount: 1000,
    fluid: "minecraft:milk" 
  },
  secondary_input: {
    amount: 500,
    tag: "minecraft:lava"
  },
  secondary_result: {
    chance: "1.0",
    count: 5,
    item: "minecraft:gold_ingot"
  },
  time: 100
}).id("kubejs:ie_example_high_pressure_refinery");

//####################################################################################

//CREATE RECIPES
//####################################################################################

e.custom({
  type: "ratatouille:squeezing",
  ingredients: [
    {
      item: "minecraft:iron_ingot"
    },
    {
      amount: 1000,
        fluid: "minecraft:lava"
    }
  ],
  results: [
    {
      item: "minecraft:gold_ingot"
    }
  ]
}).id("kubejs:create_squeezing");


e.custom({
  type: "createaddition:charging",
  input: {
    item: "minecraft:iron_ingot",
    count: 1
  },
  result:{
    item: "minecraft:gold_ingot",
    count: 1
  },
  energy: 2222,
  maxChargeRate: 200
}).id("kubejs:create_charging");

e.custom({
    type:"createaddition:rolling",
    input: {
          item: "minecraft:iron_ingot"
    },
    result: {
        item: "minecraft:gold_ingot",
        count: 2
    }
}).id("kubejs:create_rolling");

//vacuumizing(output[], input[])
e.recipes.vintage.vacuumizing(
    [Fluid.of("minecraft:milk", 10), Fluid.of("minecraft:water", 10)], 
    Fluid.of("minecraft:water", 1000)).processingTime(100).heated().secondaryFluidOutput(2).id("kubejs:create_vacuumizing");
  
//pressurizing(output[], input[])
e.recipes.vintage.pressurizing(
    [Fluid.of("minecraft:milk", 10), Fluid.of("minecraft:water", 10)],
    Fluid.of("minecraft:water", 1000)).processingTime(100).heated().secondaryFluidOutput(2).id("kubejs:create_pressurizing");

//polishing(output[], input)
e.recipes.vintage.polishing(
    "minecraft:diamond",
    "minecraft:coal_block").processingTime(100).speedLimits(3).fragile().id("kubejs:create_polishing");

//vibrating(output[], input)
e.recipes.vintage.vibrating(
    "vintage:steel_spring",
    "minecraft:gravel").processingTime(100).id("kubejs:create_vibrating");

//turning(output[], input)
e.recipes.vintage.turning(
    "vintage:steel_spring",
    "vintage:steel_rod").processingTime(100).id("kubejs:create_turning");

//laser_cutting(output[], input)
e.recipes.vintage.laser_cutting(
    "vintage:steel_spring",
    "vintage:steel_rod").energy(1000).maxChargeRate(10).id("kubejs:create_laser_cutting");

//hammering(output[], input[])
e.recipes.vintage.hammering(
    "vintage:steel_spring",
    "vintage:steel_rod").hammerBlows(10).id("kubejs:create_hammering");

//1 = Convex
//2 = Concave
//3 = W Shaped
//4 = V Shaped
//5 = Custom

//curving(output[], input)
e.recipes.vintage.curving(
    "vintage:vanadium_rod",
    "vintage:vanadium_sheet").mode(1).id("kubejs:create_curving");

//coiling(output[], input)
e.recipes.vintage.coiling(
    "vintage:steel_spring",
    "vintage:steel_rod").processingTime(100).id("kubejs:create_coiling");

//centrifugation(output[], input[])
e.recipes.vintage.centrifugation(
    Fluid.of("create:honey", 500),
    "minecraft:honey_block").processingTime(100).minimalRPM(80).id("kubejs:create_centrifugation");

//####################################################################################
})