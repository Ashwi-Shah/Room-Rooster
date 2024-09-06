import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DeleteProperty = ({ propertyId, onSuccess }) => {
    const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteSuccess = async () => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      setIsLoading(true);
      try {
        const response = await fetch(`https://room-rooster.vercel.app/delete/details/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          onSuccess();
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
      <div
        onClick={handleDeleteSuccess}
        // className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete Property"}
      </div>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default DeleteProperty;
