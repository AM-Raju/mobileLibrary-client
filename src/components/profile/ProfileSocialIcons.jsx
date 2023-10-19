import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileSocialIcons = ({ reader }) => {
  return (
    <div className={`flex gap-5 text-2xl text-white justify-evenly mt-5`}>
      <Link
        to={reader?.facebook}
        target="_blank"
        className={`${
          reader?.facebook ? "hover:text-[#2a78ff]" : "text-gray-300 cursor-default"
        } ease-in duration-300`}
      >
        <FaFacebookF></FaFacebookF>
      </Link>
      <Link
        to={reader?.twitter}
        target="_blank"
        className={`${
          reader?.twitter ? "hover:text-[#06A2F0]" : "text-gray-300 cursor-default"
        }  ease-in duration-300`}
      >
        <FaTwitter></FaTwitter>
      </Link>
      <Link
        to={reader?.linkedin}
        target="_blank"
        className={`${
          reader?.linkedin ? "hover:text-[#03506F]" : "text-gray-300 cursor-default"
        }  ease-in duration-300`}
      >
        <FaLinkedinIn></FaLinkedinIn>
      </Link>
      <Link
        to={reader?.instagram}
        target="_blank"
        className={`${
          reader?.instagram ? "hover:text-[#E15466]" : "text-gray-300 cursor-default"
        }  ease-in duration-300`}
      >
        <FaInstagram></FaInstagram>
      </Link>
    </div>
  );
};

export default ProfileSocialIcons;
