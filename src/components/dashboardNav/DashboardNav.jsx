import React from "react";
import { Link } from "react-router-dom";
import Logo from "../shared/Logo";

const DashboardNav = () => {
  return (
    <ul className=" p-4 w-80 min-h-full bg-[#339DB3] text-base-content ">
      <Link to="/">
        <Logo></Logo>
      </Link>
      {/* Sidebar content here */}
      <li>
        <Link to="/dashboard/">Dashboard</Link>
      </li>
      <div className="">
        <p>Admin Panel</p>
        <hr />
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/all-users">
            All Users
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/all-books-data">
            All Books
          </Link>
        </li>
      </div>
      <div>
        <p>Operator Panel</p>
        <hr />
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/add-book">
            Add Book
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/add-author">
            Add Author
          </Link>
        </li>
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/issue-books">
            Issue Books
          </Link>
        </li>
      </div>

      <div>
        <p>User Panel</p>
        <hr />
        <li>
          <Link className="hover:bg-cyan-500 block w-full px-3 py-1" to="/dashboard/my-books">
            My Books
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default DashboardNav;
