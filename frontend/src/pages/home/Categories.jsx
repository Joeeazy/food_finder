import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 breakfast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(48 desserts)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(254 Items)",
    image: "/images/home/category/img4.png",
  },
];

export default function Categories() {
  return (
    <div className="section-container py-16 bg-slate-50 mt-20 mb-28">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title mt-15">Popular Categories</h2>
      </div>
      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-20 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg shadow-green rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt="food image"
                className="bg-[#3dea12dc] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1 text-black">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
