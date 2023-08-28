import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Ebook from "../shared/Ebook";
import Button from "../shared/Button";

const FreeEbooks = () => {
  return (
    <Container>
      <div className="mb-20 ">
        <SectionTitle headingOne="Free" headingTwo="Ebooks"></SectionTitle>
        <div className="flex justify-between">
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
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
  );
};

export default FreeEbooks;
