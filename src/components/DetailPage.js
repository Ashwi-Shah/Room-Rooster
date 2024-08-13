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
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setSelectedImage(data.images[0]); // Set the first image as the default selected image
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
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <div className="px-6 py-4 border-b">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl font-bold">{property.name}</h2>
            <p className="text-xl font-semibold">₹{property.price} /month</p>
          </div>
          <p className="text-lg text-gray-600">
            {property.bed} BHK {property.sqft} Sq-ft For Rent in{" "}
            <span className="text-blue-500">{property.location}</span>
          </p>
        </div>

        {/* Image Gallery */}
        <div className="px-6 py-4">
          <div className="flex">
            <div className="w-3/5 pr-4">
              <img
                src={selectedImage}
                alt="Selected Property"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="w-2/5 flex flex-col space-y-2">
              {property.images.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property Thumbnail ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  className={`w-full h-28 object-cover cursor-pointer rounded-lg border-2 ${
                    selectedImage === image ? "border-blue-500" : "border-transparent"
                  }`}
                />
              ))}
              {property.images.length > 3 && (
                <div
                  className="relative w-full h-28 cursor-pointer rounded-lg border-2 border-transparent"
                  onClick={() => setSelectedImage(property.images[3])}
                >
                  <img
                    src={property.images[3]}
                    alt="More Photos"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold text-lg">
                    +{property.images.length - 3} Photos
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
          <div>
            <p className="text-lg">
              <span className="font-semibold">Beds:</span> {property.bed}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Baths:</span> {property.bath}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Furnished Status:</span>{" "}
              {property.FurnishedStatus}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Square Footage:</span>{" "}
              {property.sqft} sqft
            </p>
          </div>
          <div>
            <p className="text-lg">
              <span className="font-semibold">Age of Construction:</span>{" "}
              {property.ageofconstruction}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Facing:</span> {property.facing}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Availability:</span> {property.Availability}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Deposit:</span> ₹{property.deposit}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-6 py-4 border-t flex justify-between items-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Contact Owner
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
