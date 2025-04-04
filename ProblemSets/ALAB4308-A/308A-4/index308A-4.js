/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/************ 308A.2 *************/
/*********************************/

/*********************************/
/******* Objects & Arrays ********/
/******** with JavaScript ********/
/********** 04-APR-2025 **********/

/*** Fetches the Dod CEO Data */
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  createBBreedList(data.message)
}
start();

/*** Create HTML Selection Dropdown Tool */
function createBreedList(breedList) {
  document.getElementById("breed").innerHTML = `
   <select>
      <option>Choose A Breed</option>
      <option>Boxer</option>
      <option>Bulldog</option>
      <option>Corgi</option>
      <option>Pomeranian</option>
      <option>St. Bernard</option>
    </select>`
}