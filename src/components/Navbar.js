// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
// import 'tailwindcss/tailwind.css'; // Ensure this line is here to import Tailwind CSS


// const CustomNavbar = ({ isAuthenticated, setIsAuthenticated, name }) => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showMobileMenu, setShowMobileMenu] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowDropdown(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleProfileClick = () => {
//         setShowDropdown(prev => !prev);
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         setShowDropdown(false);
//     };

//     const handleToggleMenu = () => {
//         setShowMobileMenu(prev => !prev);
//     };

//     return (
//         <nav className="bg-black bg-opacity-50 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ease-in-out">
//             <div className="max-w-full flex items-center justify-between py-4 px-4 mx-8">
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center">
//                         <img className="w-8 h-8" src="/img/icon-deal.png" alt="Icon" />
//                     </Link>
//                 </div>
//                 <div className="hidden xl:flex flex-grow justify-end items-center space-x-6 font-serif">
//                     <Link to="/" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Home</Link>
//                     <Link to="/about" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">About</Link>
//                     <Link to="/contact" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Contact</Link>
//                     <Link to="/service" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Service</Link>
//                     <Link to="/add-property" className="hidden xl:flex text-[#F0ECE3] bg-[#596E79] px-4 py-2 rounded-lg text-xl hover:bg-[#F0ECE3] hover:text-[#596E79] transition duration-300">Add Property</Link>
//                 </div>
//                 <div className="relative flex items-center space-x-4">
//                     <button  
//                         className="text-[#F0ECE3] text-2xl xl:hidden border-2 border-[#F0ECE3] border-opacity-25 rounded-2xl p-2"
//                         onClick={handleToggleMenu}
//                     >
//                         <FontAwesomeIcon icon={faBars} />
//                     </button>
//                     <FontAwesomeIcon
//                         icon={faCircleUser}
//                         className="text-[#F0ECE3] text-3xl cursor-pointer pl-3"
//                         onClick={handleProfileClick}
//                     />
//                     {showDropdown && (
//                         <div ref={dropdownRef} className="absolute right-0 top-full mt-2 bg-black bg-opacity-65 text-[#F0ECE3] rounded-lg shadow-lg p-4 w-64">
//                             {isAuthenticated ? (
//                                 <>
//                                     <img src="/img/user-img.webp" alt="Profile" className="w-12 h-12 rounded-full mx-auto mb-2" />
//                                     <div className="text-center mb-2 font-bold">Hi, {name}!</div>
//                                     <button onClick={handleLogout} className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg w-full hover:bg-gray-600 transition duration-300">Logout</button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className="text-center mb-2 font-bold">Hi, Guest!</div>
//                                     <div className="flex flex-col gap-2">
//                                         <Link to="/signup" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Sign Up</Link>
//                                         <Link to="/login" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Log In</Link>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {showMobileMenu && (
//                 <div className="xl:hidden bg-black bg-opacity-50 text-[#F0ECE3]">
//                     <Link to="/" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Home</Link>
//                     <Link to="/about" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">About</Link>
//                     <Link to="/contact" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Contact</Link>
//                     <Link to="/service" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Service</Link>
//                     <Link to="/add-property" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Add Property</Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default CustomNavbar;
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
// import 'tailwindcss/tailwind.css'; // Ensure this line is here to import Tailwind CSS
// import logo from '../assets/img/logo.png';

// const CustomNavbar = ({ isAuthenticated, setIsAuthenticated, name }) => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showMobileMenu, setShowMobileMenu] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setShowDropdown(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleProfileClick = () => {
//         setShowDropdown(prev => !prev);
//     };

//     const handleLogout = () => {
//         setIsAuthenticated(false);
//         setShowDropdown(false);
//     };

//     const handleToggleMenu = () => {
//         setShowMobileMenu(prev => !prev);
//     };

//     return (
//         <nav className="bg-black bg-opacity-50 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ease-in-out">
//             <div className="max-w-full flex items-center justify-between py-4 px-4 mx-8">
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center">
//                         <img className="w-8 h-8" src={logo} alt="Icon" />
//                     </Link>
//                 </div>
//                 <div className="hidden lg:flex xl:flex flex-grow justify-end items-center space-x-6 font-serif">
//                     <Link to="/" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Home</Link>
//                     <Link to="/about" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">About</Link>
//                     <Link to="/contact" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Contact</Link>
//                     <Link to="/service" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Service</Link>
//                     <Link to="/add-property" className="text-[#F0ECE3] bg-[#596E79] px-4 py-2 rounded-lg text-xl hover:bg-[#F0ECE3] hover:text-[#596E79] transition duration-300">Add Property</Link>
//                 </div>
//                 <div className="relative flex items-center space-x-4">
//                     <button  
//                         className="text-[#F0ECE3] text-2xl xl:hidden border-2 border-[#F0ECE3] border-opacity-25 rounded-2xl p-2"
//                         onClick={handleToggleMenu}
//                     >
//                         <FontAwesomeIcon icon={faBars} />
//                     </button>
//                     <FontAwesomeIcon
//                         icon={faCircleUser}
//                         className="text-[#F0ECE3] text-3xl cursor-pointer pl-3"
//                         onClick={handleProfileClick}
//                     />
//                     {showDropdown && (
//                         <div ref={dropdownRef} className="absolute right-0 top-full mt-2 bg-black bg-opacity-65 text-[#F0ECE3] rounded-lg shadow-lg p-4 w-64">
//                             {isAuthenticated ? (
//                                 <>
//                                     <img src="/img/user-img.webp" alt="Profile" className="w-12 h-12 rounded-full mx-auto mb-2" />
//                                     <div className="text-center mb-2 font-bold">Hi, {name}!</div>
//                                     <button onClick={handleLogout} className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg w-full hover:bg-gray-600 transition duration-300">Logout</button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <div className="text-center mb-2 font-bold">Hi, Guest!</div>
//                                     <div className="flex flex-col gap-2">
//                                         <Link to="/signup" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Sign Up</Link>
//                                         <Link to="/login" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Log In</Link>
//                                     </div>
//                                 </>
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//             {showMobileMenu && (
//                 <div className="xl:hidden bg-black bg-opacity-50 text-[#F0ECE3]">
//                     <Link to="/" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Home</Link>
//                     <Link to="/about" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">About</Link>
//                     <Link to="/contact" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Contact</Link>
//                     <Link to="/service" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Service</Link>
//                     <Link to="/add-property" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Add Property</Link>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default CustomNavbar;
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css'; // Ensure this line is here to import Tailwind CSS
import logo from '../assets/img/logo1.png';

const CustomNavbar = ({ isAuthenticated, setIsAuthenticated, name }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleProfileClick = () => {
        setShowDropdown(prev => !prev);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setShowDropdown(false);
    };

    const handleToggleMenu = () => {
        setShowMobileMenu(prev => !prev);
    };

    return (
        <nav className="bg-black bg-opacity-50 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ease-in-out">
            <div className="max-w-full flex items-center justify-between py-4 px-4 mx-8">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img className="logo-size" src={logo} alt="Icon" />
                    </Link>
                </div>
                <div className="hidden lg:flex xl:flex flex-grow justify-end items-center space-x-6 font-serif">
                    <Link to="/" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Home</Link>
                    <Link to="/about" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">About</Link>
                    <Link to="/contact" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Contact</Link>
                    <Link to="/service" className="text-[#F0ECE3] text-lg uppercase font-semibold underline-from-center hover:text-[#C7B198]">Service</Link>
                    <Link to="/add-property" className="text-[#F0ECE3] bg-[#596E79] px-4 py-2 rounded-lg text-xl hover:bg-[#F0ECE3] hover:text-[#596E79] transition duration-300">Add Property</Link>
                </div>
                <div className="relative flex items-center space-x-4">
                    <button  
                        className="text-[#F0ECE3] text-2xl xl:hidden border-2 border-[#F0ECE3] border-opacity-25 rounded-2xl p-2"
                        onClick={handleToggleMenu}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-[#F0ECE3] text-3xl cursor-pointer pl-3"
                        onClick={handleProfileClick}
                    />
                    {showDropdown && (
                        <div ref={dropdownRef} className="absolute right-0 top-full mt-2 bg-black bg-opacity-65 text-[#F0ECE3] rounded-lg shadow-lg p-4 w-64">
                            {isAuthenticated ? (
                                <>
                                    <img src="/img/user-img.webp" alt="Profile" className="w-12 h-12 rounded-full mx-auto mb-2" />
                                    <div className="text-center mb-2 font-bold">Hi, {name}!</div>
                                    <button onClick={handleLogout} className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg w-full hover:bg-gray-600 transition duration-300">Logout</button>
                                </>
                            ) : (
                                <>
                                    <div className="text-center mb-2 font-bold">Hi, Guest!</div>
                                    <div className="flex flex-col gap-2">
                                        <Link to="/signup" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Sign Up</Link>
                                        <Link to="/login" className="bg-transparent text-[#F0ECE3] font-semibold border border-[#596E79] px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Log In</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {showMobileMenu && (
                <div className="xl:hidden bg-black bg-opacity-50 text-[#F0ECE3]">
                    <Link to="/" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Home</Link>
                    <Link to="/about" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">About</Link>
                    <Link to="/contact" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Contact</Link>
                    <Link to="/service" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Service</Link>
                    <Link to="/add-property" className="block px-8 py-2 text-lg uppercase font-semibold hover:bg-black hover:bg-opacity-50">Add Property</Link>
                </div>
            )}
        </nav>
    );
};

export default CustomNavbar;
