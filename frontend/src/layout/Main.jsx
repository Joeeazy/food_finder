import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import SpecialDishes from "../pages/home/SpecialDishes";

export default function Main() {
  return (
    <div className="bg-primaryBG">
      <Navbar />
      <Outlet />
    </div>
  );
}
