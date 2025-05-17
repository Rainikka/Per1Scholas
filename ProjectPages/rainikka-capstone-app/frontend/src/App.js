import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import AdminPage from './pages/AdminPage';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

// Configure axios with base URL and error handling
axios.defaults.baseURL = 'http://localhost:3000/api';
axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;