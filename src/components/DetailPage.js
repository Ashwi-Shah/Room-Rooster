// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const DetailPage = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);

//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setProperty(data);
//         } else {
//           console.error("Failed to fetch property details");
//         }
//       } catch (error) {
//         console.error("Error fetching property details:", error);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   if (!property) {
//     return <div className="p-4 text-center text-red-600">Property not found</div>;
//   }

//   return (
//     <div className="pt-[125px] px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-xl font-semibold">Price: ₹{property.price} /month</p>
//           <p className="text-lg">Location: {property.location}</p>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-lg">Phone Number: {property.phoneNumber}</p>
//           <p className="text-lg">Square Footage: {property.sqft} sqft</p>
//         </div>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-lg">Beds: {property.bed}</p>
//           <p className="text-lg">Baths: {property.bath}</p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//           {property.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Property Image ${index + 1}`}
//               className="w-full h-auto object-cover"
//             />
//           ))}
//         </div>
//         <div className="mb-4">
//           <p className="text-lg font-semibold">Owner Name: {property.ownername}</p>
//           <p className="text-lg">Furnished Status: {property.FurnishedStatus}</p>
//         </div>
//         <div className="mb-4">
//           <p className="text-lg">Preferred for: {property.Perferredfor}</p>
//           <p className="text-lg">Age of Construction: {property.ageofconstruction}</p>
//         </div>
//         <div className="mb-4">
//           <p className="text-lg">Additional Info: {property.info}</p>
//         </div>
//         <div className="mb-4">
//           <p className="text-lg">Availability: {property.Availability}</p>
//           <p className="text-lg">Deposit: ₹{property.deposit}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); // Assuming you are using react-router for dynamic routing
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">₹{details.price}</h1>
          <p className="text-gray-700">{details.description} in <span className="text-red-500">{details.location}</span></p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600">Contact Owner</button>
          <button className="border border-red-500 text-red-500 font-semibold py-2 px-4 rounded-lg hover:bg-red-100">Make Offer</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-1/2">
          <img src={details.images[0]} alt="Property" className="rounded-lg w-full h-auto" />
          <div className="grid grid-cols-4 gap-2 mt-2">
            {details.images.slice(1, 4).map((image, index) => (
              <img key={index} src={image} alt={`Property ${index + 1}`} className="rounded-lg" />
            ))}
            <div className="relative">
              <img src={details.images[4]} alt="Property" className="rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold rounded-lg">+{details.images.length - 5} Photos</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-gray-600">{details.beds} Beds</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">{details.baths} Baths</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Super Built-Up Area</p>
              <p className="text-gray-700">{details.sqft} sqft </p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Status</p>
              <p className="text-gray-700">{details.Availability}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Owner Name</p>
              <p className="text-gray-700">{details.ownername}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Furnished Status</p>
              <p className="text-gray-700">{details.furnishedStatus}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-600">Age Of Construction</p>
              <p className="text-gray-700">{details.ageOfConstruction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
