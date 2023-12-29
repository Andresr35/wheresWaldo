import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FirstMap from "./pages/FirstMap";
import SecondMap from "./pages/SecondMap";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/gameOne", element: <FirstMap /> },
    { path: "gameTwo", element: <SecondMap /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
