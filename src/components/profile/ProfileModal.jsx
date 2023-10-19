import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { imageUpload } from "../../api/utils";
import { toast } from "react-hot-toast";
import { FaRegCircleXmark } from "react-icons/fa6";

const ProfileModal = ({ isOpen, reader, modalClose }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user, role, loading } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const updateProfile = (profileData) => {
    setProcessing(true);
    console.log("Update profile", profileData);
    const {
      name,
      email,
      profession,
      role,
      phone,
      age,
      gender,
      image,
      facebook,
      twitter,
      linkedin,
      instagram,
      address,
      intro,
    } = profileData;

    const updateProfileWithoutImg = {
      name,
      email,
      profession,
      role,
      phone,
      age,
      gender,
      facebook,
      twitter,
      linkedin,
      instagram,
      address,
      intro,
    };

    if (image) {
      if (image.length > 0) {
        // get image url from imgbb
        imageUpload(image[0]).then((res) => {
          const profilePic = res.data.display_url;
          const updatedProfileWithImg = {
            name,
            email,
            profession,
            role,
            phone,
            age,
            gender,
            profilePic,
            facebook,
            twitter,
            linkedin,
            instagram,
            address,
            intro,
          };
          axiosSecure.patch(`/users/${email}`, updatedProfileWithImg).then((res) => {
            console.log("with image", res.data);
            if (res.data.modifiedCount > 0) {
              toast.success("Profile updated");
              setProcessing(false);
              modalClose();
            }
          });
        });
      }
    }

    if (!image) {
      axiosSecure.patch(`/users/${email}`, updateProfileWithoutImg).then((res) => {
        console.log("without Image", res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Profile updated");
          setProcessing(false);
          modalClose();
        }
      });
    }

    // End
  };

  // set condition is !isOpen render nothing
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-slate-500 bg-opacity-50 fixed w-10/12 z-50 h-screen top-0 right-0 flex justify-center items-center">
      <div className="w-10/12 px-16 py-8 bg-orange-500 relative">
        <h2 className="text-3xl font-semibold text-center mb-8">Edit Profile</h2>
        <form className="" onSubmit={handleSubmit(updateProfile)}>
          {/* Block One */}
          <div className="w-full flex gap-5">
            {/* book name */}
            <div className="w-1/2">
              <label htmlFor="">Name</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("name")}
                defaultValue={reader?.name ? reader?.name : ""}
                placeholder="Your Name"
              />
            </div>
            {/* Email */}
            <div className="w-1/2">
              <label htmlFor="">Email</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="email"
                {...register("email")}
                defaultValue={user?.email}
                readOnly
              />
            </div>
          </div>
          {/* Block Two */}
          <div className="w-full flex gap-5 my-5">
            {/* Profession */}
            <div className="w-1/3">
              <label htmlFor="">Profession</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("profession")}
                defaultValue={reader?.profession ? reader?.profession : ""}
                placeholder="Profession"
              />
            </div>
            {/* user role */}
            <div className="w-1/3">
              <label htmlFor="">User Role</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("role")}
                defaultValue={role}
                placeholder="User role"
                readOnly
              />
            </div>
            {/* Phone no. */}
            <div className="w-2/6">
              <label htmlFor="">Phone Number</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("phone")}
                defaultValue={reader?.phone ? reader?.phone : ""}
                placeholder="Phone Number"
              />
            </div>
          </div>

          {/* Block Three */}
          <div className="flex gap-5 my-5">
            {/* Age */}
            <div className="w-1/3">
              <label htmlFor="">Age</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("age")}
                defaultValue={reader?.age ? reader?.age : ""}
                placeholder="Age"
              />
            </div>
            {/* Sex */}
            <div className="w-1/3">
              <label htmlFor="">Gender</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("gender")}
                defaultValue={reader?.gender ? reader?.gender : ""}
                placeholder="Male/Female/Other"
              />
            </div>
            {/* upload profile image */}
            {reader?.profilePic ? (
              <div className="w-1/3">
                <label
                  className=" w-full text-center bg-gray-500 text-white cursor-pointer font-semibold block px-7 py-2 mt-7"
                  htmlFor="file"
                >
                  Image Uploaded
                </label>
                <input disabled id="file" className="hidden" {...register("image")} type="file" />
              </div>
            ) : (
              <div className="w-1/3">
                <label
                  className=" w-full text-center bg-green-400 cursor-pointer font-semibold block px-7 py-2 mt-7"
                  htmlFor="file"
                >
                  Upload Profile Image
                </label>
                <input id="file" className="hidden" {...register("image")} type="file" />
              </div>
            )}
          </div>
          {/* Block four */}
          <div className="flex mt-5 gap-5">
            <div className="w-1/4">
              <label htmlFor="">Facebook</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("facebook")}
                defaultValue={reader?.facebook ? reader?.facebook : ""}
                placeholder="Facebook"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="">Twitter</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("twitter")}
                defaultValue={reader?.twitter ? reader?.twitter : ""}
                placeholder="Twitter"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="">LinkedIn</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("linkedin")}
                defaultValue={reader?.linkedin ? reader?.linkedin : ""}
                placeholder="LinkedIn"
              />
            </div>
            <div className="w-1/4">
              <label htmlFor="">Instagram</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("instagram")}
                defaultValue={reader?.instagram ? reader?.instagram : ""}
                placeholder="Instagram"
              />
            </div>
          </div>
          {/* Address */}
          <div className="w-full mt-5">
            <label htmlFor="">Address</label>
            <input
              className="px-3 py-2 w-full mt-1 outline-none text-black"
              type="text"
              {...register("address")}
              defaultValue={reader?.address ? reader?.address : ""}
              placeholder="Address"
            />
          </div>

          {/* Description */}
          <div className="my-5">
            <label htmlFor="">Intro</label>
            <textarea
              className="px-3 py-2 w-full h-28 mt-1 outline-none text-black"
              {...register("intro", {})}
              placeholder="Short Intro"
            />
          </div>

          <div className=" w-44 font-semibold mx-auto mt-8  text-center">
            {processing ? (
              <div className="bg-yellow-500 cursor-pointer py-2">
                <ImSpinner9 className="  w-full  text-white animate-spin" size={28}></ImSpinner9>
              </div>
            ) : (
              <input
                className="w-full bg-yellow-500 cursor-pointer py-3 px-5"
                type="submit"
                value="Update Profile"
              />
            )}
          </div>
        </form>
        <button onClick={modalClose}>
          <FaRegCircleXmark className="text-4xl bg-white rounded-full text-orange-500 absolute -top-2 -right-2"></FaRegCircleXmark>
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
