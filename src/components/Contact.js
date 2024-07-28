import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInLeft');
        }
      });
    }, { threshold: 0.5 });

    if (mapRef.current) {
      mapObserver.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapObserver.unobserve(mapRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const formObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInRight');
        }
      });
    }, { threshold: 0.5 });

    if (formRef.current) {
      formObserver.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        formObserver.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto py-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-8">
        <div className="bg-[#78909d] border border-dashed border-[#596E79] p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] p-4 rounded-full mr-4">
            <FontAwesomeIcon icon={faLocationDot} className='text-[#2a4d5f] text-2xl' />
          </div>
          <span className="text-[#F0ECE3] font-semibold">123 Street, New York, USA</span>
        </div>
        <div className="bg-[#78909d] border border-dashed border-[#596E79] p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] p-4 rounded-full mr-4">
            <FontAwesomeIcon icon={faEnvelope} className='text-[#2a4d5f] text-2xl' />
          </div>
          <span className="text-[#F0ECE3] font-semibold">info@example.com</span>
        </div>
        <div className="bg-[#78909d] border border-dashed border-[#596E79] p-6 rounded-lg shadow-md flex items-center">
          <div className="bg-[#F0ECE3] border border-dashed border-[#596E79] p-4 rounded-full mr-4">
            <FontAwesomeIcon icon={faPhone} className='text-[#2a4d5f] text-2xl' />
          </div>
          <span className="text-[#F0ECE3] font-semibold">+012 345 6789</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded overflow-hidden" ref={mapRef}>
          <iframe
            className="w-full h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d66101.2865141258!2d72.58629376288712!3d23.226891490843595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b933477ba9f%3A0xe440409e66bea08a!2sLDRP%20Institute%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1721727760155!5m2!1sen!2sin"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div ref={formRef}>
          <form className="bg-[#78909d] p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  className="form-control w-full px-3 py-2 text-[#333d42] bg-[#F0ECE3] rounded-md focus:outline-none"
                  id="name"
                  placeholder={!name ? "Your Name" : ""}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="absolute text-gray-600 top-2 left-3"></label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="form-control w-full px-3 py-2 text-[#333d42] bg-[#F0ECE3] rounded-md focus:outline-none"
                  id="email"
                  placeholder={!email ? "Your Email" : ""}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="absolute text-gray-600 top-2 left-3"></label>
              </div>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                className="form-control w-full px-3 py-2 text-[#333d42] bg-[#F0ECE3] rounded-md focus:outline-none"
                id="subject"
                placeholder={!subject ? "Subject" : ""}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="subject" className="absolute text-gray-600 top-2 left-3"></label>
            </div>
            <div className="relative mb-4">
              <textarea
                className="form-control w-full px-3 py-2 text-[#333d42] bg-[#F0ECE3] rounded-md focus:outline-none"
                placeholder={!message ? "Leave a message here" : ""}
                id="message"
                style={{ height: "150px" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message" className="absolute text-gray-600 top-2 left-3"></label>
            </div>
            <button className="w-full py-3 text-[#596E79] font-semibold bg-[#F0ECE3] rounded-md hover:bg-[#596E79] hover:text-[#F0ECE3]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
