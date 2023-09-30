import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AuthorTitleAndCountry = ({ authorId }) => {
  const [axiosSecure] = useAxiosSecure();
  const [author, setAuthor] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/authors/${authorId}`)
      .then((res) => setAuthor(res.data))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <p>{author.name}</p>
      <p className="text-gray-500 text-xs">{author.country}</p>
    </>
  );
};

export default AuthorTitleAndCountry;
