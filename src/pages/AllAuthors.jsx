import React from "react";
import SingleAuthorCard from "../components/allAuthors/SingleAuthorCard";
import Banner from "../components/shared/Banner";
import authorBanner from "../assets/banner/All-Authors-Banner.jpg";
import Container from "../components/shared/Container";
const AllAuthors = () => {
  return (
    <div>
      <Banner banner={authorBanner}></Banner>
      <Container>
        <div className="grid grid-cols-9 gap-[30px] my-5">
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
          <SingleAuthorCard></SingleAuthorCard>
        </div>
      </Container>
    </div>
  );
};

export default AllAuthors;
