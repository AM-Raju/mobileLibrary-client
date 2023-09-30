import React from "react";
import author from "../../assets/author/author.jpg";

const SingleAuthorCard = ({ author }) => {
  const { image, name, country } = author;
  return (
    <div className="w-36 h-fit p-2 border hover:border-red-500 group ease-in duration-500">
      <img
        className="w-28 p-1 h-28 bg-white group-hover:bg-red-500 border  rounded-full mx-auto ease-in duration-500"
        src={image}
        alt=""
      />
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-400 text-sm">{country}</p>
      </div>
    </div>
  );
};

export default SingleAuthorCard;
