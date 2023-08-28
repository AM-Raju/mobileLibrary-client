import React from "react";

const Newsletter = () => {
  return (
    <div className="relative group h-60 w-full bg-gray-200 flex items-center justify-center">
      <h1 className="text-[180px] uppercase text-[#339DB3] font-extrabold leading-tight">
        Newsletter
      </h1>
      <div className="absolute top-24 ml-20 mx-auto w-fit opacity-0 group-hover:opacity-100 ease-in duration-700">
        <input
          className=" bg-gray-50 w-[700px] outline-none pl-8 py-5 text border border-[#F55653]"
          type="email"
          placeholder="Subscribe please"
        />
        <button className=" py-5 px-10 border border-[#F55653]  bg-[#F55653]">Submit</button>
      </div>
    </div>
  );
};

export default Newsletter;
<h1 className="text-9xl font-extrabold">Newsletter</h1>;
