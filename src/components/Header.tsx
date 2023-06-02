'use client'

import { useEffect } from "react"

const Header = () => {
    const checkTheme = () => {
        if (!window)
            return
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches)
            console.log('DARK THEME')
    }

    useEffect(() => {
        checkTheme()
    }, [])


    return (
        <header className='bg-white flex justify-between px-4 py-10 drop-shadow-sm'>
            <span className="text-lg font-bold">Where in the world?</span>
            <button className="flex justify-between items-center gap-x-2">
                <img src="./moon.svg" alt="moon" className='w-6 h-6' />
                <span className="text-base">Dark Mode</span>
            </button>
        </header>
    )
}

export { Header }