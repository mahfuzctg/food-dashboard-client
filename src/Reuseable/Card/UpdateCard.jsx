import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const UpdateCard = ({ item, onUpdateClick, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-4">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-24 h-24 object-cover rounded"
        />
      </td>
      <td className="p-4 font-semibold text-orange-600">{item.name}</td>
      <td className="p-4 text-gray-700 text-lg font-medium">${item.price}</td>
      <td className="p-4 text-gray-700">{item.amount} units</td>
      <td className="p-4 flex gap-4 justify-center">
        <button
          onClick={() => onUpdateClick(item)}
          className="text-orange-500 hover:text-orange-400 transition duration-200 transform hover:scale-110"
        >
          <MdEdit size={24} />
        </button>
        <button
          onClick={() => onDelete(item)}
          className="text-red-600 hover:text-red-500 transition duration-200 transform hover:scale-110"
        >
          <MdDelete size={24} />
        </button>
      </td>
    </tr>
  );
};

export default UpdateCard;
