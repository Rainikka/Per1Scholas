/*****************************/
/****** Rainikka Corprew *****/
/******** JAVASCRIPT *********/
/******* ALAB 308.2.1 ********/
/*****************************/

/******************************/
/******* Control Flow *********/
/****** with JavaScript *******/

/******* PROBLEM SET TASK 
Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control
 
system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
*********/

console.log('/****** PART 1: GROWING PLANTS  *******/')

/****** PART 1: GROWING PLANTS  *******/
/*************************************/

/***** Given Parameters ******/
/** Constants **/
const starterPlants = 20;
const pi = 3.14;
const radius = 5;
const totalLandArea = pi * radius ** 2;
const plantSize = 0.8;
const growthFactor = 2;

/** Variables **/
let weekNumber = 0;
let growthCycle = growthFactor ** weekNumber;
let plantCount = starterPlants * growthCycle;
let plantedLandArea = starterPlants * plantSize * growthCycle;
let openLandArea = totalLandArea - plantedLandArea;


console.log('/**** Task 1: Plant Growth for Certain Number of Weeks ****/')

/****  Task 1: Plant Growth for Certain Number of Weeks ****/
// plantCount = (starterPlants * growthCycle)
// plantedLandArea = (starterPlants * plantSize * growthCycle)

switch (weekNumber) {
  case 0:
    console.log(`Week Number: ${weekNumber}`);
    console.log(`Plant Count: ${plantCount}`);
    console.log(`Planted Land Area: ${plantedLandArea}`);
    break;

  case 1:
    console.log(`Week Number: ${weekNumber}`);
    console.log(`Plant Count: ${plantCount}`);;
    console.log(`Planted Land Area: ${plantedLandArea}`);
    break;

  case 2:
    console.log(`Week Number: ${weekNumber}`);

    //plantCount = (starterPlants * growthCycle);
    console.log(`Plant Count: ${plantCount}`);

    // plantedLandArea = (starterPlants * plantSize * growthCycle);
    console.log(`Planted Land Area: ${plantedLandArea}`);
    break;

  case 3:
    console.log(`Week Number: ${weekNumber}`);
    console.log(`Plant Count: ${plantCount}`);
    console.log(`Planted Land Area: ${plantedLandArea}`);
    break;

  default:
    console.log(`Week Number: ${weekNumber}`);
    console.log(`Plant area exceeds the capacity of the land area.`);
    break;
}

console.log('/**** Task 2: Decide Whether to Prune, Monitor, Planted ****/')

/****  Task 2: Decide Whether to Prune, Monitor, Planted ****/

// Condition 1: Prune: Plant Area > 80% of Total Land Area
// Condition 2: Monitor: Plant Area >= 50% & <= 80% of Total Land Area
// Condition 3: Planted: Plant Area < 50 % of Total Land Area


if (plantedLandArea > (totalLandArea * .80)) {
  console.log(`Week Number: ${weekNumber}`);
  console.log(`Plant Count: ${plantCount}`);
  console.log(`Planted Land Area: ${plantedLandArea}`);
  console.log(`Open Land Area: ${openLandArea}`);
  console.log(`Prune: Planted land area greater than 80 % of total land area`);
} else if ((plantedLandArea >= (totalLandArea * .50)) && (plantedLandArea <= (totalLandArea * .80))) {
  console.log(`Week Number: ${weekNumber}`);
  console.log(`Plant Count: ${plantCount}`);
  console.log(`Planted Land Area: ${plantedLandArea}`);
  console.log(`Open Land Area: ${openLandArea}`);
  console.log(`Monitor: Planted land area growing at an acceptable rate`);
} else {
  console.log(`Week Number: ${weekNumber}`);
  console.log(`Plant Count: ${plantCount}`);
  console.log(`Planted Land Area: ${plantedLandArea}`);
  console.log(`Open Land Area: ${openLandArea}`);
  console.log(`Monitor: There is more room land area to plant`);
}

console.log('/**** Task 3: Plant Growth for Different Weeks ****/')

/**** Task 3: Plant Growth for Different Weeks ****/

// Condition: Week 0:: Plant Growth Results  
weekNumber = 0;
console.log(`Week Number: ${weekNumber}`);

console.log(`Total Land Area: ${totalLandArea}`);
console.log(`Plant Size: ${plantSize}`);

console.log(`Plant Count: ${plantCount}`);
console.log(`Planted Land Area: ${plantedLandArea}`);
console.log(`Open Land Area: ${openLandArea}`);

// Condition: Week 3:: Plant Growth Results  
weekNumber = 1;
console.log(`Week Number: ${weekNumber}`);


console.log(`Total Land Area: ${totalLandArea}`);
console.log(`Plant Size: ${plantSize}`);

console.log(`Plant Count: ${plantCount}`);
console.log(`Planted Land Area: ${plantedLandArea}`);
console.log(`Open Land Area: ${openLandArea}`);

// Condition: Week 0:: Plant Growth Results  
weekNumber = 2;
console.log(`Week Number: ${weekNumber}`);

console.log(`Total Land Area: ${totalLandArea}`);
console.log(`Plant Size: ${plantSize}`);

console.log(`Plant Count: ${plantCount}`);
console.log(`Planted Land Area: ${plantedLandArea}`);
console.log(`Open Land Area: ${openLandArea}`);

// Condition: Week 0:: Plant Growth Results  
weekNumber = 0;
console.log(`Week Number: ${weekNumber}`);

console.log(`Total Land Area: ${totalLandArea}`);
console.log(`Plant Size: ${plantSize}`);

console.log(`Plant Count: ${plantCount}`);
console.log(`Planted Land Area: ${plantedLandArea}`);
console.log(`Open Land Area: ${openLandArea}`);


console.log('/****** PART 2: THINKING BIGGER *******/')

/****** PART 2: THINKING BIGGER  *******/
/**************************************/

const starter2Plants = 100;

/** Variables **/
let week2Number = 0;
let growth2Cycle = growthFactor ** week2Number;
let plant2Count = starter2Plants * growth2Cycle;
let planted2LandArea = starter2Plants * plantSize * growth2Cycle;

week2Number = 0;
console.log(`Week Number: ${week2Number}`);
console.log(`Plant Size: ${plantSize}`);

console.log(`Plant Count: ${plant2Count}`);
console.log(`Minimum land area for 100 plants : ${planted2LandArea}`);


console.log('/****** PART 3: ERRORS IN JUDGEMENT *******/')

/****** PART 2: ERRORS IN JUDGEMENT  *******/
/**************************************/

console.log("Just spilled 16oz of H2O all over my table and missed my  computer by a hair.I am making too many errors of judgments in real time. Going to 'throw' myself into a bed and 'try' and 'catch' some sleep eye.")

