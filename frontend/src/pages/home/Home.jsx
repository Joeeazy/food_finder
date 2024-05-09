import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import SpecialDishes from "./SpecialDishes";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <SpecialDishes />
    </div>
  );
}
