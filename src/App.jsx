import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import FoodListPage from "./pages/FoodListPage";
import ManageFoodPage from "./pages/ManageFoodPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-5 space-y-6">
          <h1 className="text-2xl font-bold">Food Dashboard</h1>
          <nav className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-400 block" : "block hover:text-green-400"
              }
            >
              Summary
            </NavLink>
            <NavLink
              to="/manage"
              className={({ isActive }) =>
                isActive ? "text-green-400 block" : "block hover:text-green-400"
              }
            >
              Add/Edit Food
            </NavLink>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive ? "text-green-400 block" : "block hover:text-green-400"
              }
            >
              Food Items
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/manage" element={<ManageFoodPage />} />
            <Route path="/list" element={<FoodListPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
