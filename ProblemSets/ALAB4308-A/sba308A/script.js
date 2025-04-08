/*********************************/
/******* Rainikka Corprew ********/
/********** JAVASCRIPT ***********/
/*********** SBA 308A ************/
/*********************************/

/*********************************/
/*** API Fetch,Async, & Await ****/
/******** with JavaScript ********/
/********** 08-APR-2025 **********/

/*** Knowledge Inspiration: FreedCodeCamp: API for Beginners ***/

//Open Weather App Key: cd51884d9897a04d51888d2ca1ef202d

/**** Accessing DOM Elements ****/
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

/**** Accessing DOM Elements ****/
const app = document.getElementById('app');

const getWeather - async 
