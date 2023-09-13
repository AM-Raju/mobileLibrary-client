import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/router.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
