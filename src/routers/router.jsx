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
import AddAuthor from "../pages/dashboardPages/addAuthor/AddAuthor";
import Requisitions from "../pages/dashboardPages/requisitions/Requisitions";
import MyReadingList from "../pages/dashboardPages/myReadingList/MyReadingList";
import AllRequisitions from "../pages/dashboardPages/allRequisitions/AllRequisitions";
import Profile from "../pages/dashboardPages/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";

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
        element: (
          <PrivateRoute>
            <FreeEbooks></FreeEbooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/special-books",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/book-details/${params.id}`),
      },
      {
        path: "/all-authors",
        element: (
          <PrivateRoute>
            <AllAuthors></AllAuthors>
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: (
          <PrivateRoute>
            <MembershipPlan></MembershipPlan>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <DashboardHome></DashboardHome>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-books-data",
        element: (
          <AdminRoute>
            <AllBooksData></AllBooksData>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-requisitions",
        element: (
          <AdminRoute>
            <AllRequisitions></AllRequisitions>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-book",
        element: (
          <ModeratorRoute>
            <AddBook></AddBook>
          </ModeratorRoute>
        ),
      },
      {
        path: "/dashboard/add-author",
        element: (
          <ModeratorRoute>
            <AddAuthor></AddAuthor>
          </ModeratorRoute>
        ),
      },
      {
        path: "/dashboard/requisitions",
        element: (
          <ModeratorRoute>
            <Requisitions></Requisitions>
          </ModeratorRoute>
        ),
      },
      {
        path: "/dashboard/my-reading-list",
        element: (
          <PrivateRoute>
            <MyReadingList></MyReadingList>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
