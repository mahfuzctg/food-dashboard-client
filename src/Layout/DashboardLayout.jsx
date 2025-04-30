import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-500">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="">
        {/* Topbar */}
        <TopBar />

        {/* Page Content Placeholder */}
        <main className="flex-1 p-6">{/* Content goes here */}</main>
      </div>
    </div>
  );
};

export default Dashboard;
