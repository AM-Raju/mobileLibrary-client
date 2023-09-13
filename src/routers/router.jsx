import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import FreeEbooks from "../pages/FreeEbooks";
import AllBooks from "../pages/AllBooks";
import ErrorPage from "../pages/ErrorPage";
import AllAuthors from "../pages/AllAuthors";
import BookDetails from "../pages/BookDetails";
import MembershipPlan from "../pages/MembershipPlan";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboardPages/dashboardHome/DashboardHome";
import AllUsers from "../pages/dashboardPages/allUsers/AllUsers";
import AllBooksData from "../pages/dashboardPages/allBooks/AllBooksData";
import AddBook from "../pages/dashboardPages/addBook/AddBook";
import IssueBooks from "../pages/dashboardPages/issueBooks/IssueBooks";
import MyBooks from "../pages/dashboardPages/myBooks/MyBooks";
import AddAuthor from "../pages/dashboardPages/addAuthor/AddAuthor";

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
      {
        path: "/pricing",
        element: <MembershipPlan></MembershipPlan>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/all-books-data",
        element: <AllBooksData></AllBooksData>,
      },
      {
        path: "/dashboard/add-book",
        element: <AddBook></AddBook>,
      },
      {
        path: "/dashboard/add-author",
        element: <AddAuthor></AddAuthor>,
      },
      {
        path: "/dashboard/issue-books",
        element: <IssueBooks></IssueBooks>,
      },
      {
        path: "/dashboard/my-books",
        element: <MyBooks></MyBooks>,
      },
    ],
  },
]);

export default router;
