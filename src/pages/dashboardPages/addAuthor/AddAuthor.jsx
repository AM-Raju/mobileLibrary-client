import React from "react";
import { useForm } from "react-hook-form";

const AddAuthor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddAuthor = (authorData) => {
    console.log(authorData);
  };
  return (
    <section className="py-10 h-full bg-slate-300">
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
                {...register("name")}
                placeholder="Author Name"
              />
            </div>
            {/* Country */}
            <div className="w-1/3">
              <label htmlFor="">Country</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("country")}
                placeholder="Country"
              />
            </div>
            {/* Author Image */}
            <div className="w-1/3">
              <label
                className=" w-full text-center bg-green-400 cursor-pointer font-semibold block px-7 py-2 mt-7"
                htmlFor="file"
              >
                Upload Author Image
              </label>
              <input id="file" className="hidden" {...register("image")} type="file" />
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
          <div className="bg-yellow-500 w-44 font-semibold mx-auto mt-5 py-3 text-center">
            <input type="submit" value="Add Author" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAuthor;
