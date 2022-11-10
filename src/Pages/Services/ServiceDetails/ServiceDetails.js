import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitles";
import MyReviews from "../../MyReviews/MyReviews";
import "react-photo-view/dist/react-photo-view.css";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);

  const { img, title, price, _id, description } = service;

  useTitle(`${title}`);

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const image = form.image.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      serviceId: _id,
      serviceName: title,
      price,
      customer: name,
      serviceImage: img,
      image,
      email,
      message,
    };

    fetch("https://aik-market-gardens-server.vercel.app/reviews", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review placed successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="card mb-10 h-full glass">
        <div className="card-body">
          <PhotoProvider maskOpacity={1}>
            <PhotoView src={img}>
              <img src={img} style={{ objectFit: "cover" }} alt="" />
            </PhotoView>
          </PhotoProvider>
          <h2 className="card-title">{title}</h2>
          <div className="flex gap-5 text-justify">
            <div>
              <p className="text-red-600 font-bold">Price: ${price}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {user?.email ? (
          <>
            <div className="my-10">
              <div className="card bg-gray-100 my-10">
                <div className="text-center py-5">
                  <h2 className="text-4xl font-bold">{title}</h2>
                  <h4 className="font-bold text-red-500">Price: ${price}</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handlePlaceReview}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input input-bordered w-full"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                      />

                      <input
                        type="url"
                        name="image"
                        placeholder="Your Image"
                        className="input input-bordered w-full"
                        required
                      />

                      <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        defaultValue={user?.email}
                        className="input input-bordered w-full"
                        readOnly
                      />
                    </div>
                    <textarea
                      name="message"
                      className="textarea textarea-bordered w-full h-40 mt-8"
                      placeholder="Your Message"
                    ></textarea>
                    <input
                      className="btn btn-accent text-white font-bold w-full mt-5 mb-10"
                      type="submit"
                      value="Submit Review"
                    />
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="card w-full ">
                <div className="card  bg-slate-300 shadow-xl">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-yellow-700">
                      Add Review
                    </h2>
                    <p> Please login to add a review.</p>
                    <div className="card-actions">
                      <Link to="/login">
                        <button className="btn btn-primary px-20 font-bold text-white">
                          Login
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="my-5">
        <MyReviews></MyReviews>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default ServiceDetails;
