// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone, faBath, faBed, faRulerCombined } from '@fortawesome/free-solid-svg-icons';


// const PropertyListing = () => {
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('https://room-rooster.vercel.app/details');
//         if (response.ok) {
//           const data = await response.json();
//           setProperties(data);
//         } else {
//           console.error('Failed to fetch properties');
//         }
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleDetailsClick = (id) => {
//     navigate(`/details/${id}`);
//   };

//   return (
//     <div className="container mx-auto py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold text-[#596E79]">Property Listing</h1>
//         <p className="text-xl font-semibold text-[#596E79] mt-4">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
//         {properties.map((detail) => (
//           <div key={detail._id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform">
//             <div className="relative overflow-hidden">
//               <a href="#">
//                 <img className="w-full h-48 object-cover hover:scale-105" src={detail.image || "default-image-url.jpg"} alt={detail.name} />
//               </a>
//               <div className="absolute bottom-0 left-0 bg-[#596E79] text-[#F0ECE3] text-xs font-semibold uppercase py-1 px-8 rounded-tr-lg">
//                 {detail.name}
//               </div>
//             </div>
//             <div className="p-4 bg-[#e9e5db]">
//               <h5 className="text-xl font-bold text-gray-700 mb-3">₹{detail.price} /month</h5>
//               <p className="text-gray-600 mb-2 flex items-center">
//               <FontAwesomeIcon icon={faLocationDot} />{detail.location}
//               </p>
//               <p className="text-gray-600 mb-2 flex items-center">
//               <FontAwesomeIcon icon={faPhone} />{detail.phoneNumber}
//               </p>
//               <button
//                 className="bg-[#596E79] text-[#F0ECE3] py-2 px-4 rounded hover:border-2 hover:border-[#596E79] hover:text-[#596E79] hover:bg-transparent"
//                 onClick={() => handleDetailsClick(detail._id)}
//               >
//                 Details
//               </button>
//             </div>
//             <div className="flex border-t border-dashed border-gray-700 bg-[#e9e5db]">
//               <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
//               <FontAwesomeIcon icon={faRulerCombined} />{detail.sqft} Sqft
//               </small>
//               <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
//               <FontAwesomeIcon icon={faBed} />{detail.bed} Bed
//               </small>
//               <small className="flex-1 text-center py-2 text-gray-600 font-bold">
//               <FontAwesomeIcon icon={faBath} />{detail.bath} Bath
//               </small>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone, faBath, faBed, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

// const PropertyListing = () => {
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('https://room-rooster.vercel.app/details');
//         if (response.ok) {
//           const data = await response.json();
//           setProperties(data);
//         } else {
//           console.error('Failed to fetch properties');
//         }
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleDetailsClick = (id) => {
//     navigate(`/details/${id}`);
//   };

//   return (
//     <div className="container mx-auto py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl font-bold text-[#596E79]">Property Listing</h1>
//         <p className="text-xl font-semibold text-[#596E79] mt-4">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
//         {properties.map((detail) => (
//           <div key={detail._id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform">
//             <div className="relative overflow-hidden">
//               <a href="#">
//                 <img className="w-full h-48 object-cover hover:scale-105" src={detail.image || "default-image-url.jpg"} alt={detail.name} />
//               </a>
//               <div className="absolute bottom-0 left-0 bg-[#596E79] text-[#F0ECE3] text-xs font-semibold uppercase py-1 px-8 rounded-tr-lg">
//                 {detail.name}
//               </div>
//             </div>
//             <div className="p-4 bg-[#e9e5db]">
//               <h5 className="text-xl font-bold text-gray-700 mb-3">₹{detail.price} /month</h5>
//               <p className="text-gray-600 mb-2 flex items-center">
//                 <FontAwesomeIcon icon={faLocationDot} /> {detail.location}
//               </p>
//               <p className="text-gray-600 mb-2 flex items-center">
//                 <FontAwesomeIcon icon={faPhone} /> {detail.phoneNumber}
//               </p>
//               <button
//                 className="bg-[#596E79] text-[#F0ECE3] py-2 px-4 rounded hover:border-2 hover:border-[#596E79] hover:text-[#596E79] hover:bg-transparent"
//                 onClick={() => handleDetailsClick(detail._id)}
//               >
//                 Details
//               </button>
//             </div>
//             <div className="flex border-t border-dashed border-gray-700 bg-[#e9e5db]">
//               <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
//                 <FontAwesomeIcon icon={faRulerCombined} /> {detail.sqft} Sqft
//               </small>
//               <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
//                 <FontAwesomeIcon icon={faBed} /> {detail.bed} Bed
//               </small>
//               <small className="flex-1 text-center py-2 text-gray-600 font-bold">
//                 <FontAwesomeIcon icon={faBath} /> {detail.bath} Bath
//               </small>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faBath, faBed, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://room-rooster.vercel.app/details');
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        } else {
          console.error('Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#596E79]">Property Listing</h1>
        <p className="text-xl font-semibold text-[#596E79] mt-4">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
        {properties.map((detail) => (
          <div key={detail._id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform">
            <div className="relative overflow-hidden">
              <a href="#">
                <img className="w-full h-48 object-cover hover:scale-105" src={detail.images || "default-image-url.jpg"} alt={detail.name} />
              </a>
              <div className="absolute bottom-0 left-0 bg-[#596E79] text-[#F0ECE3] text-xs font-semibold uppercase py-1 px-8 rounded-tr-lg">
                {detail.name}
              </div>
            </div>
            <div className="p-4 bg-[#e9e5db]">
              <h5 className="text-xl font-bold text-gray-700 mb-3">₹{detail.price} /month</h5>
              <p className="text-gray-600 mb-2 flex items-center">
                <FontAwesomeIcon icon={faLocationDot} /> {detail.location}
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FontAwesomeIcon icon={faPhone} /> {detail.phoneNumber}
              </p>
              <button
                className="bg-[#596E79] text-[#F0ECE3] py-2 px-4 rounded hover:border-2 hover:border-[#596E79] hover:text-[#596E79] hover:bg-transparent"
                onClick={() => handleDetailsClick(detail._id)}
              >
                Details
              </button>
            </div>
            <div className="flex border-t border-dashed border-gray-700 bg-[#e9e5db]">
              <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
                <FontAwesomeIcon icon={faRulerCombined} /> {detail.sqft} Sqft
              </small>
              <small className="flex-1 text-center border-r border-dashed border-gray-700 py-2 text-gray-600 font-bold">
                <FontAwesomeIcon icon={faBed} /> {detail.bed} Bed
              </small>
              <small className="flex-1 text-center py-2 text-gray-600 font-bold">
                <FontAwesomeIcon icon={faBath} /> {detail.bath} Bath
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyListing;
