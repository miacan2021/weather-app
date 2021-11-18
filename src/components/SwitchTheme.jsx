import React from 'react'
import useDarkMode from '../hook/useDarkMode'

const SwitchTheme = () => {
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <div className="fixed top-2 left-2 p-2 cursor-pointer bg-gray-50 rounded bg-opacity-30 backdrop-filter backdrop-blur-md shadow-md dark:bg-gray-800 dark:bg-opacity-40">
        <span onClick={() => setTheme(colorTheme)} className="w-8 h-8 flex items-center justify-center">
        {colorTheme === 'light'?
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            :
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    } 
    </span>
     </div>
    )
}

export default SwitchTheme
