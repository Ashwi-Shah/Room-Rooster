// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Resizer from "react-image-file-resizer";

// const propertyTypes = ["Villa", "Flat", "Apartment", "Cottage"];
// const locations = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"];

// const AddProperty = ({ onAddProperty }) => {
//   const [property, setProperty] = useState({
//     name: "",
//     price: "",
//     phoneNumber: "",
//     location:"",
//     description: "",
//     images: [],
//     sqft: "",
//     bed: "",
//     bath: "",
//     ownername: "",
//     FurnishedStatus: "",
//     Perferredfor: "",
//     ageofconstruction: "",
//     info: "",
//     Availability: "",
//     deposit: ""
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProperty({
//       ...property,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length > 5) {
//       alert("You can upload up to 5 images.");
//       return;
//     }
//     const resizedImages = [];

//     files.forEach(file => {
//       Resizer.imageFileResizer(
//         file,
//         800,
//         550,
//         "JPEG",
//         100,
//         0,
//         (uri) => {
//           resizedImages.push(uri);
//           if (resizedImages.length === files.length) {
//             setProperty({
//               ...property,
//               images: resizedImages
//             });
//           }
//         },
//         "blob"
//       );
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     Object.keys(property).forEach(key => {
//       if (key === 'images') {
//         property.images.forEach((image, index) => {
//           formData.append(`image${index + 1}`, image, `image${index + 1}.jpeg`);
//         });
//       } else {
//         formData.append(key, property[key]);
//       }
//     });
  
//     try {
//       const response = await fetch("https://room-rooster.vercel.app/post/details", {
//         method: "POST",
//         body: formData,
//         // Remove headers; fetch will automatically set the correct headers for FormData
//       });
  
//       if (response.ok) {
//         const newProperty = await response.json();
//         console.log("Property added successfully:", newProperty);
  
//         if (onAddProperty) {
//           onAddProperty(newProperty);
//         }
//       } else {
//         const errorData = await response.json();
//         console.error("Server response error:", errorData);
//         setError(`Error: ${response.status} - ${errorData.message || response.statusText}`);
//       }
//     } catch (error) {
//       setError("An unexpected error occurred. Please try again later.");
//       console.error("Error adding property:", error);
//     } finally {
//       navigate("/property");
//     }
//   };
  
    
  
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10 transition-shadow duration-300 hover:shadow-2xl">
//       <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Add Property</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//         <label className="font-semibold text-gray-600 mb-2">Property Type:</label>
//           <select
//             name="name"
//             value={property.name}
//             onChange={handleChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           >
//             <option value="" disabled>Select Property Type</option>
//             {propertyTypes.map((type, index) => (
//               <option key={index} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Price (per month):</label>
//           <input
//             type="number"
//             name="price"
//             value={property.price}
//             onChange={handleChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Phone Number:</label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={property.phoneNumber}
//             onChange={handleChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//         <label className="font-semibold text-gray-600 mb-2">Location:</label>
//           <select
//             name="location"
//             value={property.location}
//             onChange={handleChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           >
//             <option value="" disabled>Select Location</option>
//             {locations.map((loc, index) => (
//               <option key={index} value={loc}>{loc}</option>
//             ))}
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Address:</label>
//           <textarea
//             name="description"
//             value={property.description}
//             onChange={handleChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 resize-y"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Property Image:</label>
//           <input
//             type="file"
//             name="image"
//             multiple
//             onChange={handleImageChange}
//             required
//             className="p-3 border border-gray-300 rounded-md focus:outline-none"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Size (Sqft):</label>
//           <input
//             type="number"
//             name="sqft"
//             value={property.sqft}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Bedrooms:</label>
//           <input
//             type="number"
//             name="bed"
//             value={property.bed}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Bathrooms:</label>
//           <input
//             type="number"
//             name="bath"
//             value={property.bath}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Owner Name:</label>
//           <input
//             type="text"
//             name="ownername"
//             value={property.ownername}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Furnished Status:</label>
//           <input
//             type="text"
//             name="FurnishedStatus"
//             value={property.FurnishedStatus}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Preferred For:</label>
//           <input
//             type="text"
//             name="Perferredfor"
//             value={property.Perferredfor}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Age of Construction:</label>
//           <input
//             type="number"
//             name="ageofconstruction"
//             value={property.ageofconstruction}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//         </div>
//         <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Additional Info:</label>
//           <input
//             type="text"
//             name="info"
//             value={property.info}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           </div>
//           <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">Availability:</label>
//           <input
//             type="text"
//             name="Availability"
//             value={property.Availability}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           </div>
//           <div className="flex flex-col">
//           <label className="font-semibold text-gray-600 mb-2">deposit:</label>
//           <input
//             type="number"
//             name="deposit"
//             value={property.deposit}
//             onChange={handleChange}
//             className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
//           />
//           </div>
//         <button type="submit" className="mt-6 w-full py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProperty;

import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    phoneNumber: '',
    location: '',
    description: '',
    images: [],
    sqft: '',
    bed: '',
    bath: '',
    ownername: '',
    FurnishedStatus: '',
    Perferredfor: '',
    ageofconstruction: '',
    info: '',
    Availability: '',
    deposit: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const propertyTypes = ["Villa", "Flat", "Apartment", "Cottage"];
  const locations = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    
    if (selectedFiles.length + formData.images.length > 5) {
      setMessage('You can only upload a maximum of 5 images.');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...selectedFiles]
    }));
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Prepare form data for sending to the server
    const submitData = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === 'images') {
        formData.images.forEach((image) => submitData.append('images', image));
      } else {
        submitData.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('https://room-rooster.vercel.app/post/details', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message || 'Property added successfully!');
      setFormData({
        name: '',
        price: '',
        phoneNumber: '',
        location: '',
        description: '',
        images: [],
        sqft: '',
        bed: '',
        bath: '',
        ownername: '',
        FurnishedStatus: '',
        Perferredfor: '',
        ageofconstruction: '',
        info: '',
        Availability: '',
        deposit: ''
      });
    } catch (error) {
      setMessage('Error adding property. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Property</h2>
      {message && <p className="mb-4">{message}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        
        {/* Name Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
          <select
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          >
            <option value="" disabled>Select Property Type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Location Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border rounded px-3 py-2 w-full"
          >
            <option value="" disabled>Select Location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Images (Max 5)</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="border rounded px-3 py-2 w-full"
          />
          <p className="text-gray-500 text-sm mt-1">{formData.images.length} / 5 images uploaded</p>
        </div>

        {/* Other Fields */}
        {Object.keys(formData).map((field, index) => (
          field !== 'name' && field !== 'location' && field !== 'images' && (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                {field}
              </label>
              <input
                type={
                  field === 'price' || field === 'sqft' || field === 'bed' ||
                  field === 'bath' || field === 'phoneNumber' || field === 'deposit' ? 'number' : 'text'
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 w-full"
              />
            </div>
          )
        ))}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Property'}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;

