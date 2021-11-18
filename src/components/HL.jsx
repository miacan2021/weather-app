import React from 'react'

const Temp = ({high, low}) => {
    return (
        <div className="p-5 flex items-center justify-around col-span-1 row-span-1 bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            <div className="flex flex-col">
            <h2 className="text-mf lg:text-2xl tracking-wider">HIGH -</h2>
            <h1 className="text-center text-2xl lg:text-4xl tracking-wider">{high}°</h1>
            </div>
            <div className="flex flex-col items-center">
            <h2 className="text:md lg:text-2xl tracking-wider">LOW -</h2>
            <h1 className="text-center text-2xl lg:text-4xl tracking-wider">{low}°</h1>
            </div>
        </div>
    )
}

export default Temp
