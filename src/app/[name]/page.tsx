'use client'

import { Border } from "@/components/Border"
import { Pair } from "@/components/Pair"
import { Template } from "@/components/Template"
import { URL } from "@/utils/const/enums/url"
import { acessObjectKey } from "@/utils/functions/acessObjectKey"
import { CountryType, Currencies, NativeName } from "@/utils/interfaces/CountryTypes"
import { Suspense, useEffect, useState } from "react"

type PageProps = {
    params: { [key: string]: string },
}

const Page = ({ params }: PageProps) => {
    const { name } = params

    const [country, setCountry] = useState<CountryType | null>(null)

    useEffect(() => {
        try {
            fetch(URL.NAME + name + '?fullText=true').then(
                res => {
                    return res.json().then(
                        (data: CountryType[]) => {
                            setCountry(data.pop() ?? null)
                        }
                    )
                }
            )
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <main className="px-8 h-[200vh]">
            {country ?
                <>
                    <a href="/" className="flex justify-center items-center gap-x-4 bg-white w-32 h-12 rounded-sm my-8 drop-shadow-md">
                        <img src="./arrow-left.svg" alt="Left arrow" className="w-6" />
                        <div>Back</div>
                    </a>
                    <img src={country.flags[0]} alt={`Flag of ${country.name.common}`} className="my-12 mt-16 max-w-xl w-full" />
                    <div className="text-xl font-extrabold my-6">{country.name.common}</div>
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-2">
                            <Pair title="Native Name:">{acessObjectKey<NativeName>(country.name.nativeName, 0).common}</Pair>
                            <Pair title="Population:">{country.population.toString()}</Pair>
                            <Pair title="Region:">{country.region}</Pair>
                            <Pair title="Sub Region:">{country.subregion}</Pair>
                            <Pair title="Capital:">{country.capital[0]}</Pair>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <Pair title="Top Level Domain:">{country.tld.toString()}</Pair>
                            <Pair title="Currencies:">{Object.keys(country.currencies).map((_, index) =>
                                acessObjectKey(country.currencies, index).name
                            )}</Pair>
                            <Pair title="Languages:">{Object.keys(country.languages).map((_, index) =>
                                acessObjectKey(country.languages, index)
                            )}</Pair>
                        </div>
                    </div>
                    <div className="font-semibold mt-8 my-4">Border Countries:</div>
                    <div className="flex flex-wrap gap-4">
                        {country.borders.map((element) => <Border>{element}</Border>)}
                    </div>
                </> :
                <div className="mx-auto py-16 text-4xl font-extrabold">Loading...</div>}
        </main>
    )
}

export default Page 