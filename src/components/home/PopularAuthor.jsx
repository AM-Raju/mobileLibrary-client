import React from "react";
import Container from "../shared/Container";
import Author from "../shared/Author";
import Button from "../shared/Button";

const PopularAuthor = () => {
  return (
    <Container>
      <div className=" relative border hover:border-[#F55653] ease-in duration-1000 mb-20 name">
        <p className="py-5 bg-[#F55653] w-fit px-10 my-5 text-white text-2xl">
          Popular Authors Around the World
        </p>
        <div className="grid grid-cols-5 gap-6">
          {/* Author */}
          <Author></Author>
          <Author></Author>
          <Author></Author>
          <Author></Author>
          <Author></Author>
        </div>

        <Button addedClasses={"absolute top-0 right-0 w-fit py-5 px-10 my-5"}>See All</Button>
      </div>
    </Container>
  );
};

export default PopularAuthor;
