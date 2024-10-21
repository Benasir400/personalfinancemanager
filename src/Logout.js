import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations
    console.log('User logged out.');
    navigate('/');
  };

  return (
    <div className="logout-container">
      <h2>Are you sure you want to logout?</h2>
      <button className="btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
