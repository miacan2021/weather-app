import React from 'react'

const Temp = ({temp, feel}) => {
    return (
        <div className="flex flex-col items-center justify-around p-5 col-span-1 row-span-3 
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            <h2 className="uppercase text-center text-md lg:text-2xl tracking-wider">Current Temperatures</h2>
            <h1 className="text-center text-4xl lg:text-7xl tracking-wider">{temp}°</h1>
            <h2 className="uppercase text-md lg:text-center text-md lg:text-2xl tracking-wider">feels like</h2>
            <h1 className="text-center text-4xl tracking-wider">{feel}°</h1>
        </div>
    )
}

export default Temp
