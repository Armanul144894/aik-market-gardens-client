import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewsRow from "./ReviewsRow/ReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  return (
    <div>
      <h1>reviews</h1>
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
