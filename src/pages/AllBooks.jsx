import React from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/allBooksBanner.jpg";
import Container from "../components/shared/Container";
import Book from "../components/shared/Book";

const AllBooks = () => {
  return (
    <div>
      <Banner banner={bannerImg}>All Books</Banner>
      <Container>
        <div className="my-5 grid grid-cols-4 gap-7">
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
          <Book></Book>
        </div>
      </Container>
    </div>
  );
};

export default AllBooks;
