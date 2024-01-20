import Cookies from "js-cookie";
import React, { createContext, useContext, useState, useEffect } from "react";

const AdminContext = createContext();

const useAdmin = () => {
    return useContext(AdminContext);
}

function AdminProvider({ children }) {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const token = Cookies.get("token");

        if (token !== undefined) {
            setIsAdmin(true);
        }
    }, [])

    return (
        <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        { children }
        </AdminContext.Provider>
    )
}

export { AdminProvider, useAdmin };
