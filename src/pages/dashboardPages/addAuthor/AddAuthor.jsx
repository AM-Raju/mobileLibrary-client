import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const AddAuthor = () => {
  const [authorLoading, setAuthorLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddAuthor = (authorData) => {
    setAuthorLoading(true);
    console.log("add Author", authorData);
    const { name, country, image, bio } = authorData;
    console.log("from add author", image);
    const author = { name, country, bio };
    // Posting author data to the server
    axiosSecure.post("/authors", author).then((res) => {
      const authorId = res.data.insertedId;

      if (!authorId) {
        toast.error(res.data.message);
      } else {
        if (image.length > 0) {
          // Uploading user image to the imgbb
          const img = image[0];
          const formData = new FormData();
          formData.append("image", img);
          const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_API_key}`;
          // fetching image data to the imgbb
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              const imageUrl = data.data.display_url;

              if (imageUrl) {
                const updatedData = { image: imageUrl, authorId };

                // update authorData
                axiosSecure.patch("/authors", updatedData).then((res) => {
                  // console.log("Update author", res);
                  if (res.data.modifiedCount > 0) {
                    setAuthorLoading(false);
                    toast.success("Author updated successfully");
                    reset();
                  }
                });
              }
            })
            .catch((error) => console.log(error.message));
        }
      }
    });

    // Check author is available or not
  };
  return (
    <section className="py-10 h-full bg-slate-300">
      <Helmet>
        <title>Add Author | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <h2 className="text-5xl text-center font-semibold">Add Author</h2>
      <div className=" max-w-7xl mx-auto p-10 bg-orange-500 mt-10">
        <form onSubmit={handleSubmit(handleAddAuthor)}>
          {/* Block One */}
          <div className="flex w-full gap-5">
            {/* Author Name */}
            <div className="w-1/2">
              <label htmlFor="">Author Name</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("name", { required: true })}
                placeholder="Author Name"
              />
              <p className="text-white text-sm">
                {errors.name && <span>* This field is required</span>}
              </p>
            </div>
            {/* Country */}
            <div className="w-1/3">
              <label htmlFor="">Country</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("country", { required: true })}
                placeholder="Country"
              />
              <p className="text-white text-sm">
                {errors.country && <span>* This field is required</span>}
              </p>
            </div>
            {/* Author Image */}
            <div className="w-1/3">
              <label
                className=" w-full text-center bg-green-400 cursor-pointer font-semibold block px-7 py-2 mt-7"
                htmlFor="file"
              >
                Upload Author Image
              </label>
              <input
                id="file"
                className="hidden"
                {...register("image", { required: true })}
                type="file"
              />
              <p className="text-white text-sm">
                {errors.image && <span>* This field is required</span>}
              </p>
            </div>
          </div>
          {/* Block Two */}
          {/* Bio */}
          <div className="my-5">
            <label htmlFor="">Author Bio</label>
            <textarea
              className="px-3 py-2 w-full h-28 mt-1 outline-none text-black"
              {...register("bio", {})}
              placeholder="Author Bio"
            />
          </div>
          <div className=" w-44 font-semibold mx-auto mt-5  text-center">
            {authorLoading ? (
              <div className="bg-yellow-500 cursor-pointer py-2">
                <ImSpinner9 className="  w-full  text-white animate-spin" size={28}></ImSpinner9>
              </div>
            ) : (
              <input
                className="w-full bg-yellow-500 cursor-pointer py-3 px-5"
                type="submit"
                value="Add Author"
              />
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAuthor;
