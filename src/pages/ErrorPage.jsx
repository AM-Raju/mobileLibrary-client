import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorBg from "../assets/errorBg.webp";
import { Helmet } from "react-helmet-async";
import favicon from "../assets/icons/favicon.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section
      style={{ backgroundImage: `url(${errorBg})` }}
      className="relative h-screen w-screen p-16 flex justify-center items-center bg-gray-100 text-gray-900"
    >
      <Helmet>
        <title>404 | MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <div className=" absolute top-52 2xl:left-2/3 2xl:mr-10">
        <div className="max-w-xl text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-red-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl bg-yellow-300 p-3 font-semibold md:text-4xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-4 bg-green-500 hover:bg-green-800 rounded w-full mt-4 text-lg font-semibold tracking-wider text-white"
          >
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
