
/****** PRACTICE ARRAY METHODS   ******/
// a = 1
// b = 2
// c = 3
// d = 4
// e = 5
// f = 6
// g = 7
// h = 8
// i = 9

const array = ["apricot", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

array.push("inchi"); console.log(`PUSH: array.push("inchi"): ${array}`);
array.pop(); console.log(`POP: array.pop(): ${array}`);
array.unshift("acerola"); console.log(`UNSHIFT: array.unshift("acerola"): ${array}`);
array.shift(); console.log(`SHIFT: array.shift(): ${array} \n`);

array.splice(2, 1); console.log(`SPLICE: array.splice(2, 1): ${array}`);
console.log(`[current array: ${array}]`)
let newArray = array.slice(1, 3); console.log(`SLICE: array.slice(1, 3): ${newArray}`);
console.log(newArray);
console.log(`[current array: ${array}]`);
let anotherArray = ["jackfruit", "kiwi"];
let comboArray =  array.concat(anotherArray); console.log(`CONCAT: array.concat(anotherArray): ${comboArray}`);
let indexing = comboArray.indexOf("jackfruit");
console.log(indexing);
comboArray.unshift("pineapple");
comboArray.push("apple");
console.log(comboArray);
let sortedArray = comboArray.sort();
console.log(sortedArray);
let atArray = comboArray.at(0);
console.log(atArray)
console.log(comboArray)


/*************************************************** */
/*** PROBLEM 1 - *** COMPLETED ***
/** Create the contacts array
let contacts = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor's", "Assistant", 26]; 

/** Create counter variables
let ppl = 0;
let row = 0;

/** Loop and increment by 1 
while (ppl < contacts.length) {
  console.log(contacts[ppl]);
  ppl++;
}
  **/

/*** PROBLEM 2 - *** ***/
let contacts = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor's", "Assistant", 26];



// let i = 0
// let row = [];
// let column = 0;

// for (i = 0; i < contacts.length; i++)
// while(contacts[i] = "\n") {
//   column = "columns" + contacts[i];
//   console.log(column);
//   i++
// } 


/** Requirements
 * Declare a variable that stores the number of columns
 * Expand your code to accept any number of columns
 * Store results in a 2-D array
 *** Each row should be its own array
 *** Each row should be stored in a parent array with the heading row located at 0
 *** Cache this 2-D array in a variable for later use
 */

/********** ARRAYS: FOR EACH ********** */

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

// movies.forEach((movie) => {
// 	console.log(movie);
// });







