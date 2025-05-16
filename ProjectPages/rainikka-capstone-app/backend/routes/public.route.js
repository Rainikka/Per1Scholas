const express = require('express');
const router = express.Router();
const School = require('../models/School.model');


/************** PUBLIC: ROUTES FOR DASHBOARD ACCESS *************/

/*** Route: Access to All Schools for Public ***/
router.get('/schools', async (req, res) => {
  try {
    const schools = await School.find().select('SchoolDBN SchoolName Neighborhood Borough');
    res.json(schools);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*** Route: Access to One School for Public  ***/
router.get('/schools/:id', async (req, res) => {
  try {
    const school = await School.findOne({ SchoolDBN: req.params.id });
    if (!school) return res.status(404).json({ message: 'School not found' });
    res.json(school);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;