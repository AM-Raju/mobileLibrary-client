import React from "react";
import { PiWarningBold } from "react-icons/pi";

const RestrictionPage = ({ role }) => {
  return (
    <div className="h-screen w-full bg-gray-300 flex justify-center items-center">
      <div className=" text-center  h-fit w-fit space-y-5 relative bottom-20">
        <div className="flex justify-center">
          <PiWarningBold className="text-9xl text-orange-600"></PiWarningBold>
        </div>
        <h2 className="text-7xl font-semibold">Access Denied</h2>
        <h3 className="text-4xl font-semibold">
          Only for <span className="text-green-600">{role}</span>
        </h3>
      </div>
    </div>
  );
};

export default RestrictionPage;
