import { useMemo } from "react";
import useSwr from "swr";

export default function useOrders() {
  const fethcer = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const ordersUrl = "http://localhost:5000/order";
  const { data, error } = useSwr(ordersUrl, fethcer);

  const createOrder = async (values) => {
    const response = await fetch(ordersUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    });
    return response.json();
  };

  return {
    orders: data,
    isLoading: !error && !data,
    isError: !!error,
    createOrder,
  };
}
