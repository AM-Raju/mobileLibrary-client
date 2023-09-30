import React, { useEffect, useState } from "react";
import SingleAuthorCard from "../components/allAuthors/SingleAuthorCard";
import Banner from "../components/shared/Banner";
import authorBanner from "../assets/banner/All-Authors-Banner.jpg";
import Container from "../components/shared/Container";
import useAxiosSecure from "../hooks/useAxiosSecure";
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
      {!loading && (
        <div>
          <Banner banner={authorBanner}></Banner>
          <Container>
            <div className="grid grid-cols-9 gap-[30px] my-5">
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
