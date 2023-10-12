import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ReaderInfo = ({ email, bookId }) => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [reader, setReader] = useState({});

  // Get reader data from the server by email
  const { data, refetch } = useQuery({
    queryKey: ["users", email, bookId],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`);
      setReader(res.data);
      return res.data;
    },
  });
  return <div>{reader?.name ? reader?.name : reader?.email}</div>;
};

export default ReaderInfo;
