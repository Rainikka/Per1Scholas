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

/*** Route: Landing Page ***/
app.get('/', (req, res) => {
  res.send("Hello from Node API")
});

/*** Route: Get All Products ***/
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get One Product By Id ***/
app.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);

  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Add New Product ***/
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

/*** Route: Delete Product By Id ***/
app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        message: "Product Not Found"
      });
    }
    res.json({ message: "Product Deleted Successfully" });

  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Update Product By Id ***/
app.put('/api/products/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found" })
    }

    const updatedProduct = await Product.findById(id);
    res.json(updatedProduct);

  } catch (error) {
    res.json({ message: error.message })
  }
});


/*** Set-Up: Port for Listening ***/
app.listen(PORT, () => {
  console.log(`Server is running on Port: André${PORT} `)
});