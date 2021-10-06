import Table from "./Table";

export default function Orders() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="mb-4 sm:flex sm:justify-end">
          <button className="bg-blue-100 font-semibold p-2 rounded-md">
            Create
          </button>
        </div>
        <Table column={["id"]} data={[]} />
        <div className="flex flex-row-reverse py-4 border-gray-200">
          <button className="bg-blue-100 font-semibold p-2 rounded-md">
            Prev
          </button>
          <button className="bg-blue-100 font-semibold p-2 rounded-md mx-4">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
