import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
