import React from "react";
import book from "../../assets/books/book.jpg";
import { Link } from "react-router-dom";
import Button from "./Button";
import AuthorTitleAndCountry from "./AuthorTitleAndCountry";

const Book = ({ book }) => {
  const { title, cover, qty, authorId } = book;
  return (
    <div className="">
      {/*  <div className="bg-[#F55653] w-full h-full absolute opacity-0 group-hover:opacity-50 transition-all duration-500"></div> */}
      <div className=" w-fit p-8 border box-border hover:border-gray-700 transition-all duration-300 h-96">
        <div className="flex">
          <img className="w-36" src={cover} alt="" />
          <div className="pl-6">
            <Link to="/book-details">
              <Button addedClasses={"w-32 block px-5 py-2"}>Details</Button>
            </Link>

            <Button addedClasses={"w-32 my-3 px-5 py-2"}>Requisition</Button>
            <p className="w-32">Available: {qty} Pcs</p>
          </div>
        </div>

        <h1 className=" w-72  text-xl mt-3 font-semibold text-[#16151A]">{title}</h1>
        <AuthorTitleAndCountry authorId={authorId}></AuthorTitleAndCountry>
      </div>
    </div>
  );
};

export default Book;
