/******************************/
/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/******** ALAB 318.5 **********/
/******************************/

/*******************************/
/******* Express Server ********/
/******** Application **********/
/******** 24-APR-2025 **********/


/*********** ENVIRONMENT SET-UP  ***********/
/*******************************************/

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine'. 'jsx');
app.engin('jsx', require('jsx-view-engine').createEngine());

const Fruit require('./models/fruit.mjs');
const Fruit require('./routes/fruits.mjs');

// Middleware 
app.use(express.urlencoded())
app.use(express.json())

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})

app.listen(3000, () => {
  console.log(`Server is listeing on ${Port}`)
})
