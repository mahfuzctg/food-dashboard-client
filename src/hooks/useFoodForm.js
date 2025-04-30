import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useFoodForm = ({
  mode = "create",
  initialData = null,
  foodId = null,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    amount: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...formData };
    if (!payload.image?.trim()) {
      delete payload.image;
    }

    const url =
      mode === "update"
        ? `http://localhost:5000/api/foods/${foodId}`
        : "http://localhost:5000/api/foods";

    const method = mode === "update" ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to ${mode === "update" ? "update" : "add"} item.`
        );
      }

      const result = await response.json();
      toast.success(
        `Food item ${mode === "update" ? "updated" : "added"} successfully!`
      );

      if (onSuccess) onSuccess(result.data);
      setFormData({ name: "", price: "", amount: "", image: "" });
    } catch (err) {
      toast.error(err.message || "Something went wrong.");
    }
  };

  const handleDelete = async () => {
    if (!foodId) return;

    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (!confirmed) return;

      const response = await fetch(
        `http://localhost:5000/api/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete food item.");
      }

      toast.success("Food item deleted successfully!");
      if (onSuccess) onSuccess(null, "delete");
    } catch (err) {
      toast.error(err.message || "Failed to delete.");
    }
  };

  return { formData, handleChange, handleSubmit, handleDelete };
};
