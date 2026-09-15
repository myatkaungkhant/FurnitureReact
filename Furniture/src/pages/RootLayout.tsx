import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
