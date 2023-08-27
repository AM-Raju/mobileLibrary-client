import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Ebook from "../shared/Ebook";

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
      </div>
    </Container>
  );
};

export default FreeEbooks;
