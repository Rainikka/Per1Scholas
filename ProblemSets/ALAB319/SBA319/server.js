/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 319 ***********/
/******************************/

/******************************/
/****** WORKING WITH  ********/
/******** MONGOOSE *********/
/******** 25-APR-2025 *********/

/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secured connection string ***/
const dotenv = require('dotenv').config

/*** Start Server ***/
const express = require('express');
const app = express();
const PORT = 3000;

/*** Addition: Middleware ***/
app.use(express.json());


/** Mongoose ***/




/*** Server Listening***/
app.listen(3000, () => {
  console.log(`Server listing on Port: André${PORT}`)

});
