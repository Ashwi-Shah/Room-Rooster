import React, { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const AdvanceSearch = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
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

  return (
    <section id="aa-advance-search" className="mt-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[320px]" ref={(el) => elementsRef.current.push(el)}>
            <input type="text" placeholder="Keywords" className="w-full h-12 border border-gray-400 rounded-lg px-4 text-lg bg-gray-700 text-white placeholder-white" />
          </div>
          <div className="flex-1 min-w-[320px]" ref={(el) => elementsRef.current.push(el)}>
            <select className="w-full h-12 border border-gray-400 rounded-lg px-4 text-lg bg-gray-700 text-white">
              <option value="">Select Location</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Rajkot">Rajkot</option>
              <option value="Gandhinagar">Gandhinagar</option>
              {/* Add more locations as needed */}
            </select>
          </div>
          <div className="flex-none min-w-[200px]" ref={(el) => elementsRef.current.push(el)}>
            <input type="submit" value="Search" className="w-full h-12 bg-blue-500 text-white text-lg font-bold rounded-lg cursor-pointer hover:bg-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvanceSearch;
