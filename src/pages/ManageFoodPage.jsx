import React from "react";
import FoodForm from "../Reuseable/Form/FoodForm";

const ManageFoodPage = () => {
  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-semibold mb-6">Add / Edit Food Item</h2>
      <FoodForm />
    </div>
  );
};

export default ManageFoodPage;
