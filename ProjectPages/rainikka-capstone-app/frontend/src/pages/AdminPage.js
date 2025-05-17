import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const initialSchoolData = {
    SchoolDBN: "",
    SchoolName: "",
    StreetAddress: "",
    Neighborhood: "",
    District: "",
    Borough: "",
    SchoolType: "",
    GradeLevel: "",
    CommunitySchool: false,
    CommunityBasedOrg: "",
    Enrollment: "",
    FemaleStudents: "",
    MaleStudents: "",
    SpecialNeedStudents: "",
    ELLStudents: "",
    LivingInPoverty: "",
    EconomicNeedIndex: "",
    AsianStudents: "",
    BlackStudents: "",
    LatinoStudents: "",
    MultiRaceStudents: "",
    NativeStudents: "",
    WhiteStudents: "",
    OtherStudents: "",
    LATITUDE: "",
    LONGITUDE: ""
  };

  const [schoolData, setSchoolData] = useState(initialSchoolData);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch all schools on component mount
  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get('/schools');
        setSchools(res.data);
      } catch (err) {
        setError('Failed to load schools. Please check your connection and try again.');
        console.error('Error:', err.response?.data || err.message);
      } finally {
        setLoading(false);
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

  const handleSchoolSelect = async (dbn) => {
    if (!dbn) {
      setSelectedSchool(null);
      setSchoolData(initialSchoolData);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`/schools/${dbn}`);
      setSelectedSchool(res.data);
      setSchoolData(res.data);
    } catch (err) {
      setError('Failed to load school data. Please try again.');
      console.error('Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedSchool || !window.confirm('Are you sure you want to delete this school?')) return;

    setLoading(true);
    setError("");
    try {
      await axios.delete(`/schools/${selectedSchool.SchoolDBN}`);
      alert('School deleted successfully');

      // Refresh school list
      const res = await axios.get('/schools');
      setSchools(res.data);

      // Reset form
      setSelectedSchool(null);
      setSchoolData(initialSchoolData);
    } catch (err) {
      setError(err.response?.data?.message || 'Deletion failed. Please try again.');
      console.error('Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (selectedSchool) {
        await axios.put(`/schools/${selectedSchool.SchoolDBN}`, schoolData);
      } else {
        await axios.post('/schools', schoolData);
      }

      // Refresh school list
      const res = await axios.get('/schools');
      setSchools(res.data);

      // Show success message
      alert(selectedSchool ? 'School updated successfully' : 'School created successfully');

      // Reset form if new school was created
      if (!selectedSchool) {
        setSchoolData(initialSchoolData);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Operation failed. Please try again.');
      console.error('Error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>School Administration</h2>

      {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}

      <div style={{ marginBottom: '20px' }}>
        <h3>Select School</h3>
        <select
          onChange={(e) => handleSchoolSelect(e.target.value)}
          value={selectedSchool?.SchoolDBN || ''}
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          disabled={loading}
        >
          <option value="">-- Create New School --</option>
          {schools.map(school => (
            <option key={school.SchoolDBN} value={school.SchoolDBN}>
              {school.SchoolName} ({school.SchoolDBN})
            </option>
          ))}
        </select>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>School DBN*</label>
              <input
                name="SchoolDBN"
                value={schoolData.SchoolDBN}
                onChange={handleInputChange}
                required
                disabled={!!selectedSchool}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>School Name*</label>
              <input
                name="SchoolName"
                value={schoolData.SchoolName}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Street Address</label>
              <input
                name="StreetAddress"
                value={schoolData.StreetAddress}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Neighborhood</label>
              <input
                name="Neighborhood"
                value={schoolData.Neighborhood}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>District</label>
              <input
                name="District"
                value={schoolData.District}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Borough</label>
              <input
                name="Borough"
                value={schoolData.Borough}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>School Type</label>
              <input
                name="SchoolType"
                value={schoolData.SchoolType}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Grade Level</label>
              <input
                name="GradeLevel"
                value={schoolData.GradeLevel}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input
                  type="checkbox"
                  name="CommunitySchool"
                  checked={schoolData.CommunitySchool}
                  onChange={handleInputChange}
                />
                Community School
              </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Community Based Org</label>
              <input
                name="CommunityBasedOrg"
                value={schoolData.CommunityBasedOrg}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Enrollment</label>
              <input
                name="Enrollment"
                value={schoolData.Enrollment}
                onChange={handleInputChange}
                type="number"
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button
            type="submit"
            disabled={loading}
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
              disabled={loading}
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