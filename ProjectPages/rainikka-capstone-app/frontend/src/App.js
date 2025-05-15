import React, { useState } from 'react';
import './App.css';

function App() {
  // District Administrator State
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

  // Attendance Data State (showing first few years as example)
  const [attendance2018Rate, setAttendance2018Rate] = useState('');
  const [chronically2018Absent, setChronically2018Absent] = useState('');

  // ELA Scores State (showing first few years as example)
  const [avg2018ELAScore, setAvg2018ELAScore] = useState('');
  const [proficient2018ELA, setProficient2018ELA] = useState('');

  // Math Scores State (showing first few years as example)
  const [avg2018MathScore, setAvg2018MathScore] = useState('');
  const [proficient2018Math, setProficient2018Math] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
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

        {/* Attendance Data Section (2018 as example) */}
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

        {/* ELA Scores Section (2018 as example) */}
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

        {/* Math Scores Section (2018 as example) */}
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

        <div className="form-actions">
          <button type="submit">Submit School Data</button>
        </div>
      </form>
    </div>
  );
}

export default App;
