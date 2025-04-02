/****** PART 1 - Refactoring Feeling Loopy *******/ // *** COMPLETED ***/  
/** Create the contacts array  **/
// const contacts1 = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor\'s Assistant", 26]; 

// const row1 = contacts1.slice(0, 4); console.log(row1);
// const row2 = contacts1.slice(5, 9); console.log(row2);
// const row3 = contacts1.slice(10, 14); console.log(row3);
// const row4 = contacts1.slice(15, 19); console.log(row4);
// const row5 = contacts1.slice(20, 24); console.log(row5);


/****** PART 2 -Expanding Functionality  *******/
/*** Requirements
 * Declare a variable that stores the number of columns
 * Expand your code to accept any number of columns
 * Store results in a 2-D array
 *** Each row should be its own array
 *** Each row should be stored in a parent array with the heading row located at 0
 *** Cache this 2-D array in a variable for later use
 ***/

/*** Contacts2 Array ***/
const contacts2 = ["ID", "Name", "Occupation", "Age", "\n", 42, "Bruce", "Knight", 41, "\n", 57, "Bob", "Fry Cook", 19, "\n", 63, "Blaine", "Quiz Master", 58, "\n", 98, "Bill", "Doctor\'s Assistant", 26];

/** Loop and increment by 1 
while (ppl < contacts.length) {
  console.log(contacts[ppl]);
  ppl++;
}**/

/******* Workable *******/
// let newLineIndex = [];
// let rowIndex;

// for (let i = 0; i < contacts2.length; i++) {
//   if (contacts2[i] === "\n") {
//     newLineIndex.push(i);
//     rowIndex = "row " + newLineIndex.length;
//   } else {
//   }  
// } 

// console.log(newLineIndex)
// console.log(newLineIndex.length)
// console.log(rowIndex)

// let row2Index = 0
// let j = 0;
// while (j <=4) {
//   row2Index = "row" + [j]
//   console.log(row2Index)
//   j++
// }
// console.log(row2Index)

  
/******* Workable 2 *******/
// let newLineIndex = [];

// /*** Index each new line ***/
// for (let i = 0; i < contacts2.length; i++) {
//   if (contacts2[i] === "\n") {
//       newLineIndex.push(i);
//       /*rowIndex =  newLineIndex.length
//       console.log(`row ${newLineIndex.length}: `)  
//       console.log(`row ${rowIndex}: `)  */  
//     } else {
//     }
// }
// newLineIndex.unshift(0)
// console.log(newLineIndex)

// /*** Index each row ***/
// let j = 0;
// let rowIndex = [];
// let row;

// while (j < newLineIndex.length) {
//   contacts2.slice(newlineIndex(j), newlineIndex(j+1))
//   rowIndex.push(j) =  contacts2.slice(newlineIndex(j), newlineIndex(j+1))
//   j++
// }

// console.log(rowIndex)

// let row0 = contacts2.slice(newLineIndex[0], newLineIndex[1])
// let row1 = contacts2.slice(newLineIndex[1], newLineIndex[2])
// let row2 = contacts2.slice(newLineIndex[2], newLineIndex[3])
// let row3 = contacts2.slice(newLineIndex[3], newLineIndex[4])
// let row4 = contacts2.slice(newLineIndex[4], newLineIndex[5])
// console.log(row0)
// console.log(row1)
// console.log(row2)
// console.log(row3)
// console.log(row4)


/******* Workable 2 *******/
let newLineIndex = [];

/*** Index each new line ***/
for (let i = 0; i < contacts2.length; i++) {
  if (contacts2[i] === "\n") {
      newLineIndex.push(i); 
    } else {
    }
}
newLineIndex.unshift(0)
console.log(newLineIndex)

let arr = []

let start = 0;
while (start < newLineIndex.length) {
  arr = contacts2.push(start++);
  console.log(arr)
}

const arrayOfArrays [];
for (let i = 0; i < newLineIndex.length; i++) {
  let array = [];
  for (let j = 0; j < contacts2.length. j++  )

}