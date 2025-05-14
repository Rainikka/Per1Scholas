
const mongoose = require('mongoose');
const schoolSchema = new mongoose.Schema(
  {
    SchoolID: {
      type: String,
      required: [true, "Enter school ID"]  // Fixed: Added missing 'true'
    },
    SchoolName: {
      type: String,
      required: [true, "Enter the school name"]
    },
    SchoolOpenDate: {
      type: Date,
      required: true
    },
    CommunitySchool: {
      type: Boolean,
      required: true,
      default: false
    },
    CommunityBasedOrg: {
      type: String,
      required: [true, "Enter the community-based partner for the school"]
    },
    StreetAddress: {
      type: String,
      required: [true, "Enter the school's street address"]
    },
    SchoolZipCode: {
      type: Number,
      required: [true, "Enter the school's zip code"]
    },
    SchoolDistrict: {
      type: Number,
      required: [true, "Enter district number"]
    },
    SchoolBorough: {
      type: String,
      required: [true, "Select school borough"]
    },
    SchoolYearData: {
      type: Number,
      required: [true, "Select the school year in which this data pertains"]
    },
    GradeLevel: {
      type: String,
      required: [true, "Select grade level"]
    },
    Enrollment: {
      type: Number,
      required: [true, "Enter total number of students enrolled in school"]
    },
    FemaleStudents: {
      type: Number,
      required: [true, "Enter the percentage of students that are female"]
    },
    SpecialNeedsStudents: {
      type: Number,
      required: [true, "Enter the percentage of students with special needs"]
    },
    ELLStudents: {
      type: Number,
      required: [true, "Enter the percentage of students that are English Language Learners"]
    },
    InPovertyStudents: {
      type: Number,
      required: [true, "Enter the percentage of students 80% below federal poverty line"]
    },
    EconomicNeedStudents: {
      type: Number,
      required: [true, "Enter the percentage of students that are in economic need"]
    },
    AsianStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Asian"]
    },
    BlackStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Black"]
    },
    LatinoStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Latino"]
    },
    MultiRaceStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Multi-racial"]
    },
    NativeAmericanStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Native American"]
    },
    WhiteStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as White"]
    },
    OtherStudents: {
      type: Number,
      required: [true, "Enter the percentage of students identified as Other"]
    },
    AttendanceRate: {
      type: Number,
      required: [true, "Enter the school attendance rate"]
    },
    ChronicallyAbsent: {
      type: Number,
      required: [true, "Enter the percentage of students that are chronically absent"]
    },
    AvgELAScore: {
      type: Number,
      required: [true, "Enter the average score for English Language Arts"]
    },
    ProficientELA: {
      type: Number,
      required: [true, "Enter the percentage of students that scored as proficient in ELA"]
    },
    AvgMathScore: {
      type: Number,
      required: [true, "Enter the average score for Math"]
    },
    ProficientMath: {  // Fixed: Added missing colon
      type: Number,
      required: [true, "Enter the percentage of students that scored as proficient in Math"]
    }
  },
  {
    timestamps: true
  }
);

const school = mongoose.model('school', schoolSchema);
module.exports = school;
