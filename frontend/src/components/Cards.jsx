import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  // console.log(item)
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div
      to={`/menu/${item._id}`}
      className="card shadow-xl relative mr-5 md:my-5"
    >
      <div
        className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
          isHeartFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={handleHeartClick}
      >
        <FaHeart className="w-5 h-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="hover:scale-105 transition-all duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title text-black">{item.name}!</h2>
        </Link>
        <p className="text-black">{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">Ksh </span> {item.price}
          </h5>
          <button className="btn bg-green text-white">Add to Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaHeart } from "react-icons/fa";

// export default function Cards({ item }) {
//   const [isHeartFiltered, setIsHeartFiltered] = useState(false);

//   const handleHeartClick = () => {
//     setIsHeartFiltered(!isHeartFiltered);
//   };
//   return (
//     <div className="card w-96 shadow-sm rounded-2xl shadow-green px-5 py-10 ml-2 mb-6 mt-8 sm:ml-4 relative">
//       <div
//         className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
//           isHeartFiltered ? "text-rose-600" : "text-white"
//         }`}
//         onClick={handleHeartClick}
//       >
//         <FaHeart className="h-5 w-5 cursor-pointer " />
//       </div>
//       <Link to={`/menu/${item._id}`}>
//         <figure>
//           <img
//             src={item.image}
//             alt="Food Menu"
//             className="hover:scale-105 transition-all duration-200 md:h-72"
//           />
//         </figure>
//       </Link>
//       <div className="card-body">
//         <Link to={`/menu/${item._id}`}>
//           <h2 className="text-black">{item.name}</h2>
//         </Link>
//         <p>Description of the Item</p>
//         <div className="card-actions justify-between items-center mt-2">
//           <h1 className="font-semibold text-black ">
//             <span className="font-semibold text-rose-500">Ksh</span>{" "}
//             {item.price}
//           </h1>
//           <button className="button px-4 py-3 rounded-lg  bg-green text-white">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
