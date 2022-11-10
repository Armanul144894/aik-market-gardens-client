import React from "react";
import { Link } from "react-router-dom";

const ShowReviews = ({ review, handleDelete, handleUpdate }) => {
  const { _id, serviceName, price, message, serviceImage, customer, status } =
    review;

  return (
    <div className="text-center my-10">
      {review?.email ? (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={serviceImage} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{serviceName}</h2>
              <p>{message}</p>
              <div className="card-actions">
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(_id)}
                  className="btn btn-primary"
                >
                  {status ? status : "pending"}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        "No review here"
      )}
    </div>
  );
};

export default ShowReviews;
