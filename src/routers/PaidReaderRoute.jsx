import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import RestrictionPage from "../components/shared/RestrictionPage";

const PaidReaderRoute = ({ children }) => {
  const location = useLocation();
  const { role } = useContext(AuthContext);
  if (role !== "premium reader" && role !== "standard reader") {
    return <RestrictionPage role="Paid Reader"></RestrictionPage>;
  }

  if (role === "standard reader" || role === "premium reader") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PaidReaderRoute;
