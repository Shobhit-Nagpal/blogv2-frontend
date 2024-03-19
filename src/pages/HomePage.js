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
      <div className="w-full flex flex-col items-center min-h-screen">
        <h2 className="text-center text-white text-3xl mt-10">Blog</h2>
        {isLoading ? (
          <div className="w-full flex flex-col gap-11 items-center m-10">
            <BlogContainerSkeleton />
            <BlogContainerSkeleton />
            <BlogContainerSkeleton />
          </div>
        ) : posts.length === 0 ? (
          <div className="flex-grow flex justify-center items-center">
            <p className="text-center text-white text-2xl">There are no posts currently</p>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-10 items-center m-10">
            {posts.map((post) => (
              <BlogContainer
                className="text-center"
                key={post.id}
                id={post.id}
                title={he.decode(post.title)}
                content={he.decode(post.content)}
                created_at={formatDate(post.created_at)}
                fromDashboard={false}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
