import React from "react";

const TopBar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm w-full">
      <div className="flex items-center gap-2">
        <i className="fas fa-bars text-gray-500"></i>
        <div className="relative">
          <i className="fas fa-search absolute top-2.5 left-2 text-gray-400 text-sm"></i>
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-4 py-1.5 rounded-md bg-gray-100 text-sm text-gray-700 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src="https://flagcdn.com/bd.svg" alt="US" className="w-5 h-4" />
        <i className="fas fa-th text-gray-500"></i>
        <div className="relative">
          <i className="fas fa-calendar-alt text-gray-500"></i>
          <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </div>
        <div className="relative">
          <i className="fas fa-bell text-gray-500"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
        <i className="fas fa-moon text-gray-500"></i>
        <div className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/vmSKdP3r/unnamed.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm leading-tight">
            <p className="text-gray-900 font-semibold">Mahfuz</p>
            <p className="text-gray-500 text-xs">Founder</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
