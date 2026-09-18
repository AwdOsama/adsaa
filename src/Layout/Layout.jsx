import React from "react";
import Footer from "./../Components/Footer";
import Navbar from "./../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-20 grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
