import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import RequisitionRowAd from "../../../components/allRequisitionsC/RequisitionRowAd";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const AllRequisitions = () => {
  const { user, loading, role } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [requisitions, setRequisitions] = useState([]);

  // Get requisition data from the server
  const { data, refetch } = useQuery({
    queryKey: ["requisitions", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/requisitions`);
      setRequisitions(res.data);
      return res.data;
    },
  });

  return (
    <section className="bg-slate-300 h-screen max-h-full relative">
      <Helmet>
        <title>Requisitions | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <div className="py-10 h-full w-[330px] mx-auto sm:w-[622px] md:w-full">
        <h2 className="text-5xl text-center font-semibold mb-10">All Requisitions</h2>
        <div className="w-10/12 mx-auto overflow-x-auto">
          <table className="table h-fit">
            {/* head */}
            <thead>
              <tr>
                <th>SN</th>
                <th>Moderator Email</th>
                <th>Reader Email</th>
                <th>Book Info</th>
                <th>City</th>
                <th>Spot</th>
                <th>Moderator Status</th>
                <th>Reader Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="h-fit">
              {!loading &&
                requisitions.map((requisition, index) => (
                  <RequisitionRowAd
                    key={index}
                    requisition={requisition}
                    index={index}
                    refetch={refetch}
                  ></RequisitionRowAd>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllRequisitions;
