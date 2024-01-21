import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BlogDetailSkeleton() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="max-w-4xl w-10/12 md:w-1/2 xl:w-1/3 mx-auto my-5 p-4 rounded-md shadow-lg bg-black">
                    <Skeleton height={60} width="100%" enableAnimation={true} />

                <div className="space-y-4 mt-32">
                    {Array(30).fill().map((_, idx) => (
                        <Skeleton key={idx} height={20} width="100%" enableAnimation={true} />
                    ))}
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default BlogDetailSkeleton;
