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


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState(""); // State to manage the main image

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setMainImage(data.images[0]); // Set the initial main image
        } else {
          console.error("Failed to fetch property details");
        }
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) {
    return <div className="p-4 text-center text-red-600">Property not found</div>;
  }

  return (
    <div className="pt-[125px] px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">₹{property.price}</h2>
          <p className="text-lg">
            {property.bed} BHK {property.sqft} Sq-ft For Rent in{" "}
            <span className="text-blue-600">{property.location}</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <img
              src={mainImage}
              alt="Main Property"
              className="w-full h-64 object-cover rounded-lg mb-2"
            />
            <div className="flex space-x-2">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  className={`w-1/4 h-24 object-cover rounded-lg cursor-pointer ${
                    image === mainImage ? "border-2 border-blue-600" : ""
                  }`}
                  onClick={() => setMainImage(image)} // Update the main image when a thumbnail is clicked
                />
              ))}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Super Built-Up Area</p>
              <p className="text-lg">{property.sqft} sqft</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Status</p>
              <p className="text-lg">{property.Availability}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Facing</p>
              <p className="text-lg">{property.Facing}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Furnished Status</p>
              <p className="text-lg">{property.FurnishedStatus}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Age Of Construction</p>
              <p className="text-lg">{property.ageofconstruction} years</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Contact Owner
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
