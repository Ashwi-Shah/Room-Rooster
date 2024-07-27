import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = ({ isAuthenticated, setIsAuthenticated, name }) => {
    const [showDropdown, setShowDropdown] = useState(false);
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

    return (
        <nav className="bg-black bg-opacity-50 fixed top-0 left-0 w-full z-10 transition-colors duration-300 ease-in-out">
            <div className="container mx-auto flex items-center justify-between py-2 px-4">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img className="w-8 h-8" src="/img/icon-deal.png" alt="Icon" />
                    </Link>
                    <button className="text-white text-2xl lg:hidden ml-4">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="hidden lg:flex flex-grow justify-end items-center space-x-6">
                    <Link to="/" className="text-white text-lg uppercase font-semibold hover:border-b-2 border-white transition duration-300">Home</Link>
                    <Link to="/about" className="text-white text-lg uppercase font-semibold hover:border-b-2 border-white transition duration-300">About</Link>
                    <Link to="/contact" className="text-white text-lg uppercase font-semibold hover:border-b-2 border-white transition duration-300">Contact</Link>
                    <Link to="/service" className="text-white text-lg uppercase font-semibold hover:border-b-2 border-white transition duration-300">Service</Link>
                    <Link to="/add-property" className="hidden lg:flex text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Add Property</Link>
                </div>
                <div className="relative">
                    <FontAwesomeIcon
                        icon={faCircleUser}
                        className="text-white text-2xl cursor-pointer"
                        onClick={handleProfileClick}
                    />
                    {showDropdown && (
                        <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-4 w-64">
                            {isAuthenticated ? (
                                <>
                                    <img src="/img/user-img.webp" alt="Profile" className="w-12 h-12 rounded-full mx-auto mb-2" />
                                    <div className="text-center mb-2">Hi, {name}!</div>
                                    <button onClick={handleLogout} className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg w-full hover:bg-gray-600 transition duration-300">Logout</button>
                                </>
                            ) : (
                                <>
                                    <div className="text-center mb-2">Hi, Guest!</div>
                                    <div className="flex flex-col gap-2">
                                        <Link to="/signup" className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Sign Up</Link>
                                        <Link to="/login" className="bg-transparent text-white border border-gray-600 px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition duration-300">Log In</Link>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default CustomNavbar;

