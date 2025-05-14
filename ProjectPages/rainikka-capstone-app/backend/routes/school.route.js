
/*** Requirements & Imports for Router ***/
const express = require('express')
const router = express.Router();
const school = require('../models/school.model');

/************** ALL CRUD ROUTES *************/

/*** Route: Landing Page ***/
router.get('/', async (req, res) => {
  try {
    const schools = await school.find({});
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*** Route: Get One school Entry By Id ***/
router.get('/:id', async (req, res) => {
  try {
    const school = await school.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ message: "school entry not found" });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*** Route: Add New school Entry ***/
router.post('/', async (req, res) => {
  try {
    const schoolData = {
      schoolID: req.body.schoolID,
      schoolName: req.body.schoolName,
      schoolOpenDate: req.body.schoolOpenDate,
      communitySchool: req.body.communitySchool,
      communityBasedOrg: req.body.communityBasedOrg, // Fixed typo
      streetAddress: req.body.streetAddress,
      schoolDistrict: req.body.schoolDistrict, // Fixed typo
      schoolZipCode: req.body.schoolZipCode,
      schoolBorough: req.body.schoolBorough,
      schoolYearData: req.body.schoolYearData,
      gradeLevel: req.body.gradeLevel, // Fixed from req.enrollment.gradeLevel
      enrollment: req.body.enrollment, // Fixed from req.enrollment
      femaleStudents: req.body.femaleStudents,
      specialNeedsStudents: req.body.specialNeedsStudents,
      eLLStudents: req.body.eLLStudents,
      inPovertyStudents: req.body.inPovertyStudents,
      economicNeedStudents: req.body.economicNeedStudents,
      asianStudents: req.body.asianStudents, // Fixed typo
      blackStudents: req.body.blackStudents,
      latinoStudents: req.body.latinoStudents,
      multiRaceStudents: req.body.multiRaceStudents,
      nativeAmericanStudents: req.body.nativeAmericanStudents,
      whiteStudents: req.body.whiteStudents, // Fixed typo
      otherStudents: req.body.otherStudents,
      attendanceRate: req.body.attendanceRate,
      chronicallyAbsent: req.body.chronicallyAbsent,
      avgELAScore: req.body.avgELAScore,
      proficientELA: req.body.proficientELA,
      avgMathScore: req.body.avgMathScore,
      proficientMath: req.body.proficientMath // Fixed typo
    };
    const school = await school.create(schoolData);
    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/*** Route: Delete school Entry By Id ***/
router.delete('/:id', async (req, res) => {
  try {
    const school = await school.findByIdAndDelete(req.params.id);
    if (!school) {
      return res.status(404).json({ message: "school entry not found" });
    }
    res.json({ message: "school entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*** Route: Update school Entry By Id ***/
router.put('/:id', async (req, res) => {
  try {
    const school = await school.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!school) {
      return res.status(404).json({ message: "school entry not found" });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;