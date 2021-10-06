import React from "react";
import Header from "../components/Header";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function CustomerPage() {
  return (
    <Layout>
      <Navbar />
      <Header title="Customers" />
      <div className="pl-2 mx-auto my-12 overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          This page is not yet implemented
        </h3>
      </div>
    </Layout>
  );
}
