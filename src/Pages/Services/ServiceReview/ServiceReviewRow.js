import React, { useEffect, useState } from "react";

const ServiceReviewRow = ({ review }) => {
  const { serviceId } = review;
  serviceId;
  const [serviceReview, setServiceReview] = useState([]);

  useEffect(() => {
    fetch(`https://aik-market-gardens-server.vercel.app/reviews`)
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
