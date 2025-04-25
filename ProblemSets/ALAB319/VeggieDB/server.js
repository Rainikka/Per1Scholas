
/*********** ENVIRONMENT SET-UP ***********/
/******************************************/

/*** Secure: Connection String ***/
const dotenv = require("dotenv");
dotenv.config();

/*** Require: Express Server ***/
const express = require("express");
const app = express();
const PORT = 3000;

/*** Require: Middleware ***/
app.use(express.urlencoded());
app.use(express.json());

/*** Require: MongoDB & Mongoose Datatases ***/
const mongoDB = require("mongodb");
const mongoose = require("mongoose");

/*** Require: Database Models ***/
const Veggie = require('./models/Veggie.js');
const Veggies = require('./routes/Veggie.js');



app.listen(PORT, () => {
  console.log(`Server is listening on Port: André${PORT}`)
});