import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ModeratorInfo from "../../../components/requisitions/ModeratorInfo";
import ReaderInfo from "../../../components/requisitions/ReaderInfo";
import BookInfo from "../../../components/requisitions/BookInfo";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const MyReadingList = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [requisitions, setRequisitions] = useState([]);

  // Get requisition data from the server
  const { data, refetch } = useQuery({
    queryKey: ["delivered", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/delivered/${user?.email}`);
      setRequisitions(res.data);
      return res.data;
    },
  });

  return (
    <section className="h-screen lg:h-full bg-slate-300">
      <Helmet>
        <title>My Reading List | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <div className="h-full py-10 w-[360px] sm:w-[622px] md:w-[720px] xl:w-full mx-auto">
        {/*       <div className="py-10 h-full w-[330px] mx-auto  xl:w-full"> */}
        <h2 className="text-4xl lg:text-5xl text-center font-semibold mb-10">My Reading List</h2>
        <div className="w-[90%] mx-auto overflow-x-auto">
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
              </tr>
            </thead>
            <tbody className="h-fit">
              {!loading &&
                requisitions.map((requisition, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <ModeratorInfo
                        email={requisition?.moderatorEmail}
                        index={index}
                      ></ModeratorInfo>
                    </td>

                    <td>
                      <ReaderInfo
                        email={requisition?.userEmail}
                        bookId={requisition?.bookId}
                      ></ReaderInfo>
                    </td>

                    <td>
                      <BookInfo
                        bookId={requisition?.bookId}
                        email={requisition?.userEmail}
                      ></BookInfo>
                    </td>
                    <td className="w-40 ">{requisition?.city}</td>
                    <td>{requisition?.spot}</td>
                    <td
                      className={`${
                        requisition?.moderatorStatus === "received"
                          ? "text-green-600"
                          : "text-black"
                      }
                    ${
                      requisition?.moderatorStatus === "delivered" ? "text-[#F55653]" : "text-black"
                    }`}
                    >
                      {requisition?.moderatorStatus}
                    </td>
                    <td
                      className={`${
                        requisition?.readerStatus === "received" ? "text-[#F55653]" : "text-black"
                      } 
                    ${requisition?.readerStatus === "returned" ? "text-green-600" : "text-black"}`}
                    >
                      {requisition?.readerStatus}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyReadingList;
