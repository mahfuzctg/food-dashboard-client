import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar
        className={`lg:w-1/4 w-full fixed lg:relative bg-gray-800 text-white h-full z-10 ${
          sidebarOpen ? "block" : "hidden"
        } lg:block`}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-1/4 flex flex-col">
        <TopBar toggleSidebar={toggleSidebar} />

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
