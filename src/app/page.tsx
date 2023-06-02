'use client'

import { Country } from '@/components/Country'
import { Template } from '@/components/Template'
import { REGION } from '@/utils/const/enums/region'
import { URL } from '@/utils/const/enums/url'
import { CountryType } from '@/utils/interfaces/CountryTypes'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const allCountries = useRef<CountryType[]>([])
  const [countries, setCountries] = useState<CountryType[]>([])
  const [region, setRegion] = useState<string>(REGION.ALL)
  const [inputText, setInputText] = useState<string>('')

  const handleOnChangeSelect = (newRegion: string) => {
    setInputText('')
    if (newRegion.length === 0) {
      setCountries(allCountries.current)
      return setRegion(REGION.ALL)
    }
    const newCountries: CountryType[] = []
    allCountries.current.forEach((element: CountryType) => {
      if (element.region === newRegion)
        newCountries.push(element)
    })
    setCountries(newCountries)
    setRegion(newRegion)
  }

  const handleOnChangeInput = (text: string | null) => {
    if (!text) {
      handleOnChangeSelect(region)
      return setInputText('')
    }
    const newCountries: CountryType[] = []
    allCountries.current.forEach((element: CountryType) => {
      if (element.name.common.toLowerCase().startsWith(text.toLowerCase()))
        newCountries.push(element)
    })
    setInputText(text)
    setCountries(newCountries)
  }

  useEffect(() => {
    try {
      fetch(URL.ALL).then(res => {
        return res.json()
      }).then(data => {
        setCountries([...data])
        allCountries.current = [...data]
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <main className='px-4'>
      <div className='flex items-center px-8 gap-x-4 bg-white drop-shadow-sm h-12 rounded-lg my-8'>
        <img src="./magnifier.svg" alt="magnifier" className='w-5 h-5' />
        <input type="text" placeholder='Search for a country...' name="Country" id="" className='bg-white placeholder-light-mode-input' value={inputText} onChange={(e) => handleOnChangeInput(e.target.value)} />
      </div>
      <select name="region" id="" className='px-4 w-48 h-12 text-center drop-shadow-sm rounded-lg' onChange={(e) => handleOnChangeSelect(e.currentTarget.value)}>
        <option value=''>Filter By Region</option>
        <option value={REGION.AFRICA} >Africa</option>
        <option value={REGION.AMERICAS}>America</option>
        <option value={REGION.ASIA} >Asia</option>
        <option value={REGION.EUROPE} >Europe</option>
        <option value={REGION.OCEANIA} >Oceania</option>
      </select>
      <div className='flex flex-col items-center'>
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