import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../Layoutes/Main/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";

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
