console.log(`
/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/********* ALAB 308.4.1 **********/
/*********************************/

/*********************************/
/* Working with Data Collections */
/******** in JavaScript *********/
`)

console.log(`\n/******** PART 1: Refactoring Old Code ********/`)
/******** PART 1: Refactoring Old Code ********/
/****** Accomplish the Following ******/
// Refactor 'Feeling Loopy' code from ALAB 308-31 employing arrays and loops.

/*** Contacts1 array ***/
const contacts = ["\n", "ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor\'s Assistant", 26]; 

const row1 = contacts.slice(1, 5);  console.log(row1);
const row2 = contacts.slice(6, 10);  console.log(row2);
const row3 = contacts.slice(11, 15); console.log(row3);
const row4 = contacts.slice(16, 20); console.log(row4);
const row5 = contacts.slice(21, 25); console.log(row5);


console.log(`\n/******** PART 2: Expanding Functionality ********/`)
/******** PART 2: Expanding Functionality ********/
/*** Requirements
 * Declare a variable that stores the number of columns
 * Expand your code to accept any number of columns
 * Store results in a 2-D array
 *** Each row should be its own array
 *** Each row should be stored in a parent array with the heading row located at 0
 *** Cache this 2-D array in a variable for later use
 ***/

  /****** Index each new line *********/
const lineIndex = [];
let person;
const people = [];

for (let i = 0; i < contacts.length; i++) {
  if (contacts[i] === "\n") {
    lineIndex.push(i);
  }
}
for (let j = 0; j < lineIndex.length; j++) {
  person = contacts.slice(lineIndex[j], lineIndex[j + 1]);
  person.shift();
  console.log(person);
  people.push(person);
}
console.log(people);

/****** Loop Knowledge Inspiration: Medium: Article (1: Loop de Loop & by Jenna Dean & Article (2: Making Coffee with Nested Loops by mesuuu *******/
console.log(`\n/****** Loop Knowledge Inspiration: Medium Articles: (1: Loop de Loop & by Jenna Dean & Article (2: Making Coffee with Nested Loops by mesuuu *******/\n`)


/****************** - - - - - All Is Well Above - - - - - ********************/
/****************************************************************************/

console.log(`\n/******** PART 3: Transforming Data ********/`)
/******** PART 3: Transforming Data  ********/
/****** Accomplish the Following **
 * Create an object where the key of each value is the heading for that value’s column.
 * Convert these keys to all lowercase letters for consistency.
 * Store these objects in an array, in the order that they were originally listed. ****/

console.log(`People Array:`);
console.log(people)

console.log(`\n People Array: Keys & Values Separated`);
const keys = people[0];
const values = people.slice(1);
console.log(`keys:`);
console.log(keys);
console.log(`values:`);
console.log(values);

let person1 = {
  id: 42,
  name: 'Bruce',
  occupation: 'Knight',
  age: 41,
};

let person2 = {
  id: 57,
  name: 'Bob',
  occupation: 'Fry Cook',
  age: 19,
};

let person3 = {
  id: 63,
  name: 'Blaine',
  occupation: 'Quiz Master',
  age: 58,
};

let person4 = {
  id: 98,
  name: 'Bill',
  occupation: "Doctor\s Assistant",
  age: 26,
};

console.log(`\n People Array in Object Form:`);
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

/************* CODE THAT COULD'VE BE WOULDN'T *************/
// const keys = people[0];
// const values = people.slice(1);
// const arr = [];
// let pair = [];

// for (let l = 0; l < keys.length; l++){
//    pair = keys[l].concat(values[l]);
//   console.log(pair)
// }

// console.log(keys);
// console.log(values);
// console.log(pair);

console.log(`\n/******** PART 4: Sort & Manipulating Data ********/`)
/******** PART 3: Transforming Data  ********/
/****** Accomplish the Following **
 * Using array methods, accomplish the following tasks, in order upon the result of Part 3:
 * 1. Remove the last element from the sorted array.
 * 2. Insert the following object at index1:
 * { id: "48", name: "Barry", occupation: "Runner", age: "25" }
 * 3. Add the following object to the end of the array:
 * {id: "7", name: "Bilbo", occupation: "None", age: "111" }
 ****/

const sortedArray =
  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//  1. Remove the last element from the sorted array.
let removedElem = sortedArray.pop(); 

console.log(`Last element removed:`);
console.log(removedElem);
console.log(`Sorted and trimmed array:`);
console.log(sortedArray);

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
person2 = {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
}

let splicedElem = sortedArray.person2;
sortedArray.splice(1, 0, person2); 

console.log(`\nElement spliced in at index 1`);
console.log(person2);
console.log(`Sorted and revised array:`);
console.log(sortedArray);

// 3. Add the following object to the end of the array:
// {id: "7", name: "Bilbo", occupation: "None", age: "111" }

person3 = {
  id: "7",
  name: "Bilbo",
  occupation: "None",
  age: "111",
}
sortedArray.push(person3);

console.log(`\nElement added to the  end of the array`);
console.log(person3);
console.log(`Sorted and revised array:`);
console.log(sortedArray);


console.log(`\n/******** Part 5: Full Circle  ********/`)
/******** Part 5: Full Circle  ********/
/****** Accomplish the Following **

 * As a final task, transform the final set of data back into CSV format. ****/

console.log(`Transform the sorted array into CSV format`)
let arrayCSV = sortedArray.flat();
 arrayCSV = sortedArray.toString();
console.log(arrayCSV);
 


