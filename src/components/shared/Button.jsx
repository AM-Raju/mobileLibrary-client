import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, children, addedClasses, openModal }) => {
  return (
    <Link to={path}>
      <button
        onClick={openModal}
        className={` bg-[#F55653]  text-center text-lg font-semibold  text-white cursor-pointer  ${addedClasses}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
