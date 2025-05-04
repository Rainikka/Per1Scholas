/****** Rainikka Corprew ******/
/********* JAVASCRIPT *********/
/********** SBA 319 ***********/
/******************************/

/******************************/
/***** MONGO.DB DATABASE ******/
/******** APPLICATION *********/
/******** 04-MAY-2025 *********/

/******** Knowledge Inspiration 1 **********
 * 
 * Media Outlet :: YouTube
 * Title :: Learn MongoDB
 * Title :: Learn Mongoose
 * Creator/Author :: WebDevSimplified
 * 
******** Knowledge Inspiration 2 ************
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: How to Build a RESTful API
 *  Creator / Author :: Nishant Kumar
 *  
 ******** Knowledge Inspiration 3 **********
 * 
 * Media Outlet :: FreeCodeCamp
 *  Title :: CRUD API
 *  Creator / Author :: Nishant Kumar
 *  
*******************************************


/********** ENVIRONMENT SET-UP ***********/
/*****************************************/

/*** Require: Connection String ***/
const dotenv = require('dotenv').config();

/*** Require: Express Server ***/
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

/*** Import Product Model & Routes***/
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route')

/*** Middleware for JSON use ***/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** Connect: Database to Server ***/
const mongoString = process.env.DATABASE_URI;
mongoose.connect(mongoString)
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log("Database NOT Connected:", error.message);
  });


/*** Link to All Routes ***/
app.use('/api/products', productRoute)


/*** Set-Up: Port for Listening ***/
app.listen(PORT, () => {
  console.log(`Server is running on Port: André${PORT} `)
});
