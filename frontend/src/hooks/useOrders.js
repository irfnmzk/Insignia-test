import { useMemo, useState } from "react";
import useSwr from "swr";

export default function useOrders() {
  const fethcer = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const [search, setSearch] = useState("");

  const ordersUrl =
    "http://localhost:5000/order" + (search !== "" ? `?search=${search}` : "");
  console.log(ordersUrl);
  const { data, error, mutate } = useSwr(ordersUrl, fethcer);

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
    setSearch,
    createOrder,
    mutate,
  };
}
