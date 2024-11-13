// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const EditProperty = ({ propertyId, onSuccess }) => {
//   const { id } = useParams();
//   const [data, setData] = useState();
//   const [property, setProperty] = useState(null);
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [phoneNumber, setPhoneNumber]= useState('');
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');
//   const [sqft, setSqft] = useState('');
//   const [bed, setBed] = useState('');
//   const [bath, setBath] = useState('');
//   const [ownername, setOwnerName] = useState('');
//   const [FurnishedStatus, setFurnishedStatus] = useState('');
//   const [Perferredfor, setPerferredfor] = useState('');
//   const [ageofconstruction, setAgeofconstruction] = useState('');
//   const [info, setInfo] = useState('');
//   const [Availability, setAvailability] = useState('');
//   const [deposit, setDeposit] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`https://room-rooster.vercel.app/get-data-idwise/details/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setProperty(data);
//           setName(data.name);
//           setPrice(data.price);
//           setPhoneNumber(data.phoneNumber);
//           setLocation(data.location);
//           setDescription(data.description);
//           setSqft(data.sqft);
//           setBed(data.bed);
//           setBath(data.bath);
//           setOwnerName(data.ownername);
//           setFurnishedStatus(data.FurnishedStatus);
//           setPerferredfor(data.Perferredfor);
//           setAgeofconstruction(data.ageofconstruction);
//           setInfo(data.info);
//           setAvailability(data.Availability);
//           setDeposit(data.deposit);
//         } else {
//           setError('Failed to fetch property details');
//         }
//       } catch (error) {
//         setError('Error fetching property details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [propertyId]);

 
//   const handleSave = async () => {
//     try {
//       console.log(`https://room-rooster.vercel.app/update/details/${id}`);

//       const response = await fetch(`https://room-rooster.vercel.app/update/details/${data?.id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           price,
//           phoneNumber,
//           location,
//           description,
//           sqft,
//           bed,
//           bath,
//           ownername,
//           FurnishedStatus,
//           Perferredfor,
//           ageofconstruction,
//           info,
//           Availability,
//           deposit,
//         }),
//       });

//       if (response.ok) {
//         onSuccess(); // Notify of the successful update
//       } else {
//         setError('Updated Property Data Successfully.');
//       }
//     } catch (error) {
//       setError('Error updating property');
//     }
//   };

//   if (loading) {
//     return <div className="p-4 text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-center text-black text-xl">{error}</div>;
//   }

//   return (
//     <>
//       <h2 className="text-xl font-bold mb-4">Edit Property</h2>
//         <label className="block mb-2">
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Price:
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Phone Number:
//           <input
//             type="number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Location:
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Description:
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         sqft:
//           <input
//             type="number"
//             value={sqft}
//             onChange={(e) => setSqft(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Bed:
//           <input
//             type="number"
//             value={bed}
//             onChange={(e) => setBed(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//           Bath:
//           <input
//             type="number"
//             value={bath}
//             onChange={(e) => setBath(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Ownername:
//           <input
//             type="text"
//             value={ownername}
//             onChange={(e) => setOwnerName(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         FurnishedStatus:
//           <input
//             type="text"
//             value={FurnishedStatus}
//             onChange={(e) => setFurnishedStatus(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Perferredfor:
//           <input
//             type="text"
//             value={Perferredfor}
//             onChange={(e) => setPerferredfor(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Ageofconstruction:
//           <input
//             type="number"
//             value={ageofconstruction}
//             onChange={(e) => setAgeofconstruction(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Info:
//           <input
//             type="text"
//             value={info}
//             onChange={(e) => setInfo(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Availability:
//           <input
//             type="text"
//             value={Availability}
//             onChange={(e) => setAvailability(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <label className="block mb-2">
//         Deposit:
//           <input
//             type="number"
//             value={deposit}
//             onChange={(e) => setDeposit(e.target.value)}
//             className="block w-full p-2 border border-gray-300 rounded"
//           />
//         </label>
//         <div className="flex justify-end space-x-2 mt-4">
//           <button
//             onClick={handleSave}
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Save
//           </button>
//           <button
//             onClick={() => onSuccess()} // Close the edit component
//             className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
//           >
//             Cancel
//           </button>
//         </div>
//       </>
   
//   );
// };

// export default EditProperty;
import React, { useState, useEffect } from "react";

const EditProperty = ({ propertyId, onSuccess }) => {
  const [property, setProperty] = useState({
    name: "",
    price: "",
    location: "",
    bed: "",
    sqft: "",
    images: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `https://room-rooster.vercel.app/get-data-idwise/details/${propertyId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
        } else {
          setError("Failed to fetch property details");
        }
      } catch (error) {
        setError("Error fetching property details");
      }
    };

    fetchProperty();
  }, [propertyId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://room-rooster.vercel.app/get-data-idwise/details/${propertyId}`, // Adjust endpoint as needed
        {
          method: "PUT", // or PATCH depending on your backend
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: property.name,
            price: property.price,
            location: property.location,
            bed: property.bed,
            sqft: property.sqft,
            images: property.images,
          }),
        }
      );

      if (response.ok) {
        onSuccess(); // Trigger onSuccess to close the modal
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error updating property");
      }
    } catch (error) {
      setError("Network error while updating property");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Property Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={property.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={property.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bed" className="block text-gray-700">Beds</label>
          <input
            type="number"
            id="bed"
            name="bed"
            value={property.bed}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sqft" className="block text-gray-700">Square Feet</label>
          <input
            type="number"
            id="sqft"
            name="sqft"
            value={property.sqft}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700">Images</label>
          <input
            type="text"
            id="images"
            name="images"
            value={property.images.join(", ")}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Property"}
        </button>
      </form>
    </div>
  );
};

export default EditProperty;
