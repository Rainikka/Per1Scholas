
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Product = require('../models/product.model')


/************** ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products)
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get All Products ***/
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get One Product By Id ***/
router.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    res.json({ message: error.message })
  }
});


/*** Route: Add New Product ***/
router.post('/api/products', async (req, res) => {
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
router.delete('/api/products/:id', async (req, res) => {
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
router.put('/api/products/:id', async (req, res) => {
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

module.exports = router;