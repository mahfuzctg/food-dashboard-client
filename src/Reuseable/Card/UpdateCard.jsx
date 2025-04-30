import React from "react";
import { MdDelete, MdEdit } from "react-icons/md"; // For edit and delete icons

const UpdateCard = ({ item, onUpdateClick, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 p-4">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-600 mb-2 truncate">
          {item.name}
        </h3>
        <div className="flex items-center text-gray-700 mb-2">
          <span className="text-orange-500 mr-2">💰</span>
          <p className="text-lg font-medium">${item.price}</p>
        </div>
        <div className="flex items-center text-gray-700">
          <span className="text-orange-500 mr-2">⚖️</span>
          <p className="text-md">{item.amount} units</p>
        </div>
      </div>
      <div className="flex justify-between items-center p-4">
        {/* Update Icon */}
        <button
          onClick={() => onUpdateClick(item)}
          className="text-orange-500 hover:text-orange-400 transition duration-200 transform hover:scale-110"
        >
          <MdEdit size={26} />
        </button>
        {/* Delete Icon */}
        <button
          onClick={() => onDelete(item)}
          className="text-red-600 hover:text-red-500 transition duration-200 transform hover:scale-110"
        >
          <MdDelete size={26} />
        </button>
      </div>
    </div>
  );
};

export default UpdateCard;
