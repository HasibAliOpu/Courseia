import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-sky-300 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Item 1</Link>
            </li>
            <li tabIndex="0">
              <Link to={"/"} className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <Link to={"/"}>Submenu 1</Link>
                </li>
                <li>
                  <Link to={"/"}>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/"}>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className=" btn btn-ghost normal-case text-2xl">
          Courseia
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href={"#courses"}>Courses</a>
          </li>
          <li>
            <a href={"#about"}>About Us</a>
          </li>
          <li>
            <a href={"#contact"}>Contact Us</a>
          </li>
          <li>
            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="font-bold text-error"
              >
                LogOut
              </button>
            ) : (
              <Link to="/Login">Login</Link>
            )}
          </li>
          <li>
            <span className="text-white">{user ? user?.displayName : ""}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
