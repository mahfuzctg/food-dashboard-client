import DashboardLayout from "../Layout/DashboardLayout";
import FoodListPage from "../pages/FoodListPage";
import ManageFoodPage from "../pages/ManageFoodPage";
import SummaryPage from "../pages/SummaryPage";

const RoutesConfig = [
  { path: "/dashboard", component: DashboardLayout },
  { path: "/view", component: FoodListPage },
  { path: "/summary", component: SummaryPage },
  { path: "/manage", component: ManageFoodPage },
];

export default RoutesConfig;
