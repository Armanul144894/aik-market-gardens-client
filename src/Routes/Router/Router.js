import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layoutes/Main/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import UserReview from "../../Pages/MyReviews/UserReview/UserReview";
import Register from "../../Pages/Register/Register";

import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/allServices",
          element: <AllServices></AllServices>,
        },

        {
          path: "/details/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/services/${params.id}`);
          },
          element: <ServiceDetails></ServiceDetails>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "myReviews",
          element: (
            <PrivateRouter>
              <UserReview></UserReview>
            </PrivateRouter>
          ),
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Router;
