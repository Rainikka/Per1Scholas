

/****** Setting Up Express Server Environment ********/

/****** Auxiliary File Set-Up ********
* Create App Dev Folder to Contain All Files
* server.js file     // file to run all server code
* .http file to test code for Rest API methods

/*********** Basic Node Set-Up ***********
* npm init -y     // initialize node.js
* npm i express     // install exprss.js library
* npm i --save-dev nodemon     // nodemon as dev dependency: automatically restarts server 
anytime there are changes to code
* In package.json file, replace 
  * "scripts":  "test": "echo\"Error: no test specified\" && exit 1" 
  * "scripts":  "devStart": "nodemon server.js" 
* npm run devStart      // to test if server is running


/*********** Express Server Set-Up ***********/
/** require express library **/
const express = require('express');
/** calling espress as a function creates an application to set-up server **/
const app = express();
// server running on Port 3000
app.listen(3000);
// console.log(`Server running on Port ${Port}`);
