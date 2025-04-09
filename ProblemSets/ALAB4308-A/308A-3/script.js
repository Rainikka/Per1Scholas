/**********************************/
/******** Rainikka Corprew ********/
/*********** JAVASCRIPT ***********/
/************ 308A.3 **************/
/**** Promises, Async & Await *****/
/********** 09-APR-2025 ***********/
/**********************************/

/******************* LAB DESCRIPTION **********************
 * Here's the scenario: you are a developer in a very large 
 * corporation that splits its data across multiple databases.
 * Your job is to assemble this information using a single 
 * function that takes an id parameter and returns Promise 
 * that resolves to an object containing specific data.
 * The object must contain the following information, which 
 * will be gathered from the databases:
 * 
{
  id: number,
    name: string,
      username: string,
        email: string,
          address: {
    street: string,
      suite: string,
        city: string,
          zipcode: string,
            geo: {
      lat: string,
        lng: string
    }
  },
  phone: string,
    website: string,
      company: {
    name: string,
      catchPhrase: string,
        bs: string
  }
}
**********************************************/
/********** Promises, Async & Await  *********/

/*************** Databse Relational Structure ****************/
/***** Primary Key: id, Source: central db, Type: number *****
* db1: id: 1-4
* db2: id: 4 - 7
* db3: id: 8 - 9 
*
/***** Foreign Keys: Data Source, Type, & Order ******
* 0. central db.id
* 1. db.username: string
* 2. vt.name: string
* 3. vt.email: string
*4. vt.address: obj 
* 5. vt.phone: string
* 6. db.website,: string
* 7. db.company. obj
/**************************************************************/

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

// const promise = new Promise((resolve, reject) => {
//   const dbCentralIdPull = Math.floor(Math.random() * 10);
//   console.log(randomNumber);

//   setTimeout(() => {
//     (randomNumber < 4) {
//       resolve('Well Done! You Guessed Right!')
//     } else {
//       reject('Oops! You guessed wrong! Unlucky.')
//     }
//   }, 2000);
// });

// promise.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log(error)
// });

const getWeather = async () => {
  try {
    const cityName = document.getElementById('searchBarInput').value;
    const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=cd51884d9897a04d51888d2ca1ef202d`,
      {
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
