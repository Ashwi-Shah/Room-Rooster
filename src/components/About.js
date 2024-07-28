import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';
import teamImg1 from '../assets/img/team-1.jpg';
import teamImg2 from '../assets/img/team-2.jpg';
import teamImg3 from '../assets/img/team-3.jpg';
import teamImg4 from '../assets/img/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="team py-5" ref={sectionRef}>
            <div className="container mx-auto">
                <div className="section-header text-center mb-10">
                    <h1 className={`text-4xl text-[#596E79] font-bold mb-2 ${isVisible ? 'animate-backInDown' : ''}`}>Experienced Mentor Team</h1>
                    <p className={`text-xl text-[#596E79] font-semibold ${isVisible ? 'animate-backInDown' : ''}`}>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className={`team-item bg-gray-100 rounded-lg overflow-hidden shadow-md ${isVisible ? 'animate-backInDown' : ''}`}>
                            <div className="team-img relative overflow-hidden rounded-t-lg">
                                <img src={teamImg1} alt="Ashwi Shah" className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105" />
                                <div className="team-social absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faGithub } /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faTwitter}  /></a>
                                </div>
                            </div>
                            <div className="team-text text-center p-4 bg-white border-t border-gray-200">
                                <h2 className="text-lg text-[#596E79] font-bold hover:text-[#C7B198]">Ashwi Shah</h2>
                                <p className="text-sm text-[#596E79] font-medium hover:text-[#C7B198]">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className={`team-item bg-gray-100 rounded-lg overflow-hidden shadow-md ${isVisible ? 'animate-backInDown' : ''}`}>
                            <div className="team-img relative overflow-hidden rounded-t-lg">
                                <img src={teamImg2} alt="Divy Shah" className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105" />
                                <div className="team-social absolute inset-0 flex items-center justify-center bg-[#F0ECE3] bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faLinkedin}  /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faGithub } /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faTwitter}  /></a>
                                </div>
                            </div>
                            <div className="team-text text-center p-4 bg-white border-t border-gray-200">
                                <h2 className="text-lg text-[#596E79] font-bold hover:text-[#C7B198]">Divy Shah</h2>
                                <p className="text-sm font-medium text-[#596E79] hover:text-[#C7B198]">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className={`team-item bg-gray-100 rounded-lg overflow-hidden shadow-md ${isVisible ? 'animate-backInDown' : ''}`}>
                            <div className="team-img relative overflow-hidden rounded-t-lg">
                                <img src={teamImg3} alt="Priyansee Soni" className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105" />
                                <div className="team-social absolute inset-0 flex items-center justify-center bg-[#F0ECE3] bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faLinkedin}  /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faGithub } /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faTwitter} /></a>
                                </div>
                            </div>
                            <div className="team-text text-center p-4 bg-white border-t border-gray-200">
                                <h2 className="text-lg text-[#596E79] font-bold hover:text-[#C7B198]">Priyansee Soni</h2>
                                <p className="text-sm font-medium text-[#596E79] hover:text-[#C7B198]">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className={`team-item bg-gray-100 rounded-lg overflow-hidden shadow-md ${isVisible ? 'animate-backInDown' : ''}`}>
                            <div className="team-img relative overflow-hidden rounded-t-lg">
                                <img src={teamImg4} alt="Yug Buddhadev" className="w-full transform transition-transform duration-300 ease-in-out hover:scale-105" />
                                <div className="team-social absolute inset-0 flex items-center justify-center bg-[#F0ECE3] bg-opacity-50 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faLinkedin} /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faGithub } /></a>
                                    <a href="#" className="mx-2 p-2 bg-[#596E79] text-[#F0ECE3] rounded-full hover:border-2 hover:border-[#596E79] hover:bg-transparent hover:text-[#596E79]"><FontAwesomeIcon icon={faTwitter}  /></a>
                                </div>
                            </div>
                            <div className="team-text text-center p-4 bg-white border-t border-gray-200">
                                <h2 className="text-lg text-[#596E79] font-bold hover:text-[#C7B198]">Yug Buddhadev</h2>
                                <p className="text-sm font-medium text-[#596E79] hover:text-[#C7B198]">Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

// Tailwind CSS animation styles
<style jsx>{`
    @keyframes backInDown {
        0% {
            opacity: 0;
            transform: translateY(-100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .animate-backInDown {
        animation: backInDown 1s ease-out forwards;
    }
`}</style>
