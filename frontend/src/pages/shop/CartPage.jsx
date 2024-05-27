import React from "react";
import { FaTrash } from "react-icons/fa";
import UseCart from "../../hooks/UseCart";
import Swal from "sweetalert2";

export default function CartPage() {
  const [cart, refetch] = UseCart();

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
                  <td className="text-black text-xl">{item.quantity}</td>
                  <td className="text-black text-xl">{item.price}</td>
                  <th>
                    <button
                      className="btn btn-ghost text-red text-xl btn-xs"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
