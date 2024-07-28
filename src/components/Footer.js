// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';


// const Footer = () => {
//   return (
//     <section className="bg-[#2a343a] text-[#F0ECE3] py-10">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           <div>
//             <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Get In Touch</h5>
//             <p className="mb-2"><FontAwesomeIcon icon={faLocationDot} style={{color: "#f0ece3"}} className="mr-3" />LDRP College, Sector 15, Gandhinagar</p>
//             <p className="mb-2"><FontAwesomeIcon icon={faPhone} style={{color: "#f0ece3"}} className="mr-3" />+91 9876543210</p>
//             <p className="mb-2"><FontAwesomeIcon icon={faEnvelope} style={{color: "#f0ece3"}} className="mr-3" />info@example.com</p>
//             <div className="flex space-x-2 mt-2">
//             <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faTwitter} style={{color: "#f0ece3"}} /></a>
//               <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faFacebook} style={{color: "#f0ece3"}} /></a>
//               <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faYoutube} style={{color: "#f0ece3"}}/></a>
//               <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faLinkedin} style={{color: "#f0ece3"}}/></a>
//             </div>
//           </div>
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
//             <a className="block mb-2 text-gray-400 hover:text-white transition" href="/">Home</a>
//             <a className="block mb-2 text-gray-400 hover:text-white transition" href="/about">About Us</a>
//             <a className="block mb-2 text-gray-400 hover:text-white transition" href="/contact">Contact Us</a>
//             <a className="block mb-2 text-gray-400 hover:text-white transition" href="/service">Services</a>
//             <a className="block mb-2 text-gray-400 hover:text-white transition" href="/add-property">Add Property</a>
//           </div>
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">Photo Gallery</h5>
//             <div className="grid grid-cols-2 gap-2">
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-1.jpg" alt="" />
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-2.jpg" alt="" />
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-3.jpg" alt="" />
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-4.jpg" alt="" />
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-5.jpg" alt="" />
//               <img className="w-full h-24 object-cover rounded-lg" src="img/property-6.jpg" alt="" />
//             </div>
//           </div>
//           <div>
//             <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
//             <p className="mb-4">Any information regarding Website</p>
//             <div className="relative max-w-md mx-auto">
//               <input className="form-input bg-transparent text-gray-900 py-2 px-4 rounded-full w-full" type="text" placeholder="Your email" />
//               <button type="button" className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 py-4">
//         <p className="text-center text-gray-400">© 2024 Your Company. All rights reserved.</p>
//       </div>
//     </section>
//   );
// };

// export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="bg-[#2a343a] text-[#F0ECE3] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Get In Touch</h5>
            <p className="mb-2 hover:text-[#C7B198]"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#f0ece3" }} className="mr-3" />LDRP College, Sector 15, Gandhinagar</p>
            <p className="mb-2 hover:text-[#C7B198]"><FontAwesomeIcon icon={faPhone} style={{ color: "#f0ece3" }} className="mr-3" />+91 9876543210</p>
            <p className="mb-2 hover:text-[#C7B198]"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#f0ece3" }} className="mr-3" />info@example.com</p>
            <div className="flex space-x-2 mt-2">
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: "#f0ece3" }} /></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: "#f0ece3" }} /></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faYoutube} style={{ color: "#f0ece3" }} /></a>
              <a className="btn btn-outline-light p-2 border border-white rounded-full" href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#f0ece3" }} /></a>
            </div>
          </div>
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Quick Links</h5>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              Home
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              About Us
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              Contact Us
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              Services
            </a>
            <a className="block mb-2 text-[#F0ECE3] hover:text-[#C7B198] transition hover:cursor-pointer relative pl-5">
              <FontAwesomeIcon icon={faGreaterThanEqual} style={{ color: "#f0ece3" }} className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-3" />
              Add Property
            </a>
          </div>
          <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Photo Gallery</h5>
            <div className="grid grid-cols-2 gap-2">
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-1.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-2.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-3.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-4.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-5.jpg" alt="" />
              <img className="w-full h-24 object-cover rounded-lg" src="img/property-6.jpg" alt="" />
            </div>
          </div>
          {/* <div>
            <h5 className="text-[#F0ECE3] text-lg font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Any information regarding Website</p>
            <div className="relative max-w-md mx-auto">
              <input className="form-input bg-transparent text-gray-900 py-2 px-4 rounded-full w-full" type="text" placeholder="Your email" />
              <button type="button" className="absolute right-0 top-0 mt-2 mr-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">Submit</button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
