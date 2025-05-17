import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [schoolData, setSchoolData] = useState({
    SchoolDBN: '',
    SchoolName: '',
    StreetAddress: '',
    ZipCode: '',
    Neighborhood: '',
    District: '',
    Borough: 'Manhattan',
    SchoolType: 'General Education',
    GradeLevel: 'Elementary',
    CommunitySchool: false,
    CommunityBasedOrg: '',
    PartnershipYearStart: '',
    DataForSchoolYear: '',
    Enrollment: '',
    FemaleStudents: '',
    MaleStudents: '',
    SpecialNeedStudents: '',
    ELLStudents: '',
    LivingInPoverty: '',
    EconomicNeed: '',
    AsianStudents: '',
    BlackStudents: '',
    LatinoStudents: '',
    MultiRaceStudents: '',
    NativeStudents: '',
    WhiteStudents: '',
    OtherStudents: '',
  });

  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('/api/schools');
        setSchools(res.data);
      } catch (err) {
        alert('Error fetching schools');
      }
    };
    fetchSchools();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSchoolData({
      ...schoolData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedSchool) {

        await axios.patch(`/api/schools/${selectedSchool.SchoolDBN}`, schoolData);
        alert('School updated successfully');
      } else {

        await axios.post('/api/schools', schoolData);
        alert('School created successfully');
      }


      const res = await axios.get('/api/schools');
      setSchools(res.data);


      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
        StreetAddress: '',
        ZipCode: '',
        Neighborhood: '',
        District: '',
        Borough: 'Manhattan',
        SchoolType: 'General Education',
        GradeLevel: 'Elementary',
        CommunitySchool: false,
        CommunityBasedOrg: '',
        PartnershipYearStart: '',
        DataForSchoolYear: '',
        Enrollment: '',
        FemaleStudents: '',
        MaleStudents: '',
        SpecialNeedStudents: '',
        ELLStudents: '',
        LivingInPoverty: '',
        EconomicNeed: '',
        AsianStudents: '',
        BlackStudents: '',
        LatinoStudents: '',
        MultiRaceStudents: '',
        NativeStudents: '',
        WhiteStudents: '',
        OtherStudents: '',
        // Reset all other fields
      });
    } catch (err) {
      alert(`Error: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleDelete = async () => {
    if (!selectedSchool) return;

    if (window.confirm('Are you sure you want to delete this school?')) {
      try {
        await axios.delete(`/api/schools/${selectedSchool.SchoolDBN}`);
        alert('School deleted successfully');


        const res = await axios.get('/api/schools');
        setSchools(res.data);

        setSelectedSchool(null);
        setSchoolData({
          SchoolDBN: '',
          SchoolName: '',

        });
      } catch (err) {
        alert(`Error: ${err.response?.data?.message || err.message}`);
      }
    }
  };

  const handleSchoolSelect = async (dbn) => {
    if (!dbn) {
      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
      });
      return;
    }

    try {
      const res = await axios.get(`/api/schools/${dbn}`);
      setSelectedSchool(res.data);
      setSchoolData(res.data);
    } catch (err) {
      alert('Error fetching school data');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>School Administration</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>School Selector</h3>
        <select
          onChange={(e) => handleSchoolSelect(e.target.value)}
          value={selectedSchool?.SchoolDBN || ''}
          style={{ width: '100%', padding: '8px' }}
        >
          <option value="">-- Create New School --</option>
          {schools.map(school => (
            <option key={school.SchoolDBN} value={school.SchoolDBN}>
              {school.SchoolName} ({school.SchoolDBN})
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>School DBN:</label>
          <input
            name="SchoolDBN"
            value={schoolData.SchoolDBN}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>School Name:</label>
          <input
            name="SchoolName"
            value={schoolData.SchoolName}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Street Address:</label>
          <input
            name="StreetAddress"
            value={schoolData.StreetAddress}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Zip Code:</label>
          <input
            name="ZipCode"
            type="number"
            value={schoolData.ZipCode}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Add similar fields for all other required data */}

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Borough:</label>
          <select
            name="Borough"
            value={schoolData.Borough}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>School Type:</label>
          <select
            name="SchoolType"
            value={schoolData.SchoolType}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="General Education">General Education</option>
            <option value="Special Education">Special Education</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Grade Level:</label>
          <select
            name="GradeLevel"
            value={schoolData.GradeLevel}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          >
            <option value="Elementary">Elementary</option>
            <option value="Middle">Middle</option>
            <option value="High">High</option>
            <option value="K-8">K-8</option>
            <option value="6-12">6-12</option>
            <option value="K-12">K-12</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              name="CommunitySchool"
              checked={schoolData.CommunitySchool}
              onChange={handleInputChange}
              style={{ marginRight: '8px' }}
            />
            Community School
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Enrollment:</label>
          <input
            name="Enrollment"
            type="number"
            value={schoolData.Enrollment}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Add more fields as needed */}

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {selectedSchool ? 'Update School' : 'Create School'}
          </button>

          {selectedSchool && (
            <button
              type="button"
              onClick={handleDelete}
              style={{
                padding: '10px 20px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete School
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminPage;