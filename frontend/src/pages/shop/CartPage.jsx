import React from "react";
import { FaTrash } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useState } from "react";

export default function CartPage() {
  const [cart, refetch] = UseCart();
  const { user } = useContext(AuthContext);

  const [cartItems, setcartItems] = useState([]);

  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  //handle decrease price function
  const handleDecrease = (item) => {
    //console.log(item._id);
    if (item.quantity > 1) {
      fetch(`http://localhost:5000/carts/${item._id}`, {
        method: "PUT", // Specify the request method
        headers: { "Content-Type": "application/json" }, // Specify the content type
        body: JSON.stringify({ quantity: item.quantity - 1 }), // Send the data in JSON format
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id == item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          setcartItems(updatedCart);
        });
      refetch();
    } else {
      alert("Item Cannot be 0");
    }
  };

  //handle Increase Price
  const handleIncrease = (item) => {
    //console.log(item._id);
    fetch(`http://localhost:5000/carts/${item._id}`, {
      method: "PUT", // Specify the request method
      headers: { "Content-Type": "application/json" }, // Specify the content type
      body: JSON.stringify({ quantity: item.quantity + 1 }), // Send the data in JSON format
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id == item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        setcartItems(updatedCart);
      });
    refetch();
  };

  //handle delete button
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //calculate total price
  const cartSubTotal = cart.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);

  const orderTotal = cartSubTotal;
  return (
    <div className="section-container">
      {/* banner */}
      <div className="bg-gradient-to-r from-slate-50 from-0% to-[#fcfcfc66] to-100%">
        <div className="py-36 flex flex-col  justify-center items-center gap-8">
          <div className="md:w-1/2 px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold leading-snug md:leading-snug text-black">
              Items Added To The Food <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
        {/* left side */}
      </div>

      {/* Cart Tables */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-sm text-xl">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="text-black text-xl">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3 text-black text-xl">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Food Image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-black text-xl">
                    {item.name}
                    <br />
                    <span className="badge bg-green border-transparent text-white">
                      {item.category}
                    </span>
                  </td>
                  <td className="text-black text-xl">
                    <button
                      className="btn btn-xs bg-transparent border-none font-bold text-black hover:bg-green hover:text-white"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <input
                      className="bg-transparent w-10 mx-2 text-center overflow-hidden appearance-none md:mt-3 "
                      type="number"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                    />
                    <button
                      className="btn btn-xs bg-transparent border-none font-bold text-black hover:bg-green hover:text-white"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </td>
                  <td className="text-black text-xl">
                    {calculatePrice(item).toFixed(2)}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost text-red text-xl btn-xs"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* cart sum totals */}
      <div className="my-14 flex flex-col md:flex-row items-start justify-around text-black text-xl">
        <div className="md-w-1/2 space-y-3 ">
          <h3 className="font-bold">Customer Details</h3>
          {/* <p>Name: {user.displayName}</p> */}
          {/* <p>Email: {user.email}</p> */}
          {/* <p>User_Id: {user.uid || "You"}</p> */}
        </div>
        <div className="md-w-1/2 space-y-3 mr-20 md:pt-5">
          <h3 className="font-bold">Shopping details</h3>
          <p>Total Items: {cart.length}</p>
          <p>Total Price: ${orderTotal.toFixed(2)}</p>
          <button className="btn bg-green text-white border-transparent text-xl">
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}
