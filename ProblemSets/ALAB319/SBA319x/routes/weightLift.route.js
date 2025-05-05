
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const Weightlift = require('../models/weightlift.model');

/************** ALL CRUD ROUTES *************/
// Get All Weightlifts for a Specific User
router.get('/user/:userId', async (req, res) => {
  try {
    const weightlifts = await Weightlift.find({ user: req.params.userId });
    res.json(weightlifts);
  } catch (error) {
    res.json({ message: error.message });
  }
});
/*** Create New Weightlift for a User ***/
router.post('/', async (req, res) => {
  try {
    const weightlift = await Weightlift.create({
      user: req.body.userId,
      exercise: req.body.exercise,
      muscle: req.body.muscle,
      weight: req.body.weight,
      reps: req.body.reps
    });
    res.json(weightlift);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/***  Update Weightlift for a User ***/
router.put('/:id', async (req, res) => {
  try {
    const weightlift = await Weightlift.findOneAndUpdate(
      { _id: req.params.id, user: req.body.userId },
      req.body,
      { new: true }
    );
    if (!weightlift) return res.status(404).json({ message: "Exercise not found" });
    res.json(weightlift);
  } catch (error) {
    res.json({ message: error.message });
  }
});

/*** Delete a Weightlift for a User ***/
router.delete('/:id', async (req, res) => {
  try {
    const weightlift = await Weightlift.findOneAndDelete({
      _id: req.params.id,
      user: req.body.userId
    });
    if (!weightlift) return res.json({ message: "Exercise not found" });
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router; 