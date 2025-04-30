import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import RoutesConfig from "./routes/Route";

function App() {
  return (
    <Router>
      {/* Routes are now handled within the DashboardLayout */}
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Iterate over the routes and define the routes inside the layout */}
          {RoutesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
