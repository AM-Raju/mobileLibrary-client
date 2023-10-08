import React, { useState } from "react";
import SpecTable from "./SpecTable";
import SingleAuthorCard from "../allAuthors/SingleAuthorCard";

const Accordion = ({ book, author }) => {
  const { desc } = book;
  const { name, country } = author;
  const [activeTab, setActiveTab] = useState("Short Description");
  return (
    <div className="border border-red-500">
      {/* Accordion tab */}

      <div className="flex">
        <button
          onClick={() => setActiveTab("Short Description")}
          className={`${
            activeTab === "Short Description" ? "bg-[#F55653] text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Short Description
        </button>
        <button
          onClick={() => setActiveTab("Specifications")}
          className={`${
            activeTab === "Specifications" ? "bg-[#F55653] text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("Author")}
          className={`${
            activeTab === "Author" ? "bg-[#F55653] text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Author
        </button>
      </div>
      {/* Accordion body */}
      <div>
        {activeTab === "Short Description" && (
          <div className="p-5">
            {desc.split("|").map((textPart, index) => (
              <p key={index}>{textPart}</p>
            ))}
          </div>
        )}
        {activeTab === "Specifications" && (
          <div className="p-5">
            <SpecTable book={book} author={author}></SpecTable>
          </div>
        )}
        {activeTab === "Author" && (
          <div className="p-5">
            <SingleAuthorCard author={author}></SingleAuthorCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
