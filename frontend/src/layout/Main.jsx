import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <div className="bg-primaryBG">
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
