// Import React hooks and required libraries
import React, { useState, useEffect } from 'react';  // Core React functionality
import axios from 'axios';  // HTTP client for API requests

// Import Chart.js components and register required elements
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';  // React wrappers for Chart.js

// Import mapping components from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Required CSS for leaflet maps

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard1 = () => {
  // State management
  const [schools, setSchools] = useState([]);  // Stores list of all schools
  const [selectedSchool, setSelectedSchool] = useState(null);  // Currently selected school
  const [loading, setLoading] = useState(true);  // Loading state indicator

  // Fetch all schools on component mount
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('/api/public/schools');
        setSchools(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  // Fetch detailed data when a school is selected
  useEffect(() => {
    if (selectedSchool) {
      const fetchSchoolData = async () => {
        try {
          const res = await axios.get(`/api/public/schools/${selectedSchool}`);
          setSelectedSchool(res.data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchSchoolData();
    }
  }, [selectedSchool]);

  // Show loading indicator while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Chart data configurations
  const specialNeedsData = {
    labels: ['Special Needs', 'ELL Students'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.SpecialNeedStudents,
          selectedSchool.ELLStudents
        ] : [0, 0],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      }
    ]
  };

  // Additional chart configurations (economic, gender, attendance, ethnicity)
  // ... (similar structure for other charts)

  return (
    <div style={{ padding: '20px' }}>
      {/* School selection dropdown */}
      <div style={{ height: '5vh', marginBottom: '15px' }}>
        <select
          style={{ width: '50%' }}
          onChange={(e) => setSelectedSchool(e.target.value)}
          value={selectedSchool?.SchoolDBN || ''}
        >
          <option value="">Select a school</option>
          {schools.map(school => (
            <option key={school.SchoolDBN} value={school.SchoolDBN}>
              {school.SchoolName} - {school.SchoolDBN}
            </option>
          ))}
        </select>
        {selectedSchool && (
          <span style={{ width: '15%', marginLeft: '10px' }}>
            {selectedSchool.Neighborhood}
          </span>
        )}
      </div>

      {/* Main dashboard content (only shown when school is selected) */}
      {selectedSchool && (
        <>
          {/* School information header */}
          <div style={{ height: '15vh', marginBottom: '10px' }}>
            <h2 style={{ width: '50%', display: 'inline-block' }}>
              {selectedSchool.SchoolName}
            </h2>
            <span style={{ width: '15%', display: 'inline-block' }}>
              {selectedSchool.SchoolDBN}
            </span>
            <span style={{ width: '10%', display: 'inline-block' }}>
              District {selectedSchool.District}
            </span>
            <span style={{ width: '25%', display: 'inline-block' }}>
              {selectedSchool.Borough}
            </span>
          </div>

          {/* School metadata section */}
          <div style={{ height: '10vh', marginBottom: '20px' }}>
            <span style={{ width: '40%', display: 'inline-block' }}>
              {selectedSchool.CommunityBasedOrg || 'No community partner'}
            </span>
            <span style={{ width: '20%', display: 'inline-block' }}>
              {selectedSchool.SchoolType}
            </span>
            <span style={{ width: '20%', display: 'inline-block' }}>
              {selectedSchool.GradeLevel}
            </span>
          </div>

          {/* Data visualization section */}
          <div style={{ height: '20vh', marginBottom: '20px', display: 'flex' }}>
            <div style={{ width: '40%' }}>
              <Bar
                data={specialNeedsData}
                options={{ indexAxis: 'y', responsive: true }}
              />
            </div>
            <div style={{ width: '15%', padding: '20px', border: '1px solid #ccc' }}>
              <h3>Enrollment</h3>
              <p>{selectedSchool.Enrollment}</p>
            </div>
          </div>

          {/* Additional chart visualizations */}
          <div style={{ height: '20vh', marginBottom: '30px', display: 'flex' }}>
            <div style={{ width: '35%' }}>
              <Bar data={economicData} options={{ indexAxis: 'y', responsive: true }} />
            </div>
            <div style={{ width: '15%' }}>
              <Bar data={genderData} options={{ responsive: true }} />
            </div>
          </div>

          {/* Attendance trends chart */}
          <div style={{ height: '30vh', marginBottom: '30px' }}>
            <Bar data={attendanceData} options={{ responsive: true }} />
          </div>

          {/* Ethnicity pie chart and map */}
          <div style={{ height: '30vh', display: 'flex' }}>
            <div style={{ width: '30%' }}>
              <Pie data={ethnicityData} />
            </div>
            <div style={{ width: '40%' }}>
              {selectedSchool.SchoolLatitude && selectedSchool.SchoolLongitude ? (
                <MapContainer
                  center={[selectedSchool.SchoolLatitude, selectedSchool.SchoolLongitude]}
                  zoom={13}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[selectedSchool.SchoolLatitude, selectedSchool.SchoolLongitude]}>
                    <Popup>{selectedSchool.SchoolName}</Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <p>No location data available</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard1;