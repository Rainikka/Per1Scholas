const express = require('express');
const router = express.Router();
const School = require('../models/School');
const auth = require('../middleware/auth');

/************** SCHOOL: ALL CRUD ROUTES *************/

/*** Route :: Get All Schools :: Public Access ***/
router.get('/', async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*** Route :: Get One  School :: Public Access ***/
router.get('/:id', async (req, res) => {
  try {
    const school = await School.findOne({ SchoolDBN: req.params.id });
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json(school);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*** Route :: Create Data For A New School :: Admin-Onlyc Access ***/
router.post('/', auth, async (req, res) => {
  const school = new School(req.body);
  try {
    const newSchool = await school.save();
    res.status(201).json(newSchool);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/*** Route :: Update Data Of A School :: Admin-Onlyc Access ***/
router.patch('/:id', auth, async (req, res) => {
  try {
    const school = await School.findOneAndUpdate(
      { SchoolDBN: req.params.id },
      req.body,
      { new: true }
    );
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json(school);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/*** Route :: Delete Data Of A School :: Admin-Onlyc Access ***/
router.delete('/:id', auth, async (req, res) => {
  try {
    const school = await School.findOneAndDelete({ SchoolDBN: req.params.id });
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json({ message: 'School deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;