import React from "react";
import Container from "../components/shared/Container";

import book from "../assets/books/book.jpg";
import Accordion from "../components/bookDetails/Accordion";

const BookDetails = () => {
  return (
    <Container>
      <div className="my-5 lg:flex mx-auto  lg:w-10/12">
        <div className="relative w-fit mx-auto">
          <img src={book} alt="" />
          <p className="absolute top-3 right-3 bg-white text-red-500 font-semibold px-3 py-1 shadow-md">
            Available Copy: 5
          </p>
        </div>
        <div className="mx-5 lg:mx-0 lg:ml-20 mt-5 md:mt-0 flex-grow  lg:w-4/5">
          <h1 className="text-3xl md:text-5xl font-semibold ">Oldman and The Sea</h1>

          <p className="text-2xl font-semibold text-gray-400 mt-5 ">Victor Hugo</p>
          <p className="text-gray-400">USA</p>

          <div className="my-5">
            <Accordion></Accordion>
          </div>
          <button className="bg-red-500 px-5 py-2 text-white">Requisition</button>
        </div>
      </div>
    </Container>
  );
};

export default BookDetails;
