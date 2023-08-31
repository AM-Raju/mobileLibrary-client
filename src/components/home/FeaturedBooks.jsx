import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Book from "../shared/Book";
import Button from "../shared/Button";
import ButtonOutline from "../shared/ButtonOutline";

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
          <ButtonOutline addedClass={"w-52 mt-10 py-3"}>Explore More</ButtonOutline>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBooks;
