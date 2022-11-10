import React, { useEffect, useState } from "react";
import ServiceReviewRow from "./ServiceReviewRow";

const ServiceReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://aik-market-gardens-server.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <h1>reviews: {reviews.length}</h1>
      {reviews.map((review) => (
        <ServiceReviewRow key={review._id} review={review}></ServiceReviewRow>
      ))}
    </div>
  );
};

export default ServiceReview;
