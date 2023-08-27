import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Book from "../shared/Book";

const FeaturedBooks = () => {
  return (
    <div className=" pb-20">
      <Container>
        <div className="">
          <SectionTitle headingOne="Featured" headingTwo="Books"></SectionTitle>
          <div className="flex justify-between">
            <Book></Book>
            <Book></Book>
            <Book></Book>
            <Book></Book>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBooks;
