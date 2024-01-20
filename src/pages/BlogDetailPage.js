import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetailSkeleton from "../components/BlogDetailSkeleton";
import Layout from "../components/Layout";
import he from "he";
import { baseURL } from "../utils/utils";
import formatDate from "../utils/date";

function BlogDetailPage() {
    
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getPost(id) {
            try {
                const response = await fetch(`${baseURL}/post/${id}`);
                const data = await response.json();

                if (data[0].is_published) {
                    setContent(he.decode(data[0].content));
                    setTitle(he.decode(data[0].title));
                    setCreatedAt(data[0].created_at);
                    setIsLoading(false);
                }
            } catch(err) {
                console.error(err);
                return;
            }
        }

        getPost(id);
    }, [id])

    return (
        <Layout>
        <div>
        {isLoading ? 
            <BlogDetailSkeleton />
            : 
            <>
            <div className="flex flex-col items-center justify-center p-5">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
            <p className="text-grey text-lg p-3">{formatDate(createdAt)}</p>
            </div>
            <div className="flex items-center justify-center"> 
            <div className="text-white blog text-lg pl-60 pr-60 mt-10 leading-8" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
            </>
        }
        </div>
        </Layout >
    )
}

export default BlogDetailPage;
