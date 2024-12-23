import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase.init";
import logo from "../../assets/FluentZen.png";

const Navbar = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const links = (
    <>
      <div className="flex gap-5 text-xl uppercase font-bold text-black">
        <Link to="/">home</Link>
        <Link to="/find-tutors">Find Tutors</Link>
        <Link to="/add-tutorials">Add Tutorials</Link>
        <Link to="/signIn">Login</Link>
        <Link to="/signUp">sign up</Link>
      </div>
    </>
  );

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log("sign out successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="bg-emerald-300">
        <div className="max-w-screen-2xl mx-auto flex justify-between pt-5 px-5">
          <div></div>
          <div><p className="text-black">Master Skills Faster with Expert Guidance</p></div>
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
        </div>
        <div className="navbar font-Figtree max-w-screen-2xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <img className="w-64" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div>
              <h1 className="text-black">{user?.email}</h1>
            </div>
            {user ? (
              <button onClick={handleSignOut} className="btn bg-gray-900">
                sign out
              </button>
            ) : (
              <Link to="/signIn" className="btn bg-gray-900">
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
