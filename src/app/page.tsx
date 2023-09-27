'use client'

import { Country } from '@/components/Country'
import { REGION } from '@/utils/interfaces/Region'
import { CountriesContext } from '@/utils/context/countriesContext'
import { CountryType } from '@/utils/interfaces/CountryTypes'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const allCountries = useContext(CountriesContext)
  const [countries, setCountries] = useState<CountryType[]>([])
  const [region, setRegion] = useState<string>(REGION.ALL)
  const [inputText, setInputText] = useState<string>('')

  const handleUpdateRegion = (newRegion: string) => {
    setInputText('')
    if (newRegion === REGION.ALL) {
      setCountries(allCountries.countries)
      return setRegion(REGION.ALL)
    }
    const newCountries: CountryType[] = []
    allCountries.countries.forEach((element: CountryType) => {
      if (element.region === newRegion)
        newCountries.push(element)
    })
    setCountries(newCountries)
    setRegion(newRegion)
  }

  const handleOnChangeInput = (text: string | null) => {
    if (!text) {
      handleUpdateRegion(region)
      return setInputText('')
    }
    const newCountries: CountryType[] = []
    allCountries.countries.forEach((element: CountryType) => {
      if (element.name.common.toLowerCase().startsWith(text.toLowerCase()))
        newCountries.push(element)
    })
    setInputText(text)
    setCountries(newCountries)
  }

  useEffect(() => {
    setCountries(allCountries.countries)
  }, [allCountries])

  return (
    <main className='px-4 sm:px-10 xl:px-20 overflow-auto'>
      <div className='xl:flex xl:justify-between xl:items-center'>
        <div className='flex items-center px-8 gap-x-4 dark:bg-dark-blue bg-white drop-shadow-md h-12 max-w-md rounded-lg my-8 xl:my-16'>
          <img src="./magnifier.svg" alt="magnifier" className='w-5 h-5 dark:brightness-[0] dark:saturate-[0%] dark:invert-[100%] dark:hue-rotate-[0deg] dark:contrast-[180%]' />
          <input type="text" placeholder='Search for a country...' name="Country"
            className='dark:bg-dark-blue bg-white dark:placeholder:text-white placeholder-light-mode-input w-full'
            value={inputText} onChange={(e) => handleOnChangeInput(e.target.value)} />
        </div>
        <select name="region" className='dark:bg-dark-blue px-4 w-48 h-12 text-center drop-shadow-md rounded-lg' onChange={(e) => handleUpdateRegion(e.currentTarget.value)}>
          <option value=''>Filter By Region</option>
          <option value={REGION.AFRICA} >Africa</option>
          <option value={REGION.AMERICAS}>America</option>
          <option value={REGION.ASIA} >Asia</option>
          <option value={REGION.EUROPE} >Europe</option>
          <option value={REGION.OCEANIA} >Oceania</option>
        </select>
      </div>
      <div className='flex flex-col items-center  sm:grid sm:grid-cols-[repeat(auto-fill,16rem)] sm:gap-x-4 sm:justify-between'>
        {countries.map((element, index) =>
          <Country key={index}
            flags={element.flags}
            name={element.name.common}
            population={element.population}
            region={element.region}
            capital={element.capital} />)}
      </div>
    </main>

  )
}


// 300 600 800