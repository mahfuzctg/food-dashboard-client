import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const UpdateCard = ({ item, onUpdateClick, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50 text-sm md:text-base">
      <td className="p-2 md:p-3">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md border"
        />
      </td>
      <td className="p-2 md:p-3 font-medium text-gray-800 max-w-[120px] truncate">
        <span className="text-orange-600">{item.name}</span>
      </td>
      <td className="p-2 md:p-3 text-gray-700 font-semibold whitespace-nowrap">
        ${item.price}
      </td>
      <td className="p-2 md:p-3 text-gray-600 whitespace-nowrap">
        {item.amount} units
      </td>
      <td className="p-2 md:p-3 flex my-8 items-center justify-center gap-2">
        <button
          onClick={() => onUpdateClick(item)}
          className="text-orange-500  hover:text-orange-400 transition transform hover:scale-110"
          title="Edit"
        >
          <MdEdit size={20} />
        </button>
        <button
          onClick={() => onDelete(item)}
          className="text-red-600 hover:text-red-500 transition transform hover:scale-110"
          title="Delete"
        >
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default UpdateCard;
