import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const DashboardNav = () => {
  return (
    <ul className=" p-4 lg:w-64 2xl:w-72 3xl:w-80 min-h-full bg-[#339DB3] text-base-content ">
      <Link to="/">
        <Logo></Logo>
      </Link>
      {/* Sidebar content here */}

      <li>
        <Link className="block w-full font-semibold pr-3 pt-2" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className=" block w-ful font-semibold  pr-3 py-2" to="/dashboard/">
          Dashboard
        </Link>
      </li>

      <div className="">
        <p className="font-semibold">Admin Panel</p>
        <hr />
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-2" to="/dashboard/all-users">
            All Users
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-2" to="/dashboard/all-books-data">
            All Books
          </Link>
        </li>
        <li>
          <Link
            className="hover:bg-cyan-500 block w-full px-3 py-2"
            to="/dashboard/all-requisitions"
          >
            All Requisitions
          </Link>
        </li>
      </div>
      <div>
        <p className="font-semibold">Operator Panel</p>
        <hr />
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-2" to="/dashboard/add-book">
            Add Book
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-2" to="/dashboard/add-author">
            Add Author
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-2" to="/dashboard/requisitions">
            Requisitions
          </Link>
        </li>
      </div>

      <div>
        <p className="font-semibold">User Panel</p>
        <hr />
        <li>
          <Link
            className="hover:bg-cyan-500 block w-full px-3 py-2"
            to="/dashboard/my-reading-list"
          >
            My Reading List
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default DashboardNav;
