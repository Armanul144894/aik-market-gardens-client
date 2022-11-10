import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitles";
import ShowReviews from "./ShowReviews";

const UserReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("Reviews");

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = reviews.filter((order) => order._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {reviews.map((review) => (
        <ShowReviews
          review={review}
          key={review._id}
          handleDelete={handleDelete}
        ></ShowReviews>
      ))}
    </div>
  );
};

export default UserReview;
