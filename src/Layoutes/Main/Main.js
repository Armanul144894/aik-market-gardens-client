import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../shared/Header/Header";

const Main = () => {
  return (
    <div className="w-3/4 mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
