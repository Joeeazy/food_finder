import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import Services from "./Services";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Services />
    </div>
  );
}
