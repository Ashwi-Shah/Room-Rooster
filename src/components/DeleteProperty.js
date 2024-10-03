import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteProperty = ({ onSuccess }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://room-rooster.vercel.app/delete/details/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          onSuccess();
          navigate("/property");  // Navigate to home on success
        } else {
          setError("Failed to delete property");
        }
      } catch (error) {
        setError("Error deleting property");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete Property"}
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default DeleteProperty;
