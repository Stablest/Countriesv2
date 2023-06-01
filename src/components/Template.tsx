import { ReactNode } from "react"

type TemplateProps = {
    children: ReactNode,
}

const Template = ({ children }: TemplateProps) => {
    return (
        <>
            <header className='bg-white flex justify-between px-4 py-10 drop-shadow-sm'>
                <span className="text-lg font-bold">Where in the world?</span>
                <button className="flex justify-between items-center gap-x-2">
                    <img src="./moon.svg" alt="moon" className='w-6 h-6' />
                    <span className="text-base">Dark Mode</span>
                </button>
            </header>
            <div className="bg-light-mode-background overflow-scroll">
                {children}
            </div>
        </>
    )
}

export { Template }