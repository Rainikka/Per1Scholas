
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
      /*** District Administrator Sign-In ***/
      distAdminID: req.body.distAdminID,
      distAdminName: req.body.distAdminName,
      distAdminEmail: req.body.distAdminEmail,

      /*** School Information ***/
      schoolID: req.body.schoolID,
      schoolDBN: req.body.schoolDBN,
      schoolName: req.body.schoolName,
      streetAddress: req.body.streetAddress,
      schoolZipCode: req.body.schoolZipCode,
      schoolDistrict: req.body.schoolDistrict,
      schoolBorough: req.body.schoolBorough,
      schoolType: req.body.schoolType,
      gradeLevel: req.body.gradeLevel,
      communitySchool: req.body.communitySchool,
      communityBasedOrg: req.body.communityBasedOrg,
      partnershipYearStart: req.body.partnershipYearStart,
      enrollment: req.body.enrollment,
      dataForSchYear: req.body.dataForSchYear,

      /*** Student Demographics ***/
      femaleStudents: req.body.femaleStudents,
      specialNeedsStudents: req.body.specialNeedsStudents,
      ellStudents: req.body.ellStudents,
      livingInPoverty: req.body.livingInPoverty,
      economicNeed: req.body.economicNeed,

      /*** Student Ethnicity Breakdown ***/
      asianStudents: req.body.asianStudents,
      blackStudents: req.body.blackStudents,
      latinoStudents: req.body.latinoStudents,
      multiRaceStudents: req.body.multiRaceStudents,
      nativeAmericanStudents: req.body.nativeAmericanStudents,
      whiteStudents: req.body.whiteStudents,
      otherStudents: req.body.otherStudents,

      /*** 2028 - 2024 School Attendance ***/
      attendance2018Rate: req.body.attendance2018Rate,
      attendance2019Rate: req.body.attendance2019Rate,
      attendance2020Rate: req.body.attendance2020Rate,
      attendance2021Rate: req.body.attendance2021Rate,
      attendance2022Rate: req.body.attendance2022Rate,
      attendance2023Rate: req.body.attendance2023Rate,
      attendance2024Rate: req.body.attendance2024Rate,
      chronically2018Absent: req.body.chronically2018Absent,
      chronically2019Absent: req.body.chronically2019Absent,
      chronically2020Absent: req.body.chronically2020Absent,
      chronically2021Absent: req.body.chronically2021Absent,
      chronically2022Absent: req.body.chronically2022Absent,
      chronically2023Absent: req.body.chronically2023Absent,
      chronically2024Absent: req.body.chronically2024Absent,

      /*** 2028 - 2024 ELA Scores ***/
      avg2018ELAScore: req.body.avg2018ELAScore,
      avg2019ELAScore: req.body.avg2019ELAScore,
      avg2020ELAScore: req.body.avg2020ELAScore,
      avg2021ELAScore: req.body.avg2021ELAScore,
      avg2022ELAScore: req.body.avg2022ELAScore,
      avg2023ELAScore: req.body.avg2023ELAScore,
      avg2024ELAScore: req.body.avg2024ELAScore,
      proficient2018ELA: req.body.proficient2018ELA,
      proficient2019ELA: req.body.proficient2019ELA,
      proficient2020ELA: req.body.proficient2020ELA,
      proficient2021ELA: req.body.proficient2021ELA,
      proficient2022ELA: req.body.proficient2022ELA,
      proficient2023ELA: req.body.proficient2023ELA,
      proficient2024ELA: req.body.proficient2024ELA,

      /*** 2028 - 2024 Math Scores ***/
      avg2018MathScore: req.body.avg2018MathScore,
      avg2019MathScore: req.body.avg2019MathScore,
      avg2020MathScore: req.body.avg2020MathScore,
      avg2021MathScore: req.body.avg2021MathScore,
      avg2022MathScore: req.body.avg2022MathScore,
      avg2023MathScore: req.body.avg2023MathScore,
      avg2024MathScore: req.body.avg2024MathScore,
      proficient2018Math: req.body.proficient2018Math,
      proficient2019Math: req.body.proficient2019Math,
      proficient2020Math: req.body.proficient2020Math,
      proficient2021Math: req.body.proficient2021Math,
      proficient2022Math: req.body.proficient2022Math,
      proficient2023Math: req.body.proficient2023Math,
      proficient2024Math: req.body.proficient2024Math
    };

    const school = await School.create(schoolData);
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