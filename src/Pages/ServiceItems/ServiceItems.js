import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";

const ServiceItems = ({ service }) => {
  const { img, title, price, _id, description } = service;
  return (
    <div>
      <div className="card mb-10 h-full glass">
        <div className="card-body">
          <PhotoProvider maskOpacity={1}>
            <PhotoView src={img}>
              <img src={img} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>

          {/* <img src={img} alt="" className="rounded" /> */}

          <h2 className="card-title">{title}</h2>
          <div className="flex gap-5 text-justify">
            <div>
              <p className="text-red-600 font-bold">Price: ${price}</p>
              <p>{description.slice(0, 100)}...</p>
            </div>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn w-1/2 btn-outline">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
