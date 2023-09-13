import React, { useContext, useState } from "react";

import googleLogo from "../../assets/icons/google.png";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SocialLogin = () => {
  // hooks
  const [axiosSecure] = useAxiosSecure();

  // AuthContext
  const { googleLogin, setLoading } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google User", result.user);
        setSuccess("Google login, Successful!");
        // Sending request to server to save new user
        axiosSecure
          .put("/users", { email: result.user.email })
          .then((res) => console.log("social", res));
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
      <p className="text-green-500 text-sm">{success}</p>
      <p className="text-red-400 text-sm">{error}</p>
    </div>
  );
};

export default SocialLogin;
