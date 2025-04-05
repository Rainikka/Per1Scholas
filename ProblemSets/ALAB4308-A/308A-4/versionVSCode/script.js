/******************************************/
/************ Rainikka Corprew ************/
/*************** JavaScript ***************/
/**************** BOM 316.2 ***************/
/******************************************/

/******************************************/
/****** Accessing External API Data *******/
/************ with JavaScript *************/
/************** 04-APR-2025 ***************/

/************* Objectives *****************
 * 
 * 1. Request data from an external API using fetch
 * and Axios.
 * 2. Create an interactive, dynamic webpage that
 * serves content from an external API.
 * 3. Use async/await and Promises to create
 * synchronous logic in asynchronous actions. 
 * 4. Using fetch or Axios, POST data to and DELETE
 * data from an external API.
 * 
 /******************************************/

/************* Body Dressing **************/
const body = document.querySelector("body");

/******************************************/
/************ TESTING AREA ****************/
// document.getElementById('test0');
// test0.innerHTML = "picA";
// document.getElementById('test1');
// test1.innerHTML = "picB";
// document.getElementById('test2');
// test2.innerHTML = "picC";
/******************************************/
/******************************************/

/******** Knowledge Inspiration: YouTube::LearnWebCode ********/
/************* Elements Created ****************/

/*** Fetch Data List of Dog Breeds */
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  buildBreedList(data.message)
}
start();

/**** Create Dropdown Select  Tool ****/
function buildBreedList(breedList) {
  /*** Create option for each breed in data.message ***/
  const selectDiv = document.getElementById('selectDiv');
  const select = selectDiv.appendChild(document.createElement('select'));
  select.id = 'select';
  select.onchange = function () {
    breedProfile(select.value);
  };

  /*** Option0: Select Breed Prompt ***/
  const option0 = select.appendChild(document.createElement('option'));
  option0.id = 'option0';
  option0.textContent = 'Choose Dog Breed';

  /*** Option Elem for Each Breed on Breed List ***/
  Object.keys(breedList).forEach(breed => {
    const option = select.appendChild(document.createElement('option'));
    console.log(breed);
    option.innerHTML = breed;
  });
}

/*** Profile Items for Each Breed of Dog ***/
async function breedProfile(breed) {
  if (breed != "Choose Dog Breed") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const data = await response.json()
    console.log(data);
  }
}
