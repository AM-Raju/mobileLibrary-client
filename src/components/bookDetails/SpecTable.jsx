import React from "react";

const SpecTable = ({ book, author }) => {
  const { title, lastEdition, publishedYear, numOfPages } = book;
  const { name, country } = author;
  return (
    <table className="border w-full">
      <tbody>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Title</td>
          <td className="pl-5 py-3 border">{title}</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Author</td>
          <td className="pl-5 py-3 border">{name}</td>
        </tr>

        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Published Year</td>
          <td className="pl-5 py-3 border">{publishedYear}</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Edition</td>
          <td className="pl-5 py-3 border">Last Edition, {lastEdition}</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Pages</td>
          <td className="pl-5 py-3 border">{numOfPages}</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Country</td>
          <td className="pl-5 py-3 border">{country}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecTable;
