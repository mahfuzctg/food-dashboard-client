import React, { useEffect, useState } from "react";
import CreateForm from "../form/CreateForm";
import UpdateCard from "../Reuseable/Card/UpdateCard";

const ManageFoodPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false); // State to control form visibility

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

  const handleUpdate = (item) => {
    console.log("Updating food item:", item);
    // Implement your update logic here
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

      {/* Show CreateForm if the state is true */}
      {showCreateForm && <CreateForm />}

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <UpdateCard
              key={item._id || item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageFoodPage;
