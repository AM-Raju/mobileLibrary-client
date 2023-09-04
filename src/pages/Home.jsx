import React from "react";
import Slider from "../components/home/Slider";
import FreeEbooks from "../components/home/FreeEbooks";
import FeaturedBooks from "../components/home/FeaturedBooks";
import Membership from "../components/home/Membership";
import PopularAuthor from "../components/home/PopularAuthor";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FreeEbooks></FreeEbooks>
      <Membership></Membership>
      <FeaturedBooks></FeaturedBooks>
      <PopularAuthor></PopularAuthor>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;