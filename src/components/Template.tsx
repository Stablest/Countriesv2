import { ReactNode } from "react"
import { Header } from "./Header"
import { Nunito_Sans } from 'next/font/google'

const font = Nunito_Sans({ subsets: ['latin'] })

type TemplateProps = {
    children: ReactNode,
}

const Template = ({ children }: TemplateProps) => {
    return (
        <body className={`${font.className} min-h-screen dark:text-white text-black dark:bg-dark-mode-background bg-light-mode-background`}>
            <Header></Header>
            <div className="dark:bg-dark-mode-background bg-light-mode-background">
                {children}
            </div>
        </body>
    )
}

export { Template }