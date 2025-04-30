import React from "react";
import { FaSave } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const ReusableForm = ({
  title,
  fields,
  formData,
  handleChange,
  handleSubmit,
  submitLabel = "Save",
  loading,
  error,
}) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-auto flex items-center justify-center bg-orange-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-5 rounded-xl shadow-md border border-orange-100"
      >
        <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
          {title}
        </h3>

        {fields.map((field) => (
          <div className="mb-3" key={field.name}>
            <label className="block text-sm font-medium text-orange-600 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full border border-orange-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-orange-600 transition"
        >
          <FaSave /> {submitLabel}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ReusableForm;
