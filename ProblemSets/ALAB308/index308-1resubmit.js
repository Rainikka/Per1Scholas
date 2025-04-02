console.log(`/******* 308.1 RESUBMISSION ********/`)

/******* 308.1 RESUBMISSION ********/

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

console.log(`/************ MATH PROBLEM 1 ***************/
/***** Part 1-A : Detailing Criteria ******/`)

/************ MATH PROBLEM 1 ***************/
/***** Part 1-A : Detailing Criteria ******/
// Criteria 1: Four Numbers:
console.log(`Criteria 1: Four Numbers:`);
let a;
let b;
let c;
let d;

console.log(`Criteria 2: None of the numbers can be greater than 25:`);
// Criteria 2: None of the numbers can be greater than 25:
let mustBe4Less25 = a < 25 && b < 25 && c < 25 && d < 25;

console.log(`Criteria 3: Each number must be unique:`);
// Criteria 3: Each number must be unique:
let mustBe4Unique = a != b && a != c && a != d && b != c && b != d && c != d;

console.log(`Criteria 4: Two Numbers Must Be Odd:`);
// Criteria 4: Two Numbers Must Be Odd:
let mustBe2Odd = a % 2 !== 0 && b % 2 !== 0;

console.log(`Criteria 5: All Four Numbers Must Equal 50:`);
// Criteria 5: All Four Numbers Must Equal 50:
let mustBe4Sum50 = a + b + c + d === 50;

console.log(`All Four Criteria Met`);
let all4Criteria = (mustBe4Less25 && mustBe4Unique && mustBe2Odd && mustBe4Sum50);

/******* Part 1-B : Test Cases ************/
/***  Test Case A ***/
a = 15; b = 13; c = 12; d = 10;
console.log(a, b, c, d);
console.log(all4Criteria);
console.log(`Test Case A: ${all4Criteria}`)

/***  Test Case B ***/
a = 15; b = 10; c = 15; d = 10;
console.log(a, b, c, d);
console.log(all4Criteria);
console.log(`Test Case B: ${all4Criteria}`)

/***  Test Case C ***/
a = 25; b = 7; c = 10; d = 8;
console.log(a, b, c, d);
console.log(all4Criteria);
console.log(`Test Case C: ${all4Criteria}`)

/***  Test Case D ***/
a = 11; b = 13; c = 18; d = 8;
console.log(a, b, c, d);
console.log(all4Criteria);
console.log(`Test Case D: ${all4Criteria}`)

/******* Part 1-C : More Tests  ************/
console.log(`Check if all numbers are divisible by 5:`)
//Check if all numbers are divisible by 5:
let all4DivisibleBy5 = (a % 5 === 0 && b % 5 === 0 && c % 5 === 0 && d % 5 === 0);
console.log(all4DivisibleBy5);

console.log(`Check if first number is larger than the last:`)
// Check if first number is larger than the last:
let firstGreaterLast = a > d;
console.log(firstGreaterLast);

console.log(`Subtract first number from second number:`)
// Subtract first number from second number:
let secondMinusFirst = b - a;
console.log(secondMinusFirst);

console.log(`Multiply the result by the third number:`)
// Multiply the result by the third number:
let multiplyResultByLast = secondMinusFirst * c;
console.log(multiplyResultByLast);

console.log(`Find remainder of dividing result by fourth number:`)
// Find remainder of dividing the result by the fourth number:
let findRemainder = multiplyResultByLast % d;
console.log(findRemainder);

console.log(`Change isOver25 calculates to not need the NOT operator (!):`)
// Change isOver25 calculates to not need the NOT operator (!): 
let isOver25 = (a < 25 && b < 25 && c < 25 && d < 25);
console.log(isOver25);


console.log(`/************ MATH PROBLEM 2 ***************/
  /******** Planning A Road Trip ************/`)
/************ MATH PROBLEM 2 ***************/
/******** Planning A Road Trip ************/

// Planning a cross-country road trip!
/******* Defining Variables ********/
const totalDistance = 1500;
const totalBudget = 175;
const fuelPrice = 3;

let tripName;
let tripRateSpeed;
let tripRateFuel;
let tripNote;
let tripTime = Math.round(totalDistance / tripRateSpeed)
let tripGallons = Math.round(totalDistance / tripRateFuel)
let tripCost = Math.round(tripGallons * fuelPrice);
let costVariance = totalBudget - tripCost

/******* Trip Note: Comparing Trip Variables ********/
if (costVariance < 0) {
  tripNote = console.log(`At a rate of speed of ${tripRateSpeed} miles per hour, ${tripName} has a fuel efficiency rate of ${tripRateFuel} gallons per mile, which means that the 1500-mile trip will take ${tripTime} hours, use ${tripGallons} gallons of fue, and cost $${tripCost}. Given the allotted trip budget amount of $${totalBudget}, ${tripName} is over the total budget by $${costVariance}.`);
} else if (costVariance > 0) {
  tripNote = console.log(`At a rate of speed of ${tripRateSpeed} miles per hour, ${tripName} has a fuel efficiency rate of ${tripRateFuel} gallons per mile, which means that the 1500-mile trip will take ${tripTime} hours, use ${tripGallons} gallons of fue, and cost $${tripCost}. Given the allotted trip budget amount of $${totalBudget}, ${tripName} is under the total budget by $${costVariance}.`);
} else {
  tripNote = console.log(`At a rate of speed of ${tripRateSpeed} miles per hour, ${tripName} has a fuel efficiency rate of ${tripRateFuel} gallons per mile, which means that the 1500-mile trip will take ${tripTime} hours, use ${tripGallons} gallons of fue, and cost $${tripCost}. Given the allotted trip budget amount of $${totalBudget}, ${tripName} is equal to the total budget by $${costVariance}.`);
}

/**************************************************************/
/**************************************************************/
// Note: I wanted to use the logical operators below to test the // different cases in both math problems 1 & 2. I will do some more
// research to figure out where my code went awry.

/**************************************************************/
/*********** Math Problem 1: Part 1-B : Test Cases ************/

/******* Part 1-B : Test Cases ************/
// let testCaseA = a == 11 && b === 13 && c === 8 && d === 18;
// let aTest = testCaseA == fitAll4Criteria;
// console.log(`Test Case A: ${aTest}`);

// let testCaseB = a == 15 && b === 13  && c === 12 && d === 10;
// let bTest = testCaseB == fitAll4Criteria;
// console.log(`Test Case B: ${bTest}`);

// let testCaseC = a == 15 && b === 15 && c === 10 && d === 10;
// let cTest = testCaseC == fitAll4Criteria;
// console.log(`Test Case C: ${cTest}`);

// let testCaseD = a == 25 && b === 7 && c === 10 && d === 8;
// let dTest = testCaseD == fitAll4Criteria;
// console.log(`Test Case D: ${dTest}`)

/**************************************************************/
/*********** Math Problem 2: Part 1-B : Test Cases ************/

// let tripA = tripName === “tripA” && tripRateSpeed === 55 && tripRateFuel === 30;

// let tripB = tripName === “tripB” && tripRateSpeed === 60 && tripRateFuel === 28;

// let tripC = tripName === “tripC” && tripRateSpeed === 75 && tripRateFuel === 23;