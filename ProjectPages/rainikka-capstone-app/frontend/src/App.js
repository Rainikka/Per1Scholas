{/* Importing Main App Components */ }
import AdminPage from './pages/AdminPage';       // Admin 
import Dashboard1 from './pages/Dashboard1';     // First 
import Dashboard2 from './pages/Dashboard2';     // Second dashboard viewimport Navbar from './components/Navbar';        // 
import HomePage from './pages/HomePage';         // Note: 

function App() {
  return (

    <Router>
      {/* Route Rendering: Navbar */}
      <Navbar />


      <Routes>
        {/* Route Rendering: Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route Rendering: Admin Path */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Route Rendering: Data Dashboard 1 */}
        <Route path="/dashboard1" element={<Dashboard1 />} />

        {/* Route Rendering: Data Dashboard 2 */}
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>
    </Router>
  );
}

{/* Exportng App Components */ }
export default App;