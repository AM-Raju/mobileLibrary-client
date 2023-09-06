import React from "react";

const Button = ({ children, addedClasses }) => {
  return (
    <button
      className={` bg-[#F55653]  text-center text-lg font-semibold  text-white cursor-pointer  ${addedClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
