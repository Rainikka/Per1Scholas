
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Aerobic = require('../models/aerobic.model');

/************** AEROBIC: ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const aerobics = await Aerobic.find({});
    res.status(200).json(aerobics)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

/*** Route: Get One Exercise Entry By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const aerobic = await Aerobic.findById(id);
    res.status(200).json(aerobic);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

/*** Route: Add New Exercise Entry ***/
router.post('/', async (req, res) => {
  try {
    const aerobic = await Aerobic.create(req.body);
    res.status(200).json(aerobic);
    console.log(`${aerobic} created successfully`);
  } catch (error) {
    console.log(`${aerobic} NOT created`);
    res.status(500).json({ message: "Error Creating Aerobic" });
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
    res.status(200).json({ message: "Exercise Entry Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(200).json(updatedAerobic);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
});

module.exports = router;