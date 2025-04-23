
/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 318 ***********/
/******************************/

/******************************/
/****** EXPRESS SERVER ********/
/******** APPLICATION *********/
/******** 17-APR-2025 *********/


/************ PRE-CODE SET-UP & REQUIREMENTS ************/
/*******************************************************/

/****** GIT & NODE INITIALIZATIONS *******
 * 
 * npm init -y
 * npm i express mongodb mongoose dotenv urlencode cors method-override
 * npm i --save-dev nodemon
 * 
 * git init  ~~ git add . ~~  git commit -m "note" ~~ git push
 
 * In package.json file, 
 * replace this key/value pair:
    * "scripts":  
       -"test": "echo\"Error: no test specified\" && exit 1"
  
  * with this key/value pair ******
    * "scripts": {
        - "start": "node server.js",
        - "devStart": "nodemon server.js"
   * },

/****** STARTING UP THE SERVER ENGINE *******   
 *  
 * node start ~~- One server run 
 * nodemon devStart ~~ automatically restarts server with everye change in code 
 * 
/*******************************************************/

/******** Set-Up: Express Server ********/
const express = require("express");
const PORT = 5050;
const app = express();

const grades = require("./routes/grades.js");
const grade_agg = require("./routes/grades_agg.mjs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);
app.use("/grades", grades_agg);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});