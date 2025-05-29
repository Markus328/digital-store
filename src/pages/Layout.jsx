import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Layout = ({ children, className, style }) => {
  return (
    <div className={`w-full h-full flex flex-col`}>
      <Header />
      <main className={`mt-15 ${className}`} style={style}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
