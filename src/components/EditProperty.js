import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProperty = ({ propertyId, onSuccess }) => {
    const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({
    price: "",
    bed: "",
    sqft: "",
    location: "",
    name: "",
    // Include other fields as needed
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://room-rooster.vercel.app/get-data-idwise/details/${propertyId}`);
        if (response.ok) {
          const data = await response.json();
          setProperty(data);
          setFormData({
            price: data.price,
            bed: data.bed,
            sqft: data.sqft,
            location: data.location,
            name: data.name,
            // Set other fields as needed
          });
        } else {
          setError("Failed to fetch property details");
        }
      } catch (error) {
        setError("Error fetching property details");
      }
    };

    fetchProperty();
  }, [propertyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`https://room-rooster.vercel.app/update/details/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        onSuccess();
      } else {
        setError("Failed to update property");
      }
    } catch (error) {
      setError("Error updating property");
    } finally {
      setIsLoading(false);
    }
  };

  if (!property) return <p>Loading property details...</p>;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="bed"
        value={formData.bed}
        onChange={handleChange}
        placeholder="Beds"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="sqft"
        value={formData.sqft}
        onChange={handleChange}
        placeholder="Sq-ft"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Property Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      {/* Include other fields as needed */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save Changes"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default EditProperty;
