import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "blogs", Component: Blog },
      { path: "blogs/:postId", Component: BlogDetails },
    ],
  },
]);
