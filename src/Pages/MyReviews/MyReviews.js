import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewsRow from "./ReviewsRow/ReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
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
              <ReviewsRow
                key={review._id}
                review={review}
                // handleDelete={handleDelete}
                // handleStatusUpdate={handleStatusUpdate}
              ></ReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
