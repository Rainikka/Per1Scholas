
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Weightlift = require('../models/weightlift.model');

/************** ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const weightlift = await Weightlift.find({});
    res.json(weightlift)
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get One Weightlift Entry By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const weightlift = await Weightlift.findById(id);
    res.json(weightlift);
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get Weightlifts by User ID ***/
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const weightlifts = await Weightlift.find({ user: userId });
    res.json(weightlifts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Add New Weightlift Entry BBy ID ***/
router.post('/', async (req, res) => {
  try {
    const weightliftData = req.body;
    weightliftData.user = weightliftData.userId; // Add this line
    const weightlift = await Weightlift.create(weightliftData);
    console.log("Weightlift Entry Created:", weightlift);
    res.json(weightlift);
  } catch (error) {
    console.log("Error creating weightlift entry:", error);
    res.json({ message: "Error Creating Weightlift Entry" });
  }
});

/*** Route: Delete Weightlift Entry  By Id ***/
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const weightlift = await Weightlift.findByIdAndDelete(id);
    if (!weightlift) {
      return res.status(404).json({
        message: "Weightlift Entry Not Found"
      });
    }
    res.json({ message: "Weightlift Entry Deleted Successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Update Weightlift Entry By Id ***/
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const weightlift = await Weightlift.findByIdAndUpdate(id, req.body);
    if (!weightlift) {
      return res.status(404).json({ message: "Weightlift Entry Not Found" })
    }
    const updatedWeightlift = await Weightlift.findById(id);
    res.json(updatedWeightlift);
  } catch (error) {
    res.json({ message: error.message })
  }
});

module.exports = router;