import React from "react";
import { FaChartBar, FaCog, FaHome, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-4">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">FoodDash</h2>
      <nav className="flex flex-col gap-4 text-gray-700">
        <Link to="/" className="flex items-center gap-3 hover:text-orange-500">
          <FaHome /> Dashboard
        </Link>
        <Link
          to="/manage-food"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          <FaUtensils /> Manage Items
        </Link>
        <Link
          to="/summary"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          <FaChartBar /> Summary
        </Link>
        <Link
          to="/manage"
          className="flex items-center gap-3 hover:text-orange-500"
        >
          <FaCog /> Manage
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
