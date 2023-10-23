import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/dashboardNav/DashboardNav";
import { FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-50">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <DashboardNav></DashboardNav>
        </div>
        <div className="drawer-content z-10">
          <label
            htmlFor="my-drawer-2"
            className="lg:hidden cursor-pointer absolute top-4 left-4 text-white shadow-sm"
          >
            <FaBars className="text-3xl"></FaBars>
          </label>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
