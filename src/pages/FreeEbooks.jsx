import React from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/FreeEbooksBanner.jpg";
import Container from "../components/shared/Container";
import Ebook from "../components/shared/Ebook";

const FreeEbooks = () => {
  return (
    <div>
      <Banner banner={bannerImg}>Free Ebooks</Banner>
      <Container>
        <div className="my-5 flex flex-wrap gap-y-3">
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
          <Ebook></Ebook>
        </div>
      </Container>
    </div>
  );
};

export default FreeEbooks;
