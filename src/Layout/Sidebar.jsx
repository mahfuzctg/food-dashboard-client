import React from "react";
import { FaChartBar, FaCog, FaHome, FaUtensils } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-4">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">FoodDash</h2>
      <nav className="flex flex-col gap-4 text-gray-700">
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
          <FaUtensils /> Manage Items
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
          <FaChartBar /> Summary
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-orange-500">
          <FaCog /> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
