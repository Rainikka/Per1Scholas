
/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 318 ***********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 16-APR-2025 *********/

/************************************************/
/*************** REGEX VALIDATION ***************/
/**
* ********* Username Regex ****************
*
*
* ************ Email Regex *****************
*
*

/**********************************************************/
/************ Knowledge Inspiration: Geeks4Geeks **********/

/****** Setting Up Express Server Environment ********/

/****** Auxiliary File Set-Up ********
 * Create App Dev Folder to Contain All Files
 * Creare folder called views
 *  server.js file     // file to run all server code
 * .http file to test code for Rest API methods

/*********** Basic Node Set-Up ***********
 *  npm init -y     // initialize node.js for package.json
 * npm i express     // install exprss.js library
 *  npm i --save-dev nodemon     // nodemon as dev
 * dependency: automatically restarts server anytime there
 * are changes to code.
 * In package.json file, replace 
    * "scripts":  "test": "echo\"Error: no test specified\" && exit 1" 
    * "scripts":  "devStart": "nodemon server.js" 
 * npm run devStart      // to test if server is running


/*********** EXPRESS SERVER SET-UP ***********/

/*** Require Express Library ***/

/*** Set-up: Call Express ***/
const express = require('express');
const app = express();

/*** Set-up: EJS Template Engine ***/
app.set("view engine", "ejs")  //app.set("view engine", "pug");

/*** Set-Up: Get Method ***/
app.get('/', (req, res) => {
  console.log('Hero');
  res.render('index', { text: "World" });
});

/*** Export User Router ***/
const userRouter = require('./routes/users')

/*** Linking User Router to Path ***/
app.use('/users', userRouter)

/*** Server Running On LocalHost ***/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});