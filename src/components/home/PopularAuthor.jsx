import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import Author from "../shared/Author";
import Button from "../shared/Button";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const PopularAuthor = () => {
  const [axiosSecure] = useAxiosSecure();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axiosSecure.get("/authors").then((res) => {
      // console.log(res.data);
      setAuthors(res.data);
    });
  }, []);
  return (
    <Container>
      <div className=" relative border hover:border-[#F55653] ease-in duration-1000 mb-20 name lg:max-3xl:mx-5 ">
        <p className="py-5 bg-[#F55653] w-fit px-10 my-5 text-white text-2xl">
          Popular Authors Around the World
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-5 gap-6 xl:gap-x-10 w-fit mx-auto">
          {/* Author */}
          {authors.slice(0, 5).map((author, index) => (
            <Author key={index} author={author}></Author>
          ))}
        </div>
        <div className="w-fit max-lg:mx-auto">
          <Button
            path={"/all-authors"}
            addedClasses={"lg:absolute top-0 right-0 w-fit mx-auto py-5 px-10 my-5"}
          >
            See All
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PopularAuthor;
