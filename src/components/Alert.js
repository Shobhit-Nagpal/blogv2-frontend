import React from "react";

function Alert({ isError, message }) {
    return (
        <div className={`bg-${isError ? 'red' : 'green'} border-t-4 border-${isError ? 'red' : 'green'} rounded-b text-white px-4 py-3 shadow-md fixed top-4 right-4 left-4 md:right-4 md:left-auto w-full md:w-1/3 lg:w-1/4 xl:w-1/6 rounded-s-lg`} role="alert">
            <div className="flex">
                <div className="py-1">
                    <svg className={`fill-current h-6 w-6 ${isError ? 'text-red-500' : 'text-green-500'} mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        {isError ? (
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" />
                        ) : (
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" />
                        )}
                    </svg>
                </div>
                <div>
                    <p className="font-bold text-xl">{isError ? 'Error' : 'Success'}</p>
                    <p className="text-sm md:text-lg">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;
