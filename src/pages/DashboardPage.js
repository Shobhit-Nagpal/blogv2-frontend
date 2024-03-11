import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogContainer from "../components/BlogContainer";
import BlogContainerSkeleton from "../components/BlogContainerSkeleton";
import Layout from "../components/Layout";
import { useAdmin } from "../context/AdminContext";
import { baseURL } from "../utils/utils";
import he from "he";
import formatDate from "../utils/date";

function DashboardPage() {

    const { setIsAdmin } = useAdmin();
    const cookies = Cookies.get()
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    if (!cookies.token) {
        setIsAdmin(false);
        navigate("/login");
    }

    useEffect(() => {
        async function getData() {
            try {
                const token = Cookies.get("token");
                const response = await fetch(`${baseURL}/dashboard`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    method: "GET",
                    credentials: "include"
                });
                const data = await response.json();

                if (response.status !== 200) {
                    setIsLoading(false);
                    return;
                }

                setPosts(data);
                setIsLoading(false);
            } catch (err) {
                console.error(err); 
                return;
            }
        }
        getData();
    }, []);

    return (
        <Layout>
        <div className="flex items-center justify-center">
        <h1 className="text-white text-center text-4xl font-bold mt-10">Dashboard</h1>
        </div>

        {isLoading ? 
            <div className="flex flex-col gap-11 items-center h-screen m-10">
            <BlogContainerSkeleton />
            <BlogContainerSkeleton />
            <BlogContainerSkeleton />
            </div>
            :
            posts.length === 0 ? 
            <>
            <div className="flex justify-center items-center h-screen">
            <p className="text-center mb-40 text-white text-2xl">There are no posts currently </p> 
            </div>
            </>
            : 
            <div className="flex flex-col gap-10 items-center m-10">
            {
                posts.map((post) => {
                return <BlogContainer 
                    className="text-center" 
                    key={post.id} 
                    id={post.id} 
                    title={he.decode(post.title)} 
                    content={he.decode(post.content)}
                    created_at={formatDate(post.created_at)} 
                    is_published={post.is_published}
                    fromDashboard={true}
                />
            })

            }
            </div>
        }
        </Layout>
    )
}

export default DashboardPage;
