import React from "react";
import Header from "../components/Header";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";

export default function OrderPage() {
  return (
    <Layout>
      <Navbar />
      <Header title="Orders" />
      <div className="pl-2 mx-auto my-12 overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <Orders />
      </div>
    </Layout>
  );
}
