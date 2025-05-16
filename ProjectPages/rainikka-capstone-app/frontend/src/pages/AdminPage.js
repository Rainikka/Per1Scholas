import React from 'react';  // ← Only once at the top
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={handleClick}>Go to Dashboard</button>
    </div>
  );
};

export default AdminPage;