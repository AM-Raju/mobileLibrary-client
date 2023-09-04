import React from "react";

const SpecTable = () => {
  return (
    <table className="border w-full">
      <tbody>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Title</td>
          <td className="pl-5 py-3 border">Oldman and the sea</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Author</td>
          <td className="pl-5 py-3 border">Victor Hugo</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Publisher</td>
          <td className="pl-5 py-3 border">Seba Publications</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">ISBN</td>
          <td className="pl-5 py-3 border">12345678</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Edition</td>
          <td className="pl-5 py-3 border">4th Edition, February 2023</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Pages</td>
          <td className="pl-5 py-3 border">180</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Country</td>
          <td className="pl-5 py-3 border">USA</td>
        </tr>
        <tr>
          <td className="border border-r-2 pl-5 bg-gray-100 w-1/5">Language</td>
          <td className="pl-5 py-3 border">English</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SpecTable;
