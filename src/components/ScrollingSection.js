import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';
import 'tailwindcss/tailwind.css';

const ScrollingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      if (isVisible) {
        // Add animation class to start the animation
        element.classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
      } else {
        // Remove animation class to reset
        element.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
      }
    }
  }, [isVisible]);

  const getPageName = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About Us';
      case '/contact':
        return 'Contact Us';
      default:
        return 'Home';
    }
  };

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden text-[#F0ECE3] text-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover animate-[scrollBackground_60s_linear_infinite] z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1"></div>
      <div
        className="relative flex flex-col justify-center h-full opacity-0"
        ref={contentRef}
      >
        <h1 className="text-2xl font-serif sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black text-[#F0ECE3]">Welcome to Room Roost</h1>
        <p className="text-xl font-serif mt-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-[#F0ECE3]">{getPageName(location.pathname)}</p>
      </div>
    </section>
  );
};

export default ScrollingSection;
