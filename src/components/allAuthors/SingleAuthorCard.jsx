import React from "react";
import author from "../../assets/author/author.jpg";

const SingleAuthorCard = () => {
  return (
    <div className="w-36 h-fit p-2 border hover:border-red-500 group ease-in duration-500">
      <img
        className="w-28 p-1 h-28 bg-white group-hover:bg-red-500 border  rounded-full mx-auto ease-in duration-500"
        src={author}
        alt=""
      />
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">Ahmed Sorif</h3>
        <p className="text-gray-400 text-sm">USA</p>
      </div>
    </div>
  );
};

export default SingleAuthorCard;
