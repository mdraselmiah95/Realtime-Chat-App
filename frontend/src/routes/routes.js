import { createBrowserRouter } from "react-router-dom";
import Chat from "../pages/Chat";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";
import SetAvatar from "../components/SetAvatar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
    errorElement: <Error />,
  },
  {
    path: "/setAvatar",
    element: <SetAvatar />,
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
