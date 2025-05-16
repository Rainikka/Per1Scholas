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

  // Chart data definitions
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

  const economicData = {
    labels: ['Living in Poverty', 'Economic Need'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchool ? [
          selectedSchool.LivingInPoverty,
          selectedSchool.EconomicNeed
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
          selectedSchool.FemaleStudents,
          selectedSchool.MaleStudents
        ] : [0, 0],
        backgroundColor: ['rgba(153, 102, 255, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      }
    ]
  };

  const attendanceData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Attendance Rate',
        data: selectedSchool ? [
          selectedSchool.Attendance2018Rate,
          selectedSchool.Attendance2019Rate,
          selectedSchool.Attendance2020Rate,
          selectedSchool.Attendance2021Rate,
          selectedSchool.Attendance2022Rate,
          selectedSchool.Attendance2023Rate,
          selectedSchool.Attendance2024Rate,
          selectedSchool.Attendance2025Rate
        ] : Array(8).fill(0),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Chronically Absent',
        data: selectedSchool ? [
          selectedSchool.Chronically2018Absent,
          selectedSchool.Chronically2019Absent,
          selectedSchool.Chronically2020Absent,
          selectedSchool.Chronically2021Absent,
          selectedSchool.Chronically2022Absent,
          selectedSchool.Chronically2023Absent,
          selectedSchool.Chronically2024Absent,
          selectedSchool.Chronically2025Absent
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
          selectedSchool.AsianStudents,
          selectedSchool.BlackStudents,
          selectedSchool.LatinoStudents,
          selectedSchool.MultiRaceStudents,
          selectedSchool.NativeStudents,
          selectedSchool.WhiteStudents,
          selectedSchool.OtherStudents
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

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
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

      {selectedSchool && (
        <>
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

          <div style={{ height: '20vh', marginBottom: '30px', display: 'flex' }}>
            <div style={{ width: '35%' }}>
              <Bar
                data={economicData}
                options={{ indexAxis: 'y', responsive: true }}
              />
            </div>
            <div style={{ width: '15%' }}>
              <Bar
                data={genderData}
                options={{ responsive: true }}
              />
            </div>
          </div>

          <div style={{ height: '30vh', marginBottom: '30px' }}>
            <Bar
              data={attendanceData}
              options={{ responsive: true }}
            />
          </div>

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
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[selectedSchool.SchoolLatitude, selectedSchool.SchoolLongitude]}>
                    <Popup>
                      {selectedSchool.SchoolName}
                    </Popup>
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