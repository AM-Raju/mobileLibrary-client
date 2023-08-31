import React from "react";

const SpecTable = () => {
  return (
    <table className="border w-full">
      <tbody>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Title</td>
          <td className="p-2 border">Oldman and the sea</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Author</td>
          <td className="p-2 border">Victor Hugo</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Publisher</td>
          <td className="p-2 border">Seba Publications</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">ISBN</td>
          <td className="p-2 border">12345678</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Edition</td>
          <td className="p-2 border">4th Edition, February 2023</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Pages</td>
          <td className="p-2 border">180</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Country</td>
          <td className="p-2 border">USA</td>
        </tr>
        <tr>
          <td className="border border-r-2 p-2 bg-gray-100">Language</td>
          <td className="p-2 border">English</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecTable;
