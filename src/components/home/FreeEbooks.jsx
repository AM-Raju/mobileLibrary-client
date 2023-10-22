import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import Ebook from "../shared/Ebook";
import ButtonOutline from "../shared/ButtonOutline";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const FreeEbooks = () => {
  const [axiosSecure] = useAxiosSecure();

  const [ebooks, setEbooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/ebooks").then((res) => {
      // console.log(res.data);
      setEbooks(res.data);
    });
  }, []);
  return (
    <Container>
      <div className="mb-20 ">
        <SectionTitle headingOne="Free" headingTwo="Ebooks"></SectionTitle>
        <div className="flex flex-wrap justify-between xl:justify-evenly">
          {ebooks.slice(0, 6).map((ebook, index) => (
            <Ebook key={index} ebook={ebook}></Ebook>
          ))}
        </div>

        <div className="w-52 mx-auto">
          <ButtonOutline path={"/free-ebooks"} addedClass={"w-full mt-10 py-3"}>
            Explore More
          </ButtonOutline>
        </div>
      </div>
    </Container>
  );
};

export default FreeEbooks;
