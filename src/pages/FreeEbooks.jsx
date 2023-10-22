import React, { useEffect, useState } from "react";
import Banner from "../components/shared/Banner";
import bannerImg from "../assets/banner/FreeEbooksBanner.jpg";
import Container from "../components/shared/Container";
import Ebook from "../components/shared/Ebook";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const FreeEbooks = () => {
  const [axiosSecure] = useAxiosSecure();

  const [ebooks, setEbooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/ebooks").then((res) => {
      console.log("Ebook", res.data);
      setEbooks(res.data);
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Free Ebooks | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
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
