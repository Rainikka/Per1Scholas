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
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all schools 
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get('/api/public/schools');
        setSchools(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch schools:', err);
        setLoading(false);
      }
    };
    fetchSchools();
  }, []);

  // Fetch school details when selected
  useEffect(() => {
    if (selectedSchool) {
      const fetchSchoolData = async () => {
        try {
          const res = await axios.get(`/api/public/schools/${selectedSchool}`);
          setSelectedSchool(res.data);
        } catch (err) {
          console.error('Failed to fetch school data:', err);
        }
      };
      fetchSchoolData();
    }
  }, [selectedSchool]);

  // Chart data definitions
  const elaScoreData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Average ELA Score',
        data: selectedSchool ? [
          selectedSchool.Avg2018ELAScore,
          selectedSchool.Avg2019ELAScore,
          selectedSchool.Avg2020ELAScore,
          selectedSchool.Avg2021ELAScore,
          selectedSchool.Avg2022ELAScore,
          selectedSchool.Avg2023ELAScore,
          selectedSchool.Avg2024ELAScore,
          selectedSchool.Avg2025ELAScore
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
        data: selectedSchool ? [
          selectedSchool.Proficient2018ELA,
          selectedSchool.Proficient2019ELA,
          selectedSchool.Proficient2020ELA,
          selectedSchool.Proficient2021ELA,
          selectedSchool.Proficient2022ELA,
          selectedSchool.Proficient2023ELA,
          selectedSchool.Proficient2024ELA,
          selectedSchool.Proficient2025ELA
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
        data: selectedSchool ? [
          selectedSchool.Avg2018MathScore,
          selectedSchool.Avg2019MathScore,
          selectedSchool.Avg2020MathScore,
          selectedSchool.Avg2021MathScore,
          selectedSchool.Avg2022MathScore,
          selectedSchool.Avg2023MathScore,
          selectedSchool.Avg2024MathScore,
          selectedSchool.Avg2025MathScore
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
        data: selectedSchool ? [
          selectedSchool.Proficient2018Math,
          selectedSchool.Proficient2019Math,
          selectedSchool.Proficient2020Math,
          selectedSchool.Proficient2021Math,
          selectedSchool.Proficient2022Math,
          selectedSchool.Proficient2023Math,
          selectedSchool.Proficient2024Math,
          selectedSchool.Proficient2025Math
        ] : Array(8).fill(0),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.1
      }
    ]
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      {/* School Selection Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <select
          style={{ width: '50%', padding: '8px' }}
          onChange={(e) => setSelectedSchool(e.target.value)}
          value={selectedSchool?.SchoolDBN || ''}
        >
          <option value="">Select a school</option>
          {schools.map(school => (
            <option key={school.SchoolDBN} value={school.SchoolDBN}>
              {school.SchoolName} ({school.SchoolDBN})
            </option>
          ))}
        </select>
      </div>

      {selectedSchool && (
        <>
          {/* School Title */}
          <div style={{
            height: '15vh',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #eee'
          }}>
            <h2 style={{ width: '50%' }}>
              {selectedSchool.SchoolName}
            </h2>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              <span>DBN: {selectedSchool.SchoolDBN}</span>
              <span>District: {selectedSchool.District}</span>
              <span>{selectedSchool.Borough}</span>
            </div>
          </div>

          {/* Academic Charts */}
          <div style={{ marginBottom: '30px' }}>
            <h3>English Language Arts Performance</h3>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <div style={{ width: '50%', padding: '10px' }}>
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
              <div style={{ width: '50%', padding: '10px' }}>
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
            <div style={{ display: 'flex' }}>
              <div style={{ width: '50%', padding: '10px' }}>
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
              <div style={{ width: '50%', padding: '10px' }}>
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