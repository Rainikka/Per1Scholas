import React, { useState } from 'react';
import './App.css';

function App() {
  //  District Administrator State
  const [distAdminID, setDistAdminID] = useState('');
  const [distAdminName, setDistAdminName] = useState('');
  const [distAdminEmail, setDistAdminEmail] = useState('');

  // School Information State
  const [schoolID, setSchoolID] = useState('');
  const [schoolDBN, setSchoolDBN] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [schoolZipCode, setSchoolZipCode] = useState('');
  const [schoolDistrict, setSchoolDistrict] = useState('');
  const [schoolBorough, setSchoolBorough] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [communitySchool, setCommunitySchool] = useState(false);
  const [communityBasedOrg, setCommunityBasedOrg] = useState('');
  const [partnershipYearStart, setPartnershipYearStart] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [dataForSchYear, setDataForSchYear] = useState('');

  // Student Demographics State
  const [femaleStudents, setFemaleStudents] = useState('');
  const [specialNeedsStudents, setSpecialNeedsStudents] = useState('');
  const [ellStudents, setEllStudents] = useState('');
  const [livingInPoverty, setLivingInPoverty] = useState('');
  const [economicNeed, setEconomicNeed] = useState('');

  // Ethnicity Breakdown State
  const [asianStudents, setAsianStudents] = useState('');
  const [blackStudents, setBlackStudents] = useState('');
  const [latinoStudents, setLatinoStudents] = useState('');
  const [multiRaceStudents, setMultiRaceStudents] = useState('');
  const [nativeAmericanStudents, setNativeAmericanStudents] = useState('');
  const [whiteStudents, setWhiteStudents] = useState('');
  const [otherStudents, setOtherStudents] = useState('');

  // Attendance Data State
  const [attendance2018Rate, setAttendance2018Rate] = useState('');
  const [chronically2018Absent, setChronically2018Absent] = useState('');

  // ELA Scores State 
  const [avg2018ELAScore, setAvg2018ELAScore] = useState('');
  const [proficient2018ELA, setProficient2018ELA] = useState('');

  // Math Scores State 
  const [avg2018MathScore, setAvg2018MathScore] = useState('');
  const [proficient2018Math, setProficient2018Math] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted');
  };

  return (
    <div className="App">
      <h1>School Data Entry Form</h1>
      <form id="schoolForm" onSubmit={handleSubmit}>

        {/* District Administrator Section */}
        <div className="section">
          <h2 className="title">District Administration</h2>

          <div className="group">
            <label htmlFor="distAdminID" className="required">Administrator ID</label>
            <input type="number"
              id="distAdminID"
              name="distAdminID"
              value={distAdminID}
              placeholder="Enter your district administrator ID number"
              onChange={(e) => setDistAdminID(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="distAdminName" className="required">Administrator Name</label>
            <input type="text"
              id="distAdminName"
              name="distAdminName"
              value={distAdminName}
              placeholder="Enter your full name"
              onChange={(e) => setDistAdminName(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="distAdminEmail" className="required">Administrator Email</label>
            <input type="email"
              id="distAdminEmail"
              name="distAdminEmail"
              value={distAdminEmail}
              placeholder="Enter your email address"
              onChange={(e) => setDistAdminEmail(e.target.value)}
              required />
          </div>
        </div>

        {/* School Information Section */}
        <div className="section">
          <h2 className="title">School Information</h2>

          <div className="group">
            <label htmlFor="schoolID" className="required">School ID</label>
            <input type="text"
              id="schoolID"
              name="schoolID"
              value={schoolID}
              placeholder="Enter the school ID"
              onChange={(e) => setSchoolID(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="schoolDBN" className="required">School DBN</label>
            <input type="text"
              id="schoolDBN"
              name="schoolDBN"
              value={schoolDBN}
              placeholder="Enter the school district borough number"
              onChange={(e) => setSchoolDBN(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="schoolName" className="required">School Name</label>
            <input type="text"
              id="schoolName"
              name="schoolName"
              value={schoolName}
              placeholder="Enter the school name"
              onChange={(e) => setSchoolName(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="streetAddress" className="required">Street Address</label>
            <input type="text"
              id="streetAddress"
              name="streetAddress"
              value={streetAddress}
              placeholder="Enter the school's street address"
              onChange={(e) => setStreetAddress(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="schoolZipCode" className="required">Zip Code</label>
            <input type="number"
              id="schoolZipCode"
              name="schoolZipCode"
              value={schoolZipCode}
              placeholder="Enter the school's zip code"
              onChange={(e) => setSchoolZipCode(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="schoolDistrict" className="required">District Number</label>
            <input type="number"
              id="schoolDistrict"
              name="schoolDistrict"
              value={schoolDistrict}
              placeholder="Enter school district number"
              onChange={(e) => setSchoolDistrict(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="schoolBorough" className="required">Borough</label>
            <select
              id="schoolBorough"
              name="schoolBorough"
              value={schoolBorough}
              onChange={(e) => setSchoolBorough(e.target.value)}
              required>
              <option value="">Select borough</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Brooklyn">Brooklyn</option>
              <option value="Queens">Queens</option>
              <option value="Bronx">Bronx</option>
              <option value="Staten Island">Staten Island</option>
            </select>
          </div>

          <div className="group">
            <label htmlFor="schoolType" className="required">School Type</label>
            <select
              id="schoolType"
              name="schoolType"
              value={schoolType}
              onChange={(e) => setSchoolType(e.target.value)}
              required>
              <option value="">Select school type</option>
              <option value="General Education">General Education</option>
              <option value="Special Education">Special Education</option>
            </select>
          </div>

          <div className="group">
            <label htmlFor="gradeLevel" className="required">Grade Level</label>
            <select
              id="gradeLevel"
              name="gradeLevel"
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value)}
              required>
              <option value="">Select grade level</option>
              <option value="Elementary">Elementary</option>
              <option value="Middle">Middle</option>
              <option value="High">High</option>
              <option value="K-8">K-8</option>
              <option value="6-12">6-12</option>
              <option value="K-12">K-12</option>
            </select>
          </div>

          <div className="group checkbox-group">
            <input type="checkbox"
              id="communitySchool"
              name="communitySchool"
              checked={communitySchool}
              onChange={(e) => setCommunitySchool(e.target.checked)}
              required />
            <label htmlFor="communitySchool" className="required">Community School</label>
          </div>

          <div className="group">
            <label htmlFor="communityBasedOrg" className="required">Community-Based Organization</label>
            <input type="text"
              id="communityBasedOrg"
              name="communityBasedOrg"
              value={communityBasedOrg}
              placeholder="Enter the community-based partner for the school"
              onChange={(e) => setCommunityBasedOrg(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="partnershipYearStart" className="required">Partnership Start Year</label>
            <select
              id="partnershipYearStart"
              name="partnershipYearStart"
              value={partnershipYearStart}
              onChange={(e) => setPartnershipYearStart(e.target.value)}
              required>
              <option value="">Select start year</option>
              {[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="group">
            <label htmlFor="enrollment" className="required">Total Enrollment</label>
            <input type="number"
              id="enrollment"
              name="enrollment"
              value={enrollment}
              placeholder="Enter total number of students enrolled in school"
              onChange={(e) => setEnrollment(e.target.value)}
              required />
          </div>

          <div className="group">
            <label htmlFor="dataForSchYear" className="required">Data For School Year</label>
            <select
              id="dataForSchYear"
              name="dataForSchYear"
              value={dataForSchYear}
              onChange={(e) => setDataForSchYear(e.target.value)}
              required>
              <option value="">Select school year</option>
              {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Student Demographics Section */}
        <div className="section">
          <h2 className="title">Student Demographics</h2>

          <div className="group">
            <label htmlFor="femaleStudents" className="required">Female Students (%)</label>
            <input type="number"
              id="femaleStudents"
              name="femaleStudents"
              value={femaleStudents}
              placeholder="Enter the percentage of students that are female"
              onChange={(e) => setFemaleStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="specialNeedsStudents" className="required">Special Needs Students (%)</label>
            <input type="number"
              id="specialNeedsStudents"
              name="specialNeedsStudents"
              value={specialNeedsStudents}
              placeholder="Enter the percentage of students with special needs"
              onChange={(e) => setSpecialNeedsStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="ellStudents" className="required">English Language Learners (%)</label>
            <input type="number"
              id="ellStudents"
              name="ellStudents"
              value={ellStudents}
              placeholder="Enter the percentage of students that are English Language Learners"
              onChange={(e) => setEllStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="livingInPoverty" className="required">Students Below Poverty Line (%)</label>
            <input type="number"
              id="livingInPoverty"
              name="livingInPoverty"
              value={livingInPoverty}
              placeholder="Enter the percentage of students 80% below federal poverty line"
              onChange={(e) => setLivingInPoverty(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="economicNeed" className="required">Students in Economic Need (%)</label>
            <input type="number"
              id="economicNeed"
              name="economicNeed"
              value={economicNeed}
              placeholder="Enter the percentage of students that are in economic need"
              onChange={(e) => setEconomicNeed(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        {/* Ethnicity Breakdown Section */}
        <div className="section">
          <h2 className="title">Ethnicity Breakdown</h2>

          <div className="group">
            <label htmlFor="asianStudents" className="required">Asian Students (%)</label>
            <input type="number"
              id="asianStudents"
              name="asianStudents"
              value={asianStudents}
              placeholder="Enter the percentage of students identified as Asian"
              onChange={(e) => setAsianStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="blackStudents" className="required">Black Students (%)</label>
            <input type="number"
              id="blackStudents"
              name="blackStudents"
              value={blackStudents}
              placeholder="Enter the percentage of students identified as Black"
              onChange={(e) => setBlackStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="latinoStudents" className="required">Latino Students (%)</label>
            <input type="number"
              id="latinoStudents"
              name="latinoStudents"
              value={latinoStudents}
              placeholder="Enter the percentage of students identified as Latino"
              onChange={(e) => setLatinoStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="multiRaceStudents" className="required">Multi-Racial Students (%)</label>
            <input type="number"
              id="multiRaceStudents"
              name="multiRaceStudents"
              value={multiRaceStudents}
              placeholder="Enter the percentage of students identified as Multi-racial"
              onChange={(e) => setMultiRaceStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="nativeAmericanStudents" className="required">Native American Students (%)</label>
            <input type="number"
              id="nativeAmericanStudents"
              name="nativeAmericanStudents"
              value={nativeAmericanStudents}
              placeholder="Enter the percentage of students identified as Native American"
              onChange={(e) => setNativeAmericanStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="whiteStudents" className="required">White Students (%)</label>
            <input type="number"
              id="whiteStudents"
              name="whiteStudents"
              value={whiteStudents}
              placeholder="Enter the percentage of students identified as White"
              onChange={(e) => setWhiteStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>

          <div className="group">
            <label htmlFor="otherStudents" className="required">Other Students (%)</label>
            <input type="number"
              id="otherStudents"
              name="otherStudents"
              value={otherStudents}
              placeholder="Enter the percentage of students identified as Other"
              onChange={(e) => setOtherStudents(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        {/* Attendance Data Sections */}
        <div className="section">
          <h2 className="title">2018 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2018Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2018Rate"
              name="attendance2018Rate"
              value={attendance2018Rate}
              placeholder="Enter the school attendance rate for 2018"
              onChange={(e) => setAttendance2018Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2018Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2018Absent"
              name="chronically2018Absent"
              value={chronically2018Absent}
              placeholder="Enter the percentage of students chronically absent for 2018"
              onChange={(e) => setChronically2018Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2019 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2019Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2019Rate"
              name="attendance2019Rate"
              value={attendance2019Rate}
              placeholder="Enter the school attendance rate for 2019"
              onChange={(e) => setAttendance2019Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2019Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2019Absent"
              name="chronically2019Absent"
              value={chronically2019Absent}
              placeholder="Enter the percentage of students chronically absent for 2019"
              onChange={(e) => setChronically2019Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2020 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2020Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2020Rate"
              name="attendance2020Rate"
              value={attendance2020Rate}
              placeholder="Enter the school attendance rate for 2020"
              onChange={(e) => setAttendance2020Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2020Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2020Absent"
              name="chronically2020Absent"
              value={chronically2020Absent}
              placeholder="Enter the percentage of students chronically absent for 2020"
              onChange={(e) => setChronically2020Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2021 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2021Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2021Rate"
              name="attendance2021Rate"
              value={attendance2021Rate}
              placeholder="Enter the school attendance rate for 2021"
              onChange={(e) => setAttendance2021Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2021Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2021Absent"
              name="chronically2021Absent"
              value={chronically2021Absent}
              placeholder="Enter the percentage of students chronically absent for 2021"
              onChange={(e) => setChronically2021Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2022 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2022Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2022Rate"
              name="attendance2022Rate"
              value={attendance2022Rate}
              placeholder="Enter the school attendance rate for 2022"
              onChange={(e) => setAttendance2022Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2022Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2022Absent"
              name="chronically2022Absent"
              value={chronically2022Absent}
              placeholder="Enter the percentage of students chronically absent for 2022"
              onChange={(e) => setChronically2022Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2023 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2023Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2023Rate"
              name="attendance2023Rate"
              value={attendance2023Rate}
              placeholder="Enter the school attendance rate for 2023"
              onChange={(e) => setAttendance2023Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2023Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2023Absent"
              name="chronically2023Absent"
              value={chronically2023Absent}
              placeholder="Enter the percentage of students chronically absent for 2023"
              onChange={(e) => setChronically2023Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2024 Attendance Data</h2>
          <div className="group">
            <label htmlFor="attendance2024Rate" className="required">Attendance Rate (%)</label>
            <input type="number"
              id="attendance2024Rate"
              name="attendance2024Rate"
              value={attendance2024Rate}
              placeholder="Enter the school attendance rate for 2024"
              onChange={(e) => setAttendance2024Rate(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
          <div className="group">
            <label htmlFor="chronically2024Absent" className="required">Chronically Absent (%)</label>
            <input type="number"
              id="chronically2024Absent"
              name="chronically2024Absent"
              value={chronically2024Absent}
              placeholder="Enter the percentage of students chronically absent for 2024"
              onChange={(e) => setChronically2024Absent(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        {/* ELA Scores Sections */}
        <div className="section">
          <h2 className="title">2018 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2018ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2018ELAScore"
              name="avg2018ELAScore"
              value={avg2018ELAScore}
              placeholder="Enter the average score for English Language Arts in 2018"
              onChange={(e) => setAvg2018ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2018ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2018ELA"
              name="proficient2018ELA"
              value={proficient2018ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2018"
              onChange={(e) => setProficient2018ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2019 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2019ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2019ELAScore"
              name="avg2019ELAScore"
              value={avg2019ELAScore}
              placeholder="Enter the average score for English Language Arts in 2019"
              onChange={(e) => setAvg2019ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2019ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2019ELA"
              name="proficient2019ELA"
              value={proficient2019ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2019"
              onChange={(e) => setProficient2019ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2020 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2020ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2020ELAScore"
              name="avg2020ELAScore"
              value={avg2020ELAScore}
              placeholder="Enter the average score for English Language Arts in 2020"
              onChange={(e) => setAvg2020ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2020ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2020ELA"
              name="proficient2020ELA"
              value={proficient2020ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2020"
              onChange={(e) => setProficient2020ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2021 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2021ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2021ELAScore"
              name="avg2021ELAScore"
              value={avg2021ELAScore}
              placeholder="Enter the average score for English Language Arts in 2021"
              onChange={(e) => setAvg2021ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2021ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2021ELA"
              name="proficient2021ELA"
              value={proficient2021ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2021"
              onChange={(e) => setProficient2021ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2022 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2022ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2022ELAScore"
              name="avg2022ELAScore"
              value={avg2022ELAScore}
              placeholder="Enter the average score for English Language Arts in 2022"
              onChange={(e) => setAvg2022ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2022ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2022ELA"
              name="proficient2022ELA"
              value={proficient2022ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2022"
              onChange={(e) => setProficient2022ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2023 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2023ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2023ELAScore"
              name="avg2023ELAScore"
              value={avg2023ELAScore}
              placeholder="Enter the average score for English Language Arts in 2023"
              onChange={(e) => setAvg2023ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2023ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2023ELA"
              name="proficient2023ELA"
              value={proficient2023ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2023"
              onChange={(e) => setProficient2023ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2024 ELA Scores</h2>
          <div className="group">
            <label htmlFor="avg2024ELAScore" className="required">Average ELA Score</label>
            <input type="number"
              id="avg2024ELAScore"
              name="avg2024ELAScore"
              value={avg2024ELAScore}
              placeholder="Enter the average score for English Language Arts in 2024"
              onChange={(e) => setAvg2024ELAScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2024ELA" className="required">Proficient in ELA (%)</label>
            <input type="number"
              id="proficient2024ELA"
              name="proficient2024ELA"
              value={proficient2024ELA}
              placeholder="Enter the percentage of students who scored at or above the proficient level for ELA in 2024"
              onChange={(e) => setProficient2024ELA(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        {/* Math Scores Sections */}
        <div className="section">
          <h2 className="title">2018 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2018MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2018MathScore"
              name="avg2018MathScore"
              value={avg2018MathScore}
              placeholder="Enter the average score for Math in 2018"
              onChange={(e) => setAvg2018MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2018Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2018Math"
              name="proficient2018Math"
              value={proficient2018Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2018"
              onChange={(e) => setProficient2018Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2019 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2019MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2019MathScore"
              name="avg2019MathScore"
              value={avg2019MathScore}
              placeholder="Enter the average score for Math in 2019"
              onChange={(e) => setAvg2019MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2019Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2019Math"
              name="proficient2019Math"
              value={proficient2019Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2019"
              onChange={(e) => setProficient2019Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2020 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2020MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2020MathScore"
              name="avg2020MathScore"
              value={avg2020MathScore}
              placeholder="Enter the average score for Math in 2020"
              onChange={(e) => setAvg2020MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2020Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2020Math"
              name="proficient2020Math"
              value={proficient2020Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2020"
              onChange={(e) => setProficient2020Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2021 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2021MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2021MathScore"
              name="avg2021MathScore"
              value={avg2021MathScore}
              placeholder="Enter the average score for Math in 2021"
              onChange={(e) => setAvg2021MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2021Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2021Math"
              name="proficient2021Math"
              value={proficient2021Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2021"
              onChange={(e) => setProficient2021Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2022 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2022MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2022MathScore"
              name="avg2022MathScore"
              value={avg2022MathScore}
              placeholder="Enter the average score for Math in 2022"
              onChange={(e) => setAvg2022MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2022Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2022Math"
              name="proficient2022Math"
              value={proficient2022Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2022"
              onChange={(e) => setProficient2022Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2023 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2023MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2023MathScore"
              name="avg2023MathScore"
              value={avg2023MathScore}
              placeholder="Enter the average score for Math in 2023"
              onChange={(e) => setAvg2023MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2023Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2023Math"
              name="proficient2023Math"
              value={proficient2023Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2023"
              onChange={(e) => setProficient2023Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="section">
          <h2 className="title">2024 Math Scores</h2>
          <div className="group">
            <label htmlFor="avg2024MathScore" className="required">Average Math Score</label>
            <input type="number"
              id="avg2024MathScore"
              name="avg2024MathScore"
              value={avg2024MathScore}
              placeholder="Enter the average score for Math in 2024"
              onChange={(e) => setAvg2024MathScore(e.target.value)}
              required />
          </div>
          <div className="group">
            <label htmlFor="proficient2024Math" className="required">Proficient in Math (%)</label>
            <input type="number"
              id="proficient2024Math"
              name="proficient2024Math"
              value={proficient2024Math}
              placeholder="Enter the percentage of students who scored at or above the proficient level for Math in 2024"
              onChange={(e) => setProficient2024Math(e.target.value)}
              min="0"
              max="100"
              required />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">Submit School Data</button>
        </div>
      </form>
    </div>
  );
}

export default App;
