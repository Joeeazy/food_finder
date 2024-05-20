import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
// import LoadingSpinner from "../components/LoadingSpinner";

export default function Main() {
  const { loading } = useContext(AuthContext);
  return (
    <div>
      {/* {loading ? (
        <LoadingSpinner />
      ) : ( */}
      <div>
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
      {/* )} */}
    </div>
  );
}

// import React, { useContext, useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../../src/App.css";
// import Footer from "../components/Footer";
// import { AuthContext } from "../contexts/AuthProvider";
// import LoadingSpinner from "../components/LoadingSpinner";

// const Main = () => {
//   const {loading} = useContext(AuthContext);

//   return (
//     <div className="bg-prigmayBG">
//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <div>
//         <Navbar />
//         <Outlet />
//         <Footer />
//       </div>
//       )}

//     </div>
//   );
// };

// export default Main;
