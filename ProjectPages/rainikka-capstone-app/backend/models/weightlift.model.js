
const mongoose = require('mongoose');
const WeightliftSchema = new mongoose.Schema({
  SchoolID: {
    type: String,
    required: ["Enter school ID"]
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
  District: {
    type: Number,
    required: [true, "Enter district number"]
  },
  Borough: {
    type: String,
    required: [true, "Select school borough"]
  },
  GradeLevel: {
    type: String,
    required: [true, "Select grade level"]
  },
  StreetAddress: {
    type: String,
    required: [true, "Enter the school's street address"]
  },
  SchoolYearData: {
    type: Number,
    required: [true, "Select the school year of the data"]
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
  PovertyStudents: {
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
  ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts"]
  },
  ELASkill: {
    type: Number,
    required: [true, "Enter the percentage of students that scored as proficient in ELA"]
  },
  MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math"]
  },
  MathSkill: {
    type: Number,
    required: [true, "Enter the percentage of students that scored as proficient in Math"]
  }
}, {
  timestamps: true
});

const Weightlift = mongoose.model('Weightlift', WeightliftSchema);
module.exports = Weightlift;
