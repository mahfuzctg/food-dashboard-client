import React, { useEffect, useState } from "react";
import FoodCard from "../Reuseable/Card/FoodCard";

const FoodListPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/foods");
        const result = await response.json();

        console.log("API response:", result);

        const foodsArray = Array.isArray(result) ? result : result.data;

        setFoodItems(foodsArray || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-orange-600 text-center">
        All Food Items
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <FoodCard key={item._id || item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodListPage;
