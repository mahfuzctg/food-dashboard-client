import React from "react";
import { FaBalanceScale, FaDollarSign } from "react-icons/fa";
const FoodCard = ({ item }) => {
  return (
    <div className="bg-white border md:w-[95%] mx-auto border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 p-2">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-600 mb-2 truncate">
          {item.name}
        </h3>
        <div className="flex items-center text-gray-700 mb-2">
          <FaDollarSign className="text-orange-500 mr-2" />
          <p className="text-lg font-medium">${item.price}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaBalanceScale className="text-orange-500 mr-2" />
          <p className="text-md">{item.amount} units</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
