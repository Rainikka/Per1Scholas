/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 319 ***********/
/******************************/

/******************************/
/***** MONGO.DB DATABASE ******/
/******** APPLICATION *********/
/******** 29-APR-2025 *********/

/******** Knowledge Inspiration 1 **********
 * 
 * Media Outlet :: YouTube
 * Title :: Learn MongoDB
 * Title :: Learn Mongoose
 * Creator/Author :: WebDevSimplified
 * 
******** Knowledge Inspiration 2 **********
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: How to Build a RESTful API
 *  Creator / Author :: Nishant Kumar
 *  
 ******************************************/

/********** ENVIRONMENT SET-UP ***********/
/*****************************************/

/*** Require: Connection String ***/
const dotenv = require('dotenv').config();

/*** Require: Express Sever ***/
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

/** Connect: Database to Server ***/
const mongoString = process.env.DATABASE_URI;
mongoose.connect(mongoString)
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log("Database NOT Connected");
  });


/*** Response: Default Page ***/
app.get('/', (req, res) => {
  res.send("Hello from Node API")
});

app.post('/api/products', (req, res) => {
  res.send("Data Received")
});


/*** Set-Up: Port for Listening ***/
app.listen(3000, () => {
  console.log(`Server is running on Port: André${PORT}`)

});