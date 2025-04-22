/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 317.1 **********/
/******************************/
/******************************/
/******** Working With ********/
/******** TypeScript **********/
/******* 21-Aprl-2025 *********/
/************* Objectivesg **************
 * Initialize npm: npm init -y
 * npm i --save-dev typescript
 * In package.json, 
 *  - make sure "main" matches .js file name
 *  - make sure "main" matches .js file name
 *  - create tsc  config file to compile: tsc --init 
 * 
 * 
 * 
 * 
 * Convert an existing JavaScript file into TypeScript.
 * Fix existing but unidentified bugs in JavaScript code
   using TypeScript's editor integration.
 * Write TypeScript code from scratch, including:
 * Classes (with Generics).
 * Methods and Functions.
 * Variables.
 * Test TypeScript code through simple implementations
   and basic console logging
 * ****************************************/
/******* With error checking enabled, fix all of the errors *******/
/*** Within the Vehicle class ***/
// Add appropriate types for all vehicle and method parameters: 
/*** For "status: "started" or "stopped" ***/
// use a union of literals to declare valid status options:
/*** Adjust the Car and MotorCycle classes ***/
/*** Change the printStatus function ***/
//  function to accept a parameter of type Vehicle.
/*** Fix any errors that reveal themselves due to this type check.***/
/*** Fix errors in the output statements below function definitions ***/
class Vehicle {
    constructor(make, model, wheels) {
        this.status = "stopped";
        this.make = make;
        this.model = model;
        this.wheels = wheels;
    }
    start() {
        this.status = "started";
    }
    stop() {
        this.status = "stopped";
    }
}
class Car extends Vehicle {
    constructor(make, model) {
        super(make, model, "four");
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model) {
        super(make, model, 2);
    }
}
function printStatus(vehicle) {
    if (vehicle.status === "running") {
        console.log("The vehicle is running.");
    }
    else {
        console.log("The vehicle is stopped.");
    }
}
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUppercase());
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.mdl);
