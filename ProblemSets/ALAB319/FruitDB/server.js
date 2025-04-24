/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.5 **********/
/******************************/

/*******************************/
/******* Express Server ********/
/******** Application **********/
/******** 23-APR-2025 **********/


/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const Fruit = require('./models/fruit.js');
const Fruits = require('./routes/fruits.js');

// Middleware 
app.use(express.urlencoded())
app.use(express.json())

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})


app.listen(3000, () => {
  console.log(`Server is listeing on ${PORT}`)
})
