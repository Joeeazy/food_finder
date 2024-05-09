import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../components/Cards";

export default function SpecialDishes() {
  const [recipes, setRecipes] = useState([]);

  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        //console.log(specials);
        setRecipes(specials);
      });
  }, []);

  //   react slick settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section-container h-[720px] bg-white py-10 mt-30">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">
          Standout Dishes From{" "}
          <span className="bg-gradient-to-r from-green to bg-emerald-500  text-transparent bg-clip-text">
            Our Menu
          </span>
        </h2>
        <Slider {...settings}>
          {recipes.map((item, id) => (
            <Cards key={id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
