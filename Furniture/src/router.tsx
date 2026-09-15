import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Blog from "@/pages/blogs/Blog";
import BlogDetails from "./pages/blogs/BlogDetails";
import Error from "./pages/Error";
import BlogRootLayout from "./pages/blogs/BlogRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      {
        path: "blogs",
        Component: BlogRootLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetails },
        ],
      },
    ],
  },
]);
