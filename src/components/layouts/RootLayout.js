import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-16">{children}</main>
      <Footer />
    </>
  );
}
