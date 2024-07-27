// import React, { useEffect, useRef } from 'react';

// const PropertyTypes = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-backInUp');
//             // Clean up: remove the animation class after it completes
//             entry.target.addEventListener('animationend', () => {
//               entry.target.classList.remove('animate-backInUp');
//             }, { once: true });
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const propertyTypes = [
//     { name: 'Villa', img: 'img/villa.png', count: 123 },
//     { name: 'Apartment', img: 'img/house.png', count: 456 },
//     { name: 'Flat', img: 'img/flat.png', count: 789 },
//     { name: 'Cottage', img: 'img/cottage.png', count: 101 }
//   ];

//   return (
//     <div className="property-type container mx-auto px-4 py-8" ref={containerRef}>
//       <div className="text-center mb-8">
//         <h1 className="text-[#596E79] font-bold text-2xl mb-6 animate-backInUp">Property Types</h1>
//         <p className="text-[#596E79] font-semibold text-lg mb-8 animate-backInUp">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
//         </p>
//       </div>
//       <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
//         {propertyTypes.map((property, index) => (
//           <div
//             className="bg-[#e9e5db] p-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
//             key={index}
//           >
//             <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] flex flex-col items-center justify-center p-4 rounded-full mb-3">
//               <img className="w-16 h-16 object-cover rounded-full border border-dashed border-[#596E79]" src={property.img} alt={`${property.name} icon`} />
//             </div>
//             <h6 className="text-[#596E79] font-cursive text-xl text-center mb-2">{property.name}</h6>
//             <span className="text-[#596E79] font-cursive text-lg text-center">{property.count} Properties</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyTypes;
// import React, { useEffect, useRef } from 'react';

// const PropertyTypes = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-backInUp');
//             // Clean up: remove the animation class after it completes
//             entry.target.addEventListener('animationend', () => {
//               entry.target.classList.remove('animate-backInUp');
//             }, { once: true });
//           }
//         });
//       },
//       { threshold: 0.7 }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);

//   const propertyTypes = [
//     { name: 'Villa', img: 'img/villa.png', count: 123 },
//     { name: 'Apartment', img: 'img/house.png', count: 456 },
//     { name: 'Flat', img: 'img/flat.png', count: 789 },
//     { name: 'Cottage', img: 'img/cottage.png', count: 101 }
//   ];

//   return (
//     <div className="property-type container mx-auto px-4 py-8" ref={containerRef}>
//       <div className="text-center mb-8">
//         <h1 className="text-[#596E79] font-bold text-2xl mb-6 animate-backInUp">Property Types</h1>
//         <p className="text-[#596E79] font-semibold text-lg mb-8 animate-backInUp">
//           Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
//         </p>
//       </div>
//       <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {propertyTypes.map((property, index) => (
//           <div
//             className="bg-[#e9e5db] p-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
//             key={index}
//           >
//             <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] flex flex-col items-center justify-center p-4 rounded-lg">
//               <img className="w-16 h-16 object-cover rounded-full border border-dashed border-[#596E79]" src={property.img} alt={`${property.name} icon`} />
//               <h6 className="text-[#596E79] font-cursive text-xl text-center mb-2">{property.name}</h6>
//             <span className="text-[#596E79] font-cursive text-lg text-center">{property.count} Properties</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyTypes;
import React, { useEffect, useRef } from 'react';
import villaImg from '../assets/img/villa.png';
import apartmentImg from '../assets/img/house.png';
import flatImg from '../assets/img/flat.png';
import cottageImg from '../assets/img/cottage.png';

const PropertyTypes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-backInUp');
            // Clean up: remove the animation class after it completes
            entry.target.addEventListener('animationend', () => {
              entry.target.classList.remove('animate-backInUp');
            }, { once: true });
          }
        });
      },
      { threshold: 0.7 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const propertyTypes = [
    { name: 'Villa', img: villaImg, count: 123 },
    { name: 'Apartment', img: apartmentImg, count: 456 },
    { name: 'Flat', img: flatImg, count: 789 },
    { name: 'Cottage', img: cottageImg, count: 101 }
  ];

  return (
    <div className="property-type container mx-auto px-4 py-8" ref={containerRef}>
      <div className="text-center mb-8">
        <h1 className="text-[#596E79] font-bold text-2xl mb-6 animate-backInUp">Property Types</h1>
        <p className="text-[#596E79] font-semibold text-lg mb-8 animate-backInUp">
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {propertyTypes.map((property, index) => (
          <div
            className="bg-[#e9e5db] p-5 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            key={index}
          >
            <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] flex flex-col items-center justify-center p-4 rounded-lg">
              <img className="w-16 h-16 object-cover rounded-full border border-dashed border-[#596E79]" src={property.img} alt={`${property.name} icon`} />
              <h6 className="text-[#596E79] font-cursive text-xl text-center mb-2">{property.name}</h6>
              <span className="text-[#596E79] font-cursive text-lg text-center">{property.count} Properties</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyTypes;
