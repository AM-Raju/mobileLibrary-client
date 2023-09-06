import React, { Children } from "react";
import { Link } from "react-router-dom";

const ButtonOutline = ({ path, onClick, addedClass, children }) => {
  return (
    <Link to={path}>
      <button
        onClick={onClick}
        className={`border border-[#F55653] hover:bg-[#F55653] hover:border-[#F55653] text-center text-lg font-semibold text-[#F55653] hover:text-white cursor-pointer  ${addedClass}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonOutline;
