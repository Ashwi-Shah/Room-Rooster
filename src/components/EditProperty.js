// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const EditProperty = ({ propertyId, onSuccess }) => {
//     const { id } = useParams();

//   const [property, setProperty] = useState(null);
//   const [formData, setFormData] = useState({
//     price: "",
//     bed: "",
//     sqft: "",
//     location: "",
//     name: "",
//     // Include other fields as needed
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`https://room-rooster.vercel.app/get-data-idwise/details/${propertyId}`);
//         if (response.ok) {
//           const data = await response.json();
//           setProperty(data);
//           setFormData({
//             price: data.price,
//             bed: data.bed,
//             sqft: data.sqft,
//             location: data.location,
//             name: data.name,
//             // Set other fields as needed
//           });
//         } else {
//           setError("Failed to fetch property details");
//         }
//       } catch (error) {
//         setError("Error fetching property details");
//       }
//     };

//     fetchProperty();
//   }, [propertyId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await fetch(`https://room-rooster.vercel.app/update/details/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         onSuccess();
//       } else {
//         setError("Failed to update property");
//       }
//     } catch (error) {
//       setError("Error updating property");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (!property) return <p>Loading property details...</p>;

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="price"
//         value={formData.price}
//         onChange={handleChange}
//         placeholder="Price"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />
//       <input
//         type="text"
//         name="bed"
//         value={formData.bed}
//         onChange={handleChange}
//         placeholder="Beds"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />
//       <input
//         type="text"
//         name="sqft"
//         value={formData.sqft}
//         onChange={handleChange}
//         placeholder="Sq-ft"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />
//       <input
//         type="text"
//         name="location"
//         value={formData.location}
//         onChange={handleChange}
//         placeholder="Location"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         placeholder="Property Name"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//       />
//       {/* Include other fields as needed */}
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//         disabled={isLoading}
//       >
//         {isLoading ? "Saving..." : "Save Changes"}
//       </button>
//       {error && <p className="text-red-600">{error}</p>}
//     </form>
//   );
// };

// export default EditProperty;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditProperty = ({ propertyId, onSuccess }) => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [phoneNumber, setPhoneNumber]= useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [sqft, setSqft] = useState('');
  const [bed, setBed] = useState('');
  const [bath, setBath] = useState('');
  const [ownername, setOwnerName] = useState('');
  const [FurnishedStatus, setFurnishedStatus] = useState('');
  const [Perferredfor, setPerferredfor] = useState('');
  const [ageofconstruction, setAgeofconstruction] = useState('');
  const [info, setInfo] = useState('');
  const [Availability, setAvailability] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/get-data-idwise/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setName(data.name);
          setPrice(data.price);
          setPhoneNumber(data.phoneNumber);
          setLocation(data.location);
          setDescription(data.description);
          setSqft(data.sqft);
          setBed(data.bed);
          setBath(data.bath);
          setOwnerName(data.ownername);
          setFurnishedStatus(data.FurnishedStatus);
          setPerferredfor(data.Perferredfor);
          setAgeofconstruction(data.ageofconstruction);
          setInfo(data.info);
          setAvailability(data.Availability);
          setDeposit(data.deposit);
        } else {
          setError('Failed to fetch property details');
        }
      } catch (error) {
        setError('Error fetching property details');
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

 
  const handleSave = async () => {
    try {
      console.log(property.id);
      const response = await fetch(`https://room-rooster.vercel.app/update/details/${property.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          price,
          phoneNumber,
          location,
          description,
          sqft,
          bed,
          bath,
          ownername,
          FurnishedStatus,
          Perferredfor,
          ageofconstruction,
          info,
          Availability,
          deposit,
        }),
      });

      if (response.ok) {
        onSuccess(); // Notify of the successful update
      } else {
        setError('Failed to update property');
      }
    } catch (error) {
      setError('Error updating property');
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">{error}</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Edit Property</h2>
        <label className="block mb-2">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Phone Number:
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        sqft:
          <input
            type="number"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Bed:
          <input
            type="number"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          Bath:
          <input
            type="number"
            value={bath}
            onChange={(e) => setBath(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Ownername:
          <input
            type="text"
            value={ownername}
            onChange={(e) => setOwnerName(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        FurnishedStatus:
          <input
            type="text"
            value={FurnishedStatus}
            onChange={(e) => setFurnishedStatus(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Perferredfor:
          <input
            type="text"
            value={Perferredfor}
            onChange={(e) => setPerferredfor(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Ageofconstruction:
          <input
            type="number"
            value={ageofconstruction}
            onChange={(e) => setAgeofconstruction(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Info:
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Availability:
          <input
            type="text"
            value={Availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
        Deposit:
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={() => onSuccess()} // Close the edit component
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProperty;
