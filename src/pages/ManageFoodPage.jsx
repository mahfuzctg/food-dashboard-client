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
    setSelectedItem(item);
    setShowUpdateForm(true);
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

  const closeUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedItem(null);
  };

  const handleUpdateSubmit = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5000/api/foods/${id}`, {
        method: "PUT",
        body: updatedData,
      });

      if (response.ok) {
        const updatedFood = await response.json();
        setFoodItems((prevItems) =>
          prevItems.map((item) =>
            item._id === updatedFood.data._id ? updatedFood.data : item
          )
        );
        closeUpdateForm();
      } else {
        setError("Failed to update the food item");
      }
    } catch (err) {
      setError("Error updating the food item");
    }
  };

  return (
    <div className="w-11/12 md:max-w-6xl mx-auto py-8">
      <div className="flex justify-between mb-8 items-center">
        <h2 className="text-md md:text-2xl font-semibold text-orange-600 uppercase">
          Manage Food Items
        </h2>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-500 transition uppercase"
        >
          Create Products
        </button>
      </div>

      {showCreateForm && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full">
            <CreateForm onClose={() => setShowCreateForm(false)} />
          </div>
        </div>
      )}

      {showUpdateForm && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full">
            <UpdateForm
              item={selectedItem}
              onClose={closeUpdateForm}
              onUpdate={handleUpdateSubmit}
            />
          </div>
        </div>
      )}

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase">
                <th className="p-4">Image</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Amount</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {foodItems.map((item) => (
                <UpdateCard
                  key={item._id || item.id}
                  item={item}
                  onUpdateClick={handleUpdateClick}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFoodPage;
