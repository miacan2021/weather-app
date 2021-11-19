import React from 'react'
import useHandleIcon from '../hook/useHandleIcon'

const Icon = (props) => {
    const icon = useHandleIcon(props.num)
    return (
        <div className="flex flex-col items-center justify-center p-3 col-span-1 row-span-2
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
            {icon}
            <p className="text-md lg:text-2xl tracking-wider">{props.weather}</p>
        </div>
    )
}

export default Icon
