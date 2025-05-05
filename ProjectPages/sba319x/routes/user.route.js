
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const User = require('../models/user.model');


/************** ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users)
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get One User By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Add New User ***/
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    console.log("User Entry Received:", user);
    res.json(user);
  } catch (error) {
    console.log("Error Creating User:", error);
    res.json({ message: "Error Creating User" });
  }
});

/*** Route: Delete User By Id ***/
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }
    res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Update Usert By Id ***/
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" })
    }
    const updatedUser = await User.findById(id);
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error.message })
  }
});

module.exports = router;