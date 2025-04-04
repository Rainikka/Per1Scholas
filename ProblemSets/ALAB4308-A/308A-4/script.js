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

/*** Fetches Dog CEO  Data List of Breeds */
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await response.json()
  buildBreedList(data.message)
}
start();

/**** Create Select Dropdown Tool ****/
function buildBreedList(breedList) {
  /*** Create option for each breed in data.message ***/
  const selectDiv = document.getElementById('selectDiv');
  const select = selectDiv.appendChild(document.createElement('select'));
  select.id = 'select';
  select.onchange = function () {
    breedProfile(select.value);
  };

  /*** Option0: Select Brred Prompt ***/
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


/*** Fetches Dog CEO Data List of Breeds */
async function start() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    buildBreedList(data.message);
  } catch (error) {
    console.error("Error fetching breed list:", error);
  }
}
start();

/**** Create Select Dropdown Tool ****/
function buildBreedList(breedList) {
  const selectDiv = document.getElementById('selectDiv');
  const select = document.createElement('select');
  select.id = 'select';
  selectDiv.appendChild(select);

  // Default option
  const defaultOption = document.createElement('option');
  defaultOption.value = "";
  defaultOption.textContent = 'Choose Dog Breed';
  select.appendChild(defaultOption);

  // Add all breeds
  Object.keys(breedList).forEach(breed => {
    const option = document.createElement('option');
    option.value = formatBreedForAPI(breed); // Store API-friendly format in value
    option.textContent = formatBreedForDisplay(breed); // Show pretty name
    select.appendChild(option);
  });

  select.addEventListener('change', function () {
    if (this.value) {
      breedProfile(this.value);
    }
  });
}

/*** Format breed names for API URLs */
function formatBreedForAPI(breed) {
  return breed.toLowerCase().replace(/\s+/g, '');
}

/*** Format breed names for display */
function formatBreedForDisplay(breed) {
  return breed.replace(/([a-z])([A-Z])/g, '$1 $2') // Split camelCase
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letters
}

/*** Fetch images for selected breed */
async function breedProfile(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();

    if (data.status === "success") {
      console.log(`Found ${data.message.length} images for ${breed}`);
      // Process your images here
    } else {
      console.error("API error:", data.message);
    }
  } catch (error) {
    console.error("Error fetching breed images:", error);
  }
}