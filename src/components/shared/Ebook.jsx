import React from "react";
import book from "../../assets/books/book.jpg";
import Button from "../shared/Button";

const Ebook = () => {
  return (
    <div className="relative group">
      <button className="bg-white px-5 py-2 text-[#F55653] absolute top-60 left-8 cursor-pointer z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        Read Now
      </button>
      <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
      <div className=" w-64 p-8 border box-border">
        <img className="w-48" src={book} alt="" />
        <h1 className="text-xl font-semibold text-[#16151A] mt-4">Valobese Jabo Sudhu</h1>
        <p className="text-[#B2ADAA]">Kim Jhon Un</p>
      </div>
    </div>
  );
};

export default Ebook;
