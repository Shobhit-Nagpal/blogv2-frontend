import Cookies from "js-cookie";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Layout from "../components/Layout";
import { useAdmin } from "../context/AdminContext";

function BlogEditPage() {

    const { setIsAdmin } = useAdmin();
    const { id } = useParams();
    const navigate = useNavigate();
        
    const cookies = Cookies.get()

    if (!cookies.token) {
        setIsAdmin(false);
        navigate("/login");
    }


    return (
        <Layout>
        <div>
        <Editor isEdit={true} id={id} />
        </div>
        </Layout>
    )
}

export default BlogEditPage;
