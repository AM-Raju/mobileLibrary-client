import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const { user, loading, role } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [readers, setReaders] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setReaders(res.data);
    });
  }, []);

  const makeModerator = (email) => {};

  return (
    <section className="py-10 h-full bg-slate-300">
      <h2 className="text-5xl text-center font-semibold mb-10">All Books</h2>
      <div className="w-8/12 mx-auto overflow-x-auto">
        <table className="table h-fit">
          {/* head */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="h-fit">
            {!loading &&
              readers.map((reader, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{reader.name ? reader?.name : "Unknown"}</td>
                  <td className="w-40 font-semibold">{reader?.email}</td>
                  <td>{reader?.role}</td>
                  <td className="w-48">
                    <button
                      onClick={() => makeModerator(reader?.email)}
                      disabled={reader?.role === "admin" || reader?.role === "moderator"}
                      className={`${
                        reader?.role === "admin" || reader?.role === "moderator"
                          ? "bg-gray-500"
                          : "bg-orange-500"
                      } px-4 py-2 rounded font-semibold  tracking-wider`}
                    >
                      Make Moderator
                    </button>
                  </td>

                  <td>
                    <button
                      disabled={role !== "admin"}
                      className="hover:bg-red-500 px-4 py-2 rounded group"
                    >
                      <FaTrash
                        className={`${
                          role === "admin" ? "text-red-500" : "text-gray-500"
                        } group-hover:text-white text-xl`}
                      ></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
