
/*****************************/
/****** Rainikka Corprew *****/
/******** JAVASCRIPT *********/
/******* ALAB 308.1.1 ********/
/*****************************/

/*****************************/
/**** Data Manipulation ******/
/****** with JavaScript ******/


/****** MATH PROBLEM 1 *******/
/*****************************/

/*
We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.
*/

/***** The Criteria ******/
// Criteria 1: Four Numbers:
let a;
let b;
let c;
let d;

// Criteria 2: None of the numbers can be greater than 25:
let must4Less25 = a < 25 && b < 25 && c < 25 && d < 25;

//Criteria 3: Each number must be unique:
let must4Unique = a != b && a != c && a != d && b != c && b != d && c != d;

// Criteria 4: Two Numbers Must Be Odd:
let must2Odd = a % 2 === 1 && b % 2 === 1;

// Criteria 5: All Four Numbers Must Equal 50:
let must4Sum50 = a + b + c + d === 50;

let all4Criteria = must4Less25 && must4Unique && mst2Odd && must4Sum50;

console.log(all4Criteria)


/***** Check Problem 1 Code ******/

//Check if all numbers are divisible by 5.
let all4DivisibleBy5 = a / 5 && b / 5 && c / 5 && d / 5;
console.log(all4DivisibleBy5);

// Check if the first number is larger than the last:
let firstGreaterLast = a > d;
console.log(firstGreaterLast);

// Subtract first number from second number:
let secondMinusFirst = b - a;
console.log(secondMinusFirst);

//Multiply the result by the third number.
let multiplyResultByLast = secondMinusFirst * c;
console.log(multiplyResultByLast);

//Find the remainder of dividing the result by the fourth number.
let resultByFourth = multiplyResultByLast / d;
console.log(resultByFourth);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
let lessThan25 = a < 25 && b < 25 && c < 25 && d < 25;
console.log(lessThan25);


/****** MATH PROBLEM 2 *******/
/*****************************/

// You are planning a cross-country road trip!
const totalDistance = 1500;
const fuelBudget = 175;
const avgGal = 3;

// Distance 
let rate
let time;
let gallons;
let cost;

let milesPerHr;
let milesPerGal;


/** Criteria 1: Total distance is 1,500 miles **/
console.log(totalTripMiles)

/** Criteria 2: Fuel Efficiency **/
// Fuel budget is $175
console.log(fuelBudgetCost)

/** Criteria 3: Avg Cost Per Gallon **/
// Average cost of fuel is $3 per gallon
console.log(avgCostPerGal)

/****** Criteria 4: Fuel Efficiency ******/
// At 55 miles/hour, you get 30 miles/gallon.
let gal55MileRate = milesPerHr === 55 && milesPerGal === 30;
console.log(milesPerHr)
console.log(milesPerGal)
console.log(gal55MileRate)

// At 60 miles/hour, you get 28 miles/gallon.
let gal60MileRate = milesPerHr === 60 && milesPerGal === 28;
console.log(milesPerHr)
console.log(milesPerGal)
console.log(gal60MileRate)

// At 75 miles/ hour, you get 23 miles/gallon.
let gal75MileRate = milesPerHr === 75 && milesPerGal === 28;
console.log(milesPerHr)
console.log(milesPerGal)
console.log(gal75MileRate)


/******** Task: Set up a program 
 to answer the following questions
/********* Trip Questions *********/

/** Question 1: How many gallons of fuel will you need for the entire trip? */
gallons = distance / milesPerGal;
console.log(gallons);

/** Question 2: Will your budget be enough to cover the fuel expense? **/
cost = gallons * avgFuelCost;
let tripCostCheck = cost < fuelBudget;
console.log(tripCostCheck);

/** Question 3: How long will the trip take, in hours? **/
time = distance / milesPerHr;
console.log(time)

/******* Compare the results ********/
/*** Travel 55 miles/hour & 30 miles/gallon ***/
distance = 1500;
let miles55PerHr = 55;
let miles30PerGal = 30;
let miles55PerHrTime = distance / miles55PerHr
let miles55PerHrGals = distance / miles30PerGal
let miles55PerHrCost = miles55PerHrGals * AvgCostPerGal

console.log(miles55PerHr)
console.log(miles55PerGal)
console.log(miles55PerHrTime)
console.log(miles55PerHrGals)
console.log(miles55PerHrCost)

/*** Travel 60 miles/hour & 28 miles/gallon ***/
distance = 1500;
let miles60PerHr = 60;
let miles28PerGal = 28;
let mile60PerHrTime = distance / miles60PerHr
let miles60PerHrGals = distance / miles28PerGal
let miles60PerHrCost = miles68PerHrGals * AvgCostPerGal

console.log(miles60PerHr)
console.log(miles60PerGal)
console.log(miles60PerHrTime)
console.log(miles60PerHrGals)
console.log(miles60PerHrCost)

/*** Travel 75 miles/hour & 23 miles/gallon ***/
distance = 1500;
let miles60PerHr = 75;
let miles23PerGal = 23;
let mile75PerHrTime = distance / miles75PerHr
let miles75PerHrGals = distance / miles23PerGal
let miles75PerHrCost = miles75PerHrGals * AvgCostPerGal

console.log(miles75PerHr)
console.log(miles75PerGal)
console.log(miles75PerHrTime)
console.log(miles75PerHrGals)
console.log(milesPerHrCost)

/***** Which makes the most sense for the trip? *****/
//  75 miles per hour at 23 miles per gallon = 20 hours
let lowestTime = console.log(miles75PerHrTime)

// Best cost: 55 miles per hour at 30 miles per gallon = 150 dollars
let lowestCost = console.log(miles55PerHrCost)

// Best for the planet: Neither — less fuel usage = more time on road.

/***** Log the results  using string concatenation or template literals.******/
console.log(`The most cost efficient speed for our trip of 1500 miles and a fuel budget of /$175 is 55 miles per hour at a total trip cost of ${miles55PerHrCost}. The most time efficient speed for our trip of 1500 miles and a fuel budget of /$175 is 75 miles per hour at a total trip time at ${miles75PerHrTime}.`)