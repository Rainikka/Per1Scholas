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
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
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
  const [selectedSchoolId, setSelectedSchoolId] = useState(null);
  const [selectedSchoolData, setSelectedSchoolData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchools = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('/public/schools');
        setSchools(res.data);
      } catch (err) {
        setError('Failed to load school list. Please try again later.');
        console.error('Error fetching schools:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  useEffect(() => {
    if (selectedSchoolId) {
      const fetchSchoolData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`/public/schools/${selectedSchoolId}`);
          setSelectedSchoolData(res.data);
        } catch (err) {
          setError('Failed to load school details.');
          console.error('Error:', err.response?.data || err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchSchoolData();
    } else {
      setSelectedSchoolData(null);
    }
  }, [selectedSchoolId]);

  const specialNeedsData = {
    labels: ['Special Needs', 'ELL Students'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchoolData ? [
          (selectedSchoolData.SpecialNeedStudents || 0) * 100,
          (selectedSchoolData.ELLStudents || 0) * 100
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
        data: selectedSchoolData ? [
          (selectedSchoolData.LivingInPoverty || 0) * 100,
          (selectedSchoolData.EconomicNeedIndex || 0) * 100
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
        data: selectedSchoolData ? [
          (selectedSchoolData.FemaleStudents || 0) * 100,
          (selectedSchoolData.MaleStudents || 0) * 100
        ] : [0, 0],
        backgroundColor: ['rgba(153, 102, 255, 0.5)', 'rgba(255, 206, 86, 0.5)'],
      }
    ]
  };

  const ethnicityData = {
    labels: ['Asian', 'Black', 'Latino', 'Multi-Race', 'Native', 'White', 'Other'],
    datasets: [
      {
        label: 'Percentage',
        data: selectedSchoolData ? [
          (selectedSchoolData.AsianStudents || 0) * 100,
          (selectedSchoolData.BlackStudents || 0) * 100,
          (selectedSchoolData.LatinoStudents || 0) * 100,
          (selectedSchoolData.MultiRaceStudents || 0) * 100,
          (selectedSchoolData.NativeStudents || 0) * 100,
          (selectedSchoolData.WhiteStudents || 0) * 100,
          (selectedSchoolData.OtherStudents || 0) * 100
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

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>School Dashboard</h2>
        <select
          onChange={(e) => setSelectedSchoolId(e.target.value)}
          value={selectedSchoolId || ''}
          style={{ width: '50%', padding: '8px' }}
        >
          <option value="">Select a school</option>
          {schools.map(school => (
            <option key={school.SchoolDBN} value={school.SchoolDBN}>
              {school.SchoolName} ({school.SchoolDBN})
            </option>
          ))}
        </select>
      </div>

      {selectedSchoolData && (
        <>
          <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f5f5f5' }}>
            <h3>{selectedSchoolData.SchoolName}</h3>
            <p>DBN: {selectedSchoolData.SchoolDBN} | District: {selectedSchoolData.District} | Borough: {selectedSchoolData.Borough}</p>
            <p>Address: {selectedSchoolData.StreetAddress}</p>
            <p>Enrollment: {selectedSchoolData.Enrollment}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
              <Bar
                data={specialNeedsData}
                options={{
                  indexAxis: 'y',
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'Special Needs & ELL Students'
                    }
                  }
                }}
              />
            </div>
            <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
              <Bar
                data={economicData}
                options={{
                  indexAxis: 'y',
                  responsive: true,
                  plugins: {
                    title: {
                      display: true,
                      text: 'Economic Indicators'
                    }
                  }
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
            <Pie
              data={ethnicityData}
              options={{
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: 'Student Ethnicity Breakdown'
                  }
                }
              }}
            />
          </div>

          {selectedSchoolData.LATITUDE && selectedSchoolData.LONGITUDE && (
            <div style={{ height: '400px', marginBottom: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
              <MapContainer
                center={[parseFloat(selectedSchoolData.LATITUDE), parseFloat(selectedSchoolData.LONGITUDE)]}
                zoom={15}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[parseFloat(selectedSchoolData.LATITUDE), parseFloat(selectedSchoolData.LONGITUDE)]}>
                  <Popup>
                    <strong>{selectedSchoolData.SchoolName}</strong><br />
                    {selectedSchoolData.StreetAddress}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard1;