const FoodListPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">All Food Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">Food Item {item}</h3>
            <p className="text-gray-600">Price: $10</p>
            <p className="text-gray-600">Amount: 2 kg</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodListPage;
