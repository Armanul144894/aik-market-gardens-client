import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { img, title, price, _id, description } = service;
  //   console.log(service);

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const phone = form.phone.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    console.log(name, phone, email, message);

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      email,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.acknowledged) {
          alert("order placed successfully");
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
          <img src={img} alt="" className="rounded" />

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
        <div className="my-10">
          <h2>Review</h2>
          <img className="w-full h-80" src={img} alt="" />
          <p>{title}</p>

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
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
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
                  value="Order Confirm"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
