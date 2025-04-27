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
const urlencode = require('urlencode')
app.use(express.urlencoded({ extended: true }));

/*** Database: Mongoose ***/
const mongo = require('mongo');
const mongoose = require('mongoose');



/*** Require: Database Connection ***/
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB')
});

/*** Server Listening***/
app.listen(3000, () => {
  console.log(`Server listing on Port: André${PORT}`)

});
