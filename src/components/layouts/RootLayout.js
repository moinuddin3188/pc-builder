import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen md:px-16 px-5">{children}</main>
      <Footer />
    </>
  );
}
