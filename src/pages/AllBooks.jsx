import React, { useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/allBooksBanner.jpg";
import Container from "../components/shared/Container";
import Book from "../components/shared/Book";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RequisitionModal from "../components/shared/RequisitionModal";

const AllBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(true);
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState("");
  const openModal = (_id) => {
    setBookId(_id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axiosSecure.get("/featured-books").then((res) => {
      console.log("dhaka", res.data);
      setBooks(res.data);
    });
  }, []);

  return (
    <div>
      <Banner banner={bannerImg}>All Books</Banner>
      <Container>
        <div className="my-5 grid grid-cols-4 gap-7">
          {books.map((book, index) => (
            <Book key={index} book={book} openModal={openModal}></Book>
          ))}
        </div>
      </Container>
      <RequisitionModal bookId={bookId} isOpen={isOpen} closeModal={closeModal}></RequisitionModal>
    </div>
  );
};

export default AllBooks;
