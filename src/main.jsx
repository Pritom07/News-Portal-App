import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Homelayout from "./Components/Layouts/Homelayout/Homelayout";
import Newslayout from "./Components/Layouts/Newslayout/Newslayout";
import Authlayout from "./Components/Layouts/Authlayout/Authlayout";
import CategoryNews from "./Components/CategoryNews/CategoryNews";
import Loginpage from "./Components/Pages/Loginpage/Loginpage";
import Signup from "./Components/Pages/Signup/Signup";
import Provider from "./Components/Provider/Provider";

const getBreakingNewsCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  const categories = data.data.news_category;

  const breakingNewsCategory = categories.find(
    (cat) => cat.category_name === "Breaking News"
  );
  return breakingNewsCategory ? breakingNewsCategory.category_id : "01";
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "/",
        loader: async () => {
          const breakingNewsId = await getBreakingNewsCategory();
          return redirect(`/eachcategory/${breakingNewsId}`);
        },
      },
      {
        path: "/eachcategory/:id",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/news",
    element: <Newslayout></Newslayout>,
  },
  {
    path: "/auth",
    element: <Authlayout></Authlayout>,
    children: [
      {
        path: "/auth/login",
        element: <Loginpage></Loginpage>,
      },
      {
        path: "/auth/signup",
        element: <Signup></Signup>,
      },
    ],
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
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
