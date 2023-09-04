import React from "react";

const Button = ({ children, addedClasses }) => {
  return (
    <div
      className={` bg-[#F55653]  text-center text-lg font-semibold  text-white cursor-pointer  ${addedClasses}`}
    >
      {children}
    </div>
  );
};

export default Button;
