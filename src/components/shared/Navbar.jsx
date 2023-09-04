import React, { useState } from "react";
import { FaBars, FaConfluence, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";

const Navbar = () => {
  const navOptions = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/free-ebooks",
      title: "Free Ebooks",
    },
    {
      path: "/all-books",
      title: "All Books",
    },
    {
      path: "/all-authors",
      title: "Authors",
    },
    {
      path: "/pricing",
      title: "Pricing",
    },
    {
      path: "/",
      title: "Contact Us",
    },
    {
      path: "/signup",
      title: "Sign Up",
    },
    {
      path: "/login",
      title: "Login",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="py-2 border border-gray-200 border-x-0 mt-10">
      <Container>
        {/* Navbar Part */}
        <div className="bg-white md:bg-transparent pl-5 md:pl-0 md:flex items-center justify-between  ">
          {/* Logo and Toggle button part */}
          <div className="flex justify-between items-center">
            {/* Logo Part */}
            <Logo></Logo>
            {/* Toggle icon for responsive */}
            <div className="md:hidden mr-5">
              {open ? (
                <FaX
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="text-2xl"
                ></FaX>
              ) : (
                <FaBars
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="text-2xl"
                ></FaBars>
              )}
            </div>
          </div>
          {/* Navbar and button part */}
          <div
            className={`w-2/3 md:flex justify-between items-center transition-all duration-300  ${
              !open ? "absolute opacity-0 md:relative md:opacity-100 " : " opacity-100"
            }`}
          >
            {/* Nav part */}
            <nav className="">
              <ul className="md:flex gap-6">
                {navOptions.map((navOption, index) => (
                  <li key={index} className="my-3 md:my-0 text-lg hover:text-[#F55653]">
                    <Link to={navOption.path}>{navOption.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Button or Search bar part */}
            <div>
              <ButtonOutline addedClass={"px-7 py-2 "}>Login</ButtonOutline>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;