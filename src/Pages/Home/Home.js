import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitles";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Delivery from "./Delivery/Delivery";

const Home = () => {
  const { loading } = useContext(AuthContext);
  useTitle("Home");
  if (loading) {
    return <div className="loader absolute left-1/2 top-20"></div>;
  }
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Delivery></Delivery>
    </div>
  );
};

export default Home;
