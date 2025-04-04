s/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/************ 308A.2 *************/
/*********************************/

/*********************************/
/******* Objects & Arrays ********/
/******** with JavaScript ********/
/********** 04-APR-2025 **********/


/****** --- Knowledge Inspiration: LearnWebCode YouTube --- ******/
/*** Fetches the Dog CEO Data */
// async function start() {
//   const response = await fetch("https://dog.ceo/api/breeds/list/all")
//   const data = await response.json()
//   createBreedList(data.message)
// }
// start();

/*** Create HTML Selection Dropdown Tool */
// function createBreedList(breedList) {
const breed = document.getElementById('breed').innerHTML = `
    <select>
    <option>Choose A Breed</option>
    <option>Boxer</option>
    <option>Bulldog</option>
    <option>Corgi</option>
    <option>Pomeranian</option>
    <option>St. Bernard</option>
  </select>
    `
//