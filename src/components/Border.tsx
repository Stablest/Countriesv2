import { ReactNode } from "react"

type BorderProps = {
    children: string | string[]
}

const Border = ({ children }: BorderProps) => {
    return (
        <div className="bg-white h-8 px-6 flex items-center rounded-sm drop-shadow-md">{children}</div>
    )
}

export { Border }