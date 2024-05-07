import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ item }) {
  return (
    <div className="card w-96 shadow-xl md:mt-10">
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="Food Menu"
            className="hovr:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <p>{item.name}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h1 className="font-semibold text-sm text-red">
            <span>Ksh</span>
            {item.price}
          </h1>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
