import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaBed, FaBath, FaCouch, FaEdit, FaTrashAlt } from "react-icons/fa";

const OwerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setMainImage(data.images[0]);
        } else {
          setError("Failed to fetch property details");
        }
      } catch (error) {
        setError("Error fetching property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (confirmDelete) {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/details/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Property deleted successfully");
          navigate("/property-listing"); // Redirect after deletion
        } else {
          alert("Failed to delete the property");
        }
      } catch (error) {
        alert("Error deleting the property");
      }
    }
  };

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">{error}</div>;
  }

  if (!property) {
    return <div className="p-4 text-center text-red-600">Property not found</div>;
  }

  const extraImagesCount = property.images.length - 5;

  return (
    <div className="pt-[125px] px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2 text-gray-800">₹{property.price} /month</h2>
            <p className="text-xl text-gray-600">
              {property.bed} BHK {property.sqft} Sq-ft For Rent in{" "}
              <span className="text-blue-600">{property.location}</span>
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Edit and Delete Icons */}
            <FaEdit
              className="text-blue-600 cursor-pointer"
              size={24}
              onClick={() => navigate(`/edit-property/${id}`)} // Navigate to Edit Page
            />
            <FaTrashAlt
              className="text-red-600 cursor-pointer"
              size={24}
              onClick={handleDelete}
            />
          </div>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div className="flex flex-col items-center">
            <img
              src={mainImage}
              alt="Main Property"
              className="w-full h-80 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <div className="flex space-x-2">
              {property.images.slice(0, 5).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
                      image === mainImage ? "border-2 border-blue-600" : ""
                    }`}
                    onClick={() => setMainImage(image)}
                    loading="lazy"
                  />
                  {index === 2 && extraImagesCount > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                      <span className="text-white font-semibold">
                        +{extraImagesCount} Photos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-4">
            {/* Your property details remain unchanged */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Contact Owner
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
            Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwerPage;
