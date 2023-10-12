import React, { useContext, useEffect, useState } from "react";
import Container from "../components/shared/Container";
import Accordion from "../components/bookDetails/Accordion";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RequisitionModal from "../components/shared/RequisitionModal";
import { AuthContext } from "../providers/AuthProvider";

const BookDetails = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, role, requisitionCount } = useContext(AuthContext);
  const bookData = useLoaderData();
  const [book, setBook] = useState(bookData);
  const [isOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (role === "standard reader" && requisitionCount === 1) {
      setBtnDisabled(true);
    } else if (role === "premium reader" && requisitionCount === 2) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(true);
    }
  }, [role, user]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const reloadData = () => {
    fetch(`http://localhost:5000/book-details/${book._id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  };

  useEffect(() => {
    axiosSecure.get(`/authors/${book?.authorId}`).then((res) => setAuthor(res.data));
  }, []);

  // role === "premium reader" && requisitionCount === 2

  return (
    <Container>
      <div className="my-5 lg:flex mx-auto  lg:w-10/12">
        <div className="relative w-fit mx-auto">
          <img className="w-96" src={book?.cover} alt="" />
          <p className="absolute top-3 right-3 bg-white text-red-500 font-semibold px-3 py-1 shadow-md">
            Available Copy: {book?.qty}
          </p>
        </div>
        <div className="mx-5 lg:mx-0 lg:ml-20 mt-5 md:mt-0 flex-grow  lg:w-4/5">
          <h1 className="text-3xl md:text-5xl font-semibold ">{book?.title}</h1>

          <p className="text-2xl font-semibold text-gray-400 mt-5 ">{author.name}</p>
          <p className="text-gray-400">{author.country}</p>

          <div className="my-5">{book && <Accordion book={book} author={author}></Accordion>}</div>
          <button
            disabled={btnDisabled}
            onClick={openModal}
            className={`bg-[#F55653] ${btnDisabled ? "bg-gray-500" : ""}  px-5 py-2 text-white`}
          >
            Requisition
          </button>
        </div>
      </div>
      <RequisitionModal
        bookId={book?._id}
        isOpen={isOpen}
        closeModal={closeModal}
        reloadData={reloadData}
      ></RequisitionModal>
    </Container>
  );
};

export default BookDetails;
