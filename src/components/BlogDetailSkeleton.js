import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function BlogDetailSkeleton() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="max-w-4xl w-1/2 mx-auto my-5 p-4 rounded-md shadow-lg bg-black">
                    <Skeleton height={40} width="100%" enableAnimation={true} />

                <div className="space-y-4 mt-10">
                    {Array(30).fill().map((_, idx) => (
                        <Skeleton key={idx} height={20} width="100%" enableAnimation={true} />
                    ))}
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default BlogDetailSkeleton;
