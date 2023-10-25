import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import RestrictionPage from "../components/shared/RestrictionPage";

const AdminRoute = ({ children }) => {
  const { role } = useContext(AuthContext);
  const location = useLocation();

  if (role !== "admin") {
    return <RestrictionPage role={"Admin"}></RestrictionPage>;
  }
  if (role !== "admin") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
