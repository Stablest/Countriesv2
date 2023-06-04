'use client'

import { ReactNode, createContext, useEffect, useRef, useState } from "react";
import { URL } from "../interfaces/Url";
import { CountryType } from "../interfaces/CountryTypes";

type CountriesContextProps = {
    countries: CountryType[]
}

type CountriesContextProviderProps = {
    children: ReactNode
}

export const CountriesContext = createContext<CountriesContextProps>({
    countries: [],
})

export function CountriesContextProvider({ children }: CountriesContextProviderProps) {
    const [countries, setCountries] = useState<CountryType[]>([])

    useEffect(() => {
        try {
            fetch(URL.ALL).then(res => {
                return res.json()
            }).then(data => {
                setCountries([...data])
            })
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <CountriesContext.Provider value={{ countries: countries }}>
            {children}
        </CountriesContext.Provider>
    )
}