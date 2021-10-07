import { Button, useModal } from "@apideck/components";

import Table from "./Table";

import { columns } from "../constants/columns";
import useOrders from "../hooks/useOrders";
import OrderField from "./OrderField";

export default function Orders() {
  const { orders, isLoading } = useOrders();
  const { addModal } = useModal();

  const hasOrders = orders?.length;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="mb-4 sm:flex sm:justify-end">
          <Button
            text="Create Orders"
            onClick={() =>
              addModal(<OrderField />, { style: { maxWidth: 480 } })
            }
          />
        </div>
        <Table columns={columns} data={orders} />
        <div className="flex flex-row-reverse py-4 border-gray-200">
          <Button text="Next" className="ml-2" />
          <Button text="Previous" />
        </div>
      </div>
    </div>
  );
}
