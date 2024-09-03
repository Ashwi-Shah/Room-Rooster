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
//       const response = await fetch("https://room-rooster.vercel.app/dd", {
//         method: "POST",
//         body: formData,
//       });
  
//       if (response.ok) {
//         const newProperty = await response.json();
//         console.log("Property added successfully:", newProperty);
//         if (onAddProperty) {
//           onAddProperty(newProperty);
//         }
//         navigate("/property-listing"); // Redirect to the property listing page after adding the property
//       } else {
//         const errorData = await response.json();
//         console.error("Server response error:", errorData);
//         setError(`Error: ${response.statusText} - ${errorData.message}`);
//       }
//     } catch (error) {
//       setError("An unexpected error occurred. Please try again later.");
//       console.error("Error adding property:", error);
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






// src/components/AddPropertyForm.js
import React, { useState } from 'react';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    images: [],
    phoneNumber: '',
    sqft: '',
    bed: '',
    bath: '',
    info: '',
    ownerName: '',
    furnishedStatus: '',
    preferredFor: '',
    ageOfConstruction: '',
    deposit: '',
    availability: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      images: e.target.files
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    // Append form data to FormData object
    for (const key in formData) {
      if (key === 'images') {
        for (const file of formData.images) {
          formDataToSend.append('images', file);
        }
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }
  
    try {
      const response = await fetch('https://room-rooster.vercel.app/dd', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.ok) {
        alert('Property added successfully!');
      } else {
        const errorText = await response.text();
        console.error('Error submitting form:', errorText);
        alert('Failed to add property. Server responded with: ' + errorText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error adding the property. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-10 p-8 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add Property</h1>
      
      <label className="block mb-4">
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Price:
        <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Phone Number:
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Sqft:
        <input type="text" name="sqft" value={formData.sqft} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Bed:
        <input type="text" name="bed" value={formData.bed} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Bath:
        <input type="text" name="bath" value={formData.bath} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Owner Name:
        <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Info:
        <input type="text" name="info" value={formData.info} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Furnished Status:
        <input type="text" name="furnishedStatus" value={formData.furnishedStatus} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Preferred For:
        <input type="text" name="preferredFor" value={formData.preferredFor} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Age of Construction:
        <input type="text" name="ageOfConstruction" value={formData.ageOfConstruction} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Deposit:
        <input type="text" name="deposit" value={formData.deposit} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Availability:
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded mt-1" required />
      </label>

      <label className="block mb-4">
        Property Image:
        <input
          type="file"
          name="images"
          multiple
          onChange={handleImageChange}
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-none"
        />
      </label>

      <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default AddProperty;
