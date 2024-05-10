import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import { useEffect } from "react";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      Next
    </div>
  );
};
const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      Back
    </div>
  );
};
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
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

    nextArrow: <simpleNextArrow />,
    prevArrow: <simplePrevArrow />,
  };
  return (
    <div className="section-container h-[720px] bg-slate-50 py-13 mt-0 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">
          Standout Dishes From{" "}
          <span className="bg-gradient-to-r from-green to bg-emerald-500  text-transparent bg-clip-text">
            Our Menu
          </span>
        </h2>
        {/* arrow buttons */}
        <div className="md:absolute right-12 top-12 mb-10 md:mr-24">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className="btn p-2 rounded-full ml-5 bg-slate-500 text-white"
          >
            <FaAngleLeft className="w-8 h-8 p-1" />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="button p-2 rounded-full ml-5 bg-green text-white"
          >
            <FaAngleRight className="w-8 h-8 p-1" />
          </button>
        </div>
        <Slider
          ref={slider}
          {...settings}
          className="overflow-hidden mt-10 space-x-5"
        >
          {recipes.map((item, id) => (
            <Cards key={id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
