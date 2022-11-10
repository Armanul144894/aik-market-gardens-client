import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitles";

const NotFound = () => {
  useTitle("Blank Page");
  return (
    <div className="text-center ">
      <div className=" card shadow">
        <div className="card-body">
          <h2 className="text-danger">Opps!!</h2>
          <h4 className="text-danger">404 Not Found</h4>
          <p>
            Go back to:{" "}
            <Link to="/" className="text-orange-500">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
