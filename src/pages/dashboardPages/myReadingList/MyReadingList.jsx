import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ModeratorInfo from "../../../components/requisitions/ModeratorInfo";
import ReaderInfo from "../../../components/requisitions/ReaderInfo";
import BookInfo from "../../../components/requisitions/BookInfo";

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
    <section className="py-10 h-full bg-slate-300">
      <h2 className="text-5xl text-center font-semibold mb-10">My Reading List</h2>
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
                      requisition?.moderatorStatus === "received" ? "text-green-600" : "text-black"
                    }
                    ${
                      requisition?.moderatorStatus === "delivered" ? "text-red-500" : "text-black"
                    }`}
                  >
                    {requisition?.moderatorStatus}
                  </td>
                  <td
                    className={`${
                      requisition?.readerStatus === "received" ? "text-red-500" : "text-black"
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
    </section>
  );
};

export default MyReadingList;
