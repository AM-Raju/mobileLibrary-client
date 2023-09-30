import React, { useContext, useEffect, useState } from "react";

import googleLogo from "../../assets/icons/google.png";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  // hooks
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  // AuthContext
  const { googleLogin, setLoading } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google User", result.user);

        // Sending request to server to save new user

        axiosSecure
          .post("/users", {
            email: result?.user?.email,
            name: result?.user?.displayName,
            photo: result?.user?.photoURL,
            role: "user",
          })
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Google Login Successful");
              navigate("/");
            } else {
              toast.error(res.data.message);
            }
          });

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="relative mt-3">
        <img className="absolute w-12 bg-white h-[46px] p-1" src={googleLogo} alt="" />
        <button
          onClick={handleGoogleLogin}
          className="border w-full py-2 text-xl hover:bg-blue-500 hover:border-blue-500"
        >
          Google Login
        </button>
      </div>
      <p className="text-red-400 text-sm">{error}</p>
    </div>
  );
};

export default SocialLogin;
