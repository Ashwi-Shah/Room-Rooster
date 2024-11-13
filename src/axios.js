import axios from 'axios';

// Create an axios instance with default settings
const instance = axios.create({
  baseURL: 'https://room-rooster.vercel.app', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  // Other configurations can be added here
});

export default instance;
