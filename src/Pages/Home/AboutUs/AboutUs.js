import React from "react";
import about from "../../../assets/about/about.png";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-orange-400">
        About AIK Market Gardens
      </h1>

      <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img className="rounded w-96 h-80" src={about} alt="" />
        </figure>
        <div className="card-body  sm:w-full text-start">
          <h2 className="card-title">AIK Market Gardens</h2>
          <p>
            I grow, pack, market & distribute quality fresh herbs, spring
            onions, vegetables, flowers, fresh fruits, organic products & Asian
            vegetables. Quality is ensured thanks to my depth of experience in
            fresh produce and my ongoing commitment in meeting the high
            standards required by my customers. My desire to remain market
            leader drives continuous improvement and innovation through the
            adoption of new technologies and product development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
