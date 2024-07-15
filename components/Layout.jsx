import React, { useEffect } from "react";

import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    window.location.hash = "";
  }, []);

  return (
    <div className="layout">
      <Head>
        <title>Puskopad Sounds Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
