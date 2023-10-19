import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AuthorTitleAndCountry from "../../../components/shared/AuthorTitleAndCountry";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllBooksData = () => {
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [sn, setSn] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [singleBook, setSingleBook] = useState({});

  const handleSearchText = (event) => {
    event.preventDefault();
    const text = event.target.value;
    setSearchText(text);
  };

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["books", pageNum],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${pageNum}`);
      setBooks(res.data);
      if (pageNum > 1) {
        setSn((pageNum - 1) * 10);
      } else {
        setSn(0);
      }
      return res.data;
    },
  });

  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/books?search=${searchText}`).then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, [searchText]);

  // Decrease page num by 1
  const decreasePageNum = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  // Increase page num by 1
  const increasePageNum = () => {
    if (pageNum < 4) {
      setPageNum(pageNum + 1);
    }
  };

  // Delete Book by id
  const handleBookDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/books/${id}`).then((res) => {
      console.log("Deleted Book", res.data);
      if (res.data.deletedCount > 0) {
        toast.success("Book deleted successfully");
        refetch();
      }
    });
  };

  const openUpdateBookModal = (book) => {
    setSingleBook(book);
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <>
      {!isLoading && (
        <section className="py-10 h-full bg-slate-300">
          <h2 className="text-5xl text-center font-semibold mb-10">All Books</h2>

          {/* All User Table */}
          <div className="w-11/12 mx-auto h-fit">
            <form onChange={handleSearchText} action="">
              <input
                className="px-5 py-2 rounded outline-none absolute right-20 top-20"
                type="text"
                name="search"
                placeholder="Search Books"
              />
            </form>
            <div className="overflow-x-auto">
              <table className="table h-fit">
                {/* head */}
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Book Cover</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Format</th>
                    <th>Quantity</th>

                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="h-fit">
                  {books.map((book, index) => (
                    <tr key={index}>
                      <td>{sn + index + 1}</td>
                      <td>
                        <div className="w-24 bg-red-200">
                          <img className="w-full" src={book.cover} alt="" />
                        </div>
                      </td>
                      <td className="w-40 font-semibold">{book.title}</td>
                      <td>
                        <AuthorTitleAndCountry authorId={book.authorId}></AuthorTitleAndCountry>
                      </td>
                      <td>
                        <p>{book.format}</p>
                      </td>
                      <td>
                        <p>{book.qty}</p>
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            handleBookDelete(book._id);
                          }}
                          className="bg-emerald-500 px-4 py-2 rounded font-semibold  tracking-wider"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-fit mx-auto">
            <div className="join ">
              <button onClick={decreasePageNum} className="join-item btn">
                «
              </button>
              <button className="join-item btn">Page {pageNum}</button>
              <button onClick={increasePageNum} className="join-item btn">
                »
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AllBooksData;
