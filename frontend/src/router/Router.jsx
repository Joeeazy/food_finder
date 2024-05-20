import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import Main from "../layout/Main";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Home from "../pages/home/Home.jsx";
import Menu from "../pages/shop/Menu";
// import PrivateRouter from "../privateRouter/PrivateRouter";

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
        element: (
          // <PrivateRouter>
          <Menu />
          // </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
