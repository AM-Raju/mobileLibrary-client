import React, { Children } from "react";

const ButtonOutline = ({ addedClass, children }) => {
  return (
    <div
      className={`border border-[#F55653] hover:bg-[#F55653] hover:border-[#F55653] text-center   mx-auto text-lg font-semibold text-[#F55653] hover:text-white cursor-pointer  ${addedClass}`}
    >
      {children}
    </div>
  );
};

export default ButtonOutline;
