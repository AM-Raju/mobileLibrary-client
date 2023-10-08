import React, { useEffect, useState } from "react";
import Container from "../components/shared/Container";

import book from "../assets/books/book.jpg";
import Accordion from "../components/bookDetails/Accordion";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RequisitionModal from "../components/shared/RequisitionModal";

const BookDetails = () => {
  const [axiosSecure] = useAxiosSecure();
  const book = useLoaderData();
  const [isOpen, setIsOpen] = useState(true);
  const { _id, authorId, cover, title, qty, desc } = book;
  const [author, setAuthor] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axiosSecure.get(`/authors/${authorId}`).then((res) => setAuthor(res.data));
  }, []);

  return (
    <Container>
      <div className="my-5 lg:flex mx-auto  lg:w-10/12">
        <div className="relative w-fit mx-auto">
          <img className="w-96" src={cover} alt="" />
          <p className="absolute top-3 right-3 bg-white text-red-500 font-semibold px-3 py-1 shadow-md">
            Available Copy: {qty}
          </p>
        </div>
        <div className="mx-5 lg:mx-0 lg:ml-20 mt-5 md:mt-0 flex-grow  lg:w-4/5">
          <h1 className="text-3xl md:text-5xl font-semibold ">{title}</h1>

          <p className="text-2xl font-semibold text-gray-400 mt-5 ">{author.name}</p>
          <p className="text-gray-400">{author.country}</p>

          <div className="my-5">
            <Accordion book={book} author={author}></Accordion>
          </div>
          <button onClick={openModal} className="bg-[#F55653] px-5 py-2 text-white">
            Requisition
          </button>
        </div>
      </div>
      <RequisitionModal bookId={_id} isOpen={isOpen} closeModal={closeModal}></RequisitionModal>
    </Container>
  );
};

export default BookDetails;
