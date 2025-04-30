const ManageFoodPage = () => {
  return (
    <div className="max-w-xl ">
      <h2 className="text-2xl font-semibold mb-6">Add / Edit Food Item</h2>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="e.g. Chicken"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            placeholder="e.g. 10.00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (kg/piece)
          </label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="e.g. 2 kg"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Item
        </button>
      </form>
    </div>
  );
};

export default ManageFoodPage;
