import { useMemo } from "react";
import useSwr from "swr";

export default function useOrders() {
  const fethcer = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const ordersUrl = "http://localhost:5000/order";
  const { data, error } = useSwr(ordersUrl, fethcer);

  return {
    orders: data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
