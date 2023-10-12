import React from "react";

const Author = ({ author }) => {
  const { image, name, country } = author;
  return (
    <div className="border hover:border-[#F55653] ease-in duration-1000 h-80 w-72 p-10 box-border relative overflow-hidden group">
      <div className="absolute bg-[#F55653] h-32 w-72 left-0 -bottom-32 group-hover:bottom-0 ease-in duration-700"></div>
      <img className="absolute w-52" src={image} alt="" />
      <div className="relative top-44 opacity-0 group-hover:opacity-100 ease-in duration-1000 text-block text-center flex justify-center items-center">
        <div>
          <h3 className="text-lg font-semibold bg-white bg-opacity-70 px-2">{name}</h3>
          <p className="text-md bg-white bg-opacity-70 mt-1 px-2">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
