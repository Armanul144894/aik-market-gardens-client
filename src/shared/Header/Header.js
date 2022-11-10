import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/img1.png";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logout Successfully");
      })
      .catch((error) => console.log(error));
  };
  const menuItems = (
    <>
      <Link className="font-semibold btn btn-ghost ml-5" to="/">
        Home
      </Link>

      <Link className="font-semibold btn btn-ghost ml-5" to="/blogs">
        Blogs
      </Link>
      {user?.email ? (
        <>
          <Link className="font-semibold btn btn-ghost ml-5" to="/myReviews">
            My Reviews
          </Link>
          <Link className="font-semibold btn btn-ghost ml-5" to="/addServices">
            Add Services
          </Link>
          <button
            onClick={handleLogout}
            className=" rounded btn-ghost font-semibold ml-5"
          >
            Logout
          </button>
        </>
      ) : (
        <Link className="font-semibold btn btn-ghost ml-5" to="/login">
          Login
        </Link>
      )}
      <Link className="font-semibold btn btn-ghost ml-5" to="/blank">
        Blank-Routes
      </Link>
    </>
  );

  return (
    <div className="navbar h-20 bg-base-100 mb-20 pt-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="w-48 normal-case text-xl">
          <div className="flex flex-col">
            <img className="h-20" src={logo} alt="" />
            <h3 className="font-bold">MARKET GARDENS</h3>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;
