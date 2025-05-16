// Import React hooks and required libraries
import React, { useState, useEffect } from 'react';  // Core React functionality
import axios from 'axios';  // HTTP client for API requests

// Import Chart.js components and register required elements
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
import { Line } from 'react-chartjs-2';  // React wrapper for Chart.js line charts

// Register Chart.js components we'll use
ChartJS.register(
  CategoryScale,  // For x-axis labels
  LinearScale,    // For y-axis values
  PointElement,   // For data points
  LineElement,    // For connecting lines
  Title,          // For chart titles
  Tooltip,        // For hover tooltips
  Legend          // For chart legends
);

const Dashboard2 = () => {
  // State management
  const [schools, setSchools] = useState([]);  // Stores list of all schools
  const [selectedSchool, setSelectedSchool] = useState(null);  // Currently selected school
  const [loading, setLoading] = useState(true);  // Loading state indicator

  // Fetch all schools on component mount (empty dependency array)
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

  // Fetch detailed data when a school is selected
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

  // Show loading indicator while data is being fetched
  if (loading) return <div>Loading...</div>;

  // Configuration for ELA (English Language Arts) Score Line Chart
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
        ] : Array(8).fill(0),  // Default to zeros if no school selected
        borderColor: 'rgb(255, 99, 132)',  // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.5)',  // Point fill color
      }
    ]
  };

  // Configuration for ELA Proficiency Percentage Line Chart
  const elaProficientData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Proficient ELA',
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
      }
    ]
  };

  // Configuration for Math Score Line Chart
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
      }
    ]
  };

  // Configuration for Math Proficiency Percentage Line Chart
  const mathProficientData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Proficient Math',
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
      }
    ]
  };

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

      {/* Only show content when a school is selected */}
      {selectedSchool && (
        <>
          {/* School Information Header */}
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

          {/* Academic Performance Charts */}
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