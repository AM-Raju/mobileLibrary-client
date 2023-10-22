import React from "react";
import Slider from "../components/home/Slider";
import FreeEbooks from "../components/home/FreeEbooks";
import FeaturedBooks from "../components/home/FeaturedBooks";
import Membership from "../components/home/Membership";
import PopularAuthor from "../components/home/PopularAuthor";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>

      <Slider></Slider>
      <FreeEbooks></FreeEbooks>
      <Membership></Membership>
      <FeaturedBooks></FeaturedBooks>
      <PopularAuthor></PopularAuthor>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
