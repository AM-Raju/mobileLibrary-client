import React from "react";
import author from "../../assets/author/author.jpg";

const Author = () => {
  return (
    <div className="border hover:border-[#F55653] ease-in duration-1000 h-80 w-72 p-10 box-border relative overflow-hidden group">
      <div className="absolute bg-[#F55653] h-32 w-72 left-0 -bottom-32 group-hover:bottom-0 ease-in duration-700"></div>
      <img className="absolute w-52" src={author} alt="" />
      <div className="relative top-44 opacity-0 group-hover:opacity-100 ease-in duration-1000 text-[#F55653] text-center flex justify-center items-center">
        <div>
          <h3 className="text-xl font-semibold">Jhon Muller</h3>
          <p className="text-sm">USA</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
