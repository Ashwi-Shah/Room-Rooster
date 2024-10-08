import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'tailwindcss/tailwind.css';
import 'animate.css/animate.min.css';

const AdvanceSearch = () => {
  const elementsRef = useRef([]);
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn','animate__fadeInSlower', 'visible');
          } else {
            entry.target.classList.remove('animate__animated', 'animate__fadeIn','animate__fadeInSlower', 'visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((el) => {
          if (el) observer.unobserve(el);
        });
      }
    };
  }, []);

  const handleSearch = () => {
    navigate(`/results?propertyType=${propertyType}&location=${location}`);
  };

  return (
    <section id="aa-advance-search" className="mt-10 px-4">
      <div className="container mx-auto max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div ref={(el) => elementsRef.current.push(el)}>
            <select
              className="w-full h-12 border border-[#596E79] rounded-lg px-4 text-xl bg-[#596E79] text-[#F0ECE3]"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Select Property Type</option>
              <option value="Villa">Villa</option>
              <option value="Flat">Flat</option>
              <option value="Apartment">Apartment</option>
              <option value="Cottage">Cottage</option>
              {/* Add more property types as needed */}
            </select>
          </div>
          <div ref={(el) => elementsRef.current.push(el)}>
            <select
              className="w-full h-12 border border-[#596E79] rounded-lg px-4 text-xl bg-[#596E79] text-[#F0ECE3]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Gandhinagar">Gandhinagar</option>
              {/* Add more locations as needed */}
            </select>
          </div>
          <div ref={(el) => elementsRef.current.push(el)}>
            <input
              type="button"
              value="Search"
              className="w-full h-12 bg-[#596E79] text-[#F0ECE3] text-xl font-bold rounded-lg cursor-pointer hover:bg-[#F0ECE3] hover:text-[#596E79] hover:border-2 hover:border-[#596E79]"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceSearch;
