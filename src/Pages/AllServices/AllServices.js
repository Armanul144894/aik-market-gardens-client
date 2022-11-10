import React, { useEffect, useState } from "react";
import Service from "./Service";

const AllServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("https://aik-market-gardens-server.vercel.app/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {services.map((service) => (
        <Service service={service} key={service._id}></Service>
      ))}
    </div>
  );
};

export default AllServices;
