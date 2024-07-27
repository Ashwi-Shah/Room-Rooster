import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PropertyListing = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/details`);
                if (response.ok) {
                    const data = await response.json();
                    setDetails(data);
                } else {
                    console.error("Failed to fetch properties");
                }
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        

        fetchProperties();
    }, []);

    const navigate = useNavigate();

    const handleDetailsClick = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-700">Property Listing</h1>
                <p className="text-xl font-semibold text-gray-600 mt-4">
                    Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.length > 0 ? details.map((detail) => (
                    <div key={detail._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                        <div className="relative overflow-hidden">
                            <a href={`/details/${detail._id}`}>
                                <img
                                    className="w-full h-48 object-cover"
                                    src={detail.image || "default-image-url.jpg"}
                                    alt={detail.name}
                                />
                            </a>
                            <div className="absolute bottom-0 left-0 bg-gray-700 text-white text-xs font-semibold uppercase py-1 px-3 rounded-tr-lg">
                                {detail.name}
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="text-xl font-bold text-gray-700 mb-3">₹{detail.price} /month</h5>
                            <p className="text-gray-600 mb-2 flex items-center">
                                <i className="fa fa-map-marker-alt mr-2"></i>{detail.description}
                            </p>
                            <p className="text-gray-600 mb-2 flex items-center">
                                <i className="fa-solid fa-phone mr-2"></i>{detail.phoneNumber}
                            </p>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                                onClick={() => handleDetailsClick(detail._id)}
                            >
                                Details
                            </button>
                        </div>
                        <div className="flex border-t border-dashed border-gray-300">
                            <small className="flex-1 text-center border-r border-dashed border-gray-300 py-2 text-gray-600">
                                <i className="fa fa-ruler-combined mr-2"></i>{detail.sqft} Sqft
                            </small>
                            <small className="flex-1 text-center border-r border-dashed border-gray-300 py-2 text-gray-600">
                                <i className="fa fa-bed mr-2"></i>{detail.bed} Bed
                            </small>
                            <small className="flex-1 text-center py-2 text-gray-600">
                                <i className="fa fa-bath mr-2"></i>{detail.bath} Bath
                            </small>
                        </div>
                    </div>
                )) : (
                    <p className="text-center text-gray-600">No properties available.</p>
                )}
            </div>
        </div>
    );
};

export default PropertyListing;
