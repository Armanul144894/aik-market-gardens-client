import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ServiceItems from "../ServiceItems/ServiceItems";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);
  console.log(services);

  useEffect(() => {
    fetch(`https://aik-market-gardens-server.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      {services.map((service) => (
        <ServiceItems key={service._id} service={service}></ServiceItems>
      ))}

      <Link to="/services">
        <button className="btn btn-accent my-10 px-10 text-white font-bold">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Services;
