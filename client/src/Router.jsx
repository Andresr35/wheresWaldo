import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FirstMap from "./pages/FirstMap";

const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/gameOne", element: <FirstMap /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
