/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/*********** SBA 308A ************/
/*********************************/

/*********************************/
/*** API Fetch,Async, & Await ****/
/******** with JavaScript ********/
/********** 08-APR-2025 **********/

/******* Open Weather API Site ********/
// https://home.openweathermap.org

/******* Open Weather API Site ********/
// API key cd51884d9897a04d51888d2ca1ef202d

/******* Example of API Call: ********/
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd51884d9897a04d51888d2ca1ef202d

/*** Knowledge Inspiration: FreedCodeCamp: API for Beginners ***/

/**** Accessing DOM Elements ****/
const body = document.querySelector('body');
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImage = document.getElementById('tempImage');
const desript = document.getElementById('descript');
const tempHigh = document.getElementById('tempHigh');
const tempLow = document.getElementById('tempLow');

/**** Setting Up Date Element  ****/
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate() - 1;
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

/**** Accessing APP Elements ****/
const app = document.getElementById('app');

/*********** TESTING AREA ************/
document.getElementById('test0');
// document.getElementById('test1');
test0.innerHTML = geteWeather();
// test1.innerHTML = picA;

/********** SET UP FUNCTION TO FETCH API DATA **********/
const getWeather = async () => {
  try {
    const weatherDataFetch = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd51884d9897a04d51888d2ca1ef202d', {
      headers: {
        Accept: "application/json"
      }
    });

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData)
  }
  catch (error) {
    console.log(error)
  }
}
getWeather()


/************************************************
 * Dear Customer!
 * 
 * Thank you for subscribing to Free OpenWeatherMap!
 * API key:
 * - Within the next couple of hours, your API key 
 * will be activated and ready to use:
 * 
 * API Key:
 * cd51884d9897a04d51888d2ca1ef202d 
 * 
 * 
 * 
 * - You can later create more API keys on your account  page
 * - Please, always use your API key in each API call
 * 
 * Endpoint:
 * - Please, use the endpoint api.openweathermap.org for
 * your API calls
 * 
 * Example of API call:
 * api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd51884d9897a04d51888d2ca1ef202d
 * 
 * Useful links:
 * - API documentation https://openweathermap.org/api
 * - Details of your plan https://openweathermap.org/price
 * - Please, note that 16 - days daily forecast and
 * History API are not available for Free subscribers
 /*********************************************************/