import { ReactNode } from "react"
import { Pair } from "./Pair"
import Link from "next/link"

type CountryProps = {
    children?: ReactNode
    flags: string[],
    name: string,
    population: number,
    region: string,
    capital: string[],
}

const Country = ({ flags, name, population, region, capital }: CountryProps) => {
    return (
        <>
            <Link href={`/${encodeURI(name)}`} className="dark:bg-dark-blue bg-white w-64 h-80 my-10 rounded-lg drop-shadow-md overflow-hidden">
                <div className="h-3/6 flex justify-center items-center">
                    <img src={flags[1]} alt={`Flag of ${name}`} className="h-full w-full" />
                </div>
                <div className="px-8 py-4 h-3/6 flex flex-col items-start">
                    <span className="font-bold text-lg">{name}</span>
                    <div className="flex flex-col justify-center mt-3 gap-y-1">
                        <Pair title="Population:">{population.toLocaleString('pt-BR')}</Pair>
                        <Pair title="Region:">{region}</Pair>
                        <Pair title="Capital:">{capital[0]}</Pair>
                    </div>
                </div>
            </Link>
        </>
    )
}

export { Country }