import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

function BlogContainerSkeleton() {
    return (
        <div className="max-w-2xl w-10/12 md:w-1/2 xl:w-1/3  mx-auto my-5 p-4 border border-grey rounded-md shadow-lg bg-black" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', width: '100%' }}>
                <Skeleton height={30} width={`80%`} enableAnimation={true} baseColor={"#808080"} />
            </div>
            <div style={{ display: 'inline-block', width: '100%', marginTop: '8px' }}>
                <Skeleton height={20} width={`60%`} enableAnimation={true} baseColor={"#808080"} />
            </div>
        </div>
    );
}
export default BlogContainerSkeleton;
