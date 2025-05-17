import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { Bar, Pie } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('/api/public/schools');
        setSchools(res.data);
      } catch (err) {
        setError('Failed to load school list');
        console.error('Error fetching schools:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    if (selectedSchool) {
      const fetchSchoolData = async () => {
        try {
          const res = await axios.get(`/api/public/schools/${selectedSchool}`);
          setSelectedSchool(res.data);
        } catch (err) {
          setError('Failed to load school details');
          console.error('Error fetching school data:', err);
        }
      };
      fetchSchoolData();
    }
  }, [selectedSchool]);

  // Chart data definitions
  const specialNeedsData = {
    labels: ['Special Needs', 'ELL Students'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.SpecialNeedStudents * 100,
          selectedSchool.ELLStudents * 100
        ] : [0, 0],
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
      }
    ]
  };

  const economicData = {
    labels: ['Living in Poverty', 'Economic Need'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.LivingInPoverty * 100,
          selectedSchool.EconomicNeed * 100
        ] : [0, 0],
        backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(75, 192, 192, 0.5)'],
      }
    ]
  };

  const genderData = {
    labels: ['Female', 'Male'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.FemaleStudents * 100,
          selectedSchool.MaleStudents * 100
        ] : [0, 0],
        backgroundColor: ['rgba(153, 102, 255, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      }
    ]
  };

  const attendanceData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Attendance Rate %',
        data: selectedSchool ? [
          selectedSchool.Attendance2018Rate * 100,
          selectedSchool.Attendance2019Rate * 100,
          selectedSchool.Attendance2020Rate * 100,
          selectedSchool.Attendance2021Rate * 100,
          selectedSchool.Attendance2022Rate * 100,
          selectedSchool.Attendance2023Rate * 100,
          selectedSchool.Attendance2024Rate * 100,
          selectedSchool.Attendance2025Rate * 100
        ] : Array(8).fill(0),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Chronically Absent %',
        data: selectedSchool ? [
          (selectedSchool.Chronically2018Absent || 0) * 100,
          (selectedSchool.Chronically2019Absent || 0) * 100,
          (selectedSchool.Chronically2020Absent || 0) * 100,
          (selectedSchool.Chronically2021Absent || 0) * 100,
          (selectedSchool.Chronically2022Absent || 0) * 100,
          (selectedSchool.Chronically2023Absent || 0) * 100,
          (selectedSchool.Chronically2024Absent || 0) * 100,
          (selectedSchool.Chronically2025Absent || 0) * 100
        ] : Array(8).fill(0),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  };

  const ethnicityData = {
    labels: ['Asian', 'Black', 'Latino', 'Multi-Race', 'Native', 'White', 'Other'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.AsianStudents * 100,
          selectedSchool.BlackStudents * 100,
          selectedSchool.LatinoStudents * 100,
          selectedSchool.MultiRaceStudents * 100,
          selectedSchool.NativeStudents * 100,
          selectedSchool.WhiteStudents * 100,
          selectedSchool.OtherStudents * 100
        ] : Array(7).fill(0),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(199, 199, 199, 0.5)'
        ],
      }
    ]
  };

  if (loading) return <div className="loading">Loading schools...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="dashboard-container">
      {/* School selection dropdown */}
      <div className="school-selector">
        <select
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
          <span className="neighborhood">
            {selectedSchool.Neighborhood}
          </span>
        )}
      </div>

      {selectedSchool && (
        <>
          {/* School information header */}
          <div className="school-header">
            <h2>{selectedSchool.SchoolName}</h2>
            <div className="school-meta">
              <span>DBN: {selectedSchool.SchoolDBN}</span>
              <span>District: {selectedSchool.District}</span>
              <span>{selectedSchool.Borough}</span>
            </div>
          </div>

          {/* School details */}
          <div className="school-details">
            <span>{selectedSchool.CommunityBasedOrg || 'No community partner'}</span>
            <span>{selectedSchool.SchoolType}</span>
            <span>{selectedSchool.GradeLevel}</span>
          </div>

          {/* Charts section */}
          <div className="charts-section">
            <div className="chart-row">
              <div className="chart-container">
                <Bar
                  data={specialNeedsData}
                  options={{
                    indexAxis: 'y',
                    responsive: true,
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Percentage (%)'
                        }
                      }
                    }
                  }}
                />
              </div>
              <div className="enrollment-box">
                <h3>Enrollment</h3>
                <p>{selectedSchool.Enrollment.toLocaleString()}</p>
              </div>
            </div>

            <div className="chart-row">
              <div className="chart-container">
                <Bar
                  data={economicData}
                  options={{
                    indexAxis: 'y',
                    responsive: true,
                    scales: {
                      x: {
                        title: {
                          display: true,
                          text: 'Percentage (%)'
                        }
                      }
                    }
                  }}
                />
              </div>
              <div className="chart-container">
                <Bar
                  data={genderData}
                  options={{
                    responsive: true,
                    scales: {
                      y: {
                        title: {
                          display: true,
                          text: 'Percentage (%)'
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>

            <div className="chart-container-wide">
              <Bar
                data={attendanceData}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      title: {
                        display: true,
                        text: 'Percentage (%)'
                      }
                    }
                  }
                }}
              />
            </div>

            <div className="chart-row">
              <div className="chart-container">
                <Pie
                  data={ethnicityData}
                  options={{
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            return `${context.label}: ${context.raw}%`;
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
              <div className="map-container">
                {selectedSchool.SchoolLatitude && selectedSchool.SchoolLongitude ? (
                  <MapContainer
                    center={[selectedSchool.SchoolLatitude, selectedSchool.SchoolLongitude]}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[selectedSchool.SchoolLatitude, selectedSchool.SchoolLongitude]}>
                      <Popup>
                        <strong>{selectedSchool.SchoolName}</strong><br />
                        {selectedSchool.StreetAddress}
                      </Popup>
                    </Marker>
                  </MapContainer>
                ) : (
                  <p>No location data available</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard1;