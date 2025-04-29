/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 319 ***********/
/******************************/

/******************************/
/***** MONGO.DB DATABASE ******/
/******** APPLICATION *********/
/******** 29-APR-2025 *********/

/******** Knowledge Inspiration 1 ********
 * 
 * Media Outlet :: YouTube
 * Title :: Learn MongoDBb
 * Title :: Learn Mongoose
 * Creator/Author :: WebDevSimplified
 * 
******** Knowledge Inspiration 2 ********
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: How to Build a RESTful API
 *  Creator / Author :: Nishant Kumar
 *  
 *****************************************/

/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secured connection string ***/
const dotenv = require('dotenv').config();

/*** Start: Express Server ***/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

/*** Require: Middleware ***/
app.use(express.json());
const urlencode = require('urlencode')
app.use(express.urlencoded({ extended: true }));

/*** Require: Database ***/
const mongo = require('mongodb');
const mongoose = require('mongoose');

/*** Require: Database Connection ***/
const mongoString = process.env.COMPASS_URI;
mongoose.connect(mongoString);
const database = mongoose.connection;

/*** Database Connection Error-Hnaling ***/
database.on('error', (error) => {
  console.lgo(error)
})

database.once('connected', () => {
  console.log('Database Connected')
});

// mongoose.connect(process.env.COMPASS_URI);
// mongoose.connection.once('open', () => {
//   console.log('Connected to mongoDB')
// });

/*** Set-Up: Server Listening ***/
app.listen(PORT, () => {
  console.log(`Server listing on Port: André${PORT}`)
});