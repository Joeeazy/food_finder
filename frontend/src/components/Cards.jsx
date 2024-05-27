import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Cards = ({ item }) => {
  //destructure items from item prop
  const { name, image, price, recipe, category, _id } = item;
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext);
  //console.log(user);

  const navigate = useNavigate();
  const location = useLocation();

  // add to cart function
  const handleAddtoCart = (item) => {
    //check if user is logged in if there is user he can add to cart
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
        category,
      };
      //console.log(cartItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center-end",
              icon: "success",
              title: "Food Added To Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login or Create Account ",
        text: "Please Login To add Products",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
        }
      });
    }
  };

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
          <button
            className="btn bg-green text-white"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart{" "}
          </button>
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
