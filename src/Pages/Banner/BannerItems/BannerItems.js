import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className=" carousel-img">
        <img src={image} alt="" className="w-full rounded slider-img h-full" />
      </div>
      <div className="flex justify-center absolute top-5 inset-0">
        <div>
          <h1 className="text-white font-bold text-2xl text-justify">
            <strong>AIK Market Gardens</strong>
          </h1>
          <h1 className="text-white font-bold text-2xl text-justify">
            <strong>Quality & Freshness</strong>
          </h1>
        </div>
      </div>
      <div className="flex justify-center absolute top-24">
        <p className="text-white w-3/4">
          I grow, pack, market & distribute quality fresh herbs, spring onions,
          vegetables, flowers, fresh fruits & Asian vegetables.
        </p>
      </div>

      <div className=" flex justify-center bottom-5 left-1/2 absolute gap-3  ">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;
