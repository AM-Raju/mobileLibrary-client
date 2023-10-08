import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateBookModal = ({ book }) => {
  const [axiosSecure] = useAxiosSecure();
  const [author, setAuthor] = useState({});

  const {
    title,
    authorId,
    cover,
    category,
    format,
    publishedYear,
    lastEdition,
    numOfPages,
    qty,
    desc,
  } = book;

  // React hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUpdateBook = () => {};
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle  w-screen">
      <div className="bg-green-300 w-8/12 p-10">
        {/* Update form */}
        <form className="" onSubmit={handleSubmit(handleUpdateBook)}>
          {/* Block One */}
          <div className="w-full flex gap-5">
            {/* book name */}
            <div className="w-1/2">
              <label htmlFor="">Book Title</label>
              <input
                defaultValue={title}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("title")}
                placeholder="Book Title"
              />
            </div>
            {/* author name */}
            <div className="w-1/3">
              <label htmlFor="">Author</label>
              <input
                defaultValue={author.name}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="text"
                {...register("authorName")}
                placeholder="Author Name"
              />
            </div>
            {/* Book Cover */}
            <div className="w-1/4">
              <label
                className=" w-full text-center bg-green-400 cursor-pointer font-semibold block px-7 py-2 mt-7"
                htmlFor="file"
              >
                Upload Book Cover
              </label>
              <input id="file" className="hidden" {...register("image")} type="file" />
            </div>
          </div>
          {/* Block Two */}
          <div className="w-full flex gap-5 my-5">
            {/* category */}
            <div className="w-1/4">
              <label htmlFor="">Category</label>
              <select
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("category", { required: true })}
              >
                <option defaultValue={category} value="none">
                  {category}
                </option>
                <option value="Biographies & Memoirs">Biographies & Memoirs</option>
                <option value="science">Science</option>
                <option value="Art and Photography">Art and Photography</option>
                <option value="Motivation">Motivation</option>
                <option value="Kids and Children">Kids and Children</option>
                <option value="Thriller">Thriller</option>
                <option value="Business & Money">Business & Money</option>
                <option value="Computer & Technology Books">Computer & Technology Books</option>
              </select>
            </div>
            {/* Format */}
            <div className="w-1/4">
              <label htmlFor="">Format</label>
              <select
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                {...register("format", { required: true })}
              >
                <option defaultValue={format} value="none">
                  {format}
                </option>
                <option value="ebook">Ebook</option>
                <option value="hard cover">Hard Cover</option>
                <option value="paperback">Paperback</option>
              </select>
            </div>
            {/* Published year */}
            <div className="w-1/6">
              <label htmlFor="">Published</label>
              <input
                defaultValue={publishedYear}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("publishedYear")}
                placeholder="Published Year"
              />
            </div>
            {/* last edition */}
            <div className="w-1/6">
              <label htmlFor="">Last Edition</label>
              <input
                defaultValue={lastEdition}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("lastEdition")}
                placeholder="Last Edition"
              />
            </div>
            {/* Pages */}
            <div className="w-1/6">
              <label htmlFor="">Number of Pages</label>
              <input
                defaultValue={numOfPages}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("numOfPages")}
                placeholder="Number of Pages"
              />
            </div>
            {/* Quantity */}
            <div className="w-1/6">
              <label htmlFor="">Quantity</label>
              <input
                defaultValue={qty}
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("quantity")}
                placeholder="Quantity"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="">Sort Description</label>
            <textarea
              defaultValue={desc}
              className="px-3 py-2 w-full h-28 mt-1 outline-none text-black"
              {...register("desc", {})}
              placeholder="Short Description"
            />
          </div>
          <div className=" w-44 font-semibold mx-auto mt-5  text-center">
            {/*   {bookLoading ? (
              <div className="bg-yellow-500 cursor-pointer py-2">
                <ImSpinner9 className="  w-full  text-white animate-spin" size={28}></ImSpinner9>
              </div>
            ) : (
              <input
                className="w-full bg-yellow-500 cursor-pointer py-3 px-5"
                type="submit"
                value="Add Book"
              />
            )} */}
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateBookModal;
