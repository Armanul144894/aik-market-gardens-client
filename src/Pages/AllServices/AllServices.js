import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import Service from "./Service";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://aik-market-gardens-server.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if (loading) {
    return <div className="loader absolute left-1/2 top-20"></div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
      {services.map((service) => (
        <Service service={service} key={service._id}></Service>
      ))}
    </div>
  );
};

export default AllServices;
