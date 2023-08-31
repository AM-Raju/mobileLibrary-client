import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FreeEbooks from "../pages/FreeEbooks";
import AllBooks from "../pages/AllBooks";
import ErrorPage from "../pages/ErrorPage";
import AllAuthors from "../pages/AllAuthors";
import BookDetails from "../pages/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/free-ebooks",
        element: <FreeEbooks></FreeEbooks>,
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/book-details",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/all-authors",
        element: <AllAuthors></AllAuthors>,
      },
    ],
  },
]);

export default router;
