import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import AuthorTitleAndCountry from "./AuthorTitleAndCountry";
import { AuthContext } from "../../providers/AuthProvider";

const Book = ({ book, openModal }) => {
  const { user, role, requisitionCount } = useContext(AuthContext);
  const { _id, title, cover, qty, authorId } = book;
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    if (role === "standard reader" && requisitionCount === 1) {
      setBtnDisabled(true);
    } else if (role === "premium reader" && requisitionCount === 2) {
      setBtnDisabled(true);
    } else if (role === "moderator") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [role, user?.email, requisitionCount]);

  return (
    <div className="">
      <div className="w-fit p-8 border box-border hover:border-gray-700 transition-all duration-300 h-96">
        <div className="flex">
          <img className="w-36" src={cover} alt="" />
          <div className="pl-6">
            <Button path={`/bookDetails/${_id}`} addedClasses={"w-32 block px-5 py-2"}>
              Details
            </Button>
            <button
              disabled={btnDisabled}
              onClick={() => openModal(_id)}
              className={`bg-[#F55653] hover:bg-[#ff2521] ${
                btnDisabled ? "bg-gray-500 hover:bg-gray-500" : ""
              } w-32 mt-2  px-5 py-2 text-white`}
            >
              Requisition
            </button>

            <p className="w-32">Available: {qty} Pcs</p>
          </div>
        </div>

        <h1 className=" w-72  text-xl mt-3 font-semibold text-[#16151A]">{title}</h1>
        <AuthorTitleAndCountry authorId={authorId}></AuthorTitleAndCountry>
      </div>
    </div>
  );
};

export default Book;
