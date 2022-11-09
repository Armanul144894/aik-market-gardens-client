import React, { useEffect, useState } from "react";

const ServiceReviewRow = ({ review }) => {
  const { serviceId } = review;
  console.log(serviceId);
  const [serviceReview, setServiceReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const result = review.filter((res) => res.serviceId === data.serviceId);
        setServiceReview(result);
      });
  }, []);
  return (
    <div>
      <h1>{serviceReview.serviceName}</h1>
    </div>
  );
};

export default ServiceReviewRow;
