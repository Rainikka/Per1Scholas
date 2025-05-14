
import './App.css';

function App() {
  return (<div className="App">
    <h1>School Data Entry Form</h1>
    <form id="schoolForm">
      <div className="section">
        <h2 className="section-title">Basic Information</h2>

        <div className="form-group">
          <label for="schoolID" className="required">School ID</label>
          <input type="text" id="schoolID" name="schoolID" required>
        </div>

        <div className="form-group">
          <label for="schoolName" className="required">School Name</label>
          <input type="text" id="schoolName" name="schoolName" required>
        </div>

        <div className="form-group">
          <label for="schoolOpenDate" className="required">School Open Date</label>
          <input type="date" id="schoolOpenDate" name="schoolOpenDate" required>
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="communitySchool" name="communitySchool">
            <label for="communitySchool" className="required">Community School</label>
        </div>

        <div className="form-group">
          <label for="communityBasedOrg" className="required">Community-Based Organization</label>
          <input type="text" id="communityBasedOrg" name="communityBasedOrg" required>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Location Information</h2>

        <div className="form-group">
          <label for="streetAddress" className="required">Street Address</label>
          <input type="text" id="streetAddress" name="streetAddress" required>
        </div>

        <div className="form-group">
          <label for="schoolZipCode" className="required">Zip Code</label>
          <input type="number" id="schoolZipCode" name="schoolZipCode" required>
        </div>

        <div className="form-group">
          <label for="schoolDistrict" className="required">District Number</label>
          <input type="number" id="schoolDistrict" name="schoolDistrict" required>
        </div>

        <div className="form-group">
          <label for="schoolBorough" className="required">Borough</label>
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
        <h2 className="section-title">Academic Information</h2>

        <div className="form-group">
          <label for="schoolYearData" className="required">School Year Data</label>
          <input type="number" id="schoolYearData" name="schoolYearData" min="2000" max="2030" required>
        </div>

        <div className="form-group">
          <label for="gradeLevel" className="required">Grade Level</label>
          <select id="gradeLevel" name="gradeLevel" required>
            <option value="">Select Grade Level</option>
            <option value="Elementary">Elementary</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
            <option value="K-8">K-8</option>
            <option value="K-12">K-12</option>
          </select>
        </div>

        <div className="form-group">
          <label for="enrollment" className="required">Total Enrollment</label>
          <input type="number" id="enrollment" name="enrollment" min="0" required>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Student Demographics</h2>

        <div className="form-group">
          <label for="femaleStudents" className="required">Female Students (%)</label>
          <input type="number" id="femaleStudents" name="femaleStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="specialNeedsStudents" className="required">Special Needs Students (%)</label>
          <input type="number" id="specialNeedsStudents" name="specialNeedsStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="ellStudents" className="required">English Language Learners (%)</label>
          <input type="number" id="ellStudents" name="ellStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="inPovertyStudents" className="required">Students Below Poverty Line (%)</label>
          <input type="number" id="inPovertyStudents" name="inPovertyStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="economicNeedStudents" className="required">Students in Economic Need (%)</label>
          <input type="number" id="economicNeedStudents" name="economicNeedStudents" min="0" max="100" step="0.1" required>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Student Ethnicity</h2>

        <div className="form-group">
          <label for="asianStudents" className="required">Asian Students (%)</label>
          <input type="number" id="asianStudents" name="asianStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="blackStudents" className="required">Black Students (%)</label>
          <input type="number" id="blackStudents" name="blackStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="latinoStudents" className="required">Latino Students (%)</label>
          <input type="number" id="latinoStudents" name="latinoStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="multiRaceStudents" className="required">Multi-Racial Students (%)</label>
          <input type="number" id="multiRaceStudents" name="multiRaceStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="nativeAmericanStudents" className="required">Native American Students (%)</label>
          <input type="number" id="nativeAmericanStudents" name="nativeAmericanStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="whiteStudents" className="required">White Students (%)</label>
          <input type="number" id="whiteStudents" name="whiteStudents" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="otherStudents" className="required">Other Students (%)</label>
          <input type="number" id="otherStudents" name="otherStudents" min="0" max="100" step="0.1" required>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Performance Metrics</h2>

        <div className="form-group">
          <label for="attendanceRate" className="required">Attendance Rate (%)</label>
          <input type="number" id="attendanceRate" name="attendanceRate" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="chronicallyAbsent" className="required">Chronically Absent Students (%)</label>
          <input type="number" id="chronicallyAbsent" name="chronicallyAbsent" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="avgELAScore" className="required">Average ELA Score</label>
          <input type="number" id="avgELAScore" name="avgELAScore" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="proficientELA" className="required">Proficient in ELA (%)</label>
          <input type="number" id="proficientELA" name="proficientELA" min="0" max="100" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="avgMathScore" className="required">Average Math Score</label>
          <input type="number" id="avgMathScore" name="avgMathScore" step="0.1" required>
        </div>

        <div className="form-group">
          <label for="proficientMath" className="required">Proficient in Math (%)</label>
          <input type="number" id="proficientMath" name="proficientMath" min="0" max="100" step="0.1" required>
        </div>
      </div>

      <div className="form-group">
        <button type="submit">Submit School Data</button>
      </div>
    </form>
    );
}

    export default App;
