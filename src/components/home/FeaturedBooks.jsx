import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Book from "../shared/Book";
import ButtonOutline from "../shared/ButtonOutline";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FeaturedBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState([]);

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
              <Book key={index} book={book}></Book>
            ))}
          </div>
          <div className="w-52 mx-auto">
            <ButtonOutline path={"/special-books"} addedClass={"w-52 mt-10 py-3"}>
              Explore More
            </ButtonOutline>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBooks;
