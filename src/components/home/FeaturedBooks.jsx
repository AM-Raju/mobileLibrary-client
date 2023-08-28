import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Book from "../shared/Book";
import Button from "../shared/Button";

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
          <Button
            classes={
              "border border-[#F55653] hover:bg-[#F55653] hover:border-[#F55653] text-center px-5 py-3 w-52 mx-auto text-lg font-semibold text-[#F55653] hover:text-white mt-10"
            }
          >
            Explore More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBooks;
