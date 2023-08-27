import React from "react";

const SectionTitle = ({ headingOne, headingTwo }) => {
  return (
    <h1 className="text-center my-20 text-5xl font-semibold">
      {headingOne} <span className="border-b-4 border-[#F55653]">{headingTwo}</span>
    </h1>
  );
};

export default SectionTitle;
