import React, { useContext, useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/allBooksBanner.jpg";
import Container from "../components/shared/Container";
import Book from "../components/shared/Book";
import useAxiosSecure from "../hooks/useAxiosSecure";
import RequisitionModal from "../components/shared/RequisitionModal";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const AllBooks = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [books, setBooks] = useState([]);
  const [bookId, setBookId] = useState("");

  const openModal = (_id) => {
    setBookId(_id);
    setIsOpen(true);
  };

  console.log("book", bookId);

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <Helmet>
        <title>Books | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <Banner banner={bannerImg}>All Books</Banner>
      <Container>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 w-fit mx-auto">
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
