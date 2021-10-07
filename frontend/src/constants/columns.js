import moment from "moment";

export const columns = [
  {
    Header: "Order Id",
    accessor: "id",
    Cell: (props) => `#${props.value}`,
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: (props) => moment(props.value).fromNow(),
  },
  {
    Header: "Customer",
    accessor: "customerEmail",
  },
  {
    Header: "Paid",
    accessor: "paid",
    Cell: (props) => (props.value ? "Paid" : "Unpaid"),
  },
  {
    Header: "Fulfillment",
    accessor: "filled",
    Cell: (props) => (props.value ? "Fulfilled" : "Unfulfilled"),
  },
  {
    Header: "Total",
    accessor: "total",
    Cell: (props) => `Rp. ${props.value}`,
  },
];
