import React from "react";
import { useForm } from "react-hook-form";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddBook = (bookData) => console.log(bookData);
  return (
    <section className="py-10 h-full bg-slate-300">
      <h2 className="text-5xl text-center font-semibold ">Add Book</h2>
      <div className=" max-w-7xl mx-auto p-10 bg-orange-500 mt-10">
        {/* Add book form */}
        <form className="" onSubmit={handleSubmit(handleAddBook)}>
          {/* Block One */}
          <div className="w-full flex gap-5">
            {/* book name */}
            <div className="w-1/2">
              <label htmlFor="">Book Title</label>
              <input
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
                {...register("Title", { required: true })}
              >
                <option value="">Select Category</option>
                <option value="novel">Novel</option>
                <option value="science fiction">Science Fiction</option>
                <option value="travel">Travel</option>
                <option value="romantic novel">Romantic Novel</option>
              </select>
            </div>
            {/* Published year */}
            <div className="w-1/4">
              <label htmlFor="">Published</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("publishedYear")}
                placeholder="Published Year"
              />
            </div>
            {/* last edition */}
            <div className="w-1/4">
              <label htmlFor="">Last Edition</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("edition")}
                placeholder="Last Edition"
              />
            </div>
            {/* Pages */}
            <div className="w-1/4">
              <label htmlFor="">Number of Pages</label>
              <input
                className="px-3 py-2 w-full mt-1 outline-none text-black"
                type="number"
                {...register("numOfPages")}
                placeholder="Number of Pages"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="">Sort Description</label>
            <textarea
              className="px-3 py-2 w-full h-28 mt-1 outline-none text-black"
              {...register("desc", {})}
              placeholder="Short Description"
            />
          </div>
          <div className="bg-yellow-500 w-44 font-semibold mx-auto mt-5 py-3 text-center">
            <input type="submit" value="Add Book" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
