import React from "react";
import "./BannerItems.css";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className=" carousel-img">
        <img src={image} alt="" className="w-full rounded slider-img h-96" />
      </div>
      <div className="flex justify-center absolute top-1/4 ">
        <div>
          <h1 className="text-white font-bold text-4xl w-3/4 text-justify">
            AIK Market Gardens – Quality & Freshness
          </h1>
          <p className="text-white">
            We grow, pack, market & distribute quality fresh herbs, spring
            onions, vegetables & Asian vegetables.
          </p>
        </div>
      </div>
      <div className=" flex absolute bottom-5 w-2/5 top-1/2 left-24"></div>
      {/* <div className=" flex absolute gap-5 top-2/3 left-24 ">
        <button className="btn btn-error text-white ">Discover More</button>
        <button className="btn btn-outline text-white ">Button</button>
      </div> */}
      <div className=" flex absolute gap-3 bottom-5 left-1/2">
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
