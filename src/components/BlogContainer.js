import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import { baseURL } from "../utils/utils";

function BlogContainer({id, title, content, created_at, is_published, fromDashboard}) {
    
    const { isAdmin } = useAdmin();
    const navigate = useNavigate();

    function handleClick(id) {
        navigate(`/post/${id}`);
    }

    function editPost(e, id) {
        e.stopPropagation(); 
        navigate(`/post/edit/${id}`);
    }

    async function publishPost(e, id) {
        e.stopPropagation(); 
        const token = Cookies.get("token");
        try {
            const response = await fetch(`${baseURL}/post/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                method: "PUT",
                body: JSON.stringify({
                    id: id,
                    title: title,
                    content: content,
                    is_published: true
                }),
                credentials: "include"
            });

            if (response.status === 200) {
                navigate("/");
            }

        } catch(err) {
            console.error(err);
            return;
        }
    }

    async function archivePost(e, id) {
        e.stopPropagation();
        const token = Cookies.get("token");
        try {
            const response = await fetch(`${baseURL}/post/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                method: "PUT",
                body: JSON.stringify({
                    id: id,
                    title: title,
                    content: content,
                    is_published: false
                }),
                credentials: "include"
            });

            if (response.status === 200) {
                window.location.reload();
            }

        } catch(err) {
            console.error(err);
            return;
        }
    }

    async function deletePost(e, id) {
        e.stopPropagation();
        const token = Cookies.get("token");
        try {
            const response = await fetch(`${baseURL}/post/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                method: "DELETE",
                body: JSON.stringify({
                    id: id
                }),
                credentials: "include"
            });

            if (response.status === 200) {
                window.location.reload();
            }

        } catch(err) {
            console.error(err);
            return;
        }
    }

    return (
        <div className="border-solid border-2 border-grey rounded-md p-5 w-10/12 md:w-1/2 xl:w-1/3 cursor-pointer bg-black hover:border-white" onClick={() => {handleClick(id)}}>
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-white text-center text-3xl font-bold">{title}</h2>
        <p className="text-grey mt-3">{created_at}</p>
        </div>
        { isAdmin && fromDashboard ?
        <div className="flex items-center justify-center gap-5">
        <button className="bg-black border-solid border-2 border-grey p-3 rounded-md text-white mt-5" onClick={(e) => editPost(e, id)}>Edit</button>
        { is_published ? 
            <button className="bg-blue p-3 rounded-md text-white mt-5" onClick={(e) => archivePost(e, id)}>Archive</button>
            : 
            <button className="bg-green p-3 rounded-md text-black mt-5" onClick={(e) => publishPost(e, id)}>Publish</button>
        }
        <button className="bg-red p-3 rounded-md text-white mt-5" onClick={(e) => deletePost(e, id)}>Delete</button>
        </div>
            : (null)
        }
        </div>
    )
}

export default BlogContainer;
