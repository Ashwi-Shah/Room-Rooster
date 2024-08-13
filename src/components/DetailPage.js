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
import { FaBed, FaBath, FaCouch } from "react-icons/fa";

const DetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setMainImage(data.images[0]);
        } else {
          setError("Failed to fetch property details");
        }
      } catch (error) {
        setError("Error fetching property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">{error}</div>;
  }

  if (!property) {
    return <div className="p-4 text-center text-red-600">Property not found</div>;
  }

  const extraImagesCount = property.images.length - 5;

  return (
    <div className="pt-[125px] px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">₹{property.price} /month</h2>
            <p className="text-xl text-gray-600">
              {property.bed} BHK {property.sqft} Sq-ft For Rent in{" "}
              <span className="text-blue-600">{property.location}</span>
            </p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800">{property.name}</h2>
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div className="flex flex-col items-center">
            <img
              src={mainImage}
              alt="Main Property"
              className="w-full h-80 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <div className="flex space-x-2">
              {property.images.slice(0, 5).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                      image === mainImage ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={() => setMainImage(image)}
                    loading="lazy"
                  />
                  {index === 2 && extraImagesCount > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <span className="text-white font-semibold">
                        +{extraImagesCount} Photos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaBed className="text-gray-600" size={20} />
                <span className="text-lg font-semibold text-gray-800">{property.bed} Beds</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaBath className="text-gray-600" size={20} />
                <span className="text-lg font-semibold text-gray-800">{property.bath} Baths</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaCouch className="text-gray-600" size={20} />
                <span className="text-lg font-semibold text-gray-800">{property.FurnishedStatus}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">Super Built-Up Area</p>
                <p className="text-lg text-gray-600">{property.sqft} sqft</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Status</p>
                <p className="text-lg text-gray-600">{property.Availability}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Preferred for</p>
                <p className="text-lg text-gray-600">{property.Perferredfor}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Age Of Construction</p>
                <p className="text-lg text-gray-600">{property.ageofconstruction} years</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Amount of Deposit</p>
                <p className="text-lg text-gray-600">₹{property.deposit}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Owner Name</p>
                <p className="text-lg text-gray-600">{property.ownername}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Full Address</p>
                <p className="text-lg text-gray-600">{property.description}</p>
              </div>
              <div className="col-span-2">
                <p className="text-lg font-semibold text-gray-800">Additional Information</p>
                <p className="text-lg text-gray-600">{property.info}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Contact Owner
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
