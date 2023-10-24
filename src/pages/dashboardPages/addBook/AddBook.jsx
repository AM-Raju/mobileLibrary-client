import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../api/utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import favicon from "../../../assets/icons/favicon.png";

const AddBook = () => {
  const [axiosSecure] = useAxiosSecure();
  const [bookLoading, setBookLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleAddBook = (bookData) => {
    setBookLoading(true);
    console.log(bookData);
    const {
      title,
      authorName,
      image,
      category,
      format,
      publishedYear,
      lastEdition,
      numOfPages,
      desc,
      quantity,
    } = bookData;

    if (image.length > 0) {
      // Get image url from imgbb
      imageUpload(image[0]).then((data) => {
        console.log("dhaka", data.data.display_url);
        const imageUrl = data.data.display_url;
        // Get author id
        if (imageUrl) {
          // console.log("open", authorName);
          axiosSecure.get(`/author?name=${authorName}`).then((data) => {
            const authorId = data.data._id;
            // console.log("Author id", authorId);
            if (authorId) {
              const bookInfo = {
                title,
                cover: imageUrl,
                authorId,
                category,
                format,
                publishedYear: parseInt(publishedYear),
                lastEdition: parseInt(lastEdition),
                numOfPages: parseInt(numOfPages),
                desc,
                quantity: parseInt(quantity),
              };

              // Upload book data to the server
              axiosSecure
                .post("/books", bookInfo)
                .then((data) => {
                  console.log(data.data);
                  if (data.data.insertedId) {
                    toast.success("Book data uploaded successfully");
                    reset();
                    setBookLoading(false);
                  } else {
                    // Book exist error message
                    toast.error(data.data.message);
                    setBookLoading(false);
                  }
                })
                .catch((error) => console.log(error.message));
            } else {
              // Author not found error

              toast.error(data.data.message);
              setBookLoading(false);
            }
          });
        }
      });
    } else {
      toast.error("Book cover missing!");
      setBookLoading(false);
    }

    //
  };
  return (
    <section className="bg-slate-300 h-full ">
      <Helmet>
        <title>Add Book | Dashboard-MobileLibrary</title>
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      <div className=" py-10 h-full">
        <h2 className="text-5xl text-center font-semibold ">Add Book</h2>
        <div className="max-w-[90%] sm:max-w-[80%] 3xl:max-w-7xl mx-auto p-10 bg-orange-500 mt-10">
          {/* Add book form */}
          <form className="" onSubmit={handleSubmit(handleAddBook)}>
            {/* Block One */}
            <div className="w-full flex flex-wrap 2xl:flex-nowrap gap-5 lg:max-2xl:gap-0 lg:max-2xl:justify-between ">
              {/* book name */}
              <div className="w-full lg:w-[48%]  2xl:w-1/2">
                <label htmlFor="">Book Title</label>
                <input
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  type="text"
                  {...register("title")}
                  placeholder="Book Title"
                />
              </div>
              {/* author name */}
              <div className="w-full lg:w-[48%]  2xl:w-1/2">
                <label htmlFor="">Author</label>
                <input
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  type="text"
                  {...register("authorName")}
                  placeholder="Author Name"
                />
              </div>
              {/* Book Cover */}
              <div className="w-full 2xl:w-1/3">
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
            <div className="w-full flex flex-wrap 2xl:flex-nowrap sm:max-xl:justify-between gap-5 sm:max-lg:gap-0  my-5">
              {/* category */}
              <div className="w-full sm:w-[48%] 2xl:w-1/6">
                <label htmlFor="">Category</label>
                <select
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  {...register("category", { required: true })}
                >
                  <option value="none">Select Category</option>
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
              <div className="w-full sm:w-[48%] 2xl:w-1/6">
                <label htmlFor="">Format</label>
                <select
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  {...register("format", { required: true })}
                >
                  <option value="none">Select Format</option>
                  <option value="ebook">Ebook</option>
                  <option value="hard cover">Hard Cover</option>
                  <option value="paperback">Paperback</option>
                </select>
              </div>
              {/* Published year */}
              <div className="w-full sm:w-[48%] 2xl:w-1/6 sm:max-lg:mt-5">
                <label htmlFor="">Published</label>
                <input
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  type="number"
                  {...register("publishedYear")}
                  placeholder="Published Year"
                />
              </div>
              {/* last edition */}
              <div className="w-full sm:w-[48%] 2xl:w-1/6 sm:max-lg:mt-5">
                <label htmlFor="">Last Edition</label>
                <input
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  type="number"
                  {...register("lastEdition")}
                  placeholder="Last Edition"
                />
              </div>
              {/* Pages */}
              <div className="w-full sm:w-[48%] 2xl:w-1/6 sm:max-lg:mt-5">
                <label htmlFor="">Number of Pages</label>
                <input
                  className="px-3 py-2 w-full mt-1 outline-none text-black"
                  type="number"
                  {...register("numOfPages")}
                  placeholder="Number of Pages"
                />
              </div>
              {/* Quantity */}
              <div className="w-full sm:w-[48%] 2xl:w-1/6 sm:max-lg:mt-5">
                <label htmlFor="">Quantity</label>
                <input
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
                className="px-3 py-2 w-full h-28 mt-1 outline-none text-black"
                {...register("desc", {})}
                placeholder="Short Description"
              />
            </div>
            <div className=" w-44 font-semibold mx-auto mt-5  text-center">
              {bookLoading ? (
                <div className="bg-yellow-500 cursor-pointer py-2">
                  <ImSpinner9 className="  w-full  text-white animate-spin" size={28}></ImSpinner9>
                </div>
              ) : (
                <input
                  className="w-full bg-yellow-500 cursor-pointer py-3 px-5"
                  type="submit"
                  value="Add Book"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
