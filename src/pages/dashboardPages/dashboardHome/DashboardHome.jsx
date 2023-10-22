import React from "react";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const DashboardHome = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard Home | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <p>This is Dashboard home</p>
    </div>
  );
};

export default DashboardHome;
