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
        <div className="flex justify-between items-center gap-12 p-4 md:p-8 md:gap-10">
        <div>
        <a className="text-grey text-2xl font-bold ml-32 hover:text-blue lg:ml-52" href="/">[s]</a>
        </div>
        <div className="flex justify-between items-center gap-10 mr-32 lg:mr-52">
        <a className="text-grey text-2xl font-bold hover:text-white" href="/">blog</a>
        <a className="text-grey text-2xl font-bold hover:text-white" href="https://shobhit-nagpal.github.io/portfolio/" rel="noreferrer" target="_blank">work</a>
        { isAdmin ? 
            <div className="flex justify-between items-cetner gap-10 m-5">
            <button className="text-black bg-green rounded-md p-3" onClick={() => {navigate("/post/create")}}>Create</button>
            <button className="text-white bg-black border-solid border-2 border-red rounded-md p-3" onClick={() => {logout()}}>Logout</button>
            </div>
            : 
            null }
        </div>
        </div>
    )
}

export default Navbar;
