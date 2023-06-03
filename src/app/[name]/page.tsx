'use client'

import { Border } from "@/components/Border"
import { Pair } from "@/components/Pair"
import { Template } from "@/components/Template"
import { URL } from "@/utils/const/enums/url"
import { acessObjectKey } from "@/utils/functions/acessObjectKey"
import { CountryType, Currencies, NativeName } from "@/utils/interfaces/CountryTypes"
import Link from "next/link"
import { Suspense, useEffect, useRef, useState } from "react"

type PageProps = {
    params: { [key: string]: string },
}

const Page = ({ params }: PageProps) => {
    const name = params.name.replace('%20', ' ')
    const allCountries = useRef<CountryType[]>([])
    const [country, setCountry] = useState<CountryType | null>(null)

    useEffect(() => {
        try {
            fetch(URL.ALL).then(
                res => {
                    return res.json().then(
                        (data: CountryType[]) => {
                            const newCountries: CountryType[] = []
                            data.forEach((element: CountryType, index: number) => {
                                newCountries.push(element)
                                if (element.name.common === name)
                                    setCountry(element)
                            })
                            allCountries.current = newCountries
                        }
                    )
                }
            )
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <main className="px-8 xl:px-20 overflow-auto h-auto">
            {country ?
                <>
                    <Link href="/" className="flex justify-center items-center gap-x-4 dark:bg-dark-blue bg-white w-32 h-12 rounded-sm my-8 drop-shadow-md">
                        <img src="./arrow-left.svg" alt="Left arrow" className="w-6 brightness-[0] saturate-[0%] invert-[100%] hue-rotate-[0deg] contrast-[180%]" />
                        <div>Back</div>
                    </Link>
                    <div className="xl:flex xl:justify-center xl:items-center xl:gap-x-16">
                        <img src={country.flags[0]} alt={`Flag of ${country.name.common}`} className="my-12 mt-16 max-w-xl w-full" />
                        <div>
                            <div className="text-xl font-extrabold my-6">{country.name.common}</div>
                            <div className="flex flex-col gap-y-8 xl:flex-row xl:gap-x-24">
                                <div className="flex flex-col gap-y-2">
                                    <Pair title="Native Name:">{acessObjectKey<NativeName>(country.name.nativeName, 0).common}</Pair>
                                    <Pair title="Population:">{country.population.toLocaleString('pt-BR')}</Pair>
                                    <Pair title="Region:">{country.region}</Pair>
                                    <Pair title="Sub Region:">{country.subregion}</Pair>
                                    <Pair title="Capital:">{country.capital[0]}</Pair>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <Pair title="Top Level Domain:">{country.tld.toString()}</Pair>
                                    <Pair title="Currencies:">{Object.keys(country.currencies).map((_, index, array) =>
                                        acessObjectKey(country.currencies, index).name + (index + 1 !== array.length ? ', ' : '')
                                    )}</Pair>
                                    <Pair title="Languages:">{Object.keys(country.languages).map((_, index, array) =>
                                        acessObjectKey(country.languages, index) + (index + 1 !== array.length ? ', ' : '')
                                    )}</Pair>
                                </div>
                            </div>
                            <div className="font-semibold mt-8 my-4">Border Countries:</div>
                            <div className="flex flex-wrap gap-4 my-4 mb-8">
                                {country.borders.map((element, index) => <Border key={index} allCountries={allCountries.current}>{element}</Border>)}
                            </div>
                        </div>
                    </div>
                </> :
                <div ></div>}
        </main>
    )
}

export default Page 