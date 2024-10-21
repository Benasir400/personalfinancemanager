
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002/', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepting Requests to Attach Token from Local Storage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepting Responses to Handle Errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error.response.data); // Return the error message from the server
  }
);

export default axiosInstance;
