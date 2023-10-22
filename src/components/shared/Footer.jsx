import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#339DB3] h-fit">
      <Container>
        <div className="flex flex-col items-center pt-10">
          <Logo></Logo>
          <p className="px-3 md:w-[700px] text-center py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis enim corrupti
            alias itaque. Ex necessitatibus sapiente ad ratione id error, iusto qui, quaerat eos
            doloribus dolorum quae voluptate ipsa quis amet. Doloribus assumenda nam eligendi.
          </p>
          <p className="pb-5">&copy;{year} Mobile Library | All Right Reserved</p>
        </div>
      </Container>
      <hr className="w-full" />
      <div className=" lg:flex justify-between items-center lg:h-12 mx-3 md:mx-10">
        {/* Social Icon */}
        <div className="mt-3 lg:mt-0 w-fit mx-auto lg:mx-0">
          <SocialIcon></SocialIcon>
        </div>
        {/* Additional Pages */}
        <div className="flex flex-wrap justify-center gap-5 text-white py-3 lg:mt-0">
          <Link to="#">Home </Link>
          <Link to="#">Privacy Policy </Link>
          <Link to="#">Term and Conditions </Link>
          <Link to="#">Membership Plan </Link>
          <Link to="#">Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
