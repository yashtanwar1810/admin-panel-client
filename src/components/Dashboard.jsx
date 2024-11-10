// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios'; // Axios instance for making requests
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // Fetch user info on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Assuming you have a route like /admin/profile to get the logged-in user data
        const response = await axiosInstance.get('/admin/profile');
        setUser(response.data);
      } catch (error) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="p-8">
      <h1 className="text-3xl">Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          {/* Link to employee list page */}
          <button
            onClick={() => navigate('/employees')}
            className="mt-4 p-2 bg-blue-600 text-white rounded"
          >
            View All Employees
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
