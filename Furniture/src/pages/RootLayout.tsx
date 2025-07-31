import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div>Footer</div>
    </>
  );
}

export default RootLayout;
