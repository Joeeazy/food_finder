import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Cards from "../../components/Cards";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  //   loading data
  useEffect(() => {
    //fetches data from backend  api
    const fetchData = async () => {
      try {
        const res = await fetch("/menu.json");
        const data = await res.json();
        //console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error fetch data", error);
      }
    };
    // function call
    fetchData();
  }, []);

  //   function to filter data
  const filterItems = (category) => {
    // filter data by category if all === menu else filter by category
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //   show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  // sorting fucntion A-z z-A low-High High-low functionality
  const sortItems = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        //code
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic innit
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  //pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* menu banner */}
      <div className="section-container max-w-screen-2xl mx-auto bg-gradient-to-r from-slate-50 from-0% to-[#fcfcfc66] to-100%">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold leading-snug md:leading-snug text-black">
              For The Love Of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A] md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Nutternut Pumpkin, Tousen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="button bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop items */}
      <div className="section-container">
        {/* btns & sort dropdown */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* category buttons */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap text-black font-semibold">
            <button
              onClick={showAll}
              className={selectedCategory === "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory === "dessert" ? "active" : ""}
            >
              Deserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>
          {/* sorting filtering buttons */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4 " />
            </div>
            {/* select options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => sortItems(e.target.value)}
              vlaue={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>

        {/* products card */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4">
          {currentItems.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* paginations */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full text-black ${
              currentPage === index + 1 ? "bg-green text-white" : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
