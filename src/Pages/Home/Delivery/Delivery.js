import React from "react";

const Delivery = () => {
  return (
    <div className="my-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnQoNXGVCPYvc8mYcz8Vk_X-5SQL3BqEqoA&usqp=CAU")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">Home Delivery</h1>
            <p className="mb-5">
              You can order my products through online. There are limited
              delivery charge are taken. My Service is very good. My website is
              user friendly. Your products is deliver within 30 minuets.
            </p>
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
