import React from 'react'
const Area = ({area}) => {
    return (
        <div className="flex flex-col items-center justify-center col-span-2 row-span-1
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            <h1 className="text-center text-2xl lg:text-4xl tracking-widest uppercase">{area}</h1>
        </div>
      
    )
}
export default Area
