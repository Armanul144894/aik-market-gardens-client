import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
