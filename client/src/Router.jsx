import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FirstMap from "./pages/FirstMap";
import SecondMap from "./pages/SecondMap";
import ThirdMap from "./pages/ThirdMap";
import Leaderboard from "./pages/Leaderboard";

const Router = () => {
  const url =
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://whereswaldo-production.up.railway.app";

  const router = createBrowserRouter([
    { path: "/", element: <Home url={url} /> },
    { path: "/gameOne", element: <FirstMap url={url} /> },
    { path: "gameTwo", element: <SecondMap url={url} /> },
    { path: "gameThree", element: <ThirdMap url={url} /> },
    { path: "leaderboard", element: <Leaderboard url={url} /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
