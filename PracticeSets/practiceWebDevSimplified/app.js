
/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 318 ***********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 16-APR-2025 *********/

/**********************************************************/
/*************** EXPRESS SERVER APPLICATION ***************/

/**********************************************************/
/************ Knowledge Inspiration: Geeks4Geeks **********/

/****** Setting Up Express Server Environment ********/

/****** Auxiliary File Set-Up ********
 * Create App Dev Folder to Contain All Files
 * Creare folder called views
 *  server.js file     // file to run all server code
 * .http file to test code for Rest API methods

/*********** Basic Node Set-Up ***********
 * npm init -y     // initialize node.js for package.json
 * npm i express     // install exprss.js library
 * npm i --save-dev nodemon     // nodemon as dev
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

/*** Set-Up: Static Middleware & Folder ***/
app.use(express.static('static'))

/*** Set-Up: Middleware for Encoded Form Inputs ***/
app.use(express.urlencoded({ extended: true }))

/*** Set-Up: Middleware for Parsing JSON ***/
app.use(express.json())

/*** Set-up: EJS Template Engine ***/
app.set("view engine", "ejs")  //app.set("view engine", "pug");

// /*** Set-Up: Initial Get Method ***/
// app.get('/', (req, res) => {
//   console.log("We don't need another hero");
//   res.render('index', { text: "World" });
// });

/*** Export User Router & Linking to Path ***/
const userRouter = require('./routes/users')
app.use('/users', userRouter)

/*** Export Post Router & Linking to Path ***/
const postRouter = require('./routes/posts')
app.use('/posts', postRouter)

/*** Server Running On LocalHost ***/
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});