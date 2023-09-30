import React, { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Plan = ({ title, pricing, basicFeatures, color, showMyModal }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={`relative border border-${color} w-80 h-[420px]`}>
      <div className={`bg-${color} text-center py-10 text-white`}>
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className="text-xl">{pricing === "Free" ? pricing : `$${pricing}/Year`}</p>
      </div>
      <div className="p-5">
        <h3 className={`text-lg font-semibold text-${color}`}>Features</h3>
        <ul className="ml-3">
          {basicFeatures.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className={`mr-3 text-${color}`}></FaCheck>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-32 mx-auto absolute bottom-5 left-[calc(50%-48px)]">
        {user ? (
          <button
            disabled={pricing === "Free"}
            onClick={() => showMyModal(pricing)}
            className={`bg-${color} px-3 py-1 w-24 text-white`}
          >
            Checkout
          </button>
        ) : (
          <button onClick={handleSignup} className={`bg-${color} px-3 py-1 w-24 text-white`}>
            Sign UP
          </button>
        )}
      </div>
    </div>
  );
};

export default Plan;
