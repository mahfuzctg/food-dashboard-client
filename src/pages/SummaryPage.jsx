import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import weekOfYear from "dayjs/plugin/weekOfYear";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { foodData } from "../data/foodData";
import MetricsCard from "../Reuseable/Card/MetricsCard";

dayjs.extend(isoWeek);
dayjs.extend(weekOfYear);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const groupDataBy = (type) => {
  const grouped = {};

  foodData.forEach((item) => {
    const date = item.soldDate;
    let key = "";

    if (type === "Daily") {
      key = dayjs(date).format("YYYY-MM-DD");
    } else if (type === "Weekly") {
      key = `Week ${dayjs(date).isoWeek()}`;
    } else if (type === "Monthly") {
      key = dayjs(date).format("MMMM");
    }

    if (!grouped[key]) {
      grouped[key] = { sales: 0, orders: 0 };
    }

    grouped[key].sales += item.sold * item.price;
    grouped[key].orders += item.sold;
  });

  const labels = Object.keys(grouped).sort();
  const values = labels.map((label) => grouped[label].sales);
  const totalSales = values.reduce((a, b) => a + b, 0);
  const totalOrders = labels.reduce(
    (sum, label) => sum + grouped[label].orders,
    0
  );

  return {
    labels,
    values,
    metrics: [
      { name: "Total Sales", value: totalSales.toFixed(2) },
      { name: "Total Orders", value: totalOrders },
      {
        name: "Avg. Order Value",
        value: totalOrders ? (totalSales / totalOrders).toFixed(2) : "0",
      },
    ],
  };
};

const SummaryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Daily");
  const { labels, values, metrics } = groupDataBy(selectedFilter);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${selectedFilter} Sales`,
        data: values,
        borderColor: "#f97316",
        backgroundColor: "rgba(251, 146, 60, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `${selectedFilter} Sales`,
      },
    },
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white  text-gray-800 rounded shadow">
      <h2 className="text-xl uppercase sm:text-2xl font-semibold mb-4 text-orange-500">
        View Summary
      </h2>

      <div className="flex gap-2 sm:gap-4 mb-6">
        {["Daily", "Weekly", "Monthly"].map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 border rounded transition ${
              selectedFilter === filter
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500 border-orange-500 hover:bg-orange-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-orange-600">
          {selectedFilter} Sales Chart
        </h3>
        <Line data={chartData} options={options} />
      </div>

      {/* Call the MetricsSection component here */}
      <MetricsCard metrics={metrics} />
    </div>
  );
};

export default SummaryPage;
