import React from "react";
import { MdClose } from "react-icons/md"; // Import the close icon
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

const CreateForm = ({ onClose }) => {
  const { loading, error } = useFoodItems();
  const { formData, handleChange, handleSubmit } = useFoodForm({});

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full relative">
        {" "}
        {/* Add relative class for positioning */}
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>
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
      </div>
    </div>
  );
};

export default CreateForm;
