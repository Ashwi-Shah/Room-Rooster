import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Get In Touch</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt mr-3"></i>LDRP College, Sector 15, Gandhinagar</p>
            <p className="mb-2"><i className="fa fa-phone-alt mr-3"></i>+91 9876543210</p>
            <p className="mb-2"><i className="fa fa-envelope mr-3"></i>info@example.com</p>
            <div className="flex space-x-2 mt-2">
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
            <a className="block mb-2 text-gray-400 hover:text-white transition" href="/">Home</a>
            <a className="block mb-2 text-gray-400 hover:text-white transition" href="/about">About Us</a>
            <a className="block mb-2 text-gray-400 hover:text-white transition" href="/contact">Contact Us</a>
            <a className="block mb-2 text-gray-400 hover:text-white transition" href="/service">Services</a>
            <a className="block mb-2 text-gray-400 hover:text-white transition" href="/add-property">Add Property</a>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Photo Gallery</h5>
            <div className="grid grid-cols-2 gap-2">
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-1.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-2.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-3.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-4.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-5.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-6.jpg" alt="" />
            </div>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Any information regarding Website</p>
            <div className="relative max-w-md mx-auto">
              <input className="form-input bg-transparent text-gray-900 py-2 px-4 rounded-full w-full" type="text" placeholder="Your email" />
              <button type="button" className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-gray-400">© 2024 Your Company. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
