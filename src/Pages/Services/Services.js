import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ServiceItems from "../ServiceItems/ServiceItems";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://aik-market-gardens-server.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceItems key={service._id} service={service}></ServiceItems>
        ))}
      </div>
      <Link to="/services">
        <button className="btn btn-accent  my-10 px-10 text-white font-bold">
          Show All
        </button>
      </Link>
    </>
  );
};

export default Services;
