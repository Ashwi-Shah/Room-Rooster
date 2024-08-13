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
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{property.name}</h2>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-semibold">Price: ₹{property.price} /month</p>
          <p className="text-lg">Location: {property.location}</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Phone Number: {property.phoneNumber}</p>
          <p className="text-lg">Square Footage: {property.sqft} sqft</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Beds: {property.bed}</p>
          <p className="text-lg">Baths: {property.bath}</p>
        </div>

        {/* Image Gallery */}
        <div className="mb-4">
          <img
            src={selectedImage}
            alt="Selected Property"
            className="w-full h-auto object-cover rounded-lg mb-2"
          />
          <div className="flex space-x-2">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Property Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`w-24 h-24 object-cover cursor-pointer rounded-lg border-2 ${
                  selectedImage === image ? "border-blue-500" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">Owner Name: {property.ownername}</p>
          <p className="text-lg">Furnished Status: {property.FurnishedStatus}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Preferred for: {property.Perferredfor}</p>
          <p className="text-lg">Age of Construction: {property.ageofconstruction}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Additional Info: {property.info}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg">Availability: {property.Availability}</p>
          <p className="text-lg">Deposit: ₹{property.deposit}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
