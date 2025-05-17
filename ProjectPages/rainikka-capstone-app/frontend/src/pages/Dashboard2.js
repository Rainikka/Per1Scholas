import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard2 = () => {
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
        console.error('Error:', err.response?.data || err.message);
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

  const elaScoreData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Average ELA Score',
        data: selectedSchoolData ? [
          selectedSchoolData.Avg2018ELAScore || 0,
          selectedSchoolData.Avg2019ELAScore || 0,
          selectedSchoolData.Avg2020ELAScore || 0,
          selectedSchoolData.Avg2021ELAScore || 0,
          selectedSchoolData.Avg2022ELAScore || 0,
          selectedSchoolData.Avg2023ELAScore || 0,
          selectedSchoolData.Avg2024ELAScore || 0,
          selectedSchoolData.Avg2025ELAScore || 0
        ] : Array(8).fill(0),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.1
      }
    ]
  };

  const elaProficientData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'ELA Proficiency %',
        data: selectedSchoolData ? [
          (selectedSchoolData.Proficient2018ELA || 0) * 100,
          (selectedSchoolData.Proficient2019ELA || 0) * 100,
          (selectedSchoolData.Proficient2020ELA || 0) * 100,
          (selectedSchoolData.Proficient2021ELA || 0) * 100,
          (selectedSchoolData.Proficient2022ELA || 0) * 100,
          (selectedSchoolData.Proficient2023ELA || 0) * 100,
          (selectedSchoolData.Proficient2024ELA || 0) * 100,
          (selectedSchoolData.Proficient2025ELA || 0) * 100
        ] : Array(8).fill(0),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.1
      }
    ]
  };

  const mathScoreData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Average Math Score',
        data: selectedSchoolData ? [
          selectedSchoolData.Avg2018MathScore || 0,
          selectedSchoolData.Avg2019MathScore || 0,
          selectedSchoolData.Avg2020MathScore || 0,
          selectedSchoolData.Avg2021MathScore || 0,
          selectedSchoolData.Avg2022MathScore || 0,
          selectedSchoolData.Avg2023MathScore || 0,
          selectedSchoolData.Avg2024MathScore || 0,
          selectedSchoolData.Avg2025MathScore || 0
        ] : Array(8).fill(0),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1
      }
    ]
  };

  const mathProficientData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Math Proficiency %',
        data: selectedSchoolData ? [
          (selectedSchoolData.Proficient2018Math || 0) * 100,
          (selectedSchoolData.Proficient2019Math || 0) * 100,
          (selectedSchoolData.Proficient2020Math || 0) * 100,
          (selectedSchoolData.Proficient2021Math || 0) * 100,
          (selectedSchoolData.Proficient2022Math || 0) * 100,
          (selectedSchoolData.Proficient2023Math || 0) * 100,
          (selectedSchoolData.Proficient2024Math || 0) * 100,
          (selectedSchoolData.Proficient2025Math || 0) * 100
        ] : Array(8).fill(0),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.1
      }
    ]
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2>Academic Performance Dashboard</h2>
        <select
          style={{ width: '50%', padding: '8px' }}
          onChange={(e) => setSelectedSchoolId(e.target.value)}
          value={selectedSchoolId || ''}
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
            <p>DBN: {selectedSchoolData.SchoolDBN} | District: {selectedSchoolData.District}</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3>English Language Arts Performance</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
                <Line
                  data={elaScoreData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Average ELA Scores Over Time'
                      }
                    }
                  }}
                />
              </div>
              <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
                <Line
                  data={elaProficientData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'ELA Proficiency Rates Over Time'
                      }
                    }
                  }}
                />
              </div>
            </div>

            <h3>Mathematics Performance</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
                <Line
                  data={mathScoreData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Average Math Scores Over Time'
                      }
                    }
                  }}
                />
              </div>
              <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '5px' }}>
                <Line
                  data={mathProficientData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Math Proficiency Rates Over Time'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard2;