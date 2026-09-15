import Header from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <div>Footer</div>
    </>
  );
}

export default RootLayout;
