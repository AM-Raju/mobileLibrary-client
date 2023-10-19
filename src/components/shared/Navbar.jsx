import React, { useContext, useState } from "react";
import { FaBars, FaRegCircleUser, FaRegUser, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import ButtonOutline from "./ButtonOutline";
import { AuthContext } from "../../providers/AuthProvider";

import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logout, updatedUser } = useContext(AuthContext);

  /* States */
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Succesful signout");
      })
      .catch((error) => console.log(error.message));
  };

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
      path: "/special-books",
      title: "Special Books",
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
      path: "#",
      title: "Contact Us",
    },
  ];

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
            {/* User or Button or Search bar part */}
            <div className="flex items-center">
              {/* User name/email and role */}
              {user && (
                <div className="mr-1">
                  <p className="font-semibold">
                    {updatedUser?.name ? updatedUser?.name : user?.email}
                  </p>
                  <p className="text-sm text-red-500">{updatedUser?.role}</p>
                </div>
              )}
              <div className="dropdown dropdown-end">
                {/* user pic */}
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                  <div className="w-10 rounded-full  border-2 border-red-500 ">
                    {user ? (
                      <img src={updatedUser?.profilePic} />
                    ) : (
                      <FaRegUser className="text-2xl my-auto mx-auto mt-1 text-red-500"></FaRegUser>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-10 p-2 shadow dropdown-content bg-base-100  w-52"
                >
                  {user ? (
                    <>
                      <li>
                        <ButtonOutline path={"/dashboard/profile"} addedClass={"w-full py-1"}>
                          Profile
                        </ButtonOutline>
                      </li>
                      <li className="mt-2">
                        <ButtonOutline path={"/dashboard/"} addedClass={"w-full py-1"}>
                          Dashboard
                        </ButtonOutline>
                      </li>
                      <li className="mt-2">
                        <ButtonOutline onClick={handleLogout} addedClass={"w-full py-1"}>
                          Sign Out
                        </ButtonOutline>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <ButtonOutline path={"/login"} addedClass={" w-full py-1 "}>
                          Login
                        </ButtonOutline>
                      </li>
                      <li className="mt-2">
                        <ButtonOutline path={"/signup"} addedClass={"w-full py-1"}>
                          Sign Up
                        </ButtonOutline>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            {/*             <div>
              <ButtonOutline path={"/login"} addedClass={"px-7 py-2 "}>
                Login
              </ButtonOutline>
            </div>
            <div>
              <ButtonOutline path={"/signup"} addedClass={"px-7 py-2 "}>
                Sign Up
              </ButtonOutline>
            </div>
            <div>
              <ButtonOutline path={"/"} addedClass={"px-7 py-2 "}>
                Dashboard
              </ButtonOutline>
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
