{/* Importing Main App Components */ }
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* Route : Navbar */}
      <Navbar />

      <Routes>
        {/* Route : Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route :Admin Path */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Route : Data Dashboard 1 */}
        <Route path="/dashboard1" element={<Dashboard1 />} />

        {/* Route : Data Dashboard 2 */}
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

export default App;