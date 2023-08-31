import React, { useState } from "react";
import SpecTable from "./SpecTable";
import SingleAuthorCard from "../allAuthors/SingleAuthorCard";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState("Short Description");
  return (
    <div className="border border-red-500">
      {/* Accordion tab */}

      <div className="flex">
        <button
          onClick={() => setActiveTab("Short Description")}
          className={`${
            activeTab === "Short Description" ? "bg-red-500 text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Short Description
        </button>
        <button
          onClick={() => setActiveTab("Specifications")}
          className={`${
            activeTab === "Specifications" ? "bg-red-500 text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("Author")}
          className={`${
            activeTab === "Author" ? "bg-red-500 text-white" : ""
          }  px-2 md:px-5 py-2 border border-red-500 border-t-0 border-l-0`}
        >
          Author
        </button>
      </div>
      {/* Accordion body */}
      <div>
        {activeTab === "Short Description" && (
          <div className="p-5">
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, temporibus!
              Consequatur id excepturi, blanditiis illum sed enim laudantium consequuntur maiores
              nemo sit laborum modi quo, molestiae ratione sunt nam deserunt. Asperiores iste ad
              accusamus animi quaerat illo maxime consequatur fuga nemo quos voluptatum, blanditiis
              unde suscipit maiores a nihil voluptate?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vero eos officiis ipsa,
              accusantium hic modi totam optio nobis expedita neque! Consequuntur neque ducimus vero
              delectus nisi asperiores velit dolorum aliquid quidem animi! Ea quo dolorum quae
              praesentium, incidunt totam nesciunt nemo nisi numquam! Corporis quis eius maiores
              beatae optio.
            </p>
          </div>
        )}
        {activeTab === "Specifications" && (
          <div className="p-5">
            <SpecTable></SpecTable>
          </div>
        )}
        {activeTab === "Author" && (
          <div className="p-5">
            <SingleAuthorCard></SingleAuthorCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
