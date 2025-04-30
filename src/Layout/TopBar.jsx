import React from "react";

const TopBar = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
          U
        </div>
      </div>
    </header>
  );
};

export default TopBar;
