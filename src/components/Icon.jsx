import React from 'react'

const Icon = (props) => {
    const imgCode = props.num;
    const num = imgCode.substr(0, props.num.length - 1)
    const sourceD = `../icons/${num}d.svg`
    const sourceN = `../icons/${num}n.svg`
    const darkBool = !document.documentElement.classList.contains('dark')

    return (
        <div className="flex flex-col items-center justify-center p-3 col-span-1 row-span-2
        bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
       { darkBool ?
           <img src={sourceD} alt="weather icon" className="w-3/12 lg:w-6/12" />
           :
           <img src={sourceN} alt="weather icon" className="w-3/12 lg:w-6/12" />
           } 
            <p className="text-md lg:text-2xl tracking-wider">{props.weather}</p>
        </div>
    )
}

export default Icon
