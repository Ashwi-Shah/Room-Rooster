// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';

// // const OwerLogin = ({ setIsAuthenticated }) => {
// //     const { id } = useParams();
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const validateForm = () => {
// //     const { email, password } = formData;
// //     const errors = {};

// //     if (!email) {
// //       errors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// //       errors.email = 'Email address is invalid';
// //     }

// //     if (!password) {
// //       errors.password = 'Password is required';
// //     }

// //     setErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!validateForm()) return;
  
// //     try {
// //       const response = await fetch('https://room-rooster.vercel.app/login', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(formData),
// //       });
  
// //       if (response.ok) {
// //         const data = await response.json(); // Assuming the response contains an `id`
// //         setIsAuthenticated(true);  // Update authentication state
  
// //         // Navigate to OwerPage with the ID returned from the API
// //         navigate(`/ower-page/${data.id}`);
// //       } else {
// //         console.error('Error logging in:', response.statusText);
// //       }
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //     }
// //   };
  
// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
// //       <h2 className="text-2xl font-bold mb-4">Ower-Login</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div className="flex flex-col">
// //           <label className="font-semibold text-gray-600 mb-2">Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className={`p-3 border border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
// //           />
// //           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //         </div>
// //         <div className="flex flex-col">
// //           <label className="font-semibold text-gray-600 mb-2">Password:</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             className={`p-3 border border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`}
// //           />
// //           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
// //         </div>
// //         <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default OwerLogin;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OwerLogin = ({ setIsAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Predefined email and password for authentication
//   const defaultEmail = 'defaultemail@example.com';
//   const defaultPassword = 'defaultpassword';

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const { email, password } = formData;
//     const errors = {};

//     if (!email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email address is invalid';
//     }

//     if (!password) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     // Check if the input email and password match the predefined values
//     if (formData.email === defaultEmail && formData.password === defaultPassword) {
//       setIsAuthenticated(true);  // Update authentication state
//       navigate(`/ower-page/1`);  // Redirect to the OwerPage with a sample ID (e.g., 1)
//     } else {
//       setErrors({ general: 'Invalid email or password' });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-2xl font-bold mb-4">Ower-Login</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`p-3 border border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className={`p-3 border border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`}
//           />
//           {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//         </div>
//         {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
//         <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OwerLogin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OwerLogin = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Predefined email and password for two admins
  const admin1 = {
    email: 'divy@gmail.com',
    password: 'divy',
    id: '66b30a5bc0cfb7abfd5ee40a'
  };

  const admin2 = {
    email: 'ashwi@gmail.com',
    password: 'ashwi',
    id: '66b31ca03cbbbaa3c6142d83'
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Check if input email and password match one of the predefined admins
    if (formData.email === admin1.email && formData.password === admin1.password) {
      setIsAuthenticated(true);  // Update authentication state
      navigate(`/ower-page/${admin1.id}`);  // Redirect to OwerPage with admin1's ID
    } else if (formData.email === admin2.email && formData.password === admin2.password) {
      setIsAuthenticated(true);  // Update authentication state
      navigate(`/ower-page/${admin2.id}`);  // Redirect to OwerPage with admin2's ID
    } else {
      setErrors({ general: 'Invalid email or password' });
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
        {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
        <button type="submit" className="w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
};

export default OwerLogin;
