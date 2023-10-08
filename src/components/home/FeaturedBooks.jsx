import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Book from "../shared/Book";
import ButtonOutline from "../shared/ButtonOutline";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequisitionModal from "../shared/RequisitionModal";

const FeaturedBooks = () => {
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
      // console.log(res.data);
      setBooks(res.data);
    });
  }, []);

  return (
    <div className=" pb-20">
      <Container>
        <div>
          <SectionTitle headingOne="Featured" headingTwo="Books"></SectionTitle>
          <div className="flex justify-between">
            {books.slice(0, 4).map((book, index) => (
              <Book key={index} book={book} openModal={openModal}></Book>
            ))}
          </div>
          <div className="w-52 mx-auto">
            <ButtonOutline path={"/special-books"} addedClass={"w-52 mt-10 py-3"}>
              Explore More
            </ButtonOutline>
          </div>
        </div>
      </Container>
      <RequisitionModal bookId={bookId} isOpen={isOpen} closeModal={closeModal}></RequisitionModal>
    </div>
  );
};

export default FeaturedBooks;
