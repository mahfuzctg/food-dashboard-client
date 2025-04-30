import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/foods";

export const useFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch food items.");
        }
        const data = await response.json();
        setFoodItems(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  return { foodItems, loading, error };
};
