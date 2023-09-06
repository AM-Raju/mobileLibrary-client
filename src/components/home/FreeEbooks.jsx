import React from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Ebook from "../shared/Ebook";
import ButtonOutline from "../shared/ButtonOutline";

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
        <div className="w-52 mx-auto">
          <ButtonOutline addedClass={"w-full mt-10 py-3"}>Explore More</ButtonOutline>
        </div>
      </div>
    </Container>
  );
};

export default FreeEbooks;
