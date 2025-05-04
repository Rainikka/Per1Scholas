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

/*** Require: Express Server ***/
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

/*** Import Product Model ***/
const Product = require('./models/product.model');

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

/*** Route: Index Page ***/
app.get('/', (req, res) => {
  res.send("Hello from Node API")
});

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    console.log("Received Product:", product);
    res.json(product);
  } catch (error) {
    console.log("Error creating product:", error);
    res.json({ message: "Error creating product" });
  }
});




/*** Set-Up: Port for Listening ***/
app.listen(PORT, () => {
  console.log(`Server is running on Port: André${PORT} `)

});