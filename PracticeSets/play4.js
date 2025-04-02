
/** Khan Academy: Arrays **/
//  https://www.khanacademy.org/computing/computer-programming/programming/arrays/pt/intro-to-arrays

/** REMINDER: Khan's Console.log */
//fill(255, 0, 0);
//text(myFriends[0], 10, 30);
//text(myFriends[1], 10, 80);
//text(myFriends[2], 10, 130);

/** REMINDER: THree Questions to Ask Whenever Making a Loop */
// 1. What do I want to repeat?
// 2. What do I want to change each time?
// 3. How long should we repeat?

/** Code 1: Place More Than One Friend in an Array 
var myFriend = "Sophia";
var myFriends = ["Sophia", "John", "Leif", "Winston"]
**/

/** Code 2:  How to log each friend in a message using .length. 
// let numFriends = 3;
console.log(`I have ${myFriends.length} friends: ${myFriends[0]}, ${myFriends[1]}, ${myFriends[2]}, ${myFriends[3]} are my friends!`)
**/

/** Code 3: Using loops to display each item in an array
 /** Pseudo-Code **/
 // 1. What do I want to repeat?
    // the names in the c.log
// 2. What do I want to change each time?
    // the number of elements in the the loop and the y position
// 3. How long should we repeat?
// until there are ot more friends left in the array

let myFriends = ["Sophia", "John", "Leif", "winston", "Charlie", "James", "Oliver", "Sal"];

/** With While Loop **/

let friendNum = 0; //start off with a counter variable to keep track of where we are in the loop; start with 0 because 0 is the 1st number in the array.

while (friendNum < myFriends.length) // compare the current counter variable (friendNum) to the total length of elements in the the array (myFriends.length)
{
 console.log(myFriends[friendNum], 10, 30); //logging from the myFriend array with the variable friendNum as the index because it is keeping the current count.
  friendNum++ //need to increment the counter (friendNum) by 1 each time otherwise the loop will go on forever in an infinite loop.

  /** Khan text() to print code: 
   * text(myFriends[friendNum], 10, 30 + friendNum*30);
   *    friendNum++;
   * along with each increment of the names in the array, also increment the current y-position of 30 by 30, in order to print each name on a new line. 
  */
}

/** With For Loop **/
for (let friendNum = 0; friendNum < myFriends.length; friendNum++) {
  /* text(myFriends[friendNum], 87, 30 + friendNum*30) //x=position changed to 87 to print both while and for loop results side-by-side */
console.log(myFriends[friendNum], 87, 30 + friendNum * 30)
}

********************
let x = 10;
function example() {
   let x = 20;
   console.log(x);
}
example();
console.log(x);

/*****************/
var y = 1;
function foo() {
   console.log(y);
   var y = 2;
}
foo();

function outer() {
   let count = 0;
   function inner() {
      count += 1;
      return count;
}  
return inner;
}
const increment = outer();
console.log(increment());
console.log(increment());







