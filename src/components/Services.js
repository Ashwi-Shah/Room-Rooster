import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import checkImg from '../assets/img/check.png';
import priceImg from '../assets/img/price.png';
import serviceImg from '../assets/img/services.png';
import marketImg from '../assets/img/market.png';

const Services = () => {
  const [skills, setSkills] = useState([
    { name: 'Family residential', value: 80, currentValue: 0 },
    { name: 'Vacation rentals', value: 75, currentValue: 0 },
    { name: 'Residential leasing', value: 86, currentValue: 0 },
    { name: 'New development', value: 95, currentValue: 0 },
  ]);

  const skillsH1Ref = useRef(null);
  const servicesH1Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.9,
    };

    const animateElement = (element, animationClasses) => {
      animationClasses.split(' ').forEach(cls => element.classList.remove(cls)); // Remove class to restart animation
      void element.offsetWidth; // Trigger reflow
      animationClasses.split(' ').forEach(cls => element.classList.add(cls)); // Add class to start animation
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target } = entry;
        if (entry.isIntersecting) {
          if (target === skillsH1Ref.current || target === servicesH1Ref.current) {
            animateElement(target, 'animate__animated animate__flipInX');
          }
        }
      });
    }, options);

    if (skillsH1Ref.current) observer.observe(skillsH1Ref.current);
    if (servicesH1Ref.current) observer.observe(servicesH1Ref.current);

    return () => {
      if (skillsH1Ref.current) observer.unobserve(skillsH1Ref.current);
      if (servicesH1Ref.current) observer.unobserve(servicesH1Ref.current);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkills((prevSkills) =>
        prevSkills.map((skill) =>
          skill.currentValue < skill.value
            ? { ...skill, currentValue: skill.currentValue + 1 }
            : skill
        )
      );
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  const services = [
    { icon: checkImg , type: 'Best property lists', count: 'We provide consumers with a content-rich listings in a handy format.' },
    { icon: priceImg, type: 'Best price in market', count: 'Price estimates and sales histories for property, updating information.' },
    { icon: serviceImg, type: 'Guaranteed services', count: 'Our managers will keep you informed and you can act with certainty.' },
    { icon: marketImg, type: 'Marketing research', count: 'All our marketing researchers today have a tough job multitasking.' },
  ];

  return (
    <div className="services-container p-5 font-sans">
      <div className="skills-section text-center mb-10">
        <h1 ref={skillsH1Ref} className="mt-2 text-5xl font-extrabold text-[#596E79]">OUR SKILLS</h1>
        <div className="skills flex flex-wrap justify-center gap-5 mt-12">
          {skills.map((skill, index) => (
            <div className="skill text-center flex-1 min-w-[200px]" key={index}>
              <div className="circle w-52 h-52 flex items-center justify-center mx-auto relative">
                <svg width="200" height="200">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="#596E79"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="565"
                    strokeDashoffset={565 - (565 * skill.currentValue) / 100}
                    style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                  />
                </svg>
                <span className="absolute z-10 text-4xl font-bold text-[#596E79]">{skill.currentValue}%</span>
              </div>
              <p className="text-gray-700 font-semibold text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services-section text-center mb-10">
        <h1 ref={servicesH1Ref} className="mt-2 text-5xl font-extrabold text-[#596E79]">SERVICES</h1>
        <div className="services-list flex flex-wrap justify-center gap-10 mt-10">
          {services.map((service, index) => (
            <div className="group text-center max-w-xs p-5 border-2 border-dashed border-[#596E79] rounded-lg bg-[#DFD3C3] shadow-md flex-1 min-w-[200px] transition-transform transform hover:scale-105 hover:bg-[#81939c] cursor-pointer" key={index}>
              <div className="service-icon mb-4 w-24 h-24 mx-auto p-4 bg-[#F0ECE3] border-dashed border-2 border-[#596E79] rounded-full flex items-center justify-center">
                <img src={service.icon} alt={service.type} className="w-12 h-12" />
              </div>
              <h4 className="text-[#44545d] group-hover:text-[#F0ECE3] text-2xl font-semibold mt-6">{service.type}</h4>
              <p className="text-[#44545d] group-hover:text-[#F0ECE3] text-lg mt-2">{service.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
