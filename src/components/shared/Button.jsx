import React from "react";

const Button = ({ children, addedClasses }) => {
  return (
    <div
      className={` bg-[#F55653]  text-center text-lg font-semibold  text-white  ${addedClasses}`}
    >
      {children}
    </div>
  );
};

export default Button;
