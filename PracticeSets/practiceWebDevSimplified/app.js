

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


/*********** Express Server Set-Up ***********/
/** Require Express Library **/
const express = require('express');
/** calling espress as a function creates an application to set-up server **/
const app = express();

/** Set-up Get Route - URL **/
app.get('/', (req, res) => {
  console.log('Get Request')

  // res.status(200).send("Message success") // status and send message to user
  // res.status(200).json({ message: "success" }) // status and send message to API client
  res.download('app.js') // prompt user to download current file
  res.render()
})
// server running on Port 3000
app.listen(3000);
console.log(`listening on ${PORT}`)
// console.log(`Server running on Port ${Port}`);
