import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { img, title, price, _id, description, facility } = service;
  //   console.log(service);
  return (
    <div>
      <div className="card mb-10 h-full glass">
        <div className="card-body">
          <img src={img} alt="" className="rounded" />

          <h2 className="card-title">{title}</h2>
          <div className="flex gap-5 text-justify">
            <div>
              <p className="text-red-600 font-bold">Price: ${price}</p>
              <p>{description}</p>
            </div>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-outline">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceDetails;
