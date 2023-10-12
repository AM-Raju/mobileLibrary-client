import React, { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const BookInfo = ({ bookId, email }) => {
  const [axiosSecure] = useAxiosSecure();
  const { loading } = useContext(AuthContext);
  const [book, setBook] = useState({});

  const { data, refetch } = useQuery({
    queryKey: ["book-details", bookId, email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/book-details/${bookId}`);
      setBook(res.data);
      return res.data;
    },
  });

  return (
    <div className="flex">
      <img className="w-20" src={book?.cover} alt="" />
      <div className="flex justify-center items-center ml-4">
        <h3>{book?.title}</h3>
      </div>
    </div>
  );
};

export default BookInfo;
