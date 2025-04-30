import React from "react";

const FoodListPage = () => {
  const foodItems = [
    {
      id: 1,
      name: "Chicken",
      price: 10,
      amount: "2 kg",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Beef",
      price: 12,
      amount: "1.5 kg",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Fish",
      price: 8,
      amount: "1 kg",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Eggs",
      price: 6,
      amount: "12 pieces",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Milk",
      price: 4,
      amount: "2 liters",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Rice",
      price: 3,
      amount: "5 kg",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-orange-600 text-center">
        All Food Items
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-orange-100 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-orange-500 mb-1">
                {item.name}
              </h3>
              <p className="text-gray-700 mb-1">💰 Price: ${item.price}</p>
              <p className="text-gray-700">⚖️ Amount: {item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodListPage;
