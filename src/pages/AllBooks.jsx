import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/allBooksBanner.jpg";
import Container from "../components/shared/Container";
import Book from "../components/shared/Book";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RequisitionModal from "../components/shared/RequisitionModal";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const AllBooks = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState("");
  const [loading, setLoading] = useState(false);
  const openModal = (_id) => {
    setBookId(_id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  /* useEffect(() => {
    axiosSecure.get("/featured-books").then((res) => {
      console.log("dhaka", res.data);
      setBooks(res.data);
    });
  }, []); */

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["featured-books", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-books");
      setBooks(res.data);
      return res.data;
    },
  });

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
      <RequisitionModal
        bookId={bookId}
        isOpen={isOpen}
        refetch={refetch}
        closeModal={closeModal}
      ></RequisitionModal>
    </div>
  );
};

export default AllBooks;
