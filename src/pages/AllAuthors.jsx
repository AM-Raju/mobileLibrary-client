import React, { useEffect, useState } from "react";
import SingleAuthorCard from "../components/allAuthors/SingleAuthorCard";
import Banner from "../components/shared/Banner";
import authorBanner from "../assets/banner/All-Authors-Banner.jpg";
import Container from "../components/shared/Container";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const AllAuthors = () => {
  const [axiosSecure] = useAxiosSecure();
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosSecure.get("/authors").then((res) => {
      console.log(res.data);
      setAuthors(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Authors | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      {!loading && (
        <div className="lg:mx-5">
          <div className="bg-[#F55653] h-48 flex items-center justify-center 2xl:hidden">
            <h1 className="text-6xl font-semibold text-white text-center">Authors</h1>
          </div>
          <div className="hidden 2xl:block">
            <Banner banner={authorBanner}></Banner>
          </div>
          <Container>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-[30px] my-5 mx-auto w-fit">
              {authors.map((author, index) => (
                <SingleAuthorCard key={index} author={author}></SingleAuthorCard>
              ))}
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default AllAuthors;
