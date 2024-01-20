import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="bg-black">
        <div className="bg-black mx-auto max-w-screen-2xl">
        <Navbar />
        { children }
        <Footer />
        </div>
        </div>
    )
}

export default Layout;
