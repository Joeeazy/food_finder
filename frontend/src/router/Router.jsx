import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import Main from "../layout/Main";
import Home from "../pages/home/Home.jsx";
import Menu from "../pages/shop/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
