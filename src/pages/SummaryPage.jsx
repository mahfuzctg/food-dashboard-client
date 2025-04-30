const SummaryPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Summary Overview</h2>

      <div className="flex gap-4 mb-8">
        {["Daily", "Weekly", "Monthly"].map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 bg-white border rounded shadow hover:bg-green-100"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold mb-2">Metric {i}</h3>
            <p className="text-gray-600">Some summary information here.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryPage;
