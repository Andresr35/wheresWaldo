import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FirstMap from "./pages/FirstMap";
import SecondMap from "./pages/SecondMap";
import ThirdMap from "./pages/ThirdMap";
import Leaderboard from "./pages/Leaderboard";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/gameOne", element: <FirstMap /> },
    { path: "gameTwo", element: <SecondMap /> },
    { path: "gameThree", element: <ThirdMap /> },
    { path: "leaderboard", element: <Leaderboard /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
