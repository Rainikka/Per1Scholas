
/*****************************/
/****** Rainikka Corprew *****/
/******** JAVASCRIPT *********/
/******* ALAB 308.3.1 ********/
/*****************************/

/*****************************/
/***** Practical Loops *******/
/****** with JavaScript ******/


/******** PART 1: FIZZ BUZZ ***********/
/****** Accomplish the Following ******/
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}

/********* ART 2: PRIME TIME ***********/
/****** Accomplish the Following ******/
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there. 
// As soon as you find the prime number, log that number and exit the loop.

let n = 13;
while (n % 2 != 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
  console.log(n + 1);
  n++;
}

/********** PART 3: FEELING LOOPY **********/
/******* Accomplish the Following *********/
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.” Log each row of data.
// You do not need to format the data, the following works well.
/**  console.log(cell1, cell2, cell3, cell4); **/

/******* You can make the following assumptions: *********/
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.     


console.log(`\n *** This question helps me to understand how information stored in a table can be flattened for easy access and manipulation by javascript use. This problem is beneficial in that it provides a great preview of what is to come. However, as far as me solving it now goes: 
\n\t\ 1. Not sure if I understand what the question is asking of me.
\n\t\ 2. Nor am I sure if I understand what to do, I would know how to do it.`)