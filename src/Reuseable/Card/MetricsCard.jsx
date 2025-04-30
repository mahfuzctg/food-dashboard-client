// MetricsSection.jsx
import React from "react";

const MetricsCard = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
      {metrics.map((metric) => (
        <div
          key={metric.name}
          className="border border-orange-100 bg-orange-50 p-3 rounded text-center"
        >
          <p className="text-orange-600 font-medium">{metric.name}</p>
          <p className="text-lg font-semibold text-orange-700">
            {metric.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricsCard;
