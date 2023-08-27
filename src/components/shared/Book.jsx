import React from "react";
import book from "../../assets/books/book.jpg";

const Book = () => {
  return (
    <div className="relative">
      {/*  <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div> */}
      <div className="flex w-fit p-6 border box-border hover:border-gray-700 transition-all duration-300">
        <img className="w-48" src={book} alt="" />
        <div className="pl-4">
          <h1 className="w-36 text-xl font-semibold text-[#16151A] mt-4">Valobese Jabo Sudhu</h1>
          <p className="text-[#B2ADAA] my-3">Kim Jhon Un</p>
          <button className="bg-[#F55653] px-5 py-2 text-white font-semibold tracking-wider cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
