import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";

export default function Home() {
  return (
    <div className="h-screen bg-white bg-cover">
      <Banner />
      <Categories />
      <SpecialDishes />
    </div>
  );
}
