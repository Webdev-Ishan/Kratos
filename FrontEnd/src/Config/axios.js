import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000', // Ensure this points to your backend server
  headers: {
    "Authorization": `Bearer ${localStorage.getItem('token')}`
  }
});

export default axiosInstance;