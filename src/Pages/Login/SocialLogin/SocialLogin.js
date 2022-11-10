import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => error);
  };
  return (
    <div>
      <p className="mb-2">
        <span>---------------</span>{" "}
        <strong className="text-orange-500">Or With</strong>{" "}
        <span>---------------</span>
      </p>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline text-green-500 font-bold"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
