import React, { useState } from "react";
import { FaSave } from "react-icons/fa";

const FoodForm = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
      <form className="w-full max-w-sm bg-white p-5 rounded-xl shadow-md border border-orange-100">
        <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
          Add / Edit Food Item
        </h3>

        {/* Name */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. Chicken"
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Price
          </label>
          <input
            type="number"
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. 10.00"
          />
        </div>

        {/* Amount */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Amount (kg/piece)
          </label>
          <input
            type="text"
            className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            placeholder="e.g. 2 kg"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-orange-600 mb-1">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-600 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-orange-500 file:text-white hover:file:bg-orange-600"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-3 rounded shadow w-24 h-24 object-cover border border-orange-200"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition"
        >
          <FaSave /> Save Item
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
