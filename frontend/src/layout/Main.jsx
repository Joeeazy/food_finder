import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

export default function Main() {
  return (
    <div className="bg-primaryBG">
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
