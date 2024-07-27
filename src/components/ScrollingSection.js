import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollingSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
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

    const getPageName = (pathname) => {
        switch (pathname) {
            case '/':
                return 'Home';
            case '/about':
                return 'About Us';
            case '/contact':
                return 'Contact Us';
            case '/service':
                return 'Our Services';
            default:
                return 'Page';
        }
    };

    return (
        <section className="relative h-[805px] overflow-hidden text-white text-center">
            <div className="absolute top-0 left-0 w-full h-full bg-cover animate-[scrollBackground_60s_linear_infinite] z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1"></div>
            <div className={`relative flex flex-col justify-center h-full opacity-0 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : ''}`} ref={contentRef}>
                <h1 className="font-black text-6xl text-[#F0ECE3]">Welcome to Our Website</h1>
                <p className="font-semibold text-6xl text-[#F0ECE3]">{getPageName(location.pathname)}</p>
            </div>
        </section>
    );
};

export default ScrollingSection;
