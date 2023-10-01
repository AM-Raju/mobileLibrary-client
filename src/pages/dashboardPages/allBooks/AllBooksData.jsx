import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AuthorTitleAndCountry from "../../../components/shared/AuthorTitleAndCountry";

const AllBooksData = () => {
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [sn, setSn] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearchText = (event) => {
    event.preventDefault();
    const text = event.target.value;
    setSearchText(text);
  };

  // Get book data according to pageNum
  useEffect(() => {
    setLoading(true);
    axiosSecure.get(`/books/${pageNum}`).then((res) => {
      setBooks(res.data);

      if (pageNum > 1) {
        setSn((pageNum - 1) * 10);
      } else {
        setSn(0);
      }
      setLoading(false);
    });
  }, [pageNum]);

  useEffect(() => {
    axiosSecure.get(`/books?search=${searchText}`).then((res) => {
      console.log(res.data);
      setBooks(res.data);
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

  return (
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
                <th>Stats</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="h-fit">
              {!loading &&
                books.map((book, index) => (
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
                      <button className="bg-red-500 px-4 py-2 rounded font-semibold  tracking-wider">
                        Stats
                      </button>
                    </td>
                    <td>
                      <button className="bg-cyan-500 px-4 py-2 rounded font-semibold  tracking-wider">
                        Update
                      </button>
                    </td>
                    <td>
                      <button className="bg-emerald-500 px-4 py-2 rounded font-semibold  tracking-wider">
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
  );
};

export default AllBooksData;
