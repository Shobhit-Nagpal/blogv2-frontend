import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="bg-black mx-auto min-w-[360px] min-h-screen">
        <Navbar />
        { children }
        <Footer />
        </div>
    )
}

export default Layout;
