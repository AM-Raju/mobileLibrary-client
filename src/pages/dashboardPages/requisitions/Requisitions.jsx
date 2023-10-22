import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ModeratorInfo from "../../../components/requisitions/ModeratorInfo";
import ReaderInfo from "../../../components/requisitions/ReaderInfo";
import BookInfo from "../../../components/requisitions/BookInfo";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const Requisitions = () => {
  const { user, loading } = useContext(AuthContext);
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

  const handleDeliver = (id) => {
    axiosSecure.patch(`/delivered/${id}`).then((res) => {
      console.log("deliver", res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Book delivered successfully");
        refetch();
      }
    });
  };

  const handleReceive = (requisitionId, readerEmail, bookId) => {
    axiosSecure.patch(`/reader/${readerEmail}`, { changeValue: -1 }).then((res) => {
      if (res.data.modifiedCount > 0) {
        axiosSecure.patch(`/book/${bookId}`, { bookCount: 1 }).then((res) => {
          if (res.data.modifiedCount > 0) {
            axiosSecure.patch(`/returned/${requisitionId}`).then((res) => {
              console.log("return", res.data);
              if (res.data.modifiedCount > 0) {
                toast.success("Book received successfully");
                refetch();
              }
            });
          }
        });
      }
    });
  };

  return (
    <section className="py-10 h-full bg-slate-300">
      <Helmet>
        <title>Requisitions | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <h2 className="text-5xl text-center font-semibold mb-10">Requisitions</h2>
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
                  <td className="w-40">{requisition?.city}</td>
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
                  {/* Action buttons */}
                  <td>
                    {requisition?.moderatorStatus === "requested" && (
                      <button
                        disabled={requisition?.moderatorEmail !== user?.email}
                        onClick={() => {
                          handleDeliver(requisition?._id);
                        }}
                        className={`bg-[#F55653] ${
                          requisition?.moderatorEmail !== user?.email
                            ? "bg-gray-500 hover:bg-gray-500"
                            : ""
                        } hover:bg-[#ff2521]  px-4 py-2 rounded text-white`}
                      >
                        Deliver
                      </button>
                    )}

                    {requisition?.moderatorStatus === "delivered" && (
                      <button
                        disabled={requisition?.moderatorEmail !== user?.email}
                        onClick={() => {
                          handleReceive(
                            requisition?._id,
                            requisition?.userEmail,
                            requisition?.bookId
                          );
                        }}
                        className={`bg-green-600  ${
                          requisition?.moderatorEmail !== user?.email
                            ? "bg-gray-500 hover:bg-gray-500"
                            : ""
                        } hover:bg-green-700  px-4 py-2 rounded text-white`}
                      >
                        Receive
                      </button>
                    )}
                    {requisition?.moderatorStatus === "received" && (
                      <button disabled className="bg-gray-500  px-4 py-2 rounded text-white">
                        Receive
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Requisitions;
