import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { ImSpinner2 } from "react-icons/im";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="relative bottom-20">
          <div className="flex justify-center">
            <ImSpinner2 className="text-7xl text-orange-600 animate-spin "></ImSpinner2>
          </div>
          <h4 className="text-5xl mt-5 font-semibold">Page Loading</h4>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
