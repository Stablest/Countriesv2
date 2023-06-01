'use client'

import { Border } from "@/components/Border"
import { Pair } from "@/components/Pair"
import { Template } from "@/components/Template"

const Page = () => {
    return (
        <Template>
            <main className="px-8 h-[200vh]">
                <a href="/" className="flex justify-center items-center gap-x-4 bg-white w-32 h-12 rounded-sm my-8 drop-shadow-md">
                    <img src="./arrow-left.svg" alt="Left arrow" className="w-6" />
                    <div>Back</div>
                </a>
                <img src="https://flagcdn.com/w320/be.png" alt="Flag of" className="my-12 mt-16 max-w-xl w-full" />
                <div className="text-xl font-extrabold my-6">Belgium</div>
                <div className="flex flex-col gap-y-8">
                    <div className="flex flex-col gap-y-2">
                        <Pair title="Native Name:">Belgie</Pair>
                        <Pair title="Population:">11,319,511</Pair>
                        <Pair title="Region:">Europe</Pair>
                        <Pair title="Sub Region:">Western Europe</Pair>
                        <Pair title="Capital:">Brussels</Pair>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Pair title="Top Level Domain:">.be</Pair>
                        <Pair title="Currencies:">Euro</Pair>
                        <Pair title="Languages:">Dutch, French, German</Pair>
                    </div>
                </div>
                <div className="font-semibold mt-8 my-4">Border Countries:</div>
                <div className="flex flex-wrap">
                    <Border>Teste</Border>
                </div>
            </main>
        </Template>
    )
}

export default Page 