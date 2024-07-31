// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = ({ setIsAuthenticated, setName }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = formData;
//     let formErrors = {};

//     if (!name) formErrors.name = 'Name is required';
//     if (!email) formErrors.email = 'Email is required';
//     else if (!validateEmail(email)) formErrors.email = 'Invalid email address';
//     if (!password) formErrors.password = 'Password is required';

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }

//     try {
//       const response = await fetch('https://room-rooster.vercel.app/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setIsAuthenticated(true);
//         setName(result.name);
//         navigate('/'); // Redirect to home on success
//       } else {
//         console.error('Failed to signup');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Sign Up</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//         </div>
//         <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ setIsAuthenticated, setName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    let formErrors = {};
  
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!validateEmail(email)) formErrors.email = 'Invalid email address';
    if (!password) formErrors.password = 'Password is required';
  
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    try {
      const response = await fetch('https://backend-cyan-one.vercel.app/register', { // Backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        setIsAuthenticated(true);
        setName(result.name);
        navigate('/'); // Redirect to home on success
      } else {
        console.error('Failed to signup');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-gray-600 mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;