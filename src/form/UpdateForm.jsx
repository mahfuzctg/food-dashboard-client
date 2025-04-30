import React from "react";

import ReusableForm from "../Reuseable/Form/ReusableForm";
import { useFoodForm } from "../hooks/useFoodForm";
import { useFoodItems } from "../hooks/useFoodItems";

// Dummy: This should come from router or props
const selectedFood = {
  _id: "12345",
  name: "Chicken",
  price: "10.5",
  amount: "2 kg",
  image: "",
};

const foodFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "e.g. Chicken",
    required: true,
  },
  {
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "e.g. 10.00",
    required: true,
  },
  {
    name: "amount",
    label: "Amount (kg/piece)",
    type: "text",
    placeholder: "e.g. 2 kg",
    required: true,
  },
  {
    name: "image",
    label: "Image URL (Optional)",
    type: "text",
    placeholder: "https://example.com/image.jpg",
    required: false,
  },
];

const UpdateForm = () => {
  const { loading, error } = useFoodItems();

  const { formData, handleChange, handleSubmit, handleDelete } = useFoodForm({
    mode: "update",
    initialData: selectedFood,
    foodId: selectedFood._id,
    onSuccess: (data, type) => {
      if (type === "delete") {
        // redirect or update UI
        console.log("Deleted. Redirect or refetch.");
      } else {
        console.log("Updated. Do something.");
      }
    },
  });

  return (
    <ReusableForm
      title="Update Food Item"
      fields={foodFields}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      submitLabel="Update Item"
      loading={loading}
      error={error}
    />
  );
};

export default UpdateForm;
