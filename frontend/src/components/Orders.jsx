import { Button, TextInput, useModal } from "@apideck/components";

import Table from "./Table";

import { columns } from "../constants/columns";
import useOrders from "../hooks/useOrders";
import OrderField from "./OrderField";
import LoadingTable from "./LoadingTable";

export default function Orders() {
  const { orders, isLoading, setSearch } = useOrders();
  const { addModal } = useModal();

  const hasOrders = orders?.length;

  const mappedOrders = orders?.map((item) => {
    return {
      ...item,
      date: item.createdAt,
    };
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="mb-4 flex justify-between">
          <div className="w-64">
            <TextInput
              name="input-name"
              placeholder="Search something"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <Button
            text="Create Orders"
            onClick={() =>
              addModal(<OrderField />, { style: { maxWidth: 480 } })
            }
          />
        </div>
        {isLoading && <LoadingTable />}
        {!isLoading && hasOrders && (
          <Table columns={columns} data={mappedOrders} />
        )}
      </div>
    </div>
  );
}
