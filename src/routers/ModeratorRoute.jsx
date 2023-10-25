import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import RestrictionPage from "../components/shared/RestrictionPage";

const ModeratorRoute = ({ children }) => {
  const location = useLocation();
  const { role } = useContext(AuthContext);
  if (role !== "moderator") {
    return <RestrictionPage role="Moderator"></RestrictionPage>;
  }

  if (role === "moderator") {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default ModeratorRoute;
