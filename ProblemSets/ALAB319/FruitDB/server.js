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
const app = express();
const PORT = process.env.PORT || 3000;


const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const Fruit = require('./models/fruit.js');
const Fruits = require('./routes/fruits.js');

// Middleware 
app.use(express.urlencoded())
app.use(express.json())
app.use('/fruits', Fruits);

// Mongoose Connection
mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open', () => {
  console.log('connected to mongoDB')
})

app.get('/', (req, res) => {
  res.send('Welcome to the Fruits API!')
})

// Mock data
// const fruits = ["apple", "banana", "pear"]

/*** Routes ***/
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
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.redirect('/fruits')
});

mongoose.connect(process.env.ATLAS_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

app.listen(3000, () => {
  console.log(`Server is listening on ${PORT}`)
});


