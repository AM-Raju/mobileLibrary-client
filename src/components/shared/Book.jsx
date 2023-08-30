import React from "react";
import book from "../../assets/books/book.jpg";

const Book = () => {
  return (
    <div className="">
      {/*  <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div> */}
      <div className=" w-fit p-8 border box-border hover:border-gray-700 transition-all duration-300">
        <div className="flex">
          <img className="w-36" src={book} alt="" />
          <div className="pl-6">
            <button className="bg-[#F55653] w-32 block px-5 py-2 text-white font-semibold tracking-wider cursor-pointer">
              Details
            </button>
            <button className="bg-[#F55653] w-32 my-3 px-5 py-2 text-white font-semibold tracking-wider cursor-pointer">
              Requisition
            </button>
            <p className="w-32">Available: 5 Pcs</p>
          </div>
        </div>

        <h1 className=" w-72  text-xl mt-3 font-semibold text-[#16151A]">Valobese Jabo Sudhu</h1>
        <p className=" text-[#B2ADAA]  w-32">Kim Jhon Un</p>
      </div>
    </div>
  );
};

export default Book;
