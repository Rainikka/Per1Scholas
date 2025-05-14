
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Weightlift = require('../models/weightlift.model');

/************** WEIGHTLIFT: ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const weightlift = await Weightlift.find({});
    res.status(200).json(weightlift)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

/*** Route: Get One Weightlift Entry By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const weightlift = await Weightlift.findById(id);
    res.status(200).json(weightlift);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

/*** Route: Add New Exercise Entry ***/
router.post('/', async (req, res) => {
  try {
    const weightlift = await Weightlift.create(req.body);
    res.status(200).json(weightlift);
    console.log(`${weightlift} created successfully`);
  } catch (error) {
    console.log(`${weightlift} NOT created`);
    res.status(500).json({ message: "Error Creating Weightlift" });
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
    res.status(200).json({ message: "Weightlift Entry Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(200).json(updatedWeightlift);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

module.exports = router;