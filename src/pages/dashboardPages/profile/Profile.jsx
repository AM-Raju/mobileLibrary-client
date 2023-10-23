import React, { useContext, useEffect, useState } from "react";

import ProfileSocialIcons from "../../../components/profile/ProfileSocialIcons";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaRegEdit, FaUser } from "react-icons/fa";
import ProfileModal from "../../../components/profile/ProfileModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [reader, setReader] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/users/${user?.email}`).then((res) => {
      setReader(res.data);
    });
  }, [user, reader]);

  const modalOpen = () => {
    setIsOpen(true);
  };
  const modalClose = () => {
    setIsOpen(false);
  };
  return (
    <section className="py-10 h-full bg-slate-300">
      <Helmet>
        <title>Profile | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <h2 className="text-5xl text-center font-semibold ">Profile</h2>
      <div className=" relative max-w-7xl mx-auto px-10 py-20 bg-orange-500 mt-10 grid grid-cols-1 md:grid-cols-3">
        {/* Image block */}
        <div className="w-fit mx-auto ">
          {reader?.profilePic ? (
            <img className="w-72" src={reader?.profilePic} alt="" />
          ) : (
            <div className="w-72 h-80 border">
              <FaUser className="text-9xl w-52 h-80 mx-auto text-white"></FaUser>
            </div>
          )}

          <div>
            <ProfileSocialIcons reader={reader}></ProfileSocialIcons>
          </div>
        </div>
        {/* Text block */}
        <div className="col-span-2  text-white mt-10 md:mt-0 md:ml-10">
          <div className="space-y-1 tracking-wide">
            <h3 className="text-2xl font-semibold">Name: {reader?.name}</h3>
            <p>
              <span className="font-semibold">Email:</span> {reader?.email}
            </p>
            <p>
              <span className="font-semibold">Reader Status:</span> {reader?.role}
            </p>
            <p>
              <span className="font-semibold">Profession:</span> {reader?.profession}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {reader?.phone}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {reader?.age}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {reader?.gender}
            </p>

            <p>
              <span className="font-semibold">Address:</span> {reader?.address}
            </p>
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-semibold">Intro</h4>
            <p className="w-11/12">{reader?.intro}</p>
          </div>
        </div>
        <button className="absolute right-5 top-5" onClick={modalOpen}>
          <FaRegEdit className="text-3xl text-white opacity-50 hover:opacity-100"></FaRegEdit>
        </button>
      </div>

      <ProfileModal isOpen={isOpen} reader={reader} modalClose={modalClose}></ProfileModal>
    </section>
  );
};

export default Profile;
