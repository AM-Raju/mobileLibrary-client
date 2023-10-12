import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ModeratorInfo from "../../../components/requisitions/ModeratorInfo";
import ReaderInfo from "../../../components/requisitions/ReaderInfo";
import BookInfo from "../../../components/requisitions/BookInfo";
import { toast } from "react-hot-toast";

const Requisitions = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [requisitions, setRequisitions] = useState([]);

  // Get requisition data from the server
  const { data, refetch } = useQuery({
    queryKey: ["requisitions"],
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

  const handleReturn = (id) => {
    axiosSecure.patch(`/returned/${id}`).then((res) => {
      console.log("return", res.data);
      if (res.data.modifiedCount > 0) {
        toast.success("Book received successfully");
        refetch();
      }
    });
  };

  return (
    <section className="py-10 h-full bg-slate-300">
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
                    <ModeratorInfo email={requisition?.moderatorEmail}></ModeratorInfo>
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
                  <td>{requisition?.moderatorStatus}</td>
                  <td>{requisition?.readerStatus}</td>

                  <td>
                    {requisition?.moderatorStatus === "requested" && (
                      <button
                        onClick={() => {
                          handleDeliver(requisition?._id);
                        }}
                        className="bg-[#F55653] hover:bg-[#ff2521]  px-4 py-2 rounded text-white"
                      >
                        Deliver
                      </button>
                    )}

                    {requisition?.moderatorStatus === "delivered" && (
                      <button
                        onClick={() => {
                          handleReturn(requisition?._id);
                        }}
                        className="bg-[#F55653] hover:bg-[#ff2521]  px-4 py-2 rounded text-white"
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
