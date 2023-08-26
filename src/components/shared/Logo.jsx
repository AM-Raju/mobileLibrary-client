import React from "react";
import logo from "../../assets/logo/logo.png";

const Logo = () => {
  return (
    <div className=" flex items-center">
      <img src={logo} alt="" />
      <div>
        <h3 className="relative top-2 text-[#16151A]">Mobile</h3>
        <h1 className="mb-3">
          <span className="text-[#F55653] text-3xl font-bold ">Library</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;
