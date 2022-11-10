import React, { useEffect, useState } from "react";

import ReviewsRow from "./ReviewsRow/ReviewsRow";

const MyReviews = () => {
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
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <ReviewsRow key={review._id} review={review}></ReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
