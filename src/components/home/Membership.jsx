import React from "react";
import Container from "../shared/Container";

import ButtonOutline from "../shared/ButtonOutline";

const Membership = () => {
  return (
    <div className=" relative bg-gray-200 my-20 py-20 group">
      {/* Membership plan block */}
      <div className="bg-[#6BAF86] absolute w-full h-full top-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div>
          <h1 className="text-9xl font-semibold text-white">Membership Plan!</h1>
          <ButtonOutline addedClass={"w-52 mt-10 py-3 text-white border-white"}>
            Explore Now
          </ButtonOutline>
        </div>
      </div>

      <Container>
        {/* Plans */}
        <div className="flex">
          <div className="w-[512px] bg-[#339DB3] h-40 flex justify-center items-center text-5xl text-gray-200 font-semibold ">
            Free
          </div>
          <div className="w-[512px] bg-[#3E73A7] h-40 flex justify-center items-center text-5xl text-gray-200 font-semibold">
            Standard
          </div>
          <div className="w-[512px] bg-[#F55653] h-40 flex justify-center items-center text-5xl font-semibold text-gray-200">
            Premium
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Membership;
