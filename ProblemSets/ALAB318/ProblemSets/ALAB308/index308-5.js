/*****(************************/
/******* Rainikka Corprew *****/
/********* JAVASCRIPT *********/
/********* ALAB 308.5 *********/
/******************************/

/******************************/
/***** Reusable Functions *****/
/****** with JavaScript *******/
/******** 25-MAR-2025 *********/


/********** Part 1: Thinking Functionally ***
 * Write functions that accomplish the following:
 * A. Take an array of numbers and return the sum.
 * B. Take an array of numbers and return the average.
 * C. Take an array of strings and return the longest string.
 * D. Take an array of strings, and a number and return an array of the strings that are longer than the given number.
 * E. Take a number, n, and print every number between 1 and n without using loops. Use recursion.
 * ***/

/***************** Assignment 1A *****************/
// Return the sum of an  array of numbers:

let arrayA = [50, 4, 6, 8, 30]

function sumArray(array) {
  let sum = 0;
  array.forEach(num => {
    sum += num;
  });
  return sum;
}
console.log(sumArray(arrayA));

/***************** Assignment 1B *****************/
// Return the average of an array of numbers:

let arrayB = [80, 85, 90, 0, 100]

function avgArray(array) {
  let sum = 0;
  let count = array.length;
  let average = sum / count;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / count;
}
console.log(avgArray(arrayB));

/***************** Assignment 1C *****************/
// Return the longest string o of an array of strings:

let arrayC = ["mango", "orange", "pineapple", "banana", "maracuja"];
function longWordWinner(array) {
  let letterCount = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > letterCount.length) {
      letterCount = array[i];
    }
  }
  return letterCount;
}
console.log(longWordWinner(arrayC));

/***************** Assignment 1D *****************/
// Return the longest string o of an array of strings:

let arrayD = ["mango", "orange", "pineapple", "banana", "maracuja"];
let luckyNumber = 8;

function letterLimit(array) {
  let moreThanLuck = [];
  array.forEach(word => {
    if (word.length >= luckyNumber) {
      moreThanLuck.push(word);
    }
  });
  return moreThanLuck;
}

console.log(letterLimit(arrayD));

/***************** Assignment 1 *****************/
// Take number n and print every number from 1 to n without using loops. Use recursion
/**** Confusion: Aren't loops  recursion  -- Stumped a bit on how to accomplish this task without a loopedy-loop. ****/

/********** Part 2: Thinking Methodically ***
 * Write functions that accomplish the following:
 * A. Sort the array by age.
 * B. Filter the array to remove entries with an age greater than 50.
 * C. Map the array to change the “occupation” key to “job” 
 * D Increment every age by 1 
 * E. Use the reduce method to calculate the sum of the ages.
 * F. Use the sum of ages' result to calculate the average age.

/******* Knowledge Inspiration form Example Given in Article On FreeCodeCamp *********/

/***************** Assignment 2A *****************/
// A. Sort the array by age:
const peoplePeople = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
]
let sortedByAge = peoplePeople.sort((ageStart, ageEnd) => ageStart.age - ageEnd.age);
console.log(sortedByAge);

/***************** Assignment 2B *****************/
// B. Filter array to remove ages greater than 50.
let ageLssThan50 = peoplePeople.filter(people =>
  people.age <= 50);
console.log(ageLssThan50);

/***************** Assignment 2C *****************/
// C. Map array to change the “occupation” key to “job”.
const jobKeyChange = peoplePeople.map(people => ({
  job: people.occupation,
}));
console.log(jobKeyChange);
console.log(peoplePeople)
/***************** Assignment 2D *****************/
// D. Reduce array to calculate sum of ages.
let sumOfAges = peoplePeople.reduce((sum, peopleAge) =>
  sum + Number(peopleAge.age), 0);
console.log(sumOfAges);

/***************** Assignment 2E *****************/
// E. Usee the above result to calculate the average age.
let peopleCount = (peoplePeople.length);
let averageAge = sumOfAges / peopleCount;
console.log(averageAge);

