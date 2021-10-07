import React from "react";

function NavItem({ href, text }) {
  return (
    <a
      className={`cursor-pointer px-3 py-2 mr-4 text-sm font-semibold text-gray-900 rounded-md hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:text-blue-700 focus:bg-gray-100`}
    >
      {text}
    </a>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a className="flex">
                <img className="w-20 h-8" src="/img/logo.png" alt="" />{" "}
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10">
                <NavItem text="Orders" />
                <NavItem text="Customers" />
                <NavItem text="Inventory" />
                <NavItem text="Analytics" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
