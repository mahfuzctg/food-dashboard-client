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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the selected image file
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("price", formData.price);
    updatedData.append("amount", formData.amount);
    if (selectedImage) {
      updatedData.append("image", selectedImage);
    }

    onUpdate(item._id, updatedData);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Update Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700">
            Amount
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
