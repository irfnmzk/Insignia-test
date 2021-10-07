import { useMemo } from "react";

export default function useOrders() {
  const data = useMemo(
    () => [
      {
        id: 1323,
        date: "3 hours ago",
        customerEmail: "irfanm@gmail.com",
        paid: true,
        filled: true,
        total: 12220,
      },
      {
        id: 1223,
        date: "3 hours ago",
        customerEmail: "irfanm@gmail.com",
        paid: true,
        filled: true,
        total: 12220,
      },
      {
        id: 1233,
        date: "3 hours ago",
        customerEmail: "irfanm@gmail.com",
        paid: true,
        filled: true,
        total: 12220,
      },
      {
        id: 1232,
        date: "3 hours ago",
        customerEmail: "irfanm@gmail.com",
        paid: true,
        filled: true,
        total: 12220,
      },
      {
        id: 12323,
        date: "3 hours ago",
        customerEmail: "irfanm@gmail.com",
        paid: true,
        filled: true,
        total: 12220,
      },
    ],
    []
  );

  return {
    orders: data,
  };
}
