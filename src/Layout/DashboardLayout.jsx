import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-500">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1">
        {/* Topbar */}
        <TopBar />

        {/* Route Content will be rendered here */}
        <main className="flex-1 p-6">
          {/* This Outlet will render the matched route's component */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
