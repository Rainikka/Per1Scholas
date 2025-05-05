
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Aerobic = require('../models/aerobic.model');

/************** ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const aerobics = await Aerobic.find({});
    res.json(aerobics)
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get One Exercise Entry By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const aerobic = await Aerobic.findById(id);
    res.json(aerobic);
  } catch (error) {
    res.json({ message: error.message })
  }
});

/*** Route: Get Aerobics by User ID ***/
router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const aerobics = await Aerobic.find({ user: userId });
    res.json(aerobics);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Add New Aerobics Exercise Entry ***/
router.post('/', async (req, res) => {
  try {
    const aerobicData = req.body;
    aerobicData.user = aerobicData.userId; // Add this line
    const aerobic = await Aerobic.create(aerobicData);
    console.log("New Entry Created:", aerobic);
    res.json(aerobic);
  } catch (error) {
    console.log("Error creating exercise entry:", error);
    res.json({ message: "Error Creating Exercise Entry" });
  }
});

/*** Route: Delete Exercise Entry By Id ***/
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const aerobic = await Aerobic.findByIdAndDelete(id);
    if (!aerobic) {
      return res.status(404).json({
        message: "Exercise Entry Not Found"
      });
    }
    res.json({ message: "Exercise Entry Deleted Successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Route: Update Exercise Entry By Id ***/
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const aerobic = await Aerobic.findByIdAndUpdate(id, req.body);
    if (!aerobic) {
      return res.status(404).json({ message: "Aerobic Not Found" })
    }
    const updatedAerobic = await Aerobic.findById(id);
    res.json(updatedAerobic);
  } catch (error) {
    res.json({ message: error.message })
  }
});

module.exports = router;