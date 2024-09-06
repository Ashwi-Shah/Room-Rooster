import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import property1 from '../assets/img/property-1.jpg';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="bg-[#2a343a] text-[#F0ECE3] py-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Get In Touch</h5>
            <p className="mb-2 hover:text-[#C7B198]">
              <FontAwesomeIcon icon={faLocationDot} style={{ color: "#f0ece3" }} className="mr-3" />LDRP College, Sector 15, Gandhinagar
            </p>
            <p className="mb-2 hover:text-[#C7B198]">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#f0ece3" }} className="mr-3" />+91 9876543210
            </p>
            <p className="mb-2 hover:text-[#C7B198]">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f0ece3" }} className="mr-3" />room.roost@gmail.com
            </p>
            <div className="flex space-x-2 mt-5">
              <a className="btn btn-outline-light p-2 border border-white rounded-full flip-icon" href="https://twitter.com" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#f0ece3" }} />
              </a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full flip-icon" href="https://facebook.com" target='_blank'>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "#f0ece3" }} />
              </a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full flip-icon" href="https://youtube.com" target='_blank'>
                <FontAwesomeIcon icon={faYoutube} style={{ color: "#f0ece3" }} />
              </a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full flip-icon" href="https://linkedin.com" target='_blank'>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#f0ece3" }} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Quick Links</h5>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              <Link to="/">Home</Link>
              </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              <Link to="/about">About Us</Link>
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              <Link to="/contact">Contact Us</Link>
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              <Link to="/add-property">Add Property</Link>
            </a>
          </div>
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Photo Gallery</h5>
            <div className="grid grid-cols-3 gap-4 w-80">
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
              <img className="w-full h-16 object-cover rounded-lg" src={property1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-5">
        <img src={logo} alt="Logo" className="w-52 h-auto object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Footer;
