import React, { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const API_URL = "http://localhost:5000/api/foods";

const FoodForm = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    amount: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          setFoodItems(data.data);
        } else {
          console.error("Expected 'data' array from API:", data);
        }
      } catch (error) {
        console.error("Error fetching food items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove the image from the body if it's empty
    const payload = { ...formData };
    if (!payload.image.trim()) {
      delete payload.image; // Optional field, can be omitted if empty
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to add food item");
      }

      const addedFood = await response.json();
      if (addedFood && addedFood.data) {
        setFoodItems([...foodItems, addedFood.data]); // Add the new item to the list
        toast.success("Food item added successfully!");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error adding food item:", error);
      toast.error("Failed to add food item.");
    }

    // Reset form after submission
    setFormData({ name: "", price: "", amount: "", image: "" });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-5 rounded-xl shadow-md border border-orange-100"
      >
        <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
          Add Food Item
        </h3>

        {/* Name Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. Chicken"
            required
          />
        </div>

        {/* Price Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. 10.00"
            required
          />
        </div>

        {/* Amount Field */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Amount (kg/piece)
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. 2 kg"
            required
          />
        </div>

        {/* Image Field (Optional) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Image URL (Optional)
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition"
        >
          <FaSave /> Save Item
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FoodForm;
