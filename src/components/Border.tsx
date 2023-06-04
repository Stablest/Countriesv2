import { CountryType } from "@/utils/interfaces/CountryTypes"
import Link from "next/link"
import { useEffect, useState } from "react"

type BorderProps = {
    children: string,
    allCountries: CountryType[],
}

const Border = ({ children, allCountries }: BorderProps) => {
    const [routeName, setRouteName] = useState<string>('')

    useEffect(() => {
        allCountries.forEach((element: CountryType, index: number) => {
            if (element.cca2 === children || element.cca3 === children || element.ccn3 === children || element.cioc === children)
                setRouteName(element.name.common)
        })
    }, [])

    return (
        <Link href={`/${routeName}`} className="dark:bg-dark-blue bg-white h-8 px-6 flex items-center rounded-sm drop-shadow-md">{children}</Link>
    )
}

export { Border }