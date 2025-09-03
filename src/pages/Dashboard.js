import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(localStorage.getItem('profilePic') || null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('profilePic');
    navigate('/login');
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        localStorage.setItem('profilePic', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>CareerBuddy Dashboard</h2>
        {user && (
          <>
            <div className="profile-section">
              <img 
                src={profilePic || "https://via.placeholder.com/100"} 
                alt="Profile" 
                className="profile-pic" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleProfilePicChange} 
              />
            </div>
            <p><strong>Welcome,</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
