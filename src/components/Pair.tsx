type PairProps = {
    children: string | string[],
    title: string,
}

const Pair = ({ children, title }: PairProps) => {
    return (
        <div className="flex items-center gap-x-1">
            <div className="font-semibold text-sm">{title}</div>
            <div className="font-light text-xs">{children}</div>
        </div>
    )
}

export { Pair }