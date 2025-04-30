/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CreateForm from "../form/CreateForm";
import UpdateForm from "../form/UpdateForm";
import UpdateCard from "../Reuseable/Card/UpdateCard";

const ManageFoodPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch food data
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/foods");
        const result = await response.json();

        const foodsArray = Array.isArray(result) ? result : result?.data || [];
        setFoodItems(foodsArray);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const handleUpdateClick = (item) => {
    setSelectedItem(item); // Set the item to be updated
    setShowUpdateForm(true); // Show the UpdateForm as a modal
  };

  const handleDelete = async (item) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/foods/${item._id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setFoodItems(foodItems.filter((food) => food._id !== item._id));
      } else {
        setError("Failed to delete the food item");
      }
    } catch (err) {
      setError("Error deleting the food item");
    }
  };

  // Close the UpdateForm modal
  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedItem(null);
  };

  // Handle updating the item
  const handleUpdateSubmit = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/foods/${id}`, {
        method: "PUT",
        body: updatedData, // Send FormData for image and other fields
      });

      if (response.ok) {
        const updatedFood = await response.json();
        setFoodItems((prevItems) =>
          prevItems.map((item) =>
            item._id === updatedFood.data._id ? updatedFood.data : item
          )
        );
        closeUpdateForm(); // Close the modal after update
      } else {
        setError("Failed to update the food item");
      }
    } catch (err) {
      setError("Error updating the food item");
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8">
      {/* "Create Products" Button */}
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-2xl font-semibold text-orange-600">
          Manage Food Items
        </h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)} // Toggle form visibility
          className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition"
        >
          Create Products
        </button>
      </div>

      {/* Show CreateForm as Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            {" "}
            {/* Smaller width */}
            <CreateForm onClose={() => setShowCreateForm(false)} />
          </div>
        </div>
      )}

      {/* Modal for UpdateForm */}
      {showUpdateForm && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full">
            <UpdateForm
              item={selectedItem}
              onClose={closeUpdateForm}
              onUpdate={handleUpdateSubmit} // Pass the update handler
            />
          </div>
        </div>
      )}

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <UpdateCard
              key={item._id || item.id}
              item={item}
              onUpdateClick={handleUpdateClick} // Pass the update click handler
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageFoodPage;
