import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
              U
            </div>
          </div>
        </header>

        {/* Page Content Placeholder */}
        <main className="flex-1 p-6">{/* Content goes here */}</main>
      </div>
    </div>
  );
};

export default Dashboard;
