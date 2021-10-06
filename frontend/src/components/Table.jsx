import { Column, useSortBy, useTable } from "react-table";

export default function Table({ column, data }) {
  const { getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns: column,
      data: data || [],
    },
    useSortBy
  );

  return (
    <table className="min-w-full divide-y divide-cool-gray-200">
      <thead className=""></thead>
      <tbody
        {...getTableBodyProps()}
        className="bg-white divide-y divide-gray-200"
      ></tbody>
    </table>
  );
}
