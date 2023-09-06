import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/dashboardNav/DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <DashboardNav></DashboardNav>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
