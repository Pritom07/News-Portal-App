import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Components/Layouts/Homelayout/Homelayout";
import Newslayout from "./Components/Layouts/Newslayout/Newslayout";
import Authlayout from "./Components/Layouts/Authlayout/Authlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/news",
    element: <Newslayout></Newslayout>,
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
  },
  {
    path: "*",
    element: (
      <h1 className="text-red-800 text-4xl font-semibold flex justify-center items-center min-h-screen">
        404, Path not found
      </h1>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
