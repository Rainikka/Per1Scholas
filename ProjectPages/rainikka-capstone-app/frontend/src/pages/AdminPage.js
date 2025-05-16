import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [schoolData, setSchoolData] = useState({
    SchoolDBN: '',
    SchoolName: '',
  });

  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedSchool) {
        await axios.patch(`/api/schools/${selectedSchool.SchoolDBN}`, schoolData);
      } else {
        await axios.post('/api/schools', schoolData);
      }
      alert('School data saved successfully');
      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
      });
    } catch (err) {
      alert('Error saving school data');
    }
  };

  const handleDelete = async () => {
    if (!selectedSchool) return;
    try {
      await axios.delete(`/api/schools/${selectedSchool.SchoolDBN}`);
      alert('School deleted successfully');
      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
      });
    } catch (err) {
      alert('Error deleting school');
    }
  };

  const handleSchoolSelect = async (dbn) => {
    try {
      const res = await axios.get(`/api/schools/${dbn}`);
      setSelectedSchool(res.data);
      setSchoolData(res.data);
    } catch (err) {
      alert('Error fetching school data');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* School selection dropdown */}
      <div>
        <h3>School Selector</h3>
        <select onChange={(e) => handleSchoolSelect(e.target.value)}>
          <option value="">Select a school</option>
        </select>
      </div>

      {/* School data form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>School DBN:</label>
          <input
            name="SchoolDBN"
            value={schoolData.SchoolDBN}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>School Name:</label>
          <input
            name="SchoolName"
            value={schoolData.SchoolName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Save</button>

        {selectedSchool && (
          <button type="button" onClick={handleDelete}>Delete</button>
        )}
      </form>
    </div>
  );
};

export default AdminPage;