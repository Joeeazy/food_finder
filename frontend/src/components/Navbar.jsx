import logo from "/logo.png";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import UseCart from "../hooks/UseCart";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

  const [cart, refetch] = UseCart();
  //console.log(cart);

  //handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = (
    <>
      <li>
        <a className="text-green" href="/">
          Home
        </a>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2 bg-slate-50">
            <li>
              <a href="/menu">All</a>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Pizza</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Services</summary>
          <ul className="p-2 bg-slate-50">
            <li>
              <a>Online Booking</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md shadow-emerald-100 bg-slate-50 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            ></ul>
          </div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          {/* search icon */}
          <button className="btn btn-ghost btn-circle hidden lg:flex text-black">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* cart */}
          <Link to="cart-page">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-3 flex items-center justify-center text-black "
            >
              <div className="indicator hidden lg:flex">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm text-black bg-slate-100 border-transparent indicator-item">
                  {cart.length || 0}
                </span>
              </div>
            </div>
          </Link>

          {/* Login dialog */}
          {user ? (
            <Profile user={user} />
          ) : (
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white"
            >
              <FaUser /> Login
            </button>
          )}
          <Modal />
        </div>
      </div>
    </header>
  );
}
