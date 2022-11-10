import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceItems from "../ServiceItems/ServiceItems";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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
