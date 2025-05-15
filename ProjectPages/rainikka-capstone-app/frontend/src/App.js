import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>School Data Entry Form</h1>
      <form id="schoolForm" onSubmit={handle Submit}>

      <div className="section">
        <h2 className="title">District Administration</h2>
        <div className="group">
          <label htmlFor="AdminID" className="required">Administrator ID</label>
          <input type="text"
            id="AdminID"
            name="adminID"
            value={AdminID}
            placeholder="Enter your district administrator id number"
            onChange={(e) => setAdminID(e.target.value)}
            required />
        </div>

        <div className="group">
          <label htmlFor="AdminName" className="required">Full Name</label>
          <input type="text"
            id="AdminName"
            name="AdminName"
            value={AdminName}
            placeholder="Enter your full name"
            onChange={(e) => setAdminName(e.target.value)}
            required />
        </div>

        <div className="group">
          <label htmlFor="schoolOpenDate" className="required">School Open Date</label>
          <input type="date" id="schoolOpenDate" name="schoolOpenDate" required />
        </div>

        <div className="group checkbox">
          <input type="checkbox" id="communitySchool" name="communitySchool" />
          <label htmlFor="communitySchool" className="required">Community School</label>
        </div>

        <div className="group">
          <label htmlFor="communityBasedOrg" className="required">Community-Based Organization</label>
          <input type="text" id="communityBasedOrg" name="communityBasedOrg" required />
        </div>
      </div>

      <div className="section">
        <h2 className="title">Basic Information</h2>
        <div className="group">
          <label htmlFor="schoolID" className="required">School ID</label>
          <input type="text" id="schoolID" name="schoolID" required />
        </div>

        <div className="group">
          <label htmlFor="schoolName" className="required">School Name</label>
          <input type="text" id="schoolName" name="schoolName" required />
        </div>

        <div className="group">
          <label htmlFor="schoolOpenDate" className="required">School Open Date</label>
          <input type="date" id="schoolOpenDate" name="schoolOpenDate" required />
        </div>

        <div className="group checkbox">
          <input type="checkbox" id="communitySchool" name="communitySchool" />
          <label htmlFor="communitySchool" className="required">Community School</label>
        </div>

        <div className="group">
          <label htmlFor="communityBasedOrg" className="required">Community-Based Organization</label>
          <input type="text" id="communityBasedOrg" name="communityBasedOrg" required />
        </div>
      </div>

      <div className="section">
        <h2 className="title">Location Information</h2>

        <div className="group">
          <label htmlFor="streetAddress" className="required">Street Address</label>
          <input type="text" id="streetAddress" name="streetAddress" required />
        </div>

        <div className="group">
          <label htmlFor="schoolZipCode" className="required">Zip Code</label>
          <input type="number" id="schoolZipCode" name="schoolZipCode" required />
        </div>

        <div className="group">
          <label htmlFor="schoolDistrict" className="required">District Number</label>
          <input type="number" id="schoolDistrict" name="schoolDistrict" required />
        </div>

        <div className="group">
          <label htmlFor="schoolBorough" className="required">Borough</label>
          <select id="schoolBorough" name="schoolBorough" required>
            <option value="">Select Borough</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>
      </div>

      <div className="section">
        <h2 className="title">Academic Information</h2>

        <div className="group">
          <label htmlFor="schoolYearData" className="required">School Year Data</label>
          <input type="number" id="schoolYearData" name="schoolYearData" min="2000" max="2030" required />
        </div>

        <div className="group">
          <label htmlFor="gradeLevel" className="required">Grade Level</label>
          <select id="gradeLevel" name="gradeLevel" required>
            <option value="">Select Grade Level</option>
            <option value="Elementary">Elementary</option>
            <option value="Middle">Middle School</option>
            <option value="Middle">Junior High School</option>
            <option value="High">High School</option>
            <option value="K-8">K-8</option>
            <option value="K-12">K-12</option>
          </select>
        </div>

        <div className="group">
          <label htmlFor="enrollment" className="required">Total Enrollment</label>
          <input type="number" id="enrollment" name="enrollment" min="0" required />
        </div>
      </div>

      <div className="section">
        <h2 className="title">Student Demographics</h2>

        <div className="group">
          <label htmlFor="femaleStudents" className="required">Female Students (%)</label>
          <input type="number" id="femaleStudents" name="femaleStudents" required />
        </div>

        <div className="group">
          <label htmlFor="specialNeedsStudents" className="required">Special Needs Students (%)</label>
          <input type="number" id="specialNeedsStudents" name="specialNeedsStudents" required />
        </div>

        <div className="group">
          <label htmlFor="ellStudents" className="required">English Language Learners (%)</label>
          <input type="number" id="ellStudents" name="ellStudents" required />
        </div>

        <div className="group">
          <label htmlFor="inPovertyStudents" className="required">Students Below Poverty Line (%)</label>
          <input type="number" id="inPovertyStudents" name="inPovertyStudents" required />
        </div>

        <div className="group">
          <label htmlFor="economicNeedStudents" className="required">Students in Economic Need (%)</label>
          <input type="number" id="economicNeedStudents" name="economicNeedStudents" required />
        </div>
      </div>

      <div className="section">
        <h2 className="title">Student Ethnicity</h2>

        <div className="group">
          <label htmlFor="asianStudents" className="required">Asian Students (%)</label>
          <input type="number" id="asianStudents" name="asianStudents" required />
        </div>

        <div className="group">
          <label htmlFor="blackStudents" className="required">Black Students (%)</label>
          <input type="number" id="blackStudents" name="blackStudents" required />
        </div>

        <div className="group">
          <label htmlFor="latinoStudents" className="required">Latino Students (%)</label>
          <input type="number" id="latinoStudents" name="latinoStudents" required />
        </div>

        <div className="group">
          <label htmlFor="multiRaceStudents" className="required">Multi-Racial Students (%)</label>
          <input type="number" id="multiRaceStudents" name="multiRaceStudents" required />
        </div>

        <div className="group">
          <label htmlFor="nativeAmericanStudents" className="required">Native American Students (%)</label>
          <input type="number" id="nativeAmericanStudents" name="nativeAmericanStudents" required />
        </div>

        <div className="group">
          <label htmlFor="whiteStudents" className="required">White Students (%)</label>
          <input type="number" id="whiteStudents" name="whiteStudents" required />
        </div>

        <div className="group">
          <label htmlFor="otherStudents" className="required">Other Students (%)</label>
          <input type="number" id="otherStudents" name="otherStudents" required />
        </div>
      </div>

      <div className="section">
        <h2 className="title">Performance Metrics</h2>

        <div className="group">
          <label htmlFor="attendanceRate" className="required">Attendance Rate (%)</label>
          <input type="number" id="attendanceRate" name="attendanceRate" required />
        </div>

        <div className="group">
          <label htmlFor="chronicallyAbsent" className="required">Chronically Absent Students (%)</label>
          <input type="number" id="chronicallyAbsent" name="chronicallyAbsent" required />
        </div>

        <div className="group">
          <label htmlFor="avgELAScore" className="required">Average ELA Score</label>
          <input type="number" id="avgELAScore" name="avgELAScore" required />
        </div>

        <div className="group">
          <label htmlFor="proficientELA" className="required">Proficient in ELA (%)</label>
          <input type="number" id="proficientELA" name="proficientELA" required />
        </div>

        <div className="group">
          <label htmlFor="avgMathScore" className="required">Average Math Score</label>
          <input type="number" id="avgMathScore" name="avgMathScore" required />
        </div>

        <div className="group">
          <label htmlFor="proficientMath" className="required">Proficient in Math (%)</label>
          <input type="number" id="proficientMath" name="proficientMath" required />
        </div>
      </div>

      <div className="group">
        <button type="submit">Submit School Data</button>
      </div>
    </form>
    </div >
  );
}
export default App;
