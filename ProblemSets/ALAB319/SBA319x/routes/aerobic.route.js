
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Aerobic = require('../models/aerobic.model');

/************** ALL CRUD ROUTES *************/

/*** Get All Aerobics for a User ***/
router.get('/user/:userId', async (req, res) => {
  try {
    const aerobics = await Aerobic.find({ user: req.params.userId });
    res.json(aerobics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*** Create New aArobic Exercise for a User ***/
router.post('/', async (req, res) => {
  try {
    const aerobic = await Aerobic.create({
      user: req.body.userId,
      cardio: req.body.cardio,
      time: req.body.time,
      intensity: req.body.intensity,
      distance: req.body.distance
    });
    res.json(aerobic);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Update Aerobic Exercise for a User ***/
router.put('/:id', async (req, res) => {
  try {
    const aerobic = await Aerobic.findOneAndUpdate(
      { _id: req.params.id, user: req.body.userId },
      req.body,
      { new: true }
    );
    if (!aerobic) return res.status(404).json({ message: "Exercise not found" });
    res.json(aerobic);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Delete Aerobic Exercise for a User ***/
router.delete('/:id', async (req, res) => {
  try {
    const aerobic = await Aerobic.findOneAndDelete({
      _id: req.params.id,
      user: req.body.userId
    });
    if (!aerobic) return res.status(404).json({ message: "Exercise not found" });
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router; 