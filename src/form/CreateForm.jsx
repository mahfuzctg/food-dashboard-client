import React from "react";

import ReusableForm from "../Reuseable/Form/ReusableForm";
import { useFoodForm } from "../hooks/useFoodForm";
import { useFoodItems } from "../hooks/useFoodItems";

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

const CreateForm = () => {
  const { loading, error } = useFoodItems();
  const { formData, handleChange, handleSubmit } = useFoodForm({});

  return (
    <ReusableForm
      title="Add Food Item"
      fields={foodFields}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      submitLabel="Save Item"
      loading={loading}
      error={error}
    />
  );
};

export default CreateForm;
