import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/pages/RootLayout";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "/contact", Component: Contact },
    ],
  },
]);
