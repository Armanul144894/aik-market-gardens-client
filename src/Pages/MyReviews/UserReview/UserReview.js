import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitles";
import ShowReviews from "./ShowReviews";
import toast, { Toaster } from "react-hot-toast";

const UserReview = () => {
  const { user, loading, logout } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  useTitle("Reviews");

  useEffect(() => {
    fetch(
      `https://aik-market-gardens-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("aikToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logout]);

  if (loading) {
    return <div className="loader absolute left-1/2 top-20"></div>;
  }
  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://aik-market-gardens-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast("Deleted Successfully");
            const remaining = reviews.filter((order) => order._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`https://aik-market-gardens-server.vercel.app/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((review) => review._id !== id);
          const approving = reviews.find((review) => review._id === id);
          approving.status = "Approved";

          const newReviews = [approving, ...remaining];
          setReviews(newReviews);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast("Update Successfully");
  };
  return (
    <div>
      {reviews.length === 0 ? (
        <>
          <div className="my-10">
            <h1>No reviews were added</h1>{" "}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {reviews.map((review) => (
              <ShowReviews
                review={review}
                key={review._id}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              ></ShowReviews>
            ))}
          </div>
        </>
      )}
      <Toaster></Toaster>
    </div>
  );
};

export default UserReview;
