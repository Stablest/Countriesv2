'use client'

import { Country } from '@/components/Country'
import { Template } from '@/components/Template'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [countries, setCountries] = useState<string[]>(['', '', '', ''])

  return (
    <Template>
      <main className='px-4'>
        <div className='flex items-center px-8 gap-x-4 bg-white drop-shadow-sm h-12 rounded-lg my-8'>
          <img src="./magnifier.svg" alt="magnifier" className='w-5 h-5' />
          <input type="text" placeholder='Search for a country...' name="" id="" className='bg-white placeholder-light-mode-input' />
        </div>
        <select name="region" id="" className='px-4 w-48 h-12 text-center drop-shadow-sm rounded-lg'>
          <option value="" hidden>Filter By Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value='asia'>Asia</option>
          <option value='europe'>Europe</option>
          <option value='oceania'>Oceania</option>
        </select>
        <div className='flex flex-col items-center'>
          {countries.map((element, index) =>
            <Country key={index}
              flags={['https://flagcdn.com/de.svg', 'https://flagcdn.com/w320/de.png']}
              name='Germany'
              population={16656661}
              region='Europe'
              capital='Berlin' />)}
        </div>
      </main>
    </Template>
  )
}


// 300 600 800