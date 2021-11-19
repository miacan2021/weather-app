import React from 'react'
import chooseIcon from './chooseIcon'

const Icon = (props) => {
    return (
        <div className="flex flex-col items-center justify-center p-3 col-span-1 row-span-2
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            {chooseIcon(props.num)}
            <p className="text-md lg:text-2xl tracking-wider">{props.weather}</p>
        </div>
    )
}

export default Icon
