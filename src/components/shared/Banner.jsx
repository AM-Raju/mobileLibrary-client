import React from "react";
import Container from "./Container";

const Banner = ({ banner, children }) => {
  return (
    <Container>
      <div
        className="h-96 flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-7xl text-white font-semibold tracking-widest">{children}</h1>
      </div>
    </Container>
  );
};

export default Banner;
