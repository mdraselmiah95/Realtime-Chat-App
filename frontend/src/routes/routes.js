import { createBrowserRouter } from "react-router-dom";
import Chat from "../pages/Chat";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
