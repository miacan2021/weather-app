import React from 'react'
import useDarkMode from '../hook/useDarkMode'


const Icon = (props) => {
    const source = `../icons/${props.num}.svg`

    return (
        <div className="flex flex-col items-center justify-center p-3 col-span-1 row-span-2
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
           <img src={source} alt="weather icon" className="w-3/12 lg:w-6/12" />
            <p className="text-md lg:text-2xl tracking-wider">{props.weather}</p>
        </div>
    )
}

export default Icon
