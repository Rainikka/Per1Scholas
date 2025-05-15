
const mongoose = require('mongoose');
const SchoolSchema = new mongoose.Schema({

  /*** DISTRICT ADMINISTRATOR Sign-In ***/
  DistAdminID: {
    type: Number,
    required: [true, "Enter your district administrator ID number"]
  },
  DistAdminName: {
    type: String,
    required: [true, "Enter your full name"]
  },
  DistAdminEmail: {
    type: String,
    required: [true, "Enter your email address"]
  },

  /*** SCHOOL INFORMATION ***/
  SchoolID: {
    type: String,
    required: [true, "Enter the school ID"]
  },
  SchoolDBN: {
    type: String,
    required: [true, "Enter the school district borough number"]
  },
  SchoolName: {
    type: String,
    required: [true, "Enter the school name"]
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
    required: [true, "Enter school district number"]
  },
  SchoolBorough: {
    type: String,
    required: [true, "Select school borough"],
    enum: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island']
  },

  SchoolType: {
    type: String,
    required: [true, "Select school type"],
    enum: ['General Education', 'Special Education']
  },
  GradeLevel: {
    type: String,
    required: [true, "Select grade level"],
    enum: ['Elementary', 'Middle', 'High', 'K-8', '6-12', 'K-12']
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
  PartnershipYearStart: {
    type: Number,
    required: true,
    enum: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
  },

  Enrollment: {
    type: Number,
    required: [true, "Enter total number of students enrolled in school"]
  },

  DataForSchYear: {
    type: Number,
    required: [true, "Select the school year for the school data"],
    enum: [2018, 2019, 2020, 2021, 2022, 2023, 2024]
  },

  /*** Student Demographics ***/
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
  LivingInPoverty: {
    type: Number,
    required: [true, "Enter the percentage of students 80% below federal poverty line"]
  },
  EconomicNeed: {
    type: Number,
    required: [true, "Enter the percentage of students that in economic need"]
  },

  /*** School Ethnicity Breakdown ***/
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

  /*** 2028 - 2024 School Attendance ***/
  Attendance2018Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2018"]
  },
  Attendance2019Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2019"]
  },
  Attendance2020Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2020"]
  },

  Attendance2021Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2021"]
  },

  Attendance2022Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2022"]
  },
  Attendance2023Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2023"]
  },
  Attendance2024Rate: {
    type: Number,
    required: [true, "Enter the school attendance rate for 2024"]
  },

  Chronically2018Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2018"]
  },
  Chronically2019Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2019"]
  },
  Chronically2021Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2021"]
  },
  Chronically2022Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2022"]
  },

  Chronically2023Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2023"]
  },
  Chronically2024Absent: {
    type: Number,
    required: [true, "Enter the percentage of students chronically absent for 2024"]
  },

  /*** 2028 - 2024 ELA Scores ***/
  Avg2018ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2018"]
  },
  Avg2019ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2019"]
  },
  Avg2020ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2020"]
  },
  Avg2021ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2021"]
  },
  Avg2022ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2022"]
  },
  Avg2023ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2023"]
  },
  Avg2024ELAScore: {
    type: Number,
    required: [true, "Enter the average score for English Language Arts in 2024"]
  },


  Proficient2018ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2018"]
  },
  Proficient2019ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2019"]
  },
  Proficient2020ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2020"]
  },
  Proficient2021ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2021"]
  },
  Proficient2022ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2022"]
  },
  Proficient2023ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2023"]
  },
  Proficient2024ELA: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for ELA in 2024"]
  },

  /*** 2028 - 2024 Math Scores ***/
  Avg2018MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2018"]
  },
  Avg2019MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2019"]
  },
  Avg2020MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2020"]
  },
  Avg2021MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2021"]
  },
  Avg2022MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2022"]
  },
  Avg2023MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2023"]
  },
  Avg2024MathScore: {
    type: Number,
    required: [true, "Enter the average score for Math in 2024"]
  },

  Proficient2018Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2018"]
  },
  Proficient2019Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2019"]
  },
  Proficient2020Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2020"]
  },
  Proficient2021Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2021"]
  },
  Proficient2022Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2022"]
  },
  Proficient2023Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2023"]
  },
  Proficient2024Math: {
    type: Number,
    required: [true, "Enter the percentage of students, who scored at or above the proficient level for Math in 2024"]
  }

}, {
  timestamps: true
});

const School = mongoose.model('School', SchoolSchema);
module.exports = School;
