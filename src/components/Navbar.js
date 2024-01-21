import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function Navbar() {
    const { isAdmin, setIsAdmin } = useAdmin();
    const navigate = useNavigate();

    function logout() {
        Cookies.remove("token");
        setIsAdmin(false);
        navigate("/");
    }

    return (
        <nav className="bg-black p-4 md:p-8">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl">
                <a className="text-grey text-2xl font-bold hover:text-blue" href="/">[s]</a>
                <div className="flex flex-wrap gap-4 md:gap-8">
                    <a className="text-grey text-xl md:text-2xl font-bold hover:text-white" href="/">blog</a>
                    <a className="text-grey text-xl md:text-2xl font-bold hover:text-white" href="https://shobhit-nagpal.github.io/portfolio/" rel="noreferrer" target="_blank">work</a>
                    {isAdmin && (
                        <div className="flex gap-4 md:gap-8">
                            <button className="text-black bg-green text-sm md:text-base rounded-md p-2 md:p-3" onClick={() => navigate("/post/create")}>Create</button>
                            <button className="text-white bg-black border-solid border-2 border-red text-sm md:text-base rounded-md p-2 md:p-3" onClick={logout}>Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
