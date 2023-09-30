import React, { useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/FreeEbooksBanner.jpg";
import Container from "../components/shared/Container";
import Ebook from "../components/shared/Ebook";
import useAxiosSecure from "../hooks/useAxiosSecure";

const FreeEbooks = () => {
  const [axiosSecure] = useAxiosSecure();

  const [ebooks, setEbooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/ebooks").then((res) => {
      console.log(res.data);
      setEbooks(res.data);
    });
  }, []);
  return (
    <div>
      <Banner banner={bannerImg}>Free Ebooks</Banner>
      <Container>
        <div className="my-5 flex flex-wrap gap-y-3">
          {ebooks.map((ebook, index) => (
            <Ebook key={index} ebook={ebook}></Ebook>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FreeEbooks;
