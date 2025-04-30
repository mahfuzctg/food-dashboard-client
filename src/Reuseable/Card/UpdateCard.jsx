import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const UpdateCard = ({ item, onUpdateClick, onDelete }) => {
  return (
    <div className="bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-orange-500 mb-1">{item.name}</h3>
        <p className="text-gray-700 mb-1">💰 Price: ${item.price}</p>
        <p className="text-gray-700">⚖️ Amount: {item.amount}</p>
      </div>
      <div className="flex justify-between items-center p-4">
        {/* Update Icon */}
        <button
          onClick={() => onUpdateClick(item)}
          className="text-green-600 hover:text-green-500 transition"
        >
          <MdEdit size={24} />
        </button>
        {/* Delete Icon */}
        <button
          onClick={() => onDelete(item)}
          className="text-red-600 hover:text-red-500 transition"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default UpdateCard;
