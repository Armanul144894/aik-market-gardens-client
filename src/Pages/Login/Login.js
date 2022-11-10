import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/login/images2.jpg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitles";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const { user, signIn, setUser, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  useTitle("Login");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };
        setUser(user);
        //get jwt token
        fetch("https://aik-market-gardens-server.vercel.app/jwt", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("Success:", data);
            localStorage.setItem("aikToken", data.token);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  if (loading) {
    return <div className="loader absolute left-1/2 top-20"></div>;
  }
  return (
    <div>
      <div className="hero w-full my-10">
        <div className="hero-content flex-col gap-14 lg:flex-row">
          <div className="text-center lg:text-left">
            <img className="w-96 h-96" src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="text-center">
                <h2 className="text-4xl font-bold ">Login</h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center mb-5">
              <p>
                New to AIK Market Gardens?{" "}
                <Link to="/register" className="text-red-600 font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="my-8">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
