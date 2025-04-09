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
* db3: id: 8 - 10
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
// import { central, db1, db2, db3, vault } from "./databases.js";

// function getUserData(id) {
//   const dbs = {
//     db1: db1,
//     db2: db2,
//     db3: db3
//   };
// }


const allClientContacts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error)
  }
}
allClientContacts()

/** https://jsonplaceholder.typicode.com/users/${id} **/