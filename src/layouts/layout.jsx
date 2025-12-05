import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
}
