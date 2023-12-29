import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FirstMap from "./pages/FirstMap";
import SecondMap from "./pages/SecondMap";
import ThirdMap from "./pages/ThirdMap";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/gameOne", element: <FirstMap /> },
    { path: "gameTwo", element: <SecondMap /> },
    { path: "gameThree", element: <ThirdMap /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
