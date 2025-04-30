import React, { useEffect, useState } from "react";

const UpdateForm = ({ item, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: item.name,
    price: item.price,
    amount: item.amount,
    image: item.image || "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setFormData({
      name: item.name,
      price: item.price,
      amount: item.amount,
      image: item.image,
    });
  }, [item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("price", formData.price);
    updatedData.append("amount", formData.amount);
    if (selectedImage) updatedData.append("image", selectedImage);
    onUpdate(item._id, updatedData);
  };

  return (
    <div className="text-sm md:text-base">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-orange-600">
        Update Food Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-600 mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block text-gray-600 mb-1">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-600 mb-1">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
