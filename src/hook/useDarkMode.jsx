import {useEffect, useState} from 'react'

const useDarkMode = () => {
    const currentTheme = 
    window.matchMedia('(prefers-color-scheme: dark)').matches ?
     'dark' : 'light'
    const [theme, setTheme] = useState(currentTheme)
    const colorTheme = theme === 'dark' ? 'light':'dark'
    useEffect(() => {
       document.documentElement.classList.remove(colorTheme)
       document.documentElement.classList.add(theme)
       localStorage.setItem('theme', theme)
    }, [theme, colorTheme])
    return [colorTheme, setTheme]
}

export default useDarkMode
