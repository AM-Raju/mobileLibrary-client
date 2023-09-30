import React, { useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/allBooksBanner.jpg";
import Container from "../components/shared/Container";
import Book from "../components/shared/Book";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState([]);

  console.log("bd", books);

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
            <Book key={index} book={book}></Book>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBooks;
