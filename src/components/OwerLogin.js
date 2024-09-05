import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OwerLogin = ({ setIsAuthenticated }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      let apiUrl = '';
      
      // Check the email and password and assign the appropriate API URL
      if (formData.email === 'divy@gmail.com' && formData.password === 'divybhai') {
        apiUrl = 'https://room-rooster.vercel.app/login';
      } else if (formData.email === 'ashwi@gmail.com' && formData.password === 'ashwi') {
        apiUrl = 'https://room-rooster.vercel.app/get-data-idwise/details/66bb2d2b403610f55985431d';
      } else {
        setErrorMessage('Invalid email or password');
        return;
      }

      // Fetch the data from the selected API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);

        // Navigate based on the returned data (assuming data.id is part of the response)
        navigate(`/ower-page/${data.id}`);
      } else {
        console.error('Error:', response.statusText);
        setErrorMessage('Failed to login, please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred, please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Ower-Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`p-3 border border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`p-3 border border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
        <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
};

export default OwerLogin;