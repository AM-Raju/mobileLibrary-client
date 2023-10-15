import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ModeratorInfo = ({ email, index }) => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [moderator, setModerator] = useState({});

  // Get moderator data from the server by email
  const { data, refetch } = useQuery({
    queryKey: ["users", email, moderator, index],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${email}`);
      setModerator(res.data);
      return res.data;
    },
  });

  return <div>{moderator?.name ? moderator?.name : moderator?.email}</div>;
};

export default ModeratorInfo;
