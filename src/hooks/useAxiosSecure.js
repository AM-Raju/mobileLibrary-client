import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://mobile-library-server.vercel.app",
});

const useAxiosSecure = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    // Request interception
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      console.log("Token from axiosSecure", token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Response interception
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
