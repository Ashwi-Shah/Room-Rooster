// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone, faBath, faBed, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

// const PropertyListing = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
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
//           setError('Failed to fetch properties');
//         }
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         setError('Error fetching properties');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleDetailsClick = (id) => {
//     navigate(`/details/${id}`);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   if (loading) {
//     return <div className="container mx-auto py-12 text-center">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container mx-auto py-12 text-center text-red-500">{error}</div>;
//   }

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
//               <Slider {...sliderSettings}>
//                 {detail.images && detail.images.length > 0 ? (
//                   detail.images.map((img, index) => (
//                     <div key={index}>
//                       <img className="w-full h-48 object-cover" src={img} alt={`property-img-${index}`} />
//                     </div>
//                   ))
//                 ) : (
//                   <img className="w-full h-48 object-cover" src="default-image-url.jpg" alt="default" />
//                 )}
//               </Slider>
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
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faBath, faBed, faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paused, setPaused] = useState(false); // State to control autoplay
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
          setError('Failed to fetch properties');
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Error fetching properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleDetailsClick = (id) => {
    navigate(`/details/${id}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !paused,
    autoplaySpeed: 3000,
    pauseOnHover: false, // Disable default pause on hover
    pauseOnFocus: false // Disable default pause on focus
  };

  if (loading) {
    return <div className="container mx-auto py-12 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto py-12 text-center text-red-500">{error}</div>;
  }

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
          <div key={detail._id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform"
               onMouseEnter={() => setPaused(true)} // Pause on hover
               onMouseLeave={() => setPaused(false)} // Resume on hover out
          >
            <div className="relative overflow-hidden">
              <Slider {...sliderSettings}>
                {detail.images && detail.images.length > 0 ? (
                  detail.images.map((img, index) => (
                    <div key={index}>
                      <img className="w-full h-48 object-cover" src={img} alt={`property-img-${index}`} />
                    </div>
                  ))
                ) : (
                  <img className="w-full h-48 object-cover" src="default-image-url.jpg" alt="default" />
                )}
              </Slider>
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

