import React from "react";
import Slider from "../components/home/Slider";
import FreeEbooks from "../components/home/FreeEbooks";
import FeaturedBooks from "../components/home/FeaturedBooks";
import Membership from "../components/home/Membership";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FreeEbooks></FreeEbooks>
      <Membership></Membership>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
};

export default Home;
