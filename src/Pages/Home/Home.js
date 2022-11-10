import React from "react";
import useTitle from "../../Hooks/useTitles";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import AboutUs from "./AboutUs/AboutUs";
import Delivery from "./Delivery/Delivery";

const Home = () => {
  useTitle("Home");
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
