import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialIcon = () => {
  return (
    <div className="flex gap-5 text-2xl text-white">
      <Link className="hover:text-[#375B9A] ease-in duration-300" to="#">
        <FaFacebookF></FaFacebookF>
      </Link>
      <Link className="hover:text-[#06A2F0] ease-in duration-300" to="#">
        <FaTwitter></FaTwitter>
      </Link>
      <Link className="hover:text-[#03506F] ease-in duration-300" to="#">
        <FaLinkedinIn></FaLinkedinIn>
      </Link>
      <Link className="hover:text-[#E15466] ease-in duration-300" to="#">
        <FaInstagram></FaInstagram>
      </Link>
    </div>
  );
};

export default SocialIcon;
