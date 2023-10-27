import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo/logo.png";

const DashboardHome = () => {
  const { role, updatedUser } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Dashboard Home | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <div className="bg-orange-200 h-screen w-full flex items-center justify-center ">
        <div className="text-center relative bottom-32 space-y-2">
          {/* Logo block */}
          <div className="flex justify-center items-center">
            <img className="w-24" src={logo} alt="" />
            <div className="text-left">
              <p className="text-xl font-semibold">Mobile</p>
              <h3 className="text-3xl font-bold text-[#F55653]">Library</h3>
            </div>
          </div>
          <h4 className="text-xl  mx-3 sm:mx-0">
            {updatedUser?.name ? `Hi ` : ""}
            <span className="font-semibold">
              {updatedUser?.name ? `${updatedUser?.name},` : ""}
            </span>{" "}
            Welcome to <span className="font-bold">Mobile Library</span>
          </h4>
          <h2 className="font-semibold text-6xl sm:text-8xl text-orange-600">Dashboard</h2>
          <h4 className="text-2xl leading-relaxed">
            as <span className="font-semibold text-green-600">{role}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
