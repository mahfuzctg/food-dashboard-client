import React from "react";

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-orange-500 mb-1">{item.name}</h3>
        <p className="text-gray-700 mb-1">💰 Price: ${item.price}</p>
        <p className="text-gray-700">⚖️ Amount: {item.amount}</p>
      </div>
    </div>
  );
};

export default FoodCard;
