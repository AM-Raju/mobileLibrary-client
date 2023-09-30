import React from "react";

import AuthorTitleAndCountry from "./AuthorTitleAndCountry";

const Ebook = ({ ebook }) => {
  const { cover, title, authorId } = ebook;
  return (
    <div className="relative group">
      <button className="bg-white px-5 py-2 text-[#F55653] absolute top-60 left-8 cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        Read Now
      </button>
      <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
      <div className=" h-[480px] w-64 p-8 border box-border">
        <div className="w-48  ">
          <img src={cover} alt="" />
        </div>
        <h1 className="text-xl font-semibold text-[#16151A] mt-4">{title}</h1>
        {/* <p className="text-[#B2ADAA]"></p> */}
        <AuthorTitleAndCountry authorId={authorId}></AuthorTitleAndCountry>
      </div>
    </div>
  );
};

export default Ebook;
