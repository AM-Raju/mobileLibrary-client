import React, { useContext, useEffect, useState } from "react";
import ModeratorInfo from "../requisitions/ModeratorInfo";
import ReaderInfo from "../requisitions/ReaderInfo";
import BookInfo from "../requisitions/BookInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const RequisitionRowAd = ({ requisition, index, refetch }) => {
  const { _id, userEmail, moderatorEmail, bookId, city, spot, moderatorStatus, readerStatus } =
    requisition;
  const { user, loading, role } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [changeValue, setChangeValue] = useState(-1);
  const [bookCount, setBookCount] = useState(1);

  useEffect(() => {
    if (role !== "admin") {
      setBtnDisabled(true);
    } else if (moderatorStatus === "delivered") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [moderatorStatus, role]);

  useEffect(() => {
    if (moderatorStatus === "received") {
      setChangeValue(0);
      setBookCount(0);
    }
  }, []);

  const handleDelete = (requisitionId, readerEmail, bookId) => {
    axiosSecure.patch(`/reader/${readerEmail}`, { changeValue: changeValue }).then((res) => {
      if (res.data.modifiedCount > -1) {
        axiosSecure.patch(`/book/${bookId}`, { bookCount: bookCount }).then((res) => {
          if (res.data.modifiedCount > -1) {
            axiosSecure.delete(`/requisitions/${requisitionId}`).then((res) => {
              if (res.data.deletedCount > 0) {
                toast.success("Requisition Deleted Successfully");
                refetch();
              }
            });
          }
        });
      }
    });
  };
  return (
    <>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <ModeratorInfo email={moderatorEmail} index={index}></ModeratorInfo>
        </td>

        <td>
          <ReaderInfo email={userEmail} bookId={bookId}></ReaderInfo>
        </td>

        <td>
          <BookInfo bookId={bookId} email={userEmail}></BookInfo>
        </td>
        <td className="w-40">{city}</td>
        <td>{spot}</td>
        <td
          className={`${moderatorStatus === "received" ? "text-green-600" : "text-black"}
                ${moderatorStatus === "delivered" ? "text-red-500" : "text-black"}`}
        >
          {moderatorStatus}
        </td>
        <td
          className={`${readerStatus === "received" ? "text-red-500" : "text-black"} 
                ${readerStatus === "returned" ? "text-green-600" : "text-black"}`}
        >
          {readerStatus}
        </td>
        {/* Action buttons */}
        <td>
          <button
            disabled={btnDisabled}
            onClick={() => {
              handleDelete(_id, userEmail, bookId);
            }}
            className={`bg-[#F55653] ${
              btnDisabled ? "bg-gray-500 hover:bg-gray-500" : ""
            } hover:bg-[#ff2521]  px-4 py-2 rounded text-white`}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default RequisitionRowAd;
