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
app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
});

app.post('/fruits/', (req, res) => {
  res.send('received');
});

app.use(express.urlencoded({ extended: true }));

app.post('/fruits/', (req, res) => {
  res.send(req.body);
});

app.post('/fruits/', (req, res) => {
  if (req.body.readyToEat === 'on') { //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits')
});



app.listen(3000, () => {
  console.log(`Server is listeing on ${PORT}`)
});


