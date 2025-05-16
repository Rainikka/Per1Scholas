// Import necessary React hooks and libraries
import React, { useState } from 'react';  // useState for managing component state
import axios from 'axios';                // For making HTTP requests
import { useNavigate } from 'react-router-dom';  // For programmatic navigation

const AdminPage = () => {
  // State management for login form
  const [email, setEmail] = useState('');          // Stores admin email
  const [password, setPassword] = useState('');    // Stores admin password
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Tracks login status

  // State for school data management
  const [schoolData, setSchoolData] = useState({
    SchoolDBN: '',      // School identification number
    SchoolName: '',     // School name
    // Other school fields would be added here
  });

  const [selectedSchool, setSelectedSchool] = useState(null);  // Currently selected school
  const navigate = useNavigate();  // Navigation hook (though unused in current code)

  // Handle admin login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send credentials to server
      const res = await axios.post('/api/admin/login', { email, password });

      // Store authentication token in localStorage
      localStorage.setItem('token', res.data.token);
      setIsLoggedIn(true);  // Update login status
    } catch (err) {
      alert('Login failed');  // Basic error handling
    }
  };

  // Handle admin logout
  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear authentication token
    setIsLoggedIn(false);              // Update login status
  };

  // Handle form input changes for school data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update specific field while preserving other fields
    setSchoolData({ ...schoolData, [name]: value });
  };

  // Handle school data submission (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { 'x-auth-token': token }  // Attach auth token to request
      };

      // If editing existing school, send PATCH request
      if (selectedSchool) {
        await axios.patch(`/api/schools/${selectedSchool.SchoolDBN}`, schoolData, config);
      }
      // If creating new school, send POST request
      else {
        await axios.post('/api/schools', schoolData, config);
      }

      alert('School data saved successfully');
      // Reset form after successful submission
      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
        // Reset other fields here
      });
    } catch (err) {
      alert('Error saving school data');
    }
  };

  // Handle school deletion
  const handleDelete = async () => {
    if (!selectedSchool) return;  // Safety check

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { 'x-auth-token': token }
      };
      // Send DELETE request for selected school
      await axios.delete(`/api/schools/${selectedSchool.SchoolDBN}`, config);

      alert('School deleted successfully');
      // Reset form after deletion
      setSelectedSchool(null);
      setSchoolData({
        SchoolDBN: '',
        SchoolName: '',
        // Reset other fields here
      });
    } catch (err) {
      alert('Error deleting school');
    }
  };

  // Handle school selection from dropdown
  const handleSchoolSelect = async (dbn) => {
    try {
      // Fetch selected school's data
      const res = await axios.get(`/api/schools/${dbn}`);
      setSelectedSchool(res.data);      // Set as selected school
      setSchoolData(res.data);          // Populate form with school data
    } catch (err) {
      alert('Error fetching school data');
    }
  };

  // Render login form if not authenticated
  if (!isLoggedIn) {
    return (
      <div>
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  // Render admin dashboard if authenticated
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* School selection dropdown */}
      <div>
        <h3>School Selector</h3>
        <select onChange={(e) => handleSchoolSelect(e.target.value)}>
          <option value="">Select a school</option>
          {/* Schools would be dynamically populated here */}
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
        {/* Other school fields would be added here */}
        <button type="submit">Save</button>
        {/* Show delete button only when editing existing school */}
        {selectedSchool && (
          <button type="button" onClick={handleDelete}>Delete</button>
        )}
      </form>
    </div>
  );
};

export default AdminPage;