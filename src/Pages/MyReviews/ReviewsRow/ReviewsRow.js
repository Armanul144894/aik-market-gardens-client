import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import userLogo from "../../../assets/users/user.png";

const ReviewsRow = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { serviceName, price, image, customer } = review;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded-full w-24 h-24">
              {user?.uid ? (
                <img src={image} alt="Avatar Tailwind CSS Component" />
              ) : (
                <img src={userLogo} alt="" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{customer}</div>
          {/* <div className="text-sm opacity-50">{phone}</div> */}
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
    </tr>
  );
};

export default ReviewsRow;
