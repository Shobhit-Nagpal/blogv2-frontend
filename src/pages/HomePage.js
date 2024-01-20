import React, { useState, useEffect } from "react";
import BlogContainer from "../components/BlogContainer";
import { baseURL } from "../utils/utils";
import Layout from "../components/Layout";
import BlogContainerSkeleton from "../components/BlogContainerSkeleton";
import he from "he";
import formatDate from "../utils/date";

function HomePage() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {

                const response = await fetch(`${baseURL}/`);
                const data = await response.json();
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
        <div className="flex justify-center items-center">
        <h2 className="text-center text-white text-3xl">Blog</h2>
        </div>
        { isLoading ? 
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
            <div className="flex flex-col gap-10 items-center h-screen m-10">
            {
                posts.map((post) => {
                return <BlogContainer 
                    className="text-center" 
                    key={post.id} 
                    id={post.id} 
                    title={he.decode(post.title)} 
                    content={he.decode(post.content)}
                    created_at={formatDate(post.created_at)} 
                    fromDashboard={false}
                />
            })

            }
            </div>
        }
        </Layout>
    )
}

export default HomePage;
