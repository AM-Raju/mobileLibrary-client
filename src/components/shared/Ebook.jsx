import React from "react";

import AuthorTitleAndCountry from "./AuthorTitleAndCountry";

const Ebook = ({ ebook }) => {
  const { cover, title, authorId } = ebook;
  return (
    <div className="relative group mx-auto md:mx-0">
      <button className="bg-white hover:text-white hover:bg-[#339DB3] px-5 py-2 text-[#F55653] absolute top-60 left-8 cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        Read Now
      </button>
      <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
      <div className=" h-[560px] sm:max-lg:h-[480px] xl:max-2xl:h-[680px] 2xl:h-[480px]  w-80 sm:max-md:w-64 md:max-lg:w-60 xl:w-96 2xl:w-60 3xl:w-64   p-8 border box-border">
        <div className="w-64 sm:max-lg:w-48 xl:w-80 2xl:w-48 ">
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
