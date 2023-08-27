import React from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const Membership = () => {
  return (
    <div className=" relative bg-gray-200 my-20 py-20 group">
      {/* Membership plan block */}
      <div className="bg-[#F55653] absolute w-full h-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div>
          <h1 className="text-9xl font-semibold text-white">Membership Plan!</h1>
          <Link to="/blog">
            <Button
              classes={
                "border text-center px-5 py-3 w-52 mx-auto text-lg font-semibold text-white mt-8"
              }
            >
              Explore Now
            </Button>
          </Link>
        </div>
      </div>

      <Container>
        {/* Plans */}
        <div className="flex">
          <div className="w-[512px] bg-[#339DB3] h-40 flex justify-center items-center text-5xl font-semibold ">
            Free
          </div>
          <div className="w-[512px] bg-[#3E73A7] h-40 flex justify-center items-center text-5xl font-semibold">
            Standard
          </div>
          <div className="w-[512px] bg-[#6BAF86] h-40 flex justify-center items-center text-5xl font-semibold">
            Premium
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Membership;
