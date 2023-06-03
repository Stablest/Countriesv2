'use client'

import { useLocalStorage } from "@/utils/hooks/useLocalStorage"
import { useEffect } from "react"

const Header = () => {
    const { value: darkMode, updateLocalStorage: updateDarkMode } = useLocalStorage<boolean>('dark-theme')

    const handleClick = () => {
        const checkDark = darkMode ? false : true
        updateDarkMode(checkDark)
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        if (typeof darkMode === 'boolean') {
            if (darkMode)
                return document.documentElement.classList.add('dark')
            return document.documentElement.classList.remove('dark')
        }
        if (window?.matchMedia('(prefers-color-scheme:dark)').matches) {
            document.documentElement.classList.add('dark')
            updateDarkMode(darkMode ? false : true)
        }
    }, [])

    return (
        <header className={` dark:bg-dark-blue 'bg-white' flex justify-between px-4 sm:px-10 xl:px-20 py-10 drop-shadow-md`}>
            <span className="text-lg font-bold">Where in the world?</span>
            <button className="flex justify-between items-center gap-x-2" onClick={handleClick}>
                <img src="./moon.svg" alt="moon" className='w-6 h-6 brightness-[0] saturate-[0%] invert-[100%] hue-rotate-[0deg] contrast-[180%]' />
                <span className="text-base">Dark Mode</span>
            </button>
        </header>
    )
}

export { Header }