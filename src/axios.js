// src/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Your backend API URL
  withCredentials: true,           // This is important to send/receive cookies
});

// Add request interceptors if needed (for Authorization headers, etc.)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add Authorization header if needed for some routes
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
