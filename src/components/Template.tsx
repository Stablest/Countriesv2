import { ReactNode } from "react"
import { Header } from "./Header"

type TemplateProps = {
    children: ReactNode,
}

const Template = ({ children }: TemplateProps) => {
    return (
        <>
            <Header></Header>
            <div className="bg-light-mode-background overflow-scroll">
                {children}
            </div>
        </>
    )
}

export { Template }